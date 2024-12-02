import { Component, Inject, OnInit } from '@angular/core';
import { AspettoProdotti } from '@shared/interfaces/aspettoProdotti';
// import { DialogData } from '../rilevazioni-gestione/step4-rilevazione/dialog-note/dialog-note.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { FormBuilder } from '@angular/forms';
import { Aspetto, StepperService } from '@shared/services/stepper.service';
import { StorageService } from '@shared';
import { salvaDettagliASDTO } from '@shared/interfaces/salvaDettagliASDTO';
import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { InfoFile } from '@shared/interfaces/infoFile';
import { DocumentiService } from '@shared/services/documenti.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-modal-risolvi-contenzioso',
  templateUrl: './modal-risolvi-contenzioso.component.html',
  styleUrls: ['./modal-risolvi-contenzioso.component.scss']
})
export class ModalRisolviContenziosoComponent implements OnInit {

  datiAspetto: AspettoProdotti[] = []
  aspettoContezioso: AspettoProdotti [] = [];
  messaggioDR : string = 'Nessuna integrazione da parte del DR';
  messaggioDC : string = 'Nessuna integrazione da parte del DC';

  isUploading = false;
  uploadProgress = 0;
  idSegnalazione : number = 0;
  showGestioneFileAspetto = false;
  isFileAspetto = false;
  fileAspetto: File | null = null;
  dataFileSegnalazione: InfoFile[] = [];
  fileColumns: string[] = ['fileName', 'fileSize', 'download', 'rimuovi'];
  listaAspettiAggiunti: Aspetto[] = [];
  nomiFileAspetti: {idAspetto: number, fileName: string}[] = []
  fileSegnalazione: File | null = null
  ruoloRegionale: string = 'P12799';
  ruoloProvinciale: string = 'P12801';
  ruoloAmministrativo: string = 'P12690';
  aspetto: AspettoProdotti[] = [];

  private readonly validRoles: string[] = [
    'P12689',
    'P12690',
    'P12800',
    'P12801',
    'P12799'
  ];

  dataInvio: string | undefined = '';
  nomeSettoreMateria: string | undefined = '';
  nomeAreaProdotto: string | undefined = '';
  nomeSede: string | string | undefined = '';
  sedeId: number | undefined = 0;
  nomeContenzioso: string | undefined = '';
  statoSegnalazione: number | undefined = 0;
  isRegionaleAbilitato: boolean = false;
  addButton: boolean = false;
  idAspettoSegnalazione: number = 0;
  idStatoSalvataggioSegnalazione: number | undefined = 0;
  displayedColumns: string[] = ['criticita', 'suggerimento', 'integrazioneDR', 'integrazioneDC']
  ruolo: string = '';
  sedi: { sedeCode: string, descSede: string, role: string }[] = [];
  errorMessage: string | null = null;

