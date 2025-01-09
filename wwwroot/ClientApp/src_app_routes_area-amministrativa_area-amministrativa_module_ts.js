"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["src_app_routes_area-amministrativa_area-amministrativa_module_ts"],{

/***/ 62245:
/*!**********************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/area-amministrativa-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaAmministrativaRoutingModule": () => (/* binding */ AreaAmministrativaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _log_applicativo_log_applicativo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-applicativo/log-applicativo.component */ 42106);
/* harmony import */ var _comunicazioni_comunicazioni_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunicazioni/comunicazioni.component */ 22639);
/* harmony import */ var _lista_utenti_lista_utenti_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lista-utenti/lista-utenti.component */ 1870);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







const routes = [
    {
        path: '',
        redirectTo: 'comunicazioni',
        pathMatch: 'full'
    },
    {
        path: 'comunicazioni',
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
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
                "P12689; P12690; P12799; P12800; P12801"] },
        component: _comunicazioni_comunicazioni_component__WEBPACK_IMPORTED_MODULE_1__.ComunicazioniComponent
    },
    {
        path: 'gestione-log',
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
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
                "P12689; P12690; P12799; P12800; P12801"] },
        component: _log_applicativo_log_applicativo_component__WEBPACK_IMPORTED_MODULE_0__.LogApplicativoComponent
    },
    {
        path: 'lista-utenti',
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
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
                "P12689; P12690; P12799; P12800; P12801"] },
        component: _lista_utenti_lista_utenti_component__WEBPACK_IMPORTED_MODULE_2__.ListaUtentiComponent
    }
];
class AreaAmministrativaRoutingModule {
}
AreaAmministrativaRoutingModule.ɵfac = function AreaAmministrativaRoutingModule_Factory(t) { return new (t || AreaAmministrativaRoutingModule)(); };
AreaAmministrativaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AreaAmministrativaRoutingModule });
AreaAmministrativaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AreaAmministrativaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 8139:
/*!**************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/area-amministrativa.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaAmministrativaModule": () => (/* binding */ AreaAmministrativaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _log_applicativo_log_applicativo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-applicativo/log-applicativo.component */ 42106);
/* harmony import */ var _area_amministrativa_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-amministrativa-routing.module */ 62245);
/* harmony import */ var _log_applicativo_dialog_log_applicativo_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./log-applicativo-dialog/log-applicativo-dialog.component */ 52537);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _comunicazioni_comunicazioni_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comunicazioni/comunicazioni.component */ 22639);
/* harmony import */ var _comunicazioni_comunicazione_nuova_comunicazione_nuova_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comunicazioni/comunicazione-nuova/comunicazione-nuova.component */ 69416);
/* harmony import */ var _comunicazioni_comunicazione_aggiorna_comunicazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comunicazioni/comunicazione-aggiorna/comunicazione-aggiorna.component */ 30441);
/* harmony import */ var _lista_utenti_lista_utenti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lista-utenti/lista-utenti.component */ 1870);
/* harmony import */ var _dettaglio_comunicazione_dettaglio_comunicazione_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dettaglio-comunicazione/dettaglio-comunicazione.component */ 34335);
/* harmony import */ var _lista_utenti_modifica_lista_utenti_modifica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lista-utenti-modifica/lista-utenti-modifica.component */ 97371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);












class AreaAmministrativaModule {
}
AreaAmministrativaModule.ɵfac = function AreaAmministrativaModule_Factory(t) { return new (t || AreaAmministrativaModule)(); };
AreaAmministrativaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AreaAmministrativaModule });
AreaAmministrativaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _area_amministrativa_routing_module__WEBPACK_IMPORTED_MODULE_1__.AreaAmministrativaRoutingModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AreaAmministrativaModule, { declarations: [_comunicazioni_comunicazioni_component__WEBPACK_IMPORTED_MODULE_4__.ComunicazioniComponent,
        _comunicazioni_comunicazione_aggiorna_comunicazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_6__.ComunicazioneAggiornaComponent,
        _comunicazioni_comunicazione_nuova_comunicazione_nuova_component__WEBPACK_IMPORTED_MODULE_5__.ComunicazioneNuovaComponent,
        _log_applicativo_log_applicativo_component__WEBPACK_IMPORTED_MODULE_0__.LogApplicativoComponent,
        _log_applicativo_dialog_log_applicativo_dialog_component__WEBPACK_IMPORTED_MODULE_2__.LogApplicativoDialogComponent,
        _lista_utenti_lista_utenti_component__WEBPACK_IMPORTED_MODULE_7__.ListaUtentiComponent,
        _dettaglio_comunicazione_dettaglio_comunicazione_component__WEBPACK_IMPORTED_MODULE_8__.DettaglioComunicazioneComponent,
        _lista_utenti_modifica_lista_utenti_modifica_component__WEBPACK_IMPORTED_MODULE_9__.ListaUtentiModificaComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _area_amministrativa_routing_module__WEBPACK_IMPORTED_MODULE_1__.AreaAmministrativaRoutingModule] }); })();


/***/ }),

/***/ 30441:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/comunicazioni/comunicazione-aggiorna/comunicazione-aggiorna.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicazioneAggiornaComponent": () => (/* binding */ ComunicazioneAggiornaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _shared_services_tipi_comunicazione_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/tipi-comunicazione.service */ 99055);
/* harmony import */ var _shared_models_ruolo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models/ruolo.model */ 95827);
/* harmony import */ var _shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/ruolo-comunicazione.service */ 86872);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models/comunicazioni.model */ 72580);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);





























function ComunicazioneAggiornaComponent_mat_hint_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r0.form1.get("inputOggetto")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/250 ");
} }
function ComunicazioneAggiornaComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " L'oggetto non pu\u00F2 superare 250 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ComunicazioneAggiornaComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipocomunicazione_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tipocomunicazione_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tipocomunicazione_r7.nome, " ");
} }
function ComunicazioneAggiornaComponent_mat_list_option_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruolo_r8 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ruolo_r8.codice)("selected", ctx_r5.isChecked(ruolo_r8.codice));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ruolo_r8.nome, " ");
} }
function ComunicazioneAggiornaComponent_span_60_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Eliminare definitivamente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneAggiornaComponent_span_60_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r9.elimina(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneAggiornaComponent_span_60_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r11.clickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r6.deleteButton ? "opacity-100" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.form1.valid || !ctx_r6.ruoloSelezionato);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.form1.valid || !ctx_r6.ruoloSelezionato);
} }
class ComunicazioneAggiornaComponent {
    constructor(formBuilder, comunicazioneSrv, tipiComunicazioneSrv, ruoloComunicazioneSrv, dialogRef, dialog, data, snackBar) {
        this.formBuilder = formBuilder;
        this.comunicazioneSrv = comunicazioneSrv;
        this.tipiComunicazioneSrv = tipiComunicazioneSrv;
        this.ruoloComunicazioneSrv = ruoloComunicazioneSrv;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.data = data;
        this.snackBar = snackBar;
        this.isOggettoFocused = false;
        this.isSubmitting = false;
        this.listaTipiComunicazione = [];
        this.comunicazione = new _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_4__.Comunicazioni();
        this.ruolo = new _shared_models_ruolo_model__WEBPACK_IMPORTED_MODULE_2__.Ruolo();
        this.ruoliList = [
            { codice: 'P12689', nome: 'Amministratore' },
            { codice: 'P12800', nome: 'Operatore Centrale' },
            { codice: 'P12690', nome: 'Referente Centrale' },
            { codice: 'P12801', nome: 'Referente Territoriale' },
            { codice: 'P12799', nome: 'Referente Regionale' }
        ];
        this.ruoliComunicazione = []; //ruoli associati alla comunicazione letti dal db
        this.ruoliModificati = false;
        this.ruoloSelezionato = true;
        this.idComunicazione = 0;
        this.buttonClicked = '';
        this.deleteButton = false;
        this.allRolesSelected = false;
        this.snackBarQueue = [];
        this.snackBarRef = null;
        this.form1 = this.formBuilder.group({
            inputOggetto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(250)]],
            inputTipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            inputMessaggio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validitaDal: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validitaAl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            selectedRole: [''],
        });
    }
    ngOnInit() {
        var _a;
        this.idComunicazione = this.data;
        this.loadData();
        if ((_a = this.form1.get('inputOggetto')) === null || _a === void 0 ? void 0 : _a.value) {
            this.isOggettoFocused = false;
        }
    }
    loadData() {
        let tipiComunicazione = this.tipiComunicazioneSrv.getTipiComunicazioni();
        let comunicazione = this.comunicazioneSrv.newGetComunicazioneById(this.idComunicazione);
        let ruoloComunicazione = this.ruoloComunicazioneSrv.newGetRuoliByComunicazioneId(this.idComunicazione);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.forkJoin)([tipiComunicazione, comunicazione, ruoloComunicazione]).subscribe({
            next: (results) => {
                this.listaTipiComunicazione = results[0];
                this.comunicazione = results[1];
                this.ruoliComunicazione = results[2];
                this.form1.controls["inputOggetto"].setValue(this.comunicazione.oggetto);
                if (this.comunicazione.idTipoComunicazione) {
                    this.form1.controls["inputTipo"].setValue(this.comunicazione.idTipoComunicazione);
                }
                this.form1.controls["inputMessaggio"].setValue(this.comunicazione.messaggio);
                this.form1.controls["validitaDal"].setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(this.comunicazione.dataInizio, 'yyyy-MM-dd', 'en-US'));
                this.form1.controls["validitaAl"].setValue((0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.formatDate)(this.comunicazione.dataFine, 'yyyy-MM-dd', 'en-US'));
            },
            error: (e) => {
                console.error(e);
            },
        });
    }
    isChecked(cod) {
        const exists = this.ruoliComunicazione.some(x => x.ruolo.includes(cod));
        return exists;
    }
    onSelectionChange(options) {
        //serve per capire se è stata modificata la selezione: se non è stata modificata in fase di salvataggio non effettuo le verifiche dei ruoli
        //questo perchè se non veniva modificata la selezione non veniva riportata la situazione iniziale (probabile bug) e quindi erano cancellati tutti i ruoli
        const selectedRoles = this.form1.get('selectedRole').value || [];
        this.allRolesSelected = selectedRoles.length === this.ruoliList.length;
        this.ruoliModificati = true;
        if (options.length == 0) {
            this.ruoloSelezionato = false;
        }
    }
    showSnackBar(message, action, duration = 3000) {
        this.snackBarQueue.push({ message, action, duration });
        if (!this.snackBarRef) {
            this.openNextSnackBar();
        }
    }
    openNextSnackBar() {
        if (this.snackBarQueue.length > 0) {
            const { message, action, duration } = this.snackBarQueue.shift();
            this.snackBarRef = this.snackBar.open(message, action, { duration });
            this.snackBarRef.afterDismissed().subscribe(() => {
                this.snackBarRef = null;
                this.openNextSnackBar();
            });
        }
    }
    onSubmit() {
        var _a;
        this.isSubmitting = true;
        if (this.buttonClicked === 'modifica') {
            this.comunicazione.oggetto = this.form1.value.inputOggetto;
            this.comunicazione.idTipoComunicazione = +((_a = this.form1.get('inputTipo')) === null || _a === void 0 ? void 0 : _a.value);
            this.comunicazione.messaggio = this.form1.value.inputMessaggio;
            const validitaDal = moment__WEBPACK_IMPORTED_MODULE_5__(this.form1.value.validitaDal).startOf('day').format('YYYY-MM-DD');
            const validitaAl = moment__WEBPACK_IMPORTED_MODULE_5__(this.form1.value.validitaAl).startOf('day').format('YYYY-MM-DD');
            this.comunicazione.dataInizio = validitaDal;
            this.comunicazione.dataFine = validitaAl;
            this.comunicazioneSrv.newAggiornaComunicazione(this.comunicazione).subscribe(data => {
                // Controlla se ci sono ruoli da aggiungere
                const ruoliDaAggiungere = this.form1.value.selectedRole.filter((ruolo) => {
                    return !this.ruoliComunicazione.some(rc => rc.ruolo.includes(ruolo));
                });
                // Aggiungi ruoli se necessario
                if (ruoliDaAggiungere.length > 0) {
                    const ruoliComunicazioneToAdd = ruoliDaAggiungere.map((role) => ({
                        idComunicazione: data.idComunicazione,
                        ruolo: role
                    }));
                    this.ruoloComunicazioneSrv.newInserisciRuoloComunicazione(ruoliComunicazioneToAdd).subscribe({
                        next: () => {
                            this.showSnackBar('Ruoli aggiunti con successo', 'Chiudi');
                            this.isSubmitting = false;
                        },
                        error: (error) => {
                            this.showSnackBar('Errore durante l\'aggiunta dei ruoli', 'Chiudi');
                            console.error('Errore durante l\'aggiunta dei ruoli:', error);
                            this.isSubmitting = false;
                        }
                    });
                }
                // Controlla se ci sono ruoli da rimuovere
                const ruoliDaRimuovere = this.ruoliComunicazione.filter(rc => {
                    return !this.form1.value.selectedRole.includes(rc.ruolo);
                });
                // Prepara l'array di ruoli da rimuovere
                if (ruoliDaRimuovere.length > 0) {
                    const ruoliComunicazioneToRemove = ruoliDaRimuovere.map((role) => ({
                        idComunicazione: this.comunicazione.id,
                        ruolo: role.ruolo
                    }));
                    this.ruoloComunicazioneSrv.newDeleteRuoliComunicazioni(ruoliComunicazioneToRemove).subscribe(() => {
                        this.showSnackBar('Ruoli rimossi con successo', 'Chiudi');
                    }, error => {
                        this.showSnackBar('Errore durante la rimozione dei ruoli', 'Chiudi');
                        console.error('Errore durante la rimozione dei ruoli:', error);
                    });
                }
                // Chiudi la dialog e mostra un messaggio di successo per la comunicazione
                this.dialogRef.close();
                this.showSnackBar('Comunicazione aggiornata con successo', 'Chiudi');
            }, error => {
                // Mostra un messaggio di errore in caso di fallimento dell'aggiornamento
                this.showSnackBar('Errore durante l\'aggiornamento della comunicazione', 'Chiudi');
                console.error('Errore durante l\'aggiornamento della comunicazione:', error);
            });
            this.buttonClicked = '';
        }
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    clickDelete() {
        this.deleteButton = !this.deleteButton;
    }
    elimina() {
        this.delay(1);
        this.comunicazioneSrv.newDeleteComunicazione(this.comunicazione.id).subscribe(() => {
            this.dialogRef.close();
        });
    }
    toggleAllRoles(checked) {
        this.allRolesSelected = checked;
        if (checked) {
            const allRoles = this.ruoliList.map(ruolo => ruolo.codice);
            this.form1.get('selectedRole').setValue(allRoles);
        }
        else {
            this.form1.get('selectedRole').setValue([]);
        }
    }
}
ComunicazioneAggiornaComponent.ɵfac = function ComunicazioneAggiornaComponent_Factory(t) { return new (t || ComunicazioneAggiornaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__.ComunicazioniService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_tipi_comunicazione_service__WEBPACK_IMPORTED_MODULE_1__.TipiComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_3__.RuoloComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_11__.MatSnackBar)); };
ComunicazioneAggiornaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ComunicazioneAggiornaComponent, selectors: [["app-comunicazione-aggiorna"]], decls: 61, vars: 19, consts: [[1, "main-ico"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "Oggetto", "formControlName", "inputOggetto", "maxlength", "250", 3, "focus", "blur"], ["align", "end", 4, "ngIf"], [4, "ngIf"], ["required", "", "placeolder", "Tipo", "formControlName", "inputTipo"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "resize", "none", "formControlName", "inputMessaggio", 3, "rows", "cols"], [3, "rangePicker", "click"], ["matStartDate", "", "matInput", "", "placeholder", "Dal", "formControlName", "validitaDal"], ["matEndDate", "", "matInput", "", "placeholder", "Al", "formControlName", "validitaAl"], ["matSuffix", "", 3, "for", "disabled"], ["matDatepickerToggleIcon", ""], [3, "disabled"], ["picker", ""], [1, "toggleAll"], [3, "checked", "change"], [1, "scrollable-list"], ["formControlName", "selectedRole", 3, "selectionChange"], ["ruoliLista", ""], ["checkboxPosition", "before", 3, "value", "selected", 4, "ngFor", "ngForOf"], ["align", "center", 1, "btn-box"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"], ["type", "submit", "mat-button", "", 1, "btn-mod", 3, "disabled", "click"], [1, "btn-dlt-container", "tooltip"], ["mat-button", "", 1, "btn-dlt", 3, "disabled", "click"], ["class", "tooltiptext", 3, "ngClass", 4, "ngIf"], ["align", "end"], [3, "value"], ["checkboxPosition", "before", 3, "value", "selected"], [1, "tooltiptext", 3, "ngClass"], [1, "btn-def", "btn-def-yes", 3, "disabled", "click"], [1, "btn-def", "btn-def-no", 3, "disabled", "click"]], template: function ComunicazioneAggiornaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p")(1, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Modifica Comunicazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ComunicazioneAggiornaComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Oggetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function ComunicazioneAggiornaComponent_Template_input_focus_8_listener() { return ctx.isOggettoFocused = true; })("blur", function ComunicazioneAggiornaComponent_Template_input_blur_8_listener() { return ctx.isOggettoFocused = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ComunicazioneAggiornaComponent_mat_hint_9_Template, 2, 1, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ComunicazioneAggiornaComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ComunicazioneAggiornaComponent_mat_option_16_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Messaggio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Periodo di validit\u00E0 *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneAggiornaComponent_Template_mat_date_range_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34); return _r3.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 11)(29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-datepicker-toggle", 13)(31, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " date_range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "mat-date-range-picker", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 8)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Ruoli destinatari: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 17)(40, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ComunicazioneAggiornaComponent_Template_mat_checkbox_change_40_listener($event) { return ctx.toggleAllRoles($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Seleziona tutti");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 19)(43, "mat-selection-list", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ComunicazioneAggiornaComponent_Template_mat_selection_list_selectionChange_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](44); return ctx.onSelectionChange(_r4.selectedOptions.selected); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ComunicazioneAggiornaComponent_mat_list_option_45_Template, 2, 3, "mat-list-option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-dialog-actions", 23)(48, "button", 24)(49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneAggiornaComponent_Template_button_click_52_listener() { return ctx.buttonClicked = "modifica"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "Modifica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 26)(57, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneAggiornaComponent_Template_button_click_57_listener() { return ctx.clickDelete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ComunicazioneAggiornaComponent_span_60_Template, 7, 3, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOggettoFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form1.get("inputOggetto")) == null ? null : tmp_2_0.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listaTipiComunicazione);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", 550, "px")("height", 100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("cols", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r3)("disabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.allRolesSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ruoliList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form1.valid || !ctx.ruoloSelezionato || ctx.isSubmitting);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form1.valid || !ctx.ruoloSelezionato);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.deleteButton);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDatepickerToggleIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__.MatDateRangePicker, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_18__.MatCheckbox, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_19__.MatListOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogClose, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_21__.DefaultClassDirective], styles: [".table[_ngcontent-%COMP%] {\n  min-width: 900px;\n}\n\ntr[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  left: 0px;\n  font-size: 12px;\n  color: #656565;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  left: 0px;\n  font-size: 22px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%] {\n  background: #fd5959 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%]:disabled {\n  background: #f6d9d9 !important;\n  color: white;\n}\n\n.btn-dlt-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  text-decoration: none;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.elem-ico[_ngcontent-%COMP%] {\n  zoom: 1;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  color: #00000073 !important;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #0000001a;\n}\n\n.btn-def[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n  border: none;\n  border-radius: 2px;\n}\n\n.btn-def[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.btn-def-yes[_ngcontent-%COMP%] {\n  background: #ff0000 !important;\n  color: white;\n}\n\n.btn-def-no[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  position: relative;\n  top: -28px;\n}\n\n.main-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  left: -4px;\n  zoom: 0.8;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: all 0.5s;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 288px;\n  padding: 12px;\n  background-color: rgba(65, 65, 65, 0.95);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 126%;\n  left: -256%;\n  margin-left: -60px;\n  transition: opacity 0.5s;\n}\n\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 100 !important;\n}\n\n.scrollable-list[_ngcontent-%COMP%] {\n  max-height: 110px;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\n\n.toggleAll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 8px;\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXVuaWNhemlvbmUtYWdnaW9ybmEuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxyb3V0ZXNcXGFyZWEtYW1taW5pc3RyYXRpdmFcXGNvbXVuaWNhemlvbmlcXGNvbXVuaWNhemlvbmUtYWdnaW9ybmFcXGNvbXVuaWNhemlvbmUtYWdnaW9ybmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0UsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ1hGOztBRGVBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNaRjs7QURlQTtFQUNFLHFCQUFBO0FDWkY7O0FEZUE7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNkRjs7QURpQkE7RUFDRSxnQ0FBQTtFQUVBLFlBQUE7QUNmRjs7QURrQkE7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDaEJGOztBRG1CQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsZUFBQTtFQUVBLGNBQUE7QUNqQkY7O0FEcUJBO0VBQ0U7SUFDRSx5QkFBQTtFQ2xCRjtFRG9CQTtJQUNFLG9CQUFBO0VDbEJGO0FBQ0Y7O0FEcUJBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFFQSwyQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxVQUFBO0FDcEJGOztBRHVCQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDcEJGOztBRHNCQTtFQUNFLGVBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDbkJGOztBRHNCQTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBQ3BCRjs7QUR1QkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNwQkY7O0FEdUJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDcEJGOztBRHVCQTtFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsdUJBQUE7QUN0QkY7O0FEMEJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUN2QkY7O0FEMEJBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUN4QkYiLCJmaWxlIjoiY29tdW5pY2F6aW9uZS1hZ2dpb3JuYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsIHRlc3RvIGRlbCBjYW1wbyAqL1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsbCdhbmltYXppb25lIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcbi50YWJsZSB7XHJcbiAgbWluLXdpZHRoOiA5MDBweDtcclxufVxyXG5cclxudHIge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2IoMTAxLCAxMDEsIDEwMSk7XHJcbiAgLy8gZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICM2MDY0NzAgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNWU1ZTVlICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZCB7XHJcbiAgYmFja2dyb3VuZDogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0Yzk5ZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kOmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1NzQgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNGM5YWZmNzQgIWltcG9ydGFudDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4uYnRuLWRsdCB7XHJcbiAgYmFja2dyb3VuZDogI2ZkNTk1OSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6ICNmZjRjNGMgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tZGx0OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZkOWQ5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRsdC1jb250YWluZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi51bHQtbW9kIHtcclxuICBjb2xvcjogIzAwMDAwMDczO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICBtaW4td2lkdGg6IDU1MHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmVsZW0taWNvIHtcclxuICB6b29tOiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMHB4O1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDczICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDAxYTtcclxufVxyXG5cclxuLmJ0bi1kZWZ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDJweDtcclxuICBwYWRkaW5nOjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYnRuLWRlZjpkaXNhYmxlZHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5idG4tZGVmLXllc3tcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRlZi1ub3tcclxuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1ib3gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yOHB4O1xyXG59XHJcblxyXG4ubWFpbi1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDJweDtcclxuICBsZWZ0OiAtNHB4O1xyXG4gIHpvb206IDAuODtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIHBhZGRpbmc6MTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUgNjUgNjUgLyA5NSUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAxMjYlO1xyXG4gIGxlZnQ6IC0yNTYlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG59XHJcblxyXG4ub3BhY2l0eS0xMDB7XHJcbiAgb3BhY2l0eTogMTAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udG9nZ2xlQWxsXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG4iLCIudGFibGUge1xuICBtaW4td2lkdGg6IDkwMHB4O1xufVxuXG50ciB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM2NTY1NjU7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjNjA2NDcwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2Qge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2Q6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1NzQgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdCB7XG4gIGJhY2tncm91bmQ6ICNmZDU5NTkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmNmQ5ZDkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgem9vbTogMS4yO1xufVxuXG4udWx0LW1vZCB7XG4gIGNvbG9yOiAjMDAwMDAwNzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBtaW4td2lkdGg6IDU1MHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzJmNmRkNTtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmVsZW0taWNvIHtcbiAgem9vbTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA3MyAhaW1wb3J0YW50O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMWE7XG59XG5cbi5idG4tZGVmIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1kZWY6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idG4tZGVmLXllcyB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRlZi1ubyB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjhweDtcbn1cblxuLm1haW4taWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogLTRweDtcbiAgem9vbTogMC44O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDI4OHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCA2NSwgNjUsIDAuOTUpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMjYlO1xuICBsZWZ0OiAtMjU2JTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG5cbi5vcGFjaXR5LTEwMCB7XG4gIG9wYWNpdHk6IDEwMCAhaW1wb3J0YW50O1xufVxuXG4uc2Nyb2xsYWJsZS1saXN0IHtcbiAgbWF4LWhlaWdodDogMTEwcHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnRvZ2dsZUFsbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA4cHg7XG4gIG1hcmdpbjogOHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 69416:
/*!***************************************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/comunicazioni/comunicazione-nuova/comunicazione-nuova.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicazioneNuovaComponent": () => (/* binding */ ComunicazioneNuovaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _shared_services_tipi_comunicazione_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/tipi-comunicazione.service */ 99055);
/* harmony import */ var _shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/ruolo-comunicazione.service */ 86872);
/* harmony import */ var _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/models/comunicazioni.model */ 72580);
/* harmony import */ var _shared_models_ruoli_comunicazioni_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models/ruoli-comunicazioni.module */ 50360);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 61534);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 26131);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 87317);


























