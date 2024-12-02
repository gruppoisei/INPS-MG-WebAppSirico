import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import { DialogData } from '../rilevazioni-gestione/step4-rilevazione/dialog-note/dialog-note.component';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StorageService } from '@shared';
import { salvaDettagliASDTO } from '@shared/interfaces/salvaDettagliASDTO';
import { Aspetto, StepperService } from '@shared/services/stepper.service';
import { AspettoProdotti } from '@shared/interfaces/aspettoProdotti';
import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { InfoFile } from '@shared/interfaces/infoFile';
import { DocumentiService } from '@shared/services/documenti.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
// import { DialogData } from 'app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component';

@Component({
  selector: 'app-modal-risolvi',
  templateUrl: './modal-risolvi.component.html',
  styleUrls: ['./modal-risolvi.component.scss']
})
export class ModalRisolviComponent implements OnInit{

  datiAspetto: AspettoProdotti[] = [];
  aspetto: AspettoProdotti[] = [];
  messaggioDR : string = 'Nessuna integrazione da parte del DR';
  messaggioDC : string = 'Nessuna integrazione da parte del DC';

  idSegnalazione : number = 0;
  showGestioneFileAspetto = false;
  isFileAspetto = false;
  fileAspetto: File | null = null;
  dataFileSegnalazione: InfoFile[] = [];
  listaAspettiAggiunti: Aspetto[] = [];
  nomiFileAspetti: {idAspetto: number, fileName: string}[] = []
  fileSegnalazione: File | null = null
  isUploading = false;
  uploadProgress = 0;
  ruoloRegionale: string = 'P12799';
  ruoloProvinciale: string = 'P12801';
  ruoloAmministrativo: string = 'P12690';

  private readonly validRoles: string[] = [
    'P12689',
    'P12690',
    'P12800',
    'P12801',
    'P12799'
  ];

  nomeSettoreMateria: string | undefined = '';
  nomeAreaProdotto: string | undefined = '';
  nomeSede: string | string | undefined = '';
  sedeId: number | undefined = 0;
  dataInvio: string | undefined = '';
  statoSegnalazione: number | undefined = 0;
  addButton: boolean = false;
  isRegionaleAbilitato: boolean = false

  idAspettoSegnalazione : number = 0;
  idStatoSalvataggioSegnalazione: number | undefined = 0 ;
  displayedColumns: string[] = ['criticita', 'suggerimento', 'integrazioneDR', 'integrazioneDC'];
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
    @Inject(MAT_DIALOG_DATA) public data: any[], private dialogRef: MatDialogRef<ModalRisolviComponent>,
    private rilevazioniService: RilevazioneService, private storageService: StorageService,
    private formBuilder: FormBuilder, private stepperService: StepperService,
    private aspProdottiService: AspettiprodottiService, private territorioService: TerritorioService,private documentiService: DocumentiService
  ) {}

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
    this.idStatoSalvataggioSegnalazione = this.stepperService.datiSegnalazioneProdotto$.value?.statoId;
    this.nomeSettoreMateria = this.stepperService.datiSegnalazioneProdotto$.value?.settoreMateria;
    this.nomeAreaProdotto = this.stepperService.datiSegnalazioneProdotto$.value?.areaProdotto;
    this.nomeSede = this.stepperService.datiSegnalazioneProdotto$.value?.sede;
    this.sedeId = this.stepperService.datiSegnalazioneProdotto$.value?.sedeId;
    this.dataInvio = this.stepperService.datiSegnalazioneProdotto$.value?.data1;
    this.statoSegnalazione = this.stepperService.datiSegnalazioneProdotto$.value?.statoId;
    if (this.ruolo!.split(';').map(ruolo => ruolo.trim()).includes("P12799")){
      if(this.nomeSede)
        this.territorioService.verificaSediIntegrazioneRegionale(this.nomeSede, codSediUtente).subscribe({
          next: (res) =>
            this.isRegionaleAbilitato = res.risultato
        });
    }

    this.rilevazioniService.getDettagliAspettoSegnalazioneById(this.idAspettoSegnalazione).subscribe({
      next: (aspettoSegnalazioni: any) => {
        this.datiAspetto.push(aspettoSegnalazioni)
        this.aspetto = this.datiAspetto;
        this.aspetto.forEach(aspetto => {
          this.form1.patchValue({
            readOnlyNoteDR: aspetto.integrazioneDR,
            readOnlyNoteDC: aspetto.integrazioneDC,
            criticita: aspetto.criticita,
            suggerimento: aspetto.suggerimento
          });
        });
        const ruolo = this.selectRole();
        if(this.datiAspetto[0].idAspetto){
          this.documentiService.findAllegatoAspetto(this.idSegnalazione, this.datiAspetto[0].idAspetto, ruolo ,"Prodotto").subscribe({
            next:(res) =>{
              this.isFileAspetto = res.esito;
            }
          });
        }
      }
    });
  }

  submitIntegrazioneStato(){
    let statoSegnalazione: number = 3
    const inputNoteDR = this.form1.controls['inputNoteDR'].value;
    const inputNoteDC = this.form1.controls['inputNoteDC'].value;

      if (this.isBlank(inputNoteDR) && this.isBlank(inputNoteDC)) {
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
      statoSegnalazione = 4
    else if(inputNoteDR !== null && inputNoteDC !== null)
      statoSegnalazione = 4;
    this.rilevazioniService.updateIntegrazioni(integrazioni, this.storageService.getItem('matricola'), statoSegnalazione).subscribe({
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
    const idAspetto = this.aspetto[0].idAspetto;
    this.aspProdottiService.confermaAspetto(idAspetto).subscribe(
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

  toggleAllegatiAspetto() {
    if (!this.isFileAspetto) {
      this.showGestioneFileAspetto = !this.showGestioneFileAspetto;
    } else {
      this.showGestioneFileAspetto = true; // Manteniamo il pannello aperto
    }
  }

  onFilesAddedAspetto(file: File) {
    this.fileAspetto = file;
  }

    allegaFileAspetto() {
      if (!this.fileAspetto) {
        alert("Seleziona un file prima di allegare");
        return;
      }
      this.isUploading = true;
      const ruolo = this.selectRole();
      this.documentiService.allegaFileAspetto(this.idSegnalazione, this.datiAspetto[0].idAspetto, "Prodotto", ruolo, this.fileAspetto).subscribe({
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
}
