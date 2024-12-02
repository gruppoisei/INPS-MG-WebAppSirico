import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StorageService } from '@shared';
import { AspettoProdotti } from '@shared/interfaces/aspettoProdotti';
import { segnalazioneContenzioso } from '@shared/interfaces/segnalazioneContenzioso';
import { segnalazioneProdotto } from '@shared/interfaces/segnalazioneProdotto';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StepperService } from '@shared/services/stepper.service';
// import { DialogData } from 'app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component';

@Component({
  selector: 'app-modal-dettagli-segnalazione',
  templateUrl: './modal-dettagli-segnalazione.component.html',
  styleUrls: ['./modal-dettagli-segnalazione.component.scss']
})
export class ModalDettagliSegnalazioneComponent implements OnInit {

  datiAspetto: AspettoProdotti[] = [];
  aspetto: AspettoProdotti[] = [];
  nomeSettoreMateria: string | undefined = '';
  nomeAreaProdotto: string | undefined = '';
  nomeSede: string | string | undefined = '';
  nomeContenzioso: string | undefined = '';
  sedeId: number | undefined = 0;
  dataInvio: string | undefined = '';
  idAspettoSegnalazione : number = 0;
  idStatoSalvataggioSegnalazione: number | undefined = 0 ;
  displayedColumns: string[] = ['criticita', 'suggerimento'];
  ruolo: string = '';
  titolo!: string;
  segnalazioneProdotto!: segnalazioneProdotto;
  segnalazioneContenzioso!: segnalazioneContenzioso;


  form1 = this.formBuilder.group({
    criticita: [''],
    suggerimento: [''],
    readOnlyNoteDR: [''],
    readOnlyNoteDC: ['']
  });

  constructor(
     @Inject(MAT_DIALOG_DATA) public data: any, private storageService: StorageService,
     private stepperService: StepperService, private rilevazioneService: RilevazioneService,
     private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.loadData();
  }
     loadData(){
      this.titolo = this.stepperService.inserimentoTipoSegnalazione$.value!;
      this.idAspettoSegnalazione = <any>this.data as number;
      this.ruolo = this.storageService.getItem('allroles');
      const prodotto = 'Prodotto';
      const contenzioso = 'Contenzioso';

      switch (this.titolo){
        case prodotto:{
          this.segnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value!;
          this.idStatoSalvataggioSegnalazione = this.segnalazioneProdotto.statoId;
          if(this.idStatoSalvataggioSegnalazione == 5){
            this.displayedColumns.push('integrazioneDR', 'integrazioneDC');
          }
          this.nomeSettoreMateria = this.segnalazioneProdotto.settoreMateria;
          this.nomeAreaProdotto = this.segnalazioneProdotto.areaProdotto;
          this.nomeSede = this.segnalazioneProdotto.sede;
          this.sedeId = this.segnalazioneProdotto.sedeId;
          this.dataInvio = this.segnalazioneProdotto.data1;
          this.rilevazioneService.getDettagliAspettoSegnalazioneById(this.idAspettoSegnalazione).subscribe({
            next: (aspettoSegnalazione: any) => {
              this.datiAspetto.push(aspettoSegnalazione);
              this.aspetto = this.datiAspetto;
              this.aspetto.forEach(aspetto => {
                this.form1.patchValue({
                  criticita: aspetto.criticita,
                  suggerimento: aspetto.suggerimento,
                  readOnlyNoteDR: aspetto.integrazioneDR,
                  readOnlyNoteDC: aspetto.integrazioneDC
                });
              });
            },
            error: (err) => {
              // console.error('Errore durante il caricamento di aspettoSegnalazione:', err);
              this.datiAspetto = [];  // Imposta a un array vuoto in caso di errore
            }
          });
          break;
        }
        case contenzioso:{
          this.segnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value!;
          this.idStatoSalvataggioSegnalazione = this.segnalazioneContenzioso.statoId;
          if(this.idStatoSalvataggioSegnalazione == 5){
            this.displayedColumns.push('integrazioneDR', 'integrazioneDC');
          }
          this.nomeSettoreMateria = this.segnalazioneContenzioso.settoreMateria;
          this.nomeAreaProdotto = this.segnalazioneContenzioso.areaProdotto;
          this.nomeSede = this.segnalazioneContenzioso.sede;
          this.sedeId = this.segnalazioneContenzioso.sedeId;
          this.nomeContenzioso = this.segnalazioneContenzioso.contenziosoDesc;
          this.dataInvio = this.segnalazioneContenzioso.data1;
          this.rilevazioneService.getDettagliAspettoSegnalazioneContenziosoById(this.idAspettoSegnalazione).subscribe({
            next: (aspettoSegnalazione: any) => {
              this.datiAspetto.push(aspettoSegnalazione);
              this.aspetto = this.datiAspetto;
              this.aspetto.forEach(aspetto => {
                this.form1.patchValue({
                  criticita: aspetto.criticita,
                  suggerimento: aspetto.suggerimento,
                  readOnlyNoteDR: aspetto.integrazioneDR,
                  readOnlyNoteDC: aspetto.integrazioneDC
                });
              });
            },
            error: (err) => {
              console.error('Errore durante il caricamento di aspettoSegnalazioneContenzioso:', err);
              this.datiAspetto = [];  // Imposta a un array vuoto in caso di errore
            }
          });
          break;
        }
      }
    }

}