function ComunicazioneNuovaComponent_mat_hint_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r0.form1.get("inputOggetto")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/250 ");
} }
function ComunicazioneNuovaComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " L'oggetto non pu\u00F2 superare 250 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ComunicazioneNuovaComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tipocomunicazione_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", tipocomunicazione_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", tipocomunicazione_r5.nome, " ");
} }
function ComunicazioneNuovaComponent_mat_list_option_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruolo_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ruolo_r6.codice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ruolo_r6.nome, " ");
} }
class ComunicazioneNuovaComponent {
    constructor(formBuilder, comunicazioneSrv, tipiComunicazioneSrv, ruoloComunicazioneSrv, snackBar, dialogRef) {
        this.formBuilder = formBuilder;
        this.comunicazioneSrv = comunicazioneSrv;
        this.tipiComunicazioneSrv = tipiComunicazioneSrv;
        this.ruoloComunicazioneSrv = ruoloComunicazioneSrv;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.isOggettoFocused = false;
        this.isSubmitting = false;
        this.allRolesSelected = false;
        this.listaTipiComunicazione = [];
        this.ruoliList = [
            { codice: 'P12689', nome: 'Amministratore' },
            { codice: 'P12800', nome: 'Operatore Centrale' },
            { codice: 'P12690', nome: 'Referente Centrale' },
            { codice: 'P12801', nome: 'Referente Territoriale' },
            { codice: 'P12799', nome: 'Referente Regionale' }
        ];
        this.comunicazione = new _shared_models_comunicazioni_model__WEBPACK_IMPORTED_MODULE_3__.Comunicazioni();
        this.ruoloComunic = new _shared_models_ruoli_comunicazioni_module__WEBPACK_IMPORTED_MODULE_4__.RuoliComunicazioni();
        this.today = new Date();
        this.form1 = this.formBuilder.group({
            inputOggetto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(250)]],
            inputTipo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            inputMessaggio: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validitaDal: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            validitaAl: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            selectedRole: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
        });
    }
    ngOnInit() {
        var _a;
        this.getTipiComunicazione();
        if ((_a = this.form1.get('inputOggetto')) === null || _a === void 0 ? void 0 : _a.value) {
            this.isOggettoFocused = false;
        }
    }
    salvaComunicazione() {
        var _a;
        this.isSubmitting = true;
        this.comunicazione.oggetto = this.form1.value.inputOggetto;
        this.comunicazione.idTipoComunicazione = +((_a = this.form1.get('inputTipo')) === null || _a === void 0 ? void 0 : _a.value);
        this.comunicazione.messaggio = this.form1.value.inputMessaggio;
        const validitaDal = moment__WEBPACK_IMPORTED_MODULE_5__(this.form1.value.validitaDal).startOf('day').format('YYYY-MM-DD');
        const validitaAl = moment__WEBPACK_IMPORTED_MODULE_5__(this.form1.value.validitaAl).startOf('day').format('YYYY-MM-DD');
        this.comunicazione.dataInizio = validitaDal;
        this.comunicazione.dataFine = validitaAl;
        // Inserimento della comunicazione
        this.comunicazioneSrv.newInserisciComunicazione(this.comunicazione).subscribe(data => {
            const ruoliComunicazioniArray = this.form1.value.selectedRole.map((role) => {
                return {
                    idComunicazione: data.idComunicazione,
                    ruolo: role
                };
            });
            // Inserimento dei ruoli associati alla comunicazione
            this.ruoloComunicazioneSrv.newInserisciRuoloComunicazione(ruoliComunicazioniArray).subscribe(() => {
                this.dialogRef.close();
                this.snackBar.open('Comunicazione inserita con successo!', 'Chiudi', { duration: 3000 });
                this.isSubmitting = false;
            }, error => {
                console.error('Errore durante l\'inserimento dei ruoli comunicazione:', error);
                this.snackBar.open('Errore durante l\'inserimento dei ruoli comunicazione. Riprova.', 'Chiudi', { duration: 5000 });
                this.isSubmitting = false;
            });
        }, error => {
            // console.error('Errore durante l\'inserimento della comunicazione:', error);
            this.snackBar.open('Errore durante l\'inserimento della comunicazione. Riprova.', 'Chiudi', { duration: 5000 });
            this.isSubmitting = false;
        });
    }
    getTipiComunicazione() {
        this.tipiComunicazioneSrv.getTipiComunicazioni().subscribe(data => {
            this.listaTipiComunicazione = data;
        });
    }
    toggleAllRoles(checked) {
        this.allRolesSelected = checked;
        if (checked) {
            const allRoles = this.ruoliList.map(ruolo => ruolo.codice);
            this.form1.get('selectedRole').setValue(allRoles);
        }
        else {
            this.form1.get('selectedRole').setValue([]);
        }
    }
    onSelectionChange() {
        const selectedRoles = this.form1.get('selectedRole').value || [];
        this.allRolesSelected = selectedRoles.length === this.ruoliList.length;
    }
}
ComunicazioneNuovaComponent.ɵfac = function ComunicazioneNuovaComponent_Factory(t) { return new (t || ComunicazioneNuovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__.ComunicazioniService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_tipi_comunicazione_service__WEBPACK_IMPORTED_MODULE_1__.TipiComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_ruolo_comunicazione_service__WEBPACK_IMPORTED_MODULE_2__.RuoloComunicazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogRef)); };
ComunicazioneNuovaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ComunicazioneNuovaComponent, selectors: [["app-comunicazione-nuova"]], decls: 55, vars: 18, consts: [[1, "main-ico"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill"], ["matInput", "", "placeholder", "Oggetto", "formControlName", "inputOggetto", "maxlength", "250", 3, "focus", "blur"], ["align", "end", 4, "ngIf"], [4, "ngIf"], ["required", "", "placeolder", "Tipo", "formControlName", "inputTipo"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "fill", 1, "full-width"], ["matInput", "", "resize", "none", "formControlName", "inputMessaggio", 3, "rows", "cols"], [3, "rangePicker", "min", "click"], ["matStartDate", "", "matInput", "", "placeholder", "Dal", "formControlName", "validitaDal"], ["matEndDate", "", "matInput", "", "placeholder", "Al", "formControlName", "validitaAl"], ["matSuffix", "", 3, "for", "disabled"], ["matDatepickerToggleIcon", ""], [3, "disabled"], ["picker", ""], [1, "toggleAll"], [3, "checked", "change"], [1, "scrollable-list"], ["formControlName", "selectedRole", 3, "selectionChange"], ["checkboxPosition", "before", 3, "value", 4, "ngFor", "ngForOf"], ["align", "center", 1, "btn-box"], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-back"], ["type", "submit", "mat-button", "", 1, "btn", "btn-mod", 3, "disabled"], ["align", "end"], [3, "value"], ["checkboxPosition", "before", 3, "value"]], template: function ComunicazioneNuovaComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p")(1, "mat-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Nuova Comunicazione");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function ComunicazioneNuovaComponent_Template_form_ngSubmit_4_listener() { return ctx.salvaComunicazione(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-form-field", 2)(6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Oggetto");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function ComunicazioneNuovaComponent_Template_input_focus_8_listener() { return ctx.isOggettoFocused = true; })("blur", function ComunicazioneNuovaComponent_Template_input_blur_8_listener() { return ctx.isOggettoFocused = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ComunicazioneNuovaComponent_mat_hint_9_Template, 2, 1, "mat-hint", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ComunicazioneNuovaComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ComunicazioneNuovaComponent_mat_option_16_Template, 2, 2, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Messaggio");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-form-field", 8)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Periodo di validit\u00E0 *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-date-range-input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ComunicazioneNuovaComponent_Template_mat_date_range_input_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34); return _r3.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 11)(29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-datepicker-toggle", 13)(31, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " date_range ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](33, "mat-date-range-picker", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 8)(37, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Ruoli destinatari: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "span", 17)(40, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ComunicazioneNuovaComponent_Template_mat_checkbox_change_40_listener($event) { return ctx.toggleAllRoles($event.checked); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Seleziona tutti");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 19)(43, "mat-selection-list", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectionChange", function ComunicazioneNuovaComponent_Template_mat_selection_list_selectionChange_43_listener() { return ctx.onSelectionChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ComunicazioneNuovaComponent_mat_list_option_44_Template, 2, 2, "mat-list-option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "mat-dialog-actions", 22)(47, "button", 23)(48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "button", 24)(52, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " Aggiungi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](34);
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isOggettoFocused);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form1.get("inputOggetto")) == null ? null : tmp_2_0.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listaTipiComunicazione);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", 550, "px")("height", 100, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 10)("cols", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rangePicker", _r3)("min", ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r3)("disabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", ctx.allRolesSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ruoliList);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx.form1.valid || ctx.isSubmitting);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_14__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_15__.MatOption, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDatepickerToggleIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_16__.MatDateRangePicker, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckbox, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatSelectionList, _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogClose], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #ff4c4c !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background: #2f6dd5;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574;\n  color: white;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 550px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #0000001a;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  position: relative;\n  top: -28px;\n}\n\n.main-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  left: -4px;\n  zoom: 0.8;\n}\n\n.scrollable-list[_ngcontent-%COMP%] {\n  max-height: 110px;\n  overflow-y: auto;\n  border: 1px solid #ccc;\n  margin-bottom: 8px;\n}\n\n.toggleAll[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding: 8px;\n  margin: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXVuaWNhemlvbmUtbnVvdmEuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxyb3V0ZXNcXGFyZWEtYW1taW5pc3RyYXRpdmFcXGNvbXVuaWNhemlvbmlcXGNvbXVuaWNhemlvbmUtbnVvdmFcXGNvbXVuaWNhemlvbmUtbnVvdmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUE7RUFDRSxlQUFBO0VBRUEsY0FBQTtBQ1pGOztBRGdCQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLG1CQUFBO0VBRUEsWUFBQTtBQ2RGOztBRGlCQTtFQUNFLHFCQUFBO0VBR0EsWUFBQTtBQ2hCRjs7QURtQkE7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0FDaEJGOztBRG1CQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxVQUFBO0FDaEJGOztBRG1CQTtFQUNFLFlBQUE7RUFDQSwrQkFBQTtBQ2hCRjs7QURtQkE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNoQkY7O0FEbUJBO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNqQkYiLCJmaWxlIjoiY29tdW5pY2F6aW9uZS1udW92YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4vLyAgIGNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsIHRlc3RvIGRlbCBjYW1wbyAqL1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsbCdhbmltYXppb25lIGRlbGxhIGxpbmVhIG9yaXp6b250YWxlICovXHJcbi8vIH1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzJmNmRkNTtcclxuICAvLyBjb2xvcjogIzRjOTlmZjtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY0YzRjICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZCB7XHJcbiAgYmFja2dyb3VuZDogIzJmNmRkNTtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNGM5OWZmO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2Q6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICMyZjZkZDU3NDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNWE2OTg0O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0YzlhZmY3NDtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG59XHJcblxyXG4udWx0LW1vZCB7XHJcbiAgY29sb3I6ICMwMDAwMDA3MztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgbWluLXdpZHRoOiA1NTBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDQ5JTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDFhO1xyXG59XHJcblxyXG4uYnRuLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTI4cHg7XHJcbn1cclxuXHJcbi5tYWluLWljbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IC00cHg7XHJcbiAgem9vbTogMC44O1xyXG59XHJcblxyXG4uc2Nyb2xsYWJsZS1saXN0IHtcclxuICBtYXgtaGVpZ2h0OiAxMTBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4udG9nZ2xlQWxsXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW46IDhweDtcclxufVxyXG5cclxuXHJcbiIsInAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMmY2ZGQ1O1xufVxuXG4uYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZmY0YzRjICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1tb2Qge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzJmNmRkNTc0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgem9vbTogMS4yO1xufVxuXG4udWx0LW1vZCB7XG4gIGNvbG9yOiAjMDAwMDAwNzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBtaW4td2lkdGg6IDU1MHB4O1xufVxuXG4uYnRuIHtcbiAgd2lkdGg6IDQ5JTtcbn1cblxuaHIge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMWE7XG59XG5cbi5idG4tYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yOHB4O1xufVxuXG4ubWFpbi1pY28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xuICBsZWZ0OiAtNHB4O1xuICB6b29tOiAwLjg7XG59XG5cbi5zY3JvbGxhYmxlLWxpc3Qge1xuICBtYXgtaGVpZ2h0OiAxMTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4udG9nZ2xlQWxsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luOiA4cHg7XG59Il19 */"] });


/***/ }),

/***/ 22639:
/*!*************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/comunicazioni/comunicazioni.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComunicazioniComponent": () => (/* binding */ ComunicazioniComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/comunicazioni.service */ 79360);
/* harmony import */ var _comunicazione_nuova_comunicazione_nuova_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comunicazione-nuova/comunicazione-nuova.component */ 69416);
/* harmony import */ var _comunicazione_aggiorna_comunicazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comunicazione-aggiorna/comunicazione-aggiorna.component */ 30441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);





















function ComunicazioniComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0per il filtro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_11_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.azzeraFiltro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.filtroStringa, " ");
} }
function ComunicazioniComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A0su ", ctx_r1.elemNum, "");
} }
function ComunicazioniComponent_div_16_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 37);
} }
function ComunicazioniComponent_div_16_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 38);
} }
function ComunicazioniComponent_div_16_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Oggetto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComunicazioniComponent_div_16_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_td_6_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const element_r24 = restoredCtx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r25.modificaDialog(element_r24.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.oggetto, " ");
} }
function ComunicazioniComponent_div_16_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Tipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComunicazioniComponent_div_16_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_td_9_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29); const element_r27 = restoredCtx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r28.modificaDialog(element_r27.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r27.nome, " ");
} }
function ComunicazioniComponent_div_16_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Messaggio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComunicazioniComponent_div_16_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_td_12_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r32); const element_r30 = restoredCtx.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r31.modificaDialog(element_r30.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", element_r30.messaggio);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r30.messaggio ? element_r30.messaggio.substring(0, 50) + "..." : "", " ");
} }
function ComunicazioniComponent_div_16_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Valido dal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComunicazioniComponent_div_16_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_td_15_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const element_r33 = restoredCtx.$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r34.modificaDialog(element_r33.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r33.dataInizio, "dd/MM/yyyy"), " ");
} }
function ComunicazioniComponent_div_16_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Valido al ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function ComunicazioniComponent_div_16_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_td_18_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const element_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.modificaDialog(element_r36.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r36.dataFine, "dd/MM/yyyy"), " ");
} }
const _c0 = function () { return { "first-last-page-icon": true }; };
function ComunicazioniComponent_div_16_a_21_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_a_21_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r39.pageFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function ComunicazioniComponent_div_16_a_25_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_a_25_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ln_r41 = restoredCtx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r42.setPageCurr(ln_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ln_r41 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ln_r41 === ctx_r20.pageCurr ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ln_r41);
} }
function ComunicazioniComponent_div_16_a_29_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_a_29_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r44.pageLast(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function ComunicazioniComponent_div_16_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_mat_option_32_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r47.inizializzaPaginazione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", num_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r46);
} }
function ComunicazioniComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function ComunicazioniComponent_div_16_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r49.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ComunicazioniComponent_div_16_tr_2_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ComunicazioniComponent_div_16_tr_3_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ComunicazioniComponent_div_16_th_5_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ComunicazioniComponent_div_16_td_6_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ComunicazioniComponent_div_16_th_8_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ComunicazioniComponent_div_16_td_9_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ComunicazioniComponent_div_16_th_11_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ComunicazioniComponent_div_16_td_12_Template, 2, 2, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ComunicazioniComponent_div_16_th_14_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ComunicazioniComponent_div_16_td_15_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ComunicazioniComponent_div_16_th_17_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ComunicazioniComponent_div_16_td_18_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 27)(20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ComunicazioniComponent_div_16_a_21_Template, 3, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_Template_a_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r51.pagePrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, ComunicazioniComponent_div_16_a_25_Template, 2, 2, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_div_16_Template_a_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r52.pageNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, ComunicazioniComponent_div_16_a_29_Template, 3, 2, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 33)(31, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ComunicazioniComponent_div_16_Template_mat_select_ngModelChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r53.pageDim = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, ComunicazioniComponent_div_16_mat_option_32_Template, 2, 2, "mat-option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pageCurr > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.layoutNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pageCurr < ctx_r2.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.pageDim);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Pagina ", ctx_r2.pageCurr, " di ", ctx_r2.pageNum, "");
} }
function ComunicazioniComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 48)(3, "h1", 49)(4, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
class ComunicazioniComponent {
    constructor(dialog, comunicazioniSrv) {
        this.dialog = dialog;
        this.comunicazioniSrv = comunicazioniSrv;
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.displayedColumns = ['oggetto', 'nome', 'messaggio', 'dataInizio', 'dataFine'];
        this.dataSource = [];
        this.filtroStringa = '';
        // Proprietà per paginazione e ordinamento
        this.pageDim = '20';
        this.pageCurr = 1; // Pagina corrente
        this.pageNum = 0; // Numero di pagine
        this.elemNum = 0; // Numero di elementi totali
        this.base = 1; // Base per creazione layout
        this.layoutDim = 6; // Elementi paginazione
        this.layoutNumbers = []; // Numeri del paginatore
        this.numPages = ['5', '10', '20', '50', '100']; // Possibili righe di paginazione
        this.ordine = '';
        this.errorMessage = '';
    }
    ngOnInit() {
        this.inizializzaPaginazione();
        this.searchSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(500)).subscribe(searchTerm => {
            this.filtroStringa = searchTerm;
            this.pageCurr = 1;
            this.base = 1;
            this.layoutNumbers = [];
            this.inizializzaPaginazione();
        });
    }
    modificaDialog(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.width = '600px';
        dialogConfig.data = id;
        const dialogRef = this.dialog.open(_comunicazione_aggiorna_comunicazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_2__.ComunicazioneAggiornaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.inizializzaPaginazione();
        });
    }
    nuovaDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.data = 0;
        dialogConfig.width = '600px';
        dialogConfig.height = 'auto';
        const dialogRef = this.dialog.open(_comunicazione_nuova_comunicazione_nuova_component__WEBPACK_IMPORTED_MODULE_1__.ComunicazioneNuovaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.ordine = '';
            this.inizializzaPaginazione();
        });
    }
    popolaTabella() {
        this.comunicazioniSrv.newGetComunicazioniConPaginazione(Number(this.pageDim), this.ordine, this.pageCurr - 1, this.filtroStringa).subscribe(data => {
            this.dataSource = data;
        }, () => {
            this.errorMessage = 'Error fetching data';
            this.dataSource = [];
        });
    }
    azzeraFiltro() {
        this.filtroStringa = '';
        this.pageCurr = 1;
        this.base = 1;
        this.layoutNumbers = [];
        this.inizializzaPaginazione();
    }
    onInputChange(event) {
        const input = event.target;
        this.searchSubject.next(input.value);
    }
    sortData(sort) {
        this.ordine = '';
        if (sort.direction)
            this.ordine = sort.active + '-' + sort.direction;
        this.popolaTabella();
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
    }
    resetPaginazione() {
        this.pageCurr = 1; // Pagina corrente
        this.base = 1; // Base per creazione layout
        this.layoutDim = 6; // Elementi paginazione
        this.layoutNumbers = []; // Numeri del paginatore
    }
    inizializzaPaginazione() {
        this.resetPaginazione();
        this.comunicazioniSrv.newContaComunicazioni(this.filtroStringa).subscribe(data => {
            this.elemNum = data.count;
            this.pageNum = Math.floor(this.elemNum / Number(this.pageDim));
            if ((this.elemNum % Number(this.pageDim)) > 0)
                this.pageNum++;
            for (let i = 1; i <= 6; i++) {
                if (i <= this.pageNum) {
                    this.layoutNumbers.push(i);
                }
            }
            this.popolaTabella();
        }, error => {
            console.error('Errore nel conta della paginazione:', error);
            this.elemNum = 0;
            this.pageNum = 0;
            this.dataSource = [];
        });
    }
    scorriLayout() {
        if ((this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1]) && this.pageCurr < this.pageNum) {
            this.base = this.base + (this.layoutDim - 1);
            this.layoutNumbers = [];
            for (let i = this.base; i < this.base + 6; i++) {
                if (i <= this.pageNum) {
                    this.layoutNumbers.push(i);
                }
            }
        }
        else if ((this.pageCurr <= this.layoutNumbers[0]) && this.pageCurr > 1) {
            this.base = this.base - (this.layoutDim - 1);
            this.layoutNumbers = [];
            for (let i = this.base; i < this.base + 6; i++) {
                if (i <= this.pageNum) {
                    this.layoutNumbers.push(i);
                }
            }
        }
        else if (this.pageCurr === 1) {
            this.base = 1;
        }
    }
    pageFirst() {
        if (this.pageCurr > 1) {
            this.pageCurr = 1;
            this.base = 1;
            this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
            this.popolaTabella();
        }
    }
    pageLast() {
        if (this.pageCurr < this.pageNum) {
            this.pageCurr = this.pageNum;
            this.base = Math.max(1, this.pageNum - 5);
            this.layoutNumbers = Array.from({ length: 6 }, (_, i) => this.base + i).filter(k => k <= this.pageNum);
            this.popolaTabella();
        }
    }
}
ComunicazioniComponent.ɵfac = function ComunicazioniComponent_Factory(t) { return new (t || ComunicazioniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_comunicazioni_service__WEBPACK_IMPORTED_MODULE_0__.ComunicazioniService)); };
ComunicazioniComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ComunicazioniComponent, selectors: [["app-comunicazioni"]], decls: 19, vars: 6, consts: [["align", "end", 1, "container-cards-buttons"], ["mat-raised-button", "", "type", "button", 1, "child-buttons-conferma", 3, "click"], [1, "new-ico"], [1, "section-title"], ["class", "section-filtro-att", 4, "ngIf"], ["type", "text", "align", "end", "placeholder", "Cerca...", 1, "ricerca", 3, "ngModel", "ngModelChange", "input"], [1, "filter-ico"], [4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], [1, "section-filtro-att"], [1, "box-filtro"], [1, "clear-filter-ico", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "oggetto"], ["mat-header-cell", "", "mat-sort-header", "oggetto", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "nome"], ["mat-header-cell", "", "mat-sort-header", "nome", 4, "matHeaderCellDef"], ["matColumnDef", "messaggio"], ["mat-header-cell", "", "mat-sort-header", "messaggio", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "matTooltip", "click", 4, "matCellDef"], ["matColumnDef", "dataInizio"], ["mat-header-cell", "", "mat-sort-header", "dataInizio", 4, "matHeaderCellDef"], ["matColumnDef", "dataFine"], ["mat-header-cell", "", "mat-sort-header", "dataFine", 4, "matHeaderCellDef"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], [1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", "", "mat-sort-header", "oggetto"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "nome"], ["mat-header-cell", "", "mat-sort-header", "messaggio"], ["mat-cell", "", 3, "matTooltip", "click"], ["mat-header-cell", "", "mat-sort-header", "dataInizio"], ["mat-header-cell", "", "mat-sort-header", "dataFine"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"]], template: function ComunicazioniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-actions", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ComunicazioniComponent_Template_button_click_2_listener() { return ctx.nuovaDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0Nuova ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br")(7, "br")(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ComunicazioniComponent_div_11_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ComunicazioniComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ComunicazioniComponent_Template_input_ngModelChange_13_listener($event) { return ctx.filtroStringa = $event; })("input", function ComunicazioniComponent_Template_input_input_13_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ComunicazioniComponent_div_16_Template, 35, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ComunicazioniComponent_ng_template_17_Template, 6, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Comunicazioni | ", ctx.elemNum, " risultati");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSource.length > 0)("ngIfElse", _r3);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_16__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.new-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.dx[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.new-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  right: 5px;\n  zoom: 1.2;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #2f6dd5;\n  margin-top: 20px;\n}\n\n.mat-card-title-mod[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 6px;\n  right: -19px;\n}\n\n.mat-card-ico-mod[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  right: 4px;\n  zoom: 1.2;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n  position: relative;\n  top: 28px;\n}\n\n.rotation-div[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  height: 100px;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.mat-paginator-empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXVuaWNhemlvbmkuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcYXJlYS1hbW1pbmlzdHJhdGl2YVxcY29tdW5pY2F6aW9uaVxcY29tdW5pY2F6aW9uaS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUlFLGVBQUE7QUNGRjs7QURxQkE7RUFDRSxrQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxZQUFBO0FDbEJGOztBRHFCQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUVBLGdCQUFBO0FDbkJGOztBRHFCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FDbEJGOztBRG9CQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDakJGOztBRG9CQTtFQUNFLHVCQUFBO0FDakJGOztBRG9CQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsV0FBQTtBQ2pCRjs7QURvQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDakJGOztBRG9CQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtBQ2pCRjs7QURtQkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDaEJGOztBRGtCQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBRUEsaURBQUE7QUNmRjs7QURrQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ2ZGOztBRGtCQTtFQUNFLGNBQUE7QUNmRjs7QURrQkE7RUFDRTtJQUNFLHlCQUFBO0VDZkY7RURpQkE7SUFDRSxvQkFBQTtFQ2ZGO0FBQ0YiLCJmaWxlIjoiY29tdW5pY2F6aW9uaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcclxuICAvLyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vLyAubWF0LXJvdyB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4vLyB9XHJcblxyXG4ubmV3LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZHgge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5ldy1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi50b3AtYm9yZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogLTE5cHg7XHJcbn1cclxuLm1hdC1jYXJkLWljby1tb2Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNHB4O1xyXG4gIHpvb206IDEuMjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjhweDtcclxufVxyXG5cclxuLnJvdGF0aW9uLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucmljZXJjYSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmlsdGVyLWljbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uLWZpbHRyby1hdHQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE2cHg7XHJcbn1cclxuLmJveC1maWx0cm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHpvb206IDAuODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xyXG4gIGNvbG9yOiAjZTNlM2UzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vcGFnaW5hdG9yIHN0eWxlXHJcblxyXG4vL2NvbnRhaW5lclxyXG4vLyAubWF0LXBhZ2luYXRvci1tb2Qge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgcGFkZGluZzo1cHg7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiBhIHtcclxuLy8gICBjb2xvcjogYmxhY2s7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOGZiO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLnBhZ2luYXRvci1pbmZve1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6IDEycHg7XHJcbi8vICAgbGVmdDogLTI2cHg7XHJcbi8vICAgY29sb3I6Z3JleTtcclxuLy8gICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdG9yLW51bWVsZW17XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHRvcDo1cHg7XHJcbi8vICAgbGVmdDogMTBweDtcclxuLy8gICBwYWRkaW5nOjVweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0b3ItbnVtZWxlbS1zZWxlY3R7XHJcbi8vICAgd2lkdGg6ODBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiBncmV5O1xyXG4vLyB9XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubmV3LWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmR4IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4ubmV3LWljbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xuICByaWdodDogNXB4O1xuICB6b29tOiAxLjI7XG59XG5cbi50b3AtYm9yZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWF0LWNhcmQtdGl0bGUtbW9kIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNnB4O1xuICByaWdodDogLTE5cHg7XG59XG5cbi5tYXQtY2FyZC1pY28tbW9kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDRweDtcbiAgcmlnaHQ6IDRweDtcbiAgem9vbTogMS4yO1xufVxuXG5odG1sIHtcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG59XG5cbi5yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgem9vbTogMS4yO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjhweDtcbn1cblxuLnJvdGF0aW9uLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwcHg7XG59XG5cbi5yaWNlcmNhIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogMnB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZmlsdGVyLWljbyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHpvb206IDEuMjtcbiAgY29sb3I6ICM4MzgzODM7XG59XG5cbi5tYXQtcGFnaW5hdG9yLWVtcHR5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNlY3Rpb24tZmlsdHJvLWF0dCB7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTZweDtcbn1cblxuLmJveC1maWx0cm8ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmc6IDVweCAzMHB4IDVweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcbiAgY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XG59XG5cbi5jbGVhci1maWx0ZXItaWNvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6b29tOiAwLjg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xlYXItZmlsdGVyLWljbzpob3ZlciB7XG4gIGNvbG9yOiAjZTNlM2UzO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 97371:
/*!*****************************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/lista-utenti-modifica/lista-utenti-modifica.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaUtentiModificaComponent": () => (/* binding */ ListaUtentiModificaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/user.service */ 98613);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);








function ListaUtentiModificaComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sede_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", sede_r2.sedeCodSede, " - ", sede_r2.sedeDesc, "");
} }
function ListaUtentiModificaComponent_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ruolo_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ruolo_r3.ruoloDesc);
} }
class ListaUtentiModificaComponent {
    constructor(formBuilder, dialog, utentiSrv) {
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.utentiSrv = utentiSrv;
        this.listaEmail = [];
        this.emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        this.form = this.formBuilder.group({
            emailField: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(this.emailPattern)]],
        });
    }
    ngOnInit() {
        this.data = this.utentiSrv.datiUtente$.value.row;
        this.idTab = this.utentiSrv.datiUtente$.value.selectedTab;
        // this.loadListaEmailUtenti(this.data.matricola);   // Trasmetto la matricola per raccogliere solo gli indirizzi email associati ad altri utenti
        // if (this.data.email != null && this.data.email != undefined && this.data.email.trim() != '') {
        //   this.form.patchValue({
        //     emailField: this.data.email.trim()
        //   });
        // }
    }
    // loadListaEmailUtenti(matricola: string) {
    //   this.utentiSrv.getAllEmailUtenti(matricola).subscribe((result: string[]) => {
    //     this.listaEmail = result;
    //   });
    // }
    // modifica() {
    //   // Verifica se il form è valido
    //   if (this.form.invalid) {
    //     const errors = this.form.get('emailField')?.errors;
    //     if (errors?.required) {
    //       return this.openErrorDialog("Errore:", "L'indirizzo email è obbligatorio.");
    //     }
    //     if (errors?.maxlength) {
    //       return this.openErrorDialog("Errore:", "L'indirizzo email non può superare i 50 caratteri.");
    //     }
    //     if (errors?.pattern) {
    //       return this.openErrorDialog("Errore:", "Inserire un indirizzo email valido.");
    //     }
    //     // Se ci sono altri errori, mostra un messaggio generico
    //     return this.openErrorDialog("Errore:", "Verificare i dati inseriti.");
    //   }
    //   const emailFieldTrimmed = this.form.value.emailField.trim();
    //   // Verifica se l'email è già presente nella lista
    //   if (this.listaEmail.includes(emailFieldTrimmed)) {
    //     return this.openErrorDialog("Errore:", "L'indirizzo e-mail inserito è già associato a un altro utente.");
    //   }
    //   // Procedi con l'aggiornamento dell'utente
    //   this.aggiornaUtente(emailFieldTrimmed);
    // }
    // aggiornaUtente(email: string) {
    //   this.utentiSrv.updateEmailUtente(this.data.matricola, email).subscribe();
    //   this.utentiSrv.datiUtente$.next(null);
    //   this.closeDialog();
    // }
    showField(valueToDisplay) {
        if (valueToDisplay == null || valueToDisplay == undefined || valueToDisplay == '' || valueToDisplay.trim() == "") {
            return '-';
        }
        return valueToDisplay;
    }
    // openErrorDialog(titolo: string, message: string): void {
    //   this.dialog.open(PopupErroreInserimentoComponent, {
    //     data: { titolo: titolo, message: message },
    //   });
    // }
    closeDialog() {
        this.dialog.closeAll();
    }
}
ListaUtentiModificaComponent.ɵfac = function ListaUtentiModificaComponent_Factory(t) { return new (t || ListaUtentiModificaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
ListaUtentiModificaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListaUtentiModificaComponent, selectors: [["app-lista-utenti-modifica"]], decls: 60, vars: 9, consts: [[1, "modal-container"], [1, "modal-content"], [1, "title"], [1, "title-name"], [1, "container-data"], [1, "table"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], ["class", "sub-title", 4, "ngFor", "ngForOf"], [1, "container-buttons"], ["type", "button", 1, "child-buttons", "child-buttons-chiudi", 3, "click"]], template: function ListaUtentiModificaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Dettaglio Utente:\u00A0\u00A0\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4)(8, "div", 5)(9, "div", 6)(10, "div")(11, "h3")(12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Matricola");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div")(17, "h3")(18, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Cognome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "h3")(24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Nome");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div")(29, "h3")(30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div")(35, "h3")(36, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "br")(41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6)(43, "div")(44, "h3")(45, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Sedi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ListaUtentiModificaComponent_span_47_Template, 2, 2, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div")(49, "h3")(50, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Ruoli");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, ListaUtentiModificaComponent_span_52_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "br")(57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListaUtentiModificaComponent_Template_button_click_58_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " Chiudi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.data.nome, " ", ctx.data.cognome, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.matricola);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.cognome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.nome);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.showField(ctx.data.email));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.sedeDTO);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.ruoloDTO);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-right: 20px;\n  flex-grow: 1;\n  padding-bottom: 0px;\n  margin-bottom: 0;\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0 0 0;\n  background-color: white;\n  position: sticky;\n  bottom: 0;\n  margin-top: 22px;\n  margin-bottom: 3px;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 12pt;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.title-name[_ngcontent-%COMP%] {\n  color: #2f6dd5 !important;\n  font-size: larger;\n}\n\n.form[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 5%;\n  margin-bottom: 10%;\n}\n\n.input-form[_ngcontent-%COMP%] {\n  width: 35%;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  font-size: 110%;\n}\n\n\n\n[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574 !important;\n  color: white;\n}\n\n.align-elements[_ngcontent-%COMP%] {\n  padding-left: 1%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  padding-right: 65px;\n}\n\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n  display: block;\n  text-align: center;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  line-height: 1.5;\n  display: block;\n  text-align: center;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background-color: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXV0ZW50aS1tb2RpZmljYS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxhcmVhLWFtbWluaXN0cmF0aXZhXFxsaXN0YS11dGVudGktbW9kaWZpY2FcXGxpc3RhLXV0ZW50aS1tb2RpZmljYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLFVBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRSxZQUFBOztBQUNBO0VBQ0UsZ0NBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UsbUJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoibGlzdGEtdXRlbnRpLW1vZGlmaWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jb250ZW50IHtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHggMCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIH1cclxuICBcclxuICB0aCB7XHJcbiAgICBmb250LXNpemU6IDEycHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAudGl0bGUtbmFtZSB7XHJcbiAgICBjb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7ICAgIFxyXG4gIH1cclxuXHJcbiAgLmZvcm0ge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgfSBcclxuXHJcbiAgLmlucHV0LWZvcm0ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICB9XHJcblxyXG4gIG1hdC1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDExMCU7XHJcbiAgfVxyXG5cclxuICAvKi5idG4tbW9kOiovXHJcbiAgOmRpc2FibGVkIHtcclxuICAgIGJhY2tncm91bmQ6ICMyZjZkZDU3NCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB9XHJcbiAgXHJcbiAgLmFsaWduLWVsZW1lbnRzIHtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZy1yaWdodDogNjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGl0bGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktdGl0bGUgZGl2IHtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gIH1cclxuICBcclxuICAudG9wLXRpdGxlIHtcclxuICAgIGNvbG9yOiAjODc4Nzg3O1xyXG4gICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9ICBcclxuICAgXHJcbiAgLmJ0bi1tb2Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLWJhY2sge1xyXG4gICAgYmFja2dyb3VuZDogIzYwNjQ3MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAiLCIubW9kYWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWF4LWhlaWdodDogOTB2aDtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBmbGV4LWdyb3c6IDE7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb250YWluZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiA1cHggMCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBib3R0b206IDA7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxudGgge1xuICBmb250LXNpemU6IDEycHQ7XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50aXRsZS1uYW1lIHtcbiAgY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5cbi5mb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xufVxuXG4uaW5wdXQtZm9ybSB7XG4gIHdpZHRoOiAzNSU7XG59XG5cbm1hdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTEwJTtcbn1cblxuLyouYnRuLW1vZDoqL1xuOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZDogIzJmNmRkNTc0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmFsaWduLWVsZW1lbnRzIHtcbiAgcGFkZGluZy1sZWZ0OiAxJTtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDY1cHg7XG59XG5cbi5kaXNwbGF5LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmRpc3BsYXktdGl0bGUgZGl2IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG59XG5cbi50b3AtdGl0bGUge1xuICBjb2xvcjogIzg3ODc4NztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0bi1tb2Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzYwNjQ3MCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"] });


/***/ }),

/***/ 1870:
/*!***********************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/lista-utenti/lista-utenti.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaUtentiComponent": () => (/* binding */ ListaUtentiComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/territorio.service */ 8091);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/user.service */ 98613);
/* harmony import */ var app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/routes/popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _lista_utenti_modifica_lista_utenti_modifica_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lista-utenti-modifica/lista-utenti-modifica.component */ 97371);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/card */ 11961);

































const _c0 = ["fileInput"];
const _c1 = ["regioneInput"];
const _c2 = ["sedeInput"];
const _c3 = ["ruoloInput"];

function ListaUtentiComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r19.clearMatricola();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function ListaUtentiComponent_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r21.ruolo1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", option_r21.descrizione, " ");
  }
}

function ListaUtentiComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r22.clearRuolo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function ListaUtentiComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r24 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.showFieldSede(option_r24.id, option_r24.nome), " ");
  }
}

function ListaUtentiComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r25.clearRegione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function ListaUtentiComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r27 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", option_r27.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r8.showFieldSede(option_r27.id, option_r27.nome), " ");
  }
}

function ListaUtentiComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r28.clearSede();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}

function ListaUtentiComponent_div_46_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 47);
  }
}

function ListaUtentiComponent_div_46_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_46_tr_3_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const row_r46 = restoredCtx.$implicit;
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r47.handleRowClick(row_r46);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Matricola ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r49 = ctx.$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r33.showField(element_r49.matricola), " ");
  }
}

function ListaUtentiComponent_div_46_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Cognome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r50 = ctx.$implicit;
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r35.showField(element_r50.cognome), " ");
  }
}

