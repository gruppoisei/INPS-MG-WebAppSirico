import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comunicazione } from '@shared/models/comunicazione.model';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { TipoComunicazione } from '@shared/models/tipo-comunicazione.model';
import { TipiComunicazioneService } from '@shared/services/tipi-comunicazione.service';
import { Ruolo, Ruoli } from '@shared/models/ruolo.model';
import { RuoloService } from '@shared/services/ruolo.service';
import { RuoloComunicazione } from '@shared/models/ruolo-comunicazione.model';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { forkJoin } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { MatListOption } from '@angular/material/list';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import * as moment from 'moment';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

export interface DialogData {
  id: number
}

@Component({
  selector: 'app-comunicazione-aggiorna',
  templateUrl: './comunicazione-aggiorna.component.html',
  styleUrls: ['./comunicazione-aggiorna.component.scss']
})

export class ComunicazioneAggiornaComponent implements OnInit {
  isOggettoFocused: boolean = false;
  isSubmitting: boolean = false;
  listaTipiComunicazione: TipoComunicazione[] = [];
  comunicazione: Comunicazioni = new Comunicazioni();
  ruolo: Ruolo = new Ruolo();
  ruoliList: Ruoli[] = [
    { codice: 'P12689', nome: 'Amministratore'},
    { codice: 'P12800', nome: 'Operatore Centrale'},
    { codice: 'P12690', nome: 'Referente Centrale'},
    { codice: 'P12801', nome: 'Referente Territoriale'},
    { codice: 'P12799', nome: 'Referente Regionale'}
  ];
  ruoliComunicazione: RuoliComunicazioni[] = [];    //ruoli associati alla comunicazione letti dal db
  ruoliModificati: boolean = false;
  ruoloSelezionato: boolean = true;
  idComunicazione: number = 0;
  buttonClicked = '';
  deleteButton = false;
  allRolesSelected: boolean = false;

  snackBarQueue: { message: string, action: string, duration: number }[] = [];
  snackBarRef: MatSnackBarRef<any> | null = null;

  constructor(private formBuilder: FormBuilder, private comunicazioneSrv: ComunicazioniService,
    private tipiComunicazioneSrv: TipiComunicazioneService, private ruoloComunicazioneSrv: RuoloComunicazioneService,
    public dialogRef: MatDialogRef<ComunicazioneAggiornaComponent>, public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private snackBar: MatSnackBar) { }

    form1 = this.formBuilder.group({
      inputOggetto: ['', [Validators.required, Validators.maxLength(250)]],
      inputTipo: ['', Validators.required],
      inputMessaggio: ['', Validators.required],
      validitaDal: ['', Validators.required],
      validitaAl: ['', Validators.required],
      selectedRole:[''],
    });

  ngOnInit(): void {
    this.idComunicazione = <any>this.data as number;
    this.loadData();

    if (this.form1.get('inputOggetto')?.value) {
      this.isOggettoFocused = false;
    }
  }

  loadData() {
    let tipiComunicazione = this.tipiComunicazioneSrv.getTipiComunicazioni();
    let comunicazione = this.comunicazioneSrv.newGetComunicazioneById(this.idComunicazione);
    let ruoloComunicazione = this.ruoloComunicazioneSrv.newGetRuoliByComunicazioneId(this.idComunicazione);

    forkJoin([tipiComunicazione, comunicazione, ruoloComunicazione]).subscribe({
        next: (results) => {
          this.listaTipiComunicazione = results[0];
          this.comunicazione = results[1];
          this.ruoliComunicazione = results[2];
          this.form1.controls["inputOggetto"].setValue(this.comunicazione.oggetto);
          if (this.comunicazione.idTipoComunicazione){
            this.form1.controls["inputTipo"].setValue(this.comunicazione.idTipoComunicazione);
          }
          this.form1.controls["inputMessaggio"].setValue(this.comunicazione.messaggio);
          this.form1.controls["validitaDal"].setValue(formatDate(this.comunicazione.dataInizio, 'yyyy-MM-dd', 'en-US'));
          this.form1.controls["validitaAl"].setValue(formatDate(this.comunicazione.dataFine, 'yyyy-MM-dd', 'en-US'));
        },
        error: (e: HttpErrorResponse) => {
            console.error(e);
        },
    });
  }

  isChecked(cod: string): boolean {
    const exists = this.ruoliComunicazione.some(x => x.ruolo.includes(cod));
    return exists;
  }

  onSelectionChange(options: MatListOption[]) {
    //serve per capire se è stata modificata la selezione: se non è stata modificata in fase di salvataggio non effettuo le verifiche dei ruoli
    //questo perchè se non veniva modificata la selezione non veniva riportata la situazione iniziale (probabile bug) e quindi erano cancellati tutti i ruoli
    const selectedRoles = this.form1.get('selectedRole')!.value || [];
    this.allRolesSelected = selectedRoles.length === this.ruoliList.length;
    this.ruoliModificati = true;

    if (options.length == 0){
      this.ruoloSelezionato = false;
    }
  }

  showSnackBar(message: string, action: string, duration: number = 3000) {
    this.snackBarQueue.push({ message, action, duration });

    if (!this.snackBarRef) {
      this.openNextSnackBar();
    }
  }

  openNextSnackBar() {
    if (this.snackBarQueue.length > 0) {
      const { message, action, duration } = this.snackBarQueue.shift()!;
      this.snackBarRef = this.snackBar.open(message, action, { duration });

      this.snackBarRef.afterDismissed().subscribe(() => {
        this.snackBarRef = null;
        this.openNextSnackBar();
      });
    }
  }

  onSubmit() {
    this.isSubmitting = true;
    if (this.buttonClicked === 'modifica') {
      this.comunicazione.oggetto = this.form1.value.inputOggetto;
      this.comunicazione.idTipoComunicazione = +this.form1.get('inputTipo')?.value;
      this.comunicazione.messaggio = this.form1.value.inputMessaggio;

      const validitaDal = moment(this.form1.value.validitaDal).startOf('day').format('YYYY-MM-DD');
      const validitaAl = moment(this.form1.value.validitaAl).startOf('day').format('YYYY-MM-DD');

      this.comunicazione.dataInizio = validitaDal;
      this.comunicazione.dataFine = validitaAl;

      this.comunicazioneSrv.newAggiornaComunicazione(this.comunicazione).subscribe(
        data => {
          // Controlla se ci sono ruoli da aggiungere
          const ruoliDaAggiungere = this.form1.value.selectedRole.filter((ruolo: string) => {
            return !this.ruoliComunicazione.some(rc => rc.ruolo.includes(ruolo));
          });

          // Aggiungi ruoli se necessario
          if (ruoliDaAggiungere.length > 0) {
            const ruoliComunicazioneToAdd = ruoliDaAggiungere.map((role: string) => ({
              idComunicazione: data.idComunicazione,
              ruolo: role
            }));
            this.ruoloComunicazioneSrv.newInserisciRuoloComunicazione(ruoliComunicazioneToAdd).subscribe({
              next: () => {
                this.showSnackBar('Ruoli aggiunti con successo', 'Chiudi');
                this.isSubmitting = false;
              },
              error: (error) => {
                this.showSnackBar('Errore durante l\'aggiunta dei ruoli', 'Chiudi');
                console.error('Errore durante l\'aggiunta dei ruoli:', error);
                this.isSubmitting = false;
              }
            });
          }

          // Controlla se ci sono ruoli da rimuovere
          const ruoliDaRimuovere = this.ruoliComunicazione.filter(rc => {
            return !this.form1.value.selectedRole.includes(rc.ruolo);
          });

          // Prepara l'array di ruoli da rimuovere
          if (ruoliDaRimuovere.length > 0) {
            const ruoliComunicazioneToRemove = ruoliDaRimuovere.map((role: any) => ({
              idComunicazione: this.comunicazione.id,
              ruolo: role.ruolo
            }));

            this.ruoloComunicazioneSrv.newDeleteRuoliComunicazioni(ruoliComunicazioneToRemove).subscribe(
              () => {
                this.showSnackBar('Ruoli rimossi con successo', 'Chiudi');
              },
              error => {
                this.showSnackBar('Errore durante la rimozione dei ruoli', 'Chiudi');
                console.error('Errore durante la rimozione dei ruoli:', error);
              }
            );
          }

          // Chiudi la dialog e mostra un messaggio di successo per la comunicazione
          this.dialogRef.close();
          this.showSnackBar('Comunicazione aggiornata con successo', 'Chiudi');
        },
        error => {
          // Mostra un messaggio di errore in caso di fallimento dell'aggiornamento
          this.showSnackBar('Errore durante l\'aggiornamento della comunicazione', 'Chiudi');
          console.error('Errore durante l\'aggiornamento della comunicazione:', error);
        }
      );
      this.buttonClicked = '';
    }
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  clickDelete(){
    this.deleteButton = !this.deleteButton;
  }

  elimina(){
    this.delay(1);
        this.comunicazioneSrv.newDeleteComunicazione(this.comunicazione.id).subscribe(
          () => {
            this.dialogRef.close();
        });
  }

  toggleAllRoles(checked: boolean) {
    this.allRolesSelected = checked;
    if (checked) {
      const allRoles = this.ruoliList.map(ruolo => ruolo.codice);
      this.form1.get('selectedRole')!.setValue(allRoles);
    } else {
      this.form1.get('selectedRole')!.setValue([]);
    }
  }
}
