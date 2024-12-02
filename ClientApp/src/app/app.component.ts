import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PreloaderService } from '@core';
import { PopupComunicazioniComponent } from './routes/popup-comunicazioni/popup-comunicazioni.component';
// import { PopupAlertScadenzeComponent } from './routes/popup-alert-scadenze/popup-alert-scadenze.component';
import { FormBuilder } from '@angular/forms';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StorageService } from '@shared';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';

// import "@fontsource/titillium-web/400-italic.css"; // Specify weight and style

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  matricola: string = '';
  role: string = ' ';
  numeroComunicazioni: number = 0;
  comunicazioni: RuoliComunicazioni[] = [];
  scadute: any[] = [];

  formRicerca = this.formBuilder.group({
    scadenza:''
  });

  constructor(
    private preloader: PreloaderService,
    private storageService: StorageService,
    private roleComService: RuoloComunicazioneService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder  ) {}

  ngOnInit() {
    this.getComunicazioni();
    /* this.getRilevazioniScadute(); */
  }

  ngAfterViewInit() {
    this.preloader.hide();
  }

  getComunicazioni() {
    this.role = this.storageService.getItem('allroles');
    this.matricola = this.storageService.getItem('matricola');

      if(this.role && this.matricola){
            //leggo le comunicazioni legate al ruolo e matricola non ancora lette
            this.roleComService.newGetComunicazioniFilterByRuoloAndMatricola(this.role, this.matricola)
            .subscribe((data: RuoliComunicazioni[]) => {
              this.comunicazioni = data || [];
              if (this.comunicazioni.length > 0) {
                this.apriPopupComunicazioni();
              }
            });
    }
  }

  getRilevazioniScadute() {
    /* this.infoUtentiService.infoUtente().subscribe((info: InfoUtente) => {
      //leggo ruolo e matricola dell'utente connesso
      this.role = info.authorities[0].role;
      this.matricola = info.matricola;

      this.rilevazioniSrv.getScadenzaRilevazioni(this.formRicerca.value.scadenza, this.role, info.matricola).subscribe(data => {
        this.scadute=data;
        if (this.scadute.length > 0) {
          this.apriPopupScadenzeRilevazioni();
        }
      });
    }); */
}
  apriPopupComunicazioni() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(PopupComunicazioniComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {});
  }

  // apriPopupScadenzeRilevazioni() {
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '800px';
    // dialogConfig.height = '600px';
    // dialogConfig.disableClose = true;
    // const dialogRef = this.dialog.open(PopupAlertScadenzeComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(result => {});
  // }
}
