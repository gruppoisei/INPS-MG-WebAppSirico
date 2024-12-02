import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';
import { StorageService } from '@shared';

export interface DialogData {
  tipoDettaglio: number;
  id: number
}

@Component({
  selector: 'app-dettaglio-comunicazione',
  templateUrl: './dettaglio-comunicazione.component.html',
  styleUrls: ['./dettaglio-comunicazione.component.scss']
})
export class DettaglioComunicazioneComponent implements OnInit {

  tipoDettaglio = 0
  idComunicazione: number = 0;
  matricola: string = '';
  role: string = ' ';
  comunicazione: Comunicazioni = new Comunicazioni();
  comunicazioneLetta: ComunicazioneLetta = new ComunicazioneLetta();
  tipoComunicazioni:any
  checked: boolean = false;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private comunicazioniSrv: ComunicazioniService,
    private storageService: StorageService, private dialogRef: MatDialogRef<DettaglioComunicazioneComponent>) { }

  ngOnInit(): void {
    this.tipoDettaglio = this.data.tipoDettaglio
    this.idComunicazione = <any>this.data.id as number;
    this.matricola = this.storageService.getItem('matricola');
    this.role = this.storageService.getItem('allroles');
    this.getComunicazione();
  }

  getComunicazione(){
    this.comunicazioniSrv.newGetComunicazioneById(this.idComunicazione).subscribe({
      next: (comunicazione)=>{
        this.comunicazione = comunicazione;
        this.comunicazioniSrv.getTipoComunicazioneById(this.comunicazione.idTipoComunicazione).subscribe({
          next: (tipoComunicazione: any) =>{
            this.tipoComunicazioni = tipoComunicazione
          }
        });
      }
    })
  }

  salvaComunicazioneLetta(){
    if(this.checked){
      this.comunicazioneLetta = new ComunicazioneLetta();
      this.comunicazioneLetta.idComunicazione = this.idComunicazione;
      this.comunicazioneLetta.matricola = this.matricola;
      this.comunicazioniSrv.newSaveComunicazioneLettaChecked(this.comunicazioneLetta).subscribe(() => {
        // Chiudi il dialog dopo aver salvato la comunicazione letta
        this.dialogRef.close();
      });
    }
  }
}
