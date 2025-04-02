import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { AspettoProdotti } from '@shared/interfaces/aspettoProdotti';
// import { DialogData } from '../rilevazioni-gestione/step4-rilevazione/dialog-note/dialog-note.component';
import { StepperService } from '@shared/services/stepper.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StorageService } from '@shared';
import { ModalRisolviComponent } from '../modal-risolvi/modal-risolvi.component';
import { salvaDettagliASDTO } from '@shared/interfaces/salvaDettagliASDTO';
import { DocumentiService } from '@shared/services/documenti.service';
import { AspettoAllegato } from '@shared/interfaces/aspettoAllegato';
import { ApprovazioneService } from '@shared/services/approvazione.service';
import { InfoFile } from '@shared/interfaces/infoFile';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-modal-dettagil-gestione',
  templateUrl: './modal-dettagli-gestione.component.html',
  styleUrls: ['./modal-dettagli-gestione.component.scss']
})
export class ModalDettagliGestioneComponent implements OnInit {

  datiAspetto: AspettoProdotti[] = [];
  idAspetti: number[] = [];
  isAllegatoSegnalazione: boolean = false;
  allegatiAspetti: AspettoAllegato[] = [];
  canClose: boolean = false;
  isUploading = false;
  uploadProgress = 0;

  showGestioneFile = false;
  isFile = false;
  filesAspetti: { file: File; idAspetto: number }[] = [];
  fileSegnalazione: File | null = null;
  dataFileSegnalazione: InfoFile[] = [];
  ruoloRegionale: string = 'P12799';
  ruoloProvinciale: string = 'P12801';
  ruoloAmministrativo: string = 'P12690';
  isContenzioso: boolean = false;

  nomeSettoreMateria: string | undefined = '';
  nomeAreaProdotto: string | undefined = '';
  nomeSede: string | string | undefined = '';
  sedeId: number | undefined = 0;
  dataInvio: string | undefined = ''

  idSegnalazione : number = 0;
  idStatoSalvataggioSegnalazione: number | undefined = 0 ;
  displayedColumns: string[] = ['nomeAspetto', 'criticita', 'suggerimento', 'integrazioneDR', 'integrazioneDC', 'allegato'];
  ruolo: string = '';
  router: any;

  errorMessage: string = "";

  constructor( @Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<ModalDettagliGestioneComponent>,
  private rilevazioniService: RilevazioneService, private storageService: StorageService, private stepperService: StepperService,
  private dialog: MatDialog, private documentiService: DocumentiService, private approvazionesrv: ApprovazioneService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.idSegnalazione = <any>this.data as number;
    this.ruolo = this.storageService.getItem('allroles');
    this.idStatoSalvataggioSegnalazione = this.stepperService.datiSegnalazioneProdotto$.value?.statoId;
    this.nomeSettoreMateria = this.stepperService.datiSegnalazioneProdotto$.value?.settoreMateria;
    this.nomeAreaProdotto = this.stepperService.datiSegnalazioneProdotto$.value?.areaProdotto;
    this.nomeSede = this.stepperService.datiSegnalazioneProdotto$.value?.sede;
    this.sedeId = this.stepperService.datiSegnalazioneProdotto$.value?.sedeId;
    this.dataInvio = this.stepperService.datiSegnalazioneProdotto$.value?.data1;

    this.rilevazioniService.getDettagliSegnalazioneById(this.idSegnalazione).subscribe({
      next:(aspettoSegnalazioni: AspettoProdotti[])=>{
        this.datiAspetto = aspettoSegnalazioni;
        this.datiAspetto.forEach(aspetto =>{
          if(aspetto.idAspetto){
              this.idAspetti.push(aspetto.idAspetto);
            }
            const allRecordsHaveValues = this.datiAspetto.every(aspetto =>
              (aspetto.integrazioneDC !== null && aspetto.integrazioneDC.trim() !== '') ||
              (aspetto.integrazioneDR !== null && aspetto.integrazioneDR.trim() !== '')
            );
            if (allRecordsHaveValues) {
              this.canClose = true;
            } else {
              this.canClose = false;
            }
        });
        this.documentiService.findAllegatiAspetti(this.idSegnalazione, this.idAspetti, "Prodotto", "").subscribe({
          next: (res: AspettoAllegato[]) => {
            this.allegatiAspetti = res;
            this.datiAspetto.forEach(aspetto => {
              const isAllegato = this.allegatiAspetti.find(a => a.idAspetto === aspetto.idAspetto);
              if(isAllegato)
                aspetto.hasAllegato = isAllegato.esito;
            })
          }
        });
      }
    });
    this.documentiService.findAllegatoSegnalazione(this.idSegnalazione, '', "Prodotto").subscribe({
      next: (res) =>{
        this.isAllegatoSegnalazione = res.esito;
      },
      error: () => {
        this.isAllegatoSegnalazione = false;
      }
    });
    const ruolo = this.selectRole();
    this.documentiService.findAllegatoSegnalazione(this.idSegnalazione, ruolo, "Prodotto").subscribe({
      next: (res) => {
        this.isFile = res.esito;
      },
    });
  }

risolviSegnalazione(idStatoSalvataggio: number){
  const integrazioni: salvaDettagliASDTO[] = this.datiAspetto.map(aspetto =>{
    return{
      idAspettoSegnalazione: aspetto.idAspettoSegnalazione,
      integrazioneDR: null,
      integrazioneDC: null,
    };
  });
  this.rilevazioniService.updateIntegrazioni(integrazioni, this.storageService.getItem('matricola'), idStatoSalvataggio).subscribe({
    next:() => {
      this.approvazionesrv.checkRisolviSegnalazione$.next(true);
      this.dialogRef.close()
    },
    error:()=>{
      alert("Errore durante l'inserimento dell' integrazione o del cambio di stato della segnalazione")
    }
  });
}