function ListaUtentiComponent_div_46_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r51 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r37.showField(element_r51.nome), " ");
  }
}

function ListaUtentiComponent_div_46_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r52 = ctx.$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r39.showField(element_r52.email), " ");
  }
}

function ListaUtentiComponent_div_46_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r53 = ctx.$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r41.showField(element_r53.username), " ");
  }
}

function ListaUtentiComponent_div_46_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Sede ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_46_td_21_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r56);
      const element_r54 = restoredCtx.$implicit;
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r55.showAllFieldSedi(element_r54.sedeDTO);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r54 = ctx.$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r43.displayFieldSede(element_r54.sedeDTO));
  }
}

function ListaUtentiComponent_div_46_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Ruolo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_46_td_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50)(1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_46_td_24_Template_span_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r59);
      const element_r57 = restoredCtx.$implicit;
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r58.showAllFieldRuoli(element_r57.ruoloDTO);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r57 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r45.displayFieldRuolo(element_r57.ruoloDTO));
  }
}

function ListaUtentiComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function ListaUtentiComponent_div_46_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r60.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ListaUtentiComponent_div_46_tr_2_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ListaUtentiComponent_div_46_tr_3_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ListaUtentiComponent_div_46_th_5_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ListaUtentiComponent_div_46_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListaUtentiComponent_div_46_th_8_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ListaUtentiComponent_div_46_td_9_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](10, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListaUtentiComponent_div_46_th_11_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ListaUtentiComponent_div_46_td_12_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](13, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ListaUtentiComponent_div_46_th_14_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ListaUtentiComponent_div_46_td_15_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](16, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ListaUtentiComponent_div_46_th_17_Template, 2, 0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ListaUtentiComponent_div_46_td_18_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](19, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ListaUtentiComponent_div_46_th_20_Template, 2, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ListaUtentiComponent_div_46_td_21_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](22, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListaUtentiComponent_div_46_th_23_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, ListaUtentiComponent_div_46_td_24_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r11.dataSourceFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r11.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r11.displayedColumns);
  }
}

const _c4 = function () {
  return {
    "first-last-page-icon": true
  };
};

function ListaUtentiComponent_div_47_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r66.pageFirst();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c4));
  }
}

function ListaUtentiComponent_div_47_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_a_6_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r70);
      const ln_r68 = restoredCtx.$implicit;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r69.setPageCurr(ln_r68);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r68 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ln_r68 === ctx_r63.pageCurr ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ln_r68);
  }
}

function ListaUtentiComponent_div_47_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r72);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r71.pageLast();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c4));
  }
}

function ListaUtentiComponent_div_47_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_mat_option_13_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r75);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r74.inizializzaPaginazione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", num_r73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](num_r73);
  }
}

function ListaUtentiComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ListaUtentiComponent_div_47_a_2_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r76.pagePrev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ListaUtentiComponent_div_47_a_6_Template, 2, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_47_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r78.pageNext();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ListaUtentiComponent_div_47_a_10_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 63)(12, "mat-select", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListaUtentiComponent_div_47_Template_mat_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r77);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r79.pageDim = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ListaUtentiComponent_div_47_mat_option_13_Template, 2, 2, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.pageCurr > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r12.layoutNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.pageCurr < ctx_r12.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r12.pageDim);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r12.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Pagina ", ctx_r12.pageCurr, " di ", ctx_r12.pageNum, "");
  }
}

function ListaUtentiComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card")(3, "div", 69)(4, "h1", 70)(5, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}

function ListaUtentiComponent_div_54_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 47);
  }
}

function ListaUtentiComponent_div_54_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_54_tr_3_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r90);
      const row_r88 = restoredCtx.$implicit;
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r89.handleRowClick(row_r88);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_54_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Data Scarto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_54_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r91 = ctx.$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r83.displayFieldData(element_r91.dataScarto), " ");
  }
}

function ListaUtentiComponent_div_54_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Matricola ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_54_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r92 = ctx.$implicit;
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r85.showField(element_r92.matricola), " ");
  }
}

function ListaUtentiComponent_div_54_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Motivazione Scarto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}

function ListaUtentiComponent_div_54_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r93 = ctx.$implicit;
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r87.showField(element_r93.motivazioneScarto), " ");
  }
}

function ListaUtentiComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "table", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("matSortChange", function ListaUtentiComponent_div_54_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r94.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ListaUtentiComponent_div_54_tr_2_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ListaUtentiComponent_div_54_tr_3_Template, 1, 0, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](4, 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ListaUtentiComponent_div_54_th_5_Template, 2, 0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ListaUtentiComponent_div_54_td_6_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](7, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListaUtentiComponent_div_54_th_8_Template, 2, 0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ListaUtentiComponent_div_54_td_9_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](10, 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ListaUtentiComponent_div_54_th_11_Template, 2, 0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ListaUtentiComponent_div_54_td_12_Template, 2, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r15.dataSourceScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", ctx_r15.displayedColumnsScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", ctx_r15.displayedColumnsScarti);
  }
}

function ListaUtentiComponent_div_55_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r101);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r100.pageFirstScarti();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c4));
  }
}

function ListaUtentiComponent_div_55_a_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_a_6_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r104);
      const ln_r102 = restoredCtx.$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r103.setPageCurrScarti(ln_r102);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r102 = ctx.$implicit;
    const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ln_r102 === ctx_r97.pageCurrScarti ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ln_r102);
  }
}

function ListaUtentiComponent_div_55_a_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_a_10_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r105.pageLastScarti();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c4));
  }
}

function ListaUtentiComponent_div_55_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_mat_option_13_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r109);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return ctx_r108.inizializzaPaginazioneScarti();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const numScarti_r107 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", numScarti_r107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](numScarti_r107);
  }
}

function ListaUtentiComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 58)(1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ListaUtentiComponent_div_55_a_2_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r110.pagePrevScarti();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ListaUtentiComponent_div_55_a_6_Template, 2, 2, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_div_55_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r112.pageNextScarti();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ListaUtentiComponent_div_55_a_10_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 63)(12, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ListaUtentiComponent_div_55_Template_mat_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r111);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r113.pageDimScarti = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ListaUtentiComponent_div_55_mat_option_13_Template, 2, 2, "mat-option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.pageCurrScarti > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.layoutNumbersScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r16.pageCurrScarti < ctx_r16.pageNumScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r16.pageDimScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.numPagesScarti);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Pagina ", ctx_r16.pageCurrScarti, " di ", ctx_r16.pageNumScarti, "");
  }
}

function ListaUtentiComponent_ng_template_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-card")(3, "div", 69)(4, "h1", 70)(5, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}

class ListaUtentiComponent {
  constructor(storageService, dialog, cdr, utentiSrv, territorioService, snackBar) {
    this.storageService = storageService;
    this.dialog = dialog;
    this.cdr = cdr;
    this.utentiSrv = utentiSrv;
    this.territorioService = territorioService;
    this.snackBar = snackBar;
    this.codiceSede = [];
    this.role = null;
    this.ruoloSelezionato = "";
    this.displayedColumns = ['matricola', 'cognome', 'nome', 'email', 'accountWindows', 'codiceSede', 'ruoli'];
    this.displayedColumnsScarti = ['dataScarto', 'matricola', 'motivazioneScarto'];
    this.dataSource = [];
    this.dataSourceScarti = [];
    this.dataSourceFiltered = [];
    this.isLoading = true;
    this.utenti = [];
    this.listaRuoli = [];
    this.sede = [];
    this.regione = [];
    this.matricola = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.ruolo = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.regioneCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.sedeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.matricolaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.ruoloCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl();
    this.filtroperSede = null;
    this.filtroperRegione = null;
    this.filtroperRuolo = null;
    this.ordinamentoColonna = null;
    this.ordinamentoColonnaScarti = null;
    this.selectedFile = null;
    this.errorMessage = null; //----------------paginazione config--------------------------

    this.selectedTab = 0; // per tenere traccia della tab selezionata (0: Gestione Utenti, 1: Lista Scarti)

    this.pageDim = '20'; //numero di righe per pagina

    this.pageCurr = 1; //pagina corrente

    this.pageNum = 0; //numero di pagine

    this.elemNum = 0; //numero di elementi totali

    this.base = 1; //base per creazione layout

    this.layoutDim = 6; //elementi paginazione

    this.layoutNumbers = []; //numeri del paginatore

    this.numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
    //----------------paginazioneScarti config--------------------------
    // selectedTab: number = 0;  // per tenere traccia della tab selezionata (0: Gestione Utenti, 1: Lista Scarti)

    this.pageDimScarti = '20'; //numero di righe per pagina

    this.pageCurrScarti = 1; //pagina corrente

    this.pageNumScarti = 0; //numero di pagine

    this.elemNumScarti = 0; //numero di elementi totali

    this.baseScarti = 1; //base per creazione layout

    this.layoutDimScarti = 6; //elementi paginazione

    this.layoutNumbersScarti = []; //numeri del paginatore

    this.numPagesScarti = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
  }

  ngOnInit() {
    this.regioneCtrl.disable();
    this.sedeCtrl.disable();
    this.loadRuoli();
    this.getRegioni();
    this.getProvince();
    this.filteredRuolo = this.ruoloCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterRuolo(value)));
    this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterSede(value)));
    this.filteredRegione = this.regioneCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterRegione(value)));
    this.inizializzaPaginazione(); // this.popolaTabella() invocata dentro inizializzaPaginazione()

    this.inizializzaPaginazioneScarti(); // this.loadScarti() invocata dentro inizializzaPaginazioneScarti()
  }

  ngAfterViewInit() {
    if (this.regioneAutocompleteTrigger) {
      this.regioneAutocompleteTrigger.panelClosingActions.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => this.filteredRegione || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(filtered => {
        if (this.regioneCtrl.value && !filtered.some(option => option.id === this.regioneCtrl.value)) {
          this.regioneCtrl.setValue(null);
        }
      })).subscribe();
    }

    if (this.sedeAutocompleteTrigger) {
      this.sedeAutocompleteTrigger.panelClosingActions.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.switchMap)(() => this.filteredSede || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.tap)(filtered => {
        if (this.sedeCtrl.value && !filtered.some(option => option.id === this.sedeCtrl.value)) {
          this.sedeCtrl.setValue(null);
        }
      })).subscribe();
    }
  }

  _filterRuolo(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.listaRuoli.filter(option => option.descrizione.toLowerCase().includes(filterValue));
  }

  _filterSede(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.sede.filter(option => this.showFieldSede(option.id, option.nome).toLowerCase().includes(filterValue));
  }

  _filterRegione(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.regione.filter(option => this.showFieldSede(option.id, option.nome).toLowerCase().includes(filterValue));
  }

  sedeSelected(selectedId) {
    const selectedSede = this.sede.find(option => option.id === selectedId);
    this.sedeCtrl.setValue(this.showFieldSede(selectedSede.id, selectedSede.nome) || '');
    if (selectedId != null) this.filtroperSede = selectedId.toString();
    const sedeId = selectedId;

    if (sedeId == null || sedeId == -1) {
      this.sede = [];
      this.getProvince();
    } else {
      this.territorioService.getRegioniByIdSede(this.formatToSixDigits(sedeId)).subscribe(data => {
        for (let i = 0; i < this.regione.length; i++) {
          if (data.sedeCodSede !== this.regione[i].id && this.regione[i].id != null) {
            this.regione.splice(i, 1);
            i--;
          }
        }

        if (this.regione.length > 1) {
          this.regioneCtrl.setValue(this.showFieldSede(this.regione[1].id, this.regione[1].nome));
        } else
          /*if (this.regione.length == 1)*/
          {// this.filteredSede = this.sedeCtrl.valueChanges.pipe(
            //   startWith(''),
            //   map(value => this._filterSede(value)));
            // this.regioneCtrl.reset();
            // this.regioneCtrl.setValue(this.showFieldSede(1, ""));
          }
      });
    }
  }

  regioneSelected(selectedId) {
    const selectedRegione = this.regione.find(option => option.id === selectedId);
    if (selectedRegione) this.regioneCtrl.setValue(this.showFieldSede(selectedRegione.id, selectedRegione.nome) || '');
    this.filtroperRegione = selectedId.toString();

    try {
      const regioneId = selectedId;

      if (regioneId == null || regioneId == -1) {
        this.regione = [];
        this.getRegioni();
      } else {
        this.territorioService.getAllProvinceByIdRegione(regioneId).subscribe(data => {
          if (data.length === 0) {// alert('Nessuna sede associata a questa regione.');
          } else {
            for (let l = 0; l < this.sede.length; l++) {
              let check = false;

              for (let i = 0; i < data.length; i++) {
                if (this.sede[l].nome === data[i].sedeDesc) {
                  check = true;
                }
              }

              if (check == false) {
                this.sede.splice(l, 1);
                l--;
              }
            }

            this.sede.unshift({
              id: null,
              nome: ""
            });
          }

          this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterSede(value)));
        }, error => {
          this.errorMessage = 'Errore nel caricamento delle sedi associate alla regione.';
        });
      }
    } catch (error) {
      // alert('Errore nel caricamento delle sedi associate alla regione.');
      this.errorMessage = 'Errore nel caricamento delle sedi associate alla regione.';
    }
  }

  ruoloSelected(selectedValue) {
    // Trova l'oggetto del ruolo selezionato in base al valore
    const selectedRole = this.listaRuoli.find(option => option.ruolo1 === selectedValue);

    if (selectedRole) {
      // Imposta il valore del FormControl con la descrizione del ruolo
      this.ruoloCtrl.setValue(selectedRole.descrizione);
      this.ruoloSelezionato = selectedRole.ruolo1; // Controlla il codice del ruolo per abilitare/disabilitare Regione e Sede

      if (selectedRole.ruolo1 === "P12689" || selectedRole.ruolo1 === "P12690" || selectedRole.ruolo1 === "P12800" || selectedRole.ruolo1 == '') {
        this.regioneCtrl.reset();
        this.sedeCtrl.reset();
        this.regioneCtrl.disable();
        this.sedeCtrl.disable();
      } else if (selectedRole.ruolo1 === "P12799" || selectedRole.ruolo1 === "P12801" || selectedRole.ruolo1 == null) {
        this.regioneCtrl.enable();
        this.sedeCtrl.enable();
      }
    } else {
      // Se il ruolo non è stato trovato o è nullo, abilita Regione e Sede di default
      this.regioneCtrl.disable();
      this.sedeCtrl.disable();
    }
  }

  clearSede() {
    if (this.regioneCtrl.value != null && this.regioneCtrl.value != undefined && this.regioneCtrl.value != '') {
      const regioneId = parseInt(this.regioneCtrl.value.toString().split(' ')[0], 10);
      this.regioneSelected(regioneId); // this.regioneSelected(this.regioneCtrl.value.toString().split(' ')[0]);
    }

    this.regione = [];
    this.getRegioni();
    this.sedeCtrl.setValue('');
    this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterSede(value)));
  }

  clearRegione() {
    this.sede = [];
    this.getProvince();
    this.regioneCtrl.setValue('');
    this.filteredRegione = this.regioneCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterRegione(value)));
  }

  clearMatricola() {
    this.matricolaCtrl.setValue('');
  }

  clearRuolo() {
    this.ruoloCtrl.setValue('');
    this.regioneCtrl.disable();
    this.sedeCtrl.disable();
  }

  getRegioni() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.territorioService.getRegioni().subscribe(results => {
        _this.regione.push({
          id: null,
          nome: ""
        });

        for (let i = 0; i < results.length; i++) {
          _this.regione.push({
            id: results[i].sedeCodSede,
            nome: results[i].sedeDesc
          });
        } // if (this.regione.length === 0) {
        //   alert('Non ci sono sedi disponibili.');
        //   return;
        // }

      }, error => {
        _this.errorMessage = 'Non ci sono sedi disponibili.';
      });
    })();
  }

  getProvince() {
    var _this2 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.territorioService.getProvince().subscribe(results => {
        _this2.sede.push({
          id: null,
          nome: ""
        });

        for (let i = 0; i < results.length; i++) {
          _this2.sede.push({
            id: results[i].sedeCodSede,
            nome: results[i].sedeDesc
          });
        } // if (this.sede.length === 0) {
        //   alert('Non ci sono sedi provinciali disponibili.');
        //   return;
        // }

      }, error => {
        _this2.errorMessage = 'Non ci sono sedi disponibili.';
      });
    })();
  }

  ricercaFiltrata() {
    this.formatEmptyData();

    if (this.matricolaCtrl.value == null && this.ruoloCtrl.value == null) {
      this.openErrorDialog("Per effettuare la ricerca è necessario compilare il campo Matricola o il campo Ruolo.", '');
    } else {
      this.inizializzaPaginazione();
    }
  }

  formatEmptyData() {
    if (this.matricolaCtrl.value == "") {
      this.matricolaCtrl.reset();
    }

    if (this.ruoloCtrl.value == "") {
      this.ruoloCtrl.reset();
    }

    if (this.regioneCtrl.value == "") {
      this.regioneCtrl.reset();
    }

    if (this.sedeCtrl.value == "") {
      this.sedeCtrl.reset();
    }
  }

  popolaTabella() {
    this.isLoading = true;
    this.formatEmptyData();
    this.utentiSrv.getUtenti(Number.parseInt(this.pageDim.trim()), this.pageCurr, this.ordinamentoColonna, this.matricolaCtrl.value, this.ruoloSelezionato, this.regioneCtrl.value, this.sedeCtrl.value).subscribe(data => {
      this.isLoading = false;
      this.dataSourceFiltered = data;
      this.dataSource = data; // this.utenti = data;
    }, error => {
      this.errorMessage = 'Errore nel recupero degli utenti.';
      console.error('Errore nel recupero degli utenti.', error);
      this.isLoading = false;
    });
  }

  loadRuoli() {
    this.utentiSrv.getAllRuoli().subscribe(data => {
      this.listaRuoli = data;
      this.listaRuoli.unshift({
        id: null,
        ruolo1: "",
        descrizione: ""
      });
    }, error => {
      console.error('Errore nel recupero dei ruoli.', error);
      this.errorMessage = 'Errore nel recupero dei ruoli.';
      this.isLoading = false;
    });
  }

  showFieldSede(codiceSede, nomeSede) {
    if (codiceSede != null && codiceSede != undefined && codiceSede != Number('') && nomeSede != null && nomeSede != undefined && nomeSede != '') {
      var codiceFormattato = this.formatToSixDigits(codiceSede);
      return codiceFormattato + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  showField(content) {
    if (content == null || content == undefined || content == "") {
      return "-";
    }

    return content;
  }

  formatToSixDigits(value) {
    const numberValue = Number(value);

    if (value == null) {
      return null;
    }

    return numberValue.toString().padStart(6, '0');
  }

  displayFieldSede(sedeDTO) {
    let output = "";

    if (sedeDTO[0].sedeCodSede != null && sedeDTO[0].sedeCodSede != undefined) {
      output = sedeDTO[0].sedeCodSede + ' - ' + sedeDTO[0].sedeDesc;

      if (sedeDTO.length > 1) {
        output = output + ' ... ';
      }

      return output;
    } else return "-";
  }

  showAllFieldSedi(sedeDTO) {
    if (sedeDTO.length != 1) {
      let output = "";

      for (let i = 0; i < sedeDTO.length; i++) {
        if (sedeDTO[i].sedeCodSede != null && sedeDTO[i].sedeCodSede != undefined) {
          const support = sedeDTO[i].sedeCodSede + ' - ' + sedeDTO[i].sedeDesc;
          output = output + support + '<br>';
        }
      }

      this.openErrorDialog(output, '');
    } // else non devo aprire il popup perché non ho informazioni aggiuntive da mostrare

  }

  displayFieldRuolo(ruoloDTO) {
    let output = "";

    if (ruoloDTO[0].ruoloCod != null && ruoloDTO[0].ruoloCod != undefined) {
      output = ruoloDTO[0].ruoloDesc; // const output = ruoloDTO[0].ruoloCod + ' - ' + ruoloDTO[0].ruoloDesc;

      if (ruoloDTO.length > 1) {
        output = output + ' ... ';
      }

      return output;
    } else return "-";
  }

  showAllFieldRuoli(ruoloDTO) {
    if (ruoloDTO.length != 1) {
      let output = "";

      for (let i = 0; i < ruoloDTO.length; i++) {
        if (ruoloDTO[i].ruoloCod != null && ruoloDTO[i].ruoloCod != undefined) {
          const support = ruoloDTO[i].ruoloDesc; // const support = ruoloDTO[i].ruoloCod + ' - ' + ruoloDTO[i].ruoloDesc;

          output = output + support + '<br>';
        }
      }

      this.openErrorDialog(output, '');
    } // else non devo aprire il popup perché non ho informazioni aggiuntive da mostrare

  }

  openErrorDialog(message, titolo) {
    this.dialog.open(app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_4__.PopupErroreInserimentoComponent, {
      data: {
        message: message,
        titolo: titolo
      }
    });
  }

  resetRicerca() {
    this.matricolaCtrl.reset();
    this.ruoloCtrl.reset();
    this.filtroperSede = null;
    this.filtroperRegione = null;
    this.sedeCtrl.reset();
    this.regioneCtrl.reset(); // non so se commentabili

    this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterSede(value)));
    this.filteredRegione = this.regioneCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.map)(value => this._filterRegione(value)));
    this.regione = [];
    this.sede = [];
    this.getRegioni();
    this.getProvince();
    this.elemNum = 0;
    this.dataSourceFiltered = [];
    this.sedeCtrl.disable();
    this.regioneCtrl.disable();
  }

  openSedePanel() {
    this.sedeAutocompleteTrigger.openPanel();
  }

  openRegionePanel() {
    this.regioneAutocompleteTrigger.openPanel();
  }

  openRuoloPanel() {
    this.ruoloAutocompleteTrigger.openPanel();
  }

  onFocus(ctrl) {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

  sortData(sort) {
    let ordine = "";

    if (sort.direction) {
      ordine = sort.active + '_' + sort.direction;
    }

    if (this.selectedTab === 0) {
      this.ordinamentoColonna = ordine;
      this.popolaTabella();
    } else if (this.selectedTab === 1) {
      this.ordinamentoColonna = ordine;
      this.loadScarti(); // Per aggiornare la tabella scarti con ordinamento
    }
  }

  handleRowClick(row) {
    // TAB Gestione Utenti
    // if (this.selectedTab === 0) {
    //   this.utentiSrv.datiUtente$.next({row: row, selectedTab: this.selectedTab});
    //   const dialogRef = this.dialog.open(ListaUtentiModificaComponent, {
    //     disableClose: true,
    // });
    // // dialogRef.afterClosed().subscribe(result => {
    // //   // se ho fatto modifiche ho impostato l'observable a null: lo sfrutto per ricaricare i dati aggiornati
    // //   if (this.utentiSrv.datiUtente$.value == null) {
    // //     this.inizializzaPaginazione();
    // //   }
    // //   // se non ho fatto modifiche l'observable contiene ancora l'ultimo record utente cliccato
    // //   else {}
    // // });
    // }
    // TAB Lista Scarti
    // else /*if this.selectedTab === 1*/ {
    this.utentiSrv.datiUtente$.next({
      row: row,
      selectedTab: this.selectedTab
    });
    const dialogRef = this.dialog.open(_lista_utenti_modifica_lista_utenti_modifica_component__WEBPACK_IMPORTED_MODULE_5__.ListaUtentiModificaComponent, {
      disableClose: true
    }); // }
  } // FUNZIONI PAGINAZIONE TAB LISTA UTENTI


  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente

    this.base = 1; //base per creazione layout

    this.layoutDim = 6; //elementi paginazione

    this.layoutNumbers = []; //numeri del paginatore
  }

  inizializzaPaginazione() {
    this.resetPaginazione();
    this.utentiSrv.contaRicercaFiltrata(this.matricolaCtrl.value, this.ruoloSelezionato, this.regioneCtrl.value, this.sedeCtrl.value).subscribe(data => {
      this.elemNum = data.totale != null ? Number.parseInt(data.totale) : Number.parseInt(data.count); // this.elemNum = Number.parseInt(data.totale);

      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
      this.layoutNumbers = Array.from({
        length: Math.min(6, this.pageNum)
      }, (_, i) => i + 1);
      this.popolaTabella();
    });
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
    } else if (this.pageCurr === 1) {
      this.base = 1;
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
  } // FUNZIONI PAGINAZIONE TAB LISTA SCARTI


  resetPaginazioneScarti() {
    this.pageCurrScarti = 1; //pagina corrente

    this.baseScarti = 1; //base per creazione layout

    this.layoutDimScarti = 6; //elementi paginazione

    this.layoutNumbersScarti = []; //numeri del paginatore
  }

  inizializzaPaginazioneScarti() {
    this.resetPaginazioneScarti();
    this.utentiSrv.contaScarti().subscribe(data => {
      this.elemNumScarti = data.totale != null ? Number.parseInt(data.totale) : Number.parseInt(data.count); // this.elemNumScarti = Number.parseInt(data.totale);

      this.pageNumScarti = Math.ceil(this.elemNumScarti / Number(this.pageDimScarti)) || 1;
      this.layoutNumbersScarti = Array.from({
        length: Math.min(6, this.pageNumScarti)
      }, (_, i) => i + 1);
      this.loadScarti();
    });
  }

  pageNextScarti() {
    if (this.pageCurrScarti < this.pageNumScarti) {
      this.pageCurrScarti++;
      this.scorriLayoutScarti();
      this.loadScarti();
    }
  }

  pagePrevScarti() {
    if (this.pageCurrScarti > 1) {
      this.pageCurrScarti--;
      this.scorriLayoutScarti();
      this.loadScarti(); // this.popolaTabella();
    }
  }

  setPageCurrScarti(page) {
    this.pageCurrScarti = page;
    this.loadScarti(); // this.popolaTabella();
  } //scorri layoutNumbers


  scorriLayoutScarti() {
    if (this.pageCurrScarti >= this.layoutNumbersScarti[this.layoutNumbersScarti.length - 1] && this.pageCurrScarti < this.pageNumScarti) {
      this.baseScarti = this.baseScarti + (this.layoutDimScarti - 1);
      this.layoutNumbersScarti = [];

      for (let i = this.baseScarti; i < this.baseScarti + 6; i++) {
        if (i <= this.pageNumScarti) {
          this.layoutNumbersScarti.push(i);
        }
      }
    } else if (this.pageCurrScarti <= this.layoutNumbersScarti[0] && this.pageCurrScarti > 1) {
      this.baseScarti = this.baseScarti - (this.layoutDimScarti - 1);
      this.layoutNumbersScarti = [];

      for (let i = this.baseScarti; i < this.baseScarti + 6; i++) {
        if (i <= this.pageNumScarti) {
          this.layoutNumbersScarti.push(i);
        }
      }
    } else if (this.pageCurrScarti === 1) {
      this.baseScarti = 1;
    }
  }

  pageFirstScarti() {
    if (this.pageCurrScarti > 1) {
      this.pageCurrScarti = 1;
      this.baseScarti = 1;
      this.layoutNumbersScarti = Array.from({
        length: Math.min(6, this.pageNumScarti)
      }, (_, i) => i + 1);
      this.loadScarti();
    }
  }

  pageLastScarti() {
    if (this.pageCurrScarti < this.pageNumScarti) {
      this.pageCurrScarti = this.pageNumScarti;
      this.baseScarti = Math.max(1, this.pageNumScarti - 5);
      this.layoutNumbersScarti = Array.from({
        length: 6
      }, (_, i) => this.baseScarti + i).filter(k => k <= this.pageNumScarti);
      this.loadScarti();
    }
  } /////////////////////////////////////////////////////////////////////////////////////////////


  onFileSelected(event) {
    const file = event.target.files[0];

    if (file) {
      // Controlla se il file è xls o xlsx
      const extension = file.name.split('.').pop().toLowerCase();

      if (extension !== 'xls' && extension !== 'xlsx') {
        this.snackBar.open('Errore: puoi selezionare solo file .xlsx e .xls', 'Chiudi', {
          duration: 3000
        });
        this.selectedFile = null;
      } else {
        this.selectedFile = file;
        this.snackBar.open('File inviato per l\'elaborazione', 'Chiudi', {
          duration: 3000
        });
      }
    }

    this.onUpload();
  }

  onUpload() {
    if (this.selectedFile) {
      this.utentiSrv.censimentoUtenti(this.selectedFile).subscribe(response => {
        this.openErrorDialog(response.message, '');
        this.selectedFile = null;
        this.inizializzaPaginazioneScarti();
      }, error => {
        this.errorMessage = 'Errore durante l\'upload';
        this.openErrorDialog(error, 'Errore:');
      });
    } else {
      this.snackBar.open('Nessun file selezionato o File selezionato del tipo sbagliato', 'Chiudi', {
        duration: 5000
      });
    }
  }

  loadScarti() {
    const ordinamento = this.ordinamentoColonna != null ? this.ordinamentoColonna : null;
    this.utentiSrv.getScarti(Number.parseInt(this.pageDimScarti.trim()), this.pageCurrScarti, ordinamento).subscribe(data => {
      this.dataSourceScarti = data;
    }, error => {
      this.errorMessage = 'Errore nel recupero degli scarti';
    });
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

}

