import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PreloaderService } from '@core';
import { PopupComunicazioniComponent } from './routes/popup-comunicazioni/popup-comunicazioni.component';
import { FormBuilder, Validators } from '@angular/forms';
import { StorageService } from '@shared';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { IdmUser } from '@shared/interfaces/Idm-user';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { NavigationStart, Router } from '@angular/router';
import { environment } from '@env/environment';
import { PopupErroreInserimentoComponent } from './routes/popup-errore-inserimento/popup-errore-inserimento.component';


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

  emptyPage: boolean = false;
  listaRuoli: { desc: string, roleCode: string }[] = [];
  listaSedi: { sedeCode: string, descSede: string, role: string }[] = [];
  listaCodeSedi: string[] = [];
  nomeUtente: string = '';
  cognomeUtente: string = '';
  windowsAccount: string = '';
  idmUser: IdmUser = {
    emailAddress: '',
    firstName: '',
    fiscalCode: '',
    lastName: '',
    matricula: '',
    officeCode: '',
    codiceSede: [],
    sedeAppartenenza: '',
    descrizioneSede: '',
    appRoles: [],
    indirizzoIp: '',
    officeSapCode: '',
    windowsAccount: ''
  };

  tipoLogin: boolean = false;

  form1 = this.formBuilder.group({
    loginUsername: ['',Validators.required]
  });

  isLogged: string | null = sessionStorage.getItem("isLogged");

  constructor(
    private preloader: PreloaderService,
    private storageService: StorageService,
    private roleComService: RuoloComunicazioneService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private infoUtentiService: InfoUtentiService,
    private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Controlla se la navigazione è verso la route /dashboard
        if (event.url === '/' && this.isLogged == "true") {
          this.storageService.setItem('listaSedi', "");
          this.storageService.setItem('matricola', "");
          this.storageService.setItem('allroles', "");
          this.storageService.setItem('roleDesc', "");
          this.storageService.setItem('username', "");
          this.storageService.setItem('isLogged', "");
          this.isLogged = sessionStorage.getItem("isLogged");

          this.getAccountIdmLoggato();
        }
      }
    })
    this.tipoLogin = environment.loginIDM;

    console.log('this.isLogged: ', this.isLogged);
    this.isLogged = sessionStorage.getItem("isLogged");
    console.log('this.isLogged: ', this.isLogged);

    // metodo per recuperare i dati in ambiente inps (primo accesso all'applicativo)
    if (this.isLogged != "true") {
      this.getAccountIdmLoggato();
    }

    setTimeout(() => {
      if (this.isLogged == "true") {
        this.getComunicazioni();
      }
    }, 0);
  }

  codeRuoliAccesso: string[] = [];
  descRuoliAccesso: string[] = [];

  ngAfterViewInit() {
    this.preloader.hide();
  }

  //////////////////////////////    INIZIO LOGIN    //////////////////////////////
  getAccountIdmLoggato() {
    this.infoUtentiService.WhoAmI().subscribe({
      next: (user) => {
        // console.log('user:',user);
        this.idmUser = user;
        this.nomeUtente = user.firstName;
        this.cognomeUtente = user.lastName;
        this.windowsAccount = user.windowsAccount;

        // console.log('user.appRoles:',user.appRoles);
        // SE user.appRoles è null se un utente provinciale o regionale senza sedi associate prova ad accedere
        if (user.appRoles == null) {
          this.showErrorMessage("L'username inserito non ha ruoli associati.");
          return
        }

        // Parse roles
        this.listaRuoli = user.appRoles.map(role => {
          const roleMatch = role.match(/(P\d+)\s:\s(.+)/);
          if (roleMatch) {
            return { roleCode: roleMatch[1], desc: roleMatch[2] };
          }
          return null;
        }).filter(role => role !== null) as { desc: string, roleCode: string }[];

        // Parse sedi
        this.listaSedi = user.codiceSede.map(sede => {
        const sedeMatch = sede.match(/(\d+):\s([^,]+),\srole:\s(P\d+)/);
        if (sedeMatch) {
          return { sedeCode: sedeMatch[1], descSede: sedeMatch[2], role: sedeMatch[3] };
        }
        return null;
        }).filter(sede => sede !== null) as { sedeCode: string, descSede: string, role: string }[];

        this.codeRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.roleCode);
        this.descRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.desc);

        this.storageService.setItem('username', this.windowsAccount);
        this.storageService.setItem('matricola', user.matricula);
        this.storageService.setItem('allroles', this.codeRuoliAccesso.join('; '));
        this.storageService.setItem('roleDesc', this.descRuoliAccesso);
        this.storageService.setItem('isLogged', true);

        if (this.listaSedi.length > 0) {
          this.storageService.setItem('listaSedi',JSON.stringify(this.listaSedi))
        }
        else {
          this.storageService.remove('listaSedi');
        }

        //this.router.navigate(['/dashboard']);
        window.location.href = '/dashboard';
      },
      error: (err) => {
        if (err.error.message) {
          this.showErrorMessage(err.error.message);
          this.emptyPage = true;
        }
      }
    });
  }

   getAccountLoggato() {
    this.infoUtentiService.getStringaIDMConUsername(this.form1.value.loginUsername).subscribe({
      next: (user: any) => {
        console.log('user:',user);

        if (user == null) {
          this.openErrorDialog('Errore:',"L'utente inserito non è censito in IDM.")
          return
        }

        const stringaIDM = user.stringaIDM;
        const usernameIdm = user.usernameIdm;

        this.infoUtentiService.checkDatiLocaleIDM(stringaIDM, usernameIdm).subscribe((response) => {
          let esito = response.esito;

          if (esito == true) {

            this.infoUtentiService.getInfoUtenteByUsername(this.form1.value.loginUsername).subscribe({
              next: (user) => {
                // console.log('user:',user);
                this.idmUser = user;
                this.nomeUtente = user.firstName;
                this.cognomeUtente = user.lastName;
                this.windowsAccount = user.windowsAccount;

            // console.log('user.appRoles:',user.appRoles);

            // SE user.appRoles è null se un utente provinciale o regionale senza sedi associate prova ad accedere
            if (user.appRoles == null) {
              this.showErrorMessage("L'username inserito non ha sedi associate.");
              return
            }

            // Parse roles
            this.listaRuoli = user.appRoles.map(role => {
              const roleMatch = role.match(/(P\d+)\s:\s(.+)/);
              if (roleMatch) {
                return { roleCode: roleMatch[1], desc: roleMatch[2] };
              }
              return null;
            }).filter(role => role !== null) as { desc: string, roleCode: string }[];

            // Parse sedi
            this.listaSedi = user.codiceSede.map(sede => {
              const sedeMatch = sede.match(/(\d+):\s([^,]+),\srole:\s(P\d+)/);
              if (sedeMatch) {
                return { sedeCode: sedeMatch[1], descSede: sedeMatch[2], role: sedeMatch[3] };
              }
              return null;
            }).filter(sede => sede !== null) as { sedeCode: string, descSede: string, role: string }[];
            // console.log('listaSedi',this.listaSedi)

            this.codeRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.roleCode);
            this.descRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.desc);

            // console.log('this.descRuoliAccesso:',this.descRuoliAccesso);
            this.storageService.setItem('username',this.form1.value.loginUsername)
            this.storageService.setItem('matricola', this.idmUser.matricula);
            this.storageService.setItem('allroles', this.codeRuoliAccesso.join('; '));
            this.storageService.setItem('roleDesc', this.descRuoliAccesso);
            this.storageService.setItem('isLogged', true);

            if (this.listaSedi.length > 0) {
              sessionStorage.setItem('listaSedi',JSON.stringify(this.listaSedi))
            }

            else {
              this.storageService.remove('listaSedi');
            }

              // this.router.navigate(['/dashboard']);
              window.location.href = '/dashboard';
              },
              error: (err) => {
                if (err.error.message) {
                  this.showErrorMessage(err.error.message);
                }
              }
            });

          }
          else {
              this.dialog.open(PopupErroreInserimentoComponent, {
                data: { titolo: 'Errore:', message: 'I dati forniti da IDM non corrispondono ai dati della tabella Utente.' },
            });
              this.emptyPage = true;
              // console.log('emptypage: ', this.emptyPage);
          }
        });
      }
    })

  }
  //////////////////////////////    FINE LOGIN    //////////////////////////////

  //////////////////////////////    INIZIO COMUNICAZIONI   //////////////////////////////
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

  apriPopupComunicazioni() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(PopupComunicazioniComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {});
  }
  //////////////////////////////    FINE COMUNICAZIONI    //////////////////////////////

  showErrorMessage(messaggio: string) {
    this.router.navigate(['/local-login']);
    this.openErrorDialog('Errore:',messaggio);
    return
  }

  openErrorDialog(titolo: string, message: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { titolo: titolo, message: message },
    });
  }


}