  truncateText(text: string, limit: number): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  handleRowClick(idAspettoSegnalazione: number){
    this.dialogRef.close();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '75vw';
    dialogConfig.height = 'auto';
    dialogConfig.data =
     [
       idAspettoSegnalazione,
       this.idSegnalazione
     ];
    const dialogRef = this.dialog.open(ModalRisolviComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(()=>{
      const dialogRef2 = this.dialog.open(ModalDettagliGestioneComponent,{
        width: 'auto',
        height: 'auto',
        autoFocus: true,
        data: this.idSegnalazione
      });
      dialogRef2.afterClosed().subscribe(()=>{
        this.stepperService.dialogClosed$.next();
      })
    });
  }

  downloadFileAspetto(idAspetto: number){
    this.documentiService.getFileAspetti(this.idSegnalazione, idAspetto, "Prodotto", "").subscribe(response => {
      const contentDisposition = response.headers.get('content-disposition');
      const fileName = this.getFileNameFromContentDisposition(contentDisposition);

      const blob = response.body;
      const url = window.URL.createObjectURL(blob as (Blob | MediaSource));

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    });
  }

  downloadFileSegnalazione(){
    this.documentiService.getFileSegnalazione(this.idSegnalazione, "Prodotto", "").subscribe(response =>{
      const contentDisposition = response.headers.get('Content-Disposition');
      const fileName = this.getFileNameFromContentDisposition(contentDisposition);

      const blob = response.body;
      const url = window.URL.createObjectURL(blob as (Blob | MediaSource));

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(url);
    });
  }

  private getFileNameFromContentDisposition(contentDisposition: string | null): string {
    if (!contentDisposition) {
      return 'download';
    }

    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(contentDisposition);
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }

    const filenameStarRegex = /filename\*=UTF-8''(.*?)(?:;|$)/;
    const matchesStar = filenameStarRegex.exec(contentDisposition);
    if (matchesStar != null && matchesStar[1]) {
      return decodeURIComponent(matchesStar[1]);
    }

    return 'download';
  }

  toggleAllegati() {
    if (!this.isFile) {
      this.showGestioneFile = !this.showGestioneFile;
    } else {
      this.showGestioneFile = true; // Manteniamo il pannello aperto
    }
  }


    onFilesAdded(file: any) {
      this.fileSegnalazione = file;  // Associa il file selezionato
    }

  removeFileSegnalazione(file: any) {
    if (
      this.fileSegnalazione &&
      this.fileSegnalazione.name === file.name &&
      this.fileSegnalazione.size === file.size
    ) {
      this.fileSegnalazione = null;
      this.isFile = false;
    }
  }

  selectRole(): string {
    if (!this.ruolo) {
      // console.error('Il ruolo non è stato impostato correttamente.');
      this.errorMessage = 'Il ruolo non è stato impostato correttamente.';
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

  allegaFile() {
    if (!this.fileSegnalazione) {
      alert("Seleziona un file prima di allegare");
      return;
    }

    this.isUploading = true;
    const ruolo = this.selectRole();
    this.documentiService.allegaFileSegnalazione(this.idSegnalazione, ruolo, "Prodotto", this.fileSegnalazione).subscribe({
      next: (event: HttpEvent<any>) => {
        switch (event.type) {
          case HttpEventType.UploadProgress:
            if (event.total) {
              this.uploadProgress = Math.round(100 * (event.loaded / event.total));
            }
            break;
          case HttpEventType.Response:
            this.loadData();
            break;
        }
        this.showGestioneFile = false;
      },
      error: (err) => {
        alert('Errore durante l\'allegato del file');
        this.isUploading = false;  // Nasconde la progress bar in caso di errore
        // console.error(err);
      }
    });
  }
}