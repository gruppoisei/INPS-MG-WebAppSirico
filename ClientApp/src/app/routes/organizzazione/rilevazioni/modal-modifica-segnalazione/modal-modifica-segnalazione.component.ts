import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from '@shared';
import { AspettoProdotti } from '@shared/interfaces/aspettoProdotti';
import { AspettoAllegato } from '@shared/interfaces/aspettoAllegato';
import { DocumentiService } from '@shared/services/documenti.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StepperService } from '@shared/services/stepper.service';
import { firstValueFrom } from 'rxjs';
import { forkJoin } from 'rxjs';
import { ModalDettagliSegnalazioneComponent } from '../modal-dettagli-segnalazione/modal-dettagli-segnalazione.component';
import { segnalazioneProdotto } from '@shared/interfaces/segnalazioneProdotto';
import { segnalazioneContenzioso } from '@shared/interfaces/segnalazioneContenzioso';

@Component({
  selector: 'app-modal-modifica-segnalazione',
  templateUrl: './modal-modifica-segnalazione.component.html',
  styleUrls: ['./modal-modifica-segnalazione.component.scss']
})
export class ModalModificaSegnalazioneComponent implements OnInit, OnDestroy {

  titolo!: string;
  statoSegnalazione!: number;
  ruolo: string = '';
  segnalazioneProdotto!: segnalazioneProdotto;
  segnalazioneContenzioso!: segnalazioneContenzioso;
  listaAspettiAggiunti: AspettoProdotti[] = [];
  idAspetti: number[] = [];
  allegatiAspetti: AspettoAllegato[] = [];
  isAllegatoSegnalazione: boolean = false;

  data: segnalazioneProdotto[] = [];

  displayedColumns: string[] = [
    'nomeAspetto', 'descrizioneCriticita','descrizioneSuggerimento','allegato'
  ]


  constructor(private stepperService: StepperService,private dialog: MatDialog,
              private router: Router,private rilevazioneSrv: RilevazioneService,
              private documentiService: DocumentiService, private storageService: StorageService,
              private dialogRef: MatDialogRef<ModalModificaSegnalazioneComponent>) { }

  ngOnInit(): void {
    this.titolo = this.stepperService.inserimentoTipoSegnalazione$.value!;
    this.ruolo = this.storageService.getItem('allroles');
    this.loadDatiSegnalazione();
  }

  ngOnDestroy(): void {
    this.listaAspettiAggiunti = [];
  }

  loadDatiSegnalazione() {

    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (this.titolo) {

      case prodotto: {
        this.segnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value!;
        this.statoSegnalazione = this.segnalazioneProdotto.statoId;
        if(this.statoSegnalazione == 5 && (this.ruolo.includes('P12801') || this.ruolo.includes('P12689'))){
          this.displayedColumns.splice(3, 0, 'integrazioneDR', 'integrazioneDC');
        }
        this.data.push(this.segnalazioneProdotto);
        this.rilevazioneSrv
          .getDettagliSegnalazioneById(this.stepperService.datiSegnalazioneProdotto$.value!.id)
          .subscribe(
            (data: AspettoProdotti[]) => {
                this.listaAspettiAggiunti = data;
                this.listaAspettiAggiunti.forEach(aspetto =>{
                  if(aspetto.idAspetto){
                    this.idAspetti.push(aspetto.idAspetto)
                  }
                });
                this.documentiService.findAllegatiAspetti(this.segnalazioneProdotto.id, this.idAspetti, "Prodotto", "").subscribe({
                next: (res: AspettoAllegato[]) => {
                this.allegatiAspetti = res;
                this.listaAspettiAggiunti.forEach(aspetto => {
                  const isAllegato = this.allegatiAspetti.find(a => a.idAspetto === aspetto.idAspetto);
                  if (isAllegato) aspetto.hasAllegato = isAllegato.esito;
                });
              }
            });
            },
            error => {
              console.error('Errore durante la ricerca dei dettagli della segnalazione prodotto: ', error);
            }
          );
        this.documentiService.findAllegatoSegnalazione(this.segnalazioneProdotto.id, '', "Prodotto").subscribe({
          next: (res) => {
            this.isAllegatoSegnalazione = res.esito;
          }
        });

        break;
      }

      case contenzioso: {
        this.segnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value!;
        this.statoSegnalazione = this.segnalazioneContenzioso.statoId;
        if(this.statoSegnalazione == 5 && (this.ruolo.includes('P12801') || this.ruolo.includes('P12689'))){
          this.displayedColumns.splice(3, 0, 'integrazioneDR', 'integrazioneDC');
        }
        this.data.push(this.segnalazioneContenzioso);
        this.rilevazioneSrv
          .getDettagliSegnalazioneContenziosoById(this.stepperService.datiSegnalazioneContenzioso$.value!.id)
          .subscribe(
            (data: AspettoProdotti[]) => {
              this.listaAspettiAggiunti = data;
              this.listaAspettiAggiunti.forEach(aspetto =>{
                if(aspetto.idAspetto){
                  this.idAspetti.push(aspetto.idAspetto)
                }
              });
            this.documentiService.findAllegatiAspetti(this.segnalazioneContenzioso.id, this.idAspetti, "Contenzioso", "").subscribe({
              next: (res: AspettoAllegato[]) => {
                this.allegatiAspetti = res;
                this.listaAspettiAggiunti.forEach(aspetto => {
                  const isAllegato = this.allegatiAspetti.find(a => a.idAspetto === aspetto.idAspetto);
                  if (isAllegato) aspetto.hasAllegato = isAllegato.esito;
                });
              }
            });
            },
            error => {
              console.error('Errore durante la ricerca dei dettagli della segnalazione contenzioso: ', error);
            }
          );

          // Aggiungi questa parte per trovare l'allegato della segnalazione
        this.documentiService.findAllegatoSegnalazione(this.segnalazioneContenzioso.id, '', "Contenzioso").subscribe({
          next: (res) => {
            this.isAllegatoSegnalazione = res.esito;
          }
        });

        break;
      }
    }
  }

