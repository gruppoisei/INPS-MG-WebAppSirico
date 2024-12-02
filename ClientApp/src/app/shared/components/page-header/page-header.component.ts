import { Component, OnInit, ViewEncapsulation, Input, ChangeDetectorRef } from '@angular/core';
import { MenuService } from '@core/bootstrap/menu.service';
import { Router } from '@angular/router';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { IdmUser } from '@shared/interfaces/Idm-user';

@Component({
  selector: 'page-header',
  host: {
    class: 'matero-page-header',
  },
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PageHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() nav: string[] = [];
  @Input()
  get hideBreadcrumb() {
    return this._hideBreadCrumb;
  }
  set hideBreadcrumb(value: boolean) {
    this._hideBreadCrumb = coerceBooleanProperty(value);
  }
  private _hideBreadCrumb = false;

  nomeUtente: string = ' ';
  matricolaUtente: string = ' ';
  cognomeUtente: string = ' ';
  roleDesc: string = ' ';

  errorMessage: string = "";

  constructor(private router: Router, private menu: MenuService, private infoUtentiService: InfoUtentiService) {}

  ngOnInit() {
    const username = sessionStorage.getItem('username');
    if (username) {
      const trimmedUsername = username.substring(1, username.length - 1);
      this.infoUtentiService.getInfoUtenteByUsername(trimmedUsername).subscribe((info: IdmUser) => {
        this.nomeUtente = info.firstName;
        this.cognomeUtente = info.lastName;
        this.matricolaUtente = info.matricula;
  
        const allRoleDesc = sessionStorage.getItem('roleDesc');
        if (allRoleDesc) {
          this.roleDesc = JSON.parse(allRoleDesc)[0];
        }
      });
    } else {
      this.errorMessage = 'Username non trovato in sessionStorage';
      // console.warn('Username non trovato in sessionStorage');
    }
  
    this.nav = Array.isArray(this.nav) ? this.nav : [];
  
    if (this.nav.length === 0) {
      this.genBreadcrumb();
    }
  
    this.title = this.title || this.nav[this.nav.length - 1];
  }
  

  showFieldRole(roleDesc: string): string | null {

    switch(roleDesc) {

      case 'Amministratore': {
        return 'Amministratore';
      }
      case 'Operatore Centrale Amministrativo': {
        return 'Operatore Centrale<br>Amministrativo';
      }
      case 'Operatore Centrale Informatico': {
        return 'Operatore Centrale<br>Informatico';
      }
      case 'Operatore Territoriale di Provincia': {
        return 'Operatore Territoriale<br>di Provincia';
      }
      case 'Operatore Territoriale Regionale': {
        return 'Operatore Territoriale<br>Regionale';
      }
    }

    return null;
  }

  genBreadcrumb() {
    const cleanUrl = this.router.url.split('?')[0];
    const routes = cleanUrl.slice(1).split('/');
    this.nav = this.menu.getLevel(routes);
    this.nav.unshift('Home');
  }

  static ngAcceptInputType_hideBreadcrumb: BooleanInput;
}