import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { TipoComunicazione } from '@shared/models/tipo-comunicazione.model';
import { TipiComunicazioneService } from '@shared/services/tipi-comunicazione.service';
import { Ruoli } from '@shared/models/ruolo.model';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-comunicazione-nuova',
  templateUrl: './comunicazione-nuova.component.html',
  styleUrls: ['./comunicazione-nuova.component.scss']
})
export class ComunicazioneNuovaComponent implements OnInit {
  isOggettoFocused: boolean = false;
  isSubmitting: boolean = false;
  allRolesSelected: boolean = false
  listaTipiComunicazione: TipoComunicazione[] = [];
  ruoliList: Ruoli[] = [
    { codice: 'P12689', nome: 'Amministratore'},
    { codice: 'P12800', nome: 'Operatore Centrale'},
    { codice: 'P12690', nome: 'Referente Centrale'},
    { codice: 'P12801', nome: 'Referente Territoriale'},
    { codice: 'P12799', nome: 'Referente Regionale'}
  ];
  comunicazione: Comunicazioni = new Comunicazioni();
  ruoloComunic = new RuoliComunicazioni();
  today: Date =  new Date();

  constructor(private formBuilder: FormBuilder,private comunicazioneSrv: ComunicazioniService,
    private tipiComunicazioneSrv: TipiComunicazioneService, private ruoloComunicazioneSrv: RuoloComunicazioneService,
    private snackBar: MatSnackBar,public dialogRef: MatDialogRef<ComunicazioneNuovaComponent>) {
    }

  form1 = this.formBuilder.group({
    inputOggetto: ['', [Validators.required, Validators.maxLength(250)]],
    inputTipo: ['', Validators.required],
    inputMessaggio: ['', Validators.required],
    validitaDal: [null, Validators.required],
    validitaAl: [null, Validators.required],
    selectedRole:[[], Validators.required]
  });

  ngOnInit(): void {
    this.getTipiComunicazione();

    if (this.form1.get('inputOggetto')?.value) {
      this.isOggettoFocused = false;
    }
  }

  salvaComunicazione() {
    this.isSubmitting = true;
    this.comunicazione.oggetto = this.form1.value.inputOggetto;
    this.comunicazione.idTipoComunicazione = +this.form1.get('inputTipo')?.value;
    this.comunicazione.messaggio = this.form1.value.inputMessaggio;

    const validitaDal = moment(this.form1.value.validitaDal).startOf('day').format('YYYY-MM-DD');
    const validitaAl = moment(this.form1.value.validitaAl).startOf('day').format('YYYY-MM-DD');

    this.comunicazione.dataInizio = validitaDal;
    this.comunicazione.dataFine = validitaAl;

    // Inserimento della comunicazione
    this.comunicazioneSrv.newInserisciComunicazione(this.comunicazione).subscribe(
      data => {
        const ruoliComunicazioniArray = this.form1.value.selectedRole.map((role: any) => {
          return {
            idComunicazione: data.idComunicazione,
            ruolo: role
          };
        });

        // Inserimento dei ruoli associati alla comunicazione
        this.ruoloComunicazioneSrv.newInserisciRuoloComunicazione(ruoliComunicazioniArray).subscribe(
          () => {
            this.dialogRef.close();
            this.snackBar.open('Comunicazione inserita con successo!', 'Chiudi', { duration: 3000 });
            this.isSubmitting = false;
          },
          error => {
            console.error('Errore durante l\'inserimento dei ruoli comunicazione:', error);
            this.snackBar.open('Errore durante l\'inserimento dei ruoli comunicazione. Riprova.', 'Chiudi', { duration: 5000 });
            this.isSubmitting = false;
          }
        );
      },
      error => {
        // console.error('Errore durante l\'inserimento della comunicazione:', error);
        this.snackBar.open('Errore durante l\'inserimento della comunicazione. Riprova.', 'Chiudi', { duration: 5000 });
        this.isSubmitting = false;
      }
    );
  }


  getTipiComunicazione(){
    this.tipiComunicazioneSrv.getTipiComunicazioni().subscribe(data => {
      this.listaTipiComunicazione = data;
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

  onSelectionChange() {
    const selectedRoles = this.form1.get('selectedRole')!.value || [];
    this.allRolesSelected = selectedRoles.length === this.ruoliList.length;
  }
}
