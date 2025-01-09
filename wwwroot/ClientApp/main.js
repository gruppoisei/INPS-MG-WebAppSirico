(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _routes_popup_comunicazioni_popup_comunicazioni_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/popup-comunicazioni/popup-comunicazioni.component */ 53229);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/ruolo-comunicazione.service */ 86872);
/* harmony import */ var _shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/info-utenti.service */ 39202);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);

























function AppComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div")(3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div")(6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Inserisci l'username con cui accedere");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("submit", function AppComponent_div_1_div_1_Template_form_submit_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r3.getAccountLoggato();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](13, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "br")(15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Accedi");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r1.form1);
  }
}

function AppComponent_div_1_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9)(1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Errore durante il login. Riprovare.");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}

function AppComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_div_1_div_2_div_2_Template, 3, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.emptyPage == true);
  }
}

function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AppComponent_div_1_div_1_Template, 18, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, AppComponent_div_1_div_2_Template, 3, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.tipoLogin == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.tipoLogin == true);
  }
}

class AppComponent {
  constructor(preloader, storageService, roleComService, dialog, formBuilder, infoUtentiService, router) {
    this.preloader = preloader;
    this.storageService = storageService;
    this.roleComService = roleComService;
    this.dialog = dialog;
    this.formBuilder = formBuilder;
    this.infoUtentiService = infoUtentiService;
    this.router = router;
    this.matricola = '';
    this.role = ' ';
    this.numeroComunicazioni = 0;
    this.comunicazioni = [];
    this.scadute = [];
    this.formRicerca = this.formBuilder.group({
      scadenza: ''
    });
    this.emptyPage = false;
    this.listaRuoli = [];
    this.listaSedi = [];
    this.listaCodeSedi = [];
    this.nomeUtente = '';
    this.cognomeUtente = '';
    this.windowsAccount = '';
    this.idmUser = {
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
    this.tipoLogin = false;
    this.form1 = this.formBuilder.group({
      loginUsername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]
    });
    this.isLogged = sessionStorage.getItem("isLogged");
    this.codeRuoliAccesso = [];
    this.descRuoliAccesso = [];
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_10__.NavigationStart) {
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
    });
    this.tipoLogin = _env_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.loginIDM;
    this.isLogged = sessionStorage.getItem("isLogged"); // metodo per recuperare i dati in ambiente inps (primo accesso all'applicativo)

    if (this.isLogged != "true") {
      this.getAccountIdmLoggato();
    }

    setTimeout(() => {
      if (this.isLogged == "true") {
        this.getComunicazioni();
      }
    }, 0);
  }

  ngAfterViewInit() {
    this.preloader.hide();
  } //////////////////////////////    INIZIO LOGIN    //////////////////////////////


  getAccountIdmLoggato() {
    var _this = this;

    // console.log('0')
    this.infoUtentiService.WhoAmI().subscribe({
      next: function () {
        var _ref = (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          console.log('1');
          debugger;

          try {
            console.log('2'); // Salva le informazioni principali dell'utente

            _this.idmUser = user;
            _this.nomeUtente = user.firstName;
            _this.cognomeUtente = user.lastName;
            _this.windowsAccount = user.windowsAccount; // Gestione in caso di appRoles null

            if (user.appRoles == null) {
              _this.showErrorMessage("L'username inserito non ha ruoli associati.");

              return;
            }

            console.log('user: ', user); // Parsing dei ruoli

            user.appRoles.sort((a, b) => a.localeCompare(b));
            _this.listaRuoli = user.appRoles.map(role => {
              const roleMatch = role.match(/(P\d+)\s:\s(.+)/);

              if (roleMatch) {
                return {
                  roleCode: roleMatch[1],
                  desc: roleMatch[2]
                };
              }

              return null;
            }).filter(role => role !== null);
            console.log('3'); // Estrai i codici sede dall'oggetto utente

            const sedeDescriptions = yield _this.infoUtentiService.fetchSedeDescriptions(user.codiceSede).toPromise();
            console.log(sedeDescriptions); // Parse sedi

            _this.listaSedi = sedeDescriptions.map(sede => {
              const sedeMatch = sede.match(/(\d+):\s([^,]+),\srole:\s(P\d+)/);

              if (sedeMatch) {
                return {
                  sedeCode: sedeMatch[1],
                  descSede: sedeMatch[2],
                  role: sedeMatch[3]
                };
              }

              return null;
            }).filter(sede => sede !== null); // Prepara dati aggiuntivi per il salvataggio

            _this.codeRuoliAccesso = _this.listaRuoli.map(ruolo => ruolo.roleCode);
            _this.descRuoliAccesso = _this.listaRuoli.map(ruolo => ruolo.desc); // Salva i dati nel servizio di storage

            _this.storageService.setItem('username', _this.windowsAccount);

            _this.storageService.setItem('matricola', user.matricula);

            _this.storageService.setItem('allroles', _this.codeRuoliAccesso.join('; '));

            _this.storageService.setItem('roleDesc', _this.descRuoliAccesso);

            _this.storageService.setItem('isLogged', true);

            if (_this.listaSedi.length > 0) {
              _this.storageService.setItem('listaSedi', _this.listaSedi);
            } else {
              _this.storageService.setItem('listaSedi', "");
            } // Reindirizzamento alla dashboard


            window.location.href = '/dashboard';
          } catch (error) {
            console.error("Errore durante la fetch delle descrizioni delle sedi:", error);

            _this.showErrorMessage("Errore durante il caricamento delle descrizioni delle sedi.");
          }
        });

        return function next(_x) {
          return _ref.apply(this, arguments);
        };
      }(),
      error: err => {
        if (err.error.message) {
          this.showErrorMessage(err.error.message);
          this.emptyPage = true;
        }
      }
    });
  }

  getAccountLoggato() {
    this.infoUtentiService.getStringaIDMConUsername(this.form1.value.loginUsername).subscribe({
      next: user => {
        console.log('user:', user);

        if (user == null) {
          this.openErrorDialog('Errore:', "L'utente inserito non è censito in IDM.");
          return;
        }

        const stringaIDM = user.stringaIDM;
        const usernameIdm = user.usernameIdm;
        this.infoUtentiService.checkDatiLocaleIDM(stringaIDM, usernameIdm).subscribe(response => {
          let esito = response.esito;

          if (esito == true) {
            this.infoUtentiService.getInfoUtenteByUsername(this.form1.value.loginUsername).subscribe({
              next: user => {
                // console.log('user:',user);
                this.idmUser = user;
                this.nomeUtente = user.firstName;
                this.cognomeUtente = user.lastName;
                this.windowsAccount = user.windowsAccount; // console.log('user.appRoles:',user.appRoles);
                // SE user.appRoles è null se un utente provinciale o regionale senza sedi associate prova ad accedere

                if (user.appRoles == null) {
                  this.showErrorMessage("L'username inserito non ha sedi associate.");
                  return;
                } // Parse roles


                this.listaRuoli = user.appRoles.map(role => {
                  const roleMatch = role.match(/(P\d+)\s:\s(.+)/);

                  if (roleMatch) {
                    return {
                      roleCode: roleMatch[1],
                      desc: roleMatch[2]
                    };
                  }

                  return null;
                }).filter(role => role !== null); // Parse sedi

                this.listaSedi = user.codiceSede.map(sede => {
                  const sedeMatch = sede.match(/(\d+):\s([^,]+),\srole:\s(P\d+)/);

                  if (sedeMatch) {
                    return {
                      sedeCode: sedeMatch[1],
                      descSede: sedeMatch[2]
                    };
                  }

                  return null;
                }).filter(sede => sede !== null); // console.log('listaSedi',this.listaSedi)

                this.codeRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.roleCode);
                this.descRuoliAccesso = this.listaRuoli.map(ruolo => ruolo.desc); // console.log('this.descRuoliAccesso:',this.descRuoliAccesso);

                this.storageService.setItem('username', this.form1.value.loginUsername);
                this.storageService.setItem('matricola', this.idmUser.matricula);
                this.storageService.setItem('allroles', this.codeRuoliAccesso.join('; '));
                this.storageService.setItem('roleDesc', this.descRuoliAccesso);
                this.storageService.setItem('isLogged', true);

                if (this.listaSedi.length > 0) {
                  sessionStorage.setItem('listaSedi', JSON.stringify(this.listaSedi));
                } else {
                  this.storageService.remove('listaSedi');
                } // this.router.navigate(['/dashboard']);


                window.location.href = '/dashboard';
              },
              error: err => {
                if (err.error.message) {
                  this.showErrorMessage(err.error.message);
                }
              }
            });
          } else {
            this.dialog.open(_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_7__.PopupErroreInserimentoComponent, {
              data: {
                titolo: 'Errore:',
                message: 'I dati forniti da IDM non corrispondono ai dati della tabella Utente.'
              }
            });
            this.emptyPage = true; // console.log('emptypage: ', this.emptyPage);
          }
        });
      }
    });
  } //////////////////////////////    FINE LOGIN    //////////////////////////////
  //////////////////////////////    INIZIO COMUNICAZIONI   //////////////////////////////


  getComunicazioni() {
    this.role = this.storageService.getItem('allroles');
    this.matricola = this.storageService.getItem('matricola');

    if (this.role && this.matricola) {
      //leggo le comunicazioni legate al ruolo e matricola non ancora lette
      this.roleComService.newGetComunicazioniFilterByRuoloAndMatricola(this.role, this.matricola).subscribe(data => {
        this.comunicazioni = data || [];

        if (this.comunicazioni.length > 0) {
          this.apriPopupComunicazioni();
        }
      });
    }
  }

  apriPopupComunicazioni() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(_routes_popup_comunicazioni_popup_comunicazioni_component__WEBPACK_IMPORTED_MODULE_2__.PopupComunicazioniComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {});
  } //////////////////////////////    FINE COMUNICAZIONI    //////////////////////////////


  showErrorMessage(messaggio) {
    this.router.navigate(['/']); // this.router.navigate(['/local-login']);

    this.openErrorDialog('Errore:', messaggio);
    return;
  }

  openErrorDialog(titolo, message) {
    this.dialog.open(_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_7__.PopupErroreInserimentoComponent, {
      data: {
        titolo: titolo,
        message: message
      }
    });
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_1__.PreloaderService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_4__.RuoloComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_5__.InfoUtentiService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 2,
  vars: 1,
  consts: [[4, "ngIf"], ["class", "container", 4, "ngIf"], [1, "container"], [1, "content"], [1, "icon"], [1, "form", 3, "formGroup", "submit"], ["matInput", "", "placeholder", "username", "value", "", "formControlName", "loginUsername"], ["mat-raised-button", "", "type", "submit", 1, "child-buttons-conferma"], ["class", "emptyPage", 4, "ngIf"], [1, "emptyPage"], [1, "connectionFailed"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 2, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isLogged != "true");
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton],
  styles: ["@charset \"UTF-8\";\n.mat-dialog-container[_ngcontent-%COMP%] {\n  display: block;\n}\n  .mat-option.mat-selected {\n  color: #2f6dd5 !important;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  \n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 100%;\n  \n  border: 1px solid #ccc;\n  \n  padding: 20px;\n  border-radius: 2px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  \n}\n.icon[_ngcontent-%COMP%] {\n  margin-right: 120px;\n  \n  font-size: 120px;\n  color: #2f6dd5;\n}\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\np[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5;\n  color: white;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2f6dd5;\n  font-weight: bold;\n}\n.emptyPage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.connectionFailed[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 25px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwiYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGNBQUE7QURFRjtBQzhDQTtFQUNFLHlCQUFBO0FEM0NGO0FDOENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBZSwrQkFBQTtBRDFDakI7QUM2Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQWlCLGlEQUFBO0VBQ2pCLHNCQUFBO0VBQXdCLG1EQUFBO0VBQ3hCLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQXlDLCtDQUFBO0FEdkMzQztBQzBDQTtFQUNFLG1CQUFBO0VBQXFCLHNDQUFBO0VBQ3JCLGdCQUFBO0VBQ0EsY0FBQTtBRHRDRjtBQzBDQTtFQUNFLFdBQUE7RUFBYSx1REFBQTtBRHRDZjtBQ3dDQTtFQUNFLGVBQUE7RUFFQSxjQUFBO0FEdENGO0FDMENBO0VBQ0UsbUJBQUE7RUFFQSxZQUFBO0FEeENGO0FDMENBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFFQSxpQkFBQTtBRHhDRjtBQzJDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEeENGO0FDMkNBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRHhDRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogQWx0ZXp6YSBkZWxsJ2ludGVyYSBwYWdpbmEgKi9cbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIExhcmdoZXp6YSBtYXNzaW1hIGRlbCBjb250ZW5pdG9yZSBwcmluY2lwYWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8qIE9wemlvbmFsZTogYm9yZG8gcGVyIGlsIGNvbnRlbml0b3JlIHByaW5jaXBhbGUgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wemlvbmFsZTogb21icmEgcGVyIGVmZmV0dG8gZGkgcHJvZm9uZGl0w6AgKi9cbn1cblxuLmljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAvKiBTcGF6aW8gdHJhIGwnaWNvbmEgZSBpbCBjb250ZW51dG8gKi9cbiAgZm9udC1zaXplOiAxMjBweDtcbiAgY29sb3I6ICMyZjZkZDU7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIE9jY3VwYSB0dXR0byBsbyBzcGF6aW8gZGlzcG9uaWJpbGUgbmVsIGNvbnRlbml0b3JlICovXG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMmY2ZGQ1O1xufVxuXG4uYnRuLW1vZCB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyZjZkZDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW1wdHlQYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb25uZWN0aW9uRmFpbGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuLy8gLmNhcm91c2VsLWNvbnRyb2wtbmV4dCwgLmNhcm91c2VsLWNvbnRyb2wtcHJldntcclxuLy8gICBwb3NpdGlvbjpyZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4vLyAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nOiA3cHggMTBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBidXR0b25bdHlwZT1cImJ1dHRvblwiXS5idG4uYnRuLXByaW1hcnl7XHJcbi8vICAgcGFkZGluZzowICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vICNleGFtcGxlTW9kYWwgLm1vZGFsLWhlYWRlcntcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4vLyAgIGNvbG9yOndoaXRlO1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAjZXhhbXBsZU1vZGFsIC5tb2RhbC1jb250ZW50e1xyXG4vLyAgIHRvcDoxNTBweDtcclxuLy8gfVxyXG5cclxuLy8gI2V4YW1wbGVNb2RhbExhYmVsIC5tb2RhbC1oZWFkZXJ7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2csIC5tb2RhbC5pbiAubW9kYWwtZGlhbG9nIHtcclxuLy8gICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xyXG4vLyAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuLy8gICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsIHRlc3RvIGRlbCBjYW1wbyAqL1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsbCdhbmltYXppb25lIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcblxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgTE9HSU4gQ09NUE9ORU5UICAgICAvLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkIHsgIFxyXG4gIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIEFsdGV6emEgZGVsbCdpbnRlcmEgcGFnaW5hICovXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBMYXJnaGV6emEgbWFzc2ltYSBkZWwgY29udGVuaXRvcmUgcHJpbmNpcGFsZSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIE9wemlvbmFsZTogYm9yZG8gcGVyIGlsIGNvbnRlbml0b3JlIHByaW5jaXBhbGUgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIE9wemlvbmFsZTogb21icmEgcGVyIGVmZmV0dG8gZGkgcHJvZm9uZGl0w6AgKi9cclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTIwcHg7IC8qIFNwYXppbyB0cmEgbCdpY29uYSBlIGlsIGNvbnRlbnV0byAqL1xyXG4gIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwJTsgLyogT2NjdXBhIHR1dHRvIGxvIHNwYXppbyBkaXNwb25pYmlsZSBuZWwgY29udGVuaXRvcmUgKi9cclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcbi5idG4tbW9kIHtcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0Yzk5ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzJmNmRkNTtcclxuICAvLyBjb2xvcjogIzRjOTlmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVtcHR5UGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uRmFpbGVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateHttpLoaderFactory": () => (/* binding */ TranslateHttpLoaderFactory),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/core.module */ 40294);
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @theme/theme.module */ 85056);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/routes.module */ 87951);
/* harmony import */ var _formly_config_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formly-config.module */ 55845);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 75347);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _core_authentication_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/authentication/login.service */ 55019);
/* harmony import */ var _fake_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fake-login.service */ 77009);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);

























// Required for AOT compilation
function TranslateHttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        { provide: _core__WEBPACK_IMPORTED_MODULE_7__.BASE_URL, useValue: _env_environment_prod__WEBPACK_IMPORTED_MODULE_6__.environment.baseUrl },
        { provide: _core_authentication_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService, useClass: _fake_login_service__WEBPACK_IMPORTED_MODULE_9__.FakeLoginService },
        _core__WEBPACK_IMPORTED_MODULE_7__.httpInterceptorProviders,
        _core__WEBPACK_IMPORTED_MODULE_7__.appInitializerProviders,
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
            _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
            _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule,
            _formly_config_module__WEBPACK_IMPORTED_MODULE_5__.FormlyConfigModule.forRoot(),
            ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule.forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule.forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateLoader,
                    useFactory: TranslateHttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient],
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        _core_core_module__WEBPACK_IMPORTED_MODULE_1__.CoreModule,
        _theme_theme_module__WEBPACK_IMPORTED_MODULE_2__.ThemeModule,
        _routes_routes_module__WEBPACK_IMPORTED_MODULE_4__.RoutesModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerModule, _formly_config_module__WEBPACK_IMPORTED_MODULE_5__.FormlyConfigModule, ngx_permissions__WEBPACK_IMPORTED_MODULE_17__.NgxPermissionsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_18__.ToastrModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslateModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 5428:
/*!***************************************************!*\
  !*** ./src/app/core/authentication/auth.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





class AuthGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        return this.checkRole(route.data.role);
    }
    canActivateChild(childRoute, state) {
        return this.checkRole(childRoute.data.role);
    }
    checkRole(role) {
        const userRole = this.storageService.getItem('allroles');
        if (userRole && userRole.includes("P12689")) {
            return true;
        }
        else if (userRole && role.includes(userRole)) {
            return true;
        }
        else {
            return this.newRedirectUser(userRole);
        }
    }
    newRedirectUser(role) {
        return this.router.parseUrl('dashboard');
        // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12800")) {
        //   return this.router.parseUrl('modellazione/settore-materia');
        // }
        // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12801")) {
        //   return this.router.parseUrl('segnalazione/inserimento');
        // }
        // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12799")) {
        //   return this.router.parseUrl('segnalazione/inserimento');
        // }
        // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12690")) {
        //   return this.router.parseUrl('segnalazione/gestione');
        // }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.StorageService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 41219:
/*!*****************************************************!*\
  !*** ./src/app/core/authentication/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 35330);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.service */ 54679);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.service */ 55019);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ 77985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);








class AuthService {
    constructor(loginService, tokenService) {
        this.loginService = loginService;
        this.tokenService = tokenService;
        this.user$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({});
        this.change$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.merge)(this.tokenService.change(), this.tokenService.refresh().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.refresh()))).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.switchMap)(() => this.assignUser()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.share)());
    }
    init() {
        return new Promise(resolve => this.change$.subscribe(() => resolve()));
    }
    change() {
        return this.change$;
    }
    check() {
        return this.tokenService.valid();
    }
    login(username, password, rememberMe = false) {
        return this.loginService.login(username, password, rememberMe).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(token => this.tokenService.set(token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.check()));
    }
    refresh() {
        return this.loginService
            .refresh((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterObject)({ refresh_token: this.tokenService.getRefreshToken() }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(undefined)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(token => this.tokenService.set(token)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => this.check()));
    }
    logout() {
        return this.loginService.logout().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(() => this.tokenService.clear()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(() => !this.check()));
    }
    user() {
        return this.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.share)());
    }
    menu() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.iif)(() => this.check(), this.loginService.menu(), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)([]));
    }
    assignUser() {
        if (!this.check()) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)({}).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(user => this.user$.next(user)));
        }
        if (!(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isEmptyObject)(this.user$.getValue())) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(this.user$.getValue());
        }
        return this.loginService.me().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(user => this.user$.next(user)));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_login_service__WEBPACK_IMPORTED_MODULE_1__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_token_service__WEBPACK_IMPORTED_MODULE_0__.TokenService)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 77985:
/*!************************************************!*\
  !*** ./src/app/core/authentication/helpers.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64": () => (/* binding */ Base64),
/* harmony export */   "pack": () => (/* binding */ pack),
/* harmony export */   "unpack": () => (/* binding */ unpack),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "capitalize": () => (/* binding */ capitalize),
/* harmony export */   "currentTimestamp": () => (/* binding */ currentTimestamp),
/* harmony export */   "timeLeft": () => (/* binding */ timeLeft),
/* harmony export */   "filterObject": () => (/* binding */ filterObject),
/* harmony export */   "isEmptyObject": () => (/* binding */ isEmptyObject)
/* harmony export */ });
/* harmony import */ var base64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! base64-js */ 82173);

class Base64 {
    static encode(plainText) {
        return (0,base64_js__WEBPACK_IMPORTED_MODULE_0__.fromByteArray)(pack(plainText)).replace(/[+/=]/g, m => {
            return { '+': '-', '/': '_', '=': '' }[m];
        });
    }
    static decode(b64) {
        b64 = b64.replace(/[-_]/g, m => {
            return { '-': '+', '_': '/' }[m];
        });
        while (b64.length % 4) {
            b64 += '=';
        }
        return unpack((0,base64_js__WEBPACK_IMPORTED_MODULE_0__.toByteArray)(b64));
    }
}
function pack(str) {
    const bytes = [];
    for (let i = 0; i < str.length; i++) {
        bytes.push(...[str.charCodeAt(i)]);
    }
    return bytes;
}
function unpack(byteArray) {
    return String.fromCharCode(...byteArray);
}
const base64 = { encode: Base64.encode, decode: Base64.decode };
function capitalize(text) {
    return text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toLowerCase();
}
function currentTimestamp() {
    return Math.ceil(new Date().getTime() / 1000);
}
function timeLeft(expiredAt) {
    return Math.max(0, expiredAt - currentTimestamp());
}
function filterObject(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== undefined && value !== null));
}
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0;
}


/***/ }),

/***/ 29722:
/*!**********************************************!*\
  !*** ./src/app/core/authentication/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard),
/* harmony export */   "AuthService": () => (/* reexport safe */ _auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService),
/* harmony export */   "TokenFactory": () => (/* reexport safe */ _token_factory_service__WEBPACK_IMPORTED_MODULE_3__.TokenFactory),
/* harmony export */   "TokenService": () => (/* reexport safe */ _token_service__WEBPACK_IMPORTED_MODULE_4__.TokenService),
/* harmony export */   "BaseToken": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.BaseToken),
/* harmony export */   "JwtToken": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.JwtToken),
/* harmony export */   "SimpleToken": () => (/* reexport safe */ _token__WEBPACK_IMPORTED_MODULE_5__.SimpleToken),
/* harmony export */   "LoginService": () => (/* reexport safe */ _login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService),
/* harmony export */   "admin": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_7__.admin),
/* harmony export */   "guest": () => (/* reexport safe */ _user__WEBPACK_IMPORTED_MODULE_7__.guest),
/* harmony export */   "Base64": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.Base64),
/* harmony export */   "base64": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.base64),
/* harmony export */   "capitalize": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.capitalize),
/* harmony export */   "currentTimestamp": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.currentTimestamp),
/* harmony export */   "filterObject": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.filterObject),
/* harmony export */   "isEmptyObject": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.isEmptyObject),
/* harmony export */   "pack": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.pack),
/* harmony export */   "timeLeft": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.timeLeft),
/* harmony export */   "unpack": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_8__.unpack)
/* harmony export */ });
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interface */ 50367);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ 5428);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ 41219);
/* harmony import */ var _token_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-factory.service */ 13021);
/* harmony import */ var _token_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./token.service */ 54679);
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token */ 29517);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.service */ 55019);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user */ 19729);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ 77985);











/***/ }),

/***/ 50367:
/*!**************************************************!*\
  !*** ./src/app/core/authentication/interface.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 55019:
/*!******************************************************!*\
  !*** ./src/app/core/authentication/login.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);




class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(username, password, rememberMe = false) {
        return this.http.post('/auth/login', { username, password, rememberMe });
    }
    refresh(params) {
        return this.http.post('/auth/refresh', params);
    }
    logout() {
        return this.http.post('/auth/logout', {});
    }
    me() {
        return this.http.get('/me');
    }
    menu() {
        return this.http.get('/me/menu').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)(res => res.menu));
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 13021:
/*!**************************************************************!*\
  !*** ./src/app/core/authentication/token-factory.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenFactory": () => (/* binding */ TokenFactory)
/* harmony export */ });
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token */ 29517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class TokenFactory {
    create(attributes) {
        if (!attributes.access_token) {
            return undefined;
        }
        if (_token__WEBPACK_IMPORTED_MODULE_0__.JwtToken.is(attributes.access_token)) {
            return new _token__WEBPACK_IMPORTED_MODULE_0__.JwtToken(attributes);
        }
        return new _token__WEBPACK_IMPORTED_MODULE_0__.SimpleToken(attributes);
    }
}
TokenFactory.ɵfac = function TokenFactory_Factory(t) { return new (t || TokenFactory)(); };
TokenFactory.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokenFactory, factory: TokenFactory.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 54679:
/*!******************************************************!*\
  !*** ./src/app/core/authentication/token.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 78947);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _token_factory_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-factory.service */ 13021);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ 77985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);








class TokenService {
    constructor(store, factory) {
        this.store = store;
        this.factory = factory;
        this.key = 'ng-matero-token';
        this.change$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(undefined);
        this.refresh$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    get token() {
        if (!this._token) {
            this._token = this.factory.create(this.store.get(this.key));
        }
        return this._token;
    }
    change() {
        return this.change$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
    }
    refresh() {
        this.buildRefresh();
        return this.refresh$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)());
    }
    set(token) {
        this.save(token);
        return this;
    }
    clear() {
        this.save();
    }
    valid() {
        return true; //BYPASS LOGIN
        //return this.token?.valid() ?? false;
    }
    getBearerToken() {
        var _a, _b;
        return (_b = (_a = this.token) === null || _a === void 0 ? void 0 : _a.getBearerToken()) !== null && _b !== void 0 ? _b : '';
    }
    getRefreshToken() {
        var _a;
        return (_a = this.token) === null || _a === void 0 ? void 0 : _a.refresh_token;
    }
    ngOnDestroy() {
        this.clearRefresh();
    }
    save(token) {
        this._token = undefined;
        if (!token) {
            this.store.remove(this.key);
        }
        else {
            const value = Object.assign({ access_token: '', token_type: 'Bearer' }, token, {
                exp: token.expires_in ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.currentTimestamp)() + token.expires_in : null,
            });
            this.store.set(this.key, (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filterObject)(value));
        }
        this.change$.next(this.token);
        this.buildRefresh();
    }
    buildRefresh() {
        var _a;
        this.clearRefresh();
        if ((_a = this.token) === null || _a === void 0 ? void 0 : _a.needRefresh()) {
            this.timer$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.timer)(this.token.getRefreshTime() * 1000).subscribe(() => {
                this.refresh$.next(this.token);
            });
        }
    }
    clearRefresh() {
        if (this.timer$ && !this.timer$.closed) {
            this.timer$.unsubscribe();
        }
    }
}
TokenService.ɵfac = function TokenService_Factory(t) { return new (t || TokenService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_token_factory_service__WEBPACK_IMPORTED_MODULE_1__.TokenFactory)); };
TokenService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: TokenService, factory: TokenService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 29517:
/*!**********************************************!*\
  !*** ./src/app/core/authentication/token.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseToken": () => (/* binding */ BaseToken),
/* harmony export */   "SimpleToken": () => (/* binding */ SimpleToken),
/* harmony export */   "JwtToken": () => (/* binding */ JwtToken)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ 77985);

class BaseToken {
    constructor(attributes) {
        this.attributes = attributes;
    }
    get access_token() {
        return this.attributes.access_token;
    }
    get refresh_token() {
        return this.attributes.refresh_token;
    }
    get token_type() {
        var _a;
        return (_a = this.attributes.token_type) !== null && _a !== void 0 ? _a : 'bearer';
    }
    get exp() {
        return this.attributes.exp;
    }
    valid() {
        return this.hasAccessToken() && !this.isExpired();
    }
    getBearerToken() {
        return this.access_token
            ? [(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.capitalize)(this.token_type), this.access_token].join(' ').trim()
            : '';
    }
    needRefresh() {
        return this.exp !== undefined && this.exp >= 0;
    }
    getRefreshTime() {
        var _a;
        return (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.timeLeft)(((_a = this.exp) !== null && _a !== void 0 ? _a : 0) - 5);
    }
    hasAccessToken() {
        return !!this.access_token;
    }
    isExpired() {
        return this.exp !== undefined && this.exp - (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.currentTimestamp)() <= 0;
    }
}
class SimpleToken extends BaseToken {
}
class JwtToken extends SimpleToken {
    static is(accessToken) {
        try {
            const [_header] = accessToken.split('.');
            const header = JSON.parse(_helpers__WEBPACK_IMPORTED_MODULE_0__.base64.decode(_header));
            return header.typ.toUpperCase().includes('JWT');
        }
        catch (e) {
            return false;
        }
    }
    get exp() {
        var _a;
        return (_a = this.payload) === null || _a === void 0 ? void 0 : _a.exp;
    }
    get payload() {
        if (!this.access_token) {
            return {};
        }
        if (this._payload) {
            return this._payload;
        }
        const [, payload] = this.access_token.split('.');
        const data = JSON.parse(_helpers__WEBPACK_IMPORTED_MODULE_0__.base64.decode(payload));
        if (!data.exp) {
            data.exp = this.attributes.exp;
        }
        return (this._payload = data);
    }
}


/***/ }),

/***/ 19729:
/*!*********************************************!*\
  !*** ./src/app/core/authentication/user.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "admin": () => (/* binding */ admin),
/* harmony export */   "guest": () => (/* binding */ guest)
/* harmony export */ });
const admin = {
    id: 1,
    name: 'Zongbin',
    email: 'nzb329@163.com',
    avatar: './assets/images/avatar.jpg',
};
const guest = {
    name: 'unknown',
    email: 'unknown',
    avatar: './assets/images/avatar-default.jpg',
};


/***/ }),

/***/ 38714:
/*!************************************************!*\
  !*** ./src/app/core/bootstrap/menu.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuService": () => (/* binding */ MenuService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class MenuService {
    constructor() {
        this.menu$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    }
    /** Get all the menu data. */
    getAll() {
        return this.menu$.asObservable();
    }
    /** Observe the change of menu data. */
    change() {
        return this.menu$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)());
    }
    /** Initialize the menu data. */
    set(menu) {
        this.menu$.next(menu);
        return this.menu$.asObservable();
    }
    /** Add one item to the menu data. */
    add(menu) {
        const tmpMenu = this.menu$.value;
        tmpMenu.push(menu);
        this.menu$.next(tmpMenu);
    }
    /** Reset the menu data. */
    reset() {
        this.menu$.next([]);
    }
    /** Delete empty values and rebuild route. */
    buildRoute(routeArr) {
        let route = '';
        routeArr.forEach(item => {
            if (item && item.trim()) {
                route += '/' + item.replace(/^\/+|\/+$/g, '');
            }
        });
        return route;
    }
    /** Get the menu item name based on current route. */
    getItemName(routeArr) {
        return this.getLevel(routeArr)[routeArr.length - 1];
    }
    // Whether is a leaf menu
    isLeafItem(item) {
        var _a;
        const cond0 = item.route === undefined;
        const cond1 = item.children === undefined;
        const cond2 = !cond1 && ((_a = item.children) === null || _a === void 0 ? void 0 : _a.length) === 0;
        return cond0 || cond1 || cond2;
    }
    // Deep clone object could be jsonized
    deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    // Whether two objects could be jsonized equal
    isJsonObjEqual(obj0, obj1) {
        return JSON.stringify(obj0) === JSON.stringify(obj1);
    }
    // Whether routeArr equals realRouteArr (after remove empty route element)
    isRouteEqual(routeArr, realRouteArr) {
        realRouteArr = this.deepClone(realRouteArr);
        realRouteArr = realRouteArr.filter(r => r !== '');
        return this.isJsonObjEqual(routeArr, realRouteArr);
    }
    /** Get the menu level. */
    getLevel(routeArr) {
        //CB 20/05/2022 aggiunta questa riga per eliminare eventuali ID passati nell'url
        if (!isNaN(Number(routeArr[routeArr.length - 1])))
            routeArr.splice(-1);
        let tmpArr = [];
        this.menu$.value.forEach(item => {
            var _a;
            // Breadth-first traverse
            let unhandledLayer = [{ item, parentNamePathList: [], realRouteArr: [] }];
            while (unhandledLayer.length > 0) {
                let nextUnhandledLayer = [];
                for (const ele of unhandledLayer) {
                    const eachItem = ele.item;
                    const currentNamePathList = this.deepClone(ele.parentNamePathList).concat(eachItem.name);
                    const currentRealRouteArr = this.deepClone(ele.realRouteArr).concat(eachItem.route);
                    // Compare the full Array for expandable
                    if (this.isRouteEqual(routeArr, currentRealRouteArr)) {
                        tmpArr = currentNamePathList;
                        break;
                    }
                    if (!this.isLeafItem(eachItem)) {
                        const wrappedChildren = (_a = eachItem.children) === null || _a === void 0 ? void 0 : _a.map(child => ({
                            item: child,
                            parentNamePathList: currentNamePathList,
                            realRouteArr: currentRealRouteArr,
                        }));
                        nextUnhandledLayer = nextUnhandledLayer.concat(wrappedChildren);
                    }
                }
                unhandledLayer = nextUnhandledLayer;
            }
        });
        return tmpArr;
    }
    /** Add namespace for translation. */
    addNamespace(menu, namespace) {
        menu.forEach(menuItem => {
            menuItem.name = `${namespace}.${menuItem.name}`;
            if (menuItem.children && menuItem.children.length > 0) {
                this.addNamespace(menuItem.children, menuItem.name);
            }
        });
    }
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MenuService, factory: MenuService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 85115:
/*!*****************************************************!*\
  !*** ./src/app/core/bootstrap/preloader.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PreloaderService": () => (/* binding */ PreloaderService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class PreloaderService {
    constructor(document) {
        this.document = document;
        this.selector = 'globalLoader';
    }
    /*private*/ getElement() {
        return this.document.getElementById(this.selector);
    }
    hide() {
        const el = this.getElement();
        if (el) {
            el.addEventListener('transitionend', () => {
                el.className = 'global-loader-hidden';
            });
            if (!el.classList.contains('global-loader-hidden')) {
                el.className += ' global-loader-fade-in';
            }
        }
    }
}
PreloaderService.ɵfac = function PreloaderService_Factory(t) { return new (t || PreloaderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
PreloaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PreloaderService, factory: PreloaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18863:
/*!***************************************************!*\
  !*** ./src/app/core/bootstrap/sanctum.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SANCTUM_PREFIX": () => (/* binding */ SANCTUM_PREFIX),
/* harmony export */   "SanctumService": () => (/* binding */ SanctumService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interceptors/base-url-interceptor */ 28575);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);





const SANCTUM_PREFIX = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.InjectionToken('SANCTUM_PREFIX');
class SanctumService {
    constructor(http, baseUrl, prefix) {
        this.http = http;
        this.baseUrl = baseUrl;
        this.prefix = prefix;
    }
    load() {
        return new Promise(resolve => this.toObservable().subscribe(resolve));
    }
    toObservable() {
        return this.http.get(this.getUrl());
    }
    getUrl() {
        const prefix = this.prefix || 'sanctum';
        const path = `/${prefix.replace(/^\/|\/$/g, '')}/csrf-cookie`;
        if (!this.baseUrl) {
            return path;
        }
        const url = new URL(this.baseUrl);
        return url.origin + path;
    }
}
SanctumService.ɵfac = function SanctumService_Factory(t) { return new (t || SanctumService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_interceptors_base_url_interceptor__WEBPACK_IMPORTED_MODULE_0__.BASE_URL, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](SANCTUM_PREFIX, 8)); };
SanctumService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SanctumService, factory: SanctumService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10603:
/*!****************************************************!*\
  !*** ./src/app/core/bootstrap/settings.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../settings */ 20881);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class SettingsService {
    constructor() {
        this.notify$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
        this.options = _settings__WEBPACK_IMPORTED_MODULE_0__.defaults;
    }
    get notify() {
        return this.notify$.asObservable();
    }
    getOptions() {
        return this.options;
    }
    setOptions(options) {
        this.options = Object.assign(_settings__WEBPACK_IMPORTED_MODULE_0__.defaults, options);
        this.notify$.next(this.options);
    }
    getLanguage() {
        return this.options.language;
    }
    setLanguage(lang) {
        this.options.language = lang;
        this.notify$.next({ lang });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(); };
SettingsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49675:
/*!***************************************************!*\
  !*** ./src/app/core/bootstrap/startup.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartupService": () => (/* binding */ StartupService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 29722);
/* harmony import */ var _menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.service */ 38714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-permissions */ 16562);








class StartupService {
    constructor(authService, menuService, permissonsService, rolesService) {
        this.authService = authService;
        this.menuService = menuService;
        this.permissonsService = permissonsService;
        this.rolesService = rolesService;
    }
    /**
     * Load the application only after get the menu or other essential informations
     * such as permissions and roles.
     */
    load() {
        return new Promise((resolve, reject) => {
            this.authService
                .change()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(user => this.setPermissions(user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.switchMap)(() => this.authService.menu()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(menu => this.setMenu(menu)))
                .subscribe(() => resolve(), () => resolve());
        });
    }
    setMenu(menu) {
        this.menuService.addNamespace(menu, 'menu');
        this.menuService.set(menu);
    }
    setPermissions(user) {
        // In a real app, you should get permissions and roles from the user information.
        const permissions = ['canAdd', 'canDelete', 'canEdit', 'canRead'];
        this.permissonsService.loadPermissions(permissions);
        this.rolesService.flushRoles();
        this.rolesService.addRoles({ ADMIN: permissions });
        // Tips: Alternatively you can add permissions with role at the same time.
        // this.rolesService.addRolesWithPermissions({ ADMIN: permissions });
    }
}
StartupService.ɵfac = function StartupService_Factory(t) { return new (t || StartupService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_menu_service__WEBPACK_IMPORTED_MODULE_1__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_5__.NgxPermissionsService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_5__.NgxRolesService)); };
StartupService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: StartupService, factory: StartupService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 32146:
/*!**********************************************************!*\
  !*** ./src/app/core/bootstrap/translate-lang.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateLangService": () => (/* binding */ TranslateLangService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.service */ 10603);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







class TranslateLangService {
    constructor(injector, translate, settings) {
        this.injector = injector;
        this.translate = translate;
        this.settings = settings;
    }
    load() {
        return new Promise(resolve => {
            const locationInitialized = this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.LOCATION_INITIALIZED, Promise.resolve());
            locationInitialized.then(() => {
                const browserLang = navigator.language;
                //const defaultLang = browserLang.match(/en-US|zh-CN|zh-TW/) ? browserLang : 'en-US';
                const defaultLang = 'it-IT';
                this.settings.setLanguage(defaultLang);
                this.translate.setDefaultLang(defaultLang);
                this.translate.use(defaultLang).subscribe(() => console.log(`Successfully initialized '${defaultLang}' language.'`), () => console.error(`Problem with '${defaultLang}' language initialization.'`), () => resolve());
            });
        });
    }
}
TranslateLangService.ɵfac = function TranslateLangService_Factory(t) { return new (t || TranslateLangService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_0__.SettingsService)); };
TranslateLangService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TranslateLangService, factory: TranslateLangService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 40294:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-import-guard */ 97802);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class CoreModule {
    constructor(parentModule) {
        (0,_module_import_guard__WEBPACK_IMPORTED_MODULE_0__.throwIfAlreadyLoaded)(parentModule, 'CoreModule');
    }
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](CoreModule, 12)); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CoreModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] }); })();


/***/ }),

/***/ 3825:
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_0__.defaults),
/* harmony export */   "StartupServiceFactory": () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.StartupServiceFactory),
/* harmony export */   "TranslateLangServiceFactory": () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.TranslateLangServiceFactory),
/* harmony export */   "appInitializerProviders": () => (/* reexport safe */ _initializers__WEBPACK_IMPORTED_MODULE_1__.appInitializerProviders),
/* harmony export */   "MenuService": () => (/* reexport safe */ _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_2__.MenuService),
/* harmony export */   "SettingsService": () => (/* reexport safe */ _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService),
/* harmony export */   "StartupService": () => (/* reexport safe */ _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_4__.StartupService),
/* harmony export */   "PreloaderService": () => (/* reexport safe */ _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_5__.PreloaderService),
/* harmony export */   "TranslateLangService": () => (/* reexport safe */ _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_6__.TranslateLangService),
/* harmony export */   "SANCTUM_PREFIX": () => (/* reexport safe */ _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__.SANCTUM_PREFIX),
/* harmony export */   "SanctumService": () => (/* reexport safe */ _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__.SanctumService),
/* harmony export */   "BASE_URL": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.BASE_URL),
/* harmony export */   "BaseUrlInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.BaseUrlInterceptor),
/* harmony export */   "DefaultInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.DefaultInterceptor),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.ErrorInterceptor),
/* harmony export */   "LoggingInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.LoggingInterceptor),
/* harmony export */   "NoopInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.NoopInterceptor),
/* harmony export */   "STATUS": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.STATUS),
/* harmony export */   "SettingsInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.SettingsInterceptor),
/* harmony export */   "TokenInterceptor": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.TokenInterceptor),
/* harmony export */   "httpInterceptorProviders": () => (/* reexport safe */ _interceptors__WEBPACK_IMPORTED_MODULE_8__.httpInterceptorProviders),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.AuthGuard),
/* harmony export */   "AuthService": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.AuthService),
/* harmony export */   "Base64": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.Base64),
/* harmony export */   "BaseToken": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.BaseToken),
/* harmony export */   "JwtToken": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.JwtToken),
/* harmony export */   "LoginService": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.LoginService),
/* harmony export */   "SimpleToken": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.SimpleToken),
/* harmony export */   "TokenFactory": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.TokenFactory),
/* harmony export */   "TokenService": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.TokenService),
/* harmony export */   "admin": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.admin),
/* harmony export */   "base64": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.base64),
/* harmony export */   "capitalize": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.capitalize),
/* harmony export */   "currentTimestamp": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.currentTimestamp),
/* harmony export */   "filterObject": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.filterObject),
/* harmony export */   "guest": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.guest),
/* harmony export */   "isEmptyObject": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.isEmptyObject),
/* harmony export */   "pack": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.pack),
/* harmony export */   "timeLeft": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.timeLeft),
/* harmony export */   "unpack": () => (/* reexport safe */ _authentication__WEBPACK_IMPORTED_MODULE_9__.unpack)
/* harmony export */ });
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings */ 20881);
/* harmony import */ var _initializers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initializers */ 69317);
/* harmony import */ var _bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bootstrap/menu.service */ 38714);
/* harmony import */ var _bootstrap_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bootstrap/settings.service */ 10603);
/* harmony import */ var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bootstrap/startup.service */ 49675);
/* harmony import */ var _bootstrap_preloader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bootstrap/preloader.service */ 85115);
/* harmony import */ var _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bootstrap/translate-lang.service */ 32146);
/* harmony import */ var _bootstrap_sanctum_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap/sanctum.service */ 18863);
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors */ 72756);
/* harmony import */ var _authentication__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication */ 29722);


// Bootstrap






// Interceptors

// Authentication



/***/ }),

/***/ 69317:
/*!**************************************!*\
  !*** ./src/app/core/initializers.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateLangServiceFactory": () => (/* binding */ TranslateLangServiceFactory),
/* harmony export */   "StartupServiceFactory": () => (/* binding */ StartupServiceFactory),
/* harmony export */   "appInitializerProviders": () => (/* binding */ appInitializerProviders)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap/translate-lang.service */ 32146);
/* harmony import */ var _bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bootstrap/startup.service */ 49675);

// import { SanctumService } from './bootstrap/sanctum.service';
// export function SanctumServiceFactory(sanctumService: SanctumService) {
//   return () => sanctumService.load();
// }

function TranslateLangServiceFactory(translateLangService) {
    return () => translateLangService.load();
}

function StartupServiceFactory(startupService) {
    return () => startupService.load();
}
const appInitializerProviders = [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: SanctumServiceFactory,
    //   deps: [SanctumService],
    //   multi: true,
    // },
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.APP_INITIALIZER,
        useFactory: TranslateLangServiceFactory,
        deps: [_bootstrap_translate_lang_service__WEBPACK_IMPORTED_MODULE_0__.TranslateLangService],
        multi: true,
    },
    {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__.APP_INITIALIZER,
        useFactory: StartupServiceFactory,
        deps: [_bootstrap_startup_service__WEBPACK_IMPORTED_MODULE_1__.StartupService],
        multi: true,
    },
];


/***/ }),

/***/ 28575:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/base-url-interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": () => (/* binding */ BASE_URL),
/* harmony export */   "BaseUrlInterceptor": () => (/* binding */ BaseUrlInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const BASE_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('BASE_URL');
class BaseUrlInterceptor {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.hasScheme = (url) => this.baseUrl && new RegExp('^http(s)?://', 'i').test(url);
    }
    intercept(request, next) {
        return this.hasScheme(request.url) === false
            ? next.handle(request.clone({ url: this.prependBaseUrl(request.url) }))
            : next.handle(request);
    }
    prependBaseUrl(url) {
        var _a;
        return [(_a = this.baseUrl) === null || _a === void 0 ? void 0 : _a.replace(/\/$/g, ''), url.replace(/^\.?\//, '')]
            .filter(val => val)
            .join('/');
    }
}
BaseUrlInterceptor.ɵfac = function BaseUrlInterceptor_Factory(t) { return new (t || BaseUrlInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](BASE_URL, 8)); };
BaseUrlInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BaseUrlInterceptor, factory: BaseUrlInterceptor.ɵfac });


/***/ }),

/***/ 31678:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/default-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultInterceptor": () => (/* binding */ DefaultInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 51353);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 34101);






class DefaultInterceptor {
    constructor(toast) {
        this.toast = toast;
    }
    intercept(req, next) {
        if (!req.url.includes('/api/')) {
            return next.handle(req);
        }
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.mergeMap)((event) => this.handleOkReq(event)));
    }
    handleOkReq(event) {
        if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
            const body = event.body;
            // failure: { code: **, msg: 'failure' }
            // success: { code: 0,  msg: 'success', data: {} }
            if (body && 'code' in body && body.code !== 0) {
                if (body.msg) {
                    this.toast.error(body.msg);
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)([]);
            }
        }
        // Pass down event if everything is OK
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event);
    }
}
DefaultInterceptor.ɵfac = function DefaultInterceptor_Factory(t) { return new (t || DefaultInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService)); };
DefaultInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: DefaultInterceptor, factory: DefaultInterceptor.ɵfac });


/***/ }),

/***/ 47855:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/error-interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "STATUS": () => (/* binding */ STATUS),
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ 94562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);












var STATUS;
(function (STATUS) {
    STATUS[STATUS["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    STATUS[STATUS["FORBIDDEN"] = 403] = "FORBIDDEN";
    STATUS[STATUS["NOT_FOUND"] = 404] = "NOT_FOUND";
    STATUS[STATUS["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    STATUS[STATUS["SESSION_EXPIRED"] =  false || 304] = "SESSION_EXPIRED";
})(STATUS || (STATUS = {}));
class ErrorInterceptor {
    constructor(router, toast, dialogAlert, formBuilder) {
        this.router = router;
        this.toast = toast;
        this.dialogAlert = dialogAlert;
        this.formBuilder = formBuilder;
        this.errorPages = [STATUS.FORBIDDEN, STATUS.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR];
        this.getMessage = (error) => {
            var _a, _b;
            if ((_a = error.error) === null || _a === void 0 ? void 0 : _a.message) {
                return error.error.message;
            }
            if ((_b = error.error) === null || _b === void 0 ? void 0 : _b.msg) {
                return error.error.msg;
            }
            return `${error.status} ${error.statusText}`;
        };
        this.counter = 0;
        this.form = this.formBuilder.group({});
    }
    intercept(request, next) {
        return next
            .handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)((error) => this.handleError(error)));
    }
    handleError(error) {
        console.log('Request URL:', error.url); // Log dell'URL della richiesta
        console.log('Request Status:', error.status); // Log del codice di stato
        console.log('Request Body:', error.message); // Log del messaggio di errore
        if (this.errorPages.includes(error.status)) {
            this.router.navigateByUrl(`/${error.status}`, {
                skipLocationChange: true,
            });
        }
        else {
            // console.error('ERROR', error);
            /* this.toast.error(this.getMessage(error)); */
            if (error.status === STATUS.UNAUTHORIZED) {
                this.router.navigateByUrl('/auth/login');
            }
            if (error.status === 0) {
                this.counter++;
                if (this.counter <= 1) {
                    this.dialogAlert.alert(`Sessione scaduta! Si prega di refreshare la pagina o effettuare di nuovo il login.`
                    // `Sessione scaduta! Si prega di refreshare la pagina o effettuare di nuovo il login,\n request url:\n` + error.url + '\n status: ' + error.status + '\n body: ' + error.message
                    );
                    this.router.navigateByUrl('/dashboard');
                }
            }
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_5__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 72756:
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopInterceptor": () => (/* reexport safe */ _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoopInterceptor),
/* harmony export */   "BASE_URL": () => (/* reexport safe */ _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BASE_URL),
/* harmony export */   "BaseUrlInterceptor": () => (/* reexport safe */ _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BaseUrlInterceptor),
/* harmony export */   "SettingsInterceptor": () => (/* reexport safe */ _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__.SettingsInterceptor),
/* harmony export */   "TokenInterceptor": () => (/* reexport safe */ _token_interceptor__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptor),
/* harmony export */   "DefaultInterceptor": () => (/* reexport safe */ _default_interceptor__WEBPACK_IMPORTED_MODULE_4__.DefaultInterceptor),
/* harmony export */   "ErrorInterceptor": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor),
/* harmony export */   "STATUS": () => (/* reexport safe */ _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.STATUS),
/* harmony export */   "LoggingInterceptor": () => (/* reexport safe */ _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoggingInterceptor),
/* harmony export */   "httpInterceptorProviders": () => (/* binding */ httpInterceptorProviders)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noop-interceptor */ 14421);
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-url-interceptor */ 28575);
/* harmony import */ var _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-interceptor */ 55565);
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-interceptor */ 55756);
/* harmony import */ var _default_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default-interceptor */ 31678);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-interceptor */ 47855);
/* harmony import */ var _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logging-interceptor */ 94569);


// import { SanctumInterceptor } from './sanctum-interceptor';







// export * from './sanctum-interceptor';






/** Http interceptor providers in outside-in order */
const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _noop_interceptor__WEBPACK_IMPORTED_MODULE_0__.NoopInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: SanctumInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BaseUrlInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _settings_interceptor__WEBPACK_IMPORTED_MODULE_2__.SettingsInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_3__.TokenInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _default_interceptor__WEBPACK_IMPORTED_MODULE_4__.DefaultInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_5__.ErrorInterceptor, multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HTTP_INTERCEPTORS, useClass: _logging_interceptor__WEBPACK_IMPORTED_MODULE_6__.LoggingInterceptor, multi: true },
];


/***/ }),

/***/ 94569:
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/logging-interceptor.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggingInterceptor": () => (/* binding */ LoggingInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





class LoggingInterceptor {
    constructor(messenger) {
        this.messenger = messenger;
    }
    intercept(req, next) {
        const started = Date.now();
        let ok;
        // extend server response observable with logging
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(
        // Succeeds when there is a response; ignore other events
        event => (ok = event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse ? 'succeeded' : ''), 
        // Operation failed; error is an HttpErrorResponse
        error => (ok = 'failed')), 
        // Log when response observable either completes or errors
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            const elapsed = Date.now() - started;
            const msg = `${req.method} "${req.urlWithParams}" ${ok} in ${elapsed} ms.`;
            this.messenger.add(msg);
        }));
    }
}
LoggingInterceptor.ɵfac = function LoggingInterceptor_Factory(t) { return new (t || LoggingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_shared__WEBPACK_IMPORTED_MODULE_0__.MessageService)); };
LoggingInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: LoggingInterceptor, factory: LoggingInterceptor.ɵfac });


/***/ }),

/***/ 14421:
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoopInterceptor": () => (/* binding */ NoopInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });


/***/ }),

/***/ 55565:
/*!***********************************************************!*\
  !*** ./src/app/core/interceptors/settings-interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsInterceptor": () => (/* binding */ SettingsInterceptor)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class SettingsInterceptor {
    constructor(settings) {
        this.settings = settings;
    }
    intercept(request, next) {
        return next.handle(request.clone({
            headers: request.headers.append('Accept-Language', this.settings.getLanguage()),
        }));
    }
}
SettingsInterceptor.ɵfac = function SettingsInterceptor_Factory(t) { return new (t || SettingsInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService)); };
SettingsInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsInterceptor, factory: SettingsInterceptor.ɵfac });


/***/ }),

/***/ 55756:
/*!********************************************************!*\
  !*** ./src/app/core/interceptors/token-interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 29722);
/* harmony import */ var _base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base-url-interceptor */ 28575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);









class TokenInterceptor {
    constructor(tokenService, router, baseUrl) {
        this.tokenService = tokenService;
        this.router = router;
        this.baseUrl = baseUrl;
        this.hasHttpScheme = (url) => new RegExp('^http(s)?://', 'i').test(url);
    }
    intercept(request, next) {
        const handler = () => {
            if (request.url.includes('/auth/logout')) {
                this.router.navigateByUrl('/auth/login');
            }
            if (this.router.url.includes('/auth/login')) {
                this.router.navigateByUrl('/dashboard');
            }
        };
        if (this.tokenService.valid() && this.shouldAppendToken(request.url)) {
            return next
                .handle(request.clone({
                headers: request.headers.append('Authorization', this.tokenService.getBearerToken()),
                withCredentials: true,
            }))
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                if (error.status === 401) {
                    this.tokenService.clear();
                }
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => handler()));
        }
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => handler()));
    }
    shouldAppendToken(url) {
        return !this.hasHttpScheme(url) || this.includeBaseUrl(url);
    }
    includeBaseUrl(url) {
        if (!this.baseUrl) {
            return false;
        }
        const baseUrl = this.baseUrl.replace(/\/$/, '');
        return new RegExp(`^${baseUrl}`, 'i').test(url);
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.TokenService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_base_url_interceptor__WEBPACK_IMPORTED_MODULE_1__.BASE_URL, 8)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 97802:
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throwIfAlreadyLoaded": () => (/* binding */ throwIfAlreadyLoaded)
/* harmony export */ });
function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
    }
}


/***/ }),

/***/ 20881:
/*!**********************************!*\
  !*** ./src/app/core/settings.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaults": () => (/* binding */ defaults)
/* harmony export */ });
const defaults = {
    navPos: 'side',
    theme: 'light',
    dir: 'ltr',
    showHeader: true,
    headerPos: 'fixed',
    showUserPanel: true,
    sidenavOpened: true,
    sidenavCollapsed: false,
    language: 'it-IT',
};


/***/ }),

/***/ 77009:
/*!***************************************!*\
  !*** ./src/app/fake-login.service.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeLoginService": () => (/* binding */ FakeLoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




/**
 * You should delete this file in the real APP.
 */
class FakeLoginService extends _core__WEBPACK_IMPORTED_MODULE_0__.LoginService {
    constructor() {
        super(...arguments);
        this.token = { access_token: 'MW56YjMyOUAxNjMuY29tWm9uZ2Jpbg==', token_type: 'bearer' };
    }
    login() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.token);
    }
    refresh() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.token);
    }
    logout() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)({});
    }
    me() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(_core__WEBPACK_IMPORTED_MODULE_0__.admin);
    }
    menu() {
        return this.http
            .get('assets/data/nuovoMenu.json?_t=' + Date.now())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => res.menu));
    }
}
FakeLoginService.ɵfac = /*@__PURE__*/ function () { let ɵFakeLoginService_BaseFactory; return function FakeLoginService_Factory(t) { return (ɵFakeLoginService_BaseFactory || (ɵFakeLoginService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](FakeLoginService)))(t || FakeLoginService); }; }();
FakeLoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FakeLoginService, factory: FakeLoginService.ɵfac });


/***/ }),

/***/ 55845:
/*!*****************************************!*\
  !*** ./src/app/formly-config.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyConfigModule": () => (/* binding */ FormlyConfigModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 44466);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-formly/core */ 91531);
/* harmony import */ var _formly_templates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formly-templates */ 69829);
/* harmony import */ var _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formly-wrappers */ 93942);
/* harmony import */ var _formly_validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formly-validations */ 77115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








/**
 * Formly global configuration
 */
const formlyModuleProviders = _ngx_formly_core__WEBPACK_IMPORTED_MODULE_4__.FormlyModule.forRoot({
    types: [
        {
            name: 'combobox',
            component: _formly_templates__WEBPACK_IMPORTED_MODULE_1__.FormlyFieldComboboxComponent,
            wrappers: ['form-field'],
        },
    ],
    wrappers: [
        {
            name: 'panel',
            component: _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperPanelComponent,
        },
    ],
    validationMessages: [],
}).providers;
class FormlyConfigModule {
    constructor(formlyValidations) {
        formlyValidations.init();
    }
    static forRoot() {
        return {
            ngModule: FormlyConfigModule,
            providers: [formlyModuleProviders],
        };
    }
}
FormlyConfigModule.ɵfac = function FormlyConfigModule_Factory(t) { return new (t || FormlyConfigModule)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_formly_validations__WEBPACK_IMPORTED_MODULE_3__.FormlyValidations)); };
FormlyConfigModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FormlyConfigModule });
FormlyConfigModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_formly_validations__WEBPACK_IMPORTED_MODULE_3__.FormlyValidations], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FormlyConfigModule, { declarations: [_formly_templates__WEBPACK_IMPORTED_MODULE_1__.FormlyFieldComboboxComponent, _formly_wrappers__WEBPACK_IMPORTED_MODULE_2__.FormlyWrapperPanelComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ }),

/***/ 69829:
/*!*************************************!*\
  !*** ./src/app/formly-templates.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyFieldComboboxComponent": () => (/* binding */ FormlyFieldComboboxComponent)
/* harmony export */ });
/* harmony import */ var _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-formly/material/form-field */ 56817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-matero/extensions/select */ 55106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/pipes/to-observable.pipe */ 65279);







const _c0 = ["select"];
/**
 * This is just an example.
 */

class FormlyFieldComboboxComponent extends _ngx_formly_material_form_field__WEBPACK_IMPORTED_MODULE_1__.FieldType {
  get bindValue() {
    return typeof this.to.valueProp === 'string' ? this.to.valueProp : undefined;
  } // The original `onContainerClick` has been covered up in FieldType, so we should redefine it.


  onContainerClick(event) {
    var _a;

    const target = event.target;

    if (/mat-form-field|mtx-select/g.test(((_a = target.parentElement) === null || _a === void 0 ? void 0 : _a.classList[0]) || '')) {
      this.select.focus();
      this.select.open();
    }
  }

}

FormlyFieldComboboxComponent.ɵfac = /*@__PURE__*/function () {
  let ɵFormlyFieldComboboxComponent_BaseFactory;
  return function FormlyFieldComboboxComponent_Factory(t) {
    return (ɵFormlyFieldComboboxComponent_BaseFactory || (ɵFormlyFieldComboboxComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](FormlyFieldComboboxComponent)))(t || FormlyFieldComboboxComponent);
  };
}();

FormlyFieldComboboxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FormlyFieldComboboxComponent,
  selectors: [["formly-field-combobox"]],
  viewQuery: function FormlyFieldComboboxComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.select = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
  decls: 4,
  vars: 13,
  consts: [[3, "formControl", "items", "bindLabel", "bindValue", "multiple", "placeholder", "required", "closeOnSelect", "compareWith"], ["select", ""]],
  template: function FormlyFieldComboboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mtx-select", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "toObservable");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.formControl)("items", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 11, ctx.to.options)))("bindLabel", ctx.to.labelProp)("bindValue", ctx.bindValue)("multiple", ctx.to.multiple)("placeholder", ctx.to.placeholder)("required", ctx.to.required)("closeOnSelect", !ctx.to.multiple)("compareWith", ctx.to.compareWith);
    }
  },
  directives: [_ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_3__.MtxSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _shared_pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_0__.ToObservablePipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ }),

/***/ 77115:
/*!***************************************!*\
  !*** ./src/app/formly-validations.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyValidations": () => (/* binding */ FormlyValidations)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-formly/core */ 91531);





class FormlyValidations {
    constructor(translate, formlyConfig) {
        this.translate = translate;
        this.formlyConfig = formlyConfig;
    }
    init() {
        // message without params
        this.formlyConfig.addValidatorMessage('required', (_err, _field) => this.translate.stream('validations.required'));
        // message with params
        this.formlyConfig.addValidatorMessage('minlength', (err, field) => this.minlengthValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('maxlength', (err, field) => this.maxlengthValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('min', (err, field) => this.minValidationMessage(err, field, this.translate));
        this.formlyConfig.addValidatorMessage('max', (err, field) => this.maxValidationMessage(err, field, this.translate));
    }
    minlengthValidationMessage(err, field, translate) {
        var _a;
        return translate.stream('validations.minLength', { number: (_a = field.templateOptions) === null || _a === void 0 ? void 0 : _a.minLength });
    }
    maxlengthValidationMessage(err, field, translate) {
        var _a;
        return translate.stream('validations.maxLength', { number: (_a = field.templateOptions) === null || _a === void 0 ? void 0 : _a.maxLength });
    }
    minValidationMessage(err, field, translate) {
        var _a;
        return translate.stream('validations.min', { number: (_a = field.templateOptions) === null || _a === void 0 ? void 0 : _a.min });
    }
    maxValidationMessage(err, field, translate) {
        var _a;
        return translate.stream('validations.max', { number: (_a = field.templateOptions) === null || _a === void 0 ? void 0 : _a.max });
    }
}
FormlyValidations.ɵfac = function FormlyValidations_Factory(t) { return new (t || FormlyValidations)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_formly_core__WEBPACK_IMPORTED_MODULE_2__.FormlyConfig)); };
FormlyValidations.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormlyValidations, factory: FormlyValidations.ɵfac });


/***/ }),

/***/ 93942:
/*!************************************!*\
  !*** ./src/app/formly-wrappers.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormlyWrapperPanelComponent": () => (/* binding */ FormlyWrapperPanelComponent)
/* harmony export */ });
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-formly/core */ 91531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * This is just an example.
 */
class FormlyWrapperPanelComponent extends _ngx_formly_core__WEBPACK_IMPORTED_MODULE_0__.FieldWrapper {
}
FormlyWrapperPanelComponent.ɵfac = /*@__PURE__*/ function () { let ɵFormlyWrapperPanelComponent_BaseFactory; return function FormlyWrapperPanelComponent_Factory(t) { return (ɵFormlyWrapperPanelComponent_BaseFactory || (ɵFormlyWrapperPanelComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](FormlyWrapperPanelComponent)))(t || FormlyWrapperPanelComponent); }; }();
FormlyWrapperPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FormlyWrapperPanelComponent, selectors: [["formly-wrapper-panel"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "card-body"], ["fieldComponent", ""]], template: function FormlyWrapperPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Its time to party");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](6, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.to.label);
    } }, encapsulation: 2 });


/***/ }),

/***/ 8372:
/*!***********************************************!*\
  !*** ./src/app/material-extensions.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialExtensionsModule": () => (/* binding */ MaterialExtensionsModule)
/* harmony export */ });
/* harmony import */ var _ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-matero/extensions/alert */ 96855);
/* harmony import */ var _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-matero/extensions/button */ 39581);
/* harmony import */ var _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-matero/extensions/checkbox-group */ 64611);
/* harmony import */ var _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-matero/extensions/colorpicker */ 37796);
/* harmony import */ var _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-matero/extensions/datetimepicker */ 79675);
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ 94562);
/* harmony import */ var _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-matero/extensions/grid */ 13940);
/* harmony import */ var _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/loader */ 23563);
/* harmony import */ var _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-matero/extensions/popover */ 25394);
/* harmony import */ var _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-matero/extensions/progress */ 38293);
/* harmony import */ var _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-matero/extensions/select */ 55106);
/* harmony import */ var _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-matero/extensions/slider */ 52124);
/* harmony import */ var _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-matero/extensions/split */ 79094);
/* harmony import */ var _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-matero/extensions/tooltip */ 73547);
/* harmony import */ var _ng_matero_extensions_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-matero/extensions/core */ 85475);
/* harmony import */ var _ng_matero_extensions_moment_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-matero/extensions-moment-adapter */ 60304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

















class MaterialExtensionsModule {
}
MaterialExtensionsModule.ɵfac = function MaterialExtensionsModule_Factory(t) { return new (t || MaterialExtensionsModule)(); };
MaterialExtensionsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialExtensionsModule });
MaterialExtensionsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _ng_matero_extensions_core__WEBPACK_IMPORTED_MODULE_1__.DatetimeAdapter,
            useClass: _ng_matero_extensions_moment_adapter__WEBPACK_IMPORTED_MODULE_2__.MomentDatetimeAdapter,
        },
        {
            provide: _ng_matero_extensions_core__WEBPACK_IMPORTED_MODULE_1__.MTX_DATETIME_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'YYYY-MM-DD',
                    monthInput: 'MMMM',
                    timeInput: 'HH:mm',
                    datetimeInput: 'YYYY-MM-DD HH:mm',
                },
                display: {
                    dateInput: 'YYYY-MM-DD',
                    monthInput: 'MMMM',
                    timeInput: 'HH:mm',
                    datetimeInput: 'YYYY-MM-DD HH:mm',
                    monthYearLabel: 'YYYY MMMM',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'MMMM YYYY',
                    popupHeaderDateLabel: 'MMM DD, ddd',
                },
            },
        },
    ], imports: [_ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__.MtxAlertModule,
        _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_4__.MtxButtonModule,
        _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_5__.MtxCheckboxGroupModule,
        _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_6__.MtxColorpickerModule,
        _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_7__.MtxDatetimepickerModule,
        _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_8__.MtxDialogModule,
        _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__.MtxGridModule,
        _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__.MtxLoaderModule,
        _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__.MtxPopoverModule,
        _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__.MtxProgressModule,
        _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__.MtxSelectModule,
        _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__.MtxSliderModule,
        _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__.MtxSplitModule,
        _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__.MtxTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialExtensionsModule, { exports: [_ng_matero_extensions_alert__WEBPACK_IMPORTED_MODULE_3__.MtxAlertModule,
        _ng_matero_extensions_button__WEBPACK_IMPORTED_MODULE_4__.MtxButtonModule,
        _ng_matero_extensions_checkbox_group__WEBPACK_IMPORTED_MODULE_5__.MtxCheckboxGroupModule,
        _ng_matero_extensions_colorpicker__WEBPACK_IMPORTED_MODULE_6__.MtxColorpickerModule,
        _ng_matero_extensions_datetimepicker__WEBPACK_IMPORTED_MODULE_7__.MtxDatetimepickerModule,
        _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_8__.MtxDialogModule,
        _ng_matero_extensions_grid__WEBPACK_IMPORTED_MODULE_9__.MtxGridModule,
        _ng_matero_extensions_loader__WEBPACK_IMPORTED_MODULE_10__.MtxLoaderModule,
        _ng_matero_extensions_popover__WEBPACK_IMPORTED_MODULE_11__.MtxPopoverModule,
        _ng_matero_extensions_progress__WEBPACK_IMPORTED_MODULE_12__.MtxProgressModule,
        _ng_matero_extensions_select__WEBPACK_IMPORTED_MODULE_13__.MtxSelectModule,
        _ng_matero_extensions_slider__WEBPACK_IMPORTED_MODULE_14__.MtxSliderModule,
        _ng_matero_extensions_split__WEBPACK_IMPORTED_MODULE_15__.MtxSplitModule,
        _ng_matero_extensions_tooltip__WEBPACK_IMPORTED_MODULE_16__.MtxTooltipModule] }); })();


/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 43672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ 81196);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/divider */ 19975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/expansion */ 12928);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ 63346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ 60833);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/progress-spinner */ 74742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 61859);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tree */ 34972);
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material-moment-adapter */ 8441);
/* harmony import */ var _shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/paginator-i18n.service */ 23350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);






































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorIntl,
            deps: [_shared_services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_0__.PaginatorI18nService],
            useFactory: (paginatorI18nSrv) => paginatorI18nSrv.getPaginatorIntl(),
        },
        {
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: Object.assign({}, new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogConfig()),
        },
        // This will be overrided by runtime setting
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE,
            useFactory: () => navigator.language,
        },
        { provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE, useValue: 'it-IT' },
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.DateAdapter,
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__.MomentDateAdapter,
            deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_LOCALE],
        },
        {
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MAT_DATE_FORMATS,
            useValue: {
                parse: {
                    dateInput: 'DD/MM/YYYY',
                },
                display: {
                    dateInput: 'DD/MM/YYYY',
                    monthYearLabel: 'YYYY MMM',
                    dateA11yLabel: 'LL',
                    monthYearA11yLabel: 'YYYY MMM',
                },
            },
        },
    ], imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__.MatMomentDateModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule,
        _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_5__.MatMomentDateModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_16__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_17__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatNativeDateModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_25__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_26__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_4__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule] }); })();


/***/ }),

/***/ 34335:
/*!*********************************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DettaglioComunicazioneComponent": () => (/* binding */ DettaglioComunicazioneComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/comunicazioni.model */ 72580);
/* harmony import */ var _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models/comunicazione-letta.model */ 73463);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);














function DettaglioComunicazioneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Comunicazione agli utenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div")(6, "h3")(7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Oggetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "h3")(14, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Tipo Comunicazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div")(22, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Messaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function DettaglioComunicazioneComponent_div_1_Template_mat_checkbox_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Seleziona per presa visione");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br")(29, "br")(30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-dialog-actions", 8)(32, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function DettaglioComunicazioneComponent_div_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.salvaComunicazioneLetta(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "button", 10)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.comunicazione.oggetto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.tipoComunicazioni == null ? null : ctx_r0.tipoComunicazioni.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.comunicazione.messaggio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r0.checked);
} }
function DettaglioComunicazioneComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content", 2)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Comunicazione agli utenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3)(5, "div")(6, "h3")(7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Oggetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div")(13, "h3")(14, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Tipo Comunicazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div")(22, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Messaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "br")(27, "br")(28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "mat-dialog-actions", 8)(30, "button", 10)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.comunicazione.oggetto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.tipoComunicazioni == null ? null : ctx_r1.tipoComunicazioni.nome);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.comunicazione.messaggio);
} }
class DettaglioComunicazioneComponent {
    constructor(data, comunicazioniSrv, storageService, dialogRef) {
        this.data = data;
        this.comunicazioniSrv = comunicazioniSrv;
        this.storageService = storageService;
        this.dialogRef = dialogRef;
        this.tipoDettaglio = 0;
        this.idComunicazione = 0;
        this.matricola = '';
        this.role = ' ';
        this.comunicazione = new _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_1__.Comunicazioni();
        this.comunicazioneLetta = new _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_2__.ComunicazioneLetta();
        this.checked = false;
    }
    ngOnInit() {
        this.tipoDettaglio = this.data.tipoDettaglio;
        this.idComunicazione = this.data.id;
        this.matricola = this.storageService.getItem('matricola');
        this.role = this.storageService.getItem('allroles');
        this.getComunicazione();
    }
    getComunicazione() {
        this.comunicazioniSrv.newGetComunicazioneById(this.idComunicazione).subscribe({
            next: (comunicazione) => {
                this.comunicazione = comunicazione;
                this.comunicazioniSrv.getTipoComunicazioneById(this.comunicazione.idTipoComunicazione).subscribe({
                    next: (tipoComunicazione) => {
                        this.tipoComunicazioni = tipoComunicazione;
                    }
                });
            }
        });
    }
    salvaComunicazioneLetta() {
        if (this.checked) {
            this.comunicazioneLetta = new _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_2__.ComunicazioneLetta();
            this.comunicazioneLetta.idComunicazione = this.idComunicazione;
            this.comunicazioneLetta.matricola = this.matricola;
            this.comunicazioniSrv.newSaveComunicazioneLettaChecked(this.comunicazioneLetta).subscribe(() => {
                // Chiudi il dialog dopo aver salvato la comunicazione letta
                this.dialogRef.close();
            });
        }
    }
}
DettaglioComunicazioneComponent.ɵfac = function DettaglioComunicazioneComponent_Factory(t) { return new (t || DettaglioComunicazioneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__.ComunicazioniService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef)); };
DettaglioComunicazioneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DettaglioComunicazioneComponent, selectors: [["app-dettaglio-comunicazione"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], ["align", "center"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], [1, "displa-title"], ["name", "chkLetta", "labelPosition", "before", 3, "ngModel", "ngModelChange"], ["align", "center", 1, "btn-box"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-done", 3, "disabled", "click"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-mod"]], template: function DettaglioComunicazioneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "container-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, DettaglioComunicazioneComponent_div_1_Template, 40, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, DettaglioComunicazioneComponent_div_2_Template, 34, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitch", ctx.tipoDettaglio);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngSwitchCase", 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon], styles: [".table[_ngcontent-%COMP%] {\n  min-width: 900px;\n}\n\ntr[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  left: 0px;\n  font-size: 12px;\n  color: #656565;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  left: 0px;\n  font-size: 22px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #5e5e5e !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-done[_ngcontent-%COMP%] {\n  background: #00b050;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%] {\n  background: #fd5959 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%]:disabled {\n  background: #f6d9d9 !important;\n  color: white;\n}\n\n.btn-dlt-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  text-decoration: none;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.elem-ico[_ngcontent-%COMP%] {\n  zoom: 1;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  color: #00000073 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #0000001a;\n}\n\n.btn-def[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n  border: none;\n  border-radius: 2px;\n}\n\n.btn-def[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.btn-def-yes[_ngcontent-%COMP%] {\n  background: #ff0000 !important;\n  color: white;\n}\n\n.btn-def-no[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  position: relative;\n  top: -28px;\n}\n\n.main-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  left: -4px;\n  zoom: 0.8;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: all 0.5s;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 288px;\n  padding: 12px;\n  background-color: rgba(65, 65, 65, 0.95);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 126%;\n  left: -256%;\n  margin-left: -60px;\n  transition: opacity 0.5s;\n}\n\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 100 !important;\n}\n\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  \n}\n\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldHRhZ2xpby1jb211bmljYXppb25lLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxyb3V0ZXNcXGFyZWEtYW1taW5pc3RyYXRpdmFcXGRldHRhZ2xpby1jb211bmljYXppb25lXFxkZXR0YWdsaW8tY29tdW5pY2F6aW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UscUJBQUE7QUNBRjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsOEJBQUE7RUFFQSxZQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFFQSxZQUFBO0FDRkY7O0FES0E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNGRjs7QURLQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUNGRjs7QURLQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBREtBO0VBQ0UsZ0JBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0UseUJBQUE7RUNGRjtFRElBO0lBQ0Usb0JBQUE7RUNGRjtBQUNGOztBREtBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSwyQkFBQTtBQ0pGOztBRE9BO0VBQ0UsVUFBQTtBQ0pGOztBRE9BO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDSkY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSkY7O0FETUE7RUFDRSxlQUFBO0FDSEY7O0FETUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDSkY7O0FET0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDSkY7O0FET0E7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FDTkY7O0FEU0E7RUFDRSx1QkFBQTtBQ05GOztBRFVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7RUFBZ0IsaUVBQUE7QUNObEI7O0FEU0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNORjs7QURTQTtFQUNFLGlCQUFBO0FDTkY7O0FEU0E7RUFDRSxlQUFBO0FDTkYiLCJmaWxlIjoiZGV0dGFnbGlvLWNvbXVuaWNhemlvbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gIG1pbi13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbnRyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0ycHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiKDEwMSwgMTAxLCAxMDEpO1xyXG4gIC8vIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjNWU1ZTVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZCB7XHJcbiAgYmFja2dyb3VuZDogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0Yzk5ZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZG9uZXtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2Q6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyZjZkZDU3NCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5idG4tZGx0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmQ1OTU5ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogI2ZmNGM0YyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1kbHQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNmQ5ZDkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZGx0LWNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnJvdGF0aW9uIHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIHpvb206IDEuMjtcclxufVxyXG5cclxuLnVsdC1tb2Qge1xyXG4gIGNvbG9yOiAjMDAwMDAwNzM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmVsZW0taWNvIHtcclxuICB6b29tOiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMHB4O1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDczICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDAxYTtcclxufVxyXG5cclxuLmJ0bi1kZWZ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDJweDtcclxuICBwYWRkaW5nOjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYnRuLWRlZjpkaXNhYmxlZHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5idG4tZGVmLXllc3tcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRlZi1ub3tcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG59XHJcblxyXG4ubWFpbi1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHpvb206IDAuODtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIHBhZGRpbmc6MTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUgNjUgNjUgLyA5NSUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAxMjYlO1xyXG4gIGxlZnQ6IC0yNTYlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG59XHJcblxyXG4ub3BhY2l0eS0xMDB7XHJcbiAgb3BhY2l0eTogMTAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheS10aXRsZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktdGl0bGUgZGl2IHtcclxuICBtYXJnaW46IDAgMjBweDsgLyogQWdnaXVuZ2Ugc3BhemlvIG9yaXp6b250YWxlIHRyYSBPZ2dldHRvIGUgVGlwbyBDb211bmljYXppb25lICovXHJcbn1cclxuXHJcbi50b3AtdGl0bGV7XHJcbiAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbi5zdWItdGl0bGV7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbn1cclxuXHJcbmgye1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4iLCIudGFibGUge1xuICBtaW4td2lkdGg6IDkwMHB4O1xufVxuXG50ciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjNWU1ZTVlICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2Qge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1kb25lIHtcbiAgYmFja2dyb3VuZDogIzAwYjA1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDU3NCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZGx0IHtcbiAgYmFja2dyb3VuZDogI2ZkNTk1OSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZGx0OmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogI2Y2ZDlkOSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZGx0LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiA5cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJvdGF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB6b29tOiAxLjI7XG59XG5cbi51bHQtbW9kIHtcbiAgY29sb3I6ICMwMDAwMDA3MztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxlZnQ6IC0xMHB4O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIG1pbi13aWR0aDogNTUwcHg7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cbi5lbGVtLWljbyB7XG4gIHpvb206IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGNvbG9yOiAjMDAwMDAwNzMgIWltcG9ydGFudDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDFhO1xufVxuXG4uYnRuLWRlZiB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMnB4O1xuICBwYWRkaW5nOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5idG4tZGVmOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4uYnRuLWRlZi15ZXMge1xuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1kZWYtbm8ge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTI4cHg7XG59XG5cbi5tYWluLWljbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IC00cHg7XG4gIHpvb206IDAuODtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAyODhweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgNjUsIDY1LCAwLjk1KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTI2JTtcbiAgbGVmdDogLTI1NiU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuXG4ub3BhY2l0eS0xMDAge1xuICBvcGFjaXR5OiAxMDAgIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXktdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktdGl0bGUgZGl2IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIC8qIEFnZ2l1bmdlIHNwYXppbyBvcml6em9udGFsZSB0cmEgT2dnZXR0byBlIFRpcG8gQ29tdW5pY2F6aW9uZSAqL1xufVxuXG4udG9wLXRpdGxlIHtcbiAgY29sb3I6ICM4Nzg3ODc7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 2408:
/*!*********************************************************!*\
  !*** ./src/app/routes/dashboard/dashboard.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_services_messaggi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/messaggi.service */ 84667);
/* harmony import */ var _modal_dettagli_dashboard_modal_dettagli_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-dettagli-dashboard/modal-dettagli-dashboard.component */ 72884);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/alert-segnalazioni-tab/alert-segnalazioni-tab.component */ 32254);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
























const _c0 = ["table"];

function DashboardComponent_app_alert_segnalazioni_tab_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-alert-segnalazioni-tab");
  }
}

function DashboardComponent_ng_container_2_mat_card_actions_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-actions", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_ng_container_2_mat_card_actions_1_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r10.handleRowClick(null, "Inserimento");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "\u00A0Nuovo Messaggio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function DashboardComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardComponent_ng_container_2_mat_card_actions_1_Template, 5, 0, "mat-card-actions", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.messaggioAttivo);
  }
}

const _c1 = function (a0) {
  return {
    "margin-top": a0
  };
};

function DashboardComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 11);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](1, _c1, ctx_r3.disableRowClick ? "4%" : "9.6%"));
  }
}

function DashboardComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "mat-slide-toggle", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DashboardComponent_div_8_Template_mat_slide_toggle_change_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r12.inizializzaPaginazione();
    })("ngModelChange", function DashboardComponent_div_8_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r14.messaggioAttivo = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Messaggi Attivi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.messaggioAttivo);
  }
}

function DashboardComponent_div_9_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 28);
  }
}

function DashboardComponent_div_9_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_9_tr_4_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28);
      const row_r26 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r27.handleRowClick(row_r26, "Modifica");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_div_9_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Data Inserimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_div_9_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r19.displayFieldData(element_r29.dataInserimento), " ");
  }
}

function DashboardComponent_div_9_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Oggetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_div_9_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r30.oggetto, " ");
  }
}

function DashboardComponent_div_9_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Messaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_div_9_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r31 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r23.truncateText(element_r31.messaggio, 50), "");
  }
}

function DashboardComponent_div_9_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DashboardComponent_div_9_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r32.utente, " ");
  }
}

function DashboardComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13)(1, "table", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function DashboardComponent_div_9_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r33.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardComponent_div_9_tr_3_Template, 1, 0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, DashboardComponent_div_9_tr_4_Template, 1, 0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardComponent_div_9_th_6_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, DashboardComponent_div_9_td_7_Template, 2, 1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardComponent_div_9_th_9_Template, 2, 0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardComponent_div_9_td_10_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, DashboardComponent_div_9_th_12_Template, 2, 0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DashboardComponent_div_9_td_13_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, DashboardComponent_div_9_th_15_Template, 2, 0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, DashboardComponent_div_9_td_16_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r5.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r5.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r5.displayedColumns);
  }
}

const _c2 = function () {
  return {
    "first-last-page-icon": true
  };
};

function DashboardComponent_div_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r39.pageFirst();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c2));
  }
}

function DashboardComponent_div_10_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_a_6_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const ln_r41 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r42.setPageCurr(ln_r41);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r41 = ctx.$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ln_r41 === ctx_r36.pageCurr ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ln_r41);
  }
}

function DashboardComponent_div_10_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r44.pageLast();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c2));
  }
}

function DashboardComponent_div_10_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_mat_option_13_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r47.inizializzaPaginazione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", num_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](num_r46);
  }
}

function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardComponent_div_10_a_2_Template, 3, 2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r49.pagePrev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, DashboardComponent_div_10_a_6_Template, 2, 2, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DashboardComponent_div_10_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r51.pageNext();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardComponent_div_10_a_10_Template, 3, 2, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 42)(12, "mat-select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function DashboardComponent_div_10_Template_mat_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r50);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r52.pageDim = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, DashboardComponent_div_10_mat_option_13_Template, 2, 2, "mat-option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.pageCurr > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.layoutNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.pageCurr < ctx_r6.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r6.pageDim);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r6.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Pagina ", ctx_r6.pageCurr, " di ", ctx_r6.pageNum, "");
  }
}

function DashboardComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card")(3, "div", 48)(4, "h1", 49)(5, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

class DashboardComponent {
  constructor(messaggiService, dialog, storageService, cdr) {
    this.messaggiService = messaggiService;
    this.dialog = dialog;
    this.storageService = storageService;
    this.cdr = cdr;
    this.data = [];
    this.disableRowClick = true;
    this.messaggioAttivo = true;
    this.isLoading = true;
    this.displayedColumns = ['dataInserimento', 'oggetto', 'messaggio', 'matricola'];
    this.ruoloAmministratore = 'P12689';
    this.ruoloCentraleAmministrativoDCO = 'P12690';
    this.errorMessage = ""; // Variabili paginazione

    this.pageDim = '20';
    this.pageCurr = 1;
    this.pageNum = 0;
    this.elemNum = 0;
    this.base = 1;
    this.layoutDim = 6;
    this.layoutNumbers = [];
    this.numPages = ['5', '10', '20', '50', '100'];
    this.ordinamentoColonna = null;
  }

  ngOnInit() {
    this.allRoles = this.storageService.getItem('allroles').toString().trim();
    this.checkRoles();
    this.inizializzaPaginazione();
  }

  checkRoles() {
    const allRoles = this.storageService.getItem('allroles').toString().trim();

    if (allRoles.includes(this.ruoloAmministratore) || allRoles.includes(this.ruoloCentraleAmministrativoDCO)) {
      this.disableRowClick = false;
    }
  }

  inizializzaPaginazione() {
    this.resetPaginazione();
    this.messaggiService.statoMessaggio$.next(this.messaggioAttivo);
    this.messaggiService.contaMessaggi(this.messaggioAttivo).subscribe(data => {
      this.elemNum = Number.parseInt(data.numeroMessaggi);
      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
      this.layoutNumbers = Array.from({
        length: Math.min(6, this.pageNum)
      }, (_, i) => i + 1);
      this.popolaTabella();
    });
  }

  popolaTabella() {
    this.messaggiService.getMessaggi(Number.parseInt(this.pageDim.trim()), this.pageCurr, this.ordinamentoColonna, this.messaggioAttivo).subscribe(data => {
      this.data = data;
      this.isLoading = false;
    }, error => {
      console.error('Errore nel recupero dei dati: ', error);
      this.errorMessage = 'Errore nel recupero dei dati';
    });
  }

  sortData(sort) {
    if (sort.direction != "") {
      let ordine = '';
      ordine = sort.active + '_' + sort.direction;
      this.ordinamentoColonna = ordine;
    } else {
      this.ordinamentoColonna = null;
    }

    this.popolaTabella();
  }

  handleRowClick(row, tipoOperazione) {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (tipoOperazione == 'Modifica') {
        _this.messaggiService.datiMessaggio$.next(row);
      } else if (tipoOperazione == 'Inserimento') {
        _this.messaggiService.datiMessaggio$.next(0);
      }

      const dialogRef = _this.dialog.open(_modal_dettagli_dashboard_modal_dettagli_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.ModalDettagliDashboardComponent, {
        height: 'auto',
        width: '50vw',
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(() => {
        setTimeout(() => {
          _this.inizializzaPaginazione();
        }, 500);
      });
    })();
  }

  onToggleChange(event) {
    if (event.checked === false) {
      this.messaggioAttivo == false;
    }
  }

  displayFieldData(content) {
    if (content == null || content == undefined || content == '' || content.trim() == "") {
      return "-";
    } else {
      const data = content.split('T')[0];
      const ora = content.split('T')[1];
      const formatData = data.split('-').reverse().join('-').replace(/-/g, '/');
      const formatOra = ora.split('.')[0];
      return formatData + ' ' + formatOra;
    }
  }

  displayFieldAttivo(messaggioAttivo) {
    if (messaggioAttivo === true) {
      return 'Attivi';
    } else {
      return 'Non Attivi';
    }
  } // Funzioni paginazione


  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente

    this.base = 1; //base per creazione layout

    this.layoutDim = 6; //elementi paginazione

    this.layoutNumbers = []; //numeri del paginatore
  }

  pageNext() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr++;
      this.scorriLayout();
      this.popolaTabella();
    }
  }

  pagePrev() {
    if (this.pageCurr > 1) {
      this.pageCurr--;
      this.scorriLayout();
      this.popolaTabella();
    }
  }

  setPageCurr(page) {
    this.pageCurr = page;
    this.popolaTabella();
  } //scorri layoutNumbers


  scorriLayout() {
    if (this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1] && this.pageCurr < this.pageNum) {
      this.base = this.base + (this.layoutDim - 1);
      this.layoutNumbers = [];

      for (let i = this.base; i < this.base + 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
    } else if (this.pageCurr <= this.layoutNumbers[0] && this.pageCurr > 1) {
      this.base = this.base - (this.layoutDim - 1);
      this.layoutNumbers = [];

      for (let i = this.base; i < this.base + 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
    }
  }

  pageFirst() {
    if (this.pageCurr > 1) {
      this.pageCurr = 1;
      this.base = 1;
      this.layoutNumbers = Array.from({
        length: Math.min(6, this.pageNum)
      }, (_, i) => i + 1);
      this.popolaTabella();
    }
  }

  pageLast() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr = this.pageNum;
      this.base = Math.max(1, this.pageNum - 5);
      this.layoutNumbers = Array.from({
        length: 6
      }, (_, i) => this.base + i).filter(k => k <= this.pageNum);
      this.popolaTabella();
    }
  }

  truncateText(text, limit) {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}

DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
  return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_messaggi_service__WEBPACK_IMPORTED_MODULE_1__.MessaggiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DashboardComponent,
  selectors: [["app-dashboard"]],
  viewQuery: function DashboardComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    }
  },
  decls: 13,
  vars: 10,
  consts: [[4, "ngIf"], [4, "ngIf", "ngIfElse"], ["emptySpace", ""], [2, "display", "flex", "justify-content", "space-between", "align-items", "center"], [1, "section-title"], ["class", "table", 4, "ngIf", "ngIfElse"], ["class", "mat-paginator-mod", 4, "ngIf"], ["nessunRisultato", ""], ["align", "end", "class", "container-cards-buttons", "style", "margin-top: 4%;", 4, "ngIf"], ["align", "end", 1, "container-cards-buttons", 2, "margin-top", "4%"], ["mat-raised-button", "", "type", "button", 1, "child-buttons-conferma", 3, "click"], [3, "ngStyle"], [3, "ngModel", "change", "ngModelChange"], [1, "table"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["table", ""], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "dataInserimento"], ["mat-header-cell", "", "mat-sort-header", "dataInserimento", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "oggetto"], ["mat-header-cell", "", "mat-sort-header", "oggetto", "style", "padding-left: 2%; text-align: left;", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "padding-left: 2%; text-align: left;", 4, "matCellDef"], ["matColumnDef", "messaggio"], ["mat-header-cell", "", "mat-sort-header", "messaggio", "style", "padding-left: 2%; text-align: left;", 4, "matHeaderCellDef"], ["matColumnDef", "matricola"], ["mat-header-cell", "", "mat-sort-header", "matricola", "style", "padding-left: 2%; text-align: left;", 4, "matHeaderCellDef"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "dataInserimento"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "oggetto", 2, "padding-left", "2%", "text-align", "left"], ["mat-cell", "", 2, "padding-left", "2%", "text-align", "left"], ["mat-header-cell", "", "mat-sort-header", "messaggio", 2, "padding-left", "2%", "text-align", "left"], ["mat-header-cell", "", "mat-sort-header", "matricola", 2, "padding-left", "2%", "text-align", "left"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"]],
  template: function DashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, DashboardComponent_app_alert_segnalazioni_tab_1_Template, 1, 0, "app-alert-segnalazioni-tab", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, DashboardComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, DashboardComponent_ng_template_3_Template, 1, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, DashboardComponent_div_8_Template, 3, 1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, DashboardComponent_div_9_Template, 17, 3, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 16, 11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, DashboardComponent_ng_template_11_Template, 7, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](4);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](12);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.allRoles.includes(ctx.ruoloAmministratore) || ctx.allRoles.includes(ctx.ruoloCentraleAmministrativoDCO));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.messaggioAttivo && !ctx.disableRowClick)("ngIfElse", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("Ricerca Messaggi ", ctx.displayFieldAttivo(ctx.messaggioAttivo), " | ", ctx.data.length, " risultati su ", ctx.elemNum, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.disableRowClick);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.length > 0)("ngIfElse", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.data.length > 0);
    }
  },
  directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_4__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_5__.AlertSegnalazioniTabComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultStyleDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_13__.MatSlideToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_16__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard],
  encapsulation: 2
});

/***/ }),

/***/ 72884:
/*!*************************************************************************************************!*\
  !*** ./src/app/routes/dashboard/modal-dettagli-dashboard/modal-dettagli-dashboard.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDettagliDashboardComponent": () => (/* binding */ ModalDettagliDashboardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_messaggi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/messaggi.service */ 84667);
/* harmony import */ var app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/routes/popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
















function ModalDettagliDashboardComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ((tmp_0_0 = ctx_r0.form.get("oggettoMessaggio")) == null ? null : tmp_0_0.value.trim()) == "" || ((tmp_0_0 = ctx_r0.form.get("contenutoMessaggio")) == null ? null : tmp_0_0.value.trim()) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r0.nomeBottone, " ");
  }
}

function ModalDettagliDashboardComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalDettagliDashboardComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r3.disattivaMessaggio();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Disattiva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function ModalDettagliDashboardComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalDettagliDashboardComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r5.riattivaMessaggio();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Riattiva ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

class ModalDettagliDashboardComponent {
  constructor(messaggiService, formBuilder, dialog, storageService) {
    this.messaggiService = messaggiService;
    this.formBuilder = formBuilder;
    this.dialog = dialog;
    this.storageService = storageService;
    this.ruoloAmministratore = 'P12689';
    this.ruoloCentraleAmministrativoDCO = 'P12690';
    this.nomeBottone = '';
    this.disableElimina = false;
    this.disableButton = false;
    this.form = this.formBuilder.group({
      oggettoMessaggio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(50)]],
      contenutoMessaggio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.maxLength(2000)]]
    });
    this.errorMessage = "";
  }

  ngOnInit() {
    this.enableDisableForms();
    this.checkMessaggioValue();
    this.checkRoles();
  }

  ngOnDestroy() {
    this.disableElimina = false;
  }

  checkRoles() {
    const allRoles = this.storageService.getItem('allroles').toString().trim();

    if (allRoles.includes(this.ruoloAmministratore) || allRoles.includes(this.ruoloCentraleAmministrativoDCO)) {
      this.disableButton = true;
    } else {
      this.disableButton = false;
    }
  }

  enableDisableForms() {
    this.messaggioAttivo = this.messaggiService.statoMessaggio$.value;

    if (this.messaggioAttivo == true) {
      this.form.controls['oggettoMessaggio'].enable();
      this.form.controls['contenutoMessaggio'].enable();
    } else {
      this.form.controls['oggettoMessaggio'].disable();
      this.form.controls['contenutoMessaggio'].disable();
    }
  }

  checkMessaggioValue() {
    var _a, _b;

    const data = this.messaggiService.datiMessaggio$.value; // se l'observable ha 0 sto facendo un inserimento

    if (data == 0) {
      this.disableElimina = true;
      this.nomeBottone = 'Crea Nuovo';
    } else {
      this.data = data;
      this.nomeBottone = 'Modifica';
      this.form.patchValue({
        oggettoMessaggio: (_a = this.data) === null || _a === void 0 ? void 0 : _a.oggetto.trim(),
        contenutoMessaggio: (_b = this.data) === null || _b === void 0 ? void 0 : _b.messaggio.trim()
      });
    }
  }

  modifica() {
    var _a, _b;

    if (this.form.invalid) {
      const oggettoError = (_a = this.form.get('oggettoMessaggio')) === null || _a === void 0 ? void 0 : _a.errors;
      const messaggioError = (_b = this.form.get('contenutoMessaggio')) === null || _b === void 0 ? void 0 : _b.errors;

      if (oggettoError === null || oggettoError === void 0 ? void 0 : oggettoError.required) {
        return this.openErrorDialog("Errore:", "L'oggetto del messaggio è obbligatorio.");
      }

      if (messaggioError === null || messaggioError === void 0 ? void 0 : messaggioError.required) {
        return this.openErrorDialog("Errore:", "Il contenuto del messaggio è obbligatorio.");
      }

      if (oggettoError === null || oggettoError === void 0 ? void 0 : oggettoError.maxlength) {
        return this.openErrorDialog("Errore:", "L'oggetto del messaggio non può superare i 50 caratteri.");
      }

      if (messaggioError === null || messaggioError === void 0 ? void 0 : messaggioError.maxlength) {
        return this.openErrorDialog("Errore:", "Il contenuto del messaggio non può superare i 2000 caratteri.");
      } // Se ci sono altri errori, mostra un messaggio generico


      return this.openErrorDialog("Errore:", "Verificare i dati inseriti.");
    }

    this.modificaMessaggio();
  }

  modificaMessaggio() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c;

      const idMessaggio = (_a = _this.data) === null || _a === void 0 ? void 0 : _a.id;
      const oggettoMessaggio = (_b = _this.form.get('oggettoMessaggio')) === null || _b === void 0 ? void 0 : _b.value.trim();
      const contenutoMessaggio = (_c = _this.form.get('contenutoMessaggio')) === null || _c === void 0 ? void 0 : _c.value.trim();

      const matricolaUtente = _this.storageService.getItem('matricola').toString().trim(); // id messaggio esistente: UPDATE


      if (idMessaggio) {
        try {
          _this.messaggiService.updateMessaggio(idMessaggio, oggettoMessaggio, contenutoMessaggio).subscribe();

          _this.messaggiService.datiMessaggio$.next(null);
        } catch (error) {
          _this.errorMessage = "Errore durante l'aggiornamento del messaggio.";
        }
      } // id messaggio assente: INSERT
      else {
        try {
          _this.messaggiService.insertMessaggio(oggettoMessaggio, contenutoMessaggio, matricolaUtente).subscribe();

          _this.messaggiService.datiMessaggio$.next(null);
        } catch (error) {
          _this.errorMessage = "Errore durante l'inserimento del messaggio.";
        }
      }

      _this.closeDialog();
    })();
  }

  disattivaMessaggio() {
    var _this2 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const idMessaggio = (_a = _this2.data) === null || _a === void 0 ? void 0 : _a.id;

      if (idMessaggio) {
        try {
          _this2.messaggiService.disattivaMessaggioAttivo(idMessaggio).subscribe();

          _this2.messaggiService.datiMessaggio$.next(null);

          _this2.closeDialog();
        } catch (error) {
          _this2.errorMessage = 'Errore durante la disattivazione del messaggio.';
        }
      } else {
        _this2.errorMessage = "Impossibile disattivare il messaggio: id messaggio non trovato!"; // console.error("Impossibile disattivare il messaggio: id messaggio non trovato!");
      }
    })();
  }

  riattivaMessaggio() {
    var _this3 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a;

      const idMessaggio = (_a = _this3.data) === null || _a === void 0 ? void 0 : _a.id;

      if (idMessaggio) {
        try {
          _this3.messaggiService.riattivaMessaggioDisattivato(idMessaggio).subscribe();

          _this3.messaggiService.datiMessaggio$.next(null);

          _this3.closeDialog();
        } catch (error) {
          _this3.errorMessage = 'Errore durante la riattivazione del messaggio.';
        }
      } else {
        _this3.errorMessage = "Impossibile riattivare il messaggio: id messaggio non trovato!"; // console.error("Impossibile riattivare il messaggio: id messaggio non trovato!");
      }
    })();
  }

  openErrorDialog(titolo, message) {
    this.dialog.open(app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_3__.PopupErroreInserimentoComponent, {
      data: {
        titolo: titolo,
        message: message
      }
    });
  }

  closeDialog() {
    this.dialog.closeAll();
  }

}

ModalDettagliDashboardComponent.ɵfac = function ModalDettagliDashboardComponent_Factory(t) {
  return new (t || ModalDettagliDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_messaggi_service__WEBPACK_IMPORTED_MODULE_2__.MessaggiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.StorageService));
};

ModalDettagliDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: ModalDettagliDashboardComponent,
  selectors: [["app-modal-dettagli-dashboard"]],
  decls: 20,
  vars: 6,
  consts: [[1, "form", 3, "formGroup", "ngSubmit"], [1, "container-data"], [1, "child-data"], [1, "label"], [1, "input-form"], ["matInput", "", "formControlName", "oggettoMessaggio", 1, "sub-title", 2, "padding-left", "2%", 3, "readonly"], ["matInput", "", "value", "", "formControlName", "contenutoMessaggio", 2, "resize", "none", "min-height", "175px", "padding-left", "2%", "padding-top", "2%", 3, "readonly"], [1, "container-buttons"], ["type", "submit", "mat-button", "", "class", "child-buttons child-buttons-conferma", 3, "disabled", 4, "ngIf"], ["type", "button", "mat-button", "", "class", "child-buttons child-buttons-elimina", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", "class", "child-buttons child-buttons-excel", 3, "click", 4, "ngIf"], ["type", "button", "mat-button", "", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], ["type", "submit", "mat-button", "", 1, "child-buttons", "child-buttons-conferma", 3, "disabled"], ["type", "button", "mat-button", "", 1, "child-buttons", "child-buttons-elimina", 3, "click"], ["type", "button", "mat-button", "", 1, "child-buttons", "child-buttons-excel", 3, "click"]],
  template: function ModalDettagliDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ModalDettagliDashboardComponent_Template_form_ngSubmit_0_listener() {
        return ctx.modifica();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Oggetto");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-form-field", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 1)(8, "div", 2)(9, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Messaggio");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "textarea", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "                ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ModalDettagliDashboardComponent_button_15_Template, 2, 2, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ModalDettagliDashboardComponent_button_16_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ModalDettagliDashboardComponent_button_17_Template, 2, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ModalDettagliDashboardComponent_Template_button_click_18_listener() {
        return ctx.closeDialog();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, " Chiudi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", !ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", !ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.messaggioAttivo && ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.messaggioAttivo && !ctx.disableElimina && ctx.disableButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.messaggioAttivo && ctx.disableButton);
    }
  },
  directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton],
  styles: [".container-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 5% 0;\n}\n\n.input-form[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 80%;\n}\n\n.child-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nlabel[_ngcontent-%COMP%] {\n  color: #2f6dd5;\n  font-size: 18px;\n  font-weight: bold;\n  margin-bottom: 1%;\n}\n\n[_ngcontent-%COMP%]:disabled {\n  color: black;\n  background-color: #f2f2f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWRldHRhZ2xpLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxkYXNoYm9hcmRcXG1vZGFsLWRldHRhZ2xpLWRhc2hib2FyZFxcbW9kYWwtZGV0dGFnbGktZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUNDSiIsImZpbGUiOiJtb2RhbC1kZXR0YWdsaS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDsgICAgICAgICAgICAgIFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICAgICBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyAgIFxyXG4gICAgbWFyZ2luOiA1JSAwOyAgICAgICAgICAgXHJcbn1cclxuXHJcbi5pbnB1dC1mb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlOyAgICAgICAgICAgICAgIFxyXG4gICAgbWF4LXdpZHRoOiA4MCU7ICAgICAgICBcclxufVxyXG5cclxuLmNoaWxkLWRhdGEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICAgIGNvbG9yOiAjMmY2ZGQ1O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTsgXHJcbn1cclxuXHJcbjpkaXNhYmxlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59IiwiLmNvbnRhaW5lci1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogNSUgMDtcbn1cblxuLmlucHV0LWZvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbi5jaGlsZC1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubGFiZWwge1xuICBjb2xvcjogIzJmNmRkNTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMSU7XG59XG5cbjpkaXNhYmxlZCB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn0iXX0= */"]
});

/***/ }),

/***/ 2594:
/*!***********************************************************************************!*\
  !*** ./src/app/routes/errore-allegato-dialog/errore-allegato-dialog.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErroreAllegatoDialogComponent": () => (/* binding */ ErroreAllegatoDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);





class ErroreAllegatoDialogComponent {
    constructor(data) {
        this.data = data;
        this.errorMessage = data.errorMessage;
    }
    ngOnInit() {
    }
}
ErroreAllegatoDialogComponent.ɵfac = function ErroreAllegatoDialogComponent_Factory(t) { return new (t || ErroreAllegatoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ErroreAllegatoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErroreAllegatoDialogComponent, selectors: [["app-errore-allegato-dialog"]], decls: 9, vars: 2, consts: [["mat-dialog-title", "", 1, "text-center"], [3, "innerHTML"], ["align", "center"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"]], template: function ErroreAllegatoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Errore allegato");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions", 2)(5, "button", 3)(6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.errorMessage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errorMessage);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon], styles: [".text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yZS1hbGxlZ2F0by1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxlcnJvcmUtYWxsZWdhdG8tZGlhbG9nXFxlcnJvcmUtYWxsZWdhdG8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBQ0FGIiwiZmlsZSI6ImVycm9yZS1hbGxlZ2F0by1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXJ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICM2MDY0NzAgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNWU1ZTVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi50ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzYwNjQ3MCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ 20304:
/*!****************************************************************************************!*\
  !*** ./src/app/routes/local-user-login/local-user-login/local-user-login.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalUserLoginComponent": () => (/* binding */ LocalUserLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class LocalUserLoginComponent {
    ngOnInit() {
    }
}
LocalUserLoginComponent.ɵfac = function LocalUserLoginComponent_Factory(t) { return new (t || LocalUserLoginComponent)(); };
LocalUserLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalUserLoginComponent, selectors: [["app-local-user-login"]], decls: 0, vars: 0, template: function LocalUserLoginComponent_Template(rf, ctx) { }, styles: ["@charset \"UTF-8\";\n  .mat-option.mat-selected {\n  color: #2f6dd5 !important;\n}\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  \n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: 100%;\n  \n  border: 1px solid #ccc;\n  \n  padding: 20px;\n  border-radius: 2px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  \n}\n.icon[_ngcontent-%COMP%] {\n  margin-right: 120px;\n  \n  font-size: 120px;\n  color: #2f6dd5;\n}\n.form[_ngcontent-%COMP%] {\n  width: 100%;\n  \n}\np[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5;\n  color: white;\n}\n.user-info[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2f6dd5;\n  font-weight: bold;\n}\n.emptyPage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.connectionFailed[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 25px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxsb2NhbC11c2VyLWxvZ2luXFxsb2NhbC11c2VyLWxvZ2luXFxsb2NhbC11c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwibG9jYWwtdXNlci1sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNZaEI7RUFDRSx5QkFBQTtBRFZGO0FDYUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFlLCtCQUFBO0FEVGpCO0FDWUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQWlCLGlEQUFBO0VBQ2pCLHNCQUFBO0VBQXdCLG1EQUFBO0VBQ3hCLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHVDQUFBO0VBQXlDLCtDQUFBO0FETjNDO0FDU0E7RUFDRSxtQkFBQTtFQUFxQixzQ0FBQTtFQUNyQixnQkFBQTtFQUNBLGNBQUE7QURMRjtBQ1NBO0VBQ0UsV0FBQTtFQUFhLHVEQUFBO0FETGY7QUNPQTtFQUNFLGVBQUE7RUFFQSxjQUFBO0FETEY7QUNTQTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtBRFBGO0FDU0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUVBLGlCQUFBO0FEUEY7QUNVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FEUEY7QUNVQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURQRiIsImZpbGUiOiJsb2NhbC11c2VyLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOjpuZy1kZWVwIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgLyogQWx0ZXp6YSBkZWxsJ2ludGVyYSBwYWdpbmEgKi9cbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIC8qIExhcmdoZXp6YSBtYXNzaW1hIGRlbCBjb250ZW5pdG9yZSBwcmluY2lwYWxlICovXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIC8qIE9wemlvbmFsZTogYm9yZG8gcGVyIGlsIGNvbnRlbml0b3JlIHByaW5jaXBhbGUgKi9cbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIE9wemlvbmFsZTogb21icmEgcGVyIGVmZmV0dG8gZGkgcHJvZm9uZGl0w6AgKi9cbn1cblxuLmljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDEyMHB4O1xuICAvKiBTcGF6aW8gdHJhIGwnaWNvbmEgZSBpbCBjb250ZW51dG8gKi9cbiAgZm9udC1zaXplOiAxMjBweDtcbiAgY29sb3I6ICMyZjZkZDU7XG59XG5cbi5mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIE9jY3VwYSB0dXR0byBsbyBzcGF6aW8gZGlzcG9uaWJpbGUgbmVsIGNvbnRlbml0b3JlICovXG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMmY2ZGQ1O1xufVxuXG4uYnRuLW1vZCB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnVzZXItaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyZjZkZDU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZW1wdHlQYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb25uZWN0aW9uRmFpbGVkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiBibGFjaztcbn0iLCIvLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuLy8gICBjb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbCB0ZXN0byBkZWwgY2FtcG8gKi9cclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDsgLyogQ2FtYmlhIGlsIGNvbG9yZSBkZWxsYSBsaW5lYSBvcml6em9udGFsZSAqL1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbGwnYW5pbWF6aW9uZSBkZWxsYSBsaW5lYSBvcml6em9udGFsZSAqL1xyXG4vLyB9XHJcblxyXG46Om5nLWRlZXAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkIHsgIFxyXG4gIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwdmg7IC8qIEFsdGV6emEgZGVsbCdpbnRlcmEgcGFnaW5hICovXHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiBMYXJnaGV6emEgbWFzc2ltYSBkZWwgY29udGVuaXRvcmUgcHJpbmNpcGFsZSAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IC8qIE9wemlvbmFsZTogYm9yZG8gcGVyIGlsIGNvbnRlbml0b3JlIHByaW5jaXBhbGUgKi9cclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7IC8qIE9wemlvbmFsZTogb21icmEgcGVyIGVmZmV0dG8gZGkgcHJvZm9uZGl0w6AgKi9cclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTIwcHg7IC8qIFNwYXppbyB0cmEgbCdpY29uYSBlIGlsIGNvbnRlbnV0byAqL1xyXG4gIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICB3aWR0aDogMTAwJTsgLyogT2NjdXBhIHR1dHRvIGxvIHNwYXppbyBkaXNwb25pYmlsZSBuZWwgY29udGVuaXRvcmUgKi9cclxufVxyXG5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcbi5idG4tbW9kIHtcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0Yzk5ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi51c2VyLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzJmNmRkNTtcclxuICAvLyBjb2xvcjogIzRjOTlmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmVtcHR5UGFnZSB7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxyXG4gIGhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbi5jb25uZWN0aW9uRmFpbGVkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });


/***/ }),

/***/ 53229:
/*!*****************************************************************************!*\
  !*** ./src/app/routes/popup-comunicazioni/popup-comunicazioni.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupComunicazioniComponent": () => (/* binding */ PopupComunicazioniComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/comunicazione-letta.model */ 73463);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/ruolo-comunicazione.service */ 86872);
/* harmony import */ var _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models/comunicazioni.model */ 72580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 65590);
















function PopupComunicazioniComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PopupComunicazioniComponent_button_29_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.prossimoMessaggio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Avanti");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PopupComunicazioniComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 10)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function PopupComunicazioniComponent_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function PopupComunicazioniComponent_button_31_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.ultimoMessaggio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "arrow_forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class PopupComunicazioniComponent {
    constructor(ruoloComunicazioneService, comunicazioniSrv, dialogRef, storageService) {
        this.ruoloComunicazioneService = ruoloComunicazioneService;
        this.comunicazioniSrv = comunicazioniSrv;
        this.dialogRef = dialogRef;
        this.storageService = storageService;
        this.ruoloComunicazioni = [];
        this.matricola = '';
        this.role = ' ';
        this.comunicazione = new _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_4__.Comunicazioni();
        this.comunicazioneLetta = new _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_1__.ComunicazioneLetta();
        this.altriMessaggi = false;
        this.indMessaggi = 0;
        this.checked = false;
    }
    ngOnInit() {
        this.getComunicazioni();
    }
    getComunicazioni() {
        this.role = this.storageService.getItem('allroles');
        this.matricola = this.storageService.getItem('matricola');
        //leggo le comunicazioni legate al ruolo e non ancora lette
        this.ruoloComunicazioneService
            .newGetComunicazioniFilterByRuoloAndMatricola(this.role, this.matricola)
            .subscribe((data) => {
            this.ruoloComunicazioni = data;
            this.altriMessaggi = this.ruoloComunicazioni.length > 1;
            if (this.ruoloComunicazioni.length > 0) {
                this.indMessaggi = 0;
                this.prossimoMessaggio();
            }
            else {
                this.dialogRef.close();
            }
        });
    }
    prossimoMessaggio() {
        this.matricola = this.storageService.getItem('matricola');
        if (this.indMessaggi > 0 && this.checked) {
            this.salvaComunicazioneLetta(this.comunicazione.id, this.matricola);
        }
        this.comunicazioniSrv.newGetComunicazioneById(this.ruoloComunicazioni[this.indMessaggi].idComunicazione).subscribe({
            next: (comunicazione) => {
                this.comunicazione = comunicazione;
                this.comunicazioniSrv.getTipoComunicazioneById(this.comunicazione.idTipoComunicazione).subscribe({
                    next: (tipoComunicazione) => {
                        this.tipoComunicazioni = tipoComunicazione;
                    }
                });
            }
        });
        this.checked = false;
        //incremento l'indice dei messaggi che identifica il messaggio da visualizzare
        this.indMessaggi++;
        //verifico se ci saranno altri messaggi da visualizzare
        this.altriMessaggi = this.ruoloComunicazioni.length > this.indMessaggi;
    }
    ultimoMessaggio() {
        if (this.indMessaggi > 0 && this.checked) {
            this.salvaComunicazioneLetta(this.comunicazione.id, this.matricola);
        }
        this.dialogRef.close();
    }
    salvaComunicazioneLetta(comunicazioneId, matricola) {
        this.comunicazioneLetta = new _shared_models_comunicazione_letta_model__WEBPACK_IMPORTED_MODULE_1__.ComunicazioneLetta();
        this.comunicazioneLetta.idComunicazione = comunicazioneId;
        this.comunicazioneLetta.matricola = matricola;
        this.comunicazioniSrv.newSaveComunicazioneLettaChecked(this.comunicazioneLetta).subscribe(() => { });
    }
}
PopupComunicazioniComponent.ɵfac = function PopupComunicazioniComponent_Factory(t) { return new (t || PopupComunicazioniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_3__.RuoloComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__.ComunicazioniService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.StorageService)); };
PopupComunicazioniComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: PopupComunicazioniComponent, selectors: [["app-popup-comunicazioni"]], decls: 32, vars: 7, consts: [["align", "center"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], [1, "displa-title"], ["name", "chkLetta", "labelPosition", "before", 3, "ngModel", "ngModelChange"], ["align", "center", 1, "btn-box"], ["mat-button", "", "class", "btn-mod", 3, "click", 4, "ngIf"], ["mat-button", "", "mat-dialog-close", "", "class", "btn-back", 4, "ngIf"], ["mat-button", "", 1, "btn-mod", 3, "click"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"]], template: function PopupComunicazioniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-dialog-content", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Comunicazione agli utenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1)(4, "div")(5, "h3")(6, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Oggetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div")(11, "h3")(12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Tipo Comunicazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 4)(18, "div")(19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Messaggio");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function PopupComunicazioniComponent_Template_mat_checkbox_ngModelChange_23_listener($event) { return ctx.checked = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Seleziona per presa visione");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "br")(26, "br")(27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-dialog-actions", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, PopupComunicazioniComponent_button_29_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, PopupComunicazioniComponent_button_30_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, PopupComunicazioniComponent_button_31_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.comunicazione.oggetto);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.tipoComunicazioni == null ? null : ctx.tipoComunicazioni.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx.comunicazione.messaggio);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.altriMessaggi);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.altriMessaggi);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.altriMessaggi);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose], styles: [".table[_ngcontent-%COMP%] {\n  min-width: 900px;\n}\n\ntr[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  left: 0px;\n  font-size: 12px;\n  color: #656565;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  left: 0px;\n  font-size: 22px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #5e5e5e !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%] {\n  background: #fd5959 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%]:disabled {\n  background: #f6d9d9 !important;\n  color: white;\n}\n\n.btn-dlt-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  text-decoration: none;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.elem-ico[_ngcontent-%COMP%] {\n  zoom: 1;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  color: #00000073 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #0000001a;\n}\n\n.btn-def[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n  border: none;\n  border-radius: 2px;\n}\n\n.btn-def[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.btn-def-yes[_ngcontent-%COMP%] {\n  background: #ff0000 !important;\n  color: white;\n}\n\n.btn-def-no[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  position: relative;\n  top: -28px;\n}\n\n.main-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  left: -4px;\n  zoom: 0.8;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: all 0.5s;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 288px;\n  padding: 12px;\n  background-color: rgba(65, 65, 65, 0.95);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 126%;\n  left: -256%;\n  margin-left: -60px;\n  transition: opacity 0.5s;\n}\n\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 100 !important;\n}\n\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  align-items: center;\n  \n  justify-content: center;\n  \n}\n\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  \n}\n\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n  display: block;\n  \n  text-align: center;\n  \n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  line-height: 1.5;\n  \n  display: block;\n  \n  text-align: center;\n  \n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcHVwLWNvbXVuaWNhemlvbmkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxwb3B1cC1jb211bmljYXppb25pXFxwb3B1cC1jb211bmljYXppb25pLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBRjs7QURJQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDREY7O0FESUE7RUFDRSxxQkFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0UsOEJBQUE7RUFFQSxZQUFBO0FDSEY7O0FETUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNIRjs7QURNQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUNIRjs7QURNQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsZ0JBQUE7QUNIRjs7QURNQTtFQUNFO0lBQ0UseUJBQUE7RUNIRjtFREtBO0lBQ0Usb0JBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSwyQkFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtBQ0xGOztBRFFBO0VBQ0UsWUFBQTtFQUNBLCtCQUFBO0FDTEY7O0FEUUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FET0E7RUFDRSxlQUFBO0FDSkY7O0FET0E7RUFDRSw4QkFBQTtFQUNBLFlBQUE7QUNKRjs7QURPQTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0xGOztBRFFBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDTEY7O0FEUUE7RUFFRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLHdCQUFBO0FDUEY7O0FEVUE7RUFDRSx1QkFBQTtBQ1BGOztBRFdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQXFCLGlEQUFBO0VBQ3JCLHVCQUFBO0VBQXlCLG1EQUFBO0FDTjNCOztBRFNBO0VBQ0UsY0FBQTtFQUFnQixpREFBQTtBQ0xsQjs7QURRQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFBZ0IsMkRBQUE7RUFDaEIsa0JBQUE7RUFBb0IsMkJBQUE7QUNIdEI7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQWtCLDREQUFBO0VBQ2xCLGNBQUE7RUFBZ0IsOERBQUE7RUFDaEIsa0JBQUE7RUFBb0IseUJBQUE7QUNBdEI7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNERiIsImZpbGUiOiJwb3B1cC1jb211bmljYXppb25pLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi50YWJsZSB7XHJcbiAgbWluLXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxudHIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2IoMTAxLCAxMDEsIDEwMSk7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICM1ZTVlNWUgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kIHtcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2Q6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyZjZkZDU3NCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5idG4tZGx0IHtcclxuICBiYWNrZ3JvdW5kOiAjZmQ1OTU5ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogI2ZmNGM0YyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1kbHQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNmQ5ZDkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZGx0LWNvbnRhaW5lcntcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnJvdGF0aW9uIHtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XHJcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIHpvb206IDEuMjtcclxufVxyXG5cclxuLnVsdC1tb2Qge1xyXG4gIGNvbG9yOiAjMDAwMDAwNzM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBsZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIG1pbi13aWR0aDogNTUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmVsZW0taWNvIHtcclxuICB6b29tOiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMHB4O1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDczICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDAxYTtcclxufVxyXG5cclxuLmJ0bi1kZWZ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDJweDtcclxuICBwYWRkaW5nOjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYnRuLWRlZjpkaXNhYmxlZHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5idG4tZGVmLXllc3tcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRlZi1ub3tcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG59XHJcblxyXG4ubWFpbi1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHpvb206IDAuODtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIHBhZGRpbmc6MTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUgNjUgNjUgLyA5NSUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAxMjYlO1xyXG4gIGxlZnQ6IC0yNTYlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG59XHJcblxyXG4ub3BhY2l0eS0xMDB7XHJcbiAgb3BhY2l0eTogMTAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZGlzcGxheS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWxsaW5lYSB2ZXJ0aWNhbG1lbnRlIGdsaSBlbGVtZW50aSBhbCBjZW50cm8gKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWxsaW5lYSBvcml6em9udGFsbWVudGUgZ2xpIGVsZW1lbnRpIGFsIGNlbnRybyAqL1xyXG59XHJcblxyXG4uZGlzcGxheS10aXRsZSBkaXYge1xyXG4gIG1hcmdpbjogMCAyMHB4OyAvKiBBZ2dpdW5nZSBzcGF6aW8gb3JpenpvbnRhbGUgdHJhIGdsaSBlbGVtZW50aSAqL1xyXG59XHJcblxyXG4udG9wLXRpdGxlIHtcclxuICBjb2xvcjogIzg3ODc4NztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBkaXNwbGF5OiBibG9jazsgLyogQXNzaWN1cmEgY2hlIG9nbmkgdGl0b2xvIGdyaWdpbyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgaWwgdGVzdG8gZ3JpZ2lvICovXHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIEFsbGluZWEgdmVydGljYWxtZW50ZSBsZSBzY3JpdHRlIG5lcmUgY29uIHF1ZWxsZSBncmlnaWUgKi9cclxuICBkaXNwbGF5OiBibG9jazsgLyogQXNzaWN1cmEgY2hlIG9nbmkgc290dG90aXRvbG8gbmVybyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgaWwgdGVzdG8gbmVybyAqL1xyXG59XHJcblxyXG5oMntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tYmFjayB7XHJcbiAgYmFja2dyb3VuZDogIzYwNjQ3MCAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM1ZTVlNWUgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLnRhYmxlIHtcbiAgbWluLXdpZHRoOiA5MDBweDtcbn1cblxudHIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzVlNWU1ZSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kIHtcbiAgYmFja2dyb3VuZDogIzJmNmRkNSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzJmNmRkNTc0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1kbHQge1xuICBiYWNrZ3JvdW5kOiAjZmQ1OTU5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1kbHQ6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjZjZkOWQ5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1kbHQtY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDlweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucm90YXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHpvb206IDEuMjtcbn1cblxuLnVsdC1tb2Qge1xuICBjb2xvcjogIzAwMDAwMDczO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgbWluLXdpZHRoOiA1NTBweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmVsZW0taWNvIHtcbiAgem9vbTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA3MyAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMWE7XG59XG5cbi5idG4tZGVmIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1kZWY6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idG4tZGVmLXllcyB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRlZi1ubyB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbn1cblxuLm1haW4taWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogLTRweDtcbiAgem9vbTogMC44O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDI4OHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCA2NSwgNjUsIDAuOTUpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMjYlO1xuICBsZWZ0OiAtMjU2JTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG5cbi5vcGFjaXR5LTEwMCB7XG4gIG9wYWNpdHk6IDEwMCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheS10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbjogMjBweDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogQWxsaW5lYSB2ZXJ0aWNhbG1lbnRlIGdsaSBlbGVtZW50aSBhbCBjZW50cm8gKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIEFsbGluZWEgb3JpenpvbnRhbG1lbnRlIGdsaSBlbGVtZW50aSBhbCBjZW50cm8gKi9cbn1cblxuLmRpc3BsYXktdGl0bGUgZGl2IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIC8qIEFnZ2l1bmdlIHNwYXppbyBvcml6em9udGFsZSB0cmEgZ2xpIGVsZW1lbnRpICovXG59XG5cbi50b3AtdGl0bGUge1xuICBjb2xvcjogIzg3ODc4NztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBBc3NpY3VyYSBjaGUgb2duaSB0aXRvbG8gZ3JpZ2lvIHNpYSB1biBibG9jY28gc2VwYXJhdG8gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBDZW50cmEgaWwgdGVzdG8gZ3JpZ2lvICovXG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLyogQWxsaW5lYSB2ZXJ0aWNhbG1lbnRlIGxlIHNjcml0dGUgbmVyZSBjb24gcXVlbGxlIGdyaWdpZSAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogQXNzaWN1cmEgY2hlIG9nbmkgc290dG90aXRvbG8gbmVybyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2VudHJhIGlsIHRlc3RvIG5lcm8gKi9cbn1cblxuaDIge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5idG4tYmFjayB7XG4gIGJhY2tncm91bmQ6ICM2MDY0NzAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */"] });


/***/ }),

/***/ 29570:
/*!***************************************************************************************!*\
  !*** ./src/app/routes/popup-errore-inserimento/popup-errore-inserimento.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupErroreInserimentoComponent": () => (/* binding */ PopupErroreInserimentoComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);





function PopupErroreInserimentoComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "h2", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.data.titolo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PopupErroreInserimentoComponent_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Info:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PopupErroreInserimentoComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onClose() {
        this.dialogRef.close();
    }
}
PopupErroreInserimentoComponent.ɵfac = function PopupErroreInserimentoComponent_Factory(t) { return new (t || PopupErroreInserimentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
PopupErroreInserimentoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupErroreInserimentoComponent, selectors: [["app-popup-errore-inserimento"]], decls: 6, vars: 3, consts: [["mat-dialog-title", "", 3, "innerHTML", 4, "ngIf"], ["mat-dialog-title", "", 4, "ngIf"], [3, "innerHTML"], ["mat-button", "", 3, "click"], ["mat-dialog-title", "", 3, "innerHTML"], ["mat-dialog-title", ""]], template: function PopupErroreInserimentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PopupErroreInserimentoComponent_h2_0_Template, 1, 1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopupErroreInserimentoComponent_h2_1_Template, 2, 0, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-dialog-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-actions")(4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PopupErroreInserimentoComponent_Template_button_click_4_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.data.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.data.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3B1cC1lcnJvcmUtaW5zZXJpbWVudG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 26706:
/*!*************************************************!*\
  !*** ./src/app/routes/routes-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesRoutingModule": () => (/* binding */ RoutesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/admin-layout/admin-layout.component */ 36200);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2408);
/* harmony import */ var _sessions_403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions/403.component */ 686);
/* harmony import */ var _sessions_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/404.component */ 91859);
/* harmony import */ var _sessions_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/500.component */ 79337);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










const routes = [
    {
        path: '',
        component: _theme_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent,
        children: [
            // {path: '', component: AppComponent},
            // { path: '', redirectTo: 'local-login', pathMatch: 'full' },
            // {path: 'local-login', component: LocalUserLoginComponent},
            { path: 'dashboard',
                canActivate: [_core__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
                data: { role: ["P12689",
                        "P12689; P12690",
                        "P12689; P12690; P12799",
                        "P12689; P12690; P12799; P12800",
                        "P12689; P12690; P12799; P12800; P12801",
                        "P12689; P12690; P12799; P12801",
                        "P12689; P12690; P12800",
                        "P12689; P12690; P12800; P12801",
                        "P12689; P12690; P12801",
                        "P12689; P12799",
                        "P12689; P12799; P12800",
                        "P12689; P12799; P12800; P12801",
                        "P12689; P12799; P12801",
                        "P12689; P12800",
                        "P12689; P12800; P12801",
                        "P12689; P12801",
                        "P12690",
                        "P12690; P12799",
                        "P12690; P12799; P12800",
                        "P12690; P12799; P12800; P12801",
                        "P12690; P12799; P12801",
                        "P12690; P12800",
                        "P12690; P12800; P12801",
                        "P12690; P12801",
                        "P12799",
                        "P12799; P12800",
                        "P12799; P12800; P12801",
                        "P12799; P12801",
                        "P12800",
                        "P12800; P12801",
                        "P12801"]
                },
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent },
            {
                path: 'segnalazione',
                canActivate: [_core__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
                data: { role: ["P12689",
                        "P12689; P12690",
                        "P12689; P12690; P12799",
                        "P12689; P12690; P12799; P12800",
                        "P12689; P12690; P12799; P12800; P12801",
                        "P12689; P12690; P12799; P12801",
                        "P12689; P12690; P12800",
                        "P12689; P12690; P12800; P12801",
                        "P12689; P12690; P12801",
                        "P12689; P12799",
                        "P12689; P12799; P12800",
                        "P12689; P12799; P12800; P12801",
                        "P12689; P12799; P12801",
                        "P12689; P12800",
                        "P12689; P12800; P12801",
                        "P12689; P12801",
                        "P12690",
                        "P12690; P12799",
                        "P12690; P12799; P12800",
                        "P12690; P12799; P12800; P12801",
                        "P12690; P12799; P12801",
                        "P12690; P12800",
                        "P12690; P12800; P12801",
                        "P12690; P12801",
                        "P12799",
                        "P12799; P12800",
                        "P12799; P12800; P12801",
                        "P12799; P12801",
                        "P12800; P12801",
                        "P12801"]
                },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_routes_organizzazione_organizzazione_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./organizzazione/organizzazione.module */ 65860)).then(m => m.OrganizzazioneModule),
            },
            {
                path: 'modellazione',
                canActivate: [_core__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
                data: { role: ["P12689",
                        "P12689; P12690",
                        "P12689; P12690; P12799",
                        "P12689; P12690; P12799; P12800",
                        "P12689; P12690; P12799; P12800; P12801",
                        "P12689; P12690; P12799; P12801",
                        "P12689; P12690; P12800",
                        "P12689; P12690; P12800; P12801",
                        "P12689; P12690; P12801",
                        "P12689; P12799",
                        "P12689; P12799; P12800",
                        "P12689; P12799; P12800; P12801",
                        "P12689; P12799; P12801",
                        "P12689; P12800",
                        "P12689; P12800; P12801",
                        "P12689; P12801",
                        "P12690; P12799; P12800",
                        "P12690; P12799; P12800; P12801",
                        "P12690; P12800",
                        "P12690; P12800; P12801",
                        "P12799; P12800",
                        "P12799; P12800; P12801",
                        "P12800",
                        "P12800; P12801"
                    ] },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_routes_modellazione_modellazione_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modellazione/modellazione.module */ 83292)).then(m => m.ModellazioneModule),
            },
            {
                path: 'amministrazione',
                canActivate: [_core__WEBPACK_IMPORTED_MODULE_6__.AuthGuard],
                data: { role: ["P12689",
                        "P12689; P12690",
                        "P12689; P12799",
                        "P12689; P12800",
                        "P12689; P12801",
                        "P12689; P12690; P12799",
                        "P12689; P12690; P12800",
                        "P12689; P12690; P12801",
                        "P12689; P12799; P12800",
                        "P12689; P12799; P12801",
                        "P12689; P12800; P12801",
                        "P12689; P12690; P12799; P12800",
                        "P12689; P12690; P12799; P12801",
                        "P12689; P12690; P12800; P12801",
                        "P12689; P12799; P12800; P12801",
                        "P12689; P12690; P12799; P12800; P12801"
                    ] },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_routes_area-amministrativa_area-amministrativa_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./area-amministrativa/area-amministrativa.module */ 8139)).then(m => m.AreaAmministrativaModule),
            },
            /*      {
                   path: 'gestione-componenti',
                   loadChildren: () => import('./gestione-componenti/gestione-componenti.module').then(m => m.GestioneComponentiModule),
                 },*/
            { path: '403', component: _sessions_403_component__WEBPACK_IMPORTED_MODULE_3__.Error403Component },
            { path: '404', component: _sessions_404_component__WEBPACK_IMPORTED_MODULE_4__.Error404Component },
            { path: '500', component: _sessions_500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component },
        ],
    },
    /*   {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: Error404Component },
        ],
      }, */
    { path: '**', redirectTo: 'dashboard' },
];
class RoutesRoutingModule {
}
RoutesRoutingModule.ɵfac = function RoutesRoutingModule_Factory(t) { return new (t || RoutesRoutingModule)(); };
RoutesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: RoutesRoutingModule });
RoutesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
                useHash: _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.useHash,
            }),
        ], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](RoutesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ }),

/***/ 87951:
/*!*****************************************!*\
  !*** ./src/app/routes/routes.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoutesModule": () => (/* binding */ RoutesModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes-routing.module */ 26706);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 2408);
/* harmony import */ var _sessions_403_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sessions/403.component */ 686);
/* harmony import */ var _sessions_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sessions/404.component */ 91859);
/* harmony import */ var _sessions_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sessions/500.component */ 79337);
/* harmony import */ var _popup_comunicazioni_popup_comunicazioni_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popup-comunicazioni/popup-comunicazioni.component */ 53229);
/* harmony import */ var _local_user_login_local_user_login_local_user_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./local-user-login/local-user-login/local-user-login.component */ 20304);
/* harmony import */ var _popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var _errore_allegato_dialog_errore_allegato_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./errore-allegato-dialog/errore-allegato-dialog.component */ 2594);
/* harmony import */ var _dashboard_modal_dettagli_dashboard_modal_dettagli_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/modal-dettagli-dashboard/modal-dettagli-dashboard.component */ 72884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);





// import { LoginComponent } from './sessions/login/login.component';
// import { RegisterComponent } from './sessions/register/register.component';




// import { PopupAlertScadenzeComponent } from './popup-alert-scadenze/popup-alert-scadenze.component';





const COMPONENTS = [
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
    // LoginComponent,
    // RegisterComponent,
    _sessions_403_component__WEBPACK_IMPORTED_MODULE_3__.Error403Component,
    _sessions_404_component__WEBPACK_IMPORTED_MODULE_4__.Error404Component,
    _sessions_500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component,
];
const COMPONENTS_DYNAMIC = [];
class RoutesModule {
}
RoutesModule.ɵfac = function RoutesModule_Factory(t) { return new (t || RoutesModule)(); };
RoutesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: RoutesModule });
RoutesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](RoutesModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent,
        // LoginComponent,
        // RegisterComponent,
        _sessions_403_component__WEBPACK_IMPORTED_MODULE_3__.Error403Component,
        _sessions_404_component__WEBPACK_IMPORTED_MODULE_4__.Error404Component,
        _sessions_500_component__WEBPACK_IMPORTED_MODULE_5__.Error500Component, _popup_comunicazioni_popup_comunicazioni_component__WEBPACK_IMPORTED_MODULE_6__.PopupComunicazioniComponent, /*PopupAlertScadenzeComponent,*/ _local_user_login_local_user_login_local_user_login_component__WEBPACK_IMPORTED_MODULE_7__.LocalUserLoginComponent, _popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_8__.PopupErroreInserimentoComponent, _errore_allegato_dialog_errore_allegato_dialog_component__WEBPACK_IMPORTED_MODULE_9__.ErroreAllegatoDialogComponent, _dashboard_modal_dettagli_dashboard_modal_dettagli_dashboard_component__WEBPACK_IMPORTED_MODULE_10__.ModalDettagliDashboardComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _routes_routing_module__WEBPACK_IMPORTED_MODULE_1__.RoutesRoutingModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInputModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule] }); })();


/***/ }),

/***/ 686:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/403.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error403Component": () => (/* binding */ Error403Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 46947);


class Error403Component {
}
Error403Component.ɵfac = function Error403Component_Factory(t) { return new (t || Error403Component)(); };
Error403Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Error403Component, selectors: [["app-error-403"]], decls: 1, vars: 2, consts: [["code", "403", 3, "title", "message"]], template: function Error403Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Permission denied!")("message", "You do not have permission to access the requested data.");
    } }, directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent], encapsulation: 2 });


/***/ }),

/***/ 91859:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/404.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error404Component": () => (/* binding */ Error404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 46947);


class Error404Component {
}
Error404Component.ɵfac = function Error404Component_Factory(t) { return new (t || Error404Component)(); };
Error404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Error404Component, selectors: [["app-error-404"]], decls: 1, vars: 2, consts: [["code", "404", 3, "title", "message"]], template: function Error404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Page not found!")("message", "This is not the web page you are looking for.");
    } }, directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent], encapsulation: 2 });


/***/ }),

/***/ 79337:
/*!**************************************************!*\
  !*** ./src/app/routes/sessions/500.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error500Component": () => (/* binding */ Error500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/components/error-code/error-code.component */ 46947);


class Error500Component {
}
Error500Component.ɵfac = function Error500Component_Factory(t) { return new (t || Error500Component)(); };
Error500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Error500Component, selectors: [["app-error-500"]], decls: 1, vars: 2, consts: [["code", "500", 3, "title", "message"]], template: function Error500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "error-code", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Server went wrong!")("message", "Just kidding, looks like we have an internal issue, please try refreshing.");
    } }, directives: [_shared_components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_0__.ErrorCodeComponent], encapsulation: 2 });


/***/ }),

/***/ 32254:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/alert-segnalazioni-tab/alert-segnalazioni-tab.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertSegnalazioniTabComponent": () => (/* binding */ AlertSegnalazioniTabComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_notifiche_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/notifiche.service */ 49049);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);







class AlertSegnalazioniTabComponent {
    constructor(notificationService, router) {
        this.notificationService = notificationService;
        this.router = router;
        this.count30Days = 0;
        this.countFrom30To45Days = 0;
        this.countFrom45To60Days = 0;
    }
    ngOnInit() {
        this.notificationService.count30Days$.subscribe(count => {
            this.count30Days = count;
        });
        this.notificationService.count30To45Days$.subscribe(count => {
            this.countFrom30To45Days = count;
        });
        this.notificationService.count45To60Days$.subscribe(count => {
            this.countFrom45To60Days = count;
        });
    }
    navigateWithDates(dataFine, dataInizio) {
        const today = new Date();
        const endDate = new Date(today);
        if (dataFine !== null) {
            endDate.setDate(today.getDate() - dataFine);
        }
        let startDate = null;
        if (dataInizio !== null) {
            startDate = new Date(today);
            startDate.setDate(today.getDate() - dataInizio);
        }
        this.router.navigate(['/segnalazione/gestione'], {
            queryParams: {
                startDate: startDate ? startDate.toISOString().split('T')[0] : null,
                endDate: endDate.toISOString().split('T')[0],
                toggle: true
            }
        });
    }
}
AlertSegnalazioniTabComponent.ɵfac = function AlertSegnalazioniTabComponent_Factory(t) { return new (t || AlertSegnalazioniTabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_notifiche_service__WEBPACK_IMPORTED_MODULE_0__.NotificheService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AlertSegnalazioniTabComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertSegnalazioniTabComponent, selectors: [["app-alert-segnalazioni-tab"]], decls: 26, vars: 3, consts: [["appearance", "outlined", 1, "container-card"], [1, "card-content-container"], ["appearance", "outlined", 1, "alert-card", 3, "click"], [1, "less30"], [1, "between30and45"], [1, "over60"]], template: function AlertSegnalazioniTabComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Alert Segnalazioni");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 1)(5, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertSegnalazioniTabComponent_Template_mat_card_click_5_listener() { return ctx.navigateWithDates(null, 30); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-card-header")(7, "mat-card-title")(8, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertSegnalazioniTabComponent_Template_mat_card_click_12_listener() { return ctx.navigateWithDates(30, 45); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-card-header")(14, "mat-card-title")(15, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertSegnalazioniTabComponent_Template_mat_card_click_19_listener() { return ctx.navigateWithDates(45, 60); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card-header")(21, "mat-card-title")(22, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "error_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ci sono ", ctx.count30Days, " segnalazioni aperte da meno di 30 giorni ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ci sono ", ctx.countFrom30To45Days, " segnalazioni aperte da quasi 45 giorni. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Ci sono ", ctx.countFrom45To60Days, " segnalazioni aperte da quasi 60 giorni. ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], styles: [".container-card[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n.card-content-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  \n  gap: 10px;\n  \n}\n\n.alert-card[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 33%;\n  \n  height: 20%;\n  \n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  \n  transition: box-shadow 0.3s ease-in-out;\n  \n  border: 2px solid #ccc;\n  \n  border-radius: 8px;\n  \n}\n\n.alert-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);\n  \n  border-color: #999;\n  \n}\n\n.less30[_ngcontent-%COMP%] {\n  color: #28a745 !important;\n  font-size: xx-large;\n}\n\n.between30and45[_ngcontent-%COMP%] {\n  color: #ffc107 !important;\n  font-size: xx-large;\n}\n\n.over60[_ngcontent-%COMP%] {\n  color: #dc3545 !important;\n  font-size: xx-large;\n}\n\n.divider[_ngcontent-%COMP%] {\n  height: 15px;\n  background: linear-gradient(to right, #2f6dd5, #2196f3);\n  border: none;\n  border-radius: 2px;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LXNlZ25hbGF6aW9uaS10YWIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYWxlcnQtc2VnbmFsYXppb25pLXRhYlxcYWxlcnQtc2VnbmFsYXppb25pLXRhYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQStCLG9DQUFBO0VBQy9CLFNBQUE7RUFBVyx1QkFBQTtBQ0diOztBREFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsVUFBQTtFQUFZLGlDQUFBO0VBQ1osV0FBQTtFQUFhLCtCQUFBO0VBQ2Isd0NBQUE7RUFBMEMsVUFBQTtFQUMxQyx1Q0FBQTtFQUF5QywyQkFBQTtFQUN6QyxzQkFBQTtFQUF3Qix3QkFBQTtFQUN4QixrQkFBQTtFQUFvQix1QkFBQTtBQ1N0Qjs7QUROQTtFQUNFLHlDQUFBO0VBQTJDLGlDQUFBO0VBQzNDLGtCQUFBO0VBQW9CLDRDQUFBO0FDV3RCOztBRFBBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ1VGOztBRFBBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ1VGOztBRFBBO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQ1VGOztBRFBBO0VBQ0UsWUFBQTtFQUNBLHVEQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1VGIiwiZmlsZSI6ImFsZXJ0LXNlZ25hbGF6aW9uaS10YWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWNhcmQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7IC8qIFNwYXppYXR1cmEgdW5pZm9ybWUgdHJhIGxlIGNhcmQgKi9cclxuICBnYXA6IDEwcHg7IC8qIFNwYXppbyB0cmEgbGUgY2FyZCAqL1xyXG59XHJcblxyXG4uYWxlcnQtY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGg6IDMzJTsgLyogTGFyZ2hlenphIGRlbGxlIHNpbmdvbGUgY2FyZCAqL1xyXG4gIGhlaWdodDogMjAlOyAvKiBBbHRlenphIGRlbGxlIHNpbmdvbGUgY2FyZCAqL1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIE9tYnJhICovXHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzIGVhc2UtaW4tb3V0OyAvKiBUcmFuc2l6aW9uZSBkZWxsJ29tYnJhICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgI2NjYzsgLyogQm9yZG8gZ3JpZ2lvIGNoaWFybyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDsgLyogQW5nb2xpIGFycm90b25kYXRpICovXHJcbn1cclxuXHJcbi5hbGVydC1jYXJkOmhvdmVyIHtcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTsgLyogT21icmEgYWwgcGFzc2FnZ2lvIGRlbCBtb3VzZSAqL1xyXG4gIGJvcmRlci1jb2xvcjogIzk5OTsgLyogQ29sb3JlIGRlbCBib3JkbyBhbCBwYXNzYWdnaW8gZGVsIG1vdXNlICovXHJcbn1cclxuXHJcblxyXG4ubGVzczMwe1xyXG4gIGNvbG9yOiAjMjhhNzQ1IWltcG9ydGFudDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG4uYmV0d2VlbjMwYW5kNDV7XHJcbiAgY29sb3I6ICNmZmMxMDchaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5vdmVyNjB7XHJcbiAgY29sb3I6ICNkYzM1NDUhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbn1cclxuXHJcbi5kaXZpZGVye1xyXG4gIGhlaWdodDogMTVweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjZkZDUsICMyMTk2ZjMpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lci1jYXJkIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNhcmQtY29udGVudC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgLyogU3BhemlhdHVyYSB1bmlmb3JtZSB0cmEgbGUgY2FyZCAqL1xuICBnYXA6IDEwcHg7XG4gIC8qIFNwYXppbyB0cmEgbGUgY2FyZCAqL1xufVxuXG4uYWxlcnQtY2FyZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMzMlO1xuICAvKiBMYXJnaGV6emEgZGVsbGUgc2luZ29sZSBjYXJkICovXG4gIGhlaWdodDogMjAlO1xuICAvKiBBbHRlenphIGRlbGxlIHNpbmdvbGUgY2FyZCAqL1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAvKiBPbWJyYSAqL1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIC8qIFRyYW5zaXppb25lIGRlbGwnb21icmEgKi9cbiAgYm9yZGVyOiAycHggc29saWQgI2NjYztcbiAgLyogQm9yZG8gZ3JpZ2lvIGNoaWFybyAqL1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIC8qIEFuZ29saSBhcnJvdG9uZGF0aSAqL1xufVxuXG4uYWxlcnQtY2FyZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvKiBPbWJyYSBhbCBwYXNzYWdnaW8gZGVsIG1vdXNlICovXG4gIGJvcmRlci1jb2xvcjogIzk5OTtcbiAgLyogQ29sb3JlIGRlbCBib3JkbyBhbCBwYXNzYWdnaW8gZGVsIG1vdXNlICovXG59XG5cbi5sZXNzMzAge1xuICBjb2xvcjogIzI4YTc0NSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4uYmV0d2VlbjMwYW5kNDUge1xuICBjb2xvcjogI2ZmYzEwNyAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuXG4ub3ZlcjYwIHtcbiAgY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cblxuLmRpdmlkZXIge1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmNmRkNSwgIzIxOTZmMyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 41299:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BreadcrumbComponent": () => (/* binding */ BreadcrumbComponent)
/* harmony export */ });
/* harmony import */ var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/bootstrap/menu.service */ 38714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);








function BreadcrumbComponent_li_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navlink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, navlink_r1));
} }
function BreadcrumbComponent_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const navlink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, navlink_r1));
} }
function BreadcrumbComponent_li_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "chevron_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BreadcrumbComponent_li_2_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const navlink_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, navlink_r1));
} }
function BreadcrumbComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BreadcrumbComponent_li_2_span_1_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_ng_container_2_Template, 6, 3, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, BreadcrumbComponent_li_2_mat_icon_3_Template, 2, 0, "mat-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BreadcrumbComponent_li_2_span_4_Template, 3, 3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isFirst_r2 = ctx.first;
    const isLast_r3 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isFirst_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isFirst_r2 && !isLast_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isLast_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", isLast_r3);
} }
class BreadcrumbComponent {
    constructor(router, menu) {
        this.router = router;
        this.menu = menu;
        this.nav = [];
    }
    ngOnInit() {
        this.nav = Array.isArray(this.nav) ? this.nav : [];
        if (this.nav.length === 0) {
            this.genBreadcrumb();
        }
    }
    trackByNavlink(index, navlink) {
        return navlink;
    }
    genBreadcrumb() {
        const routes = this.router.url.slice(1).split('/');
        this.nav = this.menu.getLevel(routes).filter(route => route !== 'menu.dashboard');
    }
}
BreadcrumbComponent.ɵfac = function BreadcrumbComponent_Factory(t) { return new (t || BreadcrumbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService)); };
BreadcrumbComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BreadcrumbComponent, selectors: [["breadcrumb"]], inputs: { nav: "nav" }, decls: 3, vars: 2, consts: [["aria-label", "breadcrumb"], [1, "matero-breadcrumb"], ["class", "matero-breadcrumb-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "matero-breadcrumb-item"], ["class", "link", 4, "ngIf"], [4, "ngIf"], ["class", "chevron", 4, "ngIf"], [1, "link"], [1, "chevron"]], template: function BreadcrumbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BreadcrumbComponent_li_2_Template, 5, 4, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.nav)("ngForTrackBy", ctx.trackByNavlink);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".matero-breadcrumb {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 1rem;\n  padding: 0;\n  font-size: 0.875rem;\n  list-style: none;\n}\n\n.matero-breadcrumb-item {\n  line-height: 18px;\n  text-transform: none;\n}\n\n.matero-breadcrumb-item > a {\n  color: currentColor;\n}\n\n.matero-breadcrumb-item > a:hover {\n  color: currentColor;\n  text-decoration: underline;\n}\n\n.matero-breadcrumb-item > .chevron {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n  vertical-align: middle;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.matero-breadcrumb-item > .link {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcYnJlYWRjcnVtYlxcYnJlYWRjcnVtYi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGOztBRENFO0VBQ0UsbUJBQUE7QUNDSjs7QURDSTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7QUNDTjs7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQ0RKOztBRElFO0VBQ0Usc0JBQUE7QUNGSiIsImZpbGUiOiJicmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGVyby1icmVhZGNydW1iIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAuODc1cmVtO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtIHtcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuICB0ZXh0LXRyYW5zZm9ybTpub25lO1xyXG5cclxuICA+IGEge1xyXG4gICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IC5jaGV2cm9uIHtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIH1cclxuXHJcbiAgPiAubGluayB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxufVxyXG4iLCIubWF0ZXJvLWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0gPiBhIHtcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcbn1cbi5tYXRlcm8tYnJlYWRjcnVtYi1pdGVtID4gYTpob3ZlciB7XG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLm1hdGVyby1icmVhZGNydW1iLWl0ZW0gPiAuY2hldnJvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4ubWF0ZXJvLWJyZWFkY3J1bWItaXRlbSA+IC5saW5rIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 46947:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/error-code/error-code.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorCodeComponent": () => (/* binding */ ErrorCodeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);




function ErrorCodeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.title);
} }
function ErrorCodeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.message);
} }
class ErrorCodeComponent {
    constructor() {
        this.code = '';
        this.title = '';
        this.message = '';
    }
}
ErrorCodeComponent.ɵfac = function ErrorCodeComponent_Factory(t) { return new (t || ErrorCodeComponent)(); };
ErrorCodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorCodeComponent, selectors: [["error-code"]], inputs: { code: "code", title: "title", message: "message" }, decls: 8, vars: 3, consts: [[1, "matero-error-wrap"], [1, "matero-error-code"], ["class", "matero-error-title", 4, "ngIf"], ["class", "matero-error-message", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/"], [1, "matero-error-title"], [1, "matero-error-message"]], template: function ErrorCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ErrorCodeComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ErrorCodeComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div")(6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatAnchor, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: [".matero-error-wrap {\n  text-align: center;\n}\n\n.matero-error-code {\n  padding: 20px 0;\n  font-size: 150px;\n  text-shadow: 2.1213203436px 2.1213203436px 0 rgba(0, 0, 0, 0.028575), 4.2426406871px 4.2426406871px 0 rgba(0, 0, 0, 0.02715), 6.3639610307px 6.3639610307px 0 rgba(0, 0, 0, 0.025725), 8.4852813742px 8.4852813742px 0 rgba(0, 0, 0, 0.0243), 10.6066017178px 10.6066017178px 0 rgba(0, 0, 0, 0.022875), 12.7279220614px 12.7279220614px 0 rgba(0, 0, 0, 0.02145), 14.8492424049px 14.8492424049px 0 rgba(0, 0, 0, 0.020025), 16.9705627485px 16.9705627485px 0 rgba(0, 0, 0, 0.0186), 19.091883092px 19.091883092px 0 rgba(0, 0, 0, 0.017175), 21.2132034356px 21.2132034356px 0 rgba(0, 0, 0, 0.01575), 23.3345237792px 23.3345237792px 0 rgba(0, 0, 0, 0.014325), 25.4558441227px 25.4558441227px 0 rgba(0, 0, 0, 0.0129), 27.5771644663px 27.5771644663px 0 rgba(0, 0, 0, 0.011475), 29.6984848098px 29.6984848098px 0 rgba(0, 0, 0, 0.01005), 31.8198051534px 31.8198051534px 0 rgba(0, 0, 0, 0.008625), 33.941125497px 33.941125497px 0 rgba(0, 0, 0, 0.0072), 36.0624458405px 36.0624458405px 0 rgba(0, 0, 0, 0.005775), 38.1837661841px 38.1837661841px 0 rgba(0, 0, 0, 0.00435), 40.3050865276px 40.3050865276px 0 rgba(0, 0, 0, 0.002925), 42.4264068712px 42.4264068712px 0 rgba(0, 0, 0, 0.0015);\n}\n\n.matero-error-title {\n  margin: 0 0 16px;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 32px;\n}\n\n.matero-error-message {\n  margin: 0 0 16px;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLWNvZGUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHNoYXJlZFxcY29tcG9uZW50c1xcZXJyb3ItY29kZVxcZXJyb3ItY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0b0NBQ0U7QUNGSjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSRiIsImZpbGUiOiJlcnJvci1jb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnbG9uZy1zaGFkb3cnIGFzICo7XHJcblxyXG4ubWF0ZXJvLWVycm9yLXdyYXAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hdGVyby1lcnJvci1jb2RlIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgZm9udC1zaXplOiAxNTBweDtcclxuICB0ZXh0LXNoYWRvdzpcclxuICAgIGxvbmctc2hhZG93KFxyXG4gICAgICAkZGlyZWN0aW9uOiA0NWRlZyxcclxuICAgICAgJGxlbmd0aDogNjBweCxcclxuICAgICAgJGNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wMyksXHJcbiAgICAgICRmYWRlOiByZ2JhKDAsIDAsIDAsIC4wMDE1KSxcclxuICAgICAgJHNoYWRvdy1jb3VudDogMjBcclxuICAgICk7XHJcbn1cclxuXHJcbi5tYXRlcm8tZXJyb3ItdGl0bGUge1xyXG4gIG1hcmdpbjogMCAwIDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbn1cclxuXHJcbi5tYXRlcm8tZXJyb3ItbWVzc2FnZSB7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxufVxyXG4iLCIubWF0ZXJvLWVycm9yLXdyYXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXRlcm8tZXJyb3ItY29kZSB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgZm9udC1zaXplOiAxNTBweDtcbiAgdGV4dC1zaGFkb3c6IDIuMTIxMzIwMzQzNnB4IDIuMTIxMzIwMzQzNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyODU3NSksIDQuMjQyNjQwNjg3MXB4IDQuMjQyNjQwNjg3MXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAyNzE1KSwgNi4zNjM5NjEwMzA3cHggNi4zNjM5NjEwMzA3cHggMCByZ2JhKDAsIDAsIDAsIDAuMDI1NzI1KSwgOC40ODUyODEzNzQycHggOC40ODUyODEzNzQycHggMCByZ2JhKDAsIDAsIDAsIDAuMDI0MyksIDEwLjYwNjYwMTcxNzhweCAxMC42MDY2MDE3MTc4cHggMCByZ2JhKDAsIDAsIDAsIDAuMDIyODc1KSwgMTIuNzI3OTIyMDYxNHB4IDEyLjcyNzkyMjA2MTRweCAwIHJnYmEoMCwgMCwgMCwgMC4wMjE0NSksIDE0Ljg0OTI0MjQwNDlweCAxNC44NDkyNDI0MDQ5cHggMCByZ2JhKDAsIDAsIDAsIDAuMDIwMDI1KSwgMTYuOTcwNTYyNzQ4NXB4IDE2Ljk3MDU2Mjc0ODVweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTg2KSwgMTkuMDkxODgzMDkycHggMTkuMDkxODgzMDkycHggMCByZ2JhKDAsIDAsIDAsIDAuMDE3MTc1KSwgMjEuMjEzMjAzNDM1NnB4IDIxLjIxMzIwMzQzNTZweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTU3NSksIDIzLjMzNDUyMzc3OTJweCAyMy4zMzQ1MjM3NzkycHggMCByZ2JhKDAsIDAsIDAsIDAuMDE0MzI1KSwgMjUuNDU1ODQ0MTIyN3B4IDI1LjQ1NTg0NDEyMjdweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTI5KSwgMjcuNTc3MTY0NDY2M3B4IDI3LjU3NzE2NDQ2NjNweCAwIHJnYmEoMCwgMCwgMCwgMC4wMTE0NzUpLCAyOS42OTg0ODQ4MDk4cHggMjkuNjk4NDg0ODA5OHB4IDAgcmdiYSgwLCAwLCAwLCAwLjAxMDA1KSwgMzEuODE5ODA1MTUzNHB4IDMxLjgxOTgwNTE1MzRweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDg2MjUpLCAzMy45NDExMjU0OTdweCAzMy45NDExMjU0OTdweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDcyKSwgMzYuMDYyNDQ1ODQwNXB4IDM2LjA2MjQ0NTg0MDVweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDU3NzUpLCAzOC4xODM3NjYxODQxcHggMzguMTgzNzY2MTg0MXB4IDAgcmdiYSgwLCAwLCAwLCAwLjAwNDM1KSwgNDAuMzA1MDg2NTI3NnB4IDQwLjMwNTA4NjUyNzZweCAwIHJnYmEoMCwgMCwgMCwgMC4wMDI5MjUpLCA0Mi40MjY0MDY4NzEycHggNDIuNDI2NDA2ODcxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjAwMTUpO1xufVxuXG4ubWF0ZXJvLWVycm9yLXRpdGxlIHtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cblxuLm1hdGVyby1lcnJvci1tZXNzYWdlIHtcbiAgbWFyZ2luOiAwIDAgMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjhweDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 32802:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/bootstrap/menu.service */ 38714);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/coercion */ 76484);
/* harmony import */ var _shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/info-utenti.service */ 39202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












function PageHeaderComponent_breadcrumb_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "breadcrumb", 9);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nav", ctx_r0.nav);
} }
class PageHeaderComponent {
    constructor(router, menu, infoUtentiService) {
        this.router = router;
        this.menu = menu;
        this.infoUtentiService = infoUtentiService;
        this.title = '';
        this.subtitle = '';
        this.nav = [];
        this._hideBreadCrumb = false;
        this.nomeUtente = ' ';
        this.matricolaUtente = ' ';
        this.cognomeUtente = ' ';
        this.roleDesc = ' ';
        this.errorMessage = "";
    }
    get hideBreadcrumb() {
        return this._hideBreadCrumb;
    }
    set hideBreadcrumb(value) {
        this._hideBreadCrumb = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__.coerceBooleanProperty)(value);
    }
    ngOnInit() {
        const username = sessionStorage.getItem('username');
        if (username) {
            const trimmedUsername = username.substring(1, username.length - 1);
            this.infoUtentiService.WhoAmI().subscribe((info) => {
                this.nomeUtente = info.firstName;
                this.cognomeUtente = info.lastName;
                this.matricolaUtente = info.matricula;
                const allRoleDesc = sessionStorage.getItem('roleDesc');
                if (allRoleDesc) {
                    this.roleDesc = JSON.parse(allRoleDesc)[0];
                }
            });
        }
        else {
            this.errorMessage = 'Username non trovato in sessionStorage';
            // console.warn('Username non trovato in sessionStorage');
        }
        this.nav = Array.isArray(this.nav) ? this.nav : [];
        if (this.nav.length === 0) {
            this.genBreadcrumb();
        }
        this.title = this.title || this.nav[this.nav.length - 1] || 'Dashboard';
    }
    showFieldRole(roleDesc) {
        switch (roleDesc) {
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
        this.nav = this.menu.getLevel(routes).filter(route => route !== 'menu.dashboard');
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_bootstrap_menu_service__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_1__.InfoUtentiService)); };
PageHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["page-header"]], hostAttrs: [1, "matero-page-header"], inputs: { title: "title", subtitle: "subtitle", nav: "nav", hideBreadcrumb: "hideBreadcrumb" }, decls: 17, vars: 7, consts: [[1, "container"], [1, "matero-page-header-left"], [1, "white-text"], [1, "matero-page-title"], [3, "nav", 4, "ngIf"], [1, "matero-page-header-right"], [1, "user-icon"], [1, "user-info"], [3, "innerHTML"], [3, "nav"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "V2.0.1 (Fix Login e Rimosso chiamate per tabella utente)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, PageHeaderComponent_breadcrumb_9_Template, 1, 1, "breadcrumb", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5)(11, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 5, ctx.title), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.hideBreadcrumb);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.showFieldRole(ctx.roleDesc), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.matricolaUtente);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["/* Stile principale della pagina header */\n.matero-page-header {\n  display: block;\n  margin: -20px -20px 20px;\n  padding: 16px;\n  color: #fff;\n  background: linear-gradient(to right, #2f6dd5, #2196f3);\n}\n.matero-breadcrumb {\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.matero-page-title {\n  margin: 0;\n  font-weight: 400;\n  font-size: 24px;\n}\n.container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.matero-page-header-left {\n  margin-right: auto;\n}\n.matero-page-header-right {\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n}\n/* icona utente */\n.user-icon {\n  font-size: 55px;\n  width: 55px;\n  height: 55px;\n  margin-right: 10px;\n}\n/* informazioni utente */\n.user-info {\n  display: flex;\n  flex-direction: column;\n}\n.white-text {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXHBhZ2UtaGVhZGVyXFxwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQkEseUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdURBQUE7QUM5QkY7QURpQ0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUM5QkY7QURpQ0E7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDOUJGO0FEaUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUM5QkY7QURpQ0E7RUFDRSxrQkFBQTtBQzlCRjtBRGlDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDOUJGO0FEaUNBLGlCQUFBO0FBQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQzlCRjtBRGlDQSx3QkFBQTtBQUNBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FDOUJGO0FEaUNBO0VBQ0UsWUFBQTtBQzlCRiIsImZpbGUiOiJwYWdlLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5tYXRlcm8tcGFnZS1oZWFkZXIge1xyXG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgIG1hcmdpbjogLTIwcHggLTIwcHggMjBweDtcclxuLy8gICBwYWRkaW5nOiAxNnB4O1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIC8vYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuLy8gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjZkZDUsICMyMTk2ZjMpO1xyXG5cclxuLy8gICAubWF0ZXJvLWJyZWFkY3J1bWIge1xyXG4vLyAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4vLyAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICB9XHJcbi8vIH1cclxuXHJcbi8vIC5tYXRlcm8tcGFnZS10aXRsZSB7XHJcbi8vICAgbWFyZ2luOiAwO1xyXG4vLyAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbi8vICAgZm9udC1zaXplOiAyNHB4O1xyXG4vLyB9XHJcblxyXG4vLyAuY29udGFpbmVyIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0ZXJvLXBhZ2UtaGVhZGVyLWxlZnQge1xyXG4vLyAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuLy8gfVxyXG4vLyAubWF0ZXJvLXBhZ2UtaGVhZGVyLXJpZ2h0IHtcclxuLy8gICBtYXJnaW4tbGVmdDogYXV0bztcclxuLy8gfVxyXG5cclxuLyogU3RpbGUgcHJpbmNpcGFsZSBkZWxsYSBwYWdpbmEgaGVhZGVyICovXHJcbi5tYXRlcm8tcGFnZS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogLTIwcHggLTIwcHggMjBweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzJmNmRkNSwgIzIxOTZmMyk7XHJcbn1cclxuXHJcbi5tYXRlcm8tYnJlYWRjcnVtYiB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi5tYXRlcm8tcGFnZS10aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubWF0ZXJvLXBhZ2UtaGVhZGVyLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLm1hdGVyby1wYWdlLWhlYWRlci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4vKiBpY29uYSB1dGVudGUgKi9cclxuLnVzZXItaWNvbiB7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIHdpZHRoOiA1NXB4O1xyXG4gIGhlaWdodDogNTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi8qIGluZm9ybWF6aW9uaSB1dGVudGUgKi9cclxuLnVzZXItaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ud2hpdGUtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsIi8qIFN0aWxlIHByaW5jaXBhbGUgZGVsbGEgcGFnaW5hIGhlYWRlciAqL1xuLm1hdGVyby1wYWdlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IC0yMHB4IC0yMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjZkZDUsICMyMTk2ZjMpO1xufVxuXG4ubWF0ZXJvLWJyZWFkY3J1bWIge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5tYXRlcm8tcGFnZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubWF0ZXJvLXBhZ2UtaGVhZGVyLWxlZnQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5tYXRlcm8tcGFnZS1oZWFkZXItcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLyogaWNvbmEgdXRlbnRlICovXG4udXNlci1pY29uIHtcbiAgZm9udC1zaXplOiA1NXB4O1xuICB3aWR0aDogNTVweDtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi8qIGluZm9ybWF6aW9uaSB1dGVudGUgKi9cbi51c2VyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ud2hpdGUtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 20034:
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/disable-control.directive.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisableControlDirective": () => (/* binding */ DisableControlDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 90587);



class DisableControlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    set disableControl(condition) {
        var _a;
        const action = condition ? 'disable' : 'enable';
        (_a = this.ngControl.control) === null || _a === void 0 ? void 0 : _a[action]();
    }
}
DisableControlDirective.ɵfac = function DisableControlDirective_Factory(t) { return new (t || DisableControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl, 12)); };
DisableControlDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DisableControlDirective, selectors: [["", "disableControl", ""]], inputs: { disableControl: "disableControl" } });


/***/ }),

/***/ 51679:
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* reexport safe */ _shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule),
/* harmony export */   "AppDirectionality": () => (/* reexport safe */ _services_directionality_service__WEBPACK_IMPORTED_MODULE_1__.AppDirectionality),
/* harmony export */   "MessageService": () => (/* reexport safe */ _services_message_service__WEBPACK_IMPORTED_MODULE_2__.MessageService),
/* harmony export */   "MemoryStorageService": () => (/* reexport safe */ _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.MemoryStorageService),
/* harmony export */   "StorageService": () => (/* reexport safe */ _services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService),
/* harmony export */   "PaginatorI18nService": () => (/* reexport safe */ _services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_4__.PaginatorI18nService),
/* harmony export */   "MAT_COLORS": () => (/* reexport safe */ _utils_colors__WEBPACK_IMPORTED_MODULE_5__.MAT_COLORS),
/* harmony export */   "MAT_ICONS": () => (/* reexport safe */ _utils_icons__WEBPACK_IMPORTED_MODULE_6__.MAT_ICONS)
/* harmony export */ });
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 44466);
/* harmony import */ var _services_directionality_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/directionality.service */ 83007);
/* harmony import */ var _services_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/message.service */ 86199);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/storage.service */ 1303);
/* harmony import */ var _services_paginator_i18n_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/paginator-i18n.service */ 23350);
/* harmony import */ var _utils_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/colors */ 26787);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/icons */ 56419);
// Module

// Services




// Utils




/***/ }),

/***/ 73463:
/*!************************************************************!*\
  !*** ./src/app/shared/models/comunicazione-letta.model.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicazioneLetta": () => (/* binding */ ComunicazioneLetta)
/* harmony export */ });
/* import { Comunicazione } from "./comunicazione.model";


export class ComunicazioneLetta{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  comunicazione!: Comunicazione;
  matricola!: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.comunicazione = new Comunicazione();
    this.matricola = '';
  }
} */
class ComunicazioneLetta {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.idComunicazione = 0;
        this.matricola = '';
    }
}


/***/ }),

/***/ 72580:
/*!******************************************************!*\
  !*** ./src/app/shared/models/comunicazioni.model.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comunicazioni": () => (/* binding */ Comunicazioni)
/* harmony export */ });
class Comunicazioni {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.oggetto = '';
        this.messaggio = '';
        this.dataInizio = '';
        this.dataFine = '';
        this.idTipoComunicazione = 0;
    }
}


/***/ }),

/***/ 73346:
/*!************************************************!*\
  !*** ./src/app/shared/pipes/clear-url.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClearURLPipe": () => (/* binding */ ClearURLPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ClearURLPipe {
    transform(value) {
        return value.replace("menu.", "/").replace(".", "/");
    }
}
ClearURLPipe.ɵfac = function ClearURLPipe_Factory(t) { return new (t || ClearURLPipe)(); };
ClearURLPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "clearURL", type: ClearURLPipe, pure: true });


/***/ }),

/***/ 72129:
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/safe-url.pipe.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SafeUrlPipe": () => (/* binding */ SafeUrlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



class SafeUrlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafeUrlPipe.ɵfac = function SafeUrlPipe_Factory(t) { return new (t || SafeUrlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
SafeUrlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeUrl", type: SafeUrlPipe, pure: true });


/***/ }),

/***/ 65279:
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/to-observable.pipe.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToObservablePipe": () => (/* binding */ ToObservablePipe)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 14437);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);


class ToObservablePipe {
    transform(value) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.isObservable)(value) ? value : (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(value);
    }
}
ToObservablePipe.ɵfac = function ToObservablePipe_Factory(t) { return new (t || ToObservablePipe)(); };
ToObservablePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefinePipe"]({ name: "toObservable", type: ToObservablePipe, pure: true });


/***/ }),

/***/ 79360:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/comunicazioni.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicazioniService": () => (/* binding */ ComunicazioniService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ComunicazioniService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Comunicazioni/';
    }
    newGetComunicazioneById(id) {
        return this.http.get(`${this.apiUrl}GetComunicazioniById/${id}`);
    }
    getTipoComunicazioneById(id) {
        return this.http.get(`${this.apiUrl}GetTipoComunicazioneById/${id}`);
    }
    newInserisciComunicazione(comunicazione) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(comunicazione);
        return this.http.post(`${this.apiUrl}InsertComunicazione`, body, { headers });
    }
    newContaComunicazioni(searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}GetCountVistaComunicazioniTipoComunicazioni`, { params });
    }
    newGetComunicazioniConPaginazione(pageSize, orderBy, pageNumber, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('dimensione', pageSize.toString())
            .set('pagina', pageNumber.toString());
        params = orderBy == null ? params : params.set('ordine', orderBy);
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}GetComunicazioniPaginazione`, { params });
    }
    newDeleteComunicazione(id) {
        return this.http.delete(`${this.apiUrl}EliminaComunicazione/${id}`);
    }
    newAggiornaComunicazione(comunicazione) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(comunicazione);
        return this.http.put(`${this.apiUrl}UpdateComunicazione`, body, { headers });
    }
    newSaveComunicazioneLettaChecked(comunicazioneLetta) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(comunicazioneLetta);
        return this.http.post(`${this.apiUrl}InsertComunicazioneLetta`, body, { headers });
    }
    newGetComunicazioniLetteByMatricola(matricola) {
        return this.http.get(`${this.apiUrl}GetComunicazioniLetteByMatricola/${matricola}`);
    }
}
ComunicazioniService.ɵfac = function ComunicazioniService_Factory(t) { return new (t || ComunicazioniService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ComunicazioniService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ComunicazioniService, factory: ComunicazioniService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83007:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/directionality.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppDirectionality": () => (/* binding */ AppDirectionality)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



class AppDirectionality {
    constructor() {
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this._value = 'ltr';
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.change.next(value);
    }
    ngOnDestroy() {
        this.change.complete();
    }
}
AppDirectionality.ɵfac = function AppDirectionality_Factory(t) { return new (t || AppDirectionality)(); };
AppDirectionality.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppDirectionality, factory: AppDirectionality.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 39202:
/*!********************************************************!*\
  !*** ./src/app/shared/services/info-utenti.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoUtentiService": () => (/* binding */ InfoUtentiService)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);




class InfoUtentiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Account/';
        this.mgUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MG_URL + 'Login/';
    }
    /*   infoUtente() : Observable<InfoUtente>{
        return this.http.get<InfoUtente>(environment.API_URI+'account');
      } */
    newInfoUtente() {
        return this.http.get((`${this.mgUrl}ForwardHeaders`));
    }
    getInfoUtenteByUsername(loginUsername) {
        return this.http.get((`${this.apiUrl}GetUtenteLoggatoByUsername/${loginUsername}`));
    }
    getStringaIDMConUsername(username) {
        return this.http.get((`${this.apiUrl}GetStringaIDM?username=${username}`));
    }
    checkDatiLocaleIDM(stringaUtenteIDM, username) {
        return this.http.get((`${this.apiUrl}ControlloLoginIDM?stringaUtenteIDM=${stringaUtenteIDM}&username=${username}`));
    }
    WhoAmI() {
        return this.http.get((`${this.mgUrl}WhoAmI`));
    }
    fetchSedeDescriptions(codiciSede) {
        console.log('codiciSede: ' + codiciSede);
        //const url = `${environment.API_URI}Territorio/GetSedeDescriptions`;
        //const url = `http://ms01098-siricoapi-af-bi.apps.ocps.sviluppo.inps.it/api/Territorio/GetSedeDescriptions`;
        const url = `${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI}${_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI}Territorio/GetSedeDescriptions`;
        console.log('url: ' + url);
        return this.http.post(url, codiciSede);
    }
}
InfoUtentiService.ɵfac = function InfoUtentiService_Factory(t) { return new (t || InfoUtentiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
InfoUtentiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InfoUtentiService, factory: InfoUtentiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86199:
/*!****************************************************!*\
  !*** ./src/app/shared/services/message.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
}
MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
MessageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 84667:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/messaggi.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessaggiService": () => (/* binding */ MessaggiService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class MessaggiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Bacheca/';
        this.datiMessaggio$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.datiMessaggio);
        this.statoMessaggio$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.statoMessaggio);
    }
    contaMessaggi(attivo) {
        // const URL = this.apiUrl + 'contaMessaggiAttivi';
        const URL = `${this.apiUrl}contaMessaggi?visibilita=${attivo}`;
        // console.log('params:',params);
        // console.log('URL:',URL);
        return this.http.get(URL);
    }
    getMessaggi(quantita, pagina, ordinamentoColonna, attivo) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (quantita)
            params = params.set('quantita', quantita);
        if (pagina)
            params = params.set('pagina', pagina);
        if (ordinamentoColonna)
            params = params.set('ordinamentoColonna', ordinamentoColonna);
        if (attivo != null && attivo != undefined)
            params = params.set('visibilita', attivo.toString());
        const URL = this.apiUrl + 'getAllMessaggi' + '?' + params.toString();
        // const URL = this.apiUrl + 'getAllMessaggi' + '?' + params.toString() + '&visibilita=' + attivo;
        return this.http.get(URL);
    }
    updateMessaggio(idMessaggio, oggettoMessaggio, contenutoMessaggio) {
        const body = { idMessaggio, oggettoMessaggio, contenutoMessaggio };
        console.log('Request body:', body);
        const headers = { 'content-type': 'application/json' };
        const url = `${this.apiUrl}updateMessaggioAttivo`;
        return this.http.put(url, body, { headers });
    }
    insertMessaggio(oggettoMessaggio, contenutoMessaggio, matricolaUtente) {
        const body = { oggettoMessaggio, contenutoMessaggio, matricolaUtente };
        const headers = { 'content-type': 'application/json' };
        const url = `${this.apiUrl}insertMessaggio`;
        return this.http.post(url, body, { headers });
    }
    disattivaMessaggioAttivo(idMessaggio) {
        const headers = { 'content-type': 'application/json' };
        const url = `${this.apiUrl}disattivaMessaggio?idMessaggio=${idMessaggio}`;
        return this.http.get(url, { headers });
    }
    riattivaMessaggioDisattivato(idMessaggio) {
        const headers = { 'content-type': 'application/json' };
        const url = `${this.apiUrl}riattivaMessaggio?idMessaggio=${idMessaggio}`;
        return this.http.get(url, { headers });
    }
}
MessaggiService.ɵfac = function MessaggiService_Factory(t) { return new (t || MessaggiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
MessaggiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MessaggiService, factory: MessaggiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 49049:
/*!******************************************************!*\
  !*** ./src/app/shared/services/notifiche.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificheService": () => (/* binding */ NotificheService)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/signalr */ 77930);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class NotificheService {
    constructor() {
        this.notificationsCountSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.notificationsCount$ = this.notificationsCountSubject.asObservable();
        this.countSegnalazioni30DaysSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.count30Days$ = this.countSegnalazioni30DaysSubject.asObservable();
        this.countSegnalazioni30To45DaysSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.count30To45Days$ = this.countSegnalazioni30To45DaysSubject.asObservable();
        this.countSegnalazioni45To60DaysSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(0);
        this.count45To60Days$ = this.countSegnalazioni45To60DaysSubject.asObservable();
        this.baseUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'notification';
        this.hubConnection = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_2__.HubConnectionBuilder()
            .withUrl(this.baseUrl)
            .build();
        this.hubConnection.on('ReceiveNotificationCount', (count) => {
            this.notificationsCountSubject.next(count);
        });
        this.hubConnection.on('Receive30DaysCount', (count) => {
            this.countSegnalazioni30DaysSubject.next(count);
        });
        this.hubConnection.on('ReceiveFrom30To45Days', (count) => {
            this.countSegnalazioni30To45DaysSubject.next(count);
        });
        this.hubConnection.on('ReceiveFrom45To60Days', (count) => {
            this.countSegnalazioni45To60DaysSubject.next(count);
        });
        this.startConnection();
    }
    requestCounts() {
        this.requestNotificationCount();
        this.request30DaysCount();
        this.requestFrom30To45Days();
        this.requestFrom45To60Days();
    }
    startConnection() {
        this.hubConnection
            .start()
            .then(() => this.requestCounts())
            .catch(() => setTimeout(() => this.startConnection(), 5000));
        this.hubConnection.onclose(() => this.startConnection());
    }
    requestNotificationCount() {
        this.hubConnection.invoke('SendNotificationCount')
            .catch(err => console.error(err));
    }
    request30DaysCount() {
        this.hubConnection.invoke('SendSegnalazioniLess30Days')
            .catch(error => console.error(error));
    }
    requestFrom30To45Days() {
        this.hubConnection.invoke('SendSegnalazioniFrom30To45')
            .catch(error => console.error(error));
    }
    requestFrom45To60Days() {
        this.hubConnection.invoke('SendSegnalazioniFrom45To60')
            .catch(error => console.error(error));
    }
}
NotificheService.ɵfac = function NotificheService_Factory(t) { return new (t || NotificheService)(); };
NotificheService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: NotificheService, factory: NotificheService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 23350:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/paginator-i18n.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginatorI18nService": () => (/* binding */ PaginatorI18nService)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/paginator */ 26439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




class PaginatorI18nService {
    constructor(translate) {
        this.translate = translate;
        this.paginatorIntl = new _angular_material_paginator__WEBPACK_IMPORTED_MODULE_0__.MatPaginatorIntl();
        this.translate.onLangChange.subscribe((event) => this.getPaginatorIntl());
    }
    getPaginatorIntl() {
        this.paginatorIntl.itemsPerPageLabel = this.translate.instant('paginator.items_per_page_label');
        this.paginatorIntl.previousPageLabel = this.translate.instant('paginator.previous_page_label');
        this.paginatorIntl.nextPageLabel = this.translate.instant('paginator.next_page_label');
        this.paginatorIntl.firstPageLabel = this.translate.instant('paginator.first_page_label');
        this.paginatorIntl.lastPageLabel = this.translate.instant('paginator.last_page_label');
        this.paginatorIntl.getRangeLabel = this.getRangeLabel.bind(this);
        this.paginatorIntl.changes.next();
        return this.paginatorIntl;
    }
    getRangeLabel(page, pageSize, length) {
        if (length === 0 || pageSize === 0) {
            return this.translate.instant('paginator.range_page_label_1', { length });
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return this.translate.instant('paginator.range_page_label_2', {
            startIndex: startIndex + 1,
            endIndex,
            length,
        });
    }
}
PaginatorI18nService.ɵfac = function PaginatorI18nService_Factory(t) { return new (t || PaginatorI18nService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService)); };
PaginatorI18nService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PaginatorI18nService, factory: PaginatorI18nService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86872:
/*!****************************************************************!*\
  !*** ./src/app/shared/services/ruolo-comunicazione.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuoloComunicazioneService": () => (/* binding */ RuoloComunicazioneService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class RuoloComunicazioneService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'RuoliComunicazioni/';
    }
    /* inserisciRuoloComunicazione(ruoloComunic: RuoloComunicazione): Observable<RuoloComunicazione> {
      //console.log(ruoloComunic);
      const headers = {'content-type': 'application/json'};
      const body=JSON.stringify(ruoloComunic);
      return this.http.post<RuoloComunicazione>(environment.API_URI+'ruoli-comunicazione', body, {headers});
    }
  
    rimuoviRuoloComunicazione(id: number): Observable<RuoloComunicazione> {
      //console.log(ruoloComunic);
      const headers = {'content-type': 'application/json'};
      const body=JSON.stringify('');
      return this.http.post<RuoloComunicazione>(environment.API_URI+'ruoli-comunicazione/'+id as string + '/rimuovi', body, {headers});
    }
  
    deleteRuoliComunicazione(idComunicazione: number): Observable<number> {
      //console.log(ruoloComunic);
      alert('dentro delete');
      const headers = {'content-type': 'application/json'};
      // const stringa = '{\"idComunicazione\":' + idComunicazione as string +'}';
      // alert(stringa);
      const body=JSON.stringify(idComunicazione);
      alert(body);
      return this.http.post<number>(environment.API_URI+'ruoli-comunicazione/rimuovi-ruoli-comunicazione/', body, {headers});
    } */
    /* Nuove chiamate per il backend in C# */
    newInserisciRuoloComunicazione(ruoloCom) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(ruoloCom);
        return this.http.post(`${this.apiUrl}InsertRuoliComunicazioni`, body, { headers });
    }
    newGetRuoliByComunicazioneId(id) {
        return this.http.get(`${this.apiUrl}GetRuoliByComunicazioneId/${id}`);
    }
    newDeleteRuoliComunicazioni(ruoloCom) {
        const headers = { 'content-type': 'application/json' };
        const options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders(headers),
            body: ruoloCom // Passa l'array direttamente nel campo 'body'
        };
        return this.http.delete(`${this.apiUrl}EliminaRuoliComunicazione`, options);
    }
    newGetComunicazioniFilterByRuoloAndMatricola(ruolo, matricola) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('ruoli', ruolo)
            .set('matricola', matricola);
        return this.http.get(`${this.apiUrl}GetComunicazioniNonLetteByRuoloAndMatricola`, { params });
    }
}
RuoloComunicazioneService.ɵfac = function RuoloComunicazioneService_Factory(t) { return new (t || RuoloComunicazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
RuoloComunicazioneService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: RuoloComunicazioneService, factory: RuoloComunicazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 1303:
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StorageService": () => (/* binding */ StorageService),
/* harmony export */   "MemoryStorageService": () => (/* binding */ MemoryStorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class StorageService {
    setItem(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
    }
    getItem(key) {
        const value = sessionStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key) || '{}') || {};
    }
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
        return true;
    }
    has(key) {
        return !!localStorage.getItem(key);
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
class MemoryStorageService {
    constructor() {
        this.store = {};
    }
    get(key) {
        return JSON.parse(this.store[key] || '{}') || {};
    }
    set(key, value) {
        this.store[key] = JSON.stringify(value);
        return true;
    }
    has(key) {
        return !!this.store[key];
    }
    remove(key) {
        delete this.store[key];
    }
    clear() {
        this.store = {};
    }
}


/***/ }),

/***/ 8112:
/*!*********************************************************!*\
  !*** ./src/app/shared/services/swicht-ruolo.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwichtRuoloService": () => (/* binding */ SwichtRuoloService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SwichtRuoloService {
    constructor() {
        this.ruolo = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this._ruolo$ = this.ruolo.asObservable();
    }
    SwitchRuolo(isAmministrator) {
        this.ruolo.next(isAmministrator);
    }
}
SwichtRuoloService.ɵfac = function SwichtRuoloService_Factory(t) { return new (t || SwichtRuoloService)(); };
SwichtRuoloService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SwichtRuoloService, factory: SwichtRuoloService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 44466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 63806);
/* harmony import */ var _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../material-extensions.module */ 8372);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ 77114);
/* harmony import */ var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-formly/core */ 91531);
/* harmony import */ var _ngx_formly_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-formly/material */ 99147);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-progressbar */ 46829);
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-progressbar/http */ 13292);
/* harmony import */ var ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-progressbar/router */ 34092);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/breadcrumb/breadcrumb.component */ 41299);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 32802);
/* harmony import */ var _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/error-code/error-code.component */ 46947);
/* harmony import */ var _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/disable-control.directive */ 20034);
/* harmony import */ var _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/safe-url.pipe */ 72129);
/* harmony import */ var _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/to-observable.pipe */ 65279);
/* harmony import */ var _pipes_clear_url_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/clear-url.pipe */ 73346);
/* harmony import */ var _components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/alert-segnalazioni-tab/alert-segnalazioni-tab.component */ 32254);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);























const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
    _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
    _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
    _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
    _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule,
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
    _ngx_formly_core__WEBPACK_IMPORTED_MODULE_14__.FormlyModule,
    _ngx_formly_material__WEBPACK_IMPORTED_MODULE_15__.FormlyMaterialModule,
    ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__.NgProgressModule,
    ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_17__.NgProgressRouterModule,
    ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_18__.NgProgressHttpModule,
    ngx_permissions__WEBPACK_IMPORTED_MODULE_19__.NgxPermissionsModule,
    ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule,
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule,
];
const COMPONENTS = [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent, _components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_9__.AlertSegnalazioniTabComponent];
const COMPONENTS_DYNAMIC = [];
const DIRECTIVES = [_directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective];
const PIPES = [_pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe];
class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ imports: [[...MODULES], _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_14__.FormlyModule,
        _ngx_formly_material__WEBPACK_IMPORTED_MODULE_15__.FormlyMaterialModule,
        ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__.NgProgressModule,
        ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_17__.NgProgressRouterModule,
        ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_18__.NgProgressHttpModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_19__.NgxPermissionsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent, _components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_9__.AlertSegnalazioniTabComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe, _pipes_clear_url_pipe__WEBPACK_IMPORTED_MODULE_8__.ClearURLPipe, /*ConfirmDialogComponent,*/ _components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_9__.AlertSegnalazioniTabComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_14__.FormlyModule,
        _ngx_formly_material__WEBPACK_IMPORTED_MODULE_15__.FormlyMaterialModule,
        ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__.NgProgressModule,
        ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_17__.NgProgressRouterModule,
        ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_18__.NgProgressHttpModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_19__.NgxPermissionsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _material_extensions_module__WEBPACK_IMPORTED_MODULE_1__.MaterialExtensionsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__.FlexLayoutModule,
        _ngx_formly_core__WEBPACK_IMPORTED_MODULE_14__.FormlyModule,
        _ngx_formly_material__WEBPACK_IMPORTED_MODULE_15__.FormlyMaterialModule,
        ngx_progressbar__WEBPACK_IMPORTED_MODULE_16__.NgProgressModule,
        ngx_progressbar_router__WEBPACK_IMPORTED_MODULE_17__.NgProgressRouterModule,
        ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_18__.NgProgressHttpModule,
        ngx_permissions__WEBPACK_IMPORTED_MODULE_19__.NgxPermissionsModule,
        ngx_toastr__WEBPACK_IMPORTED_MODULE_20__.ToastrModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslateModule, _components_breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbComponent, _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _components_error_code_error_code_component__WEBPACK_IMPORTED_MODULE_4__.ErrorCodeComponent, _components_alert_segnalazioni_tab_alert_segnalazioni_tab_component__WEBPACK_IMPORTED_MODULE_9__.AlertSegnalazioniTabComponent, _directives_disable_control_directive__WEBPACK_IMPORTED_MODULE_5__.DisableControlDirective, _pipes_safe_url_pipe__WEBPACK_IMPORTED_MODULE_6__.SafeUrlPipe, _pipes_to_observable_pipe__WEBPACK_IMPORTED_MODULE_7__.ToObservablePipe] }); })();


/***/ }),

/***/ 26787:
/*!****************************************!*\
  !*** ./src/app/shared/utils/colors.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_COLORS": () => (/* binding */ MAT_COLORS)
/* harmony export */ });
const MAT_COLORS = {
    'red': {
        50: '#FFEBEE',
        100: '#FFCDD2',
        200: '#EF9A9A',
        300: '#E57373',
        400: '#EF5350',
        500: '#F44336',
        600: '#E53935',
        700: '#D32F2F',
        800: '#C62828',
        900: '#B71C1C',
        A100: '#FF8A80',
        A200: '#FF5252',
        A400: '#FF1744',
        A700: '#D50000',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'pink': {
        50: '#FCE4EC',
        100: '#F8BBD0',
        200: '#F48FB1',
        300: '#F06292',
        400: '#EC407A',
        500: '#E91E63',
        600: '#D81B60',
        700: '#C2185B',
        800: '#AD1457',
        900: '#880E4F',
        A100: '#FF80AB',
        A200: '#FF4081',
        A400: '#F50057',
        A700: '#C51162',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'purple': {
        50: '#F3E5F5',
        100: '#E1BEE7',
        200: '#CE93D8',
        300: '#BA68C8',
        400: '#AB47BC',
        500: '#9C27B0',
        600: '#8E24AA',
        700: '#7B1FA2',
        800: '#6A1B9A',
        900: '#4A148C',
        A100: '#EA80FC',
        A200: '#E040FB',
        A400: '#D500F9',
        A700: '#AA00FF',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'deep-purple': {
        50: '#EDE7F6',
        100: '#D1C4E9',
        200: '#B39DDB',
        300: '#9575CD',
        400: '#7E57C2',
        500: '#673AB7',
        600: '#5E35B1',
        700: '#512DA8',
        800: '#4527A0',
        900: '#311B92',
        A100: '#B388FF',
        A200: '#7C4DFF',
        A400: '#651FFF',
        A700: '#6200EA',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'indigo': {
        50: '#E8EAF6',
        100: '#C5CAE9',
        200: '#9FA8DA',
        300: '#7986CB',
        400: '#5C6BC0',
        500: '#3F51B5',
        600: '#3949AB',
        700: '#303F9F',
        800: '#283593',
        900: '#1A237E',
        A100: '#8C9EFF',
        A200: '#536DFE',
        A400: '#3D5AFE',
        A700: '#304FFE',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'blue': {
        50: '#E3F2FD',
        100: '#BBDEFB',
        200: '#90CAF9',
        300: '#64B5F6',
        400: '#42A5F5',
        500: '#2196F3',
        600: '#1E88E5',
        700: '#1976D2',
        800: '#1565C0',
        900: '#0D47A1',
        A100: '#82B1FF',
        A200: '#448AFF',
        A400: '#2979FF',
        A700: '#2962FF',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'light',
            A400: 'light',
            A700: 'light',
        },
    },
    'light-blue': {
        50: '#E1F5FE',
        100: '#B3E5FC',
        200: '#81D4FA',
        300: '#4FC3F7',
        400: '#29B6F6',
        500: '#03A9F4',
        600: '#039BE5',
        700: '#0288D1',
        800: '#0277BD',
        900: '#01579B',
        A100: '#80D8FF',
        A200: '#40C4FF',
        A400: '#00B0FF',
        A700: '#0091EA',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'light',
        },
    },
    'cyan': {
        50: '#E0F7FA',
        100: '#B2EBF2',
        200: '#80DEEA',
        300: '#4DD0E1',
        400: '#26C6DA',
        500: '#00BCD4',
        600: '#00ACC1',
        700: '#0097A7',
        800: '#00838F',
        900: '#006064',
        A100: '#84FFFF',
        A200: '#18FFFF',
        A400: '#00E5FF',
        A700: '#00B8D4',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'teal': {
        50: '#E0F2F1',
        100: '#B2DFDB',
        200: '#80CBC4',
        300: '#4DB6AC',
        400: '#26A69A',
        500: '#009688',
        600: '#00897B',
        700: '#00796B',
        800: '#00695C',
        900: '#004D40',
        A100: '#A7FFEB',
        A200: '#64FFDA',
        A400: '#1DE9B6',
        A700: '#00BFA5',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'green': {
        50: '#E8F5E9',
        100: '#C8E6C9',
        200: '#A5D6A7',
        300: '#81C784',
        400: '#66BB6A',
        500: '#4CAF50',
        600: '#43A047',
        700: '#388E3C',
        800: '#2E7D32',
        900: '#1B5E20',
        A100: '#B9F6CA',
        A200: '#69F0AE',
        A400: '#00E676',
        A700: '#00C853',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'light-green': {
        50: '#F1F8E9',
        100: '#DCEDC8',
        200: '#C5E1A5',
        300: '#AED581',
        400: '#9CCC65',
        500: '#8BC34A',
        600: '#7CB342',
        700: '#689F38',
        800: '#558B2F',
        900: '#33691E',
        A100: '#CCFF90',
        A200: '#B2FF59',
        A400: '#76FF03',
        A700: '#64DD17',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'lime': {
        50: '#F9FBE7',
        100: '#F0F4C3',
        200: '#E6EE9C',
        300: '#DCE775',
        400: '#D4E157',
        500: '#CDDC39',
        600: '#C0CA33',
        700: '#AFB42B',
        800: '#9E9D24',
        900: '#827717',
        A100: '#F4FF81',
        A200: '#EEFF41',
        A400: '#C6FF00',
        A700: '#AEEA00',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'yellow': {
        50: '#FFFDE7',
        100: '#FFF9C4',
        200: '#FFF59D',
        300: '#FFF176',
        400: '#FFEE58',
        500: '#FFEB3B',
        600: '#FDD835',
        700: '#FBC02D',
        800: '#F9A825',
        900: '#F57F17',
        A100: '#FFFF8D',
        A200: '#FFFF00',
        A400: '#FFEA00',
        A700: '#FFD600',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'dark',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'amber': {
        50: '#FFF8E1',
        100: '#FFECB3',
        200: '#FFE082',
        300: '#FFD54F',
        400: '#FFCA28',
        500: '#FFC107',
        600: '#FFB300',
        700: '#FFA000',
        800: '#FF8F00',
        900: '#FF6F00',
        A100: '#FFE57F',
        A200: '#FFD740',
        A400: '#FFC400',
        A700: '#FFAB00',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'dark',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'orange': {
        50: '#FFF3E0',
        100: '#FFE0B2',
        200: '#FFCC80',
        300: '#FFB74D',
        400: '#FFA726',
        500: '#FF9800',
        600: '#FB8C00',
        700: '#F57C00',
        800: '#EF6C00',
        900: '#E65100',
        A100: '#FFD180',
        A200: '#FFAB40',
        A400: '#FF9100',
        A700: '#FF6D00',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'deep-orange': {
        50: '#FBE9E7',
        100: '#FFCCBC',
        200: '#FFAB91',
        300: '#FF8A65',
        400: '#FF7043',
        500: '#FF5722',
        600: '#F4511E',
        700: '#E64A19',
        800: '#D84315',
        900: '#BF360C',
        A100: '#FF9E80',
        A200: '#FF6E40',
        A400: '#FF3D00',
        A700: '#DD2C00',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'dark',
            700: 'dark',
            800: 'dark',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'dark',
        },
    },
    'brown': {
        50: '#EFEBE9',
        100: '#D7CCC8',
        200: '#BCAAA4',
        300: '#A1887F',
        400: '#8D6E63',
        500: '#795548',
        600: '#6D4C41',
        700: '#5D4037',
        800: '#4E342E',
        900: '#3E2723',
        A100: '#D7CCC8',
        A200: '#BCAAA4',
        A400: '#8D6E63',
        A700: '#5D4037',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'light',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'light',
            A700: 'light',
        },
    },
    'gray': {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#FFFFFF',
        A200: ' #EEEEEE',
        A400: '#BDBDBD',
        A700: '#616161',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'dark',
            500: 'dark',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'dark',
            A700: 'light',
        },
    },
    'blue-gray': {
        50: '#ECEFF1',
        100: '#CFD8DC',
        200: '#B0BEC5',
        300: '#90A4AE',
        400: '#78909C',
        500: '#607D8B',
        600: '#546E7A',
        700: '#455A64',
        800: '#37474F',
        900: '#263238',
        A100: '#CFD8DC',
        A200: '#B0BEC5',
        A400: '#78909C',
        A700: '#455A64',
        contrast: {
            50: 'dark',
            100: 'dark',
            200: 'dark',
            300: 'dark',
            400: 'light',
            500: 'light',
            600: 'light',
            700: 'light',
            800: 'light',
            900: 'light',
            A100: 'dark',
            A200: 'dark',
            A400: 'light',
            A700: 'light',
        },
    },
};


/***/ }),

/***/ 56419:
/*!***************************************!*\
  !*** ./src/app/shared/utils/icons.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_ICONS": () => (/* binding */ MAT_ICONS)
/* harmony export */ });
const MAT_ICONS = {
    action: [
        '3d_rotation',
        'accessibility',
        'accessibility_new',
        'accessible',
        'accessible_forward',
        'account_balance',
        'account_balance_wallet',
        'account_box',
        'account_circle',
        'add_shopping_cart',
        'alarm',
        'alarm_add',
        'alarm_off',
        'alarm_on',
        'all_inbox',
        'all_out',
        'android',
        'announcement',
        'arrow_right_alt',
        'aspect_ratio',
        'assessment',
        'assignment',
        'assignment_ind',
        'assignment_late',
        'assignment_return',
        'assignment_returned',
        'assignment_turned_in',
        'autorenew',
        'backup',
        'book',
        'bookmark',
        'bookmark_border',
        'bookmarks',
        'bug_report',
        'build',
        'cached',
        'calendar_today',
        'calendar_view_day',
        'camera_enhance',
        'card_giftcard',
        'card_membership',
        'card_travel',
        'change_history',
        'check_circle',
        'check_circle_outline',
        'chrome_reader_mode',
        'class',
        'code',
        'commute',
        'compare_arrows',
        'contact_support',
        'copyright',
        'credit_card',
        'dashboard',
        'date_range',
        'delete',
        'delete_forever',
        'delete_outline',
        'description',
        'dns',
        'done',
        'done_all',
        'done_outline',
        'donut_large',
        'donut_small',
        'drag_indicator',
        'eject',
        'euro_symbol',
        'event',
        'event_seat',
        'exit_to_app',
        'explore',
        'explore_off',
        'extension',
        'face',
        'favorite',
        'favorite_border',
        'feedback',
        'find_in_page',
        'find_replace',
        'fingerprint',
        'flight_land',
        'flight_takeoff',
        'flip_to_back',
        'flip_to_front',
        'g_translate',
        'gavel',
        'get_app',
        'gif',
        'grade',
        'group_work',
        'help',
        'help_outline',
        'highlight_off',
        'history',
        'Home',
        'horizontal_split',
        'hourglass_empty',
        'hourglass_full',
        'http',
        'https',
        'important_devices',
        'info',
        'input',
        'invert_colors',
        'label',
        'label_important',
        'label_off',
        'language',
        'launch',
        'line_style',
        'line_weight',
        'list',
        'lock',
        'lock_open',
        'loyalty',
        'markunread_mailbox',
        'maximize',
        'minimize',
        'motorcycle',
        'note_add',
        'offline_bolt',
        'offline_pin',
        'opacity',
        'open_in_browser',
        'open_in_new',
        'open_with',
        'pageview',
        'pan_tool',
        'payment',
        'perm_camera_mic',
        'perm_contact_calendar',
        'perm_data_setting',
        'perm_device_information',
        'perm_identity',
        'perm_media',
        'perm_phone_msg',
        'perm_scan_wifi',
        'pets',
        'picture_in_picture',
        'picture_in_picture_alt',
        'play_for_work',
        'polymer',
        'power_settings_new',
        'pregnant_woman',
        'print',
        'query_builder',
        'question_answer',
        'receipt',
        'record_voice_over',
        'redeem',
        'remove_shopping_cart',
        'reorder',
        'report_problem',
        'restore',
        'restore_from_trash',
        'restore_page',
        'room',
        'rounded_corner',
        'rowing',
        'schedule',
        'search',
        'settings',
        'settings_applications',
        'settings_backup_restore',
        'settings_bluetooth',
        'settings_brightness',
        'settings_cell',
        'settings_ethernet',
        'settings_input_antenna',
        'settings_input_component',
        'settings_input_composite',
        'settings_input_hdmi',
        'settings_input_svideo',
        'settings_overscan',
        'settings_phone',
        'settings_power',
        'settings_remote',
        'settings_voice',
        'shop',
        'shop_two',
        'shopping_basket',
        'shopping_cart',
        'speaker_notes',
        'speaker_notes_off',
        'spellcheck',
        'star_rate',
        'stars',
        'store',
        'subject',
        'supervised_user_circle',
        'supervisor_account',
        'swap_horiz',
        'swap_horizontal_circle',
        'swap_vert',
        'swap_vertical_circle',
        'tab',
        'tab_unselected',
        'text_rotate_up',
        'text_rotate_vertical',
        'text_rotation_down',
        'text_rotation_none',
        'theaters',
        'thumb_down',
        'thumb_up',
        'thumbs_up_down',
        'timeline',
        'toc',
        'today',
        'toll',
        'touch_app',
        'track_changes',
        'translate',
        'trending_down',
        'trending_flat',
        'trending_up',
        'turned_in',
        'turned_in_not',
        'update',
        'verified_user',
        'vertical_split',
        'view_agenda',
        'view_array',
        'view_carousel',
        'view_column',
        'view_day',
        'view_headline',
        'view_list',
        'view_module',
        'view_quilt',
        'view_stream',
        'view_week',
        'visibility',
        'visibility_off',
        'voice_over_off',
        'watch_later',
        'work',
        'work_off',
        'work_outline',
        'youtube_searched_for',
        'zoom_in',
        'zoom_out',
    ],
    alert: ['add_alert', 'error', 'error_outline', 'notification_important', 'warning'],
    av: [
        '4k',
        'add_to_queue',
        'airplay',
        'album',
        'art_track',
        'av_timer',
        'branding_watermark',
        'call_to_action',
        'closed_caption',
        'control_camera',
        'equalizer',
        'explicit',
        'fast_forward',
        'fast_rewind',
        'featured_play_list',
        'featured_video',
        'fiber_dvr',
        'fiber_manual_record',
        'fiber_new',
        'fiber_pin',
        'fiber_smart_record',
        'forward_10',
        'forward_30',
        'forward_5',
        'games',
        'hd',
        'hearing',
        'high_quality',
        'library_add',
        'library_books',
        'library_music',
        'loop',
        'mic',
        'mic_none',
        'mic_off',
        'missed_video_call',
        'movie',
        'music_video',
        'new_releases',
        'not_interested',
        'note',
        'pause',
        'pause_circle_filled',
        'pause_circle_outline',
        'play_arrow',
        'play_circle_filled',
        'play_circle_filled_white',
        'play_circle_outline',
        'playlist_add',
        'playlist_add_check',
        'playlist_play',
        'queue',
        'queue_music',
        'queue_play_next',
        'radio',
        'recent_actors',
        'remove_from_queue',
        'repeat',
        'repeat_one',
        'replay',
        'replay_10',
        'replay_30',
        'replay_5',
        'shuffle',
        'skip_next',
        'skip_previous',
        'slow_motion_video',
        'snooze',
        'sort_by_alpha',
        'stop',
        'subscriptions',
        'subtitles',
        'surround_sound',
        'video_call',
        'video_label',
        'video_library',
        'videocam',
        'videocam_off',
        'volume_down',
        'volume_mute',
        'volume_off',
        'volume_up',
        'web',
        'web_asset',
    ],
    communication: [
        'alternate_email',
        'business',
        'call',
        'call_end',
        'call_made',
        'call_merge',
        'call_missed',
        'call_missed_outgoing',
        'call_received',
        'call_split',
        'cancel_presentation',
        'cell_wifi',
        'chat',
        'chat_bubble',
        'chat_bubble_outline',
        'clear_all',
        'comment',
        'contact_mail',
        'contact_phone',
        'contacts',
        'desktop_access_disabled',
        'dialer_sip',
        'dialpad',
        'domain_disabled',
        'duo',
        'email',
        'forum',
        'import_contacts',
        'import_export',
        'invert_colors_off',
        'list_alt',
        'live_help',
        'location_off',
        'location_on',
        'mail_outline',
        'message',
        'mobile_screen_share',
        'no_sim',
        'pause_presentation',
        'person_add_disabled',
        'phone',
        'phonelink_erase',
        'phonelink_lock',
        'phonelink_ring',
        'phonelink_setup',
        'portable_wifi_off',
        'present_to_all',
        'print_disabled',
        'ring_volume',
        'rss_feed',
        'screen_share',
        'sentiment_satisfied_alt',
        'speaker_phone',
        'stay_current_landscape',
        'stay_current_portrait',
        'stay_primary_landscape',
        'stay_primary_portrait',
        'stop_screen_share',
        'swap_calls',
        'textsms',
        'unsubscribe',
        'voicemail',
        'vpn_key',
    ],
    content: [
        'add',
        'add_box',
        'add_circle',
        'add_circle_outline',
        'archive',
        'backspace',
        'ballot',
        'block',
        'clear',
        'create',
        'delete_sweep',
        'drafts',
        'file_copy',
        'filter_list',
        'flag',
        'font_download',
        'forward',
        'gesture',
        'how_to_reg',
        'how_to_vote',
        'inbox',
        'link',
        'link_off',
        'low_priority',
        'mail',
        'markunread',
        'move_to_inbox',
        'next_week',
        'outlined_flag',
        'redo',
        'remove',
        'remove_circle',
        'remove_circle_outline',
        'reply',
        'reply_all',
        'report',
        'report_off',
        'save',
        'save_alt',
        'select_all',
        'send',
        'sort',
        'text_format',
        'unarchive',
        'undo',
        'waves',
        'weekend',
        'where_to_vote',
    ],
    device: [
        'access_alarm',
        'access_alarms',
        'access_time',
        'add_alarm',
        'add_to_home_screen',
        'airplanemode_active',
        'airplanemode_inactive',
        // 'battery_20',
        // 'battery_30',
        // 'battery_50',
        // 'battery_60',
        // 'battery_80',
        // 'battery_90',
        'battery_alert',
        // 'battery_charging_20',
        // 'battery_charging_30',
        // 'battery_charging_50',
        // 'battery_charging_60',
        // 'battery_charging_80',
        // 'battery_charging_90',
        'battery_charging_full',
        'battery_full',
        'battery_std',
        'battery_unknown',
        'bluetooth',
        'bluetooth_connected',
        'bluetooth_disabled',
        'bluetooth_searching',
        'brightness_auto',
        'brightness_high',
        'brightness_low',
        'brightness_medium',
        'data_usage',
        'developer_mode',
        'devices',
        'dvr',
        'gps_fixed',
        'gps_not_fixed',
        'gps_off',
        'graphic_eq',
        'location_disabled',
        'location_searching',
        'mobile_friendly',
        'mobile_off',
        // 'network_cell',
        // 'network_wifi',
        'nfc',
        'screen_lock_landscape',
        'screen_lock_portrait',
        'screen_lock_rotation',
        'screen_rotation',
        'sd_storage',
        'settings_system_daydream',
        // 'signal_cellular_0_bar',
        // 'signal_cellular_1_bar',
        // 'signal_cellular_2_bar',
        // 'signal_cellular_3_bar',
        // 'signal_cellular_4_bar',
        'signal_cellular_alt',
        // 'signal_cellular_connected_no_internet_0_bar',
        // 'signal_cellular_connected_no_internet_1_bar',
        // 'signal_cellular_connected_no_internet_2_bar',
        // 'signal_cellular_connected_no_internet_3_bar',
        'signal_cellular_connected_no_internet_4_bar',
        'signal_cellular_no_sim',
        'signal_cellular_null',
        'signal_cellular_off',
        // 'signal_wifi_0_bar',
        // 'signal_wifi_1_bar',
        // 'signal_wifi_1_bar_lock',
        // 'signal_wifi_2_bar',
        // 'signal_wifi_2_bar_lock',
        // 'signal_wifi_3_bar',
        // 'signal_wifi_3_bar_lock',
        'signal_wifi_4_bar',
        'signal_wifi_4_bar_lock',
        'signal_wifi_off',
        'storage',
        'usb',
        'wallpaper',
        'widgets',
        'wifi_lock',
        'wifi_tethering',
    ],
    editor: [
        'add_comment',
        'attach_file',
        'attach_money',
        'bar_chart',
        'border_all',
        'border_bottom',
        'border_clear',
        'border_color',
        'border_horizontal',
        'border_inner',
        'border_left',
        'border_outer',
        'border_right',
        'border_style',
        'border_top',
        'border_vertical',
        'bubble_chart',
        'drag_handle',
        'format_align_center',
        'format_align_justify',
        'format_align_left',
        'format_align_right',
        'format_bold',
        'format_clear',
        'format_color_fill',
        'format_color_reset',
        'format_color_text',
        'format_indent_decrease',
        'format_indent_increase',
        'format_italic',
        'format_line_spacing',
        'format_list_bulleted',
        'format_list_numbered',
        'format_list_numbered_rtl',
        'format_paint',
        'format_quote',
        'format_shapes',
        'format_size',
        'format_strikethrough',
        'format_textdirection_l_to_r',
        'format_textdirection_r_to_l',
        'format_underlined',
        'functions',
        'highlight',
        'insert_chart',
        'insert_chart_outlined',
        'insert_comment',
        'insert_drive_file',
        'insert_emoticon',
        'insert_invitation',
        'insert_link',
        'insert_photo',
        'linear_scale',
        'merge_type',
        'mode_comment',
        'monetization_on',
        'money_off',
        'multiline_chart',
        'notes',
        'pie_chart',
        'publish',
        'scatter_plot',
        'score',
        'short_text',
        'show_chart',
        'space_bar',
        'strikethrough_s',
        'table_chart',
        'text_fields',
        'title',
        'vertical_align_bottom',
        'vertical_align_center',
        'vertical_align_top',
        'wrap_text',
    ],
    file: [
        'attachment',
        'cloud',
        'cloud_circle',
        'cloud_done',
        'cloud_download',
        'cloud_off',
        'cloud_queue',
        'cloud_upload',
        'create_new_folder',
        'folder',
        'folder_open',
        'folder_shared',
    ],
    hardware: [
        'cast',
        'cast_connected',
        'cast_for_education',
        'computer',
        'desktop_mac',
        'desktop_windows',
        'developer_board',
        'device_hub',
        'device_unknown',
        'devices_other',
        'dock',
        'gamepad',
        'headset',
        'headset_mic',
        'keyboard',
        'keyboard_arrow_down',
        'keyboard_arrow_left',
        'keyboard_arrow_right',
        'keyboard_arrow_up',
        'keyboard_backspace',
        'keyboard_capslock',
        'keyboard_hide',
        'keyboard_return',
        'keyboard_tab',
        'keyboard_voice',
        'laptop',
        'laptop_chromebook',
        'laptop_mac',
        'laptop_windows',
        'memory',
        'mouse',
        'phone_android',
        'phone_iphone',
        'phonelink',
        'phonelink_off',
        'power_input',
        'router',
        'scanner',
        'security',
        'sim_card',
        'smartphone',
        'speaker',
        'speaker_group',
        'tablet',
        'tablet_android',
        'tablet_mac',
        'toys',
        'tv',
        'videogame_asset',
        'watch',
    ],
    image: [
        'add_a_photo',
        'add_photo_alternate',
        'add_to_photos',
        'adjust',
        'assistant',
        'assistant_photo',
        'audiotrack',
        'blur_circular',
        'blur_linear',
        'blur_off',
        'blur_on',
        'brightness_1',
        'brightness_2',
        'brightness_3',
        'brightness_4',
        'brightness_5',
        'brightness_6',
        'brightness_7',
        'broken_image',
        'brush',
        'burst_mode',
        'camera',
        'camera_alt',
        'camera_front',
        'camera_rear',
        'camera_roll',
        'center_focus_strong',
        'center_focus_weak',
        'collections',
        'collections_bookmark',
        'color_lens',
        'colorize',
        'compare',
        'control_point',
        'control_point_duplicate',
        'crop',
        'crop_16_9',
        'crop_3_2',
        'crop_5_4',
        'crop_7_5',
        'crop_din',
        'crop_free',
        'crop_landscape',
        'crop_original',
        'crop_portrait',
        'crop_rotate',
        'crop_square',
        'dehaze',
        'details',
        'edit',
        'exposure',
        'exposure_neg_1',
        'exposure_neg_2',
        'exposure_plus_1',
        'exposure_plus_2',
        'exposure_zero',
        'filter',
        'filter_1',
        'filter_2',
        'filter_3',
        'filter_4',
        'filter_5',
        'filter_6',
        'filter_7',
        'filter_8',
        'filter_9',
        'filter_9_plus',
        'filter_b_and_w',
        'filter_center_focus',
        'filter_drama',
        'filter_frames',
        'filter_hdr',
        'filter_none',
        'filter_tilt_shift',
        'filter_vintage',
        'flare',
        'flash_auto',
        'flash_off',
        'flash_on',
        'flip',
        'gradient',
        'grain',
        'grid_off',
        'grid_on',
        'hdr_off',
        'hdr_on',
        'hdr_strong',
        'hdr_weak',
        'healing',
        'image',
        'image_aspect_ratio',
        'image_search',
        'iso',
        'landscape',
        'leak_add',
        'leak_remove',
        'lens',
        'linked_camera',
        'looks',
        'looks_3',
        'looks_4',
        'looks_5',
        'looks_6',
        'looks_one',
        'looks_two',
        'loupe',
        'monochrome_photos',
        'movie_creation',
        'movie_filter',
        'music_note',
        'music_off',
        'nature',
        'nature_people',
        'navigate_before',
        'navigate_next',
        'palette',
        'panorama',
        'panorama_fish_eye',
        'panorama_horizontal',
        'panorama_vertical',
        'panorama_wide_angle',
        'photo',
        'photo_album',
        'photo_camera',
        'photo_filter',
        'photo_library',
        'photo_size_select_actual',
        'photo_size_select_large',
        'photo_size_select_small',
        'picture_as_pdf',
        'portrait',
        'remove_red_eye',
        'rotate_90_degrees_ccw',
        'rotate_left',
        'rotate_right',
        'shutter_speed',
        'slideshow',
        'straighten',
        'style',
        'switch_camera',
        'switch_video',
        'tag_faces',
        'texture',
        'timelapse',
        'timer',
        'timer_10',
        'timer_3',
        'timer_off',
        'tonality',
        'transform',
        'tune',
        'view_comfy',
        'view_compact',
        'vignette',
        'wb_auto',
        'wb_cloudy',
        'wb_incandescent',
        'wb_iridescent',
        'wb_sunny',
    ],
    maps: [
        '360',
        'add_location',
        'atm',
        'beenhere',
        'category',
        'compass_calibration',
        'departure_board',
        'directions',
        'directions_bike',
        'directions_boat',
        'directions_bus',
        'directions_car',
        'directions_railway',
        'directions_run',
        'directions_subway',
        'directions_transit',
        'directions_walk',
        'edit_attributes',
        'edit_location',
        'ev_station',
        'fastfood',
        'flight',
        'hotel',
        'layers',
        'layers_clear',
        'local_activity',
        'local_airport',
        'local_atm',
        'local_bar',
        'local_cafe',
        'local_car_wash',
        'local_convenience_store',
        'local_dining',
        'local_drink',
        'local_florist',
        'local_gas_station',
        'local_grocery_store',
        'local_hospital',
        'local_hotel',
        'local_laundry_service',
        'local_library',
        'local_mall',
        'local_movies',
        'local_offer',
        'local_parking',
        'local_pharmacy',
        'local_phone',
        'local_pizza',
        'local_play',
        'local_post_office',
        'local_printshop',
        'local_see',
        'local_shipping',
        'local_taxi',
        'map',
        'money',
        'my_location',
        'navigation',
        'near_me',
        'not_listed_location',
        'person_pin',
        'person_pin_circle',
        'pin_drop',
        'place',
        'rate_review',
        'restaurant',
        'restaurant_menu',
        'satellite',
        'store_mall_directory',
        'streetview',
        'subway',
        'terrain',
        'traffic',
        'train',
        'tram',
        'transfer_within_a_station',
        'transit_enterexit',
        'trip_origin',
        'zoom_out_map',
    ],
    navigation: [
        'apps',
        'arrow_back',
        'arrow_back_ios',
        'arrow_downward',
        'arrow_drop_down',
        'arrow_drop_down_circle',
        'arrow_drop_up',
        'arrow_forward',
        'arrow_forward_ios',
        'arrow_left',
        'arrow_right',
        'arrow_upward',
        'cancel',
        'check',
        'chevron_left',
        'chevron_right',
        'close',
        'expand_less',
        'expand_more',
        'first_page',
        'fullscreen',
        'fullscreen_exit',
        'last_page',
        'menu',
        'more_horiz',
        'more_vert',
        'refresh',
        'subdirectory_arrow_left',
        'subdirectory_arrow_right',
        'unfold_less',
        'unfold_more',
    ],
    notification: [
        'adb',
        'airline_seat_flat',
        'airline_seat_flat_angled',
        'airline_seat_individual_suite',
        'airline_seat_legroom_extra',
        'airline_seat_legroom_normal',
        'airline_seat_legroom_reduced',
        'airline_seat_recline_extra',
        'airline_seat_recline_normal',
        'bluetooth_audio',
        'confirmation_number',
        'disc_full',
        'drive_eta',
        'enhanced_encryption',
        'event_available',
        'event_busy',
        'event_note',
        'folder_special',
        'live_tv',
        'mms',
        'more',
        'network_check',
        'network_locked',
        'no_encryption',
        'ondemand_video',
        'personal_video',
        'phone_bluetooth_speaker',
        'phone_callback',
        'phone_forwarded',
        'phone_in_talk',
        'phone_locked',
        'phone_missed',
        'phone_paused',
        'power',
        'power_off',
        'priority_high',
        'sd_card',
        'sms',
        'sms_failed',
        'sync',
        'sync_disabled',
        'sync_problem',
        'system_update',
        'tap_and_play',
        'time_to_leave',
        'tv_off',
        'vibration',
        'voice_chat',
        'vpn_lock',
        'wc',
        'wifi',
        'wifi_off',
    ],
    places: [
        'ac_unit',
        'airport_shuttle',
        'all_inclusive',
        'beach_access',
        'business_center',
        'casino',
        'child_care',
        'child_friendly',
        'fitness_center',
        'free_breakfast',
        'golf_course',
        'hot_tub',
        'kitchen',
        'meeting_room',
        'no_meeting_room',
        'pool',
        'room_service',
        'rv_hookup',
        'smoke_free',
        'smoking_rooms',
        'spa',
    ],
    social: [
        'cake',
        'domain',
        'group',
        'group_add',
        'location_city',
        'mood',
        'mood_bad',
        'notifications',
        'notifications_active',
        'notifications_none',
        'notifications_off',
        'notifications_paused',
        'pages',
        'party_mode',
        'people',
        'people_outline',
        'person',
        'person_add',
        'person_outline',
        'plus_one',
        'poll',
        'public',
        'school',
        'sentiment_dissatisfied',
        'sentiment_satisfied',
        'sentiment_very_dissatisfied',
        'sentiment_very_satisfied',
        'share',
        'thumb_down_alt',
        'thumb_up_alt',
        'whatshot',
    ],
    toggle: [
        'check_box',
        'check_box_outline_blank',
        'indeterminate_check_box',
        'radio_button_checked',
        'radio_button_unchecked',
        'star',
        'star_border',
        'star_half',
        'toggle_off',
        'toggle_on',
    ],
};


/***/ }),

/***/ 36200:
/*!**************************************************************!*\
  !*** ./src/app/theme/admin-layout/admin-layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminLayoutComponent": () => (/* binding */ AdminLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/bidi */ 51588);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _theme_sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar-notice/sidebar-notice.component */ 15283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ 54244);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-progressbar */ 46829);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 9295);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ 25868);

























const _c0 = ["sidenav"];
const _c1 = ["content"];
const _c2 = function (a0) { return { "matero-sidenav-collapsed": a0 }; };
function AdminLayoutComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "ng-progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-sidenav-container", 2)(4, "mat-sidenav", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openedChange", function AdminLayoutComponent_ng_container_0_Template_mat_sidenav_openedChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.sidenavOpenedChange($event); })("closedStart", function AdminLayoutComponent_ng_container_0_Template_mat_sidenav_closedStart_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r7.sidenavCloseStart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-sidebar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleCollapsed", function AdminLayoutComponent_ng_container_0_Template_app_sidebar_toggleCollapsed_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r8.toggleCollapsed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-sidenav", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("openedChange", function AdminLayoutComponent_ng_container_0_Template_mat_sidenav_openedChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r9.sidenaNoticeOpenedChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "app-sidebar-notice");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "mat-sidenav-content", 8, 9)(12, "app-header", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("toggleSidenav", function AdminLayoutComponent_ng_container_0_Template_app_header_toggleSidenav_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return _r2.toggle(); })("toggleSidenavNotice", function AdminLayoutComponent_ng_container_0_Template_app_header_toggleSidenavNotice_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return _r3.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c2, ctx_r0.options.sidenavCollapsed));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", ctx_r0.isOver ? "over" : "side")("opened", ctx_r0.options.sidenavOpened && !ctx_r0.isOver);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showToggle", !ctx_r0.isOver)("toggleChecked", !!ctx_r0.options.sidenavCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("showToggle", !ctx_r0.options.sidenavCollapsed);
} }
function AdminLayoutComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
const MOBILE_MEDIAQUERY = 'screen and (max-width: 599px)';
const TABLET_MEDIAQUERY = 'screen and (min-width: 600px) and (max-width: 959px)';
const MONITOR_MEDIAQUERY = 'screen and (min-width: 960px)';
class AdminLayoutComponent {
    constructor(router, mediaMatcher, breakpointObserver, overlay, element, settings, document, dir) {
        this.router = router;
        this.mediaMatcher = mediaMatcher;
        this.breakpointObserver = breakpointObserver;
        this.overlay = overlay;
        this.element = element;
        this.settings = settings;
        this.document = document;
        this.dir = dir;
        this.options = this.settings.getOptions();
        this.isUserLoaded = false;
        this.isMobileScreen = false;
        this.isContentWidthFixed = true;
        this.isCollapsedWidthFixed = false;
        this.dir.value = this.options.dir;
        this.document.body.dir = this.dir.value;
        this.layoutChangesSubscription = this.breakpointObserver
            .observe([MOBILE_MEDIAQUERY, TABLET_MEDIAQUERY, MONITOR_MEDIAQUERY])
            .subscribe(state => {
            // SidenavOpened must be reset true when layout changes
            this.options.sidenavOpened = true;
            this.isMobileScreen = state.breakpoints[MOBILE_MEDIAQUERY];
            this.options.sidenavCollapsed = state.breakpoints[TABLET_MEDIAQUERY];
            this.isContentWidthFixed = state.breakpoints[MONITOR_MEDIAQUERY];
        });
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(e => {
            if (this.isOver) {
                this.sidenav.close();
            }
            // this.content.scrollTo({ top: 0 });
        });
        // Check whether the browser support `prefers-color-scheme`
        if (this.mediaMatcher.matchMedia('(prefers-color-scheme)').media !== 'not all') {
            const isSystemDark = this.mediaMatcher.matchMedia('(prefers-color-scheme: dark)').matches;
            // Set theme to dark if `prefers-color-scheme` is dark. Otherwise, set it to light.
            this.options.theme = isSystemDark ? 'dark' : 'light';
        }
        else {
            // If the browser does not support `prefers-color-scheme`, set the default to dark.
            this.options.theme = 'light';
        }
        // Initialize project theme with options
        this.receiveOptions(this.options);
    }
    get isOver() {
        return this.isMobileScreen;
    }
    get contentWidthFix() {
        return (this.isContentWidthFixed &&
            this.options.navPos === 'side' &&
            this.options.sidenavOpened &&
            !this.isOver);
    }
    get collapsedWidthFix() {
        return (this.isCollapsedWidthFixed &&
            (this.options.navPos === 'top' || (this.options.sidenavOpened && this.isOver)));
    }
    ngOnDestroy() {
        this.layoutChangesSubscription.unsubscribe();
    }
    toggleCollapsed() {
        this.isContentWidthFixed = false;
        this.options.sidenavCollapsed = !this.options.sidenavCollapsed;
        this.resetCollapsedState();
    }
    // TODO: Trigger when transition end
    resetCollapsedState(timer = 400) {
        setTimeout(() => this.settings.setOptions(this.options), timer);
    }
    sidenavCloseStart() {
        this.isContentWidthFixed = false;
    }
    sidenavOpenedChange(isOpened) {
        this.isCollapsedWidthFixed = !this.isOver;
        this.options.sidenavOpened = isOpened;
        this.settings.setOptions(this.options);
    }
    sidenaNoticeOpenedChange(isOpened) {
        if (isOpened) {
            this.sidebarNoticeComponent.filtroMessaggi();
            this.sidebarNoticeComponent.filtroMessaggiNonLetti();
        }
    }
    // Demo purposes only
    receiveOptions(options) {
        this.options = options;
        this.toggleDarkTheme(options);
        this.toggleDirection(options);
    }
    toggleDarkTheme(options) {
        if (options.theme === 'dark') {
            this.element.nativeElement.classList.add('theme-dark');
            this.overlay.getContainerElement().classList.add('theme-dark');
        }
        else {
            this.element.nativeElement.classList.remove('theme-dark');
            this.overlay.getContainerElement().classList.remove('theme-dark');
        }
    }
    toggleDirection(options) {
        this.dir.value = options.dir;
        this.document.body.dir = this.dir.value;
    }
    ngOnInit() {
        // console.log('isUserLoad: ', this.isUserLoaded)
        const idmUser = sessionStorage.getItem('allroles');
        // console.log('idmUser: ', idmUser)
        if (idmUser && idmUser != '""') {
            this.isUserLoaded = true;
        }
        else {
            this.router.navigate(['/']);
            // this.router.navigate(['/local-login'])
        }
    }
}
AdminLayoutComponent.ɵfac = function AdminLayoutComponent_Factory(t) { return new (t || AdminLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__.OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT, 8), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Directionality)); };
AdminLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AdminLayoutComponent, selectors: [["app-admin-layout"]], viewQuery: function AdminLayoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_theme_sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_2__.SidebarNoticeComponent, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidebarNoticeComponent = _t.first);
    } }, hostVars: 4, hostBindings: function AdminLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("matero-content-width-fix", ctx.contentWidthFix)("matero-sidenav-collapsed-fix", ctx.collapsedWidthFix);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["dir", "ltr", 1, "matero-container-wrap", "matero-navbar-side", "matero-header-fixed", 3, "ngClass"], ["autosize", "", "autoFocus", "", 1, "matero-container"], [1, "matero-sidenav", 3, "mode", "opened", "openedChange", "closedStart"], ["sidenav", ""], [3, "showToggle", "toggleChecked", "toggleCollapsed"], ["position", "end", "mode", "over", 3, "openedChange"], ["sidenavNotice", ""], [1, "matero-content-wrap"], ["content", ""], [3, "showToggle", "toggleSidenav", "toggleSidenavNotice"], [1, "matero-content"]], template: function AdminLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AdminLayoutComponent_ng_container_0_Template, 15, 8, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AdminLayoutComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isUserLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isUserLoaded);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__.Dir, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__.DefaultClassDirective, ngx_progressbar__WEBPACK_IMPORTED_MODULE_13__.NgProgressComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenav, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _theme_sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_2__.SidebarNoticeComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavContent, _header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet], styles: [".matero-container-wrap,\n.matero-container {\n  height: 100%;\n}\n\n.matero-content {\n  position: relative;\n  padding: 20px;\n}\n\n.matero-sidenav {\n  position: absolute;\n  overflow-x: hidden;\n  transition: width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  /*background: linear-gradient(0deg,\n    rgba(33, 150, 243, 0.7), rgba(33, 150, 243, 0.7)),\n    url(../../../assets/images/palazzo-dellinps-direzione-generale.jpg);*/\n  background: linear-gradient(0deg, rgba(47, 109, 213, 0.7), rgba(47, 109, 213, 0.7)), url('assets/images/palazzo-dellinps-direzione-generale.jpg');\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.matero-sidenav.mat-drawer-side {\n  border-width: 0;\n}\n\n[dir=rtl] .matero-sidenav.mat-drawer-side {\n  border-width: 0;\n}\n\n.matero-header-above .matero-container {\n  height: calc(100% - 64px) !important;\n}\n\n.matero-header-above .matero-sidebar-main {\n  height: 100% !important;\n}\n\n.matero-sidenav-collapsed .matero-sidenav,\n.matero-sidenav-collapsed-fix .matero-sidenav {\n  width: 70px;\n}\n\n.matero-sidenav-collapsed .matero-sidenav .menu-name,\n.matero-sidenav-collapsed .matero-sidenav .menu-label,\n.matero-sidenav-collapsed .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-icons {\n  opacity: 0;\n}\n\n.matero-sidenav-collapsed .matero-sidenav .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav .matero-user-panel-avatar {\n  transform: scale(0.5);\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover {\n  width: 240px;\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-icons,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-label,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-badge,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .menu-caret,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-name,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-email,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-icons {\n  opacity: 1;\n}\n\n.matero-sidenav-collapsed .matero-sidenav:hover .matero-user-panel-avatar,\n.matero-sidenav-collapsed-fix .matero-sidenav:hover .matero-user-panel-avatar {\n  transform: scale(1);\n}\n\n.matero-sidenav-collapsed .matero-content-wrap {\n  margin-left: 70px !important;\n}\n\n[dir=rtl] .matero-sidenav-collapsed .matero-content-wrap {\n  margin-right: 70px !important;\n  margin-left: auto !important;\n}\n\n.matero-sidenav-collapsed[dir=rtl] .matero-content-wrap {\n  margin-right: 70px !important;\n  margin-left: auto !important;\n}\n\n.matero-navbar-top .matero-topmenu {\n  top: 0;\n}\n\n.matero-navbar-top .matero-branding {\n  margin-left: 16px;\n}\n\n[dir=rtl] .matero-navbar-top .matero-branding {\n  margin-right: 16px;\n  margin-left: auto;\n}\n\n.matero-header-fixed .matero-header {\n  position: sticky;\n  top: 0;\n}\n\n.matero-header-fixed .matero-topmenu {\n  top: 64px;\n}\n\n@media (max-width: 599px) {\n  .matero-header-fixed .matero-topmenu {\n    top: 56px;\n  }\n}\n\n.matero-header-fixed.matero-navbar-side .matero-toolbar {\n  border-bottom: unset;\n  background-color: white;\n}\n\n.matero-content-width-fix .matero-content-wrap {\n  margin-left: 240px !important;\n}\n\n[dir=rtl] .matero-content-width-fix .matero-content-wrap {\n  margin-right: 240px !important;\n  margin-left: auto !important;\n}\n\n.matero-header-white .matero-toolbar,\n.matero-header-white .matero-topmenu {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFx0aGVtZVxcYWRtaW4tbGF5b3V0XFxhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCIuLlxcc3R5bGVcXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxub2RlX21vZHVsZXNcXEBhbmd1bGFyXFxtYXRlcmlhbFxcY29yZVxcc3R5bGVcXF9lbGV2YXRpb24uc2NzcyIsIi4uXFxzdHlsZVxcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7O0VBRUUsWUFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxhRVRPO0FES1Q7O0FET0E7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0RBQUE7RUFFQTs7eUVBQUE7RUFHQSxpSkFBQTtFQUlBLHNCQUFBO0VBQ0EsMkJBQUE7RUdpSUEseUhBQUE7QUZ4SUY7O0FEV0U7RUFDRSxlQUFBO0FDVEo7O0FEV0k7RUFDRSxlQUFBO0FDVE47O0FEZ0JFO0VBQ0Usb0NBQUE7QUNiSjs7QURnQkU7RUFDRSx1QkFBQTtBQ2RKOztBRHFCRTs7RUFDRSxXRWpEc0I7QURnQzFCOztBRG1CSTs7Ozs7Ozs7Ozs7Ozs7RUFPRSxVQUFBO0FDVk47O0FEYUk7O0VBQ0UscUJBQUE7QUNWTjs7QURhSTs7RUFDRSxZRW5FVTtBRHlEaEI7O0FEWU07Ozs7Ozs7Ozs7Ozs7O0VBT0UsVUFBQTtBQ0hSOztBRE1NOztFQUNFLG1CQUFBO0FDSFI7O0FEV0U7RUFDRSw0QkFBQTtBQ1JKOztBRFVJO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ1JOOztBRFlFO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQ1ZKOztBRGdCRTtFQUNFLE1BQUE7QUNiSjs7QURnQkU7RUFDRSxpQkFBQTtBQ2RKOztBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNkTjs7QURxQkU7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUNsQko7O0FEcUJFO0VBQ0UsU0UxSHFCO0FEdUd6Qjs7QUd0Rkk7RUo0R0U7SUFDRSxTRTdIZ0I7RUQwR3RCO0FBQ0Y7O0FEd0JJO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ3RCTjs7QUQ4QkU7RUFDRSw2QkFBQTtBQzNCSjs7QUQ2Qkk7RUFDRSw4QkFBQTtFQUNBLDRCQUFBO0FDM0JOOztBRGtDRTs7RUFFRSx1QkFBQTtBQy9CSiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AdXNlICcuLi9zdHlsZS92YXJpYWJsZXMnO1xyXG5AdXNlICcuLi9zdHlsZS90cmFuc2l0aW9ucyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JyZWFrcG9pbnRzJztcclxuXHJcbi5tYXRlcm8tY29udGFpbmVyLXdyYXAsXHJcbi5tYXRlcm8tY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcm8tY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IHZhcmlhYmxlcy4kZ3V0dGVyO1xyXG59XHJcblxyXG4ubWF0ZXJvLXNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuc3dpZnQtZWFzZS1vdXQod2lkdGgpOyAvLyBPbmx5IHNldCB3aWR0aCBwcm9wZXJ0eVxyXG5cclxuICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLFxyXG4gICAgcmdiYSgzMywgMTUwLCAyNDMsIDAuNyksIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjcpKSxcclxuICAgIHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3BhbGF6em8tZGVsbGlucHMtZGlyZXppb25lLWdlbmVyYWxlLmpwZyk7Ki9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZyxcclxuICAgIHJnYmEoNDcsIDEwOSwgMjEzLCAwLjcpLCByZ2JhKDQ3LCAxMDksIDIxMywgMC43KSksXHJcbiAgICAvKnJnYmEoMzMsIDE1MCwgMjQzLCAwLjcpLCByZ2JhKDMzLCAxNTAsIDI0MywgMC43KSksKi9cclxuICAgIHVybCheYXNzZXRzL2ltYWdlcy9wYWxhenpvLWRlbGxpbnBzLWRpcmV6aW9uZS1nZW5lcmFsZS5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICBAaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG5cclxuICAmLm1hdC1kcmF3ZXItc2lkZSB7XHJcbiAgICBib3JkZXItd2lkdGg6IDA7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWFib3ZlIHtcclxuICAubWF0ZXJvLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wfSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXRlcm8tc2lkZWJhci1tYWluIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCxcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXgge1xyXG4gIC5tYXRlcm8tc2lkZW5hdiB7XHJcbiAgICB3aWR0aDogdmFyaWFibGVzLiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDtcclxuXHJcbiAgICAubWVudS1uYW1lLFxyXG4gICAgLm1lbnUtbGFiZWwsXHJcbiAgICAubWVudS1iYWRnZSxcclxuICAgIC5tZW51LWNhcmV0LFxyXG4gICAgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKC41KTtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgd2lkdGg6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aDtcclxuXHJcbiAgICAgIC5tZW51LW5hbWUsXHJcbiAgICAgIC5tZW51LWxhYmVsLFxyXG4gICAgICAubWVudS1iYWRnZSxcclxuICAgICAgLm1lbnUtY2FyZXQsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxyXG4gICAgICAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXHJcbiAgICAgIC5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGggIWltcG9ydGFudDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmW2Rpcj0ncnRsJ10gLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB2YXJpYWJsZXMuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTGF5b3V0IGNvbnRyb2xcclxuLm1hdGVyby1uYXZiYXItdG9wIHtcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby1icmFuZGluZyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIExheW91dCBjb250cm9sXHJcbi5tYXRlcm8taGVhZGVyLWZpeGVkIHtcclxuICAubWF0ZXJvLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1hdGVyby10b3BtZW51IHtcclxuICAgIHRvcDogdmFyaWFibGVzLiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1kZXNrdG9wO1xyXG5cclxuICAgIEBpbmNsdWRlIGJyZWFrcG9pbnRzLmJwLWx0KHNtYWxsKSB7XHJcbiAgICAgICYge1xyXG4gICAgICAgIHRvcDogdmFyaWFibGVzLiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYubWF0ZXJvLW5hdmJhci1zaWRlIHtcclxuICAgIC5tYXRlcm8tdG9vbGJhciB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgICAgICBcclxuICAgICAgLy9AaW5jbHVkZSBtYXQuZWxldmF0aW9uKDIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gRml4IHRoZSBpbml0IGNvbnRlbnQgd2lkdGhcclxuLm1hdGVyby1jb250ZW50LXdpZHRoLWZpeCB7XHJcbiAgLm1hdGVyby1jb250ZW50LXdyYXAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG5cclxuICAgIFtkaXI9J3J0bCddICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcmlhYmxlcy4kc2lkZW5hdi13aWR0aCAhaW1wb3J0YW50O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQ29sb3JmdWxcclxuLm1hdGVyby1oZWFkZXItd2hpdGUge1xyXG4gIC5tYXRlcm8tdG9vbGJhcixcclxuICAubWF0ZXJvLXRvcG1lbnUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcbiIsIi5tYXRlcm8tY29udGFpbmVyLXdyYXAsXG4ubWF0ZXJvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLm1hdGVyby1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWF0ZXJvLXNpZGVuYXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogd2lkdGggNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDBkZWcsXG4gICAgcmdiYSgzMywgMTUwLCAyNDMsIDAuNyksIHJnYmEoMzMsIDE1MCwgMjQzLCAwLjcpKSxcbiAgICB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9wYWxhenpvLWRlbGxpbnBzLWRpcmV6aW9uZS1nZW5lcmFsZS5qcGcpOyovXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDQ3LCAxMDksIDIxMywgMC43KSwgcmdiYSg0NywgMTA5LCAyMTMsIDAuNykpLCB1cmwoXmFzc2V0cy9pbWFnZXMvcGFsYXp6by1kZWxsaW5wcy1kaXJlemlvbmUtZ2VuZXJhbGUuanBnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm1hdGVyby1zaWRlbmF2Lm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci13aWR0aDogMDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLXNpZGVuYXYubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4ubWF0ZXJvLWhlYWRlci1hYm92ZSAubWF0ZXJvLWNvbnRhaW5lciB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCkgIWltcG9ydGFudDtcbn1cbi5tYXRlcm8taGVhZGVyLWFib3ZlIC5tYXRlcm8tc2lkZWJhci1tYWluIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2LFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXggLm1hdGVyby1zaWRlbmF2IHtcbiAgd2lkdGg6IDcwcHg7XG59XG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdiAubWVudS1uYW1lLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXYgLm1lbnUtbGFiZWwsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdiAubWVudS1iYWRnZSxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2IC5tZW51LWNhcmV0LFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXYgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdiAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdiAubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXYgLm1lbnUtbmFtZSxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQtZml4IC5tYXRlcm8tc2lkZW5hdiAubWVudS1sYWJlbCxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQtZml4IC5tYXRlcm8tc2lkZW5hdiAubWVudS1iYWRnZSxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQtZml4IC5tYXRlcm8tc2lkZW5hdiAubWVudS1jYXJldCxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQtZml4IC5tYXRlcm8tc2lkZW5hdiAubWF0ZXJvLXVzZXItcGFuZWwtbmFtZSxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQtZml4IC5tYXRlcm8tc2lkZW5hdiAubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXYgLm1hdGVyby11c2VyLXBhbmVsLWljb25zIHtcbiAgb3BhY2l0eTogMDtcbn1cbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2IC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXYgLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbn1cbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2OmhvdmVyLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXggLm1hdGVyby1zaWRlbmF2OmhvdmVyIHtcbiAgd2lkdGg6IDI0MHB4O1xufVxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1lbnUtbmFtZSxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2OmhvdmVyIC5tZW51LWxhYmVsLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1lbnUtYmFkZ2UsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdjpob3ZlciAubWVudS1jYXJldCxcbi5tYXRlcm8tc2lkZW5hdi1jb2xsYXBzZWQgLm1hdGVyby1zaWRlbmF2OmhvdmVyIC5tYXRlcm8tdXNlci1wYW5lbC1uYW1lLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1hdGVyby11c2VyLXBhbmVsLWVtYWlsLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1hdGVyby11c2VyLXBhbmVsLWljb25zLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXggLm1hdGVyby1zaWRlbmF2OmhvdmVyIC5tZW51LW5hbWUsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1lbnUtbGFiZWwsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1lbnUtYmFkZ2UsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1lbnUtY2FyZXQsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkLWZpeCAubWF0ZXJvLXNpZGVuYXY6aG92ZXIgLm1hdGVyby11c2VyLXBhbmVsLWVtYWlsLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXggLm1hdGVyby1zaWRlbmF2OmhvdmVyIC5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tc2lkZW5hdjpob3ZlciAubWF0ZXJvLXVzZXItcGFuZWwtYXZhdGFyLFxuLm1hdGVyby1zaWRlbmF2LWNvbGxhcHNlZC1maXggLm1hdGVyby1zaWRlbmF2OmhvdmVyIC5tYXRlcm8tdXNlci1wYW5lbC1hdmF0YXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tY29udGVudC13cmFwIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHggIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkIC5tYXRlcm8tY29udGVudC13cmFwIHtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG4ubWF0ZXJvLXNpZGVuYXYtY29sbGFwc2VkW2Rpcj1ydGxdIC5tYXRlcm8tY29udGVudC13cmFwIHtcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXRlcm8tbmF2YmFyLXRvcCAubWF0ZXJvLXRvcG1lbnUge1xuICB0b3A6IDA7XG59XG4ubWF0ZXJvLW5hdmJhci10b3AgLm1hdGVyby1icmFuZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuW2Rpcj1ydGxdIC5tYXRlcm8tbmF2YmFyLXRvcCAubWF0ZXJvLWJyYW5kaW5nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLm1hdGVyby1oZWFkZXItZml4ZWQgLm1hdGVyby1oZWFkZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG59XG4ubWF0ZXJvLWhlYWRlci1maXhlZCAubWF0ZXJvLXRvcG1lbnUge1xuICB0b3A6IDY0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdGVyby1oZWFkZXItZml4ZWQgLm1hdGVyby10b3BtZW51IHtcbiAgICB0b3A6IDU2cHg7XG4gIH1cbn1cbi5tYXRlcm8taGVhZGVyLWZpeGVkLm1hdGVyby1uYXZiYXItc2lkZSAubWF0ZXJvLXRvb2xiYXIge1xuICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5tYXRlcm8tY29udGVudC13aWR0aC1maXggLm1hdGVyby1jb250ZW50LXdyYXAge1xuICBtYXJnaW4tbGVmdDogMjQwcHggIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLWNvbnRlbnQtd2lkdGgtZml4IC5tYXRlcm8tY29udGVudC13cmFwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyNDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4ubWF0ZXJvLWhlYWRlci13aGl0ZSAubWF0ZXJvLXRvb2xiYXIsXG4ubWF0ZXJvLWhlYWRlci13aGl0ZSAubWF0ZXJvLXRvcG1lbnUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iLCJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRndXR0ZXI6IDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyNDBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi13aWR0aC1tb2JpbGU6IDI4MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9vbGJhclxyXG4kdG9vbGJhci1oZWlnaHQtZGVza3RvcDogNjRweCAhZGVmYXVsdDtcclxuJHRvb2xiYXItaGVpZ2h0LW1vYmlsZTogNTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvcG1lbnVcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLWRlc2t0b3A6ICR0b29sYmFyLWhlaWdodC1kZXNrdG9wICFkZWZhdWx0O1xyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tbW9iaWxlOiAkdG9vbGJhci1oZWlnaHQtbW9iaWxlICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZSBMaWdodCcsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRicmVha3BvaW50czogKFxyXG4gIHhzbWFsbDogMCxcclxuICBzbWFsbDogIDYwMHB4LFxyXG4gIG1lZGl1bTogOTYwcHgsXHJcbiAgbGFyZ2U6ICAxMjgwcHgsXHJcbiAgeGxhcmdlOiAxOTIwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tYmx1ZS1wYWxldHRlOiAoXHJcbi8vICAgNTA6ICAjZTNmMmZkLFxyXG4vLyAgIDEwMDogI2JiZGVmYixcclxuLy8gICAyMDA6ICM5MGNhZjksXHJcbi8vICAgMzAwOiAjNjRiNWY2LFxyXG4vLyAgIDQwMDogIzQyYTVmNSxcclxuLy8gICA1MDA6ICMyMTk2ZjMsIFxyXG4vLyAgIDU1MDogIzJmNmRkNSwgLy8gYmx1IGF1ZGl0XHJcbi8vICAgNjAwOiAjMWU4OGU1LFxyXG4vLyAgIDcwMDogIzE5NzZkMixcclxuLy8gICA4MDA6ICMxNTY1YzAsXHJcbi8vICAgOTAwOiAjMGQ0N2ExLFxyXG4vLyAgIEExMDA6ICM4MmIxZmYsXHJcbi8vICAgQTIwMDogIzQ0OGFmZixcclxuLy8gICBBNDAwOiAjMjk3OWZmLFxyXG4vLyAgIEE3MDA6ICMyOTYyZmZcclxuLy8gKTtcclxuXHJcbi8vIE1hdGVyaWFsIGNvbG9yc1xyXG4kbWF0LWNvbG9yczogKFxyXG4gIHJlZDogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICBwaW5rOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICBwdXJwbGU6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgZGVlcC1wdXJwbGU6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICBpbmRpZ286IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgLy8gYmx1ZTogbWF0LiRjdXN0b20tYmx1ZS1wYWxldHRlLFxyXG4gIGJsdWU6IG1hdC4kYmx1ZS1wYWxldHRlLFxyXG4gIGxpZ2h0LWJsdWU6IG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlLFxyXG4gIGN5YW46IG1hdC4kY3lhbi1wYWxldHRlLFxyXG4gIHRlYWw6IG1hdC4kdGVhbC1wYWxldHRlLFxyXG4gIGdyZWVuOiBtYXQuJGdyZWVuLXBhbGV0dGUsXHJcbiAgbGlnaHQtZ3JlZW46IG1hdC4kbGlnaHQtZ3JlZW4tcGFsZXR0ZSxcclxuICBsaW1lOiBtYXQuJGxpbWUtcGFsZXR0ZSxcclxuICB5ZWxsb3c6IG1hdC4keWVsbG93LXBhbGV0dGUsXHJcbiAgYW1iZXI6IG1hdC4kYW1iZXItcGFsZXR0ZSxcclxuICBvcmFuZ2U6IG1hdC4kb3JhbmdlLXBhbGV0dGUsXHJcbiAgZGVlcC1vcmFuZ2U6IG1hdC4kZGVlcC1vcmFuZ2UtcGFsZXR0ZSxcclxuICBicm93bjogbWF0LiRicm93bi1wYWxldHRlLFxyXG4gIGdyYXk6IG1hdC4kZ3JheS1wYWxldHRlLFxyXG4gIGJsdWUtZ3JheTogbWF0LiRibHVlLWdyYXktcGFsZXR0ZSxcclxuICB3aGl0ZTogd2hpdGUsXHJcbiAgYmxhY2s6IGJsYWNrLFxyXG4gIGxpZ2h0OiB3aGl0ZSxcclxuICBkYXJrOiByZ2JhKGJsYWNrLCAuODcpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gVGhlIG1hdGVyaWFsIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlc1xyXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xyXG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSAhZGVmYXVsdDtcclxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptYXRoJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICd2YXJpYWJsZXMnO1xuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDJweCAxcHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDNweCAxcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCAzcHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDJweCA0cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDNweCA1cHggLTFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDRweCA1cHggLTJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDVweCA1cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDVweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA2cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNnB4IDdweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggN3B4IDlweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDhweCA5cHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA4cHggMTBweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDhweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggOXB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA5cHggMTJweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDEwcHggMTNweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDEwcHggMTRweCAtNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDExcHggMTRweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDExcHggMTVweCAtN3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXJpYWJsZXMuJGZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uO1xuXG4vLyBUaGUgZGVmYXVsdCBjb2xvciBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJHByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIGVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRjb2xvciwgJG9wYWNpdHk6ICRvcGFjaXR5KSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCBtYXRoLmlzLXVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC5nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLmdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBvdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRjb2xvcixcbiAgICAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgJjpub3QoW2NsYXNzKj0nI3skcHJlZml4fSddKSB7XG4gICAgQGluY2x1ZGUgZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbi8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBjYW4gYmUgdXNlZCBhcyB0aGUgdmFsdWUgZm9yIGEgdHJhbnNpdGlvbiBwcm9wZXJ0eSBmb3IgZWxldmF0aW9uLlxuLy8gQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGRpcmVjdGx5IGlzIHVzZWZ1bCBpbiBzaXR1YXRpb25zIHdoZXJlIGEgY29tcG9uZW50IG5lZWRzIHRvIHRyYW5zaXRpb25cbi8vIG1vcmUgdGhhbiBvbmUgcHJvcGVydHkuXG4vL1xuLy8gLmZvbyB7XG4vLyAgIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgpLCBvcGFjaXR5IDEwMG1zIGVhc2U7XG4vLyB9XG5AZnVuY3Rpb24gcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKFxuICAgICRkdXJhdGlvbjogJHRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgdHJhbnNpdGlvbjogcHJpdmF0ZS10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCRkdXJhdGlvbiwgJGVhc2luZyk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XHJcbkB1c2UgJ3ZhcmlhYmxlcyc7XHJcblxyXG5AZnVuY3Rpb24gYnAoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtaW46IG1hcC5nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XHJcblxyXG4gIEByZXR1cm4gJG1pbjtcclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWd0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcclxuXHJcbiAgQGlmICRtaW4ge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLlxyXG5AbWl4aW4gYnAtbHQoJG5hbWUsICRicmVha3BvaW50czogdmFyaWFibGVzLiRicmVha3BvaW50cykge1xyXG4gICRtYXg6IGJwKCRuYW1lLCAkYnJlYWtwb2ludHMpIC0gMXB4O1xyXG5cclxuICBAaWYgJG1heCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xyXG4gICAgICBAY29udGVudDtcclxuICAgIH1cclxuICB9XHJcbiAgQGVsc2Uge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 84951:
/*!************************************************************!*\
  !*** ./src/app/theme/auth-layout/auth-layout.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class AuthLayoutComponent {
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["app-auth-layout"]], decls: 2, vars: 0, consts: [[1, "matero-auth-container"]], template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".matero-auth-container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  min-height: 100%;\n  padding: 16px;\n  background-color: #212121;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05)), linear-gradient(-45deg, rgba(255, 255, 255, 0.05) 25%, transparent 25%, transparent 75%, rgba(255, 255, 255, 0.05) 75%, rgba(255, 255, 255, 0.05));\n  background-size: 60px 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgtbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHRoZW1lXFxhdXRoLWxheW91dFxcYXV0aC1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdVRBQ0U7RUFnQkYsMEJBQUE7QUNmRiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8tYXV0aC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMTIxO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6XHJcbiAgICBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIDQ1ZGVnLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSkgMjUlLFxyXG4gICAgICB0cmFuc3BhcmVudCAyNSUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDc1JSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpIDc1JSxcclxuICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAuMDUpXHJcbiAgICApLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAtNDVkZWcsXHJcbiAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgLjA1KSAyNSUsXHJcbiAgICAgIHRyYW5zcGFyZW50IDI1JSxcclxuICAgICAgdHJhbnNwYXJlbnQgNzUlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSkgNzUlLFxyXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIC4wNSlcclxuICAgICk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiA2MHB4IDYwcHg7XHJcbn1cclxuIiwiLm1hdGVyby1hdXRoLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNzUlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpIDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSksIGxpbmVhci1ncmFkaWVudCgtNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkgMjUlLCB0cmFuc3BhcmVudCAyNSUsIHRyYW5zcGFyZW50IDc1JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSA3NSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDYwcHggNjBweDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 25868:
/*!**************************************************!*\
  !*** ./src/app/theme/header/header.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! screenfull */ 76993);
/* harmony import */ var _shared_services_notifiche_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/notifiche.service */ 49049);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ 19946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/branding.component */ 21010);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ 70178);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);

















function HeaderComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.toggleSidenav.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} }
function HeaderComponent_app_branding_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-branding");
} }
function HeaderComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "button", 14)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("matBadge", ctx_r2.notificationsCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r3);
} }
function HeaderComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Non ci sono segnalazioni con nuovi aspetti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/segnalazione/gestione"]; };
function HeaderComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sono state rilevate segnalazioni con nuovi aspetti. Clicca per andare alla pagina di Gestione.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
const FileSaver = __webpack_require__(/*! file-saver */ 65226);
class HeaderComponent {
    constructor(notificationService, storageService) {
        this.notificationService = notificationService;
        this.storageService = storageService;
        this.showToggle = true;
        this.showBranding = false;
        this.notificationsCount = 0;
        this.toggleSidenav = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.toggleSidenavNotice = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.ruolo = '';
    }
    ngOnInit() {
        this.notificationService.notificationsCount$.subscribe(count => {
            this.notificationsCount = count;
        });
        this.ruolo = this.storageService.getItem('allroles');
    }
    ngAfterViewInit() {
        /*       this.http.get<string>(environment.MS_SIRICOAPI + environment.API_URI+'infoApplicativo/versione', {responseType:'text' as 'json'}).subscribe(
                    version => {
                        this.versioneSoftware = version;
              }) */
        /*       this.infoUtentiService.infoUtente().subscribe((info: InfoUtente) => {
                //leggo ruolo e matricola dell'utente connesso
                  this.ruolo = info.authorities[0].role;
              }) */
    }
    toggleFullscreen() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].isEnabled) {
            screenfull__WEBPACK_IMPORTED_MODULE_0__["default"].toggle();
        }
    }
    hasRoleforNotification() {
        if (this.ruolo.split(';').map(ruolo => ruolo.trim()).includes("P12689") || this.ruolo.split(';').map(ruolo => ruolo.trim()).includes("P12690")) {
            return true;
        }
        return false;
    }
    scaricaManualeUtente() {
        const pdfUrl = './assets/manuali-utente/ManualeUtenteSirico2.0.pdf';
        //const pdfUrl = './assets/manuali-utente/manualeutente' + this.ruolo + '.pdf';
        const pdfName = 'ManualeUtente.pdf';
        // console.log('pdfUrl: ', pdfUrl, ' pdfName: ', pdfName)
        FileSaver.saveAs(pdfUrl, pdfName);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_notifiche_service__WEBPACK_IMPORTED_MODULE_1__.NotificheService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_2__.StorageService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostAttrs: [1, "matero-header"], inputs: { showToggle: "showToggle", showBranding: "showBranding" }, outputs: { toggleSidenav: "toggleSidenav", toggleSidenavNotice: "toggleSidenavNotice" }, decls: 21, vars: 5, consts: [[1, "matero-toolbar"], ["mat-icon-button", "", "class", "matero-toolbar-button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["fxFlex", ""], [1, "container-data"], [1, "child-data-icons"], ["mat-icon-button", "", "fxHide.lt-sm", "", 1, "matero-toolbar-button", 3, "click"], ["class", "child-data-icons", 4, "ngIf"], ["menu", "matMenu"], ["class", "notification-text", 4, "ngIf"], ["class", "notification-text clickable", 3, "routerLink", 4, "ngIf"], [1, "child-data-icons-manual"], ["src", "assets/images/manuale-utente.png"], ["mat-icon-button", "", 1, "matero-toolbar-button", 3, "click"], ["mat-icon-button", "", "fxHide.lt-sm", "", 1, "matero-toolbar-button", 3, "matBadge", "matMenuTriggerFor"], [1, "notification-text"], [1, "notification-text", "clickable", 3, "routerLink"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderComponent_button_1_Template, 3, 0, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderComponent_app_branding_2_Template, 1, 0, "app-branding", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_6_listener() { return ctx.toggleFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "fullscreen");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, HeaderComponent_div_9_Template, 4, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, HeaderComponent_p_12_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HeaderComponent_p_13_Template, 2, 2, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5)(15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.toggleSidenavNotice.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11)(19, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_19_listener() { return ctx.scaricaManualeUtente(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showBranding);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.hasRoleforNotification());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.notificationsCount == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.notificationsCount > 0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__.MatToolbar, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_3__.BrandingComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__.DefaultShowHideDirective, _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__.MatBadge, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenu, _angular_router__WEBPACK_IMPORTED_MODULE_13__.RouterLink], styles: [".matero-header {\n  position: relative;\n  z-index: 200;\n  display: block;\n}\n.matero-header .matero-toolbar {\n  padding: 0 8px;\n}\n.notification-text {\n  margin-left: 5px;\n  margin-right: 5px;\n  font-size: medium;\n}\n.clickable {\n  cursor: pointer;\n}\n.matero-toolbar-button .mat-badge-content {\n  background-color: #2f6dd5 !important;\n  /* Cambia 'red' al colore desiderato */\n  color: white !important;\n  /* Cambia 'white' al colore desiderato */\n}\n.matero-toolbar {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}\n.matero-toolbar .badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.mat-button, .matero-toolbar-button.mat-icon-button {\n  margin: 0 4px;\n}\n.matero-toolbar-button.mat-button {\n  min-width: unset;\n  line-height: 40px;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.matero-avatar-button {\n  display: block;\n  padding: 0 4px;\n  font-size: 0;\n}\n.matero-toolbar-button.matero-avatar-button .matero-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50rem;\n}\n.matero-toolbar-button.matero-avatar-button .matero-username {\n  margin: 0 8px;\n  font-size: 14px;\n}\n.matero-branding {\n  display: inline-block;\n  color: inherit;\n  font-size: 20px;\n  white-space: nowrap;\n}\n.matero-branding-logo-expanded {\n  width: 160px;\n  margin-top: 100px;\n  vertical-align: middle;\n  margin-right: 30px;\n  margin-left: 30px;\n}\n[dir=rtl] .matero-branding-logo-expanded {\n  margin-right: auto;\n  margin-left: 10px;\n}\n.matero-branding-name {\n  color: white;\n  font-weight: bold;\n  vertical-align: middle;\n}\n.matero-branding-payoff {\n  color: white;\n  font-size: 12px;\n}\n#vesione-software {\n  padding-top: 4.5px;\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFx0aGVtZVxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0Y7QURDRTtFQUNFLGNBQUE7QUNDSjtBREdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQUY7QURFQTtFQUNFLGVBQUE7QUNDRjtBREdBO0VBQ0Usb0NBQUE7RUFBc0Msc0NBQUE7RUFDdEMsdUJBQUE7RUFBeUIsd0NBQUE7QUNFM0I7QURDQTtFQUNFLDRDQUFBO0FDRUY7QURBRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBQ0VKO0FES0U7RUFFRSxhQUFBO0FDSEo7QURNRTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0pKO0FET0U7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNMSjtBRE9JO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ0xOO0FEUUk7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ05OO0FEV0E7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNSRjtBRFdBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBR0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDVkY7QURZRTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNWSjtBRGNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUNYRjtBRGNBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUNYRjtBRGNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ1hGIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcm8taGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAubWF0ZXJvLXRvb2xiYXIge1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9uLXRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuLmNsaWNrYWJsZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubWF0ZXJvLXRvb2xiYXItYnV0dG9uIC5tYXQtYmFkZ2UtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgJ3JlZCcgYWwgY29sb3JlIGRlc2lkZXJhdG8gKi9cclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDsgLyogQ2FtYmlhICd3aGl0ZScgYWwgY29sb3JlIGRlc2lkZXJhdG8gKi9cclxufVxyXG5cclxuLm1hdGVyby10b29sYmFyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG5cclxuICAuYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIEN1c3RvbWl6ZSB0b29sYmFyIGJ1dHRvblxyXG4ubWF0ZXJvLXRvb2xiYXItYnV0dG9uIHtcclxuXHJcbiAgJi5tYXQtYnV0dG9uLFxyXG4gICYubWF0LWljb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgfVxyXG5cclxuICAmLm1hdC1idXR0b24ge1xyXG4gICAgbWluLXdpZHRoOiB1bnNldDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTByZW07XHJcbiAgfVxyXG5cclxuICAmLm1hdGVyby1hdmF0YXItYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICBmb250LXNpemU6IDA7XHJcblxyXG4gICAgLm1hdGVyby1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogMzJweDtcclxuICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0ZXJvLXVzZXJuYW1lIHtcclxuICAgICAgbWFyZ2luOiAwIDhweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1hdGVyby1icmFuZGluZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4ubWF0ZXJvLWJyYW5kaW5nLWxvZ28tZXhwYW5kZWQge1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAvLyB3aWR0aDogNDBweDtcclxuICAvL2hlaWdodDogMzBweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogMzBweDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxuXHJcbiAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXRlcm8tYnJhbmRpbmctbmFtZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuXHJcbi5tYXRlcm8tYnJhbmRpbmctcGF5b2ZmIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4jdmVzaW9uZS1zb2Z0d2FyZSB7XHJcbiAgcGFkZGluZy10b3A6IDQuNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuIiwiLm1hdGVyby1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDIwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ubWF0ZXJvLWhlYWRlciAubWF0ZXJvLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwIDhweDtcbn1cblxuLm5vdGlmaWNhdGlvbi10ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWF0ZXJvLXRvb2xiYXItYnV0dG9uIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgLyogQ2FtYmlhICdyZWQnIGFsIGNvbG9yZSBkZXNpZGVyYXRvICovXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAvKiBDYW1iaWEgJ3doaXRlJyBhbCBjb2xvcmUgZGVzaWRlcmF0byAqL1xufVxuXG4ubWF0ZXJvLXRvb2xiYXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXRlcm8tdG9vbGJhciAuYmFkZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xufVxuXG4ubWF0ZXJvLXRvb2xiYXItYnV0dG9uLm1hdC1idXR0b24sIC5tYXRlcm8tdG9vbGJhci1idXR0b24ubWF0LWljb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwIDRweDtcbn1cbi5tYXRlcm8tdG9vbGJhci1idXR0b24ubWF0LWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogdW5zZXQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcbn1cbi5tYXRlcm8tdG9vbGJhci1idXR0b24ubWF0ZXJvLWF2YXRhci1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMCA0cHg7XG4gIGZvbnQtc2l6ZTogMDtcbn1cbi5tYXRlcm8tdG9vbGJhci1idXR0b24ubWF0ZXJvLWF2YXRhci1idXR0b24gLm1hdGVyby1hdmF0YXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcbn1cbi5tYXRlcm8tdG9vbGJhci1idXR0b24ubWF0ZXJvLWF2YXRhci1idXR0b24gLm1hdGVyby11c2VybmFtZSB7XG4gIG1hcmdpbjogMCA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLm1hdGVyby1icmFuZGluZyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm1hdGVyby1icmFuZGluZy1sb2dvLWV4cGFuZGVkIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLWJyYW5kaW5nLWxvZ28tZXhwYW5kZWQge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0ZXJvLWJyYW5kaW5nLW5hbWUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4ubWF0ZXJvLWJyYW5kaW5nLXBheW9mZiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4jdmVzaW9uZS1zb2Z0d2FyZSB7XG4gIHBhZGRpbmctdG9wOiA0LjVweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iXX0= */"], encapsulation: 2 });


/***/ }),

/***/ 15283:
/*!******************************************************************!*\
  !*** ./src/app/theme/sidebar-notice/sidebar-notice.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarNoticeComponent": () => (/* binding */ SidebarNoticeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/ruolo-comunicazione.service */ 86872);
/* harmony import */ var app_routes_area_amministrativa_dettaglio_comunicazione_dettaglio_comunicazione_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component */ 34335);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 64316);
















function SidebarNoticeComponent_div_0_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comunicazioni lette ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_div_0_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Inizio validit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 3, element_r10.dataInizio, "dd/MM/yyyy"), " - Fine Validit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 6, element_r10.dataFine, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r7.truncateText(element_r10.messaggio, 30), " ");
} }
function SidebarNoticeComponent_div_0_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 13);
} }
function SidebarNoticeComponent_div_0_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarNoticeComponent_div_0_tr_6_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r13); const row_r11 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.viewComunicazioneLetta(row_r11.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarNoticeComponent_div_0_td_3_Template, 2, 0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarNoticeComponent_div_0_td_4_Template, 7, 9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarNoticeComponent_div_0_tr_5_Template, 1, 0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarNoticeComponent_div_0_tr_6_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r0.dataSourceFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function SidebarNoticeComponent_div_1_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Comunicazioni non lette ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_div_1_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" Inizio validit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 3, element_r18.dataInizio, "dd/MM/yyyy"), " - Fine Validit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 6, element_r18.dataFine, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r15.truncateText(element_r18.messaggio, 30), " ");
} }
function SidebarNoticeComponent_div_1_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 13);
} }
function SidebarNoticeComponent_div_1_tr_6_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SidebarNoticeComponent_div_1_tr_6_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const row_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r20.viewComunicazioneNonLetta(row_r19.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "table", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarNoticeComponent_div_1_td_3_Template, 2, 0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarNoticeComponent_div_1_td_4_Template, 7, 9, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SidebarNoticeComponent_div_1_tr_5_Template, 1, 0, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SidebarNoticeComponent_div_1_tr_6_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r1.dataSourceFiltered2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
} }
function SidebarNoticeComponent_ng_template_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Comunicazioni lette");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarNoticeComponent_ng_template_2_p_1_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Nessun risultato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.dataSourceFiltered.length <= 0);
} }
function SidebarNoticeComponent_ng_template_4_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Comunicazioni non lette");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SidebarNoticeComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarNoticeComponent_ng_template_4_p_3_Template, 2, 0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Nessun risultato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.dataSourceFiltered2.length <= 0);
} }
class SidebarNoticeComponent {
    constructor(dialog, comunicazioniSrv, formBuilder, storageService, roleComService) {
        this.dialog = dialog;
        this.comunicazioniSrv = comunicazioniSrv;
        this.formBuilder = formBuilder;
        this.storageService = storageService;
        this.roleComService = roleComService;
        this.comunicazioneLette = [];
        this.dataSourceFiltered = [];
        this.dataSourceFiltered2 = [];
        this.displayedColumns = ['messaggio'];
        this.matricola = ' ';
        this.ruolo = '';
        this.formRicerca = this.formBuilder.group({
            dataInizio: null,
            dataFine: null,
        });
    }
    ngOnInit() {
        this.filtroMessaggi();
        this.filtroMessaggiNonLetti();
    }
    filtroMessaggi() {
        this.matricola = this.storageService.getItem('matricola');
        if (this.ruolo && this.matricola) {
            this.comunicazioniSrv.newGetComunicazioniLetteByMatricola(this.matricola).subscribe({
                next: (comunicazioniLette) => {
                    if (this.comunicazioneLette && comunicazioniLette.length > 0) {
                        const requests = comunicazioniLette.map((comunicazione) => this.comunicazioniSrv.newGetComunicazioneById(comunicazione.idComunicazione));
                        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(requests).subscribe({
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
    filtroMessaggiNonLetti() {
        this.ruolo = this.storageService.getItem('allroles');
        this.matricola = this.storageService.getItem('matricola');
        if (this.ruolo && this.matricola) {
            this.roleComService.newGetComunicazioniFilterByRuoloAndMatricola(this.ruolo, this.matricola).subscribe({
                next: (comunicazioniNonLette) => {
                    if (comunicazioniNonLette && comunicazioniNonLette.length > 0) { // Controllo aggiunto
                        const request = comunicazioniNonLette.map((comunicazione) => this.comunicazioniSrv.newGetComunicazioneById(comunicazione.idComunicazione));
                        (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.forkJoin)(request).subscribe({
                            next: (comunicazioneDettaglio) => {
                                this.dataSourceFiltered2 = comunicazioneDettaglio;
                            },
                            error: (error) => {
                                console.error('Errore durante il recupero delle comunicazioni dettaglio:', error);
                            },
                        });
                    }
                    else {
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
    truncateText(text, limit) {
        if (!text)
            return '';
        return text.length > limit ? text.substring(0, limit) + '...' : text;
    }
    viewComunicazioneNonLetta(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';
        dialogConfig.height = 'auto';
        dialogConfig.data = ({ tipoDettaglio: 0, id });
        const dialogRef = this.dialog.open(app_routes_area_amministrativa_dettaglio_comunicazione_dettaglio_comunicazione_component__WEBPACK_IMPORTED_MODULE_3__.DettaglioComunicazioneComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.filtroMessaggi();
            this.filtroMessaggiNonLetti();
        });
    }
    viewComunicazioneLetta(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';
        dialogConfig.height = 'auto';
        dialogConfig.data = ({ tipoDettaglio: 1, id });
        const dialogRef = this.dialog.open(app_routes_area_amministrativa_dettaglio_comunicazione_dettaglio_comunicazione_component__WEBPACK_IMPORTED_MODULE_3__.DettaglioComunicazioneComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.filtroMessaggi();
            this.filtroMessaggiNonLetti();
        });
    }
}
SidebarNoticeComponent.ɵfac = function SidebarNoticeComponent_Factory(t) { return new (t || SidebarNoticeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_1__.ComunicazioniService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_2__.RuoloComunicazioneService)); };
SidebarNoticeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarNoticeComponent, selectors: [["app-sidebar-notice"]], decls: 6, vars: 4, consts: [["id", "contenitoreMessaggi", 4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], ["nessunRisultato2", ""], ["id", "contenitoreMessaggi"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "messaggio"], ["mat-header-cell", "", "class", "title-table", "align", "center", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "align", "center", 1, "title-table"], ["mat-cell", ""], ["id", "labelMessaggi"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-header-cell", "", "style", "background-color:#2f6dd5;font-size: 20px;color:white", "align", "center", 4, "matHeaderCellDef"], ["mat-header-cell", "", "align", "center", 2, "background-color", "#2f6dd5", "font-size", "20px", "color", "white"], [1, "rotation-div", 2, "width", "100%"], ["class", "title-table", "align", "center", 4, "ngIf"], [1, "nessuna-corr", 2, "text-align", "center", "font-size", "25px"], ["align", "center", 1, "title-table"]], template: function SidebarNoticeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidebarNoticeComponent_div_0_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SidebarNoticeComponent_div_1_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarNoticeComponent_ng_template_2_Template, 4, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SidebarNoticeComponent_ng_template_4_Template, 6, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSourceFiltered.length > 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSourceFiltered2.length > 0)("ngIfElse", _r4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_9__.MatRow], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: [".mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: white;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n\n#contenitoreMessaggi[_ngcontent-%COMP%]   td.mat-cell.cdk-cell.cdk-column-messaggio.mat-column-messaggio[_ngcontent-%COMP%] {\n  color: black !important;\n}\n\n#labelMessaggi[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.5);\n}\n\n.title-table[_ngcontent-%COMP%] {\n  background-color: #2f6dd5;\n  font-size: 20px;\n  color: white;\n  text-align: center;\n  padding: 5px;\n  margin: 0px;\n  height: 56px;\n  vertical-align: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXItbm90aWNlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHRoZW1lXFxzaWRlYmFyLW5vdGljZVxcc2lkZWJhci1ub3RpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRjs7QURHQTtFQUNFLHVCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUNBRiIsImZpbGUiOiJzaWRlYmFyLW5vdGljZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuXHJcbiNjb250ZW5pdG9yZU1lc3NhZ2dpIHRkLm1hdC1jZWxsLmNkay1jZWxsLmNkay1jb2x1bW4tbWVzc2FnZ2lvLm1hdC1jb2x1bW4tbWVzc2FnZ2lve1xyXG4gIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNsYWJlbE1lc3NhZ2dpe1xyXG4gIGNvbG9yOnJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNSlcclxufVxyXG5cclxuLnRpdGxlLXRhYmxle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzJmNmRkNTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDBweDtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcbiIsIi5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbiNjb250ZW5pdG9yZU1lc3NhZ2dpIHRkLm1hdC1jZWxsLmNkay1jZWxsLmNkay1jb2x1bW4tbWVzc2FnZ2lvLm1hdC1jb2x1bW4tbWVzc2FnZ2lvIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG5cbiNsYWJlbE1lc3NhZ2dpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRpdGxlLXRhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDBweDtcbiAgaGVpZ2h0OiA1NnB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59Il19 */"] });


/***/ }),

/***/ 9295:
/*!****************************************************!*\
  !*** ./src/app/theme/sidebar/sidebar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/info-utenti.service */ 39202);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../widgets/branding.component */ 21010);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _user_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-panel.component */ 15779);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidemenu/sidemenu.component */ 90928);










function SidebarComponent_div_0_mat_slide_toggle_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-slide-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SidebarComponent_div_0_mat_slide_toggle_3_Template_mat_slide_toggle_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r3.toggleCollapsed.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r2.toggleChecked);
} }
function SidebarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-branding")(2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SidebarComponent_div_0_mat_slide_toggle_3_Template, 1, 1, "mat-slide-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showToggle);
} }
function SidebarComponent_app_user_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-user-panel");
} }
class SidebarComponent {
    // nomeUtente: string = ' ';
    // matricolaUtente: string = ' ';
    // cognomeUtente: string = ' ';
    // // appRoles: string[] = [];
    constructor(infoUtentiService) {
        this.infoUtentiService = infoUtentiService;
        this.showToggle = true;
        this.showUser = true;
        this.showHeader = true;
        this.toggleChecked = false;
        this.toggleCollapsed = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        // this.infoUtentiService.newInfoUtente().subscribe((info : IdmUser)=>{
        //   this.nomeUtente = info.firstName;
        //   this.cognomeUtente = info.lastName;
        //   this.matricolaUtente = info.matricula;
        //   // this.appRoles = info.appRoles;
        // });
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_0__.InfoUtentiService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], inputs: { showToggle: "showToggle", showUser: "showUser", showHeader: "showHeader", toggleChecked: "toggleChecked" }, outputs: { toggleCollapsed: "toggleCollapsed" }, decls: 4, vars: 3, consts: [["class", "matero-sidebar-header", 4, "ngIf"], [1, "matero-sidebar-main", "scrollbar-none"], [4, "ngIf"], [3, "ripple"], [1, "matero-sidebar-header"], ["fxFlex", ""], [3, "checked", "change", 4, "ngIf"], [3, "checked", "change"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SidebarComponent_div_0_Template, 4, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SidebarComponent_app_user_panel_2_Template, 1, 0, "app-user-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "app-sidemenu", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ripple", ctx.showToggle);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _widgets_branding_component__WEBPACK_IMPORTED_MODULE_1__.BrandingComponent, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__.DefaultFlexDirective, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _user_panel_component__WEBPACK_IMPORTED_MODULE_2__.UserPanelComponent, _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_3__.SidemenuComponent], styles: [".matero-sidebar-header {\n  position: relative;\n  margin-top: 10px;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  height: 64px;\n  padding: 0 10px;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-header {\n    height: 56px;\n  }\n}\n.matero-header-white .matero-sidebar-header {\n  background-color: white;\n}\n.matero-sidebar-main {\n  margin-top: 50%;\n  overflow: auto;\n}\n@media (max-width: 599px) {\n  .matero-sidebar-main {\n    height: calc(100% - 56px);\n  }\n}\n.matero-sidebar-main .mat-row:nth-child(even) {\n  background-color: red;\n}\n.matero-sidebar-main .mat-row:nth-child(odd) {\n  background-color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxcdGhlbWVcXHNpZGViYXJcXHNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLlxcc3R5bGVcXF9icmVha3BvaW50cy5zY3NzIiwiLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNGRjtBQ2tCSTtFRlpBO0lBQ0UsWUdMa0I7RUZFdEI7QUFDRjtBRE9FO0VBQ0UsdUJBQUE7QUNMSjtBRFNBO0VBQ0UsZUFBQTtFQUVBLGNBQUE7QUNQRjtBQ0tJO0VGS0E7SUFDRSx5QkFBQTtFQ1BKO0FBQ0Y7QURVRTtFQUNFLHFCQUFBO0FDUko7QURXQTtFQUNJLHVCQUFBO0FDVEoiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJy4uL3N0eWxlL3ZhcmlhYmxlcyc7XHJcbkB1c2UgJy4uL3N0eWxlL2JyZWFrcG9pbnRzJztcclxuXHJcbi5tYXRlcm8tc2lkZWJhci1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogdmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1kZXNrdG9wO1xyXG4gIHBhZGRpbmc6IDAgMTBweDtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBAaW5jbHVkZSBicmVha3BvaW50cy5icC1sdChzbWFsbCkge1xyXG4gICAgJiB7XHJcbiAgICAgIGhlaWdodDogdmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1tb2JpbGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDb2xvcmZ1bFxyXG4gIC5tYXRlcm8taGVhZGVyLXdoaXRlICYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJvLXNpZGViYXItbWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogNTAlO1xyXG4gIC8vIGhlaWdodDogY2FsYygxMDAlIC0gI3t2YXJpYWJsZXMuJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3B9KTtcclxuICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgQGluY2x1ZGUgYnJlYWtwb2ludHMuYnAtbHQoc21hbGwpIHtcclxuICAgICYge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICN7dmFyaWFibGVzLiR0b29sYmFyLWhlaWdodC1tb2JpbGV9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcm93Om50aC1jaGlsZChldmVuKXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxufVxyXG4iLCIubWF0ZXJvLXNpZGViYXItaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XG4gIC5tYXRlcm8tc2lkZWJhci1oZWFkZXIge1xuICAgIGhlaWdodDogNTZweDtcbiAgfVxufVxuLm1hdGVyby1oZWFkZXItd2hpdGUgLm1hdGVyby1zaWRlYmFyLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0ZXJvLXNpZGViYXItbWFpbiB7XG4gIG1hcmdpbi10b3A6IDUwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLm1hdGVyby1zaWRlYmFyLW1haW4ge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTZweCk7XG4gIH1cbn1cbi5tYXRlcm8tc2lkZWJhci1tYWluIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbi5tYXRlcm8tc2lkZWJhci1tYWluIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59IiwiQHVzZSAnc2FzczptYXAnO1xyXG5AdXNlICd2YXJpYWJsZXMnO1xyXG5cclxuQGZ1bmN0aW9uIGJwKCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWluOiBtYXAuZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xyXG5cclxuICBAcmV0dXJuICRtaW47XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguXHJcbkBtaXhpbiBicC1ndCgkbmFtZSwgJGJyZWFrcG9pbnRzOiB2YXJpYWJsZXMuJGJyZWFrcG9pbnRzKSB7XHJcbiAgJG1pbjogYnAoJG5hbWUsICRicmVha3BvaW50cyk7XHJcblxyXG4gIEBpZiAkbWluIHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XHJcbiAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICBAZWxzZSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC5cclxuQG1peGluIGJwLWx0KCRuYW1lLCAkYnJlYWtwb2ludHM6IHZhcmlhYmxlcy4kYnJlYWtwb2ludHMpIHtcclxuICAkbWF4OiBicCgkbmFtZSwgJGJyZWFrcG9pbnRzKSAtIDFweDtcclxuXHJcbiAgQGlmICRtYXgge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcclxuICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBlbHNlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG4iLCJAdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5cclxuLy8gTGF5b3V0XHJcbiRndXR0ZXI6IDIwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyNDBweCAhZGVmYXVsdDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi13aWR0aC1tb2JpbGU6IDI4MHB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9vbGJhclxyXG4kdG9vbGJhci1oZWlnaHQtZGVza3RvcDogNjRweCAhZGVmYXVsdDtcclxuJHRvb2xiYXItaGVpZ2h0LW1vYmlsZTogNTZweCAhZGVmYXVsdDtcclxuXHJcbi8vIFRvcG1lbnVcclxuJHRvcG1lbnUtc3RpY2t5LXBvc2l0aW9uLWRlc2t0b3A6ICR0b29sYmFyLWhlaWdodC1kZXNrdG9wICFkZWZhdWx0O1xyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tbW9iaWxlOiAkdG9vbGJhci1oZWlnaHQtbW9iaWxlICFkZWZhdWx0O1xyXG5cclxuLy8gVHlwb2dyYXBoeVxyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogJ1JvYm90bycsICdIZWx2ZXRpY2EgTmV1ZSBMaWdodCcsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsXHJcbiAgJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xyXG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2UgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1iYXNlOiAkZm9udC1mYW1pbHktc2Fucy1zZXJpZiAhZGVmYXVsdDtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbi8vXHJcbi8vIERlZmluZSB0aGUgbWluaW11bSBkaW1lbnNpb25zIGF0IHdoaWNoIHlvdXIgbGF5b3V0IHdpbGwgY2hhbmdlLFxyXG4vLyBhZGFwdGluZyB0byBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLCBmb3IgdXNlIGluIG1lZGlhIHF1ZXJpZXMuXHJcbiRicmVha3BvaW50czogKFxyXG4gIHhzbWFsbDogMCxcclxuICBzbWFsbDogIDYwMHB4LFxyXG4gIG1lZGl1bTogOTYwcHgsXHJcbiAgbGFyZ2U6ICAxMjgwcHgsXHJcbiAgeGxhcmdlOiAxOTIwcHhcclxuKSAhZGVmYXVsdDtcclxuXHJcbi8vICRjdXN0b20tYmx1ZS1wYWxldHRlOiAoXHJcbi8vICAgNTA6ICAjZTNmMmZkLFxyXG4vLyAgIDEwMDogI2JiZGVmYixcclxuLy8gICAyMDA6ICM5MGNhZjksXHJcbi8vICAgMzAwOiAjNjRiNWY2LFxyXG4vLyAgIDQwMDogIzQyYTVmNSxcclxuLy8gICA1MDA6ICMyMTk2ZjMsIFxyXG4vLyAgIDU1MDogIzJmNmRkNSwgLy8gYmx1IGF1ZGl0XHJcbi8vICAgNjAwOiAjMWU4OGU1LFxyXG4vLyAgIDcwMDogIzE5NzZkMixcclxuLy8gICA4MDA6ICMxNTY1YzAsXHJcbi8vICAgOTAwOiAjMGQ0N2ExLFxyXG4vLyAgIEExMDA6ICM4MmIxZmYsXHJcbi8vICAgQTIwMDogIzQ0OGFmZixcclxuLy8gICBBNDAwOiAjMjk3OWZmLFxyXG4vLyAgIEE3MDA6ICMyOTYyZmZcclxuLy8gKTtcclxuXHJcbi8vIE1hdGVyaWFsIGNvbG9yc1xyXG4kbWF0LWNvbG9yczogKFxyXG4gIHJlZDogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICBwaW5rOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICBwdXJwbGU6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgZGVlcC1wdXJwbGU6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICBpbmRpZ286IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgLy8gYmx1ZTogbWF0LiRjdXN0b20tYmx1ZS1wYWxldHRlLFxyXG4gIGJsdWU6IG1hdC4kYmx1ZS1wYWxldHRlLFxyXG4gIGxpZ2h0LWJsdWU6IG1hdC4kbGlnaHQtYmx1ZS1wYWxldHRlLFxyXG4gIGN5YW46IG1hdC4kY3lhbi1wYWxldHRlLFxyXG4gIHRlYWw6IG1hdC4kdGVhbC1wYWxldHRlLFxyXG4gIGdyZWVuOiBtYXQuJGdyZWVuLXBhbGV0dGUsXHJcbiAgbGlnaHQtZ3JlZW46IG1hdC4kbGlnaHQtZ3JlZW4tcGFsZXR0ZSxcclxuICBsaW1lOiBtYXQuJGxpbWUtcGFsZXR0ZSxcclxuICB5ZWxsb3c6IG1hdC4keWVsbG93LXBhbGV0dGUsXHJcbiAgYW1iZXI6IG1hdC4kYW1iZXItcGFsZXR0ZSxcclxuICBvcmFuZ2U6IG1hdC4kb3JhbmdlLXBhbGV0dGUsXHJcbiAgZGVlcC1vcmFuZ2U6IG1hdC4kZGVlcC1vcmFuZ2UtcGFsZXR0ZSxcclxuICBicm93bjogbWF0LiRicm93bi1wYWxldHRlLFxyXG4gIGdyYXk6IG1hdC4kZ3JheS1wYWxldHRlLFxyXG4gIGJsdWUtZ3JheTogbWF0LiRibHVlLWdyYXktcGFsZXR0ZSxcclxuICB3aGl0ZTogd2hpdGUsXHJcbiAgYmxhY2s6IGJsYWNrLFxyXG4gIGxpZ2h0OiB3aGl0ZSxcclxuICBkYXJrOiByZ2JhKGJsYWNrLCAuODcpLFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gVGhlIG1hdGVyaWFsIGRlZmF1bHQgYW5pbWF0aW9uIGN1cnZlc1xyXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xyXG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjI1LCAuOCwgLjI1LCAxKSAhZGVmYXVsdDtcclxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 15779:
/*!*******************************************************!*\
  !*** ./src/app/theme/sidebar/user-panel.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPanelComponent": () => (/* binding */ UserPanelComponent)
/* harmony export */ });
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 29722);
/* harmony import */ var _shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/info-utenti.service */ 39202);
/* harmony import */ var _shared_services_swicht_ruolo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/swicht-ruolo.service */ 8112);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);














function UserPanelComponent_mat_form_field_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sezione");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function UserPanelComponent_mat_form_field_3_Template_select_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.onRuoloSelected(_r1.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Gestione");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Amministrazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} }
class UserPanelComponent {
    constructor(infoUtentiService, router, auth, swichtRuolo) {
        this.infoUtentiService = infoUtentiService;
        this.router = router;
        this.auth = auth;
        this.swichtRuolo = swichtRuolo;
        this.idMatricola = '';
        this.idNome = '';
        this.idCognome = '';
        this.dataSource = [];
        this.isAmministratore = false;
    }
    ngOnInit() {
        /*     this.utente.getUser(this.idMatricola, this.idCognome,this.idNome).subscribe(data=> {
          this.dataSource = data;
        }) */
        this.auth.user().subscribe(user => (this.user = user));
        /*    this.infoUtentiService.infoUtente().subscribe((info: InfoUtente) => {
             this.isAmministratore = info.amministratore;
           }); */
    }
    logout() {
        this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
    }
    onRuoloSelected(ruoloSelezioninato) {
        switch (ruoloSelezioninato) {
            case 'amministratore': {
                this.swichtRuolo.SwitchRuolo(true);
                break;
            }
            case 'dirigente': {
                this.swichtRuolo.SwitchRuolo(false);
                break;
            }
            default: {
                // console.log('ruolo selezionato non valido');
                break;
            }
        }
    }
}
UserPanelComponent.ɵfac = function UserPanelComponent_Factory(t) { return new (t || UserPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_info_utenti_service__WEBPACK_IMPORTED_MODULE_1__.InfoUtentiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_swicht_ruolo_service__WEBPACK_IMPORTED_MODULE_2__.SwichtRuoloService)); };
UserPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserPanelComponent, selectors: [["app-user-panel"]], decls: 4, vars: 1, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "matero-user-panel"], [1, "row", "row-container-select-ruolo", 2, "justify-content", "center", "align-items", "center"], ["id", "conteiner-switch-ruolo", 1, "col-8", "d-flex", 2, "justify-content", "center", "align-items", "center"], ["appearance", "fill", 4, "ngIf"], ["appearance", "fill"], ["matNativeControl", "", "required", "", 3, "change"], ["ruoloSelect", ""], ["value", "dirigente"], ["value", "amministratore"]], template: function UserPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, UserPanelComponent_mat_form_field_3_Template, 9, 0, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isAmministratore);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]], styles: [".matero-user-panel[_ngcontent-%COMP%] {\n  padding: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.3);\n}\n\n.mat-select-value[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.matero-user-panel-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin-bottom: 8px;\n  border-radius: 50rem;\n  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-name[_ngcontent-%COMP%], .matero-user-panel-email[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 8px;\n  font-weight: normal;\n  background-color: transparent;\n  border-radius: 4px;\n  padding: 8px 15px;\n  margin: 8px 0;\n  border: 1px solid white;\n  color: white;\n}\n\n.matero-user-panel-name[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #2196f3;\n}\n\n.matero-user-panel-name[_ngcontent-%COMP%], .matero-user-panel-email[_ngcontent-%COMP%], .matero-user-panel-icons[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   #sceltaSezione[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   .mat-select-arrow[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  border-left: 5px solid transparent;\n  border-right: 5px solid transparent;\n  border-top: 5px solid;\n  margin: 0 4px;\n  color: white;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   .row-container-select-ruolo[_ngcontent-%COMP%] {\n  height: 15vh;\n}\n\n.matero-user-panel-icons[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxcdGhlbWVcXHNpZGViYXJcXHVzZXItcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFRSxVQUFBO0VBQ0EsaURBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDREQUFBO0FDSEY7O0FETUE7O0VBRUUsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FDSEY7O0FEUUU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUNMSjs7QURTQTs7O0VBR0UsVUFBQTtFQUNBLDBEQUFBO0FDTkY7O0FEU0E7RUFDRSxtQkFBQTtBQ05GOztBRFFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNFO0VBQ0UsdUJBQUE7QUNQSjs7QURVRTtFQUNFLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNSSjs7QURXRTtFQUNFLFlBQUE7QUNUSjs7QURZRTtFQUNFLFlBQUE7QUNWSiIsImZpbGUiOiJ1c2VyLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5cclxuLm1hdGVyby11c2VyLXBhbmVsIHtcclxuICAvL3BhZGRpbmc6IDE2cHggMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzApO1xyXG59XHJcblxyXG4ubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLyBTZXQgZGVmYXVsdCB3aWR0aCBhbmQgaGVpZ2h0IGNhbiBhdm9pZCBmbGFzaGluZyBiZWZvcmUgYXZhdGFyIGltYWdlIGxvYWRlZC5cclxuLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHJlbTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5zd2lmdC1lYXNlLW91dCh0cmFuc2Zvcm0pO1xyXG59XHJcblxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtbmFtZSxcclxuLm1hdGVyby11c2VyLXBhbmVsLWVtYWlsIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1uYW1lIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtbmFtZSxcclxuLm1hdGVyby11c2VyLXBhbmVsLWVtYWlsLFxyXG4ubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnMuc3dpZnQtZWFzZS1vdXQob3BhY2l0eSk7XHJcbn1cclxuXHJcbi5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjRweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgI3NjZWx0YVNlemlvbmUge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci10b3A6IDVweCBzb2xpZDtcclxuICAgIG1hcmdpbjogMCA0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAucm93LWNvbnRhaW5lci1zZWxlY3QtcnVvbG8ge1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG4gIH1cclxuXHJcbiAgb3B0aW9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbn0iLCIubWF0ZXJvLXVzZXItcGFuZWwge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4ubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdGVyby11c2VyLXBhbmVsLWF2YXRhciB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbn1cblxuLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDhweCAxNXB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubWF0ZXJvLXVzZXItcGFuZWwtbmFtZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzIxOTZmMztcbn1cblxuLm1hdGVyby11c2VyLXBhbmVsLW5hbWUsXG4ubWF0ZXJvLXVzZXItcGFuZWwtZW1haWwsXG4ubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xufVxuXG4ubWF0ZXJvLXVzZXItcGFuZWwtaWNvbnMge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIC5tYXQtaWNvbi1idXR0b24ge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbn1cbi5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyAjc2NlbHRhU2V6aW9uZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1hdGVyby11c2VyLXBhbmVsLWljb25zIC5yb3ctY29udGFpbmVyLXNlbGVjdC1ydW9sbyB7XG4gIGhlaWdodDogMTV2aDtcbn1cbi5tYXRlcm8tdXNlci1wYW5lbC1pY29ucyBvcHRpb246aG92ZXIge1xuICBjb2xvcjogYmxhY2s7XG59Il19 */"] });


/***/ }),

/***/ 68720:
/*!*******************************************************!*\
  !*** ./src/app/theme/sidemenu/accordion.directive.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class AccordionDirective {
  constructor(router, menu) {
    this.router = router;
    this.menu = menu;
    this.navlinks = [];
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd)).subscribe(() => this.checkOpenLinks()); // Fix opening status for async menu data

    this.menu.change().subscribe(() => {
      setTimeout(() => this.checkOpenLinks());
    });
  }

  addLink(link) {
    this.navlinks.push(link);
  }

  closeOtherLinks(openLink) {
    this.navlinks.forEach(link => {
      if (link !== openLink) {
        link.open = false;
      }
    });
  }

  removeGroup(link) {
    const index = this.navlinks.indexOf(link);

    if (index !== -1) {
      this.navlinks.splice(index, 1);
    }
  }

  checkOpenLinks() {
    this.navlinks.forEach(link => {
      if (link.group) {
        if (this.router.url.split('/').includes(link.group)) {
          link.open = true;
          this.closeOtherLinks(link);
        }
      }
    });
  }

}

AccordionDirective.ɵfac = function AccordionDirective_Factory(t) {
  return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService));
};

AccordionDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: AccordionDirective,
  selectors: [["", "navAccordion", ""]]
});

/***/ }),

/***/ 30535:
/*!***********************************************************!*\
  !*** ./src/app/theme/sidemenu/accordionItem.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionItemDirective": () => (/* binding */ AccordionItemDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 68720);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionItemDirective {
    constructor(nav) {
        this.OPEN = false;
        this.nav = nav;
    }
    get open() {
        return this.OPEN;
    }
    set open(value) {
        // Only sub menu can be open
        this.OPEN = this.type === 'sub' && value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
}
AccordionItemDirective.ɵfac = function AccordionItemDirective_Factory(t) { return new (t || AccordionItemDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionItemDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionItemDirective, selectors: [["", "navAccordionItem", ""]], hostVars: 2, hostBindings: function AccordionItemDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("open", ctx.open);
    } }, inputs: { group: "group", type: "type", open: "open" } });


/***/ }),

/***/ 99483:
/*!*************************************************************!*\
  !*** ./src/app/theme/sidemenu/accordionanchor.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionItem_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionItem.directive */ 30535);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionItem_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionItemDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "navAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 90928:
/*!******************************************************!*\
  !*** ./src/app/theme/sidemenu/sidemenu.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidemenuComponent": () => (/* binding */ SidemenuComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 68720);
/* harmony import */ var _accordionItem_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordionItem.directive */ 30535);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accordionanchor.directive */ 99483);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 55434);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















const _c0 = function (a0) {
  return [a0];
};

const _c1 = function (a0, a1) {
  return {
    item: a0,
    level: a1
  };
};

function SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const parentRoute_r5 = ctx_r16.parentRoute;
    const level_r6 = ctx_r16.level;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r11.buildRoute(parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](4, _c0, menuItem_r8.route))))("matRippleDisabled", !ctx_r11.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, menuItem_r8, level_r6));
  }
}

function SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().level;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r12.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
  }
}

function SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().level;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("href", menuItem_r8.route, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"])("matRippleDisabled", !ctx_r13.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c1, menuItem_r8, level_r6));
  }
}

function SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](1, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const level_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().level;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRippleDisabled", !ctx_r14.ripple);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r2)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](3, _c1, menuItem_r8, level_r6));
  }
}

const _c2 = function (a0, a1, a2) {
  return {
    menuList: a0,
    parentRoute: a1,
    level: a2
  };
};

function SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_2_Template, 2, 9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_3_Template, 2, 7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_4_Template, 2, 7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_a_5_Template, 2, 6, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](6, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const parentRoute_r5 = ctx_r24.parentRoute;
    const level_r6 = ctx_r24.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("group", menuItem_r8.route)("type", menuItem_r8.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r8.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r8.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", menuItem_r8.type === "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](10, _c2, menuItem_r8.children, parentRoute_r5.concat(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](8, _c0, menuItem_r8.route)), level_r6 + 1));
  }
}

function SidemenuComponent_ng_template_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_ng_container_1_Template, 7, 14, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuItem_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.checkPermissions(menuItem_r8, ctx_r7.userRole));
  }
}

function SidemenuComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidemenuComponent_ng_template_2_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuList_r4 = ctx.menuList;
    const level_r6 = ctx.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate2"]("matero-sidemenu ", level_r6 > 0 ? "matero-sidemenu-sub" : "", " level-", level_r6, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", menuList_r4);
  }
}

function SidemenuComponent_ng_template_4_mat_icon_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r25.icon);
  }
}

function SidemenuComponent_ng_template_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("menu-label bg-", item_r25.label.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25.label.value, " ");
  }
}

function SidemenuComponent_ng_template_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("menu-badge bg-", item_r25.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25.badge.value, " ");
  }
}

function SidemenuComponent_ng_template_4_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r25.type === "sub" ? "arrow_drop_down" : "launch", " ");
  }
}

function SidemenuComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidemenuComponent_ng_template_4_mat_icon_0_Template, 2, 1, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidemenuComponent_ng_template_4_span_4_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidemenuComponent_ng_template_4_span_6_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, SidemenuComponent_ng_template_4_mat_icon_7_Template, 2, 1, "mat-icon", 19);
  }

  if (rf & 2) {
    const item_r25 = ctx.item;
    const level_r26 = ctx.level;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", level_r26 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 5, item_r25.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r25.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r25.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r25.type !== "link");
  }
}

const _c3 = function () {
  return [];
};

const _c4 = function (a0, a1) {
  return {
    menuList: a0,
    parentRoute: a1,
    level: 0
  };
};

class SidemenuComponent {
  constructor(menu, storageService, permissionsService) {
    this.menu = menu;
    this.storageService = storageService;
    this.permissionsService = permissionsService; // NOTE: Ripple effect make page flashing on mobile

    this.ripple = false;
    this.userRoles = '';
    this.userRole = '';
    this.menuItems = [];
    this.menu$ = this.menu.getAll();
    this.buildRoute = this.menu.buildRoute;
    this.isAmministrator = false;
  }

  ngOnInit() {
    this.userRole = this.storageService.getItem('allroles');
    this.ruoloSubscription = this.menu$.subscribe(menuItems => {
      this.menuItems = this.filterMenuItems(menuItems, this.userRole);
      this.setPermissions(this.userRole);
    });
  }

  filterMenuItems(menuItems, ruolo) {
    return menuItems.filter(item => this.checkPermissions(item, ruolo));
  }

  checkPermissions(item, ruolo) {
    // Controlla se l'elemento del menu è accessibile per il ruolo specificato
    return !!item.permissions && !!item.permissions.only && item.permissions.only.includes(ruolo);
  }

  setPermissions(ruolo) {
    // Carica i permessi in base al ruolo corrente dell'utente
    this.permissionsService.loadPermissions([ruolo]);
  }

  ngOnDestroy() {}

}

SidemenuComponent.ɵfac = function SidemenuComponent_Factory(t) {
  return new (t || SidemenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_permissions__WEBPACK_IMPORTED_MODULE_6__.NgxPermissionsService));
};

SidemenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: SidemenuComponent,
  selectors: [["app-sidemenu"]],
  inputs: {
    ripple: "ripple"
  },
  decls: 6,
  vars: 8,
  consts: [[3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuListTpl", ""], ["linkTypeTpl", ""], ["navAccordion", ""], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["navAccordionItem", "", "routerLinkActive", "active", 1, "matero-sidemenu-item", 3, "group", "type"], ["class", "matero-sidemenu-link", "matRipple", "", 3, "routerLink", "matRippleDisabled", 4, "ngIf"], ["class", "matero-sidemenu-link", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["class", "matero-sidemenu-link", "target", "_blank", "matRipple", "", 3, "href", "matRippleDisabled", 4, "ngIf"], ["navAccordionToggle", "", "class", "matero-sidemenu-toggle", "matRipple", "", 3, "matRippleDisabled", 4, "ngIf"], ["matRipple", "", 1, "matero-sidemenu-link", 3, "routerLink", "matRippleDisabled"], ["matRipple", "", 1, "matero-sidemenu-link", 3, "href", "matRippleDisabled"], ["target", "_blank", "matRipple", "", 1, "matero-sidemenu-link", 3, "href", "matRippleDisabled"], ["navAccordionToggle", "", "matRipple", "", 1, "matero-sidemenu-toggle", 3, "matRippleDisabled"], ["class", "menu-icon", 4, "ngIf"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["fxFlex", ""], ["class", "menu-caret", 4, "ngIf"], [1, "menu-icon"], [1, "menu-caret"]],
  template: function SidemenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0, 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidemenuComponent_ng_template_2_Template, 2, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SidemenuComponent_ng_template_4_Template, 8, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](5, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.menu$), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c3)));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgTemplateOutlet, _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _accordionItem_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionItemDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatRipple, _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_4__.AccordionAnchorDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: [".matero-sidemenu {\n  width: 240px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.matero-sidemenu .matero-sidemenu-item {\n  display: block;\n  height: auto;\n  padding: 0;\n}\n.matero-sidemenu .matero-sidemenu-item.open > .matero-sidemenu {\n  max-height: 2000px;\n}\n.matero-sidemenu .matero-sidemenu-item.open > .matero-sidemenu-toggle > .menu-caret {\n  transform: rotate(-180deg);\n}\n.matero-sidemenu.matero-sidemenu-sub {\n  max-height: 0;\n  padding-top: 0;\n  overflow: hidden;\n  transform: translateZ(0) !important;\n  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.matero-sidemenu.matero-sidemenu-sub .matero-sidemenu-item {\n  border-left-width: 0;\n}\n.matero-sidemenu a {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 40px;\n  padding: 0 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.matero-sidemenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 16px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-sidemenu .mat-icon.menu-icon {\n  margin-right: auto;\n  margin-left: 16px;\n}\n.matero-sidemenu .mat-icon.menu-caret {\n  display: block;\n  text-align: center;\n  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n.matero-sidemenu .menu-name,\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  font-size: 18px;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n.matero-sidemenu .menu-label,\n.matero-sidemenu .menu-badge {\n  display: inline-block;\n  min-width: 18px;\n  padding: 0.35em 0.65em;\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.75em;\n  line-height: 1;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: baseline;\n  background-color: #757575;\n  border-radius: 4px;\n}\n.matero-sidemenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-sidemenu.level-0 > li > a > .menu-name {\n  margin-right: 5px;\n}\n[dir=rtl] .matero-sidemenu.level-0 > li > a > .menu-name {\n  margin-right: auto;\n  margin-left: 5px;\n}\n.matero-sidemenu.level-1 > li > a {\n  padding-left: 50px;\n}\n[dir=rtl] .matero-sidemenu.level-1 > li > a {\n  padding-right: 50px;\n  padding-left: 16px;\n}\n.matero-sidemenu.level-2 > li > a {\n  padding-left: 64px;\n}\n[dir=rtl] .matero-sidemenu.level-2 > li > a {\n  padding-right: 64px;\n  padding-left: 16px;\n}\n.matero-sidemenu.level-2 [class^=level-] > li > a {\n  padding-left: 80px;\n}\n[dir=rtl] .matero-sidemenu.level-2 [class^=level-] > li > a {\n  padding-right: 80px;\n  padding-left: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwiLi5cXHN0eWxlXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxcdGhlbWVcXHNpZGVtZW51XFxzaWRlbWVudS5jb21wb25lbnQuc2NzcyIsIi4uXFxzdHlsZVxcX2JhZGdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxZQ0NjO0VEQWQsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBRUhGO0FGS0U7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUVISjtBRk1NO0VBQ0Usa0JBQUE7QUVKUjtBRk9NO0VBQ0UsMEJBQUE7QUVMUjtBRlVFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1DQUFBO0VBQ0EseURBQUE7QUVSSjtBRlVJO0VBQ0Usb0JBQUE7QUVSTjtBRnVCRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QUV0Qko7QUZ5QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FFdkJKO0FGeUJJO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBRXZCTjtBRjJCRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0FFekJKO0FGNkJFOzs7RUFHRSxlQUFBO0VBQ0EsMERBQUE7QUUzQko7QUY4QkU7O0VHdEZBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBRDRERjtBRm9CRTtFQUNFLG9CQUFBO0FFbEJKO0FGcUJFO0VBQ0UsaUJBQUE7QUVuQko7QUZxQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FFbkJOO0FGdUJFO0VBQ0Usa0JBQUE7QUVyQko7QUZ1Qkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FFckJOO0FGeUJFO0VBQ0Usa0JBQUE7QUV2Qko7QUZ5Qkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FFdkJOO0FGMkJFO0VBQ0Usa0JBQUE7QUV6Qko7QUYyQkk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FFekJOIiwiZmlsZSI6InNpZGVtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnLi4vc3R5bGUvdmFyaWFibGVzJztcclxuQHVzZSAnLi4vc3R5bGUvdHJhbnNpdGlvbnMnO1xyXG5AdXNlICcuLi9zdHlsZS9iYWRnZScgYXMgKjtcclxuXHJcbi5tYXRlcm8tc2lkZW1lbnUge1xyXG4gIHdpZHRoOiB2YXJpYWJsZXMuJHNpZGVuYXYtd2lkdGg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgLm1hdGVyby1zaWRlbWVudS1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAmLm9wZW4ge1xyXG4gICAgICA+IC5tYXRlcm8tc2lkZW1lbnUge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgPiAubWF0ZXJvLXNpZGVtZW51LXRvZ2dsZSA+IC5tZW51LWNhcmV0IHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5tYXRlcm8tc2lkZW1lbnUtc3ViIHtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLmZhc3Qtb3V0LXNsb3cobWF4LWhlaWdodCk7XHJcblxyXG4gICAgLm1hdGVyby1zaWRlbWVudS1pdGVtIHtcclxuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLy8gLy8gQ1NTIHBlciBsZSB2b2NpIGRpIG1lbnUgcHJpbmNpcGFsaVxyXG4vLyAubWF0ZXJvLXNpZGVtZW51LmxldmVsLTAgLm1hdGVyby1zaWRlbWVudS1saW5rIHtcclxuLy8gICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDsgLy8gRm9udCBzaXplIHBlciBpbCBtZW51IHByaW5jaXBhbGVcclxuLy8gfVxyXG5cclxuLy8gLy8gQ1NTIHBlciBsZSBzb3R0b3ZvY2kgZGkgbWVudVxyXG4vLyAubWF0ZXJvLXNpZGVtZW51LmxldmVsLTEgLm1hdGVyby1zaWRlbWVudS1saW5rLFxyXG4vLyAubWF0ZXJvLXNpZGVtZW51LmxldmVsLTIgLm1hdGVyby1zaWRlbWVudS1saW5rIHtcclxuLy8gICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgLy8gRm9udCBzaXplIHBlciBsZSBzb3R0b3ZvY2lcclxuLy8gfVxyXG5cclxuICBhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC8vaGVpZ2h0OiA0OHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgIFtkaXI9J3J0bCddICYge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtY2FyZXQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9ucy5mYXN0LW91dC1zbG93KHRyYW5zZm9ybSk7XHJcbiAgfVxyXG5cclxuICBcclxuICAubWVudS1uYW1lLFxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zLnN3aWZ0LWVhc2Utb3V0KG9wYWNpdHkpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtbGFiZWwsXHJcbiAgLm1lbnUtYmFkZ2Uge1xyXG4gICAgQGluY2x1ZGUgYmFkZ2UoKTtcclxuICB9XHJcblxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0wID4gbGkgPiBhID4gLm1lbnUtbmFtZSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0xID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0yID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogNjRweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNjRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5sZXZlbC0yIFtjbGFzc149J2xldmVsLSddID4gbGkgPiBhIHtcclxuICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4vLyBMYXlvdXRcclxuJGd1dHRlcjogMjBweCAhZGVmYXVsdDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI0MHB4ICFkZWZhdWx0O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDcwcHggIWRlZmF1bHQ7XHJcbiRzaWRlbmF2LXdpZHRoLW1vYmlsZTogMjgwcHggIWRlZmF1bHQ7XHJcblxyXG4vLyBUb29sYmFyXHJcbiR0b29sYmFyLWhlaWdodC1kZXNrdG9wOiA2NHB4ICFkZWZhdWx0O1xyXG4kdG9vbGJhci1oZWlnaHQtbW9iaWxlOiA1NnB4ICFkZWZhdWx0O1xyXG5cclxuLy8gVG9wbWVudVxyXG4kdG9wbWVudS1zdGlja3ktcG9zaXRpb24tZGVza3RvcDogJHRvb2xiYXItaGVpZ2h0LWRlc2t0b3AgIWRlZmF1bHQ7XHJcbiR0b3BtZW51LXN0aWNreS1wb3NpdGlvbi1tb2JpbGU6ICR0b29sYmFyLWhlaWdodC1tb2JpbGUgIWRlZmF1bHQ7XHJcblxyXG4vLyBUeXBvZ3JhcGh5XHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAnUm9ib3RvJywgJ0hlbHZldGljYSBOZXVlIExpZ2h0JywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCxcclxuICAnTHVjaWRhIEdyYW5kZScsIHNhbnMtc2VyaWYgIWRlZmF1bHQ7XHJcbiRmb250LWZhbWlseS1tb25vc3BhY2U6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZSAhZGVmYXVsdDtcclxuJGZvbnQtZmFtaWx5LWJhc2U6ICRmb250LWZhbWlseS1zYW5zLXNlcmlmICFkZWZhdWx0O1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuLy9cclxuLy8gRGVmaW5lIHRoZSBtaW5pbXVtIGRpbWVuc2lvbnMgYXQgd2hpY2ggeW91ciBsYXlvdXQgd2lsbCBjaGFuZ2UsXHJcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cclxuJGJyZWFrcG9pbnRzOiAoXHJcbiAgeHNtYWxsOiAwLFxyXG4gIHNtYWxsOiAgNjAwcHgsXHJcbiAgbWVkaXVtOiA5NjBweCxcclxuICBsYXJnZTogIDEyODBweCxcclxuICB4bGFyZ2U6IDE5MjBweFxyXG4pICFkZWZhdWx0O1xyXG5cclxuLy8gJGN1c3RvbS1ibHVlLXBhbGV0dGU6IChcclxuLy8gICA1MDogICNlM2YyZmQsXHJcbi8vICAgMTAwOiAjYmJkZWZiLFxyXG4vLyAgIDIwMDogIzkwY2FmOSxcclxuLy8gICAzMDA6ICM2NGI1ZjYsXHJcbi8vICAgNDAwOiAjNDJhNWY1LFxyXG4vLyAgIDUwMDogIzIxOTZmMywgXHJcbi8vICAgNTUwOiAjMmY2ZGQ1LCAvLyBibHUgYXVkaXRcclxuLy8gICA2MDA6ICMxZTg4ZTUsXHJcbi8vICAgNzAwOiAjMTk3NmQyLFxyXG4vLyAgIDgwMDogIzE1NjVjMCxcclxuLy8gICA5MDA6ICMwZDQ3YTEsXHJcbi8vICAgQTEwMDogIzgyYjFmZixcclxuLy8gICBBMjAwOiAjNDQ4YWZmLFxyXG4vLyAgIEE0MDA6ICMyOTc5ZmYsXHJcbi8vICAgQTcwMDogIzI5NjJmZlxyXG4vLyApO1xyXG5cclxuLy8gTWF0ZXJpYWwgY29sb3JzXHJcbiRtYXQtY29sb3JzOiAoXHJcbiAgcmVkOiBtYXQuJHJlZC1wYWxldHRlLFxyXG4gIHBpbms6IG1hdC4kcGluay1wYWxldHRlLFxyXG4gIHB1cnBsZTogbWF0LiRwdXJwbGUtcGFsZXR0ZSxcclxuICBkZWVwLXB1cnBsZTogbWF0LiRkZWVwLXB1cnBsZS1wYWxldHRlLFxyXG4gIGluZGlnbzogbWF0LiRpbmRpZ28tcGFsZXR0ZSxcclxuICAvLyBibHVlOiBtYXQuJGN1c3RvbS1ibHVlLXBhbGV0dGUsXHJcbiAgYmx1ZTogbWF0LiRibHVlLXBhbGV0dGUsXHJcbiAgbGlnaHQtYmx1ZTogbWF0LiRsaWdodC1ibHVlLXBhbGV0dGUsXHJcbiAgY3lhbjogbWF0LiRjeWFuLXBhbGV0dGUsXHJcbiAgdGVhbDogbWF0LiR0ZWFsLXBhbGV0dGUsXHJcbiAgZ3JlZW46IG1hdC4kZ3JlZW4tcGFsZXR0ZSxcclxuICBsaWdodC1ncmVlbjogbWF0LiRsaWdodC1ncmVlbi1wYWxldHRlLFxyXG4gIGxpbWU6IG1hdC4kbGltZS1wYWxldHRlLFxyXG4gIHllbGxvdzogbWF0LiR5ZWxsb3ctcGFsZXR0ZSxcclxuICBhbWJlcjogbWF0LiRhbWJlci1wYWxldHRlLFxyXG4gIG9yYW5nZTogbWF0LiRvcmFuZ2UtcGFsZXR0ZSxcclxuICBkZWVwLW9yYW5nZTogbWF0LiRkZWVwLW9yYW5nZS1wYWxldHRlLFxyXG4gIGJyb3duOiBtYXQuJGJyb3duLXBhbGV0dGUsXHJcbiAgZ3JheTogbWF0LiRncmF5LXBhbGV0dGUsXHJcbiAgYmx1ZS1ncmF5OiBtYXQuJGJsdWUtZ3JheS1wYWxldHRlLFxyXG4gIHdoaXRlOiB3aGl0ZSxcclxuICBibGFjazogYmxhY2ssXHJcbiAgbGlnaHQ6IHdoaXRlLFxyXG4gIGRhcms6IHJnYmEoYmxhY2ssIC44NyksXHJcbikgIWRlZmF1bHQ7XHJcblxyXG4vLyBUaGUgbWF0ZXJpYWwgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzXHJcbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XHJcbiRzd2lmdC1lYXNlLW91dC10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjUsIC44LCAuMjUsIDEpICFkZWZhdWx0O1xyXG4iLCIubWF0ZXJvLXNpZGVtZW51IHtcbiAgd2lkdGg6IDI0MHB4O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ubWF0ZXJvLXNpZGVtZW51IC5tYXRlcm8tc2lkZW1lbnUtaXRlbSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG4ubWF0ZXJvLXNpZGVtZW51IC5tYXRlcm8tc2lkZW1lbnUtaXRlbS5vcGVuID4gLm1hdGVyby1zaWRlbWVudSB7XG4gIG1heC1oZWlnaHQ6IDIwMDBweDtcbn1cbi5tYXRlcm8tc2lkZW1lbnUgLm1hdGVyby1zaWRlbWVudS1pdGVtLm9wZW4gPiAubWF0ZXJvLXNpZGVtZW51LXRvZ2dsZSA+IC5tZW51LWNhcmV0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTE4MGRlZyk7XG59XG4ubWF0ZXJvLXNpZGVtZW51Lm1hdGVyby1zaWRlbWVudS1zdWIge1xuICBtYXgtaGVpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbn1cbi5tYXRlcm8tc2lkZW1lbnUubWF0ZXJvLXNpZGVtZW51LXN1YiAubWF0ZXJvLXNpZGVtZW51LWl0ZW0ge1xuICBib3JkZXItbGVmdC13aWR0aDogMDtcbn1cbi5tYXRlcm8tc2lkZW1lbnUgYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXRlcm8tc2lkZW1lbnUgLm1hdC1pY29uLm1lbnUtaWNvbiB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLXNpZGVtZW51IC5tYXQtaWNvbi5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuLm1hdGVyby1zaWRlbWVudSAubWF0LWljb24ubWVudS1jYXJldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuLm1hdGVyby1zaWRlbWVudSAubWVudS1uYW1lLFxuLm1hdGVyby1zaWRlbWVudSAubWVudS1sYWJlbCxcbi5tYXRlcm8tc2lkZW1lbnUgLm1lbnUtYmFkZ2Uge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG59XG4ubWF0ZXJvLXNpZGVtZW51IC5tZW51LWxhYmVsLFxuLm1hdGVyby1zaWRlbWVudSAubWVudS1iYWRnZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWluLXdpZHRoOiAxOHB4O1xuICBwYWRkaW5nOiAwLjM1ZW0gMC42NWVtO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLm1hdGVyby1zaWRlbWVudSAubWVudS1iYWRnZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xufVxuLm1hdGVyby1zaWRlbWVudS5sZXZlbC0wID4gbGkgPiBhID4gLm1lbnUtbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuW2Rpcj1ydGxdIC5tYXRlcm8tc2lkZW1lbnUubGV2ZWwtMCA+IGxpID4gYSA+IC5tZW51LW5hbWUge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG4ubWF0ZXJvLXNpZGVtZW51LmxldmVsLTEgPiBsaSA+IGEge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG59XG5bZGlyPXJ0bF0gLm1hdGVyby1zaWRlbWVudS5sZXZlbC0xID4gbGkgPiBhIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLm1hdGVyby1zaWRlbWVudS5sZXZlbC0yID4gbGkgPiBhIHtcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xufVxuW2Rpcj1ydGxdIC5tYXRlcm8tc2lkZW1lbnUubGV2ZWwtMiA+IGxpID4gYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDY0cHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbi5tYXRlcm8tc2lkZW1lbnUubGV2ZWwtMiBbY2xhc3NePWxldmVsLV0gPiBsaSA+IGEge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59XG5bZGlyPXJ0bF0gLm1hdGVyby1zaWRlbWVudS5sZXZlbC0yIFtjbGFzc149bGV2ZWwtXSA+IGxpID4gYSB7XG4gIHBhZGRpbmctcmlnaHQ6IDgwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn0iLCJAbWl4aW4gYmFkZ2UoKSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1pbi13aWR0aDogMThweDtcclxuICBwYWRkaW5nOiAuMzVlbSAuNjVlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogLjc1ZW07XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 85056:
/*!***************************************!*\
  !*** ./src/app/theme/theme.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeModule": () => (/* binding */ ThemeModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout/admin-layout.component */ 36200);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 84951);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 9295);
/* harmony import */ var _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar/user-panel.component */ 15779);
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ 90928);
/* harmony import */ var _sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenu/accordion.directive */ 68720);
/* harmony import */ var _sidemenu_accordionItem_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidemenu/accordionItem.directive */ 30535);
/* harmony import */ var _sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidemenu/accordionanchor.directive */ 99483);
/* harmony import */ var _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar-notice/sidebar-notice.component */ 15283);
/* harmony import */ var _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./topmenu/topmenu.component */ 75242);
/* harmony import */ var _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topmenu/topmenu-panel.component */ 38863);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./header/header.component */ 25868);
/* harmony import */ var _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./widgets/branding.component */ 21010);
/* harmony import */ var _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./widgets/notification.component */ 17393);
/* harmony import */ var _widgets_translate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widgets/translate.component */ 90725);
/* harmony import */ var _widgets_user_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./widgets/user.component */ 94295);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



























class ThemeModule {
}
ThemeModule.ɵfac = function ThemeModule_Factory(t) { return new (t || ThemeModule)(); };
ThemeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: ThemeModule });
ThemeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](ThemeModule, { declarations: [_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_1__.AdminLayoutComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_2__.AuthLayoutComponent,
        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent,
        _sidebar_user_panel_component__WEBPACK_IMPORTED_MODULE_4__.UserPanelComponent,
        _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_5__.SidemenuComponent,
        _sidemenu_accordion_directive__WEBPACK_IMPORTED_MODULE_6__.AccordionDirective,
        _sidemenu_accordionItem_directive__WEBPACK_IMPORTED_MODULE_7__.AccordionItemDirective,
        _sidemenu_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_8__.AccordionAnchorDirective,
        _sidebar_notice_sidebar_notice_component__WEBPACK_IMPORTED_MODULE_9__.SidebarNoticeComponent,
        _topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent,
        _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_12__.HeaderComponent,
        _widgets_branding_component__WEBPACK_IMPORTED_MODULE_13__.BrandingComponent,
        _widgets_notification_component__WEBPACK_IMPORTED_MODULE_14__.NotificationComponent,
        _widgets_translate_component__WEBPACK_IMPORTED_MODULE_15__.TranslateComponent,
        _widgets_user_component__WEBPACK_IMPORTED_MODULE_16__.UserComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetComponentScope"](_topmenu_topmenu_component__WEBPACK_IMPORTED_MODULE_10__.TopmenuComponent, [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_19__.MatTabNav, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, ngx_permissions__WEBPACK_IMPORTED_MODULE_20__.NgxPermissionsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgTemplateOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatAnchor, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _topmenu_topmenu_panel_component__WEBPACK_IMPORTED_MODULE_11__.TopmenuPanelComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__.MatIcon], [_angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe]);


/***/ }),

/***/ 38863:
/*!**********************************************************!*\
  !*** ./src/app/theme/topmenu/topmenu-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopmenuPanelComponent": () => (/* binding */ TopmenuPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-permissions */ 16562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













const _c0 = function (a0) { return [a0]; };
function TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.onRouterLinkClick(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _r8.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r4.buildRoute(ctx_r4.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c0, item_r1.route))));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, item_r1.name), " ");
} }
function TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r1.name));
} }
function TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10)(1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "launch");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", item_r1.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r1.name));
} }
function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-topmenu-panel", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const index_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.onRouteChange($event, index_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r2 = ctx_r18.index;
    const item_r1 = ctx_r18.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r7.menuStates[index_r2].active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r14.menuPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 7, item_r1.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", item_r1.children)("parentRoute", ctx_r7.parentRoute.concat(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, item_r1.route)))("level", ctx_r7.level + 1);
} }
function TopmenuPanelComponent_ng_container_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuPanelComponent_ng_container_1_ng_template_1_button_0_Template, 4, 8, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_a_1_Template, 6, 4, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuPanelComponent_ng_container_1_ng_template_1_a_2_Template, 6, 4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuPanelComponent_ng_container_1_ng_template_1_button_3_Template, 5, 11, "button", 5);
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.type === "sub");
} }
function TopmenuPanelComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", item_r1.permissions == null ? null : item_r1.permissions.only)("ngxPermissionsExcept", item_r1.permissions == null ? null : item_r1.permissions.except);
} }
class TopmenuPanelComponent {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
        this.items = [];
        this.parentRoute = [];
        this.level = 1;
        this.routeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.menuStates = [];
        this.buildRoute = this.menu.buildRoute;
    }
    ngOnInit() {
        this.items.forEach(item => {
            this.menuStates.push({ active: this.checkRoute(item), route: item.route });
        });
    }
    ngOnDestroy() {
        var _a;
        (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
    checkRoute(item) {
        if (!item.route) {
            return this.checkChildRoute(item.children);
        }
        else {
            return this.router.url.split('/').includes(item.route);
        }
    }
    checkChildRoute(menuItems) {
        return menuItems.some(child => {
            if (this.router.url.split('/').includes(child.route)) {
                return true;
            }
            if (!child.route && child.children) {
                this.checkChildRoute(child.children);
            }
            return false;
        });
    }
    onRouterLinkClick(rla) {
        this.routeChange.emit(rla);
    }
    onRouteChange(rla, index) {
        var _a;
        this.routeChange.emit(rla);
        (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
        this.routerSubscription = this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd))
            .subscribe(e => {
            this.menuStates.forEach(item => (item.active = false));
            setTimeout(() => (this.menuStates[index].active = rla.isActive));
        });
    }
}
TopmenuPanelComponent.ɵfac = function TopmenuPanelComponent_Factory(t) { return new (t || TopmenuPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
TopmenuPanelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TopmenuPanelComponent, selectors: [["app-topmenu-panel"]], viewQuery: function TopmenuPanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.menuPanel = _t.first);
    } }, inputs: { items: "items", parentRoute: "parentRoute", level: "level" }, outputs: { routeChange: "routeChange" }, decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "active", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-menu-item", "", "routerLinkActive", "", 3, "routerLink", "click"], ["rla", "routerLinkActive"], ["mat-menu-item", "", 3, "href"], [1, "menu-name"], ["mat-menu-item", "", "target", "_blank", 3, "href"], ["mat-menu-item", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""]], template: function TopmenuPanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuPanelComponent_ng_container_1_Template, 2, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_permissions__WEBPACK_IMPORTED_MODULE_6__.NgxPermissionsDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, TopmenuPanelComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 75242:
/*!****************************************************!*\
  !*** ./src/app/theme/topmenu/topmenu.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopmenuComponent": () => (/* binding */ TopmenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 60116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);







const _c0 = function (a0) {
  return [a0];
};

const _c1 = function (a0) {
  return {
    item: a0
  };
};

function TopmenuComponent_ng_container_1_ng_template_1_button_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", ctx_r6.buildRoute(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, menuItem_r3.route)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c1, menuItem_r3));
  }
}

function TopmenuComponent_ng_container_1_ng_template_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r3));
  }
}

function TopmenuComponent_ng_container_1_ng_template_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", menuItem_r3.route, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, menuItem_r3));
  }
}

function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](1, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-topmenu-panel", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("routeChange", function TopmenuComponent_ng_container_1_ng_template_1_button_3_Template_app_topmenu_panel_routeChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16);
      const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return ctx_r14.onRouteChange($event, index_r4);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    const index_r4 = ctx_r17.index;
    const menuItem_r3 = ctx_r17.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx_r9.menuStates[index_r4].active);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r13.menuPanel);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c1, menuItem_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", menuItem_r3.children)("parentRoute", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, menuItem_r3.route))("level", 1);
  }
}

function TopmenuComponent_ng_container_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, TopmenuComponent_ng_container_1_ng_template_1_button_0_Template, 2, 7, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_a_1_Template, 2, 5, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TopmenuComponent_ng_container_1_ng_template_1_a_2_Template, 2, 5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuComponent_ng_container_1_ng_template_1_button_3_Template, 4, 12, "button", 7);
  }

  if (rf & 2) {
    const menuItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "extLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "extTabLink");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuItem_r3.type === "sub");
  }
}

function TopmenuComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_ng_template_1_Template, 4, 4, "ng-template", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const menuItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxPermissionsOnly", menuItem_r3.permissions == null ? null : menuItem_r3.permissions.only)("ngxPermissionsExcept", menuItem_r3.permissions == null ? null : menuItem_r3.permissions.except);
  }
}

function TopmenuComponent_ng_template_3_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge menu-label bg-", item_r19.label.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.label.value, " ");
  }
}

function TopmenuComponent_ng_template_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMapInterpolate1"]("badge menu-badge bg-", item_r19.badge.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.badge.value, " ");
  }
}

function TopmenuComponent_ng_template_3_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r19.type === "sub" ? "arrow_drop_down" : "launch", " ");
  }
}

function TopmenuComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TopmenuComponent_ng_template_3_span_5_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, TopmenuComponent_ng_template_3_span_6_Template, 2, 4, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, TopmenuComponent_ng_template_3_mat_icon_7_Template, 2, 1, "mat-icon", 18);
  }

  if (rf & 2) {
    const item_r19 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r19.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, item_r19.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r19.type !== "link");
  }
}

class TopmenuComponent {
  constructor(menu, router) {
    this.menu = menu;
    this.router = router;
    this.menu$ = this.menu.getAll();
    this.buildRoute = this.menu.buildRoute;
    this.menuList = [];
    this.menuStates = [];
    this.menuSubscription = this.menu$.subscribe(res => {
      this.menuList = res;
      this.menuList.forEach(item => {
        this.menuStates.push({
          active: this.router.url.split('/').includes(item.route),
          route: item.route
        });
      });
    });
  }

  ngOnDestroy() {
    var _a;

    this.menuSubscription.unsubscribe();
    (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
  }

  onRouteChange(rla, index) {
    var _a;

    (_a = this.routerSubscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this.routerSubscription = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(e => {
      this.menuStates.forEach(item => item.active = false);
      setTimeout(() => this.menuStates[index].active = rla.isActive);
    });
  }

}

TopmenuComponent.ɵfac = function TopmenuComponent_Factory(t) {
  return new (t || TopmenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.MenuService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};

TopmenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: TopmenuComponent,
  selectors: [["app-topmenu"]],
  hostAttrs: [1, "matero-topmenu"],
  decls: 5,
  vars: 3,
  consts: [["mat-tab-nav-bar", ""], [4, "ngFor", "ngForOf"], ["linkTypeTpl", ""], [3, "ngxPermissionsOnly", "ngxPermissionsExcept"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["mat-button", "", 3, "href", 4, "ngIf"], ["mat-button", "", "target", "_blank", 3, "href", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor", "active", 4, "ngIf"], ["mat-button", "", "routerLinkActive", "active", 3, "routerLink"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-button", "", 3, "href"], ["mat-button", "", "target", "_blank", 3, "href"], ["mat-button", "", "routerLinkActive", "active", 3, "matMenuTriggerFor"], [3, "items", "parentRoute", "level", "routeChange"], ["submenu", ""], [1, "menu-icon"], [1, "menu-name"], [3, "class", 4, "ngIf"], ["class", "menu-caret", 4, "ngIf"], [1, "menu-caret"]],
  template: function TopmenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TopmenuComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TopmenuComponent_ng_template_3_Template, 8, 7, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx.menu$));
    }
  },
  styles: [".matero-topmenu {\n  position: sticky;\n  z-index: 200;\n  display: block;\n  padding: 8px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n.matero-topmenu .mat-icon.menu-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 8px;\n  font-size: 18px;\n  line-height: 18px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-icon {\n  margin-right: auto;\n  margin-left: 8px;\n}\n.matero-topmenu .mat-icon.menu-caret {\n  margin-right: -8px;\n}\n[dir=rtl] .matero-topmenu .mat-icon.menu-caret {\n  margin-right: auto;\n  margin-left: -8px;\n}\n.matero-topmenu .menu-label,\n.matero-topmenu .menu-badge {\n  margin-left: 8px;\n  font-size: 12px;\n}\n[dir=rtl] .matero-topmenu .menu-label,\n[dir=rtl] .matero-topmenu .menu-badge {\n  margin-right: 8px;\n  margin-left: auto;\n}\n.matero-topmenu .menu-badge {\n  border-radius: 50rem;\n}\n.matero-topmenu .mat-tab-nav-bar,\n.matero-topmenu .mat-tab-header {\n  border-bottom: none;\n}\n.mat-menu-item .menu-name {\n  margin-right: 8px;\n  vertical-align: middle;\n}\n[dir=rtl] .mat-menu-item .menu-name {\n  margin-right: auto;\n  margin-left: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvcG1lbnUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcbm9kZV9tb2R1bGVzXFxAYW5ndWxhclxcbWF0ZXJpYWxcXGNvcmVcXHN0eWxlXFxfZWxldmF0aW9uLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxcdGhlbWVcXHRvcG1lbnVcXHRvcG1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQ3VKQSx5SEFBQTtBQ3ZKRjtBRklFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRUZKO0FGSUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FFRk47QUZNRTtFQUNFLGtCQUFBO0FFSko7QUZNSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUVKTjtBRlFFOztFQUVFLGdCQUFBO0VBQ0EsZUFBQTtBRU5KO0FGUUk7O0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBRUxOO0FGU0U7RUFDRSxvQkFBQTtBRVBKO0FGVUU7O0VBRUUsbUJBQUE7QUVSSjtBRmFFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBRVZKO0FGWUk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FFVk4iLCJmaWxlIjoidG9wbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG4ubWF0ZXJvLXRvcG1lbnUge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgei1pbmRleDogMjAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbigyKTtcclxuXHJcbiAgLm1hdC1pY29uLm1lbnUtaWNvbiB7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcclxuICAgIG1hcmdpbi1yaWdodDogLThweDtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLThweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsLFxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgW2Rpcj0ncnRsJ10gJiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWJhZGdlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdC10YWItbmF2LWJhcixcclxuICAubWF0LXRhYi1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtbWVudS1pdGVtIHtcclxuICAubWVudS1uYW1lIHtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbiAgICBbZGlyPSdydGwnXSAmIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1hdGgnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ3ZhcmlhYmxlcyc7XG5cblxuLy8gQSBjb2xsZWN0aW9uIG9mIG1peGlucyBhbmQgQ1NTIGNsYXNzZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBlbGV2YXRpb24gdG8gYSBtYXRlcmlhbFxuLy8gZWxlbWVudC5cbi8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vZW52aXJvbm1lbnQvZWxldmF0aW9uLmh0bWxcbi8vIEV4YW1wbGVzOlxuLy9cbi8vXG4vLyAubWF0LWZvbyB7XG4vLyAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDIpO1xuLy9cbi8vICAgJjphY3RpdmUge1xuLy8gICAgIEBpbmNsdWRlICRtYXQtZWxldmF0aW9uKDgpO1xuLy8gICB9XG4vLyB9XG4vL1xuLy8gPGRpdiBpZD1cImV4dGVybmFsLWNhcmRcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejJcIj48cD5Tb21lIGNvbnRlbnQ8L3A+PC9kaXY+XG4vL1xuLy8gRm9yIGFuIGV4cGxhbmF0aW9uIG9mIHRoZSBkZXNpZ24gYmVoaW5kIGhvdyBlbGV2YXRpb24gaXMgaW1wbGVtZW50ZWQsIHNlZSB0aGUgZGVzaWduIGRvYyBhdFxuLy8gaHR0cHM6Ly9nb28uZ2wvS3EwazlaLlxuXG4vLyBDb2xvcnMgZm9yIHVtYnJhLCBwZW51bWJyYSwgYW5kIGFtYmllbnQgc2hhZG93cy4gQXMgZGVzY3JpYmVkIGluIHRoZSBkZXNpZ24gZG9jLCBlYWNoIGVsZXZhdGlvblxuLy8gbGV2ZWwgaXMgY3JlYXRlZCB1c2luZyBhIHNldCBvZiAzIHNoYWRvdyB2YWx1ZXMsIG9uZSBmb3IgdW1icmEgKHRoZSBzaGFkb3cgcmVwcmVzZW50aW5nIHRoZVxuLy8gc3BhY2UgY29tcGxldGVseSBvYnNjdXJlZCBieSBhbiBvYmplY3QgcmVsYXRpdmUgdG8gaXRzIGxpZ2h0IHNvdXJjZSksIG9uZSBmb3IgcGVudW1icmEgKHRoZVxuLy8gc3BhY2UgcGFydGlhbGx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCksIGFuZCBvbmUgZm9yIGFtYmllbnQgKHRoZSBzcGFjZSB3aGljaCBjb250YWlucyB0aGUgb2JqZWN0XG4vLyBpdHNlbGYpLiBGb3IgYSBmdXJ0aGVyIGV4cGxhbmF0aW9uIG9mIHRoZXNlIHRlcm1zIGFuZCB0aGVpciBtZWFuaW5ncywgc2VlXG4vLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9VbWJyYSxfcGVudW1icmFfYW5kX2FudHVtYnJhLlxuXG4vLyBNYXBzIGZvciB0aGUgZGlmZmVyZW50IHNoYWRvdyBzZXRzIGFuZCB0aGVpciB2YWx1ZXMgd2l0aGluIGVhY2ggei1zcGFjZS4gVGhlc2UgdmFsdWVzIHdlcmVcbi8vIGNyZWF0ZWQgYnkgdGFraW5nIGEgZmV3IHJlZmVyZW5jZSBzaGFkb3cgc2V0cyBjcmVhdGVkIGJ5IEdvb2dsZSdzIERlc2lnbmVycyBhbmQgaW50ZXJwb2xhdGluZ1xuLy8gYWxsIG9mIHRoZSB2YWx1ZXMgYmV0d2VlbiB0aGVtLlxuXG5AZnVuY3Rpb24gX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZihtZXRhLnR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYobWV0YS50eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggM3B4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDFweCA1cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggMXB4IDhweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAxcHggMTBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAxcHggMTRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAxcHggMThweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCAycHggMTZweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCAzcHggMTRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCAzcHggMTZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNHB4IDE4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDRweCAyMHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA1cHggMjJweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggNXB4IDI0cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDVweCAyNnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA2cHggMjhweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggNnB4IDMwcHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDZweCAzMnB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA3cHggMzRweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggN3B4IDM2cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDhweCAzOHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCA4cHggNDBweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggOHB4IDQycHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDlweCA0NHB4IDhweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCA5cHggNDZweCA4cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuLy8gVGhlIGRlZmF1bHQgZHVyYXRpb24gdmFsdWUgZm9yIGVsZXZhdGlvbiB0cmFuc2l0aW9ucy5cbiR0cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcmlhYmxlcy4kZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRjb2xvcjogYmxhY2sgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IG9wYWNpdHkgc2NhbGluZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHNoYWRvd3MuXG4kb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvcjogJGNvbG9yLCAkb3BhY2l0eTogJG9wYWNpdHkpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IG1hdGguaXMtdW5pdGxlc3MoJHpWYWx1ZSkge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGEgdW5pdGxlc3MgbnVtYmVyJztcbiAgfVxuICBAaWYgJHpWYWx1ZSA8IDAgb3IgJHpWYWx1ZSA+IDI0IHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0JztcbiAgfVxuXG4gIGJveC1zaGFkb3c6ICN7bWFwLmdldChfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC5nZXQoX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAuZ2V0KF9nZXQtYW1iaWVudC1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG92ZXJyaWRhYmxlLWVsZXZhdGlvbihcbiAgICAkelZhbHVlLFxuICAgICRjb2xvcjogJGNvbG9yLFxuICAgICRvcGFjaXR5OiAkb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRwcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBlbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBlbGV2YXRpb24tdHJhbnNpdGlvbihcbiAgICAkZHVyYXRpb246ICR0cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBwcml2YXRlLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cbiIsIi5tYXRlcm8tdG9wbWVudSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHotaW5kZXg6IDIwMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5tYXRlcm8tdG9wbWVudSAubWF0LWljb24ubWVudS1pY29uIHtcbiAgd2lkdGg6IDE4cHg7XG4gIGhlaWdodDogMThweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG59XG5bZGlyPXJ0bF0gLm1hdGVyby10b3BtZW51IC5tYXQtaWNvbi5tZW51LWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG4ubWF0ZXJvLXRvcG1lbnUgLm1hdC1pY29uLm1lbnUtY2FyZXQge1xuICBtYXJnaW4tcmlnaHQ6IC04cHg7XG59XG5bZGlyPXJ0bF0gLm1hdGVyby10b3BtZW51IC5tYXQtaWNvbi5tZW51LWNhcmV0IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogLThweDtcbn1cbi5tYXRlcm8tdG9wbWVudSAubWVudS1sYWJlbCxcbi5tYXRlcm8tdG9wbWVudSAubWVudS1iYWRnZSB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbltkaXI9cnRsXSAubWF0ZXJvLXRvcG1lbnUgLm1lbnUtbGFiZWwsXG5bZGlyPXJ0bF0gLm1hdGVyby10b3BtZW51IC5tZW51LWJhZGdlIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLm1hdGVyby10b3BtZW51IC5tZW51LWJhZGdlIHtcbiAgYm9yZGVyLXJhZGl1czogNTByZW07XG59XG4ubWF0ZXJvLXRvcG1lbnUgLm1hdC10YWItbmF2LWJhcixcbi5tYXRlcm8tdG9wbWVudSAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubWF0LW1lbnUtaXRlbSAubWVudS1uYW1lIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5bZGlyPXJ0bF0gLm1hdC1tZW51LWl0ZW0gLm1lbnUtbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn0iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 21010:
/*!*****************************************************!*\
  !*** ./src/app/theme/widgets/branding.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrandingComponent": () => (/* binding */ BrandingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class BrandingComponent {
}
BrandingComponent.ɵfac = function BrandingComponent_Factory(t) { return new (t || BrandingComponent)(); };
BrandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BrandingComponent, selectors: [["app-branding"]], decls: 2, vars: 1, consts: [[1, "matero-branding", 3, "routerLink"], ["src", "./assets/images/INPS_logo_negativo_colore_RGB.png", "alt", "logo", 1, "matero-branding-logo-expanded"]], template: function BrandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/dashboard");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], encapsulation: 2 });


/***/ }),

/***/ 17393:
/*!*********************************************************!*\
  !*** ./src/app/theme/widgets/notification.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 88133);







function NotificationComponent_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-item")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 5)(4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r2);
} }
class NotificationComponent {
    constructor() {
        this.messages = ['Server Error Reports', 'Server Error Reports', 'Server Error Reports'];
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 9, vars: 2, consts: [["mat-icon-button", "", 1, "matero-toolbar-button", 3, "matMenuTriggerFor"], [1, "badge", "bg-red-500"], ["menu", "matMenu"], [4, "ngFor", "ngForOf"], ["matLine", "", "href", "#"], ["mat-icon-button", ""]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", null, 2)(7, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotificationComponent_mat_list_item_8_Template, 6, 1, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__.MatMenu, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatNavList, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_4__.MatListItem, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MatLine], encapsulation: 2 });


/***/ }),

/***/ 90725:
/*!******************************************************!*\
  !*** ./src/app/theme/widgets/translate.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TranslateComponent": () => (/* binding */ TranslateComponent)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);









function TranslateComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TranslateComponent_button_5_Template_button_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const lang_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.useLanguage(lang_r2.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](lang_r2.value);
} }
class TranslateComponent {
    constructor(translate, settings) {
        this.translate = translate;
        this.settings = settings;
        this.langs = {
            'it-IT': 'Italiano',
            'en-US': 'English',
            'zh-CN': '中文简体',
            'zh-TW': '中文繁体',
        };
        translate.addLangs(['it-IT', 'en-US', 'zh-CN', 'zh-TW']);
    }
    useLanguage(language) {
        this.translate.use(language);
        this.settings.setLanguage(language);
    }
}
TranslateComponent.ɵfac = function TranslateComponent_Factory(t) { return new (t || TranslateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core__WEBPACK_IMPORTED_MODULE_0__.SettingsService)); };
TranslateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TranslateComponent, selectors: [["app-translate"]], decls: 7, vars: 4, consts: [["mat-icon-button", "", 1, "matero-toolbar-button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"]], template: function TranslateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TranslateComponent_button_5_Template, 3, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 2, ctx.langs));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenu, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuItem], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.KeyValuePipe], encapsulation: 2 });


/***/ }),

/***/ 94295:
/*!*************************************************!*\
  !*** ./src/app/theme/widgets/user.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserComponent": () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _core_authentication__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/authentication */ 29722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 82796);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












class UserComponent {
    constructor(router, auth, cdr) {
        this.router = router;
        this.auth = auth;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.auth
            .user()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(user => (this.user = user)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.debounceTime)(10))
            .subscribe(() => this.cdr.detectChanges());
    }
    logout() {
        this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
    }
}
UserComponent.ɵfac = function UserComponent_Factory(t) { return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_authentication__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
UserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserComponent, selectors: [["app-user"]], decls: 24, vars: 12, consts: [["mat-button", "", 1, "matero-toolbar-button", "matero-avatar-button", 3, "matMenuTriggerFor"], ["width", "32", "alt", "avatar", 1, "matero-avatar", 3, "src"], ["fxHide.lt-sm", "", 1, "matero-username"], ["menu", "matMenu"], ["routerLink", "/profile/overview", "mat-menu-item", ""], ["routerLink", "/profile/settings", "mat-menu-item", ""], ["mat-menu-item", "", 3, "click"]], template: function UserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-menu", null, 3)(6, "button", 4)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 5)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserComponent_Template_button_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.user.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 6, "user.profile"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 8, "user.settings"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 10, "user.logout"));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 89019:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true,
    test: false,
    baseUrl: '',
    API_URI: '/api/',
    MG_URL: '/microgateway/',
    MS_SIRICOAPI: 'http://localhost:5250',
    // MS_SIRICOAPI: 'http://ms01098-siricoapi-af-bi.apps.ocps.sviluppo.inps.it',
    useHash: false,
    loginIDM: true,
};


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    test: false,
    baseUrl: '',
    API_URI: '/api/',
    MG_URL: '/microgateway/',
    useHash: false,
    loginIDM: false,
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-ps": 46235,
	"./ar-ps.js": 46235,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku-kmr": 19619,
	"./ku-kmr.js": 19619,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map