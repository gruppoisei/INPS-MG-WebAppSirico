import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProdottiService } from '@shared/services/prodotti.service';
import { StepperService } from '@shared/services/stepper.service';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';

@Component({
  selector: 'app-stepper-dialog-creazione-aspetto',
  templateUrl: './stepper-dialog-creazione-aspetto.component.html',
  styleUrls: ['./stepper-dialog-creazione-aspetto.component.scss']
})
export class StepperDialogCreazioneAspettoComponent implements OnInit {

  nomeNuovoAspetto: string = "";
  aspettiDaValutare: AspettoConDescrizione[] = [];

  constructor(
    private dialog: MatDialog,
    private stepperService: StepperService,
    private prodottiSrv: ProdottiService
  ) { }

  ngOnInit(): void {
    this.loadAspettiDaValutare();
  }

  loadAspettiDaValutare() {
    this.prodottiSrv.getAspettiEDescrizioni(this.stepperService.inserimentoTipoSegnalazione$.value!).subscribe(
      data => {
        data.forEach(item => {
          this.aspettiDaValutare.push({
            nomeAspetto: item.nome,
            idAspetto: item.id,
            descrizioneAspetto: item.descrizione,
          });
        });        
      });
  }

  confirmDialogStepperNuovoAspetto() {

    // verifico se il testo inserito dall'utente contiene SOLO spazi bianchi
    const esito = this.stepperService.checkStringOnlySpaces(this.nomeNuovoAspetto.trim());

    if (esito == true) {
      this.openErrorDialog("Inserire un nome aspetto valido per proseguire.");
      return;
    }

    // verifico che il testo inserito dall'utente non sia il nome 'altro'
    if (this.nomeNuovoAspetto.trim().toLowerCase() == "altro") {
      this.openErrorDialog("Nome aspetto non valido.");
      return;
    }

    for (let i = 0; i < this.aspettiDaValutare.length; i++) {

      if (this.nomeNuovoAspetto.trim().toLowerCase() == this.aspettiDaValutare[i].nomeAspetto.toLowerCase()) {
        this.openErrorDialog("Esiste già un aspetto standard con il nome inserito.");
        return;
      }

    }

    if (esito == false) {
      this.stepperService.nuovoAspetto$.next(this.nomeNuovoAspetto.trim());
      this.dialog.closeAll();
    }  
    
  }

  closeDialogStepperNuovoAspetto() {
    // if (confirm('Le modifiche effettuate non saranno salvate. Chiudere?')) {
      this.stepperService.nuovoAspetto$.next("");
      this.dialog.closeAll();
      // return true;
    // }
    // else return false;
  }

  openErrorDialog(message: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { message: message },
    });
  }  

}

interface AspettoConDescrizione {
  nomeAspetto: string;
  idAspetto: number;
  descrizioneAspetto: string;
}
