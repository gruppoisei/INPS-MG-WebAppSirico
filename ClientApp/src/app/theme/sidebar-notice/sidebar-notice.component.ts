import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { StorageService } from '@shared';
import { ComunicazioniLette } from '@shared/interfaces/comunicazioni-lette';
import { InfoUtente } from '@shared/interfaces/info-utente';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { DettaglioComunicazioneComponent } from 'app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-sidebar-notice',
  templateUrl: './sidebar-notice.component.html',
  styleUrls: ['./sidebar-notice.component.scss'],
})
export class SidebarNoticeComponent implements OnInit {

  comunicazioneLette: ComunicazioneLetta[] = []
  dataSourceFiltered: any[] = [];
  dataSourceFiltered2: any[] = []

  constructor(
    public dialog: MatDialog, private comunicazioniSrv: ComunicazioniService,
    private formBuilder: FormBuilder, private storageService: StorageService,
    private roleComService: RuoloComunicazioneService
  ) {}

  displayedColumns: string[] = ['messaggio'];
  matricola: string = ' ';
  ruolo: string = '';

  formRicerca = this.formBuilder.group({
    dataInizio: null,
    dataFine: null,
  });

  ngOnInit(): void {
    this.filtroMessaggi();
    this.filtroMessaggiNonLetti()
  }
  public filtroMessaggi() {
    this.matricola = this.storageService.getItem('matricola');
    if(this.ruolo && this.matricola){
      this.comunicazioniSrv.newGetComunicazioniLetteByMatricola(this.matricola).subscribe({
        next: (comunicazioniLette) => {
          if(this.comunicazioneLette && comunicazioniLette.length > 0){
            const requests = comunicazioniLette.map((comunicazione) =>
              this.comunicazioniSrv.newGetComunicazioneById(comunicazione.idComunicazione)
            );
            forkJoin(requests).subscribe({
              next: (comunicazioniDettaglio) => {
                this.dataSourceFiltered = comunicazioniDettaglio;
              },
              error: (error) => {
                console.error('Errore durante il recupero delle comunicazioni dettaglio:', error);
              },
            });
          }
          else {
            this.dataSourceFiltered = [];
          }
        },
        error: (error) => {
          console.error('Errore durante il recupero delle comunicazioni lette:', error);
          this.dataSourceFiltered = []; // Inizializza come vuoto in caso di errore
        }
      });
    }
  }

  public filtroMessaggiNonLetti() {
    this.ruolo = this.storageService.getItem('allroles');
    this.matricola = this.storageService.getItem('matricola');
    if(this.ruolo && this.matricola) {
      this.roleComService.newGetComunicazioniFilterByRuoloAndMatricola(this.ruolo, this.matricola).subscribe({
        next: (comunicazioniNonLette) => {
          if (comunicazioniNonLette && comunicazioniNonLette.length > 0) { // Controllo aggiunto
            const request = comunicazioniNonLette.map((comunicazione) =>
              this.comunicazioniSrv.newGetComunicazioneById(comunicazione.idComunicazione)
            );
            forkJoin(request).subscribe({
              next: (comunicazioneDettaglio) => {
                this.dataSourceFiltered2 = comunicazioneDettaglio;
              },
              error: (error) => {
                console.error('Errore durante il recupero delle comunicazioni dettaglio:', error);
              },
            });
          } else {
            this.dataSourceFiltered2 = []; // Inizializza come vuoto se non ci sono comunicazioni non lette
          }
        },
        error: (error) => {
          console.error('Errore durante il recupero delle comunicazioni non lette:', error);
          this.dataSourceFiltered2 = []; // Inizializza come vuoto in caso di errore
        }
      });
    }
  }

  truncateText(text: string, limit: number): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

  viewComunicazioneNonLetta(id: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.data = ({tipoDettaglio: 0, id });
    const dialogRef = this.dialog.open(DettaglioComunicazioneComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.filtroMessaggi();
      this.filtroMessaggiNonLetti();
    });
  }

  viewComunicazioneLetta(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.data = ({tipoDettaglio: 1, id });
    const dialogRef = this.dialog.open(DettaglioComunicazioneComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.filtroMessaggi();
      this.filtroMessaggiNonLetti();
    });
  }
}