  modifyDialogStepperModifica() {
    this.router.navigate(['/segnalazione/inserimento/nuova']);
    this.closeDialogStepperModifica();
  }

  async deleteDialogStepperModifica() {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch(this.titolo) {
      case prodotto: {
        forkJoin([
          this.rilevazioneSrv.deleteSegnalazione(this.titolo, this.segnalazioneProdotto.id),
          this.documentiService.deleteAllFileSegnalazione(this.segnalazioneProdotto.id, this.titolo)
        ]).subscribe({
          next: ([]) => {
          },
          error: (err) => {
            console.error('Errore durante l\'eliminazione:', err);
          },
          complete: () => {
            // console.log('Eliminazione completata con successo.');
          }
        });
        break;
      }
      case contenzioso: {
        forkJoin([
          this.rilevazioneSrv.deleteSegnalazione(this.titolo, this.segnalazioneContenzioso.id),
          this.documentiService.deleteAllFileSegnalazione(this.segnalazioneContenzioso.id, this.titolo)
        ]).subscribe({
          next: ([]) => {
          },
          error: (err) => {
            console.error('Errore durante l\'eliminazione:', err);
          },
          complete: () => {
            // console.log('Eliminazione completata con successo.');
          }
        });
        break;
      }
    }

    this.closeDialogStepperModifica();
  }



  sendDialogStepperModifica() {
    if (this.titolo == 'Prodotto') {

      this.rilevazioneSrv.sendSegnalazione(this.titolo, this.segnalazioneProdotto.id, this.segnalazioneProdotto.statoId).subscribe( (response: any) => {
      });
    }
    else {
      this.rilevazioneSrv.sendSegnalazione(this.titolo, this.segnalazioneContenzioso.id, this.segnalazioneContenzioso.statoId).subscribe( (response: any) => {
      });
    }
    this.closeDialogStepperModifica();
  }

  closeDialogStepperModifica() {
    this.dialog.closeAll();
  }

  showFieldStato(stato: number) {
    const statoMap: { [key: number]: string } = {
      1: '../../../../assets/images/yellow_status.png',
      2: '../../../../assets/images/green_status.png',
      3: '../../../../assets/images/green_status.png',
      4: '../../../../assets/images/attesadefi.png',
      5: '../../../../assets/images/attesadefi.png',
      6: '../../../../assets/images/attesadefi.png',
    };

    return statoMap[stato] || '../../../../assets/images/red_status.png';
  }

  showFieldInviata(inviata: boolean): string {
    if (inviata == true) {
      var output = 'Sì';
    }
    else {
      var output = 'No';
    }
    return output;
  }

  showFieldSede(codiceSede: number, nomeSede: string): string {
    if (
      codiceSede != null &&
      codiceSede != undefined &&
      codiceSede != Number('') &&
      nomeSede != null &&
      nomeSede != undefined &&
      nomeSede != ''
    ) {
      return codiceSede + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  showDescrizioneTroncata(descrizione: string | null | undefined): string {
    if (!!descrizione && descrizione.length > 23) {
      return descrizione.substring(0, 20) + '...';
    } else {
      return descrizione || 'N/A';
    }
  }

  openDettagli(idAspettoSegnalazione: number){
    if(this.ruolo.includes('P12689') || this.ruolo.includes('P12801') || this.ruolo.includes('P12799')){
      this.dialogRef.close();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '75vw';
      dialogConfig.height = 'auto';
      dialogConfig.data = idAspettoSegnalazione;
      const dialogRef = this.dialog.open(ModalDettagliSegnalazioneComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(()=>{
        const dialgoRef2 = this.dialog.open(ModalModificaSegnalazioneComponent,{
          autoFocus: true,
          width: 'auto',
          height: 'auto',
        });
      });
    }
    else
      return;
  }

  downloadFileSegnalazione() {
    const prodotto = "Prodotto";
    const contenzioso = "Contenzioso";

    switch(this.titolo){
      case prodotto:{
        this.documentiService.getFileSegnalazione(this.segnalazioneProdotto.id, this.titolo, "").subscribe(response =>{
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
        break;
      }
      case contenzioso: {
        this.documentiService.getFileSegnalazione(this.segnalazioneContenzioso.id, this.titolo, "").subscribe(response =>{
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
        break;
      }
    }
  }

  downloadFileAspetto(idAspetto: number){
    const prodotto = "Prodotto";
    const contenzioso = "Contenzioso";

    switch(this.titolo){
      case prodotto: {
        this.documentiService.getFileAspetti(this.segnalazioneProdotto.id, idAspetto, this.titolo, "").subscribe(response => {
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
        break;
      }
      case contenzioso: {
        this.documentiService.getFileAspetti(this.segnalazioneContenzioso.id, idAspetto, this.titolo, "").subscribe(response => {
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
        break;
      }
    }
  }

  getFileNameFromContentDisposition(contentDisposition: string | null): string {
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
}