ListaUtentiComponent.ɵfac = function ListaUtentiComponent_Factory(t) {
  return new (t || ListaUtentiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_2__.TerritorioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar));
};

ListaUtentiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: ListaUtentiComponent,
  selectors: [["app-lista-utenti"]],
  viewQuery: function ListaUtentiComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c2, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c3, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.regioneAutocompleteTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sedeAutocompleteTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.ruoloAutocompleteTrigger = _t.first);
    }
  },
  decls: 58,
  vars: 31,
  consts: [[3, "selectedIndex", "selectedIndexChange"], ["label", "Gestione Utenti"], [1, "container-data"], [1, "child-data"], ["matInput", "", "placeholder", "Matricola", "maxlength", "10", 3, "formControl"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Ruolo", 3, "formControl", "matAutocomplete", "focus"], [3, "optionSelected"], ["autoRuolo", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Regione", 3, "formControl", "matAutocomplete", "focus"], ["autoRegione", "matAutocomplete"], ["matInput", "", "placeholder", "Province", 3, "formControl", "matAutocomplete", "focus"], ["autoSede", "matAutocomplete"], [1, "container-buttons"], [1, "container"], ["type", "file", "accept", ".xls, .xlsx", 1, "custom-file-input", 2, "display", "none", 3, "change"], ["fileUploader", ""], ["mat-button", "", 1, "btn-scarica", 3, "click"], ["mat-button", "", 1, "child-buttons", "child-buttons-conferma", 3, "click"], ["mat-button", "", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], [1, "section-title"], [4, "ngIf", "ngIfElse"], ["class", "mat-paginator-mod", 4, "ngIf"], ["nessunRisultato", ""], ["label", "Lista Scarti"], ["nessunScarto", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [3, "value"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "matricola"], ["mat-header-cell", "", "mat-sort-header", "matricola", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cognome"], ["mat-header-cell", "", "mat-sort-header", "cognome", 4, "matHeaderCellDef"], ["matColumnDef", "nome"], ["mat-header-cell", "", "mat-sort-header", "nome", 4, "matHeaderCellDef"], ["matColumnDef", "email"], ["mat-header-cell", "", "mat-sort-header", "email", 4, "matHeaderCellDef"], ["matColumnDef", "accountWindows"], ["mat-header-cell", "", "mat-sort-header", "account", 4, "matHeaderCellDef"], ["matColumnDef", "codiceSede"], ["mat-header-cell", "", "mat-sort-header", "sede", 4, "matHeaderCellDef"], ["matColumnDef", "ruoli"], ["mat-header-cell", "", "mat-sort-header", "ruolo", 4, "matHeaderCellDef"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "matricola"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "cognome"], ["mat-header-cell", "", "mat-sort-header", "nome"], ["mat-header-cell", "", "mat-sort-header", "email"], ["mat-header-cell", "", "mat-sort-header", "account"], ["mat-header-cell", "", "mat-sort-header", "sede"], [3, "click"], ["mat-header-cell", "", "mat-sort-header", "ruolo"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"], ["matColumnDef", "dataScarto"], ["mat-header-cell", "", "mat-sort-header", "dataScarto", 4, "matHeaderCellDef"], ["matColumnDef", "motivazioneScarto"], ["mat-header-cell", "", "mat-sort-header", "motivazioneScarto", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "dataScarto"], ["mat-header-cell", "", "mat-sort-header", "motivazioneScarto"], ["name", "numElemScarti", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"]],
  template: function ListaUtentiComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-tab-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedIndexChange", function ListaUtentiComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
        return ctx.selectedTab = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "form")(5, "div", 2)(6, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ListaUtentiComponent_button_8_Template, 3, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field", 3)(10, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function ListaUtentiComponent_Template_input_focus_10_listener() {
        return ctx.onFocus(ctx.ruoloCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "mat-autocomplete", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionSelected", function ListaUtentiComponent_Template_mat_autocomplete_optionSelected_11_listener($event) {
        return ctx.ruoloSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ListaUtentiComponent_mat_option_13_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ListaUtentiComponent_button_15_Template, 3, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 2)(17, "mat-form-field", 3)(18, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function ListaUtentiComponent_Template_input_focus_18_listener() {
        return ctx.onFocus(ctx.regioneCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-autocomplete", 7, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionSelected", function ListaUtentiComponent_Template_mat_autocomplete_optionSelected_19_listener($event) {
        return ctx.regioneSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ListaUtentiComponent_mat_option_21_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, ListaUtentiComponent_button_23_Template, 3, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "mat-form-field", 3)(25, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("focus", function ListaUtentiComponent_Template_input_focus_25_listener() {
        return ctx.onFocus(ctx.sedeCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "mat-autocomplete", 7, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("optionSelected", function ListaUtentiComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
        return ctx.sedeSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, ListaUtentiComponent_mat_option_28_Template, 2, 2, "mat-option", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, ListaUtentiComponent_button_30_Template, 3, 0, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "div", 14)(32, "div", 15)(33, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function ListaUtentiComponent_Template_input_change_33_listener($event) {
        return ctx.onFileSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_Template_button_click_35_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r114);

        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](34);

        return ctx.selectedFile ? ctx.onUpload() : _r10.click();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "cloud_upload");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38, " Censimento Utenti ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](39, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_Template_button_click_39_listener() {
        return ctx.ricercaFiltrata();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ListaUtentiComponent_Template_button_click_41_listener() {
        return ctx.resetRicerca();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, " Annulla ");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, ListaUtentiComponent_div_46_Template, 25, 3, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](47, ListaUtentiComponent_div_47_Template, 16, 11, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, ListaUtentiComponent_ng_template_48_Template, 7, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](50, "mat-tab", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](51, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](54, ListaUtentiComponent_div_54_Template, 13, 3, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](55, ListaUtentiComponent_div_55_Template, 16, 11, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, ListaUtentiComponent_ng_template_56_Template, 7, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](12);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](27);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](49);

      const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](57);

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedIndex", ctx.selectedTab);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.matricolaCtrl);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.matricolaCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.ruoloCtrl)("matAutocomplete", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](14, 25, ctx.filteredRuolo));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ruoloCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.regioneCtrl)("matAutocomplete", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](22, 27, ctx.filteredRegione));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.regioneCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formControl", ctx.sedeCtrl)("matAutocomplete", _r7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](29, 29, ctx.filteredSede));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.sedeCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Ricerca Lista Utenti | ", ctx.dataSourceFiltered.length, " risultati su ", ctx.elemNum, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSourceFiltered.length > 0)("ngIfElse", _r13);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSourceFiltered.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Lista Utenti Scartati | ", ctx.dataSourceScarti.length, " risultati su ", ctx.elemNumScarti, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSourceScarti.length > 0)("ngIfElse", _r17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dataSourceScarti.length > 0);
    }
  },
  directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_6__.PageHeaderComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlDirective, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteTrigger, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_24__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_25__.DefaultClassDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_27__.MatCard],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  color: white !important;\n  font-size: 16px;\n}\n\n.new-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.dx[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.new-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  right: 5px;\n  zoom: 1.2;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #2196f3;\n  margin-top: 20px;\n}\n\n.mat-card-title-mod[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 6px;\n  right: -19px;\n}\n\n.mat-card-ico-mod[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  right: 4px;\n  zoom: 1.2;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n  position: relative;\n  top: 28px;\n}\n\n.rotation-div[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  height: 100px;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.mat-paginator-empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.container-data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.child-data[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n\n.child-data[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n.child-data[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  margin-right: 50px;\n  justify-content: end;\n}\n\n.child-buttons-upload[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n  margin-right: 16px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.child-buttons-upload[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.child-buttons-upload[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n\n.btn-scarica[_ngcontent-%COMP%] {\n  background: #00b050 !important;\n  color: white !important;\n}\n\n.btn-del[_ngcontent-%COMP%] {\n  background: #e53935 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3RhLXV0ZW50aS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxhcmVhLWFtbWluaXN0cmF0aXZhXFxsaXN0YS11dGVudGlcXGxpc3RhLXV0ZW50aS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtBQ0FGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtBQ0VGOztBRENBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNFRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBRUEsaURBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDSUY7O0FEREE7RUFDRSxjQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLHlCQUFBO0VDSUY7RURGQTtJQUNFLG9CQUFBO0VDSUY7QUFDRjs7QUREQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0JBQUE7QUNHRjs7QURBQTtFQUNFLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxtQkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEQUE7RUFDRSxpQkFBQTtBQ0dGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QURBQTtFQUNFLDhCQUFBO0VBQ0EsdUJBQUE7QUNHRjs7QURBQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0dGIiwiZmlsZSI6Imxpc3RhLXV0ZW50aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgge1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLm5ldy1idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmR4IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXctaWNvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgem9vbTogMS4yO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcblxyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogLTE5cHg7XHJcbn1cclxuLm1hdC1jYXJkLWljby1tb2Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNHB4O1xyXG4gIHpvb206IDEuMjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjhweDtcclxufVxyXG5cclxuLnJvdGF0aW9uLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucmljZXJjYSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmlsdGVyLWljbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uLWZpbHRyby1hdHQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE2cHg7XHJcbn1cclxuLmJveC1maWx0cm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHpvb206IDAuODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xyXG4gIGNvbG9yOiAjZTNlM2UzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWluZXItZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5jaGlsZC1kYXRhIHtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jaGlsZC1kYXRhIGlucHV0IHtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY2hpbGQtZGF0YSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi5jaGlsZC1idXR0b25zLXVwbG9hZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGlsZC1idXR0b25zLXVwbG9hZCBtYXQtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5jaGlsZC1idXR0b25zLXVwbG9hZDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1YTA0OTtcclxufVxyXG5cclxuLmJ0bi1zY2FyaWNhIHtcclxuICBiYWNrZ3JvdW5kOiAjMDBiMDUwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4tZGVsIHtcclxuICBiYWNrZ3JvdW5kOiAjZTUzOTM1ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm5ldy1idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5keCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLm5ldy1pY28ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTFweDtcbiAgcmlnaHQ6IDVweDtcbiAgem9vbTogMS4yO1xufVxuXG4udG9wLWJvcmRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IC0xOXB4O1xufVxuXG4ubWF0LWNhcmQtaWNvLW1vZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiA0cHg7XG4gIHpvb206IDEuMjtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4ucm90YXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHpvb206IDEuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI4cHg7XG59XG5cbi5yb3RhdGlvbi1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucmljZXJjYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDJweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZpbHRlci1pY28ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogNXB4O1xuICB6b29tOiAxLjI7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4ubWF0LXBhZ2luYXRvci1lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zZWN0aW9uLWZpbHRyby1hdHQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG59XG5cbi5ib3gtZmlsdHJvIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xufVxuXG4uY2xlYXItZmlsdGVyLWljbyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgem9vbTogMC44O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xuICBjb2xvcjogI2UzZTNlMztcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmNvbnRhaW5lci1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uY2hpbGQtZGF0YSB7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNoaWxkLWRhdGEgaW5wdXQge1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uY2hpbGQtZGF0YSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmNvbnRhaW5lci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmNoaWxkLWJ1dHRvbnMtdXBsb2FkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoaWxkLWJ1dHRvbnMtdXBsb2FkIG1hdC1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jaGlsZC1idXR0b25zLXVwbG9hZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XG59XG5cbi5idG4tc2NhcmljYSB7XG4gIGJhY2tncm91bmQ6ICMwMGIwNTAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVsIHtcbiAgYmFja2dyb3VuZDogI2U1MzkzNSAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59Il19 */"]
});

/***/ }),

/***/ 52537:
/*!*******************************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/log-applicativo-dialog/log-applicativo-dialog.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogApplicativoDialogComponent": () => (/* binding */ LogApplicativoDialogComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_logs_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/logs.service */ 31388);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 87317);








function LogApplicativoDialogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-dialog-content", 2)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Informazioni di dettaglio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "table", 3)(6, "tbody")(7, "tr")(8, "td")(9, "p", 4)(10, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "\u00A0Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr")(16, "td")(17, "p", 4)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "person_pin_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "\u00A0Matricola");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "tr")(24, "td")(25, "p", 4)(26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "warning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "\u00A0Messaggio di Eccezione");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "tr")(32, "td")(33, "p", 4)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "date_range");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "\u00A0 Data Eccezione");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](39, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr")(41, "td")(42, "p", 4)(43, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " not_listed_location");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "\u00A0Stack dell' Eccezione");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LogApplicativoDialogComponent_div_0_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.vediStack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "swap_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7)(50, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-dialog-actions", 8)(53, "button", 9)(54, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Chiudi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.result.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.result.matricola);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.result.messaggio, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](39, 6, ctx_r0.result.creato, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx_r0.IsHidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.result.stacktrace);
} }
function LogApplicativoDialogComponent_ng_template_1_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 10)(1, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function LogApplicativoDialogComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogApplicativoDialogComponent_ng_template_1_ng_template_0_Template, 3, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
} }
class LogApplicativoDialogComponent {
    constructor(logSrv, dialogRef) {
        this.logSrv = logSrv;
        this.dialogRef = dialogRef;
        this.dataSource2 = [];
        this.ordine = '';
        this.IsHidden = true;
    }
    ngOnInit() {
        this.popolaRis();
    }
    popolaRis() {
        this.logSrv.getLogsId(this.logSrv.idAttivo).subscribe(data => {
            this.result = data;
            this.logSrv.idAttivo = this.result.logSrv.id;
        });
    }
    sortData(sort) {
        this.ordine = '';
        if (sort.direction)
            this.ordine = sort.active + '_' + sort.direction;
    }
    vediStack() {
        if (this.IsHidden == true) {
            this.IsHidden = false;
        }
        else {
            this.IsHidden = true;
        }
    }
}
LogApplicativoDialogComponent.ɵfac = function LogApplicativoDialogComponent_Factory(t) { return new (t || LogApplicativoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_0__.LogsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
LogApplicativoDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LogApplicativoDialogComponent, selectors: [["app-log-applicativo-dialog"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], ["align", "center"], [1, "table"], [1, "title"], [1, "content"], ["id", "bottoneDrop", "type", "btn", "href", "#", "id", "navbarDropdownMenuLink", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 3, "click"], ["id", "stack", "align", "center", 1, "dropdown-content", 3, "hidden"], ["align", "end"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"], [1, "nessuna-corr"], [1, "rotation"]], template: function LogApplicativoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LogApplicativoDialogComponent_div_0_Template, 57, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LogApplicativoDialogComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: [".table[_ngcontent-%COMP%] {\n  height: 700px;\n  width: 700px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #2196f3 !important;\n  color: white !important;\n  font-size: 16px;\n}\n\n.mat-row[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  min-width: 150px;\n}\n\n.mat-row[_ngcontent-%COMP%]:hover {\n  background-color: #e7e7e7 !important;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: white;\n}\n\n.mat-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background-color: whitesmoke;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\ntr[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 300px;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: -2px;\n}\n\n.tr-content[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n}\n\n.title[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  left: 0px;\n  font-size: 15px;\n  color: #656565;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  left: 0px;\n  font-size: 22px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #ff4c4c !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background: #4c99ff !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background-color: #d1e5ff !important;\n  color: white;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.elem-ico[_ngcontent-%COMP%] {\n  zoom: 1;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  color: #00000073 !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid silver;\n}\n\n.mat-paginator-mod[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n  padding: 5px;\n  text-align: center;\n}\n\n.pagination[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  float: left;\n  border-radius: 5px;\n  padding: 8px 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.pagination[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  transition: all 0.3s;\n  background-color: #40a8fb;\n  border-radius: 5px;\n  color: white;\n}\n\n.pagination[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:not(.active) {\n  transition: all 0.5s;\n  background-color: #ddd;\n}\n\n.paginator-info[_ngcontent-%COMP%] {\n  position: relative;\n  top: 12px;\n  left: -26px;\n  color: grey;\n  font-size: 13px;\n  float: right;\n}\n\n.paginator-numelem[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 5px;\n  left: 10px;\n  padding: 5px;\n  border: 1px solid #ddd;\n  font-size: 13px;\n}\n\n.paginator-numelem-select[_ngcontent-%COMP%] {\n  width: 80px !important;\n  color: grey;\n}\n\n.bottoni-container-fix[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: right;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n#stack[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1hcHBsaWNhdGl2by1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcYXJlYS1hbW1pbmlzdHJhdGl2YVxcbG9nLWFwcGxpY2F0aXZvLWRpYWxvZ1xcbG9nLWFwcGxpY2F0aXZvLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtBQ0FGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0FDQ0Y7O0FERUE7RUFDRSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsNEJBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxhQUFBO0FDR0Y7O0FEREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FEREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSx1REFBQTtBQ0lGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUNJRjs7QUREQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ0lGOztBRERBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDSUY7O0FEREE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUNJRjs7QUREQTtFQUNFLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQ0FBQTtFQUNBLFNBQUE7QUNJRjs7QUREQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0lGOztBRERBO0VBQ0U7SUFDRSx5QkFBQTtFQ0lGO0VERkE7SUFDRSxvQkFBQTtFQ0lGO0FBQ0Y7O0FEREE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EsNEJBQUE7QUNJRjs7QURBQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dGOztBREFBO0VBQ0UscUJBQUE7QUNHRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0dGOztBREFBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtBQ0dGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0VGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDRUY7O0FERUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURHQTtFQUNFLFdBQUE7QUNBRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBRUEsaURBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJsb2ctYXBwbGljYXRpdm8tZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIHtcclxuICBoZWlnaHQ6IDcwMHB4O1xyXG4gIHdpZHRoOiA3MDBweDtcclxuXHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ubWF0LXJvdyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tYXQtY2VsbHtcclxuICBtaW4td2lkdGg6MTUwcHg7XHJcbn1cclxuXHJcbi5tYXQtcm93OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbnRyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxufVxyXG50ZHtcclxuICBwYWRkaW5nOi0ycHg7XHJcbn1cclxuLnRyLWNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBsZWZ0OiA0MCU7XHJcbn1cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgY29sb3I6IHJnYigxMDEsIDEwMSwgMTAxKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY0YzRjICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZCB7XHJcbiAgYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2Q6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWU1ZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi51bHQtbW9kIHtcclxuICBjb2xvcjogIzAwMDAwMDczO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG4gIH1cclxufVxyXG5cclxuLmVsZW0taWNvIHtcclxuICB6b29tOiAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMHB4O1xyXG4gIGNvbG9yOiAjMDAwMDAwNzMgIWltcG9ydGFudDtcclxufVxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMTkyLCAxOTIsIDE5Mik7XHJcblxyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1tb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOGZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG5cclxuLnBhZ2luYXRvci1pbmZve1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogLTI2cHg7XHJcbiAgY29sb3I6Z3JleTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ucGFnaW5hdG9yLW51bWVsZW17XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDo1cHg7XHJcbiAgbGVmdDogMTBweDtcclxuICBwYWRkaW5nOjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbn1cclxuXHJcbi5wYWdpbmF0b3ItbnVtZWxlbS1zZWxlY3R7XHJcbiAgd2lkdGg6ODBweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4uYm90dG9uaS1jb250YWluZXItZml4e1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6MCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnNlY3Rpb24tZmlsdHJvLWF0dCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTZweDtcclxufVxyXG5cclxuLmJveC1maWx0cm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcclxufVxyXG5cclxuLmZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgem9vbTogMS4yO1xyXG4gIGNvbG9yOiAjODM4MzgzO1xyXG59XHJcblxyXG4uY2xlYXItZmlsdGVyLWljbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMzBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgem9vbTogMC44O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2xlYXItZmlsdGVyLWljbzpob3ZlciB7XHJcbiAgY29sb3I6ICNlM2UzZTM7XHJcbn1cclxuLnJpY2VyY2Ege1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbiNzdGFjayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLnRhYmxlIHtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgd2lkdGg6IDcwMHB4O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjMgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLm1hdC1yb3cge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXQtY2VsbCB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG59XG5cbi5tYXQtcm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNyAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbnRyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IC0ycHg7XG59XG5cbi50ci1jb250ZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi50aXRsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMnB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICM2NTY1NjU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYVwiLCBcIkFyaWFsXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogI2ZmNGM0YyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kIHtcbiAgYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QxZTVmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgem9vbTogMS4yO1xufVxuXG4udWx0LW1vZCB7XG4gIGNvbG9yOiAjMDAwMDAwNzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufVxuLmVsZW0taWNvIHtcbiAgem9vbTogMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgY29sb3I6ICMwMDAwMDA3MyAhaW1wb3J0YW50O1xufVxuXG5ociB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHNpbHZlcjtcbn1cblxuLm1hdC1wYWdpbmF0b3ItbW9kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGE4ZmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4ucGFnaW5hdG9yLWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogLTI2cHg7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnBhZ2luYXRvci1udW1lbGVtIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA1cHg7XG4gIGxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ucGFnaW5hdG9yLW51bWVsZW0tc2VsZWN0IHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5ib3R0b25pLWNvbnRhaW5lci1maXgge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zZWN0aW9uLWZpbHRyby1hdHQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG59XG5cbi5ib3gtZmlsdHJvIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xufVxuXG4uZmlsdGVyLWljbyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHpvb206IDEuMjtcbiAgY29sb3I6ICM4MzgzODM7XG59XG5cbi5jbGVhci1maWx0ZXItaWNvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6b29tOiAwLjg7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2xlYXItZmlsdGVyLWljbzpob3ZlciB7XG4gIGNvbG9yOiAjZTNlM2UzO1xufVxuXG4ucmljZXJjYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDJweDtcbn1cblxuI3N0YWNrIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });


/***/ }),

/***/ 42106:
/*!*****************************************************************************************!*\
  !*** ./src/app/routes/area-amministrativa/log-applicativo/log-applicativo.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogApplicativoComponent": () => (/* binding */ LogApplicativoComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_services_logs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/logs.service */ 31388);
/* harmony import */ var _log_applicativo_dialog_log_applicativo_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../log-applicativo-dialog/log-applicativo-dialog.component */ 52537);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/routes/popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ 94562);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);






























function LogApplicativoComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0su ", ctx_r2.elemNum, "");
  }
}

function LogApplicativoComponent_div_51_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 68);
  }
}

function LogApplicativoComponent_div_51_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 69);
  }
}

function LogApplicativoComponent_div_51_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_51_td_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_td_6_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r34);
      const element_r32 = restoredCtx.$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r33.openDialog(element_r32.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r32.account, " ");
  }
}

function LogApplicativoComponent_div_51_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Data evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_51_td_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_td_9_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37);
      const element_r35 = restoredCtx.$implicit;
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r36.openDialog(element_r35.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r35.creato, "dd/MM/yyyy"), " ");
  }
}

function LogApplicativoComponent_div_51_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Matricola Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_51_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_td_12_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const element_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r39.openDialog(element_r38.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r38.matricola, " ");
  }
}

function LogApplicativoComponent_div_51_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_51_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_td_15_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const element_r41 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r42.openDialog(element_r41.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r41.evento, " ");
  }
}

function LogApplicativoComponent_div_51_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Messaggio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_51_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_td_18_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const element_r44 = restoredCtx.$implicit;
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r45.openDialog(element_r44.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r44.messaggio, " ");
  }
}

const _c0 = function () {
  return {
    "first-last-page-icon": true
  };
};

function LogApplicativoComponent_div_51_a_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_a_21_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r47.pageFirst();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}

function LogApplicativoComponent_div_51_a_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_a_25_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r51);
      const ln_r49 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r50.setPageCurr(ln_r49);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r49 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ln_r49 === ctx_r28.pageCurr ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ln_r49);
  }
}

function LogApplicativoComponent_div_51_a_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_a_29_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r52.pageLast();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}

function LogApplicativoComponent_div_51_mat_option_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_mat_option_32_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r55.inizializzaPaginazione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r54 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", num_r54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", num_r54, " ");
  }
}

function LogApplicativoComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function LogApplicativoComponent_div_51_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r57.sortData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LogApplicativoComponent_div_51_tr_2_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LogApplicativoComponent_div_51_tr_3_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LogApplicativoComponent_div_51_th_5_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LogApplicativoComponent_div_51_td_6_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, LogApplicativoComponent_div_51_th_8_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, LogApplicativoComponent_div_51_td_9_Template, 3, 4, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, LogApplicativoComponent_div_51_th_11_Template, 2, 0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, LogApplicativoComponent_div_51_td_12_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LogApplicativoComponent_div_51_th_14_Template, 2, 0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, LogApplicativoComponent_div_51_td_15_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, LogApplicativoComponent_div_51_th_17_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, LogApplicativoComponent_div_51_td_18_Template, 2, 1, "td", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 58)(20, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, LogApplicativoComponent_div_51_a_21_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_Template_a_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r59.pagePrev();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, LogApplicativoComponent_div_51_a_25_Template, 2, 2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_51_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r60.pageNext();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, LogApplicativoComponent_div_51_a_29_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 64)(31, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LogApplicativoComponent_div_51_Template_mat_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r58);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r61.pageDim = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, LogApplicativoComponent_div_51_mat_option_32_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r3.listFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r3.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.pageCurr > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.layoutNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.pageCurr < ctx_r3.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r3.pageDim);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Pagina ", ctx_r3.pageCurr, " di ", ctx_r3.pageNum, "");
  }
}

function LogApplicativoComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card")(3, "div", 78)(4, "h1", 79)(5, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

function LogApplicativoComponent_mat_option_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r62 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", option_r62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", option_r62.nome, " ");
  }
}

function LogApplicativoComponent_button_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_button_63_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r64);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r63.clearTipoLog();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function LogApplicativoComponent_div_108_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0su ", ctx_r11.elemNum2, "");
  }
}

function LogApplicativoComponent_div_110_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 68);
  }
}

function LogApplicativoComponent_div_110_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 69);
  }
}

function LogApplicativoComponent_div_110_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r84.account, " ");
  }
}

function LogApplicativoComponent_div_110_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Data evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, element_r85.creato, "dd/MM/yyyy"), " ");
  }
}

function LogApplicativoComponent_div_110_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Matricola Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r86 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r86.matricola, " ");
  }
}

function LogApplicativoComponent_div_110_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r87.evento, " ");
  }
}

function LogApplicativoComponent_div_110_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Codice Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r88 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r88.tipo, " ");
  }
}

function LogApplicativoComponent_div_110_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Tipo Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LogApplicativoComponent_div_110_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r89 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r89.messaggio, " ");
  }
}

function LogApplicativoComponent_div_110_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r91);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r90.pageFirst2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}

function LogApplicativoComponent_div_110_a_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_a_28_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r94);
      const ln2_r92 = restoredCtx.$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r93.setPageCurr2(ln2_r92);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln2_r92 = ctx.$implicit;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ln2_r92 === ctx_r80.pageCurr2 ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ln2_r92);
  }
}

function LogApplicativoComponent_div_110_a_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_a_32_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r95.pageLast2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
  }
}

function LogApplicativoComponent_div_110_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_mat_option_35_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r98.inizializzaPaginazione2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num2_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", num2_r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](num2_r97);
  }
}

function LogApplicativoComponent_div_110_Template(rf, ctx) {
  if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "table", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("matSortChange", function LogApplicativoComponent_div_110_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r100.sortData2($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LogApplicativoComponent_div_110_tr_2_Template, 1, 0, "tr", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LogApplicativoComponent_div_110_tr_3_Template, 1, 0, "tr", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](4, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LogApplicativoComponent_div_110_th_5_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, LogApplicativoComponent_div_110_td_6_Template, 2, 1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](7, 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, LogApplicativoComponent_div_110_th_8_Template, 2, 0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, LogApplicativoComponent_div_110_td_9_Template, 3, 4, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](10, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, LogApplicativoComponent_div_110_th_11_Template, 2, 0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, LogApplicativoComponent_div_110_td_12_Template, 2, 1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](13, 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LogApplicativoComponent_div_110_th_14_Template, 2, 0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, LogApplicativoComponent_div_110_td_15_Template, 2, 1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](16, 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, LogApplicativoComponent_div_110_th_17_Template, 2, 0, "th", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, LogApplicativoComponent_div_110_td_18_Template, 2, 1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](19, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, LogApplicativoComponent_div_110_th_20_Template, 2, 0, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, LogApplicativoComponent_div_110_td_21_Template, 2, 1, "td", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 58)(23, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LogApplicativoComponent_div_110_a_24_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r102.pagePrev2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, LogApplicativoComponent_div_110_a_28_Template, 2, 2, "a", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "a", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_div_110_Template_a_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r103.pageNext2();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-icon", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, LogApplicativoComponent_div_110_a_32_Template, 3, 2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 64)(34, "mat-select", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function LogApplicativoComponent_div_110_Template_mat_select_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r101);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r104.pageDim2 = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, LogApplicativoComponent_div_110_mat_option_35_Template, 2, 2, "mat-option", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r12.listFiltered2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.pageCurr2 > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.layoutNumbers2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.pageCurr2 < ctx_r12.pageNum2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r12.pageDim2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.numPages2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Pagina ", ctx_r12.pageCurr2, " di ", ctx_r12.pageNum2, "");
  }
}

function LogApplicativoComponent_ng_template_111_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-card")(3, "div", 78)(4, "h1", 79)(5, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

