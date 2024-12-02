  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, Validators } from '@angular/forms';
  import { MatDialog } from '@angular/material/dialog';
  import { UserService } from '@shared/services/user.service';
  import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';

  @Component({
    selector: 'app-lista-utenti-modifica',
    templateUrl: './lista-utenti-modifica.component.html',
    styleUrls: ['./lista-utenti-modifica.component.scss']
  })
  export class ListaUtentiModificaComponent implements OnInit {

    data: any;
    idTab!: number;
    listaEmail: string[] = [];
    emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form = this.formBuilder.group({
      emailField: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]],
    });

    constructor(
      private formBuilder: FormBuilder,
      public dialog: MatDialog,
      private utentiSrv: UserService
    ) { }

    ngOnInit(): void {
      this.data = this.utentiSrv.datiUtente$.value.row;
      this.idTab = this.utentiSrv.datiUtente$.value.selectedTab;
      // this.loadListaEmailUtenti(this.data.matricola);   // Trasmetto la matricola per raccogliere solo gli indirizzi email associati ad altri utenti

      // if (this.data.email != null && this.data.email != undefined && this.data.email.trim() != '') {
      //   this.form.patchValue({
      //     emailField: this.data.email.trim()
      //   });
      // }
    }

    // loadListaEmailUtenti(matricola: string) {
    //   this.utentiSrv.getAllEmailUtenti(matricola).subscribe((result: string[]) => {
    //     this.listaEmail = result;
    //   });
    // }

    // modifica() {
    //   // Verifica se il form è valido
    //   if (this.form.invalid) {
    //     const errors = this.form.get('emailField')?.errors;

    //     if (errors?.required) {
    //       return this.openErrorDialog("Errore:", "L'indirizzo email è obbligatorio.");
    //     }

    //     if (errors?.maxlength) {
    //       return this.openErrorDialog("Errore:", "L'indirizzo email non può superare i 50 caratteri.");
    //     }

    //     if (errors?.pattern) {
    //       return this.openErrorDialog("Errore:", "Inserire un indirizzo email valido.");
    //     }

    //     // Se ci sono altri errori, mostra un messaggio generico
    //     return this.openErrorDialog("Errore:", "Verificare i dati inseriti.");
    //   }

    //   const emailFieldTrimmed = this.form.value.emailField.trim();

    //   // Verifica se l'email è già presente nella lista
    //   if (this.listaEmail.includes(emailFieldTrimmed)) {
    //     return this.openErrorDialog("Errore:", "L'indirizzo e-mail inserito è già associato a un altro utente.");
    //   }

    //   // Procedi con l'aggiornamento dell'utente
    //   this.aggiornaUtente(emailFieldTrimmed);
    // }

    // aggiornaUtente(email: string) {
    //   this.utentiSrv.updateEmailUtente(this.data.matricola, email).subscribe();
    //   this.utentiSrv.datiUtente$.next(null);
    //   this.closeDialog();
    // }

    showField(valueToDisplay: string) {
      if (valueToDisplay == null || valueToDisplay == undefined || valueToDisplay == '' || valueToDisplay.trim() == "") {
        return '-';
      }    
      return valueToDisplay;
    }

    // openErrorDialog(titolo: string, message: string): void {
    //   this.dialog.open(PopupErroreInserimentoComponent, {
    //     data: { titolo: titolo, message: message },
    //   });
    // }

    closeDialog() {
      this.dialog.closeAll();
    }

  }