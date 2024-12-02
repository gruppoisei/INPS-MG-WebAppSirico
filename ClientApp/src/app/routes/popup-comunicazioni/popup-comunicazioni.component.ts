import { Component, OnInit } from '@angular/core';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '@shared';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { RuoliComunicazione } from '@shared/interfaces/ruoli-comunicazioni';

@Component({
  selector: 'app-popup-comunicazioni',
  templateUrl: './popup-comunicazioni.component.html',
  styleUrls: ['./popup-comunicazioni.component.scss']
})
export class PopupComunicazioniComponent implements OnInit {

  ruoloComunicazioni: RuoliComunicazione[] = [];
  matricola: string = '';
  role: string = ' ';
  comunicazione: Comunicazioni = new Comunicazioni();
  comunicazioneLetta: ComunicazioneLetta = new ComunicazioneLetta();
  tipoComunicazioni:any
  altriMessaggi: boolean = false;
  indMessaggi: number = 0;
  checked: boolean = false;

  constructor(
    private ruoloComunicazioneService: RuoloComunicazioneService,
    private comunicazioniSrv: ComunicazioniService,
    public dialogRef: MatDialogRef<PopupComunicazioniComponent>,
    private storageService: StorageService
  ) { }


  ngOnInit(): void {
    this.getComunicazioni();
  }

  getComunicazioni() {
    this.role = this.storageService.getItem('allroles');
    this.matricola = this.storageService.getItem('matricola');

       //leggo le comunicazioni legate al ruolo e non ancora lette
       this.ruoloComunicazioneService
         .newGetComunicazioniFilterByRuoloAndMatricola(this.role, this.matricola)
               .subscribe((data: RuoliComunicazione[]) => {
                  this.ruoloComunicazioni = data;
                  this.altriMessaggi = this.ruoloComunicazioni.length > 1;
                  if (this.ruoloComunicazioni.length > 0)
                  {

                    this.indMessaggi = 0;
                    this.prossimoMessaggio();
                  }
                  else
                  {
                    this.dialogRef.close();
                  }

                 });
 }

 prossimoMessaggio(){
  this.matricola = this.storageService.getItem('matricola');
  if (this.indMessaggi > 0 && this.checked) {
    this.salvaComunicazioneLetta(this.comunicazione.id, this.matricola);
  }

  this.comunicazioniSrv.newGetComunicazioneById(this.ruoloComunicazioni[this.indMessaggi].idComunicazione).subscribe(
  {
    next: (comunicazione)=>{
      this.comunicazione = comunicazione;
      this.comunicazioniSrv.getTipoComunicazioneById(this.comunicazione.idTipoComunicazione).subscribe({
        next: (tipoComunicazione) =>{
          this.tipoComunicazioni = tipoComunicazione
        }
      });
    }});

  this.checked = false;

  //incremento l'indice dei messaggi che identifica il messaggio da visualizzare
  this.indMessaggi++;

  //verifico se ci saranno altri messaggi da visualizzare
  this.altriMessaggi = this.ruoloComunicazioni.length > this.indMessaggi;
 }

 ultimoMessaggio(){
  if (this.indMessaggi > 0 && this.checked) {
    this.salvaComunicazioneLetta(this.comunicazione.id, this.matricola);
  }

  this.dialogRef.close();

}
 salvaComunicazioneLetta(comunicazioneId: number, matricola: string){
  this.comunicazioneLetta = new ComunicazioneLetta();

  this.comunicazioneLetta.idComunicazione = comunicazioneId;
  this.comunicazioneLetta.matricola = matricola;

  this.comunicazioniSrv.newSaveComunicazioneLettaChecked(this.comunicazioneLetta).subscribe(()=>{})
}

}
