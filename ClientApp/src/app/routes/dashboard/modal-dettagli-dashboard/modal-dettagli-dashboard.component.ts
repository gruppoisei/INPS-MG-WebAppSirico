import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { StorageService } from '@shared';
import { BachecaDTO, MessaggiService } from '@shared/services/messaggi.service';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';

@Component({
  selector: 'app-modal-dettagli-dashboard',
  templateUrl: './modal-dettagli-dashboard.component.html',
  styleUrls: ['./modal-dettagli-dashboard.component.scss']
})
export class ModalDettagliDashboardComponent implements OnInit, OnDestroy {

  readonly ruoloAmministratore = 'P12689';
  readonly ruoloCentraleAmministrativoDCO = 'P12690';
  data: BachecaDTO | null | undefined;
  nomeBottone: string = '';
  disableElimina: boolean = false;
  messaggioAttivo!: boolean;
  disableButton: boolean = false;

  form = this.formBuilder.group({
    oggettoMessaggio: ['', [Validators.required, Validators.maxLength(50)]],
    contenutoMessaggio: ['', [Validators.required, Validators.maxLength(2000)]],
  });

  errorMessage: string = "";

  constructor(
    private messaggiService: MessaggiService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.enableDisableForms();
    this.checkMessaggioValue();
    this.checkRoles()
  }

  ngOnDestroy(): void {
    this.disableElimina = false;
  }

  checkRoles() {
    const allRoles = this.storageService.getItem('allroles').toString().trim();

    if (allRoles.includes(this.ruoloAmministratore) || allRoles.includes(this.ruoloCentraleAmministrativoDCO)) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }


  enableDisableForms(){
    this.messaggioAttivo = this.messaggiService.statoMessaggio$.value;

    if (this.messaggioAttivo == true) {
      this.form.controls['oggettoMessaggio'].enable();
      this.form.controls['contenutoMessaggio'].enable();
    }
    else {
      this.form.controls['oggettoMessaggio'].disable();
      this.form.controls['contenutoMessaggio'].disable();
    }
  }

  checkMessaggioValue() {
    const data = this.messaggiService.datiMessaggio$.value;

    // se l'observable ha 0 sto facendo un inserimento
    if (data == 0) {
      this.disableElimina = true;
      this.nomeBottone = 'Crea Nuovo';
    }
    else {
      this.data = data;
      this.nomeBottone = 'Modifica';
      this.form.patchValue({
        oggettoMessaggio: this.data?.oggetto.trim(),
        contenutoMessaggio: this.data?.messaggio.trim()
      });
    }
  }

  modifica() {
   if (this.form.invalid) {
      const oggettoError = this.form.get('oggettoMessaggio')?.errors;
      const messaggioError = this.form.get('contenutoMessaggio')?.errors;

      if (oggettoError?.required) {
        return this.openErrorDialog("Errore:", "L'oggetto del messaggio è obbligatorio.");
      }
      if (messaggioError?.required) {
        return this.openErrorDialog("Errore:", "Il contenuto del messaggio è obbligatorio.");
      }
      if (oggettoError?.maxlength) {
        return this.openErrorDialog("Errore:", "L'oggetto del messaggio non può superare i 50 caratteri.");
      }
      if (messaggioError?.maxlength) {
        return this.openErrorDialog("Errore:", "Il contenuto del messaggio non può superare i 2000 caratteri.");
      }
      // Se ci sono altri errori, mostra un messaggio generico
      return this.openErrorDialog("Errore:", "Verificare i dati inseriti.");
    }
    this.modificaMessaggio();
  }

  async modificaMessaggio() {

    const idMessaggio = this.data?.id;
    const oggettoMessaggio = this.form.get('oggettoMessaggio')?.value.trim();
    const contenutoMessaggio = this.form.get('contenutoMessaggio')?.value.trim();
    const matricolaUtente = this.storageService.getItem('matricola').toString().trim();

    // id messaggio esistente: UPDATE
    if (idMessaggio) {
      try {
        this.messaggiService.updateMessaggio(idMessaggio,oggettoMessaggio,contenutoMessaggio).subscribe();
        this.messaggiService.datiMessaggio$.next(null);
      }
      catch (error) {
        this.errorMessage = "Errore durante l'aggiornamento del messaggio.";
      }
    }
    // id messaggio assente: INSERT
    else {
      try {
        this.messaggiService.insertMessaggio(oggettoMessaggio,contenutoMessaggio,matricolaUtente).subscribe();
        this.messaggiService.datiMessaggio$.next(null);
      }
      catch (error) {
        this.errorMessage = "Errore durante l'inserimento del messaggio.";
      }
    }
    this.closeDialog();
  }

  async disattivaMessaggio() {
    const idMessaggio = this.data?.id;

    if (idMessaggio) {
      try {
        this.messaggiService.disattivaMessaggioAttivo(idMessaggio).subscribe();
        this.messaggiService.datiMessaggio$.next(null);
        this.closeDialog();
      }
      catch (error) {
        this.errorMessage = 'Errore durante la disattivazione del messaggio.';
      }

    }
    else {
      this.errorMessage = "Impossibile disattivare il messaggio: id messaggio non trovato!";
      // console.error("Impossibile disattivare il messaggio: id messaggio non trovato!");
    }
  }

  async riattivaMessaggio() {
    const idMessaggio = this.data?.id;

    if (idMessaggio) {
      try {
        this.messaggiService.riattivaMessaggioDisattivato(idMessaggio).subscribe();
        this.messaggiService.datiMessaggio$.next(null);
        this.closeDialog();
      }
      catch (error) {
        this.errorMessage = 'Errore durante la riattivazione del messaggio.';
      }

    }
    else {
      this.errorMessage = "Impossibile riattivare il messaggio: id messaggio non trovato!";
      // console.error("Impossibile riattivare il messaggio: id messaggio non trovato!");
    }
  }

  openErrorDialog(titolo: string, message: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { titolo: titolo, message: message },
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}
