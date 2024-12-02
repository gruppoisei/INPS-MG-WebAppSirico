import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { StorageService } from '@shared';
import { IdmUser } from '@shared/interfaces/Idm-user';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { empty } from 'rxjs';
import { environment } from '@env/environment';

@Component({
  selector: 'app-local-user-login',
  templateUrl: './local-user-login.component.html',
  styleUrls: ['./local-user-login.component.scss']
})
export class LocalUserLoginComponent implements OnInit {

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

  constructor(
    private infoUtentiService: InfoUtentiService,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router) { }

  form1 = this.formBuilder.group({
    loginUsername: ['',Validators.required]
  });

  ngOnInit(): void {
    // console.log('RUOLI: ', this.storageService.getItem('allroles'));
    this.storageService.setItem('listaSedi', "");
    this.storageService.setItem('matricola', "");
    this.storageService.setItem('allroles', "");
    this.storageService.setItem('roleDesc', "");
    this.storageService.setItem('username', "");
    this.tipoLogin = environment.loginIDM;

    // metodo per recuperare i dati in ambiente inps
    this.getAccountIdmLoggato();
  }

  codeRuoliAccesso: string[] = [];
  descRuoliAccesso: string[] = [];

  getAccountIdmLoggato() {
    this.infoUtentiService.newInfoUtente().subscribe({
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

        if (this.listaSedi.length > 0) {
          sessionStorage.setItem('listaSedi',JSON.stringify(this.listaSedi))
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
        // console.log('user:',user);

        if (user == null) {
          this.openErrorDialog('Errore:',"L'utente inserito non è censito in IDM.")
          return
        }

        const stringaIDM = user.stringaIDM;
        const usernameIdm = user.usernameIdm;

        this.infoUtentiService.checkDatiLocaleIDM(stringaIDM, usernameIdm).subscribe((response) => {
          let esito = response.esito;
          // console.log(esito);

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

            if (this.listaSedi.length > 0) {
              sessionStorage.setItem('listaSedi',JSON.stringify(this.listaSedi))
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

  showErrorMessage(messaggio: string) {
    this.router.navigate(['/local-login']);
    this.openErrorDialog('Errore:',messaggio);
    return
  }

  onRoleChange(selectedRole: string) {
    // Filtra le sedi in base al ruolo selezionato
    const sediAutorizzate = this.listaSedi.filter(sede => sede.role === selectedRole);

    const inpsSediControl = this.form1.get('inpsSedi');
    if (sediAutorizzate.length > 0) {
      const sediCodes = sediAutorizzate.map(sede => sede.sedeCode);
      if (sediAutorizzate.length === 1) {
        if (inpsSediControl) {
          inpsSediControl.setValue([sediAutorizzate[0].sedeCode]);
        }
      } else if (inpsSediControl) {
        inpsSediControl.setValue(sediCodes);
      }
    } else {
      // Se nessuna sede è autorizzata per il ruolo selezionato
      if (inpsSediControl) {
        inpsSediControl.setValue([]);
      }
    }
  }

  onSubmit() {
    // QUESTO METODO FORNISCE I DATI UTENTI IDM DALL'AMBIENTE INPS
    this.getAccountIdmLoggato();
    // QUESTO METODO SIMULA UN LOGIN DELL'APPLICATIVO
    // this.getAccountLoggato();
  }


  openErrorDialog(titolo: string, message: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { titolo: titolo, message: message },
    });
  }



}