  form1 = this.formBuilder.group({
    criticita: [''],
    suggerimento: [''],
    inputNoteDR: [null],
    readOnlyNoteDR: [''],
    inputNoteDC: [null],
    readOnlyNoteDC: ['']
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any[],private dialogRef: MatDialogRef<ModalRisolviContenziosoComponent>,
    private rilevazioniService: RilevazioneService, private storageService: StorageService,
    private formBuilder: FormBuilder, private stepperService: StepperService,
    private aspProdottiService: AspettiprodottiService, private territorioService: TerritorioService, private documentiService: DocumentiService
  ) { }

  ngOnInit(): void {
    this.idAspettoSegnalazione = <any>this.data[0] as number;
    this.idSegnalazione = <any>this.data[1] as number;
    this.loadData();
  }

  loadData(){
    this.ruolo = this.storageService.getItem('allroles');
    const storedSedi = this.storageService.getItem('listaSedi') || '[]';
    if(Array.isArray(storedSedi))
      this.sedi = storedSedi
    const codSediUtente: string[] = this.sedi.map(item => item.sedeCode)
    this.idStatoSalvataggioSegnalazione = this.stepperService.datiSegnalazioneContenzioso$.value?.statoId
    this.nomeSettoreMateria = this.stepperService.datiSegnalazioneContenzioso$.value?.settoreMateria
    this.nomeAreaProdotto = this.stepperService.datiSegnalazioneContenzioso$.value?.areaProdotto
    this.nomeSede = this.stepperService.datiSegnalazioneContenzioso$.value?.sede
    this.sedeId = this.stepperService.datiSegnalazioneContenzioso$.value?.sedeId
    this.nomeContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value?.contenziosoDesc
    this.dataInvio = this.stepperService.datiSegnalazioneContenzioso$.value?.data1
    this.statoSegnalazione = this.stepperService.datiSegnalazioneContenzioso$.value?.statoId;
    if (this.ruolo!.split(';').map(ruolo => ruolo.trim()).includes("P12799")){
      if(this.nomeSede)
        this.territorioService.verificaSediIntegrazioneRegionale(this.nomeSede, codSediUtente).subscribe({
          next: (res) =>
            this.isRegionaleAbilitato = res.risultato
        });
    }
    this.rilevazioniService.getDettagliAspettoSegnalazioneContenziosoById(this.idAspettoSegnalazione).subscribe({
      next: (aspettoSegnalazioniContezioso: any)=> {
        this.datiAspetto.push(aspettoSegnalazioniContezioso);
        this.aspettoContezioso = this.datiAspetto;
        this.aspettoContezioso.forEach(aspetto =>{
          this.form1.patchValue({
            readOnlyNoteDR: aspetto.integrazioneDR,
            readOnlyNoteDC: aspetto.integrazioneDC,
            criticita: aspetto.criticita,
            suggerimento: aspetto.suggerimento
          });
        });
        const ruolo = this.selectRole();
        if(this.datiAspetto[0].idAspetto){
          this.documentiService.findAllegatoAspetto(this.idSegnalazione, this.datiAspetto[0].idAspetto, ruolo ,"Contenzioso").subscribe({
            next:(res) =>{
              this.isFileAspetto = res.esito;
            }
          });
        }
      }
    });
  }

submitIntegrazioneStato(){
  let statoSegnalazione: number = 0
  const inputNoteDR = this.form1.controls['inputNoteDR'].value;
  const inputNoteDC = this.form1.controls['inputNoteDC'].value;
  if(this.isBlank(inputNoteDR) && this.isBlank(inputNoteDC)){
    this.errorMessage = 'Errore: L\'integrazione non può essere vuota. Inserisci del testo prima di procedere.';
      return;
    }

  this.errorMessage = null;
  const integrazioni: salvaDettagliASDTO[] = this.datiAspetto.length > 0 ? [{
    idAspettoSegnalazione: this.datiAspetto[0].idAspettoSegnalazione,
    integrazioneDR: inputNoteDR,
    integrazioneDC: inputNoteDC
  }] : [];

  if(inputNoteDR === null && inputNoteDC !== null)
    statoSegnalazione = 3;
  else if (inputNoteDR !== null && inputNoteDC === null)
    statoSegnalazione = 4;
  else if(inputNoteDR !== null && inputNoteDC !== null)
    statoSegnalazione = 4;
  this.rilevazioniService.updateIntegrazioniContezioso(integrazioni, this.storageService.getItem('matricola'), statoSegnalazione).subscribe({
    next:() => {
        this.dialogRef.close()
      },
    error:()=>{
      alert("Errore durante l'inserimento dell' integrazione o del cambio di stato della segnalazione")
      }
    });
  }

    clickAdd(){
      this.addButton = !this.addButton;
    }

    aggiungiAspetto(){
      const idAspetto = this.aspettoContezioso[0].idAspetto;
      this.aspProdottiService.confermaAspettoContezioso(idAspetto).subscribe(
        ()=>{
          this.aspProdottiService.checkNuovoAspetto$.next(true);
          this.dialogRef.close()
      })
    }

    isBlank(value: string | null): boolean {
      return !value || !value.trim().length;
    }

    hasValidRole(ruolo: string): boolean {
      const ruoloArray = ruolo.split(';').map(r => r.trim());
      return this.validRoles.some(role => ruoloArray.includes(role));
    }

    getNomeFileAspetto(idAspetto: number): string | undefined {
      const fileInfo = this.nomiFileAspetti.find(file => file.idAspetto === idAspetto);
      return fileInfo ? fileInfo.fileName : undefined;
    }


    toggleAllegatiAspetto() {
      if (!this.isFileAspetto) {
        this.showGestioneFileAspetto = !this.showGestioneFileAspetto;
      } else {
        this.showGestioneFileAspetto = true;
      }
    }

    onFilesAddedAspetto(file: File) {
      this.fileAspetto = file;
    }

    removeFileAspetto(file: any) {
      if (
        this.fileAspetto &&
        this.fileAspetto.name === file.name &&
        this.fileAspetto.size === file.size
      ) {
        this.fileAspetto = null;
        this.isFileAspetto = false;
      }
    }

    allegaFileAspetto() {
      if (!this.fileAspetto) {
        alert("Seleziona un file prima di allegare");
        return;
      }
      this.isUploading = true;
      const ruolo = this.selectRole();
      this.documentiService.allegaFileAspetto(this.idSegnalazione, this.datiAspetto[0].idAspetto, "Contenzioso", ruolo, this.fileAspetto).subscribe({
        next:(event: HttpEvent<any>) =>{
          switch(event.type){
            case HttpEventType.UploadProgress:
              if(event.total){
                this.uploadProgress = Math.round(100 * (event.loaded / event.total));
              }
              break;
            case HttpEventType.Response:
              this.loadData();
              break;
          }
          this.showGestioneFileAspetto = false;
        },
        error: (err) => {
          alert('Errore durante l\'inserimento del file');
          this.isUploading = false;
          console.error(err);
        }
      });
    }

  selectRole(): string {
    if (!this.ruolo) {
      console.error('Il ruolo non è stato impostato correttamente.');
      return '';
    }

    if (this.ruolo.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloAmministrativo)){
      return this.ruoloAmministrativo;
    }

    else if (this.ruolo.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloRegionale)){
      return this.ruoloRegionale;
    }

    else if (this.ruolo.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloProvinciale)){
      return this.ruoloProvinciale;
    }

    else if (this.ruolo.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === 'P12689')){
      return 'P12689';
    }

    return '';
  }

    formatToSixDigits(value: any): string {
      const numberValue = Number(value);
      if (isNaN(numberValue)) {
        return '';
      }
      return numberValue.toString().padStart(6, '0');
    }
  }