class LogApplicativoComponent {
  constructor(dialogAlert, logSrv, dialog, formBuilder, formBuilder2) {
    this.dialogAlert = dialogAlert;
    this.logSrv = logSrv;
    this.dialog = dialog;
    this.formBuilder = formBuilder;
    this.formBuilder2 = formBuilder2;
    this.list = [];
    this.list2 = [];
    this.tipiLogApp = [];
    this.listFiltered = [];
    this.listFiltered2 = [];
    this.isLoading = true;
    this.isLoading2 = true;
    this.ricercaAtt = false;
    this.ricercaAtt2 = false;
    this.displayedColumns = ['account', 'creato', 'matricola', 'evento', 'messaggio'];
    this.dataSource1 = [];
    this.dataSourceFiltered = [];
    this.filtroStringa = '';
    this.ordine = null;
    this.displayedColumns2 = ['account', 'creato', 'matricola', 'messaggio', 'evento'];
    this.dataSource2 = [];
    this.dataSourceFiltered2 = [];
    this.filtroStringa2 = '';
    this.ordine2 = null;
    this.tipoLogCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl();
    this.filtroperTipiLog = null;
    /*  parametri tab eccezioni */

    this.formRicerca = this.formBuilder.group({
      dataInizio: null,
      dataFine: null,
      dimensione: -1,
      idAccount: '',
      idMatricola: '',
      pagina: -1
    });
    /* parametri tab eventi */

    this.formRicerca2 = this.formBuilder2.group({
      dataInizio2: null,
      dataFine2: null,
      dimensione2: -1,
      idAccount2: '',
      idMatricola2: '',
      tipoLog: this.tipoLogCtrl,
      pagina2: -1
    });
    /* / parametri */
    //----------------paginazione config--------------------------

    this.pageDim = '20'; //numero di righe per pagina

    this.pageCurr = 1; //pagina corrente

    this.pageNum = 0; //numero di pagine

    this.elemNum = 0; //numero di elementi totali

    this.base = 1; //base per creazione layout

    this.layoutDim = 6; //elementi paginazione

    this.layoutNumbers = []; //numeri del paginatore

    this.numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
    //----------------paginazione config TAB EVENTI--------------------------

    this.pageDim2 = '20'; //numero di righe per pagina

    this.pageCurr2 = 1; //pagina corrente

    this.pageNum2 = 0; //numero di pagine

    this.elemNum2 = 0; //numero di elementi totali

    this.base2 = 1; //base per creazione layout

    this.layoutDim2 = 6; //elementi paginazione

    this.layoutNumbers2 = []; //numeri del paginatore

    this.numPages2 = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ricercaAtt = false;
      _this.ricercaAtt2 = false;
      _this.isLoading = true;
      _this.isLoading2 = true;

      _this.tipiLogApplicativi();

      yield _this.updateDates1(null, null);
      yield _this.updateDates2(null, null);

      _this.inizializzaPaginazione();

      _this.inizializzaPaginazione2();

      _this.filteredTipiLog = _this.tipoLogCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(value => _this._filterTipiLog(value)));
    })();
  }

  _filterTipiLog(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.tipiLogApp.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  tipoLogSelected(selectedTipo) {
    if (selectedTipo && selectedTipo.id !== -1) {
      this.tipoLogCtrl.setValue(selectedTipo);
      this.formRicerca2.patchValue({
        tipoLog: selectedTipo.id // Imposta solo l'ID del tipo di log

      });
    } else {
      this.clearTipoLog();
    }
  }

  displayTipoLog(option) {
    // Controlla se `tipiLogApp` è definita prima di utilizzare `.find()`
    if (!this.tipiLogApp || this.tipiLogApp.length === 0) {
      return '';
    }

    if (typeof option === 'number') {
      // Cerca il nome del tipo di log basato sull'ID
      const selectedOption = this.tipiLogApp.find(tipo => tipo.id === option);
      return selectedOption ? selectedOption.nome : '';
    } // Se viene passato un oggetto, restituisci direttamente il nome


    return option ? option.nome : '';
  }

  clearTipoLog() {
    this.tipoLogCtrl.setValue(null);
    this.formRicerca2.patchValue({
      tipoLog: null
    });
  }

  onFocus(ctrl) {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

  sortData(sort) {
    this.ordine = '';

    if (sort.direction) {
      this.ordine = sort.active + '_' + sort.direction;
    }

    this.popolaRisultato();
  }

  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente

    this.base = 1; //base per creazione layout

    this.layoutDim = 6; //elementi paginazione

    this.layoutNumbers = []; //numeri del paginatore
  }

  inizializzaPaginazione() {
    this.resetPaginazione();
    const datai = this.formatDate(this.formRicerca.value.dataInizio);
    const dataf = this.formatDate(this.formRicerca.value.dataFine);
    this.logSrv.contaErrori(this.formRicerca.value.idAccount, this.formRicerca.value.idMatricola, datai, dataf).subscribe(data => {
      this.elemNum = data;
      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
      this.layoutNumbers = Array.from({
        length: Math.min(6, this.pageNum)
      }, (_, i) => i + 1);
      this.popolaRisultato();
    });
  } //scorri layoutNumbers


  scorriLayout() {
    if (this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1] && this.pageCurr < this.pageNum) {
      this.base = this.base + (this.layoutDim - 1);
      this.layoutNumbers = [];

      for (let i = this.base; i < this.base + 6 && i <= this.pageNum; i++) {
        this.layoutNumbers.push(i);
      }
    } else if (this.pageCurr <= this.layoutNumbers[0] && this.pageCurr > 1) {
      this.base = Math.max(this.base - (this.layoutDim - 1), 1);
      this.layoutNumbers = [];

      for (let i = this.base; i < this.base + 6 && i <= this.pageNum; i++) {
        this.layoutNumbers.push(i);
      }
    } else if (this.pageCurr === 1) {
      this.base = 1;
    }
  }

  scorriLayout2() {
    if (this.pageCurr2 >= this.layoutNumbers2[this.layoutNumbers2.length - 1] && this.pageCurr2 < this.pageNum2) {
      this.base2 = this.base2 + (this.layoutDim2 - 1);
      this.layoutNumbers2 = [];

      for (let i = this.base2; i < this.base2 + 6 && i <= this.pageNum2; i++) {
        this.layoutNumbers2.push(i);
      }
    } else if (this.pageCurr2 <= this.layoutNumbers2[0] && this.pageCurr2 > 1) {
      this.base2 = Math.max(this.base2 - (this.layoutDim2 - 1), 1);
      this.layoutNumbers2 = [];

      for (let i = this.base2; i < this.base2 + 6 && i <= this.pageNum2; i++) {
        this.layoutNumbers2.push(i);
      }
    } else if (this.pageCurr2 === 1) {
      this.base2 = 1;
    }
  }

  pageNext() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr++;
      this.scorriLayout();
      this.popolaRisultato();
    }
  }

  pagePrev() {
    if (this.pageCurr > 1) {
      this.pageCurr--;
      this.scorriLayout();
      this.popolaRisultato();
    }
  }

  pageFirst() {
    if (this.pageCurr > 1) {
      this.pageCurr = 1;
      this.base = 1;
      this.layoutNumbers = Array.from({
        length: Math.min(6, this.pageNum)
      }, (_, i) => i + 1);
      this.popolaRisultato();
    }
  }

  pageLast() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr = this.pageNum;
      this.base = Math.max(1, this.pageNum - 5);
      this.layoutNumbers = Array.from({
        length: 6
      }, (_, i) => this.base + i).filter(k => k <= this.pageNum);
      this.popolaRisultato();
    }
  }

  setPageCurr(page) {
    this.pageCurr = page;
    this.popolaRisultato();
  }

  popolaTabella() {
    this.logSrv.getLogsParam(this.pageDim, this.ordine, this.pageCurr - 1).subscribe(data => {
      this.dataSource1 = data;
      this.dataSourceFiltered = data;
    });
  }

  azzeraFiltro() {
    this.filtroStringa = '';
    this.dataSourceFiltered = this.dataSource1;
  }

  openDialog(id) {
    this.logSrv.idAttivo = id;
    this.dialog.open(_log_applicativo_dialog_log_applicativo_dialog_component__WEBPACK_IMPORTED_MODULE_2__.LogApplicativoDialogComponent).afterClosed().subscribe(() => {
      this.popolaRisultato();
    });
  }

  openErrorDialog(message, titolo) {
    this.dialog.open(app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_4__.PopupErroreInserimentoComponent, {
      data: {
        message: message,
        titolo: titolo
      }
    });
  }

  popolaRisultato() {
    const datai = this.formatDate(this.formRicerca.value.dataInizio);
    const dataf = this.formatDate(this.formRicerca.value.dataFine);
    this.isLoading = true;
    this.logSrv.getLogFilterByStacktrace(this.formRicerca.value.idAccount, this.formRicerca.value.idMatricola, datai, dataf, this.pageDim, this.ordine, this.pageCurr - 1).subscribe(data => {
      this.list = data;
      this.listFiltered = data;

      if (!(this.listFiltered.length > 0)
      /*&& this.ricercaAtt*/
      ) {
        this.dialogAlert.alert(`Nessun risultato per il filtro selezionato!`); //this.ricercaAtt = false;
      }
    });
  }

  resetRicerca() {
    var _this2 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Resetta il form ai valori iniziali
      _this2.formRicerca.reset({
        dataInizio: null,
        dataFine: null,
        idAccount: '',
        idMatricola: ''
      });

      yield _this2.updateDates1(null, null); // Reimposta la lista e la ricerca attiva

      _this2.list = [];
      _this2.isLoading = true;
      _this2.ricercaAtt = false; // Reimposta la paginazione

      _this2.pageCurr = 1; // Torna alla prima pagina

      _this2.inizializzaPaginazione(); // Ripopola la tabella con i dati completi

    })();
  }

  filtroRicerca() {
    this.listFiltered = this.list.filter(x => {
      var _a, _b;

      return x.matricola.toLocaleLowerCase().includes((_a = this.formRicerca.get('idMatricola')) === null || _a === void 0 ? void 0 : _a.value.toLocaleLowerCase()) && x.account.toLocaleLowerCase().includes((_b = this.formRicerca.get('idAccount')) === null || _b === void 0 ? void 0 : _b.value.toLocaleLowerCase());
    });
  } //###############################################################################################
  // ---------------------------- INIZIO TAB EVENTI -----------------------------------------------
  //###############################################################################################


  sortData2(sort2) {
    this.ordine2 = '';

    if (sort2.direction) {
      this.ordine2 = sort2.active + '_' + sort2.direction;
    }

    this.popolaTabella2();
  }

  resetPaginazione2() {
    this.pageCurr2 = 1; //pagina corrente

    this.base2 = 1; //base per creazione layout

    this.layoutDim2 = 6; //elementi paginazione

    this.layoutNumbers2 = []; //numeri del paginatore
  }

  inizializzaPaginazione2() {
    this.resetPaginazione2();

    const formatDate = date => date ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format('MM/DD/YYYY') : '';

    const datai2 = formatDate(this.formRicerca2.value.dataInizio2);
    const dataf2 = formatDate(this.formRicerca2.value.dataFine2); // Ottieni solo l'ID del tipo di log

    const tipoLogId = this.formRicerca2.value.tipoLog;
    this.logSrv.contaEventi(this.formRicerca2.value.idAccount2, this.formRicerca2.value.idMatricola2, datai2, dataf2, tipoLogId).subscribe(data2 => {
      this.elemNum2 = data2;
      this.pageNum2 = Math.ceil(this.elemNum2 / Number(this.pageDim2)) || 1;
      this.layoutNumbers2 = Array.from({
        length: Math.min(6, this.pageNum2)
      }, (_, i) => i + 1);
      this.popolaTabella2();
    });
  }

  formatDate(date) {
    return date ? moment__WEBPACK_IMPORTED_MODULE_3__(date).format('MM/DD/YYYY') : '';
  }

  pageNext2() {
    if (this.pageCurr2 < this.pageNum2) {
      this.pageCurr2++;
      this.scorriLayout2();
      this.popolaTabella2();
    }
  }

  pagePrev2() {
    if (this.pageCurr2 > 1) {
      this.pageCurr2--;
      this.scorriLayout2();
      this.popolaTabella2();
    }
  }

  setPageCurr2(page2) {
    this.pageCurr2 = page2;
    this.popolaTabella2();
  }

  pageFirst2() {
    if (this.pageCurr2 > 1) {
      this.pageCurr2 = 1;
      this.base2 = 1;
      this.layoutNumbers2 = Array.from({
        length: Math.min(6, this.pageNum2)
      }, (_, i) => i + 1);
      this.popolaTabella2();
    }
  }

  pageLast2() {
    if (this.pageCurr2 < this.pageNum2) {
      this.pageCurr2 = this.pageNum2;
      this.base2 = Math.max(1, this.pageNum2 - 5);
      this.layoutNumbers2 = Array.from({
        length: 6
      }, (_, i) => this.base2 + i).filter(k => k <= this.pageNum2);
      this.popolaTabella2();
    }
  }

  popolaTabella2() {
    const datai2 = (date => date ? this.formatDate(date) : '')(this.formRicerca2.value.dataInizio2);

    const dataf2 = (date => date ? this.formatDate(date) : '')(this.formRicerca2.value.dataFine2);

    this.isLoading2 = true;
    this.logSrv.getLogs(this.formRicerca2.value.idAccount2, this.formRicerca2.value.idMatricola2, datai2, dataf2, this.formRicerca2.value.tipoLog, this.pageDim2, this.ordine2, this.pageCurr2 - 1).subscribe(data => {
      this.list2 = data;
      this.listFiltered2 = data;

      if (!(this.listFiltered2.length > 0) && this.ricercaAtt2) {
        this.dialogAlert.alert(`Nessun risultato per il filtro selezionato!`);
        this.ricercaAtt2 = false;
      }

      this.isLoading2 = false;
    });
  }

  filtroRicercaEventi() {
    this.listFiltered2 = this.list2.filter(x => {
      var _a, _b;

      return x.matricola.toLocaleLowerCase().includes((_a = this.formRicerca2.get('idMatricola2')) === null || _a === void 0 ? void 0 : _a.value.toLocaleLowerCase()) && x.account.toLocaleLowerCase().includes((_b = this.formRicerca2.get('idAccount2')) === null || _b === void 0 ? void 0 : _b.value.toLocaleLowerCase());
    });
  }

  resetRicercaEventi() {
    var _this3 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Resetta il form ai valori iniziali
      _this3.formRicerca2.reset({
        dataInizio2: null,
        dataFine2: null,
        idAccount2: '',
        idMatricola2: '',
        tipoLog: null // Resetta anche il tipo di evento

      });

      yield _this3.updateDates2(null, null); // Reimposta la lista e la ricerca attiva

      _this3.list2 = [];
      _this3.isLoading2 = true;
      _this3.ricercaAtt2 = false; // Reimposta la paginazione

      _this3.pageCurr2 = 1; // Torna alla prima pagina

      _this3.inizializzaPaginazione2(); // Ripopola la tabella con i dati completi

    })();
  }

  tipiLogApplicativi() {
    this.logSrv.getTipiLogApplicativi().subscribe(data => {
      // Aggiungi un oggetto vuoto
      const emptyObject = {
        id: -1,
        nome: '',
        creato: new Date(),
        aggiornato: new Date()
      }; //this.tipiLogApp = data;

      this.tipiLogApp = [emptyObject, ...data];
    });
  }

  updateDates1(dataInizio, dataFine) {
    var _this4 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this4.updateDates(dataInizio, dataFine, 12, _this4.formRicerca, 'dataInizio', 'dataFine', _this4.oldStartDate, _this4.oldEndDate);
      _this4.oldStartDate = result.oldStartDate;
      _this4.oldEndDate = result.oldEndDate;
    })();
  }

  updateDates2(dataInizio2, dataFine2) {
    var _this5 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const result = yield _this5.updateDates(dataInizio2, dataFine2, 6, _this5.formRicerca2, 'dataInizio2', 'dataFine2', _this5.oldStartDate2, _this5.oldEndDate2);
      _this5.oldStartDate2 = result.oldStartDate;
      _this5.oldEndDate2 = result.oldEndDate;
    })();
  }

  updateDates(dataInizio, dataFine, maxMonths, form, dataInizioField, dataFineField, oldStartDate, oldEndDate) {
    var _this6 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const today = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day');
      let newStartDate = dataInizio ? moment__WEBPACK_IMPORTED_MODULE_3__(dataInizio).startOf('day') : null;
      let newEndDate = dataFine ? moment__WEBPACK_IMPORTED_MODULE_3__(dataFine).startOf('day') : null;

      if (!newStartDate && !newEndDate) {
        newEndDate = today.clone();
        newStartDate = today.clone().subtract(maxMonths, 'months');
        form.patchValue({
          [dataInizioField]: newStartDate.toDate(),
          [dataFineField]: newEndDate.toDate()
        });
      } else if (!newStartDate && newEndDate) {
        const oldStartDateMoment = oldStartDate ? moment__WEBPACK_IMPORTED_MODULE_3__(oldStartDate).startOf('day') : null;
        const startDateForDiff = oldStartDateMoment || newEndDate.clone().subtract(maxMonths, 'months');
        const diffDays = newEndDate.diff(startDateForDiff, 'days');
        const diffMonths = newEndDate.diff(startDateForDiff, 'months', true);

        if (diffDays < 0) {
          form.patchValue({
            [dataFineField]: oldEndDate,
            [dataInizioField]: oldStartDate
          });

          _this6.openErrorDialog('La data fine inserita è antecedente alla data inizio.', 'Errore:');
        } else if (diffMonths > maxMonths) {
          newStartDate = newEndDate.clone().subtract(maxMonths, 'months');
          form.patchValue({
            [dataInizioField]: newStartDate.toDate(),
            [dataFineField]: newEndDate.toDate()
          });

          _this6.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:');
        } else {
          form.patchValue({
            [dataFineField]: newEndDate.toDate()
          });
        }
      } else if (newStartDate && !newEndDate) {
        const oldEndDateMoment = oldEndDate ? moment__WEBPACK_IMPORTED_MODULE_3__(oldEndDate).startOf('day') : null;
        const endDateForDiff = oldEndDateMoment || today.clone();
        const diffDays = endDateForDiff.diff(newStartDate, 'days');
        const diffMonths = endDateForDiff.diff(newStartDate, 'months', true);

        if (diffMonths > maxMonths) {
          newEndDate = newStartDate.clone().add(maxMonths, 'months');

          if (newEndDate.isAfter(today)) {
            newEndDate = today.clone();
          }

          form.patchValue({
            [dataInizioField]: newStartDate.toDate(),
            [dataFineField]: newEndDate.toDate()
          });

          _this6.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:');
        } else {
          form.patchValue({
            [dataInizioField]: newStartDate.toDate()
          });
        }
      } else if (newStartDate && newEndDate) {
        if (newEndDate.isBefore(newStartDate)) {
          form.patchValue({
            [dataFineField]: oldEndDate,
            [dataInizioField]: oldStartDate
          });

          _this6.openErrorDialog('La data fine inserita è antecedente alla data inizio.', 'Errore:');
        } else {
          const diffMonths = newEndDate.diff(newStartDate, 'months', true);

          if (diffMonths > maxMonths) {
            _this6.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:'); // ricalcola data in base a maxMonths


            newStartDate = newEndDate.clone().subtract(maxMonths, 'months');
            form.patchValue({
              [dataInizioField]: newStartDate.toDate(),
              [dataFineField]: newEndDate.toDate()
            });
          } else {
            // range ricalcolato
            form.patchValue({
              [dataInizioField]: newStartDate.toDate(),
              [dataFineField]: newEndDate.toDate()
            });
          }
        }
      }

      const updatedOldStartDate = form.value[dataInizioField];
      const updatedOldEndDate = form.value[dataFineField];
      return {
        oldStartDate: updatedOldStartDate,
        oldEndDate: updatedOldEndDate
      };
    })();
  }

}

LogApplicativoComponent.ɵfac = function LogApplicativoComponent_Factory(t) {
  return new (t || LogApplicativoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_10__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_logs_service__WEBPACK_IMPORTED_MODULE_1__.LogsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder));
};

LogApplicativoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LogApplicativoComponent,
  selectors: [["app-log-applicativo"]],
  decls: 113,
  vars: 25,
  consts: [["label", "Eccezioni"], [3, "formGroup", "ngSubmit"], ["id", "cercaMatricolaEccezione"], ["appearance", "standard"], ["matInput", "text", "name", "idMatricola", "formControlName", "idMatricola", "placeholder", "Matricola"], ["id", "cercaUtenzaNtEccezione"], ["matInput", "text", "name", "idAccount", "formControlName", "idAccount", "placeholder", "Account", 3, "value"], ["id", "dataInizio"], ["matInput", "", "formControlName", "dataInizio", 3, "matDatepicker", "dateChange"], ["matSuffix", "", 3, "for"], ["dataInizio", ""], ["id", "dataFine"], ["matInput", "", "formControlName", "dataFine", 3, "matDatepicker", "dateChange"], ["dataFine", ""], [1, "date-range-info"], [1, "container-buttons"], ["type", "submit", "mat-button", "", 1, "child-buttons", "child-buttons-conferma"], ["type", "button", "mat-button", "", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], [1, "section-title"], ["class", "section-filtro-att", 4, "ngIf"], [1, "mat-card-content-with-title"], [4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], ["label", "Eventi Applicativi"], ["id", "tipoEventoSelect"], ["matInput", "", "placeholder", "Tipo di evento", 3, "formControl", "matAutocomplete", "focus"], [3, "displayWith", "optionSelected"], ["autoTipoLog", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["id", "cercaMatricola"], ["matInput", "text", "placeholder", "Matricola", "name", "idMatricola2", "formControlName", "idMatricola2"], ["id", "cercaAccount"], ["matInput", "text", "placeholder", "Account", "name", "idAccount2", "formControlName", "idAccount2"], ["id", "dataInizio2"], ["matInput", "", "formControlName", "dataInizio2", 3, "matDatepicker", "dateChange"], ["dataInizio2", ""], ["id", "dataFine2"], ["matInput", "", "formControlName", "dataFine2", 3, "matDatepicker", "dateChange"], ["dataFine2", ""], ["type", "submit", 1, "child-buttons", "child-buttons-conferma", 3, "click"], ["type", "button", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], ["nessunRisultato2", ""], [1, "section-filtro-att"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "account"], ["mat-header-cell", "", "mat-sort-header", "account", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "creato"], ["mat-header-cell", "", "mat-sort-header", "creato", 4, "matHeaderCellDef"], ["matColumnDef", "matricola"], ["mat-header-cell", "", "mat-sort-header", "matricola", 4, "matHeaderCellDef"], ["matColumnDef", "evento"], ["mat-header-cell", "", "mat-sort-header", "evento", 4, "matHeaderCellDef"], ["matColumnDef", "messaggio"], ["mat-header-cell", "", "mat-sort-header", "messaggio", 4, "matHeaderCellDef"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", "", "mat-sort-header", "account"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "creato"], ["mat-header-cell", "", "mat-sort-header", "matricola"], ["mat-header-cell", "", "mat-sort-header", "evento"], ["mat-header-cell", "", "mat-sort-header", "messaggio"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "tipo"], ["mat-header-cell", "", "mat-sort-header", "tipo", 4, "matHeaderCellDef"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "tipo"]],
  template: function LogApplicativoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-tab-group")(2, "mat-tab", 0)(3, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LogApplicativoComponent_Template_form_ngSubmit_3_listener() {
        return ctx.inizializzaPaginazione();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 2)(5, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Matricola");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 5)(10, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 7)(16, "mat-form-field", 3)(17, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function LogApplicativoComponent_Template_input_dateChange_17_listener($event) {
        return ctx.updateDates1($event.value, null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Data Inizio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-datepicker-toggle", 9)(21, "mat-datepicker", null, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 11)(24, "mat-form-field", 3)(25, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function LogApplicativoComponent_Template_input_dateChange_25_listener($event) {
        return ctx.updateDates1(null, $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Data Fine");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "mat-datepicker-toggle", 9)(29, "mat-datepicker", null, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "br")(32, "br")(33, "br")(34, "br")(35, "br")(36, "br")(37, "br")(38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "range massimo selezionabile per le date \u00E8 di 12 mesi");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 15)(42, "button", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_Template_button_click_44_listener() {
        return ctx.resetRicerca();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " Annulla ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, LogApplicativoComponent_div_49_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-card-content", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, LogApplicativoComponent_div_51_Template, 35, 14, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](52, LogApplicativoComponent_ng_template_52_Template, 7, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-tab", 23)(55, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function LogApplicativoComponent_Template_form_ngSubmit_55_listener() {
        return ctx.inizializzaPaginazione2();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 24)(57, "mat-form-field", 3)(58, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("focus", function LogApplicativoComponent_Template_input_focus_58_listener() {
        return ctx.onFocus(ctx.tipoLogCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "mat-autocomplete", 26, 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("optionSelected", function LogApplicativoComponent_Template_mat_autocomplete_optionSelected_59_listener($event) {
        return ctx.tipoLogSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, LogApplicativoComponent_mat_option_61_Template, 2, 2, "mat-option", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](63, LogApplicativoComponent_button_63_Template, 3, 0, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 30)(65, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Matricola");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 32)(70, "mat-form-field", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](74, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 34)(76, "mat-form-field", 3)(77, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function LogApplicativoComponent_Template_input_dateChange_77_listener($event) {
        return ctx.updateDates2($event.value, null);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "Data Inizio");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "mat-datepicker-toggle", 9)(81, "mat-datepicker", null, 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 37)(84, "mat-form-field", 3)(85, "input", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function LogApplicativoComponent_Template_input_dateChange_85_listener($event) {
        return ctx.updateDates2(null, $event.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Data Fine");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](88, "mat-datepicker-toggle", 9)(89, "mat-datepicker", null, 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](91, "br")(92, "br")(93, "br")(94, "br")(95, "br")(96, "br")(97, "br")(98, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "range massimo selezionabile per le date \u00E8 di 6 mesi");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 15)(102, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_Template_button_click_102_listener() {
        ctx.inizializzaPaginazione2();
        return ctx.ricercaAtt2 = true;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LogApplicativoComponent_Template_button_click_104_listener() {
        return ctx.resetRicercaEventi();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](105, " Annulla ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "p", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](108, LogApplicativoComponent_div_108_Template, 2, 1, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "mat-card-content", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, LogApplicativoComponent_div_110_Template, 38, 14, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](111, LogApplicativoComponent_ng_template_111_Template, 7, 0, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](22);

      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](30);

      const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](53);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](60);

      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](82);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](90);

      const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](112);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formRicerca);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Ricerca Logs Eccezioni | ", ctx.listFiltered.length, " risultati");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.filtroStringa);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.list.length > 0)("ngIfElse", _r4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formRicerca2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControl", ctx.tipoLogCtrl)("matAutocomplete", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("displayWith", ctx.displayTipoLog);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](62, 23, ctx.filteredTipiLog));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.tipoLogCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matDatepicker", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Ricerca Logs Eventi | ", ctx.listFiltered2.length, " risultati");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.filtroStringa2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.list2.length > 0)("ngIfElse", _r13);
    }
  },
  directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__.PageHeaderComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__.MatTab, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatSuffix, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepicker, _angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardContent, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_24__.MatOption, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatAutocomplete],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
  styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n\n\n.new-button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.dx[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.new-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  right: 5px;\n  zoom: 1.2;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #2f6dd5;\n  margin-top: 20px;\n}\n\n.mat-card-title-mod[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 6px;\n  right: -19px;\n}\n\n.mat-card-ico-mod[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  right: 4px;\n  zoom: 1.2;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n  position: relative;\n  top: 28px;\n}\n\n.rotation-div[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  height: 100px;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.mat-paginator-empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n\n\n#dataInizio[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 35px;\n  font-size: 17px;\n  zoom: 0.84;\n  float: left;\n  padding-top: 20px;\n}\n\n#dataFine[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 355px;\n  font-size: 17px;\n  zoom: 0.84;\n  float: left;\n  padding-top: 20px;\n}\n\n#dataInizio2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 40px;\n  font-size: 17px;\n  zoom: 0.84;\n  float: left;\n  padding-top: 20px;\n}\n\n#dataFine2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 150px;\n  left: 355px;\n  font-size: 17px;\n  zoom: 0.84;\n  float: left;\n  padding-top: 20px;\n}\n\n#tipoEventoSelect[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 35px;\n  float: left;\n}\n\n#cercaMatricola[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 300px;\n  float: left;\n}\n\n#cercaAccount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 550px;\n  float: left;\n}\n\n#cercaEvento[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  right: 50px;\n  top: -27.8px;\n}\n\n#annullaEvento[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  right: 60px;\n  top: -27.8px;\n}\n\n#cercaMatricolaEccezione[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 30px;\n  float: left;\n}\n\n#cercaUtenzaNtEccezione[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 60px;\n  left: 300px;\n  float: left;\n}\n\n#cercaEventoEccezione[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  right: 50px;\n  top: 35px;\n}\n\n#annullaEventoEccezione[_ngcontent-%COMP%] {\n  position: relative;\n  float: right;\n  right: 60px;\n  top: 35px;\n}\n\n.mat-form-field-invalid[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%] {\n  background-color: red !important;\n}\n\n.date-range-info[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: gray;\n  margin-top: -10px;\n  margin-bottom: 20px;\n  margin-left: 30px;\n  text-align: left;\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  margin-right: 50px;\n  justify-content: end;\n}\n\n.pagination-firstorlast[_ngcontent-%COMP%] {\n  font-size: 90%;\n  padding-top: 3%;\n  padding-bottom: 2%;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZy1hcHBsaWNhdGl2by5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxhcmVhLWFtbWluaXN0cmF0aXZhXFxsb2ctYXBwbGljYXRpdm9cXGxvZy1hcHBsaWNhdGl2by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUlFLGVBQUE7QUNGRjs7QURLQTs7Ozs7O0dBQUE7O0FBd0JBO0VBQ0Usa0JBQUE7QUNuQkY7O0FEc0JBO0VBQ0UsWUFBQTtBQ25CRjs7QURzQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ25CRjs7QURzQkE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFFQSxnQkFBQTtBQ3BCRjs7QURzQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ25CRjs7QURxQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2xCRjs7QURxQkE7RUFDRSx1QkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDbEJGOztBRHFCQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDbEJGOztBRHFCQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDbEJGOztBRHFCQTtFQUNFLFdBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ2xCRjs7QURxQkE7RUFDRSx1QkFBQTtFQUNBLFlBQUE7QUNsQkY7O0FEb0JBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ2pCRjs7QURtQkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUVBLGlEQUFBO0FDaEJGOztBRG1CQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDaEJGOztBRG1CQTtFQUNFLGNBQUE7QUNoQkY7O0FEbUJBO0VBQ0U7SUFDRSx5QkFBQTtFQ2hCRjtFRGtCQTtJQUNFLG9CQUFBO0VDaEJGO0FBQ0Y7O0FENkJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBOztBQW1EQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3RERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUN2REY7O0FEMERBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDdkRGOztBRDBEQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxnQ0FBQTtBQ3ZERjs7QUQwREE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ3ZERjs7QUQwREE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDdkRGOztBRDBEQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDdkRGOztBRDBEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FBQSIsImZpbGUiOiJsb2ctYXBwbGljYXRpdm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLyogLm1hdC1jYXJkIHtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59ICovXHJcblxyXG4vLyAubWF0LXJvdyB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4vLyB9XHJcblxyXG4ubmV3LWJ1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZHgge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5ldy1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi50b3AtYm9yZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogLTE5cHg7XHJcbn1cclxuLm1hdC1jYXJkLWljby1tb2Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogNHB4O1xyXG4gIHpvb206IDEuMjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMjhweDtcclxufVxyXG5cclxuLnJvdGF0aW9uLWRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG4ucmljZXJjYSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDJweDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uZmlsdGVyLWljbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEycHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbiAgY29sb3I6ICM4MzgzODM7XHJcbn1cclxuXHJcbi5tYXQtcGFnaW5hdG9yLWVtcHR5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbi5zZWN0aW9uLWZpbHRyby1hdHQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE2cHg7XHJcbn1cclxuLmJveC1maWx0cm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHpvb206IDAuODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xyXG4gIGNvbG9yOiAjZTNlM2UzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICB9XHJcbn1cclxuXHJcbi8vcGFnaW5hdG9yIHN0eWxlXHJcblxyXG4vL2NvbnRhaW5lclxyXG4vLyAubWF0LXBhZ2luYXRvci1tb2Qge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gICBoZWlnaHQ6IDUwcHg7XHJcbi8vICAgcGFkZGluZzo1cHg7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vKiAucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOGZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59ICovXHJcblxyXG5cclxuLy8gLnBhZ2luYXRvci1pbmZve1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6IDEycHg7XHJcbi8vICAgbGVmdDogLTI2cHg7XHJcbi8vICAgY29sb3I6Z3JleTtcclxuLy8gICBmb250LXNpemU6IDEzcHg7XHJcbi8vICAgZmxvYXQ6IHJpZ2h0O1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdG9yLW51bWVsZW17XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHRvcDo1cHg7XHJcbi8vICAgbGVmdDogMTBweDtcclxuLy8gICBwYWRkaW5nOjVweDtcclxuLy8gICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuXHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0b3ItbnVtZWxlbS1zZWxlY3R7XHJcbi8vICAgd2lkdGg6ODBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiBncmV5O1xyXG4vLyB9XHJcblxyXG4jZGF0YUluaXppbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgbGVmdDogMzVweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgem9vbTogMC44NDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuXHJcbn1cclxuXHJcbiNkYXRhRmluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgbGVmdDogMzU1cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHpvb206IDAuODQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiNkYXRhSW5pemlvMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgbGVmdDogNDBweDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgem9vbTogMC44NDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG5cclxuI2RhdGFGaW5lMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTUwcHg7XHJcbiAgbGVmdDogMzU1cHg7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHpvb206IDAuODQ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiN0aXBvRXZlbnRvU2VsZWN0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDYwcHg7XHJcbiAgbGVmdDogMzVweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2NlcmNhTWF0cmljb2xhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NjBweDtcclxuICBsZWZ0OiAzMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2NlcmNhQWNjb3VudHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOjYwcHg7XHJcbiAgbGVmdDogNTUwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjZXJjYUV2ZW50b3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OjUwcHg7XHJcbiAgdG9wOiAtMjcuOHB4O1xyXG59XHJcblxyXG4jYW5udWxsYUV2ZW50b3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OjYwcHg7XHJcbiAgdG9wOiAtMjcuOHB4O1xyXG59XHJcblxyXG4jY2VyY2FNYXRyaWNvbGFFY2NlemlvbmV7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDo2MHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbiNjZXJjYVV0ZW56YU50RWNjZXppb25le1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6NjBweDtcclxuICBsZWZ0OiAzMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2NlcmNhRXZlbnRvRWNjZXppb25le1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcmlnaHQ6NTBweDtcclxuICB0b3A6MzVweDtcclxufVxyXG5cclxuI2FubnVsbGFFdmVudG9FY2NlemlvbmV7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICByaWdodDo2MHB4O1xyXG4gIHRvcDozNXB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRhdGUtcmFuZ2UtaW5mbyB7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxuICBjb2xvcjogZ3JheTtcclxuICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tZmlyc3Rvcmxhc3Qge1xyXG4gIGZvbnQtc2l6ZTogOTAlO1xyXG4gIHBhZGRpbmctdG9wOiAzJTtcclxuICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4vKiAucGFnaW5hdGlvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOGZiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG59ICovXHJcblxyXG4vLyBzXHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4vKiAubWF0LWNhcmQge1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDI4MG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0gKi9cbi5uZXctYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uZHgge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uZXctaWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHpvb206IDEuMjtcbn1cblxuLnRvcC1ib3JkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZS1tb2Qge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHJpZ2h0OiAtMTlweDtcbn1cblxuLm1hdC1jYXJkLWljby1tb2Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICByaWdodDogNHB4O1xuICB6b29tOiAxLjI7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLnJvdGF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB6b29tOiAxLjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyOHB4O1xufVxuXG4ucm90YXRpb24tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJpY2VyY2Ege1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAycHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5maWx0ZXItaWNvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDVweDtcbiAgem9vbTogMS4yO1xuICBjb2xvcjogIzgzODM4Mztcbn1cblxuLm1hdC1wYWdpbmF0b3ItZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uc2VjdGlvbi1maWx0cm8tYXR0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNnB4O1xufVxuXG4uYm94LWZpbHRybyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogNXB4IDMwcHggNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xuICBjb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcbn1cblxuLmNsZWFyLWZpbHRlci1pY28ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHpvb206IDAuODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbGVhci1maWx0ZXItaWNvOmhvdmVyIHtcbiAgY29sb3I6ICNlM2UzZTM7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn1cbi8qIC5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGE4ZmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufSAqL1xuI2RhdGFJbml6aW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgem9vbTogMC44NDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jZGF0YUZpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUwcHg7XG4gIGxlZnQ6IDM1NXB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHpvb206IDAuODQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI2RhdGFJbml6aW8yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE1MHB4O1xuICBsZWZ0OiA0MHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHpvb206IDAuODQ7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuI2RhdGFGaW5lMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogMzU1cHg7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgem9vbTogMC44NDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4jdGlwb0V2ZW50b1NlbGVjdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiAzNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2NlcmNhTWF0cmljb2xhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDMwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2NlcmNhQWNjb3VudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBsZWZ0OiA1NTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNjZXJjYUV2ZW50byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogNTBweDtcbiAgdG9wOiAtMjcuOHB4O1xufVxuXG4jYW5udWxsYUV2ZW50byB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICByaWdodDogNjBweDtcbiAgdG9wOiAtMjcuOHB4O1xufVxuXG4jY2VyY2FNYXRyaWNvbGFFY2NlemlvbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgbGVmdDogMzBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbiNjZXJjYVV0ZW56YU50RWNjZXppb25lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDYwcHg7XG4gIGxlZnQ6IDMwMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuI2NlcmNhRXZlbnRvRWNjZXppb25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiA1MHB4O1xuICB0b3A6IDM1cHg7XG59XG5cbiNhbm51bGxhRXZlbnRvRWNjZXppb25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogcmlnaHQ7XG4gIHJpZ2h0OiA2MHB4O1xuICB0b3A6IDM1cHg7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLmRhdGUtcmFuZ2UtaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiBncmF5O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb250YWluZXItYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG59XG5cbi5wYWdpbmF0aW9uLWZpcnN0b3JsYXN0IHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHBhZGRpbmctdG9wOiAzJTtcbiAgcGFkZGluZy1ib3R0b206IDIlO1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi8qIC5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4ucGFnaW5hdGlvbiBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmbG9hdDogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGE4ZmI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufSAqLyJdfQ== */"]
});

/***/ }),

/***/ 50360:
/*!*************************************************************!*\
  !*** ./src/app/shared/models/ruoli-comunicazioni.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuoliComunicazioni": () => (/* binding */ RuoliComunicazioni)
/* harmony export */ });
class RuoliComunicazioni {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.idComunicazione = 0;
        this.ruolo = '';
    }
}


/***/ }),

/***/ 95827:
/*!**********************************************!*\
  !*** ./src/app/shared/models/ruolo.model.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ruolo": () => (/* binding */ Ruolo)
/* harmony export */ });
class Ruolo {
}


/***/ }),

/***/ 31388:
/*!*************************************************!*\
  !*** ./src/app/shared/services/logs.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogsService": () => (/* binding */ LogsService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class LogsService {
    constructor(http) {
        this.http = http;
        this.idAttivo = 0;
        this.api_url = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Log/';
    }
    formatDate(date) {
        if (date) {
            const d = new Date(date);
            const month = ('0' + (d.getMonth() + 1)).slice(-2);
            const day = ('0' + d.getDate()).slice(-2);
            const year = d.getFullYear();
            return `${year}-${month}-${day}`;
        }
        return '';
    }
    getLogs(account2, matricola2, dataInizio2, dataFine2, tipoLog, dim2, ordine2, pagina2) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (account2)
            params = params.set('account', account2);
        if (matricola2)
            params = params.set('matricola', matricola2);
        if (tipoLog)
            params = params.set('tipo', tipoLog.toString());
        if (dataInizio2)
            params = params.set('dataInizio', this.formatDate(dataInizio2));
        if (dataFine2)
            params = params.set('dataFine', this.formatDate(dataFine2));
        if (ordine2 != null && ordine2 != '')
            params = params.set('ordine', ordine2);
        params = params.set('dimensione', dim2);
        params = params.set('pagina', pagina2.toString());
        const url = this.api_url + 'cercaSoloLogEventi';
        return this.http.get(url, { params });
    }
    getLogFilterByStacktrace(account, matricola, dataInizio, dataFine, dim, ordine, pagina) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (account)
            params = params.set('account', account);
        if (matricola)
            params = params.set('matricola', matricola);
        if (dataInizio)
            params = params.set('dataInizio', this.formatDate(dataInizio));
        if (dataFine)
            params = params.set('dataFine', this.formatDate(dataFine));
        if (ordine != null && ordine != '')
            params = params.set('ordine', ordine);
        params = params.set('dimensione', dim);
        params = params.set('pagina', pagina.toString());
        const url = this.api_url + 'filtraPerLogError';
        return this.http.get(url, { params });
    }
    getLogsId(id) {
        return this.http.get(this.api_url + 'getById/' + id);
    }
    conta() {
        return this.http.get(this.api_url + 'conta');
    }
    contaErrori(account, matricola, dataInizio, dataFine) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (account)
            params = params.set('account', account);
        if (matricola)
            params = params.set('matricola', matricola);
        if (dataInizio)
            params = params.set('dataInizio', this.formatDate(dataInizio));
        if (dataFine)
            params = params.set('dataFine', this.formatDate(dataFine));
        const url = this.api_url + 'contaPerLogError';
        return this.http.get(url, { params }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.count));
    }
    getTipiLogApplicativi() {
        let url = this.api_url + 'tipi-log-usati';
        return this.http.get(url);
    }
    getLogsParam(dim, ordine, pagina) {
        let url = `${this.api_url}getAll/?dimensione=${dim}&ordine=${ordine}&pagina=${pagina}`;
        return this.http.get(url);
    }
    contaEventi(account, matricola, dataInizio, dataFine, tipoLog) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (account)
            params = params.set('account', account);
        if (matricola)
            params = params.set('matricola', matricola);
        if (dataInizio)
            params = params.set('dataInizio', this.formatDate(dataInizio));
        if (dataFine)
            params = params.set('dataFine', this.formatDate(dataFine));
        if (tipoLog !== undefined && tipoLog !== null)
            params = params.set('tipo', tipoLog.toString());
        const url = this.api_url + 'contaPerLogEventi';
        return this.http.get(url, { params }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => response.count));
    }
}
LogsService.ɵfac = function LogsService_Factory(t) { return new (t || LogsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
LogsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: LogsService, factory: LogsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 99055:
/*!***************************************************************!*\
  !*** ./src/app/shared/services/tipi-comunicazione.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipiComunicazioneService": () => (/* binding */ TipiComunicazioneService)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);




class TipiComunicazioneService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'TipiComunicazioni/';
    }
    getTipiComunicazioni() {
        return this.http.get(`${this.apiUrl}GetAllTipoComunicazioni`);
    }
}
TipiComunicazioneService.ɵfac = function TipiComunicazioneService_Factory(t) { return new (t || TipiComunicazioneService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
TipiComunicazioneService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TipiComunicazioneService, factory: TipiComunicazioneService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 98613:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class UserService {
    constructor(http) {
        this.http = http;
        this.datiUtente$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.datiUtente);
        // datiUtenteScarti!: any;
        // datiUtenteScarti$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.datiUtenteScarti);
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Utenti/';
        this.apiUrlCensimento = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'CensimentoUtenti/';
    }
    // getUser(idMatricola: number, idNome: number, idCognome: number): Observable<UserService[]> {
    //   let url = environment.MS_SIRICOAPI + environment.API_URI+'account?';
    //   if (idMatricola>0) {
    //     url += '&idMatricola='+idMatricola;
    //   }
    //   if (idNome>0) {
    //     url += '&idNome='+idNome;
    //   }
    //   if (idCognome>0) {
    //     url += '&idCognome='+idCognome;
    //   }
    //   return this.http.get<UserService[]>(url);
    // }
    // getUtente(): Observable<UserService[]> {
    //   let url = environment.MS_SIRICOAPI + environment.API_URI+'account?';
    //   return this.http.get<UserService[]>(url);
    // }
    contaScarti() {
        const URL = this.apiUrlCensimento + 'scarti/count';
        // console.log('URL:',URL);
        return this.http.get(URL);
    }
    contaRicercaFiltrata(matricola, codiceRuolo, codiceRegione, codiceSede) {
        // console.log('DATI SERVICE:',matricola, codiceRuolo, codiceRegione, codiceSede);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (matricola)
            params = params.set('matricola', matricola.trim());
        if (codiceRuolo)
            params = params.set('codiceRuolo', codiceRuolo);
        if (codiceRegione)
            params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
        if (codiceSede)
            params = params.set('codiceSede', codiceSede.split(" ")[0]);
        const URL = this.apiUrl + 'contaRicercaFiltrataUtenti' + '?' + params.toString();
        // const URL = this.apiUrl + 'ricercaFiltrataUtenti' + '?' + params.toString();
        // console.log('params:',params);
        // console.log('URL:',URL);
        return this.http.get(URL);
        // return this.http.get<{ count: number }>(URL, { params });
        // return this.http.get<Utente[]>(URL);
    }
    getUtenti(quantita, pagina, ordinamentoColonna, matricola, codiceRuolo, codiceRegione, codiceSede) {
        // console.log('DATI SERVICE:',matricola, codiceRuolo, codiceRegione, codiceSede);
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (quantita)
            params = params.set('quantita', quantita);
        if (pagina)
            params = params.set('pagina', pagina);
        if (ordinamentoColonna)
            params = params.set('ordinamentoColonna', ordinamentoColonna);
        if (matricola)
            params = params.set('matricola', matricola.trim());
        if (codiceRuolo)
            params = params.set('codiceRuolo', codiceRuolo);
        if (codiceRegione)
            params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
        if (codiceSede)
            params = params.set('codiceSede', codiceSede.split(" ")[0]);
        const URL = this.apiUrl + 'ricercaFiltrataUtenti' + '?' + params.toString();
        // console.log('params:',params);
        return this.http.get(URL);
    }
    //  getUtenti(): Observable<Utente[]> {
    //   // console.log('getUtenti()');
    //   let url = this.apiUrl + 'getAllUtentiDTO' //environment.MS_SIRICOAPI + environment.API_URI+'utenti';
    //   // let url = "http://localhost:5250/api/Account/getAllUtenti" //environment.MS_SIRICOAPI + environment.API_URI+'utenti';
    //   return this.http.get<Utente[]>(url);
    // }
    getAllRuoli() {
        let url = this.apiUrl + 'getAllRuoli';
        return this.http.get(url);
    }
    censimentoUtenti(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders();
        headers.append('Content-Type', 'multipart/form-data');
        return this.http.post(`${this.apiUrlCensimento}importaUtenti`, formData, { headers });
    }
    getScarti(quantita, pagina, orderBy) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        if (quantita)
            params = params.set('quantita', quantita);
        if (pagina)
            params = params.set('pagina', pagina);
        if (orderBy)
            params = params.set('orderBy', orderBy);
        // console.log('params SERVICE:',quantita, pagina, orderBy);
        const URL = `${this.apiUrlCensimento}getScarti` + '?' + params.toString();
        return this.http.get(URL);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_routes_area-amministrativa_area-amministrativa_module_ts.js.map