"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["src_app_routes_organizzazione_rilevazioni_rilevazioni_module_ts"],{

/***/ 50220:
/*!************************************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/modal-dettagli-segnalazione/modal-dettagli-segnalazione.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDettagliSegnalazioneComponent": () => (/* binding */ ModalDettagliSegnalazioneComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/rilevazione.service */ 78680);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 87317);
















function ModalDettagliSegnalazioneComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "h3")(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Data Invio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "h3")(9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div")(14, "h3")(15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div")(20, "h3")(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.dataInvio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.nomeSettoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.nomeAreaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.nomeSede);
} }
function ModalDettagliSegnalazioneComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14)(1, "div")(2, "h3")(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Data Invio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div")(8, "h3")(9, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Tipologia Contezioso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div")(14, "h3")(15, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div")(20, "h3")(21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div")(26, "h3")(27, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.dataInvio);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.nomeContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.nomeSettoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.nomeAreaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.nomeSede);
} }
function ModalDettagliSegnalazioneComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 17);
} }
function ModalDettagliSegnalazioneComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 18);
} }
function ModalDettagliSegnalazioneComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Criticit\u00E1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalDettagliSegnalazioneComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", 99, "%")("height", 150, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("cols", 40);
} }
function ModalDettagliSegnalazioneComponent_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Suggerimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalDettagliSegnalazioneComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "textarea", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", 99, "%")("height", 150, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("cols", 40);
} }
function ModalDettagliSegnalazioneComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Integrazione DR");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalDettagliSegnalazioneComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", 99, "%")("height", 150, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("cols", 40);
} }
function ModalDettagliSegnalazioneComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Integrazione DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalDettagliSegnalazioneComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", 99, "%")("height", 150, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 10)("cols", 40);
} }
// import { DialogData } from 'app/routes/area-amministrativa/dettaglio-comunicazione/dettaglio-comunicazione.component';
class ModalDettagliSegnalazioneComponent {
    constructor(data, storageService, stepperService, rilevazioneService, formBuilder) {
        this.data = data;
        this.storageService = storageService;
        this.stepperService = stepperService;
        this.rilevazioneService = rilevazioneService;
        this.formBuilder = formBuilder;
        this.datiAspetto = [];
        this.aspetto = [];
        this.nomeSettoreMateria = '';
        this.nomeAreaProdotto = '';
        this.nomeSede = '';
        this.nomeContenzioso = '';
        this.sedeId = 0;
        this.dataInvio = '';
        this.idAspettoSegnalazione = 0;
        this.idStatoSalvataggioSegnalazione = 0;
        this.displayedColumns = ['criticita', 'suggerimento'];
        this.ruolo = '';
        this.form1 = this.formBuilder.group({
            criticita: [''],
            suggerimento: [''],
            readOnlyNoteDR: [''],
            readOnlyNoteDC: ['']
        });
    }
    ngOnInit() {
        this.loadData();
    }
    loadData() {
        this.titolo = this.stepperService.inserimentoTipoSegnalazione$.value;
        this.idAspettoSegnalazione = this.data;
        this.ruolo = this.storageService.getItem('allroles');
        const prodotto = 'Prodotto';
        const contenzioso = 'Contenzioso';
        switch (this.titolo) {
            case prodotto: {
                this.segnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value;
                this.idStatoSalvataggioSegnalazione = this.segnalazioneProdotto.statoId;
                if (this.idStatoSalvataggioSegnalazione == 5) {
                    this.displayedColumns.push('integrazioneDR', 'integrazioneDC');
                }
                this.nomeSettoreMateria = this.segnalazioneProdotto.settoreMateria;
                this.nomeAreaProdotto = this.segnalazioneProdotto.areaProdotto;
                this.nomeSede = this.segnalazioneProdotto.sede;
                this.sedeId = this.segnalazioneProdotto.sedeId;
                this.dataInvio = this.segnalazioneProdotto.data1;
                this.rilevazioneService.getDettagliAspettoSegnalazioneById(this.idAspettoSegnalazione).subscribe({
                    next: (aspettoSegnalazione) => {
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
                        this.datiAspetto = []; // Imposta a un array vuoto in caso di errore
                    }
                });
                break;
            }
            case contenzioso: {
                this.segnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value;
                this.idStatoSalvataggioSegnalazione = this.segnalazioneContenzioso.statoId;
                if (this.idStatoSalvataggioSegnalazione == 5) {
                    this.displayedColumns.push('integrazioneDR', 'integrazioneDC');
                }
                this.nomeSettoreMateria = this.segnalazioneContenzioso.settoreMateria;
                this.nomeAreaProdotto = this.segnalazioneContenzioso.areaProdotto;
                this.nomeSede = this.segnalazioneContenzioso.sede;
                this.sedeId = this.segnalazioneContenzioso.sedeId;
                this.nomeContenzioso = this.segnalazioneContenzioso.contenziosoDesc;
                this.dataInvio = this.segnalazioneContenzioso.data1;
                this.rilevazioneService.getDettagliAspettoSegnalazioneContenziosoById(this.idAspettoSegnalazione).subscribe({
                    next: (aspettoSegnalazione) => {
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
                        this.datiAspetto = []; // Imposta a un array vuoto in caso di errore
                    }
                });
                break;
            }
        }
    }
}
ModalDettagliSegnalazioneComponent.ɵfac = function ModalDettagliSegnalazioneComponent_Factory(t) { return new (t || ModalDettagliSegnalazioneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_0__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_2__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_1__.RilevazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder)); };
ModalDettagliSegnalazioneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModalDettagliSegnalazioneComponent, selectors: [["app-modal-dettagli-segnalazione"]], decls: 27, vars: 7, consts: [["class", "display-title", 4, "ngIf"], [1, "main-ico"], [3, "formGroup"], ["mat-table", "", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "criticita"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "suggerimento"], ["matColumnDef", "integrazioneDR"], ["matColumnDef", "integrazioneDC"], ["align", "center"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["matInput", "", "formControlName", "criticita", "readonly", "", 3, "rows", "cols"], ["matInput", "", "formControlName", "suggerimento", "readonly", "", 3, "rows", "cols"], ["matInput", "", "formControlName", "readOnlyNoteDR", "readonly", "", 3, "rows", "cols"], ["matInput", "", "formControlName", "readOnlyNoteDC", "readonly", "", 3, "rows", "cols"]], template: function ModalDettagliSegnalazioneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ModalDettagliSegnalazioneComponent_div_0_Template, 25, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalDettagliSegnalazioneComponent_div_1_Template, 31, 5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p")(3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "build");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 2)(7, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ModalDettagliSegnalazioneComponent_tr_8_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ModalDettagliSegnalazioneComponent_tr_9_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ModalDettagliSegnalazioneComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ModalDettagliSegnalazioneComponent_td_12_Template, 3, 6, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ModalDettagliSegnalazioneComponent_th_14_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ModalDettagliSegnalazioneComponent_td_15_Template, 3, 6, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ModalDettagliSegnalazioneComponent_th_17_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ModalDettagliSegnalazioneComponent_td_18_Template, 3, 6, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](19, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ModalDettagliSegnalazioneComponent_th_20_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ModalDettagliSegnalazioneComponent_td_21_Template, 3, 6, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-dialog-actions", 12)(23, "button", 13)(24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Torna indietro");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.titolo === "Prodotto");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.titolo === "Contenzioso");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.aspetto[0] == null ? null : ctx.aspetto[0].nomeAspetto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.aspetto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose], styles: ["@charset \"UTF-8\";\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  align-items: center;\n  \n  justify-content: center;\n  \n}\ntable[_ngcontent-%COMP%] {\n  table-layout: fixed;\n}\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  \n}\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n  display: block;\n  \n  text-align: center;\n  \n}\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  line-height: 1.5;\n  \n  display: block;\n  \n  text-align: center;\n  \n}\np[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #2f6dd5;\n  text-align: center;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n  vertical-align: top;\n  \n}\nth[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n  font-size: 16px;\n}\ntd[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\ntextarea[matInput][_ngcontent-%COMP%] {\n  border: 1px solid #959595;\n  border-radius: 4px;\n  padding: 8px;\n  box-sizing: border-box;\n  background-color: #f5f5f5;\n  resize: both;\n  margin-bottom: 8px;\n  font-size: 14px;\n}\ntextarea[matInput][_ngcontent-%COMP%]:focus {\n  border-color: #3f51b5;\n  \n  outline: none;\n  \n  background-color: #f5f5f5;\n}\n.mat-cell[_ngcontent-%COMP%], .mat-header-cell[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n.btn-insert[_ngcontent-%COMP%] {\n  background: #4e95d9;\n  color: white;\n}\n.btn-aspetto[_ngcontent-%COMP%] {\n  background: #00b050;\n  color: white;\n}\n.btn-def[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n  border: none;\n  border-radius: 2px;\n}\n.btn-def[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n.btn-def-yes[_ngcontent-%COMP%] {\n  background: #00b050 !important;\n  color: white;\n}\n.btn-add-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  text-decoration: none;\n}\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  opacity: 1;\n  width: 288px;\n  padding: 12px;\n  background-color: rgba(65, 65, 65, 0.95);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 126%;\n  left: -256%;\n  margin-left: -60px;\n  transition: opacity 0.5s;\n}\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: all 0.5s;\n}\n.btn-def-no[_ngcontent-%COMP%] {\n  background: #2f6dd5 !important;\n  color: white;\n}\n.background-nuovAsp[_ngcontent-%COMP%] {\n  background-color: #a6caec !important;\n}\n.textarea-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n.error-message[_ngcontent-%COMP%] {\n  color: red;\n  font-weight: bold;\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcb3JnYW5penphemlvbmVcXHJpbGV2YXppb25pXFxtb2RhbC1kZXR0YWdsaS1zZWduYWxhemlvbmVcXG1vZGFsLWRldHRhZ2xpLXNlZ25hbGF6aW9uZS5jb21wb25lbnQuc2NzcyIsIm1vZGFsLWRldHRhZ2xpLXNlZ25hbGF6aW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFBcUIsaURBQUE7RUFDckIsdUJBQUE7RUFBeUIsbURBQUE7QURHM0I7QUNBQTtFQUNFLG1CQUFBO0FER0Y7QUNBQTtFQUNFLGNBQUE7RUFBZ0IsaURBQUE7QURJbEI7QUNEQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFBZ0IsMkRBQUE7RUFDaEIsa0JBQUE7RUFBb0IsMkJBQUE7QURNdEI7QUNIQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFBa0IsNERBQUE7RUFDbEIsY0FBQTtFQUFnQiw4REFBQTtFQUNoQixrQkFBQTtFQUFvQix5QkFBQTtBRFN0QjtBQ05BO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRFNGO0FDTkU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QURTSjtBQ05FO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUFxQiw4QkFBQTtBRFV6QjtBQ1BFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRFVKO0FDUEU7RUFDRSxtQkFBQTtBRFVKO0FDUEU7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FEVUo7QUNQRTtFQUNFLHFCQUFBO0VBQXVCLDZEQUFBO0VBQ3ZCLGFBQUE7RUFBZSxvQ0FBQTtFQUNmLHlCQUFBO0FEWUo7QUNSRTtFQUNFLFlBQUE7QURXSjtBQ1JFO0VBQ0UsOEJBQUE7RUFFQSxZQUFBO0FEVUo7QUNQRTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtBRFVKO0FDUEU7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QURVSjtBQ1BFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRFVKO0FDUEU7RUFDRSxlQUFBO0FEVUo7QUNQRTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBRFVKO0FDUEU7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FEVUo7QUNQRTtFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsd0JBQUE7QURRSjtBQ0xFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FEUUo7QUNMRTtFQUNFLDhCQUFBO0VBRUEsWUFBQTtBRE9KO0FDSkU7RUFDRSxvQ0FBQTtBRE9KO0FDSkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QURPSjtBQ0pFO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURPSjtBQ0pBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FET0YiLCJmaWxlIjoibW9kYWwtZGV0dGFnbGktc2VnbmFsYXppb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmRpc3BsYXktdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qIEFsbGluZWEgdmVydGljYWxtZW50ZSBnbGkgZWxlbWVudGkgYWwgY2VudHJvICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAvKiBBbGxpbmVhIG9yaXp6b250YWxtZW50ZSBnbGkgZWxlbWVudGkgYWwgY2VudHJvICovXG59XG5cbnRhYmxlIHtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmRpc3BsYXktdGl0bGUgZGl2IHtcbiAgbWFyZ2luOiAwIDIwcHg7XG4gIC8qIEFnZ2l1bmdlIHNwYXppbyBvcml6em9udGFsZSB0cmEgZ2xpIGVsZW1lbnRpICovXG59XG5cbi50b3AtdGl0bGUge1xuICBjb2xvcjogIzg3ODc4NztcbiAgZm9udC1zaXplOiBtZWRpdW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiBBc3NpY3VyYSBjaGUgb2duaSB0aXRvbG8gZ3JpZ2lvIHNpYSB1biBibG9jY28gc2VwYXJhdG8gKi9cbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAvKiBDZW50cmEgaWwgdGVzdG8gZ3JpZ2lvICovXG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLyogQWxsaW5lYSB2ZXJ0aWNhbG1lbnRlIGxlIHNjcml0dGUgbmVyZSBjb24gcXVlbGxlIGdyaWdpZSAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogQXNzaWN1cmEgY2hlIG9nbmkgc290dG90aXRvbG8gbmVybyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLyogQ2VudHJhIGlsIHRlc3RvIG5lcm8gKi9cbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICMyZjZkZDU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGgsIHRkIHtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogQWxpZ24gdGhlIHRleHQgdG8gdGhlIHRvcCAqL1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG50ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRleHRhcmVhW21hdElucHV0XSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NTk1OTU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICByZXNpemU6IGJvdGg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG50ZXh0YXJlYVttYXRJbnB1dF06Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICMzZjUxYjU7XG4gIC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsIGJvcmRvIHF1YW5kbyBsYSB0ZXh0YXJlYSDDqCBpbiBmb2N1cyAqL1xuICBvdXRsaW5lOiBub25lO1xuICAvKiBSaW11b3ZpIGlsIGNvbnRvcm5vIHByZWRlZmluaXRvICovXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbi5tYXQtY2VsbCwgLm1hdC1oZWFkZXItY2VsbCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZDogIzYwNjQ3MCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4taW5zZXJ0IHtcbiAgYmFja2dyb3VuZDogIzRlOTVkOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWFzcGV0dG8ge1xuICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tZGVmIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1kZWY6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idG4tZGVmLXllcyB7XG4gIGJhY2tncm91bmQ6ICMwMGIwNTAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWFkZC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIG9wYWNpdHk6IDE7XG4gIHdpZHRoOiAyODhweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NSwgNjUsIDY1LCAwLjk1KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTI2JTtcbiAgbGVmdDogLTI1NiU7XG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLmJ0bi1kZWYtbm8ge1xuICBiYWNrZ3JvdW5kOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tncm91bmQtbnVvdkFzcCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhNmNhZWMgIWltcG9ydGFudDtcbn1cblxuLnRleHRhcmVhLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5lcnJvci1tZXNzYWdlIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSIsIi8vIG51b3ZpIGNzc1xyXG4uZGlzcGxheS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQWxsaW5lYSB2ZXJ0aWNhbG1lbnRlIGdsaSBlbGVtZW50aSBhbCBjZW50cm8gKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWxsaW5lYSBvcml6em9udGFsbWVudGUgZ2xpIGVsZW1lbnRpIGFsIGNlbnRybyAqL1xyXG59XHJcblxyXG50YWJsZXtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG4uZGlzcGxheS10aXRsZSBkaXYge1xyXG4gIG1hcmdpbjogMCAyMHB4OyAvKiBBZ2dpdW5nZSBzcGF6aW8gb3JpenpvbnRhbGUgdHJhIGdsaSBlbGVtZW50aSAqL1xyXG59XHJcblxyXG4udG9wLXRpdGxlIHtcclxuICBjb2xvcjogIzg3ODc4NztcclxuICBmb250LXNpemU6IG1lZGl1bTtcclxuICBkaXNwbGF5OiBibG9jazsgLyogQXNzaWN1cmEgY2hlIG9nbmkgdGl0b2xvIGdyaWdpbyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgaWwgdGVzdG8gZ3JpZ2lvICovXHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIEFsbGluZWEgdmVydGljYWxtZW50ZSBsZSBzY3JpdHRlIG5lcmUgY29uIHF1ZWxsZSBncmlnaWUgKi9cclxuICBkaXNwbGF5OiBibG9jazsgLyogQXNzaWN1cmEgY2hlIG9nbmkgc290dG90aXRvbG8gbmVybyBzaWEgdW4gYmxvY2NvIHNlcGFyYXRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyAvKiBDZW50cmEgaWwgdGVzdG8gbmVybyAqL1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcblxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wOyAvKiBBbGlnbiB0aGUgdGV4dCB0byB0aGUgdG9wICovXHJcbiAgfVxyXG5cclxuICB0aCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgdGQge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhW21hdElucHV0XSB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjOTU5NTk1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICByZXNpemU6IGJvdGg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICB0ZXh0YXJlYVttYXRJbnB1dF06Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbCBib3JkbyBxdWFuZG8gbGEgdGV4dGFyZWEgw6ggaW4gZm9jdXMgKi9cclxuICAgIG91dGxpbmU6IG5vbmU7IC8qIFJpbXVvdmkgaWwgY29udG9ybm8gcHJlZGVmaW5pdG8gKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hdC1jZWxsLCAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcblxyXG4gIC5idG4tYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjA2NDcwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjNWU1ZTVlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYnRuLWluc2VydHtcclxuICAgIGJhY2tncm91bmQ6ICM0ZTk1ZDk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuYnRuLWFzcGV0dG97XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDBiMDUwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kZWZ7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgbWFyZ2luOiAycHg7XHJcbiAgICBwYWRkaW5nOjJweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB9XHJcblxyXG4gIC5idG4tZGVmOmRpc2FibGVke1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1kZWYteWVze1xyXG4gICAgYmFja2dyb3VuZDogIzAwYjA1MCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1hZGQtY29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcblxyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHdpZHRoOiAyODhweDtcclxuICAgIHBhZGRpbmc6MTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSA2NSA2NSAvIDk1JSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEyNiU7XHJcbiAgICBsZWZ0OiAtMjU2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuXHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcbiAgfVxyXG5cclxuICAudG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICB9XHJcblxyXG4gIC5idG4tZGVmLW5ve1xyXG4gICAgYmFja2dyb3VuZDogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmQtbnVvdkFzcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNmNhZWMgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50ZXh0YXJlYS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZXtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 41263:
/*!************************************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/modal-modifica-segnalazione/modal-modifica-segnalazione.component.ts ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalModificaSegnalazioneComponent": () => (/* binding */ ModalModificaSegnalazioneComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var _shared_services_documenti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/documenti.service */ 97631);
/* harmony import */ var _shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/rilevazione.service */ 78680);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _modal_dettagli_segnalazione_modal_dettagli_segnalazione_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal-dettagli-segnalazione/modal-dettagli-segnalazione.component */ 50220);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 97217);





















function ModalModificaSegnalazioneComponent_div_7_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h3")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Allegato");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_div_7_div_25_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r9.downloadFileSegnalazione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
}

function ModalModificaSegnalazioneComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "h3")(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Data Creazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "h3")(9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div")(14, "h3")(15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div")(20, "h3")(21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ModalModificaSegnalazioneComponent_div_7_div_25_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.segnalazioneProdotto.data1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.segnalazioneProdotto.settoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.segnalazioneProdotto.areaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.segnalazioneProdotto.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.isAllegatoSegnalazione);
  }
}

function ModalModificaSegnalazioneComponent_div_8_div_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "h3")(2, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Allegato");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}

function ModalModificaSegnalazioneComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12)(1, "div")(2, "h3")(3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Data Creazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div")(8, "h3")(9, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Tipologia Contenzioso");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div")(14, "h3")(15, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div")(20, "h3")(21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div")(26, "h3")(27, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ModalModificaSegnalazioneComponent_div_8_div_31_Template, 6, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.segnalazioneContenzioso.data1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.segnalazioneContenzioso.contenziosoDesc);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.segnalazioneContenzioso.settoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.segnalazioneContenzioso.areaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r1.segnalazioneContenzioso.sede);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.isAllegatoSegnalazione);
  }
}

function ModalModificaSegnalazioneComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nessun aspetto aggiunto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Aspetti Aggiunti");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 31);
  }
}

function ModalModificaSegnalazioneComponent_table_13_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_table_13_tr_2_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26);
      const row_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r25.openDettagli(row_r24.idAspettoSegnalazione);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Nome Aspetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_td_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r27.nomeAspetto, " ");
  }
}

function ModalModificaSegnalazioneComponent_table_13_th_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Criticit\u00E0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_td_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r17.showDescrizioneTroncata(element_r28.criticita), " ");
  }
}

function ModalModificaSegnalazioneComponent_table_13_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Suggerimento");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r19.showDescrizioneTroncata(element_r29.suggerimento), " ");
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_12_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Integrazione DR");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_12_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r32 = ctx.$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r31.showDescrizioneTroncata(element_r32.integrazioneDR), " ");
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalModificaSegnalazioneComponent_table_13_ng_container_12_th_1_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ModalModificaSegnalazioneComponent_table_13_ng_container_12_td_2_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_13_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Integrazione DC");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_13_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r34.showDescrizioneTroncata(element_r35.integrazioneDC), " ");
  }
}

function ModalModificaSegnalazioneComponent_table_13_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalModificaSegnalazioneComponent_table_13_ng_container_13_th_1_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ModalModificaSegnalazioneComponent_table_13_ng_container_13_td_2_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Allegato");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_table_13_td_16_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_table_13_td_16_button_1_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40);
      const element_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      ctx_r38.downloadFileAspetto(element_r36.idAspetto);
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
}

function ModalModificaSegnalazioneComponent_table_13_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalModificaSegnalazioneComponent_table_13_td_16_button_1_Template, 3, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", element_r36.hasAllegato);
  }
}

function ModalModificaSegnalazioneComponent_table_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ModalModificaSegnalazioneComponent_table_13_tr_1_Template, 1, 0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ModalModificaSegnalazioneComponent_table_13_tr_2_Template, 1, 0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ModalModificaSegnalazioneComponent_table_13_th_4_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ModalModificaSegnalazioneComponent_table_13_td_5_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ModalModificaSegnalazioneComponent_table_13_th_7_Template, 2, 0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ModalModificaSegnalazioneComponent_table_13_td_8_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ModalModificaSegnalazioneComponent_table_13_th_10_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ModalModificaSegnalazioneComponent_table_13_td_11_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ModalModificaSegnalazioneComponent_table_13_ng_container_12_Template, 3, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ModalModificaSegnalazioneComponent_table_13_ng_container_13_Template, 3, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ModalModificaSegnalazioneComponent_table_13_th_15_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ModalModificaSegnalazioneComponent_table_13_td_16_Template, 2, 1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.listaAspettiAggiunti);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx_r4.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.statoSegnalazione == 5 && (ctx_r4.ruolo.includes("P12689") || ctx_r4.ruolo.includes("P12801")));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.statoSegnalazione == 5 && (ctx_r4.ruolo.includes("P12689") || ctx_r4.ruolo.includes("P12801")));
  }
}

function ModalModificaSegnalazioneComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_button_15_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r41.modifyDialogStepperModifica();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_button_16_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r43.deleteDialogStepperModifica();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Elimina ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ModalModificaSegnalazioneComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r46);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r45.sendDialogStepperModifica();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

class ModalModificaSegnalazioneComponent {
  constructor(stepperService, dialog, router, rilevazioneSrv, documentiService, storageService, dialogRef) {
    this.stepperService = stepperService;
    this.dialog = dialog;
    this.router = router;
    this.rilevazioneSrv = rilevazioneSrv;
    this.documentiService = documentiService;
    this.storageService = storageService;
    this.dialogRef = dialogRef;
    this.ruolo = '';
    this.listaAspettiAggiunti = [];
    this.idAspetti = [];
    this.allegatiAspetti = [];
    this.isAllegatoSegnalazione = false;
    this.data = [];
    this.displayedColumns = ['nomeAspetto', 'descrizioneCriticita', 'descrizioneSuggerimento', 'allegato'];
  }

  ngOnInit() {
    this.titolo = this.stepperService.inserimentoTipoSegnalazione$.value;
    this.ruolo = this.storageService.getItem('allroles');
    this.loadDatiSegnalazione();
  }

  ngOnDestroy() {
    this.listaAspettiAggiunti = [];
  }

  loadDatiSegnalazione() {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (this.titolo) {
      case prodotto:
        {
          this.segnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value;
          this.statoSegnalazione = this.segnalazioneProdotto.statoId;

          if (this.statoSegnalazione == 5 && (this.ruolo.includes('P12801') || this.ruolo.includes('P12689'))) {
            this.displayedColumns.splice(3, 0, 'integrazioneDR', 'integrazioneDC');
          }

          this.data.push(this.segnalazioneProdotto);
          this.rilevazioneSrv.getDettagliSegnalazioneById(this.stepperService.datiSegnalazioneProdotto$.value.id).subscribe(data => {
            this.listaAspettiAggiunti = data;
            this.listaAspettiAggiunti.forEach(aspetto => {
              if (aspetto.idAspetto) {
                this.idAspetti.push(aspetto.idAspetto);
              }
            });
            this.documentiService.findAllegatiAspetti(this.segnalazioneProdotto.id, this.idAspetti, "Prodotto", "").subscribe({
              next: res => {
                this.allegatiAspetti = res;
                this.listaAspettiAggiunti.forEach(aspetto => {
                  const isAllegato = this.allegatiAspetti.find(a => a.idAspetto === aspetto.idAspetto);
                  if (isAllegato) aspetto.hasAllegato = isAllegato.esito;
                });
              }
            });
          }, error => {
            console.error('Errore durante la ricerca dei dettagli della segnalazione prodotto: ', error);
          });
          this.documentiService.findAllegatoSegnalazione(this.segnalazioneProdotto.id, '', "Prodotto").subscribe({
            next: res => {
              this.isAllegatoSegnalazione = res.esito;
            }
          });
          break;
        }

      case contenzioso:
        {
          this.segnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value;
          this.statoSegnalazione = this.segnalazioneContenzioso.statoId;

          if (this.statoSegnalazione == 5 && (this.ruolo.includes('P12801') || this.ruolo.includes('P12689'))) {
            this.displayedColumns.splice(3, 0, 'integrazioneDR', 'integrazioneDC');
          }

          this.data.push(this.segnalazioneContenzioso);
          this.rilevazioneSrv.getDettagliSegnalazioneContenziosoById(this.stepperService.datiSegnalazioneContenzioso$.value.id).subscribe(data => {
            this.listaAspettiAggiunti = data;
            this.listaAspettiAggiunti.forEach(aspetto => {
              if (aspetto.idAspetto) {
                this.idAspetti.push(aspetto.idAspetto);
              }
            });
            this.documentiService.findAllegatiAspetti(this.segnalazioneContenzioso.id, this.idAspetti, "Contenzioso", "").subscribe({
              next: res => {
                this.allegatiAspetti = res;
                this.listaAspettiAggiunti.forEach(aspetto => {
                  const isAllegato = this.allegatiAspetti.find(a => a.idAspetto === aspetto.idAspetto);
                  if (isAllegato) aspetto.hasAllegato = isAllegato.esito;
                });
              }
            });
          }, error => {
            console.error('Errore durante la ricerca dei dettagli della segnalazione contenzioso: ', error);
          }); // Aggiungi questa parte per trovare l'allegato della segnalazione

          this.documentiService.findAllegatoSegnalazione(this.segnalazioneContenzioso.id, '', "Contenzioso").subscribe({
            next: res => {
              this.isAllegatoSegnalazione = res.esito;
            }
          });
          break;
        }
    }
  }

  modifyDialogStepperModifica() {
    this.router.navigate(['/segnalazione/inserimento/nuova']);
    this.closeDialogStepperModifica();
  }

  deleteDialogStepperModifica() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prodotto = 'Prodotto';
      const contenzioso = 'Contenzioso';

      switch (_this.titolo) {
        case prodotto:
          {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this.rilevazioneSrv.deleteSegnalazione(_this.titolo, _this.segnalazioneProdotto.id), _this.documentiService.deleteAllFileSegnalazione(_this.segnalazioneProdotto.id, _this.titolo)]).subscribe({
              next: ([]) => {},
              error: err => {
                console.error('Errore durante l\'eliminazione:', err);
              },
              complete: () => {// console.log('Eliminazione completata con successo.');
              }
            });
            break;
          }

        case contenzioso:
          {
            (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.forkJoin)([_this.rilevazioneSrv.deleteSegnalazione(_this.titolo, _this.segnalazioneContenzioso.id), _this.documentiService.deleteAllFileSegnalazione(_this.segnalazioneContenzioso.id, _this.titolo)]).subscribe({
              next: ([]) => {},
              error: err => {
                console.error('Errore durante l\'eliminazione:', err);
              },
              complete: () => {// console.log('Eliminazione completata con successo.');
              }
            });
            break;
          }
      }

      _this.closeDialogStepperModifica();
    })();
  }

  sendDialogStepperModifica() {
    if (this.titolo == 'Prodotto') {
      this.rilevazioneSrv.sendSegnalazione(this.titolo, this.segnalazioneProdotto.id, this.segnalazioneProdotto.statoId).subscribe(response => {});
    } else {
      this.rilevazioneSrv.sendSegnalazione(this.titolo, this.segnalazioneContenzioso.id, this.segnalazioneContenzioso.statoId).subscribe(response => {});
    }

    this.closeDialogStepperModifica();
  }

  closeDialogStepperModifica() {
    this.dialog.closeAll();
  }

  showFieldStato(stato) {
    const statoMap = {
      1: '../../../../assets/images/yellow_status.png',
      2: '../../../../assets/images/green_status.png',
      3: '../../../../assets/images/green_status.png',
      4: '../../../../assets/images/attesadefi.png',
      5: '../../../../assets/images/attesadefi.png',
      6: '../../../../assets/images/attesadefi.png'
    };
    return statoMap[stato] || '../../../../assets/images/red_status.png';
  }

  showFieldInviata(inviata) {
    if (inviata == true) {
      var output = 'Sì';
    } else {
      var output = 'No';
    }

    return output;
  }

  showFieldSede(codiceSede, nomeSede) {
    if (codiceSede != null && codiceSede != undefined && codiceSede != Number('') && nomeSede != null && nomeSede != undefined && nomeSede != '') {
      return codiceSede + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  showDescrizioneTroncata(descrizione) {
    if (!!descrizione && descrizione.length > 23) {
      return descrizione.substring(0, 20) + '...';
    } else {
      return descrizione || 'N/A';
    }
  }

  openDettagli(idAspettoSegnalazione) {
    if (this.ruolo.includes('P12689') || this.ruolo.includes('P12801') || this.ruolo.includes('P12799')) {
      this.dialogRef.close();
      const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = '75vw';
      dialogConfig.height = 'auto';
      dialogConfig.data = idAspettoSegnalazione;
      const dialogRef = this.dialog.open(_modal_dettagli_segnalazione_modal_dettagli_segnalazione_component__WEBPACK_IMPORTED_MODULE_5__.ModalDettagliSegnalazioneComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        const dialgoRef2 = this.dialog.open(ModalModificaSegnalazioneComponent, {
          autoFocus: true,
          width: 'auto',
          height: 'auto'
        });
      });
    } else return;
  }

  downloadFileSegnalazione() {
    const prodotto = "Prodotto";
    const contenzioso = "Contenzioso";

    switch (this.titolo) {
      case prodotto:
        {
          this.documentiService.getFileSegnalazione(this.segnalazioneProdotto.id, this.titolo, "").subscribe(response => {
            const contentDisposition = response.headers.get('Content-Disposition');
            const fileName = this.getFileNameFromContentDisposition(contentDisposition);
            const blob = response.body;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName || 'download';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          });
          break;
        }

      case contenzioso:
        {
          this.documentiService.getFileSegnalazione(this.segnalazioneContenzioso.id, this.titolo, "").subscribe(response => {
            const contentDisposition = response.headers.get('Content-Disposition');
            const fileName = this.getFileNameFromContentDisposition(contentDisposition);
            const blob = response.body;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName || 'download';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          });
          break;
        }
    }
  }

  downloadFileAspetto(idAspetto) {
    const prodotto = "Prodotto";
    const contenzioso = "Contenzioso";

    switch (this.titolo) {
      case prodotto:
        {
          this.documentiService.getFileAspetti(this.segnalazioneProdotto.id, idAspetto, this.titolo, "").subscribe(response => {
            const contentDisposition = response.headers.get('content-disposition');
            const fileName = this.getFileNameFromContentDisposition(contentDisposition);
            const blob = response.body;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName || 'download';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          });
          break;
        }

      case contenzioso:
        {
          this.documentiService.getFileAspetti(this.segnalazioneContenzioso.id, idAspetto, this.titolo, "").subscribe(response => {
            const contentDisposition = response.headers.get('content-disposition');
            const fileName = this.getFileNameFromContentDisposition(contentDisposition);
            const blob = response.body;
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName || 'download';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
          });
          break;
        }
    }
  }

  getFileNameFromContentDisposition(contentDisposition) {
    if (!contentDisposition) {
      return 'download';
    }

    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(contentDisposition);

    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }

    const filenameStarRegex = /filename\*=UTF-8''(.*?)(?:;|$)/;
    const matchesStar = filenameStarRegex.exec(contentDisposition);

    if (matchesStar != null && matchesStar[1]) {
      return decodeURIComponent(matchesStar[1]);
    }

    return 'download';
  }

}

ModalModificaSegnalazioneComponent.ɵfac = function ModalModificaSegnalazioneComponent_Factory(t) {
  return new (t || ModalModificaSegnalazioneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_4__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__.RilevazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_services_documenti_service__WEBPACK_IMPORTED_MODULE_2__.DocumentiService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_1__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef));
};

ModalModificaSegnalazioneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ModalModificaSegnalazioneComponent,
  selectors: [["app-modal-modifica-segnalazione"]],
  decls: 22,
  vars: 9,
  consts: [[1, "modal-container"], [1, "modal-content"], [1, "title"], [1, "container-data"], [1, "table"], ["class", "display-title", 4, "ngIf"], ["class", "title", 4, "ngIf"], ["mat-table", "", "class", "mat-elevation-z8", 3, "dataSource", 4, "ngIf"], [1, "container-buttons"], ["mat-button", "", "class", "btn-mod", 3, "click", 4, "ngIf"], ["mat-button", "", "class", "btn-dlt", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "btn-back", 3, "click"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], [4, "ngIf"], ["mat-button", "", 1, "sub-title", 3, "click"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "nomeAspetto"], ["mat-header-cell", "", "mat-header", "nomeAspetto", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "descrizioneCriticita"], ["mat-header-cell", "", "mat-header", "descrizioneCriticita", 4, "matHeaderCellDef"], ["matColumnDef", "descrizioneSuggerimento"], ["mat-header-cell", "", "mat-header", "descrizioneSuggerimento", 4, "matHeaderCellDef"], ["matColumnDef", "integrazioneDR", 4, "ngIf"], ["matColumnDef", "integrazioneDC", 4, "ngIf"], ["matColumnDef", "allegato"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-header-cell", "", "mat-header", "nomeAspetto"], ["mat-cell", ""], ["mat-header-cell", "", "mat-header", "descrizioneCriticita"], ["mat-header-cell", "", "mat-header", "descrizioneSuggerimento"], ["matColumnDef", "integrazioneDR"], ["mat-header-cell", "", "mat-header", "integrazioneDR", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-header", "integrazioneDR"], ["matColumnDef", "integrazioneDC"], ["mat-header-cell", "", "mat-header", "integrazioneDC", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-header", "integrazioneDC"], ["mat-header-cell", ""], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", 1, "btn-mod", 3, "click"], ["mat-button", "", 1, "btn-dlt", 3, "click"]],
  template: function ModalModificaSegnalazioneComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 3)(6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ModalModificaSegnalazioneComponent_div_7_Template, 26, 5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ModalModificaSegnalazioneComponent_div_8_Template, 32, 6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ModalModificaSegnalazioneComponent_div_9_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ModalModificaSegnalazioneComponent_div_11_Template, 2, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ModalModificaSegnalazioneComponent_table_13_Template, 17, 5, "table", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ModalModificaSegnalazioneComponent_button_15_Template, 4, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ModalModificaSegnalazioneComponent_button_16_Template, 4, 0, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ModalModificaSegnalazioneComponent_button_17_Template, 2, 0, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ModalModificaSegnalazioneComponent_Template_button_click_18_listener() {
        return ctx.closeDialogStepperModifica();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "arrow_back");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Chiudi ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Dettaglio Segnalazione ", ctx.titolo, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.titolo == "Prodotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.titolo == "Contenzioso");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statoSegnalazione == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statoSegnalazione == 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statoSegnalazione == 2);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell],
  styles: [".modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  overflow-y: auto;\n  padding-right: 20px;\n  flex-grow: 1;\n  padding-bottom: 0px;\n  margin-bottom: 0;\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 5px 0 0 0;\n  background-color: white;\n  position: sticky;\n  bottom: 0;\n  margin-top: 22px;\n  margin-bottom: 3px;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 12pt;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.align-elements[_ngcontent-%COMP%] {\n  padding-left: 1%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  padding-right: 65px;\n}\n\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n  display: block;\n  text-align: center;\n}\n\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  line-height: 1.5;\n  display: block;\n  text-align: center;\n}\n\n.btn-dlt[_ngcontent-%COMP%] {\n  background-color: #ff0000 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background-color: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLW1vZGlmaWNhLXNlZ25hbGF6aW9uZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcb3JnYW5penphemlvbmVcXHJpbGV2YXppb25pXFxtb2RhbC1tb2RpZmljYS1zZWduYWxhemlvbmVcXG1vZGFsLW1vZGlmaWNhLXNlZ25hbGF6aW9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoibW9kYWwtbW9kaWZpY2Etc2VnbmFsYXppb25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmNvbnRhaW5lci1idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAwIDAgMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxufVxyXG5cclxudGgge1xyXG4gIGZvbnQtc2l6ZTogMTJwdDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFsaWduLWVsZW1lbnRzIHtcclxuICBwYWRkaW5nLWxlZnQ6IDElO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICBwYWRkaW5nLXJpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG4uZGlzcGxheS10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpc3BsYXktdGl0bGUgZGl2IHtcclxuICBtYXJnaW46IDAgMjBweDtcclxufVxyXG5cclxuLnRvcC10aXRsZSB7XHJcbiAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1kbHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJhY2tncm91bmQ6ICM2MDY0NzAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgZmxleC1ncm93OiAxO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udGFpbmVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxMnB0O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxpZ24tZWxlbWVudHMge1xuICBwYWRkaW5nLWxlZnQ6IDElO1xufVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgcGFkZGluZy1yaWdodDogNjVweDtcbn1cblxuLmRpc3BsYXktdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW46IDIwcHg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZGlzcGxheS10aXRsZSBkaXYge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLnRvcC10aXRsZSB7XG4gIGNvbG9yOiAjODc4Nzg3O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYnRuLWRsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAjNjA2NDcwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
});

/***/ }),

/***/ 65293:
/*!**********************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/modale-testi-aspetti/modale-testi-aspetti.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModaleTestiAspettiComponent": () => (/* binding */ ModaleTestiAspettiComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 87317);




class ModaleTestiAspettiComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onClose() {
        this.dialogRef.close();
    }
}
ModaleTestiAspettiComponent.ɵfac = function ModaleTestiAspettiComponent_Factory(t) { return new (t || ModaleTestiAspettiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
ModaleTestiAspettiComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModaleTestiAspettiComponent, selectors: [["app-modale-testi-aspetti"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [1, "text-black", "text-lg"], [1, "flex", "flex-row", "justify-center", "my-5"], ["mat-button", "", 3, "click"]], template: function ModaleTestiAspettiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Testo Completo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModaleTestiAspettiComponent_Template_button_click_6_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.text);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbGUtdGVzdGktYXNwZXR0aS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 408:
/*!**************************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/pagina-risolvi-aspetto/pagina-risolvi-aspetto.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaginaRisolviAspettoComponent": () => (/* binding */ PaginaRisolviAspettoComponent)
/* harmony export */ });
/* harmony import */ var _modale_testi_aspetti_modale_testi_aspetti_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modale-testi-aspetti/modale-testi-aspetti.component */ 65293);
/* harmony import */ var _modal_risolvi_modal_risolvi_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-risolvi/modal-risolvi.component */ 27068);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);











const _c0 = function (a0) { return { "bg-yellow-500 cursor-pointer": a0 }; };
function PaginaRisolviAspettoComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("dblclick", function PaginaRisolviAspettoComponent_tr_17_Template_tr_dblclick_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const aspetto_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return aspetto_r1.idAspetto === 9 ? ctx_r2.handleSpecialClick(aspetto_r1, true) : ctx_r2.handleSpecialClick(aspetto_r1, false); })("click", function PaginaRisolviAspettoComponent_tr_17_Template_tr_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const aspetto_r1 = restoredCtx.$implicit; return aspetto_r1.idAspetto !== 9 ? null : $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const aspetto_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, aspetto_r1.idAspetto === 9));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](aspetto_r1.nomeAspetto);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.showDescrizioneTroncata(aspetto_r1.descrizioneCriticita));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.showDescrizioneTroncata(aspetto_r1.descrizioneSuggerimento));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.showDescrizioneTroncata(aspetto_r1.descrizioneNote));
} }
class PaginaRisolviAspettoComponent {
    constructor(location, dialog, stepperService) {
        this.location = location;
        this.dialog = dialog;
        this.stepperService = stepperService;
        // aspetto: Aspetto[] = [];
        this.aspettoConNote = undefined;
        this.listaAspettiConNote = [];
        // eliminaAspetto(aspetto: Aspetto, event: Event) {
        //   event.stopPropagation(); // Impedisce che l'evento si propaghi alla riga
        //   this.aspetti = this.aspetti.filter(a => a.idAspetto !== aspetto.idAspetto);
        // }
        this.aspetti = [
            { idAspetto: 1, nomeAspetto: 'Aspetti Informatici', descrizioneCriticita: 'Problemi di rete', descrizioneSuggerimento: 'Migliorare infrastruttura IT' },
            { idAspetto: 2, nomeAspetto: 'Aspetti Organizzativi', descrizioneCriticita: 'Scarsa comunicazione interna', descrizioneSuggerimento: 'Implementare riunioni settimanali' },
            { idAspetto: 5, nomeAspetto: 'Fattori Esogeni', descrizioneCriticita: 'Influenza esterna', descrizioneSuggerimento: '' },
            { idAspetto: 9, nomeAspetto: 'Aspetti Ambientali', descrizioneCriticita: 'Inquinamento ambientale', descrizioneSuggerimento: 'Promuovere pratiche green' },
        ];
    }
    ngOnInit() {
        for (let i = 0; i < this.aspetti.length; i++) {
            this.aspettoConNote = {
                idAspetto: this.aspetti[i].idAspetto,
                nomeAspetto: this.aspetti[i].nomeAspetto,
                descrizioneCriticita: this.aspetti[i].descrizioneCriticita,
                descrizioneSuggerimento: this.aspetti[i].descrizioneSuggerimento,
                descrizioneNote: ''
            };
            this.listaAspettiConNote.push(this.aspettoConNote);
        }
    }
    goBack() {
        this.location.back();
    }
    handleSpecialClick(aspetto, nuovoAspetto) {
        this.stepperService.setcheckNuovoAspetto(nuovoAspetto);
        // this.stepperService.datiAspettoDaRisolvere$.next(aspetto);
        const dialogRef = this.dialog.open(_modal_risolvi_modal_risolvi_component__WEBPACK_IMPORTED_MODULE_1__.ModalRisolviComponent, {
            width: '75%',
            height: '60%',
            // data: aspetto
        });
        dialogRef.afterClosed().subscribe(result => {
            // patchvalue per note
            this.stepperService.datiAspetto$.next(undefined);
        });
    }
    mostraTesto(testo, id) {
        if (id !== 9 && testo.trim() !== '') {
            this.dialog.open(_modale_testi_aspetti_modale_testi_aspetti_component__WEBPACK_IMPORTED_MODULE_0__.ModaleTestiAspettiComponent, {
                // width: 'auto',
                width: '75%',
                height: '60%',
                data: { text: testo }
            });
        }
    }
    showDescrizioneTroncata(descrizione) {
        if (descrizione.length > 53) {
            return descrizione.substring(0, 50) + '...';
        }
        else {
            return descrizione;
        }
    }
}
PaginaRisolviAspettoComponent.ɵfac = function PaginaRisolviAspettoComponent_Factory(t) { return new (t || PaginaRisolviAspettoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_2__.StepperService)); };
PaginaRisolviAspettoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaginaRisolviAspettoComponent, selectors: [["app-pagina-risolvi-aspetto"]], decls: 23, vars: 1, consts: [[1, "title"], [1, "container-table"], [1, "table"], [1, "text-sm", "uppercase", "text-white", "bg-blue-600"], ["scope", "col", 1, "px-6", "py-3"], [3, "ngClass", "dblclick", "click", 4, "ngFor", "ngForOf"], [1, "container-buttons"], ["type", "button", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], ["type", "submit", 1, "child-buttons", "child-buttons-risolvi"], [3, "ngClass", "dblclick", "click"], [1, "px-6", "py-4", "truncate"], [1, "px-6", "py-4", "truncate", "nota-cell"]], template: function PaginaRisolviAspettoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Risolvi Aspetti");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 1)(5, "table", 2)(6, "thead", 3)(7, "tr")(8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "NOME ASPETTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "CRITICIT\u00C0");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "SUGGERIMENTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "NOTE AGGIUNTIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, PaginaRisolviAspettoComponent_tr_17_Template, 9, 7, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 6)(19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PaginaRisolviAspettoComponent_Template_button_click_19_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Indietro");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Manda a conferma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.listaAspettiConNote);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultClassDirective], styles: [".title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\n.container-table[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  align-items: center;\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 75%;\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  margin-right: 50px;\n  justify-content: end;\n}\n\n.child-buttons[_ngcontent-%COMP%] {\n  text-align: center;\n  border-radius: 5px;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-right: 15px;\n  padding-bottom: 5px;\n}\n\n.child-buttons-risolvi[_ngcontent-%COMP%] {\n  background-color: #0bca14;\n  color: white;\n  border: 2px solid #0ca813;\n}\n\n.child-buttons-risolvi[_ngcontent-%COMP%]:hover {\n  background-color: #0ca813;\n}\n\n.child-buttons-chiudi[_ngcontent-%COMP%] {\n  background-color: #757575;\n  color: white;\n  border: 2px solid #757575;\n}\n\n.child-buttons-chiudi[_ngcontent-%COMP%]:hover {\n  background-color: #585656;\n}\n\n.align-text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2luYS1yaXNvbHZpLWFzcGV0dG8uY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxyb3V0ZXNcXG9yZ2FuaXp6YXppb25lXFxyaWxldmF6aW9uaVxccGFnaW5hLXJpc29sdmktYXNwZXR0b1xccGFnaW5hLXJpc29sdmktYXNwZXR0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FEb0JBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNqQko7O0FEc0JBO0VBQ0ksVUFBQTtBQ25CSjs7QURzQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDbkJKOztBRHdCQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNyQko7O0FEd0JBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNyQko7O0FEd0JBO0VBQ0kseUJBQUE7QUNyQko7O0FEd0JBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUNyQko7O0FEd0JBO0VBQ0kseUJBQUE7QUNyQko7O0FEd0JBO0VBQ0ksa0JBQUE7QUNyQkoiLCJmaWxlIjoicGFnaW5hLXJpc29sdmktYXNwZXR0by5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIE5VT1ZPXHJcbi50aXRsZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC5jb250YWluZXItZGF0YSB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuLy8gICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuLy8gICB9XHJcblxyXG4vLyAgIC5jaGlsZC1kYXRhIHtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG4vLyAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuLy8gICB9XHJcblxyXG4uY29udGFpbmVyLXRhYmxlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4gICAgLy8gYm9yZGVyOiAzcHggc29saWQgcmVkO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uY2hpbGQtYnV0dG9ucyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNoaWxkLWJ1dHRvbnMtcmlzb2x2aSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGJjYTE0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzBjYTgxMztcclxufVxyXG5cclxuLmNoaWxkLWJ1dHRvbnMtcmlzb2x2aTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNhODEzO1xyXG59XHJcblxyXG4uY2hpbGQtYnV0dG9ucy1jaGl1ZGkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3NTc1NzU7XHJcbn1cclxuXHJcbi5jaGlsZC1idXR0b25zLWNoaXVkaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NjU2O1xyXG59XHJcblxyXG4uYWxpZ24tdGV4dC1jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iLCIudGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFpbmVyLXRhYmxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnRhYmxlIHtcbiAgd2lkdGg6IDc1JTtcbn1cblxuLmNvbnRhaW5lci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbn1cblxuLmNoaWxkLWJ1dHRvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2hpbGQtYnV0dG9ucy1yaXNvbHZpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiY2ExNDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMGNhODEzO1xufVxuXG4uY2hpbGQtYnV0dG9ucy1yaXNvbHZpOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBjYTgxMztcbn1cblxuLmNoaWxkLWJ1dHRvbnMtY2hpdWRpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjNzU3NTc1O1xufVxuXG4uY2hpbGQtYnV0dG9ucy1jaGl1ZGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTg1NjU2O1xufVxuXG4uYWxpZ24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });


/***/ }),

/***/ 10896:
/*!****************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/rilevazioni-nuova/rilevazioni-nuova.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RilevazioniNuovaComponent": () => (/* binding */ RilevazioniNuovaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/areeservice.service */ 25821);
/* harmony import */ var _shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/prodotti.service */ 7844);
/* harmony import */ var _shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/rilevazione.service */ 78680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var _stepper_dialog_modifica_stepper_dialog_modifica_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../stepper-dialog-modifica/stepper-dialog-modifica.component */ 15722);
/* harmony import */ var _stepper_dialog_creazione_aspetto_stepper_dialog_creazione_aspetto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../stepper-dialog-creazione-aspetto/stepper-dialog-creazione-aspetto.component */ 50056);
/* harmony import */ var _shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/settore-materia.service */ 10828);
/* harmony import */ var _shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/territorio.service */ 8091);
/* harmony import */ var _shared_services_contenzioso_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/services/contenzioso.service */ 44260);
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/storage.service */ 1303);
/* harmony import */ var _popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var _shared_services_documenti_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/services/documenti.service */ 97631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _gestione_file_gestione_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../gestione-file/gestione-file.component */ 96640);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
















 // Importa il componente del dialogo di errore





























const _c0 = ["stepper"];
const _c1 = ["tableStep2"];
const _c2 = ["tableStep3"];
const _c3 = ["tableStep4"];

function RilevazioniNuovaComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0, "Dati generali");
  }
}

function RilevazioniNuovaComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", option_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", option_r31.nome, " ");
  }
}

function RilevazioniNuovaComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r32.clearSettore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", option_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", option_r34.nome, " ");
  }
}

function RilevazioniNuovaComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r35.clearArea();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r37 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", option_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r9.displaySede(option_r37), " ");
  }
}

function RilevazioniNuovaComponent_button_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_button_27_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r38.clearSede();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_28_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", option_r43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", option_r43.nome, " ");
  }
}

function RilevazioniNuovaComponent_div_28_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_28_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r44.clearTipologia();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "mat-form-field", 6)(2, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("focus", function RilevazioniNuovaComponent_div_28_Template_input_focus_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r46.onFocus(ctx_r46.tipologiaCtrl);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-autocomplete", 8, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function RilevazioniNuovaComponent_div_28_Template_mat_autocomplete_optionSelected_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r48.tipologiaSelected($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RilevazioniNuovaComponent_div_28_mat_option_5_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RilevazioniNuovaComponent_div_28_button_7_Template, 3, 0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](8, "div", 6)(9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](4);

    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx_r11.tipologiaCtrl)("matAutocomplete", _r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx_r11.displayTipologia);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](6, 5, ctx_r11.filteredTipologia));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r11.tipologiaCtrl.value);
  }
}

function RilevazioniNuovaComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "app-gestione-file", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("fileEvent", function RilevazioniNuovaComponent_div_34_Template_app_gestione_file_fileEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r49.onFilesAddedDatiGenerali($event);
    })("fileRemovedEvent", function RilevazioniNuovaComponent_div_34_Template_app_gestione_file_fileRemovedEvent_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r51.removeFileSegnalazione($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("idAspetto", 0);
  }
}

function RilevazioniNuovaComponent_div_35_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 47);
  }
}

function RilevazioniNuovaComponent_div_35_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 48);
  }
}

function RilevazioniNuovaComponent_div_35_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nome del File");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_35_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r63 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](element_r63.fileName);
  }
}

function RilevazioniNuovaComponent_div_35_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Dimensione del File");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_35_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r64 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind2"](2, 1, element_r64.fileSize, "1.2-2"), " Mb");
  }
}

function RilevazioniNuovaComponent_div_35_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_35_td_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_35_td_12_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r66.downloadFileSegnalazione();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function RilevazioniNuovaComponent_div_35_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Rimuovi");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_35_td_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Eliminare definitivamente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_35_td_15_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const element_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r70.deleteFileSegnalazione(element_r68.fileName);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "S\u00EC");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_35_td_15_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r72);
      const element_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      return element_r68.showConfirm = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

const _c4 = function (a0) {
  return {
    "tooltip": a0
  };
};

function RilevazioniNuovaComponent_div_35_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50)(1, "div", 53)(2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_35_td_15_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r76);
      const element_r68 = restoredCtx.$implicit;
      return element_r68.showConfirm = !element_r68.showConfirm;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RilevazioniNuovaComponent_div_35_td_15_div_5_Template, 7, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c4, !element_r68.showConfirm));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", element_r68.showConfirm);
  }
}

function RilevazioniNuovaComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, RilevazioniNuovaComponent_div_35_tr_2_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RilevazioniNuovaComponent_div_35_tr_3_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](4, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RilevazioniNuovaComponent_div_35_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RilevazioniNuovaComponent_div_35_td_6_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](7, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RilevazioniNuovaComponent_div_35_th_8_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RilevazioniNuovaComponent_div_35_td_9_Template, 3, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](10, 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, RilevazioniNuovaComponent_div_35_th_11_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, RilevazioniNuovaComponent_div_35_td_12_Template, 4, 0, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](13, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, RilevazioniNuovaComponent_div_35_th_14_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, RilevazioniNuovaComponent_div_35_td_15_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx_r13.dataFileSegnalazione);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.fileColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matRowDefColumns", ctx_r13.fileColumns);
  }
}

function RilevazioniNuovaComponent_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("value", option_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", option_r77.nomeAspetto, " ");
  }
}

function RilevazioniNuovaComponent_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "mat-option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_mat_option_50_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r79);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r78.dialogStepperCreazioneAspetto();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Altro ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_button_51_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r80.clearAspetto();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "ASPETTI AGGIUNTI");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 47);
  }
}

function RilevazioniNuovaComponent_div_61_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 48);
  }
}

function RilevazioniNuovaComponent_div_61_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_td_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 74)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_7_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r98);
      const element_r96 = restoredCtx.$implicit;
      const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r97.modifica(element_r96, "Criticita");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function RilevazioniNuovaComponent_div_61_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Rimuovi");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_td_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Eliminare definitivamente l'aspetto?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_10_div_5_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r103);
      const element_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r101.rimuoviAspettoAggiunto(element_r99.idAspetto);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "S\u00EC");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_10_div_5_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r103);
      const element_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      return element_r99.showConfirm = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_61_td_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50)(1, "div", 53)(2, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_10_Template_button_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r107);
      const element_r99 = restoredCtx.$implicit;
      return element_r99.showConfirm = !element_r99.showConfirm;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RilevazioniNuovaComponent_div_61_td_10_div_5_Template, 7, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const element_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](2, _c4, !element_r99.showConfirm));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", element_r99.showConfirm);
  }
}

function RilevazioniNuovaComponent_div_61_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nome Aspetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r108 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", element_r108.nomeAspetto, " ");
  }
}

function RilevazioniNuovaComponent_div_61_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Criticit\u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_16_Template_td_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r111);
      const element_r109 = restoredCtx.$implicit;
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r110.show(element_r109.descrizioneCriticita);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r109 = ctx.$implicit;
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r92.showDescrizioneTroncata(element_r109.descrizioneCriticita), "");
  }
}

function RilevazioniNuovaComponent_div_61_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Allegato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_61_td_19_app_gestione_file_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "app-gestione-file", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("fileEvents", function RilevazioniNuovaComponent_div_61_td_19_app_gestione_file_1_Template_app_gestione_file_fileEvents_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r116);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return ctx_r115.onFilesAddedCriticita($event);
    })("fileRemovedEvents", function RilevazioniNuovaComponent_div_61_td_19_app_gestione_file_1_Template_app_gestione_file_fileRemovedEvents_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r116);
      const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](3);
      return ctx_r117.removeFileAspetti($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("idAspetto", element_r112.idAspetto);
  }
}

function RilevazioniNuovaComponent_div_61_td_19_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Eliminare definitivamente l'allegato?");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_19_div_2_div_6_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r122);
      const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r120.deleteFileAspetto(element_r112.idAspetto);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, "S\u00EC");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_19_div_2_div_6_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r122);
      const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit;
      return element_r112.showConfirmAllegato = false;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_61_td_19_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 82)(1, "span", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_19_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r127);
      const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      return element_r112.showConfirmAllegato = !element_r112.showConfirmAllegato;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RilevazioniNuovaComponent_div_61_td_19_div_2_div_6_Template, 7, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](7, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_61_td_19_div_2_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r127);
      const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r128.downloadFileAspetto(element_r112.idAspetto);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](9, "save_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const element_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matTooltip", ctx_r114.getNomeFileAspetto(element_r112.idAspetto));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r114.truncateText(ctx_r114.getNomeFileAspetto(element_r112.idAspetto), 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", element_r112.showConfirmAllegato);
  }
}

function RilevazioniNuovaComponent_div_61_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RilevazioniNuovaComponent_div_61_td_19_app_gestione_file_1_Template, 1, 1, "app-gestione-file", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, RilevazioniNuovaComponent_div_61_td_19_div_2_Template, 10, 3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !element_r112.hasAllegato);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", element_r112.hasAllegato);
  }
}

function RilevazioniNuovaComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "table", 61, 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RilevazioniNuovaComponent_div_61_tr_3_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, RilevazioniNuovaComponent_div_61_tr_4_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](5, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RilevazioniNuovaComponent_div_61_th_6_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RilevazioniNuovaComponent_div_61_td_7_Template, 4, 0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](8, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RilevazioniNuovaComponent_div_61_th_9_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, RilevazioniNuovaComponent_div_61_td_10_Template, 6, 4, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](11, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, RilevazioniNuovaComponent_div_61_th_12_Template, 2, 0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, RilevazioniNuovaComponent_div_61_td_13_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](14, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, RilevazioniNuovaComponent_div_61_th_15_Template, 2, 0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, RilevazioniNuovaComponent_div_61_td_16_Template, 2, 1, "td", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](17, 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, RilevazioniNuovaComponent_div_61_th_18_Template, 2, 0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](19, RilevazioniNuovaComponent_div_61_td_19_Template, 3, 2, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx_r19.listaAspettiAggiunti);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matHeaderRowDef", ctx_r19.displayedColumnsStep2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matRowDefColumns", ctx_r19.displayedColumnsStep2);
  }
}

function RilevazioniNuovaComponent_div_71_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "br")(2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, " Non sono ancora stati aggiunti aspetti da valutare e le relative criticit\u00E0. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "br")(5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, " ASPETTI AGGIUNTI");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_73_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 47);
  }
}

function RilevazioniNuovaComponent_div_73_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 48);
  }
}

function RilevazioniNuovaComponent_div_73_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_73_td_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 74)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_73_td_8_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r145);
      const element_r143 = restoredCtx.$implicit;
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r144.modifica(element_r143, "Suggerimento");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function RilevazioniNuovaComponent_div_73_th_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nome Aspetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_73_td_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r146 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", element_r146.nomeAspetto, " ");
  }
}

function RilevazioniNuovaComponent_div_73_th_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Criticit\u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_73_td_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r147 = ctx.$implicit;
    const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r139.showDescrizioneTroncata(element_r147.descrizioneCriticita), " ");
  }
}

function RilevazioniNuovaComponent_div_73_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Suggerimento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_73_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r148 = ctx.$implicit;
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r141.showDescrizioneTroncata(element_r148.descrizioneSuggerimento), " ");
  }
}

function RilevazioniNuovaComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "table", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RilevazioniNuovaComponent_div_73_tr_3_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, RilevazioniNuovaComponent_div_73_tr_4_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](5, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RilevazioniNuovaComponent_div_73_th_6_Template, 2, 0, "th", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, RilevazioniNuovaComponent_div_73_td_8_Template, 4, 0, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](9, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, RilevazioniNuovaComponent_div_73_th_10_Template, 2, 0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, RilevazioniNuovaComponent_div_73_td_11_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](12, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, RilevazioniNuovaComponent_div_73_th_13_Template, 2, 0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](14, RilevazioniNuovaComponent_div_73_td_14_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](15, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](16, RilevazioniNuovaComponent_div_73_th_16_Template, 2, 0, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](17, RilevazioniNuovaComponent_div_73_td_17_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx_r22.listaAspettiAggiunti);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matHeaderRowDef", ctx_r22.displayedColumnsStep3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matRowDefColumns", ctx_r22.displayedColumnsStep3);
  }
}

function RilevazioniNuovaComponent_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](0, "Riepilogo");
  }
}

function RilevazioniNuovaComponent_div_83_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 91)(1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Dati generali incompleti");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_83_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r151);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r150.moveToStep(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " COMPLETA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RilevazioniNuovaComponent_div_83_div_1_Template, 5, 0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r24.isAllFieldsValidProdotto());
  }
}

function RilevazioniNuovaComponent_div_84_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60)(1, "div", 93)(2, "div")(3, "h3")(4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div")(9, "h3")(10, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div")(15, "h3")(16, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r152.nomeSettoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r152.nomeAreaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r152.nomeSede);
  }
}

function RilevazioniNuovaComponent_div_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RilevazioniNuovaComponent_div_84_div_1_Template, 20, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r25.isAllFieldsValidProdotto());
  }
}

function RilevazioniNuovaComponent_div_85_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r155 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 91)(1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](2, "Dati generali incompleti");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_85_div_1_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r155);
      const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
      return ctx_r154.moveToStep(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4, " COMPLETA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }
}

function RilevazioniNuovaComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RilevazioniNuovaComponent_div_85_div_1_Template, 5, 0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r26.isAllFieldsValidContenzioso());
  }
}

function RilevazioniNuovaComponent_div_86_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60)(1, "div", 93)(2, "div")(3, "h3")(4, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, "Tipologia Contezioso");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "div")(9, "h3")(10, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "div")(15, "h3")(16, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](17, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div")(21, "h3")(22, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](23, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](24, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()();
  }

  if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r156.nomeTipologiaContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r156.nomeSettoreMateria);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r156.nomeAreaProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](ctx_r156.nomeSede);
  }
}

function RilevazioniNuovaComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, RilevazioniNuovaComponent_div_86_div_1_Template, 26, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx_r27.isAllFieldsValidContenzioso());
  }
}

function RilevazioniNuovaComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "ASPETTI AGGIUNTI");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "div", 91)(2, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](3, "Aspetti aggiunti incompleti");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](4, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_div_88_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r158);
      const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
      return ctx_r157.moveToStep(2);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](5, " COMPLETA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
  }
}

function RilevazioniNuovaComponent_div_89_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 47);
  }
}

function RilevazioniNuovaComponent_div_89_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "tr", 48);
  }
}

function RilevazioniNuovaComponent_div_89_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Nome Aspetto");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_89_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", element_r169.nomeAspetto, " ");
  }
}

function RilevazioniNuovaComponent_div_89_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, "Criticit\u00E0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_89_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r170 = ctx.$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r165.showDescrizioneTroncata(element_r170.descrizioneCriticita), " ");
  }
}

function RilevazioniNuovaComponent_div_89_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "th", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1, " Suggerimento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }
}

function RilevazioniNuovaComponent_div_89_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r171 = ctx.$implicit;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r167.showDescrizioneTroncata(element_r171.descrizioneSuggerimento), " ");
  }
}

function RilevazioniNuovaComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 5)(1, "table", 96, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](3, RilevazioniNuovaComponent_div_89_tr_3_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, RilevazioniNuovaComponent_div_89_tr_4_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](5, 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](6, RilevazioniNuovaComponent_div_89_th_6_Template, 2, 0, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](7, RilevazioniNuovaComponent_div_89_td_7_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](8, 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, RilevazioniNuovaComponent_div_89_th_9_Template, 2, 0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](10, RilevazioniNuovaComponent_div_89_td_10_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerStart"](11, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, RilevazioniNuovaComponent_div_89_th_12_Template, 2, 0, "th", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, RilevazioniNuovaComponent_div_89_td_13_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("dataSource", ctx_r30.listaAspettiAggiunti);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matHeaderRowDef", ctx_r30.displayedColumnsStep4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("matRowDefColumns", ctx_r30.displayedColumnsStep4);
  }
}

class RilevazioniNuovaComponent {
  constructor(prodottiSrv, rilevazioneSrv, router, _formBuilder, dialog, stepperService, settoreMateriaService, areeProdottiService, territorioService, contenziosoService, storageService, documentiService) {
    this.prodottiSrv = prodottiSrv;
    this.rilevazioneSrv = rilevazioneSrv;
    this.router = router;
    this._formBuilder = _formBuilder;
    this.dialog = dialog;
    this.stepperService = stepperService;
    this.settoreMateriaService = settoreMateriaService;
    this.areeProdottiService = areeProdottiService;
    this.territorioService = territorioService;
    this.contenziosoService = contenziosoService;
    this.storageService = storageService;
    this.documentiService = documentiService;
    this.aree = [];
    this.sottoaree = [];
    this.prodotti = [];
    this.sede = [];
    this.tipologieContenzioso = [];
    this.componenti = [];
    this.taComponentiCriteri = [];
    this.statiRilevazioni = [];
    this.ruoloRegionale = 'P12799';
    this.ruoloProvinciale = 'P12801';
    this.ruoloAmministrativo = 'P12690';
    this.dataFileSegnalazione = [];
    this.idAspetti = [];
    this.nomiFileAspetti = []; // NUOVO

    this.listaAspettiAggiunti = [];
    this.role = null;
    this.codiceSede = [];
    this.isLinear = false;
    this.checkNuovoAspetto = false;
    this.displayedColumnsStep2 = ['modifica', 'rimuovi', 'nomeAspetto', 'descrizioneCriticita', 'allegato'];
    this.displayedColumnsStep3 = ['modifica', 'nomeAspetto', 'descrizioneCriticita', 'descrizioneSuggerimento'];
    this.displayedColumnsStep4 = ['nomeAspetto', 'descrizioneCriticita', 'descrizioneSuggerimento'];
    this.fileColumns = ['fileName', 'fileSize', 'download', 'rimuovi'];
    this.showGestioneFileDatiGenerali = false;
    this.isFileDatiGenerali = false;
    this.isFileAspetti = [];
    this.firstFormGroup = this._formBuilder.group({
      settoreMateria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      areaProdotto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      sede: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      tipologiaContenzioso: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      step2Criticita: [''],
      step2Aspetti: [''],
      step2ArrayAspettiCriticita: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required] // step2ListaAspettiCriticita: [[] as Aspetto[], Validators.required]

    });
    this.thirdFormGroup = this._formBuilder.group({
      step3Aspetti: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_16__.Validators.required],
      step3Suggerimenti: ['']
    });
    this.segnalazioneContenzioso = null;
    this.segnalazioneProdotto = null;
    this.statoSegnalazione = 1;
    this.idSegnalazioneCasoInvia = 0;
    this.settoreCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
    this.areaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
    this.sedeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
    this.tipologiaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl();
    this.aspettiCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControl(); // STEP1: DROPDOWN LIST

    this.settoreMateria = [];
    this.areaProdotto = []; // STEP2: DROPDOWN LIST ASPETTI DA VALUTARE

    this.aspettiDaValutare = [];
    this.fileSegnalazione = null;
    this.filesAspetti = [];

    this._filterSede = value => {
      var _a, _b, _c, _d;

      const filterValue = (typeof value === 'string' ? value : this.formatToSixDigits((_b = (_a = value === null || value === void 0 ? void 0 : value.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '')).toLowerCase();
      return (_d = (_c = this.sede) === null || _c === void 0 ? void 0 : _c.filter(option => {
        var _a, _b, _c;

        return ((_c = this.formatToSixDigits((_b = (_a = option.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '')) === null || _c === void 0 ? void 0 : _c.toLowerCase().includes(filterValue)) || option.nome.toLowerCase().includes(filterValue);
      })) !== null && _d !== void 0 ? _d : [];
    };

    this._filterTipologia = value => {
      var _a, _b;

      const filterValue = (typeof value === 'string' ? value : (value === null || value === void 0 ? void 0 : value.nome) || '').toLowerCase();
      return (_b = (_a = this.tipologieContenzioso) === null || _a === void 0 ? void 0 : _a.filter(option => option.nome.toLowerCase().includes(filterValue))) !== null && _b !== void 0 ? _b : [];
    };

    this.displaySede = sede => {
      var _a, _b;

      if (!sede || sede.id === null || sede.id === undefined) {
        return '';
      }

      const formattedId = this.formatToSixDigits((_b = (_a = sede.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '');
      return `${formattedId} - ${sede.nome}`;
    };
  }

  ngOnDestroy() {
    this.stepperService.datiSegnalazioneProdotto$.next(undefined);
    this.stepperService.datiSegnalazioneContenzioso$.next(undefined);
    this.listaAspettiAggiunti = [];
  }

  formatToSixDigits(value) {
    const numberValue = Number(value);

    if (isNaN(numberValue)) {
      return '';
    }

    return numberValue.toString().padStart(6, '0');
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

      try {
        const codiceSedeString = _this.storageService.getItem('listaSedi');

        _this.role = _this.storageService.getItem('allroles');
        _this.codiceSede = codiceSedeString;
        _this.loadTipoSegnalazioni = _this.stepperService.inserimentoTipoSegnalazione$.value;
        yield _this.getSettoriMaterie();
        yield _this.getAllAreaProdotto();
        yield _this.loadTipologieContenzioso();

        _this.loadAspettiDaValutare();

        yield _this.getSedi();
        yield _this.ensureSediLoaded();
        const savedSegnalazioneProdotto = _this.stepperService.datiSegnalazioneProdotto$.value;
        const savedSegnalazioneContenzioso = _this.stepperService.datiSegnalazioneContenzioso$.value;

        if (_this.loadTipoSegnalazioni === 'Prodotto' && savedSegnalazioneProdotto) {
          _this.segnalazioneProdotto = savedSegnalazioneProdotto;

          const ruolo = _this.selectRole();

          _this.documentiService.findAllegatoSegnalazione(_this.segnalazioneProdotto.id, ruolo, "Prodotto").subscribe({
            next: res => {
              _this.showGestioneFileDatiGenerali = res.esito;
              _this.isFileDatiGenerali = res.esito;

              if (_this.isFileDatiGenerali && _this.segnalazioneProdotto) {
                _this.documentiService.getFileSegnalazione(_this.segnalazioneProdotto.id, "Prodotto", ruolo).subscribe({
                  next: response => {
                    const contentDisposition = response.headers.get('Content-Disposition');

                    const fileName = _this.getFileNameFromContentDisposition(contentDisposition);

                    const blob = response.body;
                    const fileSize = blob === null || blob === void 0 ? void 0 : blob.size;
                    const fileSizeMb = fileSize ? fileSize / (1024 * 1024) : 0;
                    const fileData = [{
                      fileName,
                      fileSize: fileSizeMb
                    }];
                    _this.dataFileSegnalazione = fileData;
                  }
                });
              }
            }
          });

          const settore = (_a = _this.settoreMateria) === null || _a === void 0 ? void 0 : _a.find(option => {
            var _a;

            return option.id === ((_a = _this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.settoreId);
          });

          if (settore) {
            _this.settoreCtrl.setValue(settore);

            _this.firstFormGroup.patchValue({
              settoreMateria: settore.id
            });
          }

          if ((_b = _this.segnalazioneProdotto) === null || _b === void 0 ? void 0 : _b.settoreId) {
            yield _this.areeProdottiService.newGetAllByIdSettore((_c = _this.segnalazioneProdotto) === null || _c === void 0 ? void 0 : _c.settoreId).toPromise();
            const area = (_d = _this.areaProdotto) === null || _d === void 0 ? void 0 : _d.find(option => {
              var _a;

              return option.id === ((_a = _this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.areaId);
            });

            if (area) {
              _this.areaCtrl.setValue(area);

              _this.firstFormGroup.patchValue({
                areaProdotto: area.id
              });
            }
          }

          const sedeIdFormatted = _this.formatToSixDigits((_e = _this.segnalazioneProdotto) === null || _e === void 0 ? void 0 : _e.sedeId);

          const sede = (_f = _this.sede) === null || _f === void 0 ? void 0 : _f.find(option => {
            var _a, _b;

            return _this.formatToSixDigits((_b = (_a = option.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '') === sedeIdFormatted;
          });

          if (sede) {
            _this.sedeCtrl.setValue(sede);

            _this.firstFormGroup.patchValue({
              sede: sede.id
            });
          } else {}

          yield _this.loadDettagliSegnalazioneProdotto(_this.segnalazioneProdotto.id);
        } else if (_this.loadTipoSegnalazioni === 'Contenzioso' && savedSegnalazioneContenzioso) {
          _this.segnalazioneContenzioso = savedSegnalazioneContenzioso;

          const ruolo = _this.selectRole();

          _this.documentiService.findAllegatoSegnalazione(_this.segnalazioneContenzioso.id, ruolo, "Contenzioso").subscribe({
            next: res => {
              _this.showGestioneFileDatiGenerali = res.esito;
              _this.isFileDatiGenerali = res.esito;

              if (_this.isFileDatiGenerali && _this.segnalazioneContenzioso) {
                _this.documentiService.getFileSegnalazione(_this.segnalazioneContenzioso.id, "Contenzioso", ruolo).subscribe({
                  next: res => {
                    const contentDisposition = res.headers.get('Content-Disposition');

                    const fileName = _this.getFileNameFromContentDisposition(contentDisposition);

                    const blob = res.body;
                    const fileSize = blob === null || blob === void 0 ? void 0 : blob.size;
                    const fileSizeMb = fileSize ? fileSize / (1024 * 1024) : 0;
                    const fileData = [{
                      fileName,
                      fileSize: fileSizeMb
                    }];
                    _this.dataFileSegnalazione = fileData;
                  }
                });
              }
            }
          });

          const settore = (_g = _this.settoreMateria) === null || _g === void 0 ? void 0 : _g.find(option => {
            var _a;

            return option.id === ((_a = _this.segnalazioneContenzioso) === null || _a === void 0 ? void 0 : _a.settoreId);
          });

          if (settore) {
            _this.settoreCtrl.setValue(settore);

            _this.firstFormGroup.patchValue({
              settoreMateria: settore.id
            });
          }

          if ((_h = _this.segnalazioneContenzioso) === null || _h === void 0 ? void 0 : _h.settoreId) {
            yield _this.areeProdottiService.newGetAllByIdSettore((_j = _this.segnalazioneContenzioso) === null || _j === void 0 ? void 0 : _j.settoreId).toPromise();
            const area = (_k = _this.areaProdotto) === null || _k === void 0 ? void 0 : _k.find(option => {
              var _a;

              return option.id === ((_a = _this.segnalazioneContenzioso) === null || _a === void 0 ? void 0 : _a.areaId);
            });

            if (area) {
              _this.areaCtrl.setValue(area);

              _this.firstFormGroup.patchValue({
                areaProdotto: area.id
              });
            }
          }

          const sedeIdFormatted = _this.formatToSixDigits((_l = _this.segnalazioneContenzioso) === null || _l === void 0 ? void 0 : _l.sedeId);

          const sede = (_m = _this.sede) === null || _m === void 0 ? void 0 : _m.find(option => {
            var _a, _b;

            return _this.formatToSixDigits((_b = (_a = option.id) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '') === sedeIdFormatted;
          });

          if (sede) {
            _this.sedeCtrl.setValue(sede);

            _this.firstFormGroup.patchValue({
              sede: sede.id
            });
          }

          const tipologia = (_o = _this.tipologieContenzioso) === null || _o === void 0 ? void 0 : _o.find(option => {
            var _a;

            return option.id === ((_a = _this.segnalazioneContenzioso) === null || _a === void 0 ? void 0 : _a.contenziosoId);
          });

          if (tipologia) {
            _this.tipologiaCtrl.setValue(tipologia);

            _this.firstFormGroup.patchValue({
              tipologiaContenzioso: tipologia.id
            });
          }

          yield _this.loadDettagliSegnalazioneContenzioso(_this.segnalazioneContenzioso.id);
        }

        _this.filteredSettoreMateria = _this.settoreCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)((_p = _this.settoreCtrl.value) !== null && _p !== void 0 ? _p : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterSettore(value)));
        _this.filteredAreaProdotto = _this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)((_q = _this.areaCtrl.value) !== null && _q !== void 0 ? _q : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterArea(value)));
        _this.filteredSede = _this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)((_r = _this.sedeCtrl.value) !== null && _r !== void 0 ? _r : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterSede(value)));
        _this.filteredTipologia = _this.tipologiaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)((_s = _this.tipologiaCtrl.value) !== null && _s !== void 0 ? _s : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterTipologia(value)));
        _this.filteredAspettiDaValutare = _this.aspettiCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)((_t = _this.aspettiCtrl.value) !== null && _t !== void 0 ? _t : ''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => _this._filterAspetti(value)));
      } catch (error) {// console.error('Error in ngOnInit:', error);
      }

      _this.statoSegnalazione = _this.segnalazioneProdotto == null ? _this.statoSegnalazione : _this.segnalazioneProdotto.statoId;
      _this.statoSegnalazione = _this.segnalazioneContenzioso == null ? _this.statoSegnalazione : _this.segnalazioneContenzioso.statoId;
    })();
  }

  ensureSediLoaded() {
    var _this2 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (!_this2.sede || !_this2.sede.length) {
        yield new Promise(resolve => setTimeout(resolve, 100));
      }
    })();
  }

  loadDettagliSegnalazioneProdotto(id) {
    var _this3 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var _a, _b;

      try {
        const data = yield _this3.rilevazioneSrv.getDettagliSegnalazioneById(id).toPromise(); // Mappa gli aspetti già aggiunti

        _this3.listaAspettiAggiunti = data.map(item => ({
          idAspetto: item.idAspetto,
          nomeAspetto: item.nomeAspetto,
          descrizioneCriticita: item.criticita,
          descrizioneSuggerimento: item.suggerimento,
          nuovoAspetto: item.nuovoAspetto
        })); // Verifico se presente un nuovo aspetto per disabilitare il'opzione Altro della select aspettiDaValutare

        for (let i = 0; i < data.length; i++) {
          if (data[i].nuovoAspetto === true) {
            _this3.checkNuovoAspetto = true;
          }
        } // Rimuovi gli aspetti già aggiunti dalla lista degli aspetti da valutare


        _this3.aspettiDaValutare = _this3.aspettiDaValutare.filter(aspetto => !_this3.listaAspettiAggiunti.some(aggiunto => aggiunto.idAspetto === aspetto.idAspetto)); // Aggiungi gli idAspetti degli aspetti già aggiunti alla segnalazione

        _this3.listaAspettiAggiunti.forEach(aspetto => {
          if (aspetto.idAspetto) {
            _this3.idAspetti.push(aspetto.idAspetto);
          }
        });

        if (((_a = _this3.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) {
          const ruolo = _this3.selectRole();

          _this3.documentiService.findAllegatiAspetti((_b = _this3.segnalazioneProdotto) === null || _b === void 0 ? void 0 : _b.id, _this3.idAspetti, "Prodotto", ruolo).subscribe({
            next: res => {
              _this3.isFileAspetti = res;

              _this3.listaAspettiAggiunti.forEach(aspetto => {
                var _a;

                const isAllegato = _this3.isFileAspetti.find(a => a.idAspetto === aspetto.idAspetto);

                if (isAllegato) {
                  aspetto.hasAllegato = isAllegato.esito;

                  if (aspetto.hasAllegato && ((_a = _this3.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) {
                    _this3.documentiService.getFileAspetti(_this3.segnalazioneProdotto.id, aspetto.idAspetto, "Prodotto", ruolo).subscribe({
                      next: res => {
                        const contentDisposition = res.headers.get('Content-Disposition');
                        const aspettoFileName = {
                          idAspetto: aspetto.idAspetto,
                          fileName: _this3.getFileNameFromContentDisposition(contentDisposition)
                        };

                        _this3.nomiFileAspetti.push(aspettoFileName);
                      }
                    });
                  }
                }
              });
            }
          });
        }
      } catch (error) {
        console.error('Errore durante la ricerca dei dettagli della segnalazione: ', error);
      }
    })();
  }

  loadDettagliSegnalazioneContenzioso(id) {
    var _this4 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const data = yield _this4.rilevazioneSrv.getDettagliSegnalazioneContenziosoById(id).toPromise(); // Mappa gli aspetti già aggiunti

        _this4.listaAspettiAggiunti = data.map(item => ({
          idAspetto: item.idAspetto,
          nomeAspetto: item.nomeAspetto,
          descrizioneCriticita: item.criticita,
          descrizioneSuggerimento: item.suggerimento,
          hasAllegato: false,
          nuovoAspetto: item.nuovoAspetto
        })); // Verifico se presente un nuovo aspetto per disabilitare il'opzione Altro della select aspettiDaValutare

        for (let i = 0; i < data.length; i++) {
          if (data[i].nuovoAspetto === true) {
            _this4.checkNuovoAspetto = true;
          }
        } // Rimuovi gli aspetti già aggiunti dalla lista degli aspetti da valutare


        _this4.aspettiDaValutare = _this4.aspettiDaValutare.filter(aspetto => !_this4.listaAspettiAggiunti.some(aggiunto => aggiunto.idAspetto === aspetto.idAspetto)); // Aggiungi gli idAspetti degli aspetti già aggiunti alla segnalazione

        _this4.listaAspettiAggiunti.forEach(aspetto => {
          if (aspetto.idAspetto) {
            _this4.idAspetti.push(aspetto.idAspetto);
          }
        });

        if (_this4.segnalazioneContenzioso && _this4.segnalazioneContenzioso.id != null) {
          const ruolo = _this4.selectRole();

          _this4.documentiService.findAllegatiAspetti(_this4.segnalazioneContenzioso.id, _this4.idAspetti, "Contenzioso", ruolo).subscribe({
            next: res => {
              _this4.isFileAspetti = res;

              _this4.listaAspettiAggiunti.forEach(aspetto => {
                var _a;

                const allegato = _this4.isFileAspetti.find(a => a.idAspetto === aspetto.idAspetto);

                if (allegato && allegato.esito) {
                  aspetto.hasAllegato = true;

                  if (aspetto.idAspetto !== undefined && ((_a = _this4.segnalazioneContenzioso) === null || _a === void 0 ? void 0 : _a.id) != null) {
                    _this4.documentiService.getFileAspetti(_this4.segnalazioneContenzioso.id, aspetto.idAspetto, "Contenzioso", ruolo).subscribe({
                      next: res => {
                        const contentDisposition = res.headers.get('Content-Disposition');
                        const aspettoFileName = {
                          idAspetto: aspetto.idAspetto,
                          fileName: _this4.getFileNameFromContentDisposition(contentDisposition)
                        };

                        _this4.nomiFileAspetti.push(aspettoFileName);
                      }
                    });
                  }
                }
              });
            }
          });
        }
      } catch (error) {
        console.error('Errore durante la ricerca dei dettagli della segnalazione: ', error);
      }
    })();
  } // NUOVO


  _filterSettore(value) {
    var _a, _b;

    const filterValue = (typeof value === 'string' ? value : (value === null || value === void 0 ? void 0 : value.nome) || '').toLowerCase();
    return (_b = (_a = this.settoreMateria) === null || _a === void 0 ? void 0 : _a.filter(option => option.nome.toLowerCase().includes(filterValue))) !== null && _b !== void 0 ? _b : [];
  }

  _filterArea(value) {
    var _a, _b;

    const filterValue = (typeof value === 'string' ? value : (value === null || value === void 0 ? void 0 : value.nome) || '').toLowerCase();
    return (_b = (_a = this.areaProdotto) === null || _a === void 0 ? void 0 : _a.filter(option => option.nome.toLowerCase().includes(filterValue))) !== null && _b !== void 0 ? _b : [];
  }

  _filterAspetti(value) {
    let filterValue = '';

    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else if (value && value.nomeAspetto) {
      filterValue = value.nomeAspetto.toLowerCase();
    }

    return this.aspettiDaValutare.filter(option => option && option.nomeAspetto) // Assicurati che l'opzione abbia un nome
    .filter(option => option.nomeAspetto.toLowerCase().includes(filterValue));
  }

  displayAspetto(aspetto) {
    return aspetto && aspetto.nomeAspetto ? aspetto.nomeAspetto : '';
  }

  getSettoriMaterie() {
    var _this5 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.settoreMateriaService.getSettoriConAreeProdotti().subscribe(data => {
        const emptyObject = {
          id: null,
          nome: ''
        };

        if (Array.isArray(data)) {
          _this5.settoreMateria = [emptyObject, ...data];
        } else {
          _this5.settoreMateria = [emptyObject];
        }
      });
    })();
  }

  getAllAreaProdotto() {
    var _this6 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.areeProdottiService.getAllAreaProdotto().subscribe(data => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        _this6.areaProdotto = [emptyObject, ...data];
      });
    })();
  }

  settoreSelected(event) {
    const selectedSettore = event.option.value;
    const selectedId = selectedSettore.id;
    this.firstFormGroup.patchValue({
      settoreMateria: selectedId
    });

    if (selectedId && selectedId !== null && selectedId !== undefined) {
      this.areeProdottiService.newGetAllByIdSettore(selectedId).subscribe(data => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        this.areaProdotto = [emptyObject, ...data];
      }, error => {
        console.error('Errore durante il caricamento delle aree prodotti:', error);
      });
    } else {
      console.warn('ID Settore non valido:', selectedId);
    }
  }

  areaSelected(event) {
    var _a;

    if (event.option && event.option.value) {
      const selectedArea = event.option.value;
      const selectedAreaId = selectedArea.id;
      const selectedSettoreId = selectedArea.idSettore;
      this.firstFormGroup.patchValue({
        areaProdotto: selectedAreaId
      });
      const selectedSettore = (_a = this.settoreMateria) === null || _a === void 0 ? void 0 : _a.find(option => option.id === selectedSettoreId);

      if (selectedSettore) {
        this.firstFormGroup.patchValue({
          settoreMateria: selectedSettore.id
        });
        this.settoreCtrl.setValue(selectedSettore);
      } else {
        console.warn('Settore non trovato per ID:', selectedSettoreId);
      }
    } else {
      console.error('Evento non contiene un valore valido:', event);
    }
  }

  sedeSelected(event) {
    if (event.option && event.option.value) {
      const selectedSede = event.option.value;
      const selectedSedeId = selectedSede.id;
      this.firstFormGroup.patchValue({
        sede: selectedSedeId
      });
    } else {
      console.error('Evento non contiene un valore valido:', event);
    }
  }

  tipologiaSelected(event) {
    const selectedTipologia = event.option.value;
    const selectedId = selectedTipologia.id;
    this.firstFormGroup.patchValue({
      tipologiaContenzioso: selectedId
    });
  }

  aspettoSelected(selectedAspetto) {
    if (!selectedAspetto || !selectedAspetto.nomeAspetto) {
      return;
    }

    this.aspettiCtrl.setValue(selectedAspetto);
    this.secondFormGroup.patchValue({
      step2Aspetti: selectedAspetto.idAspetto
    });
  }

  clearSettore() {
    this.settoreCtrl.setValue('');
    this.firstFormGroup.patchValue({
      settoreMateria: ''
    });
    this.getAllAreaProdotto();
    this.clearArea();
  }

  clearArea() {
    this.areaCtrl.setValue('');
    this.firstFormGroup.patchValue({
      areaProdotto: ''
    });
    const settoreId = this.settoreCtrl.value ? this.settoreCtrl.value.id : null;

    if (settoreId !== null) {
      this.areeProdottiService.newGetAllByIdSettore(settoreId).subscribe(data => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        this.areaProdotto = [emptyObject, ...data];
        this.filteredAreaProdotto = this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(this.areaCtrl.value), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => this._filterArea(value)));
      }, error => {
        console.error('Errore durante il caricamento delle aree prodotti:', error);
      });
    } else {
      // Se non c'è un settore selezionato, carica tutte le aree prodotto
      this.getAllAreaProdotto();
    }
  }

  clearSede() {
    this.sedeCtrl.setValue('');
    this.firstFormGroup.patchValue({
      sede: ''
    });
  }

  clearTipologia() {
    this.tipologiaCtrl.setValue('');
    this.firstFormGroup.patchValue({
      tipologiaContenzioso: ''
    });
  }
  /*clearAspetto() {
    this.aspettiCtrl.setValue('');
    this.secondFormGroup.patchValue({ step2Aspetti: '' });
  }*/


  clearAspetto() {
    if (this.aspettiCtrl.value.idAspetto > this.maxIdAspettiDaValutare) {
      this.aspettiDaValutare.pop();
      this.checkNuovoAspetto = false;
    } // Imposta il valore del controllo su una stringa vuota


    this.aspettiCtrl.setValue(''); // Rimuove il valore dal form group (se necessario)

    this.secondFormGroup.patchValue({
      step2Aspetti: null
    }); // Forza il filtro a ritriggerare inviando un valore vuoto o spazio per rilanciare il filtro

    this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => this._filterAspetti(value || '')));
  }

  onFocus(ctrl) {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

  displaySettore(settore) {
    return settore ? settore.nome : '';
  }

  displayArea(area) {
    return area ? area.nome : '';
  }

  displayTipologia(tipologia) {
    return tipologia ? tipologia.nome : '';
  }

  areaProdottoSelezionato(idSettore, tipoSegnalazione) {
    var _this7 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const prodotto = 'Prodotto';
      const contenzioso = 'Contenzioso';

      _this7.areeProdottiService.newGetAllByIdSettore(idSettore).subscribe(data => {
        _this7.areaProdotto = [...data];

        for (let i = 0; i < data.length; i++) {
          _this7.areaProdotto[i].id = data[i].id;
          _this7.areaProdotto[i].nome = data[i].nome;
        }

        switch (tipoSegnalazione) {
          case prodotto:
            {
              for (let i = 0; i < _this7.areaProdotto.length; i++) {
                if (_this7.stepperService.datiSegnalazioneProdotto$.value.areaProdotto == _this7.areaProdotto[i].nome) {
                  _this7.firstFormGroup.patchValue({
                    areaProdotto: _this7.areaProdotto[i].id
                  });

                  break;
                }
              }

              break;
            }

          case contenzioso:
            {
              for (let i = 0; i < _this7.areaProdotto.length; i++) {
                if (_this7.stepperService.datiSegnalazioneContenzioso$.value.areaProdotto == _this7.areaProdotto[i].nome) {
                  _this7.firstFormGroup.patchValue({
                    areaProdotto: _this7.areaProdotto[i].id
                  });

                  break;
                }
              }

              break;
            }
        }
      });
    })();
  }

  toggleAllegaDatiGenerali() {
    if (!this.isFileDatiGenerali || this.showGestioneFileDatiGenerali) this.showGestioneFileDatiGenerali = !this.showGestioneFileDatiGenerali;
  }

  onFilesAddedDatiGenerali(file) {
    this.fileSegnalazione = file;
  }

  removeFileSegnalazione(file) {
    if (this.fileSegnalazione && this.fileSegnalazione.name === file.name && this.fileSegnalazione.size === file.size) {
      this.fileSegnalazione = null;
    }
  }

  removeFileAspetti(event) {
    const index = this.filesAspetti.findIndex(f => f.file.name === event.file.name && f.file.size === event.file.size && f.idAspetto === event.idAspetto);

    if (index !== -1) {
      this.filesAspetti.splice(index, 1);
    }
  }

  onFilesAddedCriticita(file) {
    this.filesAspetti.push(file);
  }

  getSedi() {
    var _this8 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ruoliTrimmed = _this8.role.split(';').map(ruolo => ruolo.trim());

      if (ruoliTrimmed.includes('P12689') || ruoliTrimmed.includes('P12690')) {// Caso 1: specifici ruoli sono presenti
      } else {
        if ((ruoliTrimmed.includes(_this8.ruoloRegionale) || ruoliTrimmed.includes(_this8.ruoloProvinciale)) && _this8.codiceSede.length === 0) {
          alert('Non ci sono sedi associate al tuo account.');
          return;
        }
      }

      _this8.territorioService.getSedi(_this8.role, _this8.codiceSede, _this8.loadTipoSegnalazioni, _this8.ruoloRegionale, _this8.ruoloProvinciale).subscribe(results => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        _this8.sede = [emptyObject, ...results];

        if (_this8.sede.length === 0) {
          alert('Non ci sono sedi disponibili.');
          return;
        }

        const segnalazioneProdotto = _this8.stepperService.datiSegnalazioneProdotto$.value;
        const segnalazioneContenzioso = _this8.stepperService.datiSegnalazioneContenzioso$.value;
        const selectedSede = _this8.loadTipoSegnalazioni === 'Prodotto' && segnalazioneProdotto ? segnalazioneProdotto.sede : segnalazioneContenzioso ? segnalazioneContenzioso.sede : null;

        if (selectedSede) {
          _this8.sede.forEach(sede => {
            if (selectedSede === sede.nome) {
              _this8.firstFormGroup.patchValue({
                sede: sede.id
              });
            }
          });
        }
      });
    })();
  }

  loadTipologieContenzioso() {
    var _this9 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9.contenziosoService.getAllTioplogie().subscribe(data => {
        _this9.tipologieContenzioso.unshift({
          id: null,
          nome: ''
        });

        const emptyObject = {
          id: null,
          nome: ''
        };
        _this9.tipologieContenzioso = [emptyObject, ...data];

        if (_this9.stepperService.datiSegnalazioneContenzioso$.value != undefined) {
          for (let i = 0; i < _this9.tipologieContenzioso.length; i++) {
            if (_this9.stepperService.datiSegnalazioneContenzioso$.value.contenziosoDesc == _this9.tipologieContenzioso[i].nome) {
              _this9.firstFormGroup.patchValue({
                tipologiaContenzioso: _this9.tipologieContenzioso[i].id
              });
            }
          }
        }
      });
    })();
  }

  stepperChange(event) {
    this.formatIdToNameStep1();

    if (event.selectedIndex == 2) {
      this.tableStep3.renderRows();
    }

    if (event.selectedIndex == 3) {
      this.tableStep4.renderRows();
    }
  }

  aggiungiAspettoCriticita() {
    const esito = this.stepperService.checkStringOnlySpaces(this.secondFormGroup.value.step2Criticita.trim());

    if (!esito) {
      const aspettoId = Number(this.secondFormGroup.value.step2Aspetti);
      const aspetto = this.aspettiDaValutare.find(a => a.idAspetto === aspettoId);

      if (aspetto) {
        this.listaAspettiAggiunti.push({
          idAspetto: aspetto.idAspetto > this.maxIdAspettiDaValutare ? -1 : aspetto.idAspetto,
          nomeAspetto: aspetto.nomeAspetto,
          descrizioneCriticita: this.secondFormGroup.value.step2Criticita.trim(),
          descrizioneSuggerimento: '',
          hasAllegato: false,
          nuovoAspetto: aspetto.idAspetto > this.maxIdAspettiDaValutare ? true : false
        }); // Verifico la presenza di nuovi aspetti

        if (aspetto.idAspetto > this.maxIdAspettiDaValutare) {
          this.checkNuovoAspetto = true;
        } // Rimuovi dalla lista degli aspetti da valutare


        this.aspettiDaValutare = this.aspettiDaValutare.filter(a => a.idAspetto !== aspettoId); // Ordina gli aspetti in modo che quelli con ID negativi (nuovi) siano in fondo

        this.aspettiDaValutare.sort((a, b) => a.idAspetto - b.idAspetto); // this.aspettiDaValutare.sort((a, b) => (a.idAspetto > b.idAspetto ? 1 : -1));
        // this.clearAspetto();
        // Imposta il valore del controllo su una stringa vuota

        this.aspettiCtrl.setValue(''); // Rimuove il valore dal form group (se necessario)

        this.secondFormGroup.patchValue({
          step2Aspetti: null
        }); // Forza il filtro a ritriggerare inviando un valore vuoto o spazio per rilanciare il filtro

        this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => this._filterAspetti(value || '')));
        this.secondFormGroup.reset();

        if (this.listaAspettiAggiunti.length - 1 > 0) {
          // conto l'elemento appena aggiunto; evito errore nella console
          this.tableStep2.renderRows();
        }
      }
    } else {
      alert('Inserire una descrizione valida per proseguire.');
    }

    this.clearAspetto();
  }

  rimuoviAspettoAggiunto(idAspettoAggiunto) {
    for (let i = 0; i < this.listaAspettiAggiunti.length; i++) {
      if (this.listaAspettiAggiunti[i].idAspetto == idAspettoAggiunto) {
        // Verifico che sia un aspetto standard (aspetto Altro ha id negativo) &&
        // && che non sia un aspetto Altro inserito precedentemente e ora recuperato per la modifica
        if (idAspettoAggiunto > 0 && this.listaAspettiAggiunti[i].nuovoAspetto == false) {
          this.aspettiDaValutare.push({
            idAspetto: this.listaAspettiAggiunti[i].idAspetto,
            nomeAspetto: this.listaAspettiAggiunti[i].nomeAspetto,
            descrizioneAspetto: ''
          });
        } else {
          this.checkNuovoAspetto = false;
        }

        if (this.listaAspettiAggiunti[i].hasAllegato) {
          this.deleteFileAspetto(idAspettoAggiunto);
        }

        this.listaAspettiAggiunti.splice(i, 1);
        this.tableStep2.renderRows();
        this.aspettiDaValutare.sort((a, b) => a.idAspetto > b.idAspetto ? 1 : -1);
        this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_17__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_18__.map)(value => this._filterAspetti(value || '')));
        break;
      }
    }

    const index = this.filesAspetti.findIndex(f => f.idAspetto === idAspettoAggiunto);

    if (index !== -1) {
      this.filesAspetti.splice(index, 1);
    }
  }

  modifica(aspettiAggiunti, casoDaModificare) {
    const criticita = 'Criticita';
    const suggerimento = 'Suggerimento';
    this.stepperService.datiAspetto$.next(aspettiAggiunti);
    this.stepperService.setTitolo(casoDaModificare);
    casoDaModificare === criticita || casoDaModificare === suggerimento ? this.dialogStepperModifica() : null;
  }

  show(nota) {
    alert(nota);
  }

  dialogStepperModifica() {
    const dialogRef = this.dialog.open(_stepper_dialog_modifica_stepper_dialog_modifica_component__WEBPACK_IMPORTED_MODULE_5__.StepperDialogModificaComponent, {
      disableClose: true,
      width: '75%',
      height: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      for (let i = 0; i < this.listaAspettiAggiunti.length; i++) {
        if (this.stepperService.datiAspetto$.value.idAspetto == this.listaAspettiAggiunti[i].idAspetto) {
          this.listaAspettiAggiunti[i].descrizioneCriticita = this.stepperService.datiAspetto$.value.descrizioneCriticita;
          this.listaAspettiAggiunti[i].descrizioneSuggerimento = this.stepperService.datiAspetto$.value.descrizioneSuggerimento;
          break;
        }
      }

      this.stepperService.datiAspetto$.next(undefined);
    });
  }

  dialogStepperCreazioneAspetto() {
    const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = 2;
    let dialogRef = this.dialog.open(_stepper_dialog_creazione_aspetto_stepper_dialog_creazione_aspetto_component__WEBPACK_IMPORTED_MODULE_6__.StepperDialogCreazioneAspettoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (this.stepperService.nuovoAspetto$.value !== '') {
        const nuovoAspetto = {
          nomeAspetto: this.stepperService.nuovoAspetto$.value,
          idAspetto: this.maxIdAspettiDaValutare + 1,
          descrizioneAspetto: ''
        };
        this.aspettiDaValutare.push(nuovoAspetto);
        this.checkNuovoAspetto = true;
        const ultimoAspetto = this.aspettiDaValutare[this.aspettiDaValutare.length - 1];
        this.aspettiCtrl.setValue(ultimoAspetto);

        this._filterAspetti(ultimoAspetto);

        this.secondFormGroup.patchValue({
          step2Aspetti: nuovoAspetto.idAspetto
        });
      }
    });
  }

  invia(statoSegnalazione) {
    let datiSegnalazione;

    if (this.loadTipoSegnalazioni === 'Prodotto') {
      datiSegnalazione = this.stepperService.datiSegnalazioneProdotto$.value || {};
    } else if (this.loadTipoSegnalazioni === 'Contenzioso') {
      datiSegnalazione = this.stepperService.datiSegnalazioneContenzioso$.value || {};
    }

    datiSegnalazione.Id = statoSegnalazione == 3 ? this.idSegnalazioneCasoInvia : datiSegnalazione.Id;

    if ((datiSegnalazione === null || datiSegnalazione === void 0 ? void 0 : datiSegnalazione.statoId) === 3 && statoSegnalazione < 3 || (datiSegnalazione === null || datiSegnalazione === void 0 ? void 0 : datiSegnalazione.statoId) === 2 && statoSegnalazione < 2) {
      alert('Errore: non si può più modificare una segnalazione inviata o salvare in bozza una segnalazione già salvata');
      return;
    } // Controllo se Settore/Materia è selezionato senza Area/Prodotto


    if (this.firstFormGroup.value.settoreMateria && (!this.firstFormGroup.value.areaProdotto || this.firstFormGroup.value.areaProdotto === '')) {
      this.openErrorDialog('Per salvare in bozza devi aggiungere un Area/Prodotto al Settore/Materia selezionato');
      return;
    }

    if ((statoSegnalazione === 2 || statoSegnalazione === 3) && !this.isValidFormGroup()) {
      alert('Errore: tutti i campi tranne i suggerimenti devono essere non vuoti e non null');
      return;
    }

    if (this.loadTipoSegnalazioni === 'Prodotto') {
      this.inviaSegnalazioneProdotto(datiSegnalazione, statoSegnalazione);
    } else if (this.loadTipoSegnalazioni === 'Contenzioso') {
      this.inviaSegnalazioneContenzioso(datiSegnalazione, statoSegnalazione);
    }
  }

  selectRole() {
    if (!this.role) {
      // console.error('Il ruolo non è stato impostato correttamente.');
      return '';
    } else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloRegionale)) {
      return this.ruoloRegionale;
    } else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloProvinciale)) {
      return this.ruoloProvinciale;
    } else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === 'P12689')) {
      return 'P12689';
    }

    return '';
  }

  inviaSegnalazioneProdotto(datiSegnalazione, statoSegnalazione) {
    var _a, _b, _c, _d;

    const segnalazioneProdotto = {
      id: (_a = datiSegnalazione.id) !== null && _a !== void 0 ? _a : 0,
      creato: (_b = datiSegnalazione.creato) !== null && _b !== void 0 ? _b : new Date().toISOString(),
      aggiornato: new Date().toISOString(),
      confermata: true,
      matricolaIns: (_c = this.storageService.getItem('matricola')) !== null && _c !== void 0 ? _c : 'matins',
      scadenza: new Date().toISOString(),
      matricolaIncarico: 'matinc',
      sede: this.formatToSixDigits(this.firstFormGroup.value.sede),
      idStatoSalvataggioRilevazione: statoSegnalazione,
      ruoloIns: this.selectRole(),
      idArea: (_d = Number(this.firstFormGroup.value.areaProdotto)) !== null && _d !== void 0 ? _d : datiSegnalazione.areaId,
      aspettiSegnalazione: this.listaAspettiAggiunti.map(aspetto => ({
        id: 0,
        creato: new Date().toISOString(),
        aggiornato: new Date().toISOString(),
        idAspetto: aspetto.idAspetto < 0 ? 0 : aspetto.idAspetto,
        nome: aspetto.nomeAspetto.replace(/\s+/g, ' ').trim(),
        idSegnalazioneProdotto: 0,
        criticita: aspetto.descrizioneCriticita,
        suggerimento: aspetto.descrizioneSuggerimento
      }))
    };
    let formData = new FormData();
    Object.keys(segnalazioneProdotto).forEach(key => {
      if (key === 'aspettiSegnalazione') {
        segnalazioneProdotto.aspettiSegnalazione.forEach((aspetto, index) => {
          Object.keys(aspetto).forEach(aspettoKey => {
            var _a;

            const fieldKey = `aspettiSegnalazione[${index}].${aspettoKey}`;
            const fieldValue = (_a = aspetto[aspettoKey]) !== null && _a !== void 0 ? _a : 'null'; // Convert null/undefined to empty string

            formData.append(fieldKey, fieldValue);
          });
        });
      } else {
        formData.append(key, segnalazioneProdotto[key]);
      }
    });

    if (this.fileSegnalazione) {
      formData.append('fileSegnalazione', this.fileSegnalazione);
    }

    const idAspetti = [];

    if (this.filesAspetti.length > 0) {
      this.filesAspetti.forEach(item => {
        formData.append(`filesAspetti`, item.file);
        idAspetti.push(item.idAspetto);
      });
    }

    formData.append('idAspetti', JSON.stringify(idAspetti));
    this.rilevazioneSrv.salvaSegnalazioneProdotto(formData).subscribe({
      next: response => {
        if (response && response.id !== null && response.id !== undefined) {
          statoSegnalazione == 2 ? null : this.router.navigate(['/segnalazione/inserimento']);
          this.statoSegnalazione = statoSegnalazione;
          this.idSegnalazioneCasoInvia = response.id;
        } else {
          // console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          this.openErrorDialog("Errore durante l'invio dei dati");
        }
      },
      error: error => {
        // console.error("Errore durante l'invio dei dati:", error);
        if (error.error.message == 'Esiste già una segnalazione identica con lo stato di bozza.') this.openErrorDialog(error.error.message);else this.openErrorDialog("Errore durante l'invio dei dati");
      }
    });
  }

  inviaSegnalazioneContenzioso(datiSegnalazione, statoSegnalazione) {
    var _a, _b, _c, _d, _e;

    const segnalazioneContenzioso = {
      id: (_a = datiSegnalazione.id) !== null && _a !== void 0 ? _a : 0,
      creato: (_b = datiSegnalazione.creato) !== null && _b !== void 0 ? _b : new Date().toISOString(),
      aggiornato: new Date().toISOString(),
      confermata: true,
      matricolaIns: (_c = this.storageService.getItem('matricola')) !== null && _c !== void 0 ? _c : 'matins',
      scadenza: new Date().toISOString(),
      matricolaIncarico: 'matinc',
      sede: this.formatToSixDigits(this.firstFormGroup.value.sede),
      idStatoSalvataggioRilevazione: statoSegnalazione,
      ruoloIns: this.selectRole(),
      idArea: (_d = Number(this.firstFormGroup.value.areaProdotto)) !== null && _d !== void 0 ? _d : datiSegnalazione.areaId,
      aspettiSegnalazione: this.listaAspettiAggiunti.map(aspetto => ({
        id: 0,
        creato: new Date().toISOString(),
        aggiornato: new Date().toISOString(),
        idAspetto: aspetto.idAspetto < 0 ? 0 : aspetto.idAspetto,
        nome: aspetto.nomeAspetto.replace(/\s+/g, ' ').trim(),
        idSegnalazioneProdotto: 0,
        criticita: aspetto.descrizioneCriticita,
        suggerimento: aspetto.descrizioneSuggerimento
      })),
      contenziosoId: (_e = Number(this.firstFormGroup.value.tipologiaContenzioso)) !== null && _e !== void 0 ? _e : datiSegnalazione.contenziosoId
    };
    let formData = new FormData();
    Object.keys(segnalazioneContenzioso).forEach(key => {
      if (key === 'aspettiSegnalazione') {
        segnalazioneContenzioso.aspettiSegnalazione.forEach((aspetto, index) => {
          Object.keys(aspetto).forEach(aspettoKey => {
            formData.append(`aspettiSegnalazione[${index}].${aspettoKey}`, aspetto[aspettoKey]);
          });
        });
      } else {
        formData.append(key, segnalazioneContenzioso[key]);
      }
    });

    if (this.fileSegnalazione) {
      formData.append('fileSegnalazione', this.fileSegnalazione);
    }

    const idAspetti = [];

    if (this.filesAspetti.length > 0) {
      this.filesAspetti.forEach(item => {
        formData.append(`filesAspetti`, item.file);
        idAspetti.push(item.idAspetto);
      });
    }

    formData.append('idAspetti', JSON.stringify(idAspetti));
    this.rilevazioneSrv.salvaSegnalazioneContenzioso(formData).subscribe({
      next: response => {
        if (response.id !== null || response.id !== undefined) {
          statoSegnalazione == 2 ? null : this.router.navigate(['/segnalazione/inserimento']);
          this.statoSegnalazione = statoSegnalazione;
          segnalazioneContenzioso.id = response.id;
          this.idSegnalazioneCasoInvia = response.id;
        } else {
          console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          this.openErrorDialog("Errore durante l'invio dei dati");
        }
      },
      error: error => {
        console.error("Errore durante l'invio dei dati:", error);
        if (error.error.message == 'Esiste già una segnalazione identica con lo stato di bozza.') this.openErrorDialog(error.error.message);else this.openErrorDialog("Errore durante l'invio dei dati");
      }
    });
  }

  sendDialogStepperModifica(statoId) {
    if (this.loadTipoSegnalazioni == 'Prodotto') {
      this.rilevazioneSrv.sendSegnalazione(this.loadTipoSegnalazioni, this.idSegnalazioneCasoInvia, statoId - 1).subscribe({
        next: response => {
          if (response.success === true) {
            this.router.navigate(['/segnalazione/inserimento']);
          } else {
            console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          }
        },
        error: error => {
          console.error("Errore durante l'invio dei dati:", error);
        }
      });
    } else {
      this.rilevazioneSrv.sendSegnalazione(this.loadTipoSegnalazioni, this.idSegnalazioneCasoInvia, statoId - 1).subscribe({
        next: response => {
          if (response.success === true) {
            this.router.navigate(['/segnalazione/inserimento']);
          } else {
            console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          }
        },
        error: error => {
          console.error("Errore durante l'invio dei dati:", error);
        }
      });
    }
  }

  isValidDatiGenerali() {
    const requiredFields = [this.firstFormGroup.value.settoreMateria, this.firstFormGroup.value.areaProdotto, this.firstFormGroup.value.sede];

    if (this.loadTipoSegnalazioni === 'Contenzioso') {
      requiredFields.push(this.firstFormGroup.value.tipologiaContenzioso);
    }

    return requiredFields.every(field => field !== null && field !== '');
  }

  isValidFormGroup() {
    if (!this.isValidDatiGenerali()) {
      return false;
    }

    return this.listaAspettiAggiunti.length > 0 && this.listaAspettiAggiunti.every(aspetto => aspetto.descrizioneCriticita.trim() !== '');
  }

  formatIdToNameStep1() {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';
    var checkFields = true;

    switch (this.stepperService.inserimentoTipoSegnalazione$.value) {
      case prodotto:
        {
          if (this.firstFormGroup.value.settoreMateria != '' && this.firstFormGroup.value.settoreMateria != null && this.firstFormGroup.value.settoreMateria != undefined) {
            this.nomeSettoreMateria = this.settoreMateria.find(settore => settore.id == Number.parseInt(this.firstFormGroup.value.settoreMateria)).nome;
          } else {
            checkFields = false;
          }

          if (this.firstFormGroup.value.areaProdotto != '' && this.firstFormGroup.value.areaProdotto != null && this.firstFormGroup.value.areaProdotto != undefined) {
            for (let i = 0; i < this.areaProdotto.length; i++) {
              if (this.firstFormGroup.value.areaProdotto == this.areaProdotto[i].id) {
                this.nomeAreaProdotto = this.areaProdotto[i].nome;
                break;
              } else {
                this.nomeAreaProdotto == '';
              }
            }
          } else {
            checkFields = false;
          }

          if (this.firstFormGroup.value.sede != '' && this.firstFormGroup.value.sede != null && this.firstFormGroup.value.sede != undefined) {
            this.nomeSede = this.sede.find(sede => sede.id == Number.parseInt(this.firstFormGroup.value.sede)).nome;
            this.numeroCodiceSede = this.firstFormGroup.value.sede;
          } else {
            checkFields = false;
          }

          if (checkFields == false) {
            this.nomeSettoreMateria = '';
            this.nomeAreaProdotto = '';
            this.nomeSede = '';
          }

          break;
        }

      case contenzioso:
        {
          if (this.firstFormGroup.value.settoreMateria != '' && this.firstFormGroup.value.settoreMateria != null && this.firstFormGroup.value.settoreMateria != undefined) {
            this.nomeSettoreMateria = this.settoreMateria.find(settore => settore.id == Number.parseInt(this.firstFormGroup.value.settoreMateria)).nome;
          } else {
            checkFields = false;
          }

          if (this.firstFormGroup.value.areaProdotto != '' && this.firstFormGroup.value.areaProdotto != null && this.firstFormGroup.value.areaProdotto != undefined) {
            for (let i = 0; i < this.areaProdotto.length; i++) {
              if (this.firstFormGroup.value.areaProdotto == this.areaProdotto[i].id) {
                this.nomeAreaProdotto = this.areaProdotto[i].nome;
                break;
              } else {
                this.nomeAreaProdotto == '';
              }
            }
          } else {
            checkFields = false;
          }

          if (this.firstFormGroup.value.sede != '' && this.firstFormGroup.value.sede != null && this.firstFormGroup.value.sede != undefined) {
            this.nomeSede = this.sede.find(sede => sede.id == Number.parseInt(this.firstFormGroup.value.sede)).nome;
            this.numeroCodiceSede = this.firstFormGroup.value.sede;
          } else {
            checkFields = false;
          }

          if (this.firstFormGroup.value.tipologiaContenzioso != '' && this.firstFormGroup.value.tipologiaContenzioso != null && this.firstFormGroup.value.tipologiaContenzioso != undefined) {
            this.nomeTipologiaContenzioso = this.tipologieContenzioso.find(contenzioso => contenzioso.id == Number.parseInt(this.firstFormGroup.value.tipologiaContenzioso)).nome;
          } else {
            checkFields = false;
          }

          if (checkFields == false) {
            this.nomeSettoreMateria = '';
            this.nomeAreaProdotto = '';
            this.nomeSede = '';
          }

          break;
        }
    }
  }

  showDescrizioneTroncata(descrizione) {
    if (!!descrizione && descrizione.length > 23) {
      return descrizione.substring(0, 20) + '...';
    } else {
      return descrizione || '';
    }
  }

  mostraNotaCompleta(nota) {
    alert(nota); // Puoi sostituire questo con qualsiasi altra logica per mostrare il testo completo, come un modale
  }

  moveToStep(index) {
    this.stepper.selectedIndex = index - 1;
  }

  checkFormEGriglia() {
    return control => {
      const value = control.value;

      if (this.listaAspettiAggiunti.length != 0) {
        return {
          esito: true
        };
      } else if (value != '' && this.listaAspettiAggiunti.length == 0) {
        return {
          esito: true
        };
      } else if (value == '' && this.listaAspettiAggiunti.length == 0) {
        return {
          esito: false
        };
      }

      return {
        esito: null
      };
    };
  }

  loadAspettiDaValutare() {
    this.prodottiSrv.getAspettiEDescrizioni(this.stepperService.inserimentoTipoSegnalazione$.value).subscribe(data => {
      data.forEach(item => {
        this.aspettiDaValutare.push({
          nomeAspetto: item.nome,
          idAspetto: item.id,
          descrizioneAspetto: item.descrizione
        });
      });
      const max = this.aspettiDaValutare.reduce(function (prev, current) {
        return prev && prev.idAspetto > current.idAspetto ? prev : current;
      });
      this.maxIdAspettiDaValutare = Number(max.idAspetto);
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

  canAddAspect() {
    const aspetto = this.secondFormGroup.value.step2Aspetti;
    const criticita = this.secondFormGroup.value.step2Criticita;
    return aspetto && criticita && criticita.trim() !== '';
  }

  openErrorDialog(message) {
    this.dialog.open(_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_11__.PopupErroreInserimentoComponent, {
      data: {
        message: message
      }
    });
  }

  isAllFieldsValidContenzioso() {
    return this.isValid(this.nomeSettoreMateria) && this.isValid(this.nomeAreaProdotto) && this.isValid(this.nomeSede) && this.isValid(this.nomeTipologiaContenzioso);
  }

  isAllFieldsValidProdotto() {
    return this.isValid(this.nomeSettoreMateria) && this.isValid(this.nomeAreaProdotto) && this.isValid(this.nomeSede);
  }

  isValid(field) {
    return field !== '' && field !== null && field !== undefined;
  }

  getFileNameFromContentDisposition(contentDisposition) {
    if (!contentDisposition) {
      return 'download';
    }

    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(contentDisposition);

    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }

    const filenameStarRegex = /filename\*=UTF-8''(.*?)(?:;|$)/;
    const matchesStar = filenameStarRegex.exec(contentDisposition);

    if (matchesStar != null && matchesStar[1]) {
      return decodeURIComponent(matchesStar[1]);
    }

    return 'download';
  }

  deleteFileSegnalazione(fileName) {
    var _a, _b;

    const ruolo = this.selectRole();
    if (((_a = this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) this.documentiService.deleteFileSegnalazione(this.segnalazioneProdotto.id, fileName, "Prodotto", ruolo).subscribe(() => {
      this.isFileDatiGenerali = false;
    });else if (((_b = this.segnalazioneContenzioso) === null || _b === void 0 ? void 0 : _b.id) != null) this.documentiService.deleteFileSegnalazione(this.segnalazioneContenzioso.id, fileName, "Contenzioso", ruolo).subscribe(() => {
      this.isFileDatiGenerali = false;
    });
  }

  deleteFileAspetto(idAspetto) {
    var _a, _b;

    const ruolo = this.selectRole();
    let aspetto;

    if (((_a = this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) {
      const nomeFile = this.getNomeFileAspetto(idAspetto);
      if (nomeFile) this.documentiService.deleteFileAspetto(this.segnalazioneProdotto.id, idAspetto, nomeFile, "Prodotto", ruolo).subscribe(response => {
        if (response.esito) {
          aspetto = this.listaAspettiAggiunti.find(a => a.idAspetto === idAspetto);
          if (aspetto) aspetto.hasAllegato = false;
        }
      });
    } else if (((_b = this.segnalazioneContenzioso) === null || _b === void 0 ? void 0 : _b.id) != null) {
      const nomeFile = this.getNomeFileAspetto(idAspetto);
      if (nomeFile) this.documentiService.deleteFileAspetto(this.segnalazioneContenzioso.id, idAspetto, nomeFile, "Contenzioso", ruolo).subscribe(response => {
        if (response.esito) {
          aspetto = this.listaAspettiAggiunti.find(a => a.idAspetto === idAspetto);
          if (aspetto) aspetto.hasAllegato = false;
        }
      });
    }
  }

  downloadFileSegnalazione() {
    var _a, _b, _c;

    const ruolo = this.selectRole();
    if (((_a = this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) this.documentiService.getFileSegnalazione((_b = this.segnalazioneProdotto) === null || _b === void 0 ? void 0 : _b.id, "Prodotto", ruolo).subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const fileName = this.getFileNameFromContentDisposition(contentDisposition);
      const blob = response.body;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });else if (((_c = this.segnalazioneContenzioso) === null || _c === void 0 ? void 0 : _c.id) != null) this.documentiService.getFileSegnalazione(this.segnalazioneContenzioso.id, "Contenzioso", ruolo).subscribe(response => {
      const contentDisposition = response.headers.get('Content-Disposition');
      const fileName = this.getFileNameFromContentDisposition(contentDisposition);
      const blob = response.body;
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    });
  }

  downloadFileAspetto(idAspetto) {
    var _a, _b;

    const ruolo = this.selectRole();

    if (((_a = this.segnalazioneProdotto) === null || _a === void 0 ? void 0 : _a.id) != null) {
      this.documentiService.getFileAspetti(this.segnalazioneProdotto.id, idAspetto, "Prodotto", ruolo).subscribe(response => {
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);
        const blob = response.body;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
    } else if (((_b = this.segnalazioneContenzioso) === null || _b === void 0 ? void 0 : _b.id) != null) {
      this.documentiService.getFileAspetti(this.segnalazioneContenzioso.id, idAspetto, "Contenzioso", ruolo).subscribe(response => {
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);
        const blob = response.body;
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      });
    }
  }

  getNomeFileAspetto(idAspetto) {
    const fileInfo = this.nomiFileAspetti.find(file => file.idAspetto === idAspetto);
    return fileInfo ? fileInfo.fileName : undefined;
  }

  truncateText(text, limit) {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}

RilevazioniNuovaComponent.ɵfac = function RilevazioniNuovaComponent_Factory(t) {
  return new (t || RilevazioniNuovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_2__.ProdottiService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__.RilevazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_4__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_7__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_1__.Aree), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_8__.TerritorioService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_contenzioso_service__WEBPACK_IMPORTED_MODULE_9__.ContenziosoService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_services_documenti_service__WEBPACK_IMPORTED_MODULE_12__.DocumentiService));
};

RilevazioniNuovaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
  type: RilevazioniNuovaComponent,
  selectors: [["app-rilevazioni-nuova"]],
  viewQuery: function RilevazioniNuovaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.stepper = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tableStep2 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tableStep3 = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵloadQuery"]()) && (ctx.tableStep4 = _t.first);
    }
  },
  decls: 97,
  vars: 58,
  consts: [[3, "linear", "selectionChange"], ["stepper", ""], [3, "stepControl"], [3, "formGroup"], ["matStepLabel", ""], [1, "container-data"], [1, "child-data"], ["matInput", "", "placeholder", "Settore/Materia*", 3, "formControl", "matAutocomplete", "focus"], [3, "displayWith", "optionSelected"], ["autoSettore", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Area/Prodotto*", 3, "formControl", "matAutocomplete", "focus"], ["autoArea", "matAutocomplete"], ["matInput", "", "placeholder", "Sede*", 3, "formControl", "matAutocomplete", "focus"], ["autoSede", "matAutocomplete"], ["class", "container-data", 4, "ngIf"], ["mat-button", "", 3, "disabled", "click"], [1, "container-buttons"], ["mat-button", "", 1, "child-buttons", "child-buttons-salvainbozza", 3, "disabled", "click"], ["mat-button", "", "matStepperNext", "", 1, "child-buttons", "child-buttons-conferma"], ["label", "Criticit\u00E0", 3, "stepControl"], ["appearance", "standard"], ["matInput", "", "placeholder", "Aspetti da valutare", 3, "formControl", "matAutocomplete"], ["autoAspetto", "matAutocomplete"], [3, "click", 4, "ngIf"], ["matInput", "", "maxlength", "65535", "type", "text", "rows", "7", "formControlName", "step2Criticita", 1, "textarea"], ["mat-button", "", 1, "child-buttons", "child-buttons-conferma", 3, "disabled", "click"], ["class", "title", 4, "ngIf"], ["mat-button", "", "matStepperPrevious", "", 1, "child-buttons", "child-buttons-conferma"], ["label", "Soluzioni e Suggerimenti", 3, "stepControl"], [4, "ngIf"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Tipologia contenzioso*", 3, "formControl", "matAutocomplete", "focus"], ["autoTipologia", "matAutocomplete"], [3, "idAspetto", "fileEvent", "fileRemovedEvent"], ["mat-table", "", 3, "dataSource"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "fileName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "fileSize"], ["matColumnDef", "download"], ["matColumnDef", "rimuovi"], ["mat-header-cell", "", "mat-header", "rimuovi", 4, "matHeaderCellDef"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 1, "material-icons", "w-auto", "h-auto", "text-base", "border-2", "shadow-md", "text-white", "bg-green-600", "hover:bg-green-700", "focus:ring-4", "rounded-2xl", "px-5", "py-2.5", "text-center", 3, "click"], ["mat-header-cell", "", "mat-header", "rimuovi"], [1, "btn-dlt-container", 3, "ngClass"], ["mat-button", "", 1, "material-icons", "w-auto", "h-auto", "text-base", "border-2", "shadow-md", "text-white", "bg-red-600", "hover:bg-red-700", "focus:ring-4", "rounded-2xl", "px-5", "py-2.5", "text-center", 3, "click"], ["class", "tooltiptext", 4, "ngIf"], [1, "tooltiptext"], [1, "btn-def", "btn-def-yes", 3, "click"], [1, "btn-def", "btn-def-no", 3, "click"], [3, "click"], [1, "title"], ["mat-table", "", "matTableId", "tableStep2", 1, "mat-elevation-z8", 3, "dataSource"], ["tableStep2", ""], ["matColumnDef", "modifica"], ["mat-header-cell", "", "mat-header", "modifica", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "center-icon", 4, "matCellDef"], ["matColumnDef", "nomeAspetto"], ["mat-header-cell", "", "mat-header", "nomeAspetto", 4, "matHeaderCellDef"], ["matColumnDef", "descrizioneCriticita"], ["mat-header-cell", "", "mat-header", "descrizioneCriticita", 4, "matHeaderCellDef"], ["mat-cell", "", "truncate", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "allegato"], ["mat-header-cell", "", "mat-header", "allegato", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-header", "modifica"], ["mat-cell", "", 1, "center-icon"], ["mat-header-cell", "", "mat-header", "nomeAspetto"], ["mat-header-cell", "", "mat-header", "descrizioneCriticita"], ["mat-cell", "", "truncate", "", 3, "click"], ["mat-header-cell", "", "mat-header", "allegato"], [3, "idAspetto", "fileEvents", "fileRemovedEvents", 4, "ngIf"], ["class", "file-container", 4, "ngIf"], [3, "idAspetto", "fileEvents", "fileRemovedEvents"], [1, "file-container"], [1, "file-name", 3, "matTooltip"], ["mat-button", "", 1, "material-icons", "w-auto", "h-auto", "text-base", "border-2", "shadow-md", "text-white", "bg-red-600", "hover:bg-red-700", "focus:ring-4", "rounded-2xl", "px-5", "py-2.5", "text-center", 2, "margin-right", "10px", 3, "click"], ["mat-table", "", "matTableId", "tableStep3", 1, "mat-elevation-z8", 3, "dataSource"], ["tableStep3", ""], ["matColumnDef", "descrizioneSuggerimento"], ["mat-header-cell", "", "mat-header", "descrizioneSuggerimento", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-header", "descrizioneSuggerimento"], ["class", "datiincompleti", 4, "ngIf"], [1, "datiincompleti"], [1, "child-buttons", "child-buttons-salvainbozza", 3, "click"], [1, "display-title"], [1, "top-title"], [1, "sub-title"], ["mat-table", "", "matTableId", "tableStep4", 1, "mat-elevation-z8", 3, "dataSource"], ["tableStep4", ""]],
  template: function RilevazioniNuovaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "mat-stepper", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("selectionChange", function RilevazioniNuovaComponent_Template_mat_stepper_selectionChange_1_listener($event) {
        return ctx.stepperChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "mat-step", 2)(4, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, RilevazioniNuovaComponent_ng_template_5_Template, 1, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5)(7, "mat-form-field", 6)(8, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("focus", function RilevazioniNuovaComponent_Template_input_focus_8_listener() {
        return ctx.onFocus(ctx.settoreCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "mat-autocomplete", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function RilevazioniNuovaComponent_Template_mat_autocomplete_optionSelected_9_listener($event) {
        return ctx.settoreSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](11, RilevazioniNuovaComponent_mat_option_11_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](13, RilevazioniNuovaComponent_button_13_Template, 3, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "mat-form-field", 6)(15, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("focus", function RilevazioniNuovaComponent_Template_input_focus_15_listener() {
        return ctx.onFocus(ctx.areaCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "mat-autocomplete", 8, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function RilevazioniNuovaComponent_Template_mat_autocomplete_optionSelected_16_listener($event) {
        return ctx.areaSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](18, RilevazioniNuovaComponent_mat_option_18_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](20, RilevazioniNuovaComponent_button_20_Template, 3, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](21, "mat-form-field", 6)(22, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("focus", function RilevazioniNuovaComponent_Template_input_focus_22_listener() {
        return ctx.onFocus(ctx.sedeCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "mat-autocomplete", 8, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function RilevazioniNuovaComponent_Template_mat_autocomplete_optionSelected_23_listener($event) {
        return ctx.sedeSelected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](25, RilevazioniNuovaComponent_mat_option_25_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](26, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](27, RilevazioniNuovaComponent_button_27_Template, 3, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](28, RilevazioniNuovaComponent_div_28_Template, 10, 7, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](29, "div", 5)(30, "button", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_30_listener() {
        return ctx.toggleAllegaDatiGenerali();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](31, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](32, "attach_file");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](33, " Inserisci Allegato ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](34, RilevazioniNuovaComponent_div_34_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](35, RilevazioniNuovaComponent_div_35_Template, 16, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](36, "div", 18)(37, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_37_listener() {
        return ctx.invia(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](38, " Salva in bozza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](39, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](40, " Avanti ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](41, "mat-step", 21)(42, "form", 3)(43, "div", 5)(44, "mat-form-field", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](45, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](46, "mat-autocomplete", 8, 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("optionSelected", function RilevazioniNuovaComponent_Template_mat_autocomplete_optionSelected_46_listener($event) {
        return ctx.aspettoSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](48, RilevazioniNuovaComponent_mat_option_48_Template, 2, 2, "mat-option", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](50, RilevazioniNuovaComponent_mat_option_50_Template, 2, 0, "mat-option", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](51, RilevazioniNuovaComponent_button_51_Template, 3, 0, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](52, "mat-form-field", 6)(53, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](54, "Criticit\u00E0");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](55, "textarea", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](56, "div", 5)(57, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_57_listener() {
        return ctx.aggiungiAspettoCriticita();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](58, " Aggiungi");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](59, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](60, RilevazioniNuovaComponent_div_60_Template, 2, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](61, RilevazioniNuovaComponent_div_61_Template, 20, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](62, "div", 18)(63, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](64, " Indietro ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](65, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_65_listener() {
        return ctx.invia(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](66, " Salva in bozza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](67, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](68, " Avanti ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](69, "mat-step", 30)(70, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](71, RilevazioniNuovaComponent_div_71_Template, 6, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](72, RilevazioniNuovaComponent_div_72_Template, 3, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](73, RilevazioniNuovaComponent_div_73_Template, 19, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](74, "div", 18)(75, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](76, " Indietro ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](77, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_77_listener() {
        return ctx.invia(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](78, " Salva in bozza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](79, "button", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](80, " Avanti ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](81, "mat-step");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](82, RilevazioniNuovaComponent_ng_template_82_Template, 1, 0, "ng-template", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](83, RilevazioniNuovaComponent_div_83_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](84, RilevazioniNuovaComponent_div_84_Template, 2, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](85, RilevazioniNuovaComponent_div_85_Template, 2, 1, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](86, RilevazioniNuovaComponent_div_86_Template, 2, 1, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](87, RilevazioniNuovaComponent_div_87_Template, 2, 0, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](88, RilevazioniNuovaComponent_div_88_Template, 6, 0, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](89, RilevazioniNuovaComponent_div_89_Template, 14, 3, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](90, "div", 18)(91, "button", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](92, " Indietro ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](93, "button", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_93_listener() {
        return ctx.invia(1);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](94, " Salva in bozza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](95, "button", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function RilevazioniNuovaComponent_Template_button_click_95_listener() {
        return ctx.invia(3);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](96, " Salva ed Invia ");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](10);

      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](17);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](24);

      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](47);

      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("linear", ctx.isLinear);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("stepControl", ctx.firstFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.firstFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.settoreCtrl)("matAutocomplete", _r2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx.displaySettore);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 50, ctx.filteredSettoreMateria));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.settoreCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.areaCtrl)("matAutocomplete", _r5);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx.displayArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 52, ctx.filteredAreaProdotto));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.areaCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.sedeCtrl)("matAutocomplete", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx.displaySede);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](26, 54, ctx.filteredSede));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.sedeCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loadTipoSegnalazioni == "Contenzioso");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.showGestioneFileDatiGenerali);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.showGestioneFileDatiGenerali && !ctx.isFileDatiGenerali);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isFileDatiGenerali);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.statoSegnalazione !== 1 || !ctx.isValidDatiGenerali());
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("stepControl", ctx.secondFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.secondFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formControl", ctx.aspettiCtrl)("matAutocomplete", _r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("displayWith", ctx.displayAspetto);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](49, 56, ctx.filteredAspettiDaValutare));
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.checkNuovoAspetto);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.aspettiCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", !ctx.canAddAspect());
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.statoSegnalazione !== 1 || !ctx.isValidDatiGenerali());
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("stepControl", ctx.thirdFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("formGroup", ctx.thirdFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.statoSegnalazione !== 1 || !ctx.isValidDatiGenerali());
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loadTipoSegnalazioni == "Prodotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loadTipoSegnalazioni == "Prodotto");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loadTipoSegnalazioni == "Contenzioso");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.loadTipoSegnalazioni == "Contenzioso");
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.listaAspettiAggiunti.length != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.statoSegnalazione !== 1 || !ctx.isValidDatiGenerali());
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("disabled", ctx.statoSegnalazione !== 1 || !ctx.isValidDatiGenerali() || ctx.listaAspettiAggiunti.length == 0);
    }
  },
  directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepper, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStep, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormGroupDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _gestione_file_gestione_file_component__WEBPACK_IMPORTED_MODULE_14__.GestioneFileComponent, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_29__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_25__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_30__.DefaultClassDirective, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperNext, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_22__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormControlName, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__.MatTooltip, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_21__.MatStepperPrevious],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_25__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DecimalPipe],
  styles: ["@charset \"UTF-8\";\n\ntable[_ngcontent-%COMP%] {\n  width: 50%;\n}\nth[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n  .mat-step-header .mat-step-icon {\n  background-color: #2f6dd5;\n  color: #fff;\n}\n.datiincompleti[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mat-stepper-horizontal[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.mat-mdc-form-field[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.nota-cell[_ngcontent-%COMP%] {\n  max-width: 225px;\n  \n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  \n}\ntd[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\nth[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n.truncate[_ngcontent-%COMP%] {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-weight: normal;\n}\n.textarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n.child-buttons-salvainbozza[_ngcontent-%COMP%] {\n  background-color: white;\n  color: black;\n  border: 2px solid black;\n}\n.child-buttons-salvainbozza[_ngcontent-%COMP%]:disabled {\n  background-color: #d3d3d3;\n  color: #a9a9a9;\n  cursor: not-allowed;\n  border: 0px;\n  border-right: 1px solid #979797;\n  border-bottom: 1px solid #979797;\n}\n.child-buttons-salvainbozza[_ngcontent-%COMP%]:hover {\n  background-color: #d2d0d0;\n}\n.title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  text-align: center;\n}\n.center-icon[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\nbutton.child-buttons-conferma[_ngcontent-%COMP%]:disabled {\n  background-color: #d3d3d3;\n  \n  color: #a9a9a9;\n  \n  cursor: not-allowed;\n}\n.btn-dlt-container[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n}\n.tooltiptext[_ngcontent-%COMP%] {\n  visibility: visible;\n  width: 200px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 10px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -100px;\n  opacity: 1;\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);\n}\n.btn-def[_ngcontent-%COMP%] {\n  margin: 5px;\n  padding: 5px 10px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.btn-def-yes[_ngcontent-%COMP%] {\n  background-color: #ff0000;\n  \n  color: #fff;\n}\n.btn-def-no[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  \n  color: #fff;\n}\n.display-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  margin: 20px;\n  margin-top: 0;\n  margin-bottom: 0;\n  align-items: center;\n  \n  justify-content: center;\n  \n}\n.display-title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0 20px;\n}\n.top-title[_ngcontent-%COMP%] {\n  color: #878787;\n  font-size: medium;\n  display: block;\n  text-align: center;\n}\n.sub-title[_ngcontent-%COMP%] {\n  font-size: larger;\n  line-height: 1.5;\n  display: block;\n  text-align: center;\n}\n.nessuna-corr[_ngcontent-%COMP%] {\n  color: #898989;\n  font-style: oblique;\n  text-align: center;\n}\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n.file-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.file-name[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  \n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 115px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcb3JnYW5penphemlvbmVcXHJpbGV2YXppb25pXFxyaWxldmF6aW9uaS1udW92YVxccmlsZXZhemlvbmktbnVvdmEuY29tcG9uZW50LnNjc3MiLCJyaWxldmF6aW9uaS1udW92YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEIsUUFBQTtBQUNBO0VBQ0UsVUFBQTtBREVGO0FDQ0E7RUFHRSxlQUFBO0FEQUY7QUNHQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBREFGO0FDR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBREFGO0FDOEdBO0VBQ0UsZUFBQTtBRDNHRjtBQzhHQTtFQUNFLGdCQUFBO0FEM0dGO0FDOEdBO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxvRkFBQTtBRDNHRjtBQzhHQTtFQUNFLHVCQUFBO0FEM0dGO0FDOEdBO0VBQ0UsdUJBQUE7QUQzR0Y7QUM4R0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBRDNHRjtBQzhHQTtFQUNFLFlBQUE7QUQzR0Y7QUM4R0E7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBRDNHRjtBQzhHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUQzR0Y7QUM4R0E7RUFDRSx5QkFBQTtBRDNHRjtBQzhHQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUQzR0Y7QUMrR0E7RUFDRSxnQkFBQTtBRDVHRjtBQytHQTtFQUNFLHlCQUFBO0VBQTJCLGtCQUFBO0VBQzNCLGNBQUE7RUFBZ0Isa0NBQUE7RUFDaEIsbUJBQUE7QUQxR0Y7QUM2R0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FEMUdGO0FDNkdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLCtDQUFBO0FEMUdGO0FDNkdBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBRDFHRjtBQzZHQTtFQUNFLHlCQUFBO0VBQTJCLDZCQUFBO0VBQzNCLFdBQUE7QUR6R0Y7QUM0R0E7RUFDRSx5QkFBQTtFQUEyQiwyQkFBQTtFQUMzQixXQUFBO0FEeEdGO0FDMkdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQXFCLGlEQUFBO0VBQ3JCLHVCQUFBO0VBQXlCLG1EQUFBO0FEdEczQjtBQ3lHQTtFQUNFLGNBQUE7QUR0R0Y7QUN5R0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR0R0Y7QUN5R0E7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEdEdGO0FDMEdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUR2R0Y7QUMwR0E7RUFDRSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0FEdkdGO0FDMEdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUR2R0Y7QUMwR0E7RUFDRSxrQkFBQTtFQUFvQixxQ0FBQTtFQUNwQixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBRHRHRiIsImZpbGUiOiJyaWxldmF6aW9uaS1udW92YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qdGFibGUqL1xudGFibGUge1xuICB3aWR0aDogNTAlO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmRhdGlpbmNvbXBsZXRpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgbWFyZ2luLXRvcDogOHB4O1xufVxuXG4ubWF0LW1kYy1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm5vdGEtY2VsbCB7XG4gIG1heC13aWR0aDogMjI1cHg7XG4gIC8qIEltcG9zdGEgbGEgbGFyZ2hlenphIG1hc3NpbWEgZGVzaWRlcmF0YSAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBDYW1iaWEgaWwgY3Vyc29yZSBxdWFuZG8gc2kgcGFzc2Egc29wcmEgcGVyIGluZGljYXJlIGNoZSBpbCB0ZXN0byDDqCBpbnRlcmF0dGl2byAqL1xufVxuXG50ZCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG50aCB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4udHJ1bmNhdGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnRleHRhcmVhIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG4uY2hpbGQtYnV0dG9ucy1zYWx2YWluYm96emEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbn1cblxuLmNoaWxkLWJ1dHRvbnMtc2FsdmFpbmJvenphOmRpc2FibGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzZDNkMztcbiAgY29sb3I6ICNhOWE5YTk7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJvcmRlcjogMHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTc5Nzk3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk3OTc5Nztcbn1cblxuLmNoaWxkLWJ1dHRvbnMtc2FsdmFpbmJvenphOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QyZDBkMDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNlbnRlci1pY29uIHtcbiAgcGFkZGluZy1sZWZ0OiAyJTtcbn1cblxuYnV0dG9uLmNoaWxkLWJ1dHRvbnMtY29uZmVybWE6ZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xuICAvKiBHcmlnaW8gY2hpYXJvICovXG4gIGNvbG9yOiAjYTlhOWE5O1xuICAvKiBDb2xvcmUgZGVsIHRlc3RvIGdyaWdpbyBzY3VybyAqL1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uYnRuLWRsdC1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDE1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xMDBweDtcbiAgb3BhY2l0eTogMTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5idG4tZGVmIHtcbiAgbWFyZ2luOiA1cHg7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWRlZi15ZXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYwMDAwO1xuICAvKiBSb3NzbyBwZXIgaWwgcHVsc2FudGUgU8OsICovXG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWRlZi1ubyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIC8qIEJsdSBwZXIgaWwgcHVsc2FudGUgTm8gKi9cbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kaXNwbGF5LXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvKiBBbGxpbmVhIHZlcnRpY2FsbWVudGUgZ2xpIGVsZW1lbnRpIGFsIGNlbnRybyAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyogQWxsaW5lYSBvcml6em9udGFsbWVudGUgZ2xpIGVsZW1lbnRpIGFsIGNlbnRybyAqL1xufVxuXG4uZGlzcGxheS10aXRsZSBkaXYge1xuICBtYXJnaW46IDAgMjBweDtcbn1cblxuLnRvcC10aXRsZSB7XG4gIGNvbG9yOiAjODc4Nzg3O1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmVzc3VuYS1jb3JyIHtcbiAgY29sb3I6ICM4OTg5ODk7XG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnJvdGF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB6b29tOiAxLjI7XG59XG5cbi5maWxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZpbGUtbmFtZSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLyogU3BhemlvIHRyYSBpbCB0ZXN0byBlIGlsIGJvdHRvbmUgKi9cbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG1heC13aWR0aDogMTE1cHg7XG59IiwiLyp0YWJsZSovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG50aCB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5kYXRpaW5jb21wbGV0aSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vLyAudG9vbHRpcCB7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG5cclxuLy8gLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuXHJcbi8vICAgd2lkdGg6IDE4MHB4O1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43MDEpO1xyXG4vLyAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbi8vICAgcGFkZGluZzogNXB4IDA7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHotaW5kZXg6IDE7XHJcbi8vICAgLy8gYm90dG9tOiAxNTAlOyAvL3RvcFxyXG4vLyAgIC8vbGVmdDogNTAlOyAgLy90b3BcclxuLy8gICAvLyBtYXJnaW4tbGVmdDogLTYwcHg7IC8vdG9wXHJcbi8vICAgdG9wOiA1cHg7XHJcbi8vICAgcmlnaHQ6IDEyMCU7XHJcblxyXG4vLyAgIG9wYWNpdHk6IDA7XHJcbi8vICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLnRvb2x0aXAgLnRvb2x0aXB0ZXh0OjphZnRlciB7XHJcbi8vICAgY29udGVudDogXCJcIjtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgLy90b3A6IDEwMCU7IC8vdG9wXHJcbi8vICAgLy9sZWZ0OiA1MCU7IC8vdG9wXHJcbi8vICAgLy9tYXJnaW4tbGVmdDogLTVweDsgLy90b3BcclxuLy8gICB0b3A6IDUwJTtcclxuLy8gICBsZWZ0OiAxMDAlO1xyXG4vLyAgIG1hcmdpbi10b3A6IC01cHg7XHJcbi8vICAgYm9yZGVyLXdpZHRoOiA1cHg7XHJcbi8vICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuLy8gICAvL2JvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbi8vICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCBibGFjaztcclxuLy8gfVxyXG5cclxuLy8gLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuLy8gICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4vLyAgIG9wYWNpdHk6IDE7XHJcbi8vIH1cclxuXHJcbi8vIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbi8vICAgbWluLXdpZHRoOiA0MDBweDtcclxuLy8gICBtYXgtd2lkdGg6IDEwMCU7XHJcbi8vICAgbWFyZ2luOiAwIDI1cHggMjVweCAwO1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4vLyB9XHJcblxyXG4vLyAuZXhhbXBsZS1saXN0IHtcclxuLy8gICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4vLyAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbi8vICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgIG92ZXJmbG93OiBoaWRkZW47XHJcbi8vICAgZGlzcGxheTogYmxvY2s7XHJcbi8vICAgaGVpZ2h0OiA0MDBweDtcclxuLy8gICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbi8vICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcclxuLy8gfVxyXG5cclxuLy8gLmV4YW1wbGUtYm94IHtcclxuLy8gICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbi8vICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XHJcbi8vICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4vLyAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgY3Vyc29yOiBtb3ZlO1xyXG4vLyAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICB3aWR0aDogMzAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jZGstZHJhZy1wcmV2aWV3IHtcclxuLy8gICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbi8vICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4vLyAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XHJcbi8vICAgb3BhY2l0eTogMDtcclxuLy8gfVxyXG5cclxuLy8gLmNkay1kcmFnLWFuaW1hdGluZyB7XHJcbi8vICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG4vLyB9XHJcblxyXG4vLyAuZXhhbXBsZS1ib3g6bGFzdC1jaGlsZCB7XHJcbi8vICAgYm9yZGVyOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcclxuLy8gICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbi8vIH1cclxuXHJcbi8vIE5VT1ZPXHJcbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXQtbWRjLWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5ub3RhLWNlbGwge1xyXG4gIG1heC13aWR0aDogMjI1cHg7XHJcbiAgLyogSW1wb3N0YSBsYSBsYXJnaGV6emEgbWFzc2ltYSBkZXNpZGVyYXRhICovXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvKiBDYW1iaWEgaWwgY3Vyc29yZSBxdWFuZG8gc2kgcGFzc2Egc29wcmEgcGVyIGluZGljYXJlIGNoZSBpbCB0ZXN0byDDqCBpbnRlcmF0dGl2byAqL1xyXG59XHJcblxyXG50ZHtcclxuICBwYWRkaW5nOiA1cHghaW1wb3J0YW50O1xyXG59XHJcblxyXG50aHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRydW5jYXRlIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5jaGlsZC1idXR0b25zLXNhbHZhaW5ib3p6YSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uY2hpbGQtYnV0dG9ucy1zYWx2YWluYm96emE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7XHJcbiAgY29sb3I6ICNhOWE5YTk7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTc5Nzk3O1xyXG59XHJcblxyXG4uY2hpbGQtYnV0dG9ucy1zYWx2YWluYm96emE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkMmQwZDA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5jZW50ZXItaWNvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuYnV0dG9uLmNoaWxkLWJ1dHRvbnMtY29uZmVybWE6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM7IC8qIEdyaWdpbyBjaGlhcm8gKi9cclxuICBjb2xvcjogI2E5YTlhOTsgLyogQ29sb3JlIGRlbCB0ZXN0byBncmlnaW8gc2N1cm8gKi9cclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59XHJcblxyXG4uYnRuLWRsdC1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDE1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAwcHg7XHJcbiAgb3BhY2l0eTogMTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxufVxyXG5cclxuLmJ0bi1kZWYge1xyXG4gIG1hcmdpbjogNXB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLWRlZi15ZXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDA7IC8qIFJvc3NvIHBlciBpbCBwdWxzYW50ZSBTw6wgKi9cclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmJ0bi1kZWYtbm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7IC8qIEJsdSBwZXIgaWwgcHVsc2FudGUgTm8gKi9cclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmRpc3BsYXktdGl0bGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFsbGluZWEgdmVydGljYWxtZW50ZSBnbGkgZWxlbWVudGkgYWwgY2VudHJvICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIEFsbGluZWEgb3JpenpvbnRhbG1lbnRlIGdsaSBlbGVtZW50aSBhbCBjZW50cm8gKi9cclxufVxyXG5cclxuLmRpc3BsYXktdGl0bGUgZGl2IHtcclxuICBtYXJnaW46IDAgMjBweDtcclxufVxyXG5cclxuLnRvcC10aXRsZSB7XHJcbiAgY29sb3I6ICM4Nzg3ODc7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbi5uZXNzdW5hLWNvcnIge1xyXG4gIGNvbG9yOiAjODk4OTg5O1xyXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG59XHJcblxyXG4uZmlsZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5maWxlLW5hbWUge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDsgLyogU3BhemlvIHRyYSBpbCB0ZXN0byBlIGlsIGJvdHRvbmUgKi9cclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgbWF4LXdpZHRoOiAxMTVweDtcclxufVxyXG4iXX0= */"]
});

/***/ }),

/***/ 43989:
/*!*********************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/rilevazioni-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RilevazioniRoutingModule": () => (/* binding */ RilevazioniRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _rilevazioni_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rilevazioni.component */ 92931);
/* harmony import */ var _rilevazioni_nuova_rilevazioni_nuova_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rilevazioni-nuova/rilevazioni-nuova.component */ 10896);
/* harmony import */ var _pagina_risolvi_aspetto_pagina_risolvi_aspetto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagina-risolvi-aspetto/pagina-risolvi-aspetto.component */ 408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);



// import { RilevazioniModificaComponent } from './rilevazioni-modifica/rilevazioni-modifica.component';



const routes = [
    { path: '', component: _rilevazioni_component__WEBPACK_IMPORTED_MODULE_0__.RilevazioniComponent },
    { path: 'nuova', component: _rilevazioni_nuova_rilevazioni_nuova_component__WEBPACK_IMPORTED_MODULE_1__.RilevazioniNuovaComponent },
    //{ path: '', component: GestioneSegnalazioneGerarchicoComponent },
    // { path: 'nuova',
    //   loadChildren: () => import('./rilevazioni/rilevazioni-nuova.module').then(m => m.RilevazioniNuovaComponent)
    // },
    // { path: 'modifica/:id', component: RilevazioniModificaComponent},
    // NUOVO
    { path: 'risolvi-aspetti', component: _pagina_risolvi_aspetto_pagina_risolvi_aspetto_component__WEBPACK_IMPORTED_MODULE_2__.PaginaRisolviAspettoComponent },
    // { path: 'risolvi-aspetti-gerarchico', component: GestioneSegnalazioneGerarchicoComponent},
];
class RilevazioniRoutingModule {
}
RilevazioniRoutingModule.ɵfac = function RilevazioniRoutingModule_Factory(t) { return new (t || RilevazioniRoutingModule)(); };
RilevazioniRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RilevazioniRoutingModule });
RilevazioniRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RilevazioniRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 92931:
/*!****************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/rilevazioni.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RilevazioniComponent": () => (/* binding */ RilevazioniComponent)
/* harmony export */ });
/* harmony import */ var C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.service */ 12656);
/* harmony import */ var _shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/areeservice.service */ 25821);
/* harmony import */ var _shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/rilevazione.service */ 78680);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_models_rilevazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/models/rilevazione.model */ 10590);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var _shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/settore-materia.service */ 10828);
/* harmony import */ var _shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/territorio.service */ 8091);
/* harmony import */ var _shared_services_contenzioso_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/contenzioso.service */ 44260);
/* harmony import */ var _modal_modifica_segnalazione_modal_modifica_segnalazione_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-modifica-segnalazione/modal-modifica-segnalazione.component */ 41263);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared */ 51679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 44874);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs */ 50635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs */ 32673);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! xlsx */ 4126);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-matero/extensions/dialog */ 94562);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ 32802);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ 12379);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ 11961);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ 97217);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 64316);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/select */ 91434);

















 //import * as XLSX from 'xlsx-style';






























const _c0 = ["areaInput"];
const _c1 = ["sedeInput"];
const _c2 = ["tipologiaContenziosoInput"];

function RilevazioniComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r35.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r35.nome, " ");
  }
}

function RilevazioniComponent_button_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_23_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r36.clearSettore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_mat_option_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r38.nome, " ");
  }
}

function RilevazioniComponent_button_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_30_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r39.clearArea();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_button_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_39_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r41.clearDate("dataInizio");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_button_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_47_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r43.clearDate("dataFine");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_mat_option_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r45 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r11.showFieldSede(option_r45.id, option_r45.nome), " ");
  }
}

function RilevazioniComponent_button_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_55_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r46.clearSede();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_div_66_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 64);
  }
}

function RilevazioniComponent_div_66_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_tr_3_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r68);
      const row_r66 = restoredCtx.$implicit;
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r67.handleRowClickProdotto(row_r66);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Data Creazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r69.data1, " ");
  }
}

function RilevazioniComponent_div_66_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Data Ultima Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r70.data2, " ");
  }
}

function RilevazioniComponent_div_66_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Settore/Materia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r71.settoreMateria, " ");
  }
}

function RilevazioniComponent_div_66_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r72.areaProdotto, " ");
  }
}

function RilevazioniComponent_div_66_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r73 = ctx.$implicit;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r59.showFieldSede(element_r73.sedeId, element_r73.sede), " ");
  }
}

function RilevazioniComponent_div_66_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Stato");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_66_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r74 = ctx.$implicit;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r61.showFieldStato(element_r74.statoId), " ");
  }
}

const _c3 = function () {
  return {
    "first-last-page-icon": true
  };
};

function RilevazioniComponent_div_66_a_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_a_24_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r76);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r75.pageFirstProdotto();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c3));
  }
}

function RilevazioniComponent_div_66_a_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_a_28_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r79);
      const ln_r77 = restoredCtx.$implicit;
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r78.setPageCurrProdotto(ln_r77, "Prodotto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r77 = ctx.$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ln_r77 === ctx_r63.pageCurrProdotto ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ln_r77);
  }
}

function RilevazioniComponent_div_66_a_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_a_32_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r81);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r80.pageLastProdotto();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c3));
  }
}

function RilevazioniComponent_div_66_mat_option_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_mat_option_35_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r84);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r83.modificaPaginazione("Prodotto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", num_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](num_r82);
  }
}

function RilevazioniComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36)(1, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("matSortChange", function RilevazioniComponent_div_66_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r85.sortData($event, "Prodotto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RilevazioniComponent_div_66_tr_2_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RilevazioniComponent_div_66_tr_3_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](4, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RilevazioniComponent_div_66_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RilevazioniComponent_div_66_td_6_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](7, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RilevazioniComponent_div_66_th_8_Template, 2, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RilevazioniComponent_div_66_td_9_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](10, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, RilevazioniComponent_div_66_th_11_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, RilevazioniComponent_div_66_td_12_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](13, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RilevazioniComponent_div_66_th_14_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RilevazioniComponent_div_66_td_15_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](16, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, RilevazioniComponent_div_66_th_17_Template, 2, 0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, RilevazioniComponent_div_66_td_18_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](19, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, RilevazioniComponent_div_66_th_20_Template, 2, 0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RilevazioniComponent_div_66_td_21_Template, 2, 1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](22, "div", 54)(23, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, RilevazioniComponent_div_66_a_24_Template, 3, 2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_Template_a_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r87.pagePrevProdotto("Prodotto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](27, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, RilevazioniComponent_div_66_a_28_Template, 2, 2, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_66_Template_a_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86);
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r88.pageNextProdotto("Prodotto");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](31, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](32, RilevazioniComponent_div_66_a_32_Template, 3, 2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 60)(34, "mat-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RilevazioniComponent_div_66_Template_mat_select_ngModelChange_34_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r86);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r89.pageDimProdotto = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, RilevazioniComponent_div_66_mat_option_35_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r13.prodotti);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r13.displayedColumnsProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r13.displayedColumnsProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.pageCurrProdotto > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r13.layoutNumbersProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r13.pageCurrProdotto < ctx_r13.pageNumProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r13.pageDimProdotto);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r13.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("Pagina ", ctx_r13.pageCurrProdotto, " di ", ctx_r13.pageNumProdotto, "");
  }
}

function RilevazioniComponent_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-card")(3, "div", 76)(4, "h1", 77)(5, "mat-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}

function RilevazioniComponent_mat_option_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r90.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r90.nome, " ");
  }
}

function RilevazioniComponent_button_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_89_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r92);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r91.clearSettore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_mat_option_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r93.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r93.nome, " ");
  }
}

function RilevazioniComponent_button_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_96_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r95);
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r94.clearArea();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_button_105_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_105_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r96.clearDate("dataInizioContenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_button_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r99 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_113_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r99);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r98.clearDate("dataFineContenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_mat_option_119_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r100 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r100.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r27.showFieldSede(option_r100.id, option_r100.nome), " ");
  }
}

function RilevazioniComponent_button_121_Template(rf, ctx) {
  if (rf & 1) {
    const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_121_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r102);
      const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r101.clearSede();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_mat_option_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r103 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("value", option_r103.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", option_r103.nome, " ");
  }
}

function RilevazioniComponent_button_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_button_128_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r105);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r104.clearTipologiaContenzioso();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
}

function RilevazioniComponent_div_138_tr_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tr", 64);
  }
}

function RilevazioniComponent_div_138_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_tr_3_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r128);
      const row_r126 = restoredCtx.$implicit;
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r127.handleRowClickContenzioso(row_r126);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Data Creazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r129 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r129.data1, " ");
  }
}

function RilevazioniComponent_div_138_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Data Ultima Modifica");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r130 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r130.data2, " ");
  }
}

function RilevazioniComponent_div_138_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Tipologia Contenzioso");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r131 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r131.contenziosoDesc, " ");
  }
}

function RilevazioniComponent_div_138_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Settore/Materia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r132 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r132.settoreMateria, " ");
  }
}

function RilevazioniComponent_div_138_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", element_r133.areaProdotto, " ");
  }
}

function RilevazioniComponent_div_138_th_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r134 = ctx.$implicit;
    const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r119.showFieldSede(element_r134.sedeId, element_r134.sede), " ");
  }
}

function RilevazioniComponent_div_138_th_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "th", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Stato");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function RilevazioniComponent_div_138_td_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r135 = ctx.$implicit;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", ctx_r121.showFieldStato(element_r135.statoId), " ");
  }
}

function RilevazioniComponent_div_138_a_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_a_27_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r137);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r136.pageFirstContenzioso();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c3));
  }
}

function RilevazioniComponent_div_138_a_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_a_31_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r140);
      const ln_r138 = restoredCtx.$implicit;
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r139.setPageCurrContenzioso(ln_r138, "Contenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ln_r138 = ctx.$implicit;
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", ln_r138 === ctx_r123.pageCurrContenzioso ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](ln_r138);
  }
}

function RilevazioniComponent_div_138_a_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_a_35_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r142);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r141.pageLastContenzioso();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c3));
  }
}

function RilevazioniComponent_div_138_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "mat-option", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_mat_option_38_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r145);
      const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r144.modificaPaginazione("Contenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const num_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("value", num_r143);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](num_r143);
  }
}

function RilevazioniComponent_div_138_Template(rf, ctx) {
  if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 36)(1, "table", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("matSortChange", function RilevazioniComponent_div_138_Template_table_matSortChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r146.sortData($event, "Contenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, RilevazioniComponent_div_138_tr_2_Template, 1, 0, "tr", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, RilevazioniComponent_div_138_tr_3_Template, 1, 0, "tr", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](4, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, RilevazioniComponent_div_138_th_5_Template, 2, 0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, RilevazioniComponent_div_138_td_6_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](7, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, RilevazioniComponent_div_138_th_8_Template, 2, 0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, RilevazioniComponent_div_138_td_9_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](10, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, RilevazioniComponent_div_138_th_11_Template, 2, 0, "th", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, RilevazioniComponent_div_138_td_12_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](13, 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](14, RilevazioniComponent_div_138_th_14_Template, 2, 0, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](15, RilevazioniComponent_div_138_td_15_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](16, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, RilevazioniComponent_div_138_th_17_Template, 2, 0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](18, RilevazioniComponent_div_138_td_18_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](19, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](20, RilevazioniComponent_div_138_th_20_Template, 2, 0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RilevazioniComponent_div_138_td_21_Template, 2, 1, "td", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](22, 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RilevazioniComponent_div_138_th_23_Template, 2, 0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](24, RilevazioniComponent_div_138_td_24_Template, 2, 1, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](25, "div", 54)(26, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](27, RilevazioniComponent_div_138_a_27_Template, 3, 2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](28, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_Template_a_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r148.pagePrevContenzioso("Contenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](29, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](30, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](31, RilevazioniComponent_div_138_a_31_Template, 2, 2, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](32, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_div_138_Template_a_click_32_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r149.pageNextContenzioso("Contenzioso");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "mat-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](35, RilevazioniComponent_div_138_a_35_Template, 3, 2, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](36, "div", 60)(37, "mat-select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("ngModelChange", function RilevazioniComponent_div_138_Template_mat_select_ngModelChange_37_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r147);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r150.pageDimContenzioso = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](38, RilevazioniComponent_div_138_mat_option_38_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("dataSource", ctx_r32.contenziosi);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matHeaderRowDef", ctx_r32.displayedColumnsContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matRowDefColumns", ctx_r32.displayedColumnsContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r32.pageCurrContenzioso > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r32.layoutNumbersContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r32.pageCurrContenzioso < ctx_r32.pageNumContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngModel", ctx_r32.pageDimContenzioso);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r32.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("Pagina ", ctx_r32.pageCurrContenzioso, " di ", ctx_r32.pageNumContenzioso, "");
  }
}

function RilevazioniComponent_ng_template_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-card")(3, "div", 76)(4, "h1", 77)(5, "mat-icon", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class RilevazioniComponent {
  constructor(dialog, // private areeSrv: Aree,
  rilevazioniSrv, router, formBuilder, dialog2, stepperService, settoreMateriaService, areeProdottiService, territorioService, contenziosoService, storageService) {
    this.dialog = dialog;
    this.rilevazioniSrv = rilevazioniSrv;
    this.router = router;
    this.formBuilder = formBuilder;
    this.dialog2 = dialog2;
    this.stepperService = stepperService;
    this.settoreMateriaService = settoreMateriaService;
    this.areeProdottiService = areeProdottiService;
    this.territorioService = territorioService;
    this.contenziosoService = contenziosoService;
    this.storageService = storageService;
    this.listaTipologieRicorsi = [];
    this.listaProcedureRiferimenti = [];
    this.sottoCatDisab = true;
    this.prodottoDisab = true;
    this.prodottoTipLavDisab = true; // list: any[] = [];

    this.dataSource = [];
    this.isLoading = true; // ricercaAtt = false;

    this.listaRilevazioni = [];
    this.imageUrl = [];
    this.settoreMateria = [];
    this.areaProdotto = [];
    this.tutteLeAreeProdotto = [];
    this.sede = [];
    this.tipologieContenzioso = [];
    this.prodotti = [];
    this.contenziosi = [];
    this.aspetti = [{
      id: null,
      nome: ''
    }, {
      id: 1,
      nome: 'Nuovi Aspetti'
    }, {
      id: 2,
      nome: 'Solo Aspetti Standard'
    }];
    this.role = null;
    this.tabProdotto = 0;
    this.checkCurrentComponent = null; // verifica se sto navigando verso nuovo inserimento o un altro componente

    this.errorMessage = null; // codiceSede: string[] = [];

    this.codiceSede = [];
    this.ruoloRegionale = 'P12799';
    this.ruoloProvinciale = 'P12801';
    this.ruoloAmministratore = 'P12689';
    this.ruoloDCO = 'P12690';
    this.ruoloInformatico = 'P12800';
    this.pagina = 'Inserimento';
    /*nome del file excel che verrà scaricato. */

    this.fileName = 'RilevazioniExcel';
    /*parametri*/

    this.formRicerca = this.formBuilder.group({
      settore: null,
      area: null,
      idSottoarea: null,
      idProdotto: null,
      idProdottoTipLav: null,
      idAttore: null,
      idTipologiaRicorso: null,
      idProceduraRiferimento: null,
      dataInizio: null,
      dataFine: null,
      dataScadenza: false,
      dimensione: null,
      pagina: null
    });
    this.displayedColumnsProdotto = ['data1', 'data2', 'settoreMateria', 'areaProdotto', 'sede', 'stato'];
    this.displayedColumnsContenzioso = ['data1', 'data2', 'tipologiaContenzioso', 'settoreMateria', 'areaProdotto', 'sede', 'stato'];
    this.dataInizio = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.dataFine = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.dataInizioContenzioso = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.dataFineContenzioso = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.settoreCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.areaCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.sedeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl();
    this.tipologiaContenziosoCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl(); // loadStack() {
    //   this.list = [];
    // }
    //----------------paginazione config--------------------------

    this.pageDimProdotto = '20'; //numero di righe per pagina

    this.pageDimContenzioso = '20'; //numero di righe per pagina

    this.pageCurrProdotto = 1; //pagina corrente

    this.pageCurrContenzioso = 1; //pagina corrente

    this.pageNumProdotto = 0; //numero di pagine

    this.pageNumContenzioso = 0; //numero di pagine

    this.elemNumProdotto = 0; //numero di elementi totali

    this.elemNumContenzioso = 0; //numero di elementi totali

    this.baseProdotto = 1; //base per creazione layout

    this.baseContenzioso = 1; //base per creazione layout

    this.layoutDimProdotto = 6; //elementi paginazione

    this.layoutDimContenzioso = 6; //elementi paginazione

    this.layoutNumbersProdotto = []; //numeri del paginatore

    this.layoutNumbersContenzioso = []; //numeri del paginatore

    this.numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione

    this.ordine = 'aggiornato-desc'; //'id-desc';

    this.validitaDal = null;
    this.validitaAl = null;
    this.ordineColonna = null; //filtri ricerca:

    this.settore = null;
    this.area = null;
    this.filtroperSede = null;
    /* dataInizio: Date | null = null;
    dataFine: Date | null = null; */

    this.idStatoSegnalazione = null;
    this.idTipologiaContenzioso = null;
    this.formFiltriDiRicercaProdotto = this.formBuilder.group({
      settore: null,
      area: null,
      filtroperSede: null,
      dataInizio: null,
      dataFine: null,
      idStatoSegnalazione: null,
      idTipologiaContenzioso: null
    });
    this.formFiltriDiRicercaContenzioso = this.formBuilder.group({
      settore: null,
      area: null,
      filtroperSede: null,
      dataInizio: null,
      dataFine: null,
      idStatoSegnalazione: null,
      idTipologiaContenzioso: null
    });

    this.filterDate = date => {
      const currentDate = date || new Date();
      return this.dataInizio ? currentDate >= this.dataInizio.value : true;
    };
  } // resetFiltro() {
  //   this.formRicerca.reset();
  //   this.sottoCatDisab = true;
  //   this.prodottoDisab = true;
  //   this.prodottoTipLavDisab = true;
  //   this.list = [];
  //   this.isLoading = true;
  //   this.ricercaAtt = false;
  //   this.formRicerca.value.dataInizio = null;
  //   this.formRicerca.value.dataFine = null;
  //   this.formRicerca.value.dataScadenza = false;
  //   this.formRicerca.value.dimensione = null;
  //   this.formRicerca.value.idAttore = null;
  //   this.formRicerca.value.idProceduraRiferimento = null;
  //   this.formRicerca.value.idProdottoTipLav = null;
  //   this.formRicerca.value.idTipologiaRicorso = null;
  //   this.formRicerca.value.pagina = 1;
  //   this.formRicerca.value.area = null;
  //   this.formRicerca.value.settore = null;
  //   this.formRicerca.value.idSottoarea = null;
  //   this.formRicerca.value.idProdotto = null;
  //   this.ricercaAtt = false;
  //   this.isLoading = true;
  //   this.loadStack();
  // }


  ngOnDestroy() {
    if (this.checkCurrentComponent == null) {
      this.rilevazioniSrv.tabNomeSegnalazione$.next(undefined);
    }
  }

  ngOnInit() {
    var _this = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.checkCurrentTab();

        _this.resetPaginazioneProdotto();

        _this.resetPaginazioneContenzioso(); // this.ricercaAtt = false;


        _this.isLoading = true; // this.loadStack();

        _this.getSettoriMaterie();

        _this.getAreaProdotto();

        _this.codiceSede = _this.storageService.getItem('listaSedi');
        _this.role = _this.storageService.getItem('allroles');
        yield _this.getSedi();

        _this.loadTipologieContenzioso();
      } catch (error) {}

      _this.filteredSettore = _this.settoreCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => _this._filterSettore(value)));
      _this.filteredArea = _this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => _this._filterArea(value)));
      _this.filteredSede = _this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => _this._filterSede(value)));
      _this.filteredTipologiaContenzioso = _this.tipologiaContenziosoCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => _this._filterTipologiaContenzioso(value))); // Aggiungi un listener per il controllo del settore

      _this.settoreCtrl.valueChanges.subscribe(value => {
        if (!value) {
          _this.getAreaProdotto();
        }
      });
    })();
  }

  ngAfterViewInit() {
    if (this.areaAutocompleteTrigger) {
      this.areaAutocompleteTrigger.panelClosingActions.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => this.filteredArea || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(filtered => {
        if (this.areaCtrl.value && !filtered.some(option => option.id === this.areaCtrl.value)) {
          this.areaCtrl.setValue(null);
        }
      })).subscribe();
    }

    if (this.sedeAutocompleteTrigger) {
      this.sedeAutocompleteTrigger.panelClosingActions.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => this.filteredSede || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(filtered => {
        if (this.sedeCtrl.value && !filtered.some(option => option.id === this.sedeCtrl.value)) {
          this.sedeCtrl.setValue(null);
        }
      })).subscribe();
    }

    if (this.tipologiaContenziosoAutocompleteTrigger) {
      this.tipologiaContenziosoAutocompleteTrigger.panelClosingActions.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_18__.switchMap)(() => this.filteredTipologiaContenzioso || []), (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.tap)(filtered => {
        if (this.tipologiaContenziosoCtrl.value && !filtered.some(option => option.id === this.tipologiaContenziosoCtrl.value)) {
          this.tipologiaContenziosoCtrl.setValue(null);
        }
      })).subscribe();
    }
  }

  checkCurrentTab() {
    // con
    // caso default, primo accesso alla pagina
    if (this.rilevazioniSrv.tabNomeSegnalazione$.value == undefined) {
      this.rilevazioniSrv.tabNomeSegnalazione$.next('Segnalazioni Prodotto');
    } else {
      if (this.rilevazioniSrv.tabNomeSegnalazione$.value == 'Segnalazioni Prodotto') {
        this.tabProdotto = 0;
      } else if (this.rilevazioniSrv.tabNomeSegnalazione$.value == 'Segnalazioni Contenzioso') {
        this.tabProdotto = 1;
      }
    }
  }

  tabClick(tab) {
    this.rilevazioniSrv.tabNomeSegnalazione$.next(tab.tab.textLabel);
  }
  /*private*/


  _filterSettore(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.settoreMateria.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
  /*private*/


  _filterArea(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.areaProdotto.filter(option => option.nome.toLowerCase().includes(filterValue));
  }
  /*private*/


  _filterSede(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.sede.filter(option => this.showFieldSede(option.id, option.nome).toLowerCase().includes(filterValue));
  }
  /*private*/


  _filterTipologiaContenzioso(value) {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : ''; // const filterValue = value.toLowerCase();

    return this.tipologieContenzioso.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  settoreSelected(selectedId) {
    var _this2 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedSettore = _this2.settoreMateria.find(option => option.id === selectedId);

      _this2.settoreCtrl.setValue((selectedSettore === null || selectedSettore === void 0 ? void 0 : selectedSettore.nome) || '');

      _this2.settore = selectedId; // gestisci qualsiasi logica aggiuntiva quando un settore è selezionato

      try {
        yield _this2.settoreMateriaSelezionatoConId(selectedId);
      } catch (error) {
        // console.error('Errore nel caricamento delle aree prodotto', error);
        _this2.errorMessage = 'Errore nel caricamento delle aree prodotto. Riprova più tardi.';

        _this2.dialog.alert('Errore nel caricamento delle aree prodotto. Riprova più tardi.');
      }
    })();
  } // async loadAreeProdotto(settoreId: number) {
  //   if (settoreId == null || settoreId == -1) {
  //     this.areaProdotto = [];
  //     this.getAreaProdotto();
  //   } else {
  //     this.areeProdottiService.newGetAllByIdSettore(settoreId).subscribe((data: any) => {
  //       if (data.length === 0) {
  //         alert('Nessuna area prodotto associata a questo settore.');
  //         this.areaProdotto = [];
  //       } else {
  //         this.areaProdotto = data;
  //       }
  //       this.filteredArea = this.areaCtrl.valueChanges.pipe(
  //         startWith(''),
  //         map(value => this._filterArea(value))
  //       );
  //     });
  //   }
  // }


  areaSelected(selectedId) {
    const selectedArea = this.areaProdotto.find(option => option.id === selectedId);
    this.areaCtrl.setValue((selectedArea === null || selectedArea === void 0 ? void 0 : selectedArea.nome) || '');
    this.area = selectedId; // gestisci qualsiasi logica aggiuntiva quando un'area è selezionata
  }

  sedeSelected(selectedId) {
    const selectedSede = this.sede.find(option => option.id === selectedId);
    this.sedeCtrl.setValue(this.showFieldSede(selectedSede === null || selectedSede === void 0 ? void 0 : selectedSede.id, selectedSede === null || selectedSede === void 0 ? void 0 : selectedSede.nome) || '');
    this.filtroperSede = selectedId.toString(); // gestisci qualsiasi logica aggiuntiva quando una sede è selezionata
  }

  tipologiaContenziosoSelected(selectedId) {
    const selectedTipologia = this.tipologieContenzioso.find(option => option.id === selectedId);
    this.tipologiaContenziosoCtrl.setValue((selectedTipologia === null || selectedTipologia === void 0 ? void 0 : selectedTipologia.nome) || '');
    this.idTipologiaContenzioso = selectedId; // gestisci qualsiasi logica aggiuntiva quando una tipologia di contenzioso è selezionata
  }

  clearSettore() {
    this.settoreCtrl.setValue('');
    this.areaCtrl.setValue('');
    this.settore = null;
    this.area = null;
    this.filteredSettore = this.settoreCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterSettore(value)));
    this.areaProdotto = [];
    this.getAreaProdotto(); // Ricarica tutte le aree prodotto
  }

  clearArea() {
    this.areaCtrl.setValue('');
    this.area = null;
    this.filteredArea = this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterArea(value)));
  }

  clearSede() {
    this.sedeCtrl.setValue('');
    this.filtroperSede = null;
    this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterSede(value)));
  }

  clearTipologiaContenzioso() {
    this.tipologiaContenziosoCtrl.setValue('');
    this.idTipologiaContenzioso = null;
    this.filteredTipologiaContenzioso = this.tipologiaContenziosoCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterTipologiaContenzioso(value)));
  }

  clearDate(controlName) {
    if (controlName === 'dataInizio') {
      this.dataInizio.reset();
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');
    } else if (controlName === 'dataFine') {
      this.dataFine.reset();
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');
    } else if (controlName === 'dataInizioContenzioso') {
      this.dataInizioContenzioso.reset();
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');
    } else if (controlName === 'dataFineContenzioso') {
      this.dataFineContenzioso.reset();
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');
    }

    if (this.dataInizio.value == null && this.dataFine.value == null && this.dataInizioContenzioso.value == null && this.dataFineContenzioso.value == null) {
      this.formatDate(null, null, 'Prodotto');
    }
  }

  getSedi() {
    var _this3 = this;

    return (0,C_Users_user_Desktop_Progetti_Net_INPS_MG_WebAppSirico_ClientApp_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ruoliTrimmed = _this3.role.split(';').map(ruolo => ruolo.trim());

      if (ruoliTrimmed.includes("P12689")) {} else {
        if ((ruoliTrimmed.includes(_this3.ruoloRegionale) || ruoliTrimmed.includes(_this3.ruoloProvinciale)) && _this3.codiceSede.length === 0) {
          _this3.dialog.alert('Non ci sono sedi associate al tuo account.');

          return;
        }
      }

      _this3.territorioService.getSedi(_this3.role, _this3.codiceSede, _this3.pagina, _this3.ruoloRegionale, _this3.ruoloProvinciale).subscribe(results => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        _this3.sede = [emptyObject, ...results]; // for(let i = 0; i < this.sede.length; i++) {
        // }
        // if (this.sede.length === 0) {
        //   this.dialog.alert('Non ci sono sedi disponibili.');
        //   return;
        // }
        // let selectedSede: string | undefined;
        // const loadTipoSegnalazioni = this.stepperService.inserimentoTipoSegnalazione$.value || 'Prodotto'; //caso default
        //   if (loadTipoSegnalazioni === 'Prodotto') {
        //     if (this.stepperService.datiSegnalazioneProdotto$.value) {
        //       selectedSede = this.stepperService.datiSegnalazioneProdotto$.value.sede;
        //     }
        //   } else {
        //     if (this.stepperService.datiSegnalazioneContenzioso$.value) {
        //       selectedSede = this.stepperService.datiSegnalazioneContenzioso$.value.sede;
        //     }
        //   }

        /*
                this.sede.forEach(sede => {
                  if (selectedSede === sede.nome) {
                    console.log(`Selected Sede: ${sede.id}`);
                  }
                }); */
      });

      _this3.inizializzaPaginazione('Prodotto');

      _this3.inizializzaPaginazione('Contenzioso');
    })();
  }

  resetPaginazioneProdotto() {
    this.pageCurrProdotto = 1; //pagina corrente

    this.baseProdotto = 1; //base per creazione layout

    this.layoutDimProdotto = 6; //elementi paginazione

    this.layoutNumbersProdotto = []; //numeri del paginatore
  }

  resetPaginazioneContenzioso() {
    this.pageCurrContenzioso = 1; //pagina corrente

    this.baseContenzioso = 1; //base per creazione layout

    this.layoutDimContenzioso = 6; //elementi paginazione

    this.layoutNumbersContenzioso = []; //numeri del paginatore
  }

  formatDate(dataInizio, dataFine, tipoSegnalazione) {
    if (tipoSegnalazione === 'Prodotto') {
      if (dataInizio != null) {
        this.validitaDal = moment__WEBPACK_IMPORTED_MODULE_12__(this.dataInizio.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaDal = null;
      }

      if (dataFine != null) {
        this.validitaAl = moment__WEBPACK_IMPORTED_MODULE_12__(this.dataFine.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaAl = null;
      }
    } else if (tipoSegnalazione === 'Contenzioso') {
      if (dataInizio != null) {
        this.validitaDal = moment__WEBPACK_IMPORTED_MODULE_12__(this.dataInizioContenzioso.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaDal = null;
      }

      if (dataFine != null) {
        this.validitaAl = moment__WEBPACK_IMPORTED_MODULE_12__(this.dataFineContenzioso.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaAl = null;
      }
    }
  }

  inizializzaPaginazione(tipoSegnalazione) {
    if (tipoSegnalazione === 'Prodotto') {
      this.inizializzaPaginazioneProdotto();
    } else if (tipoSegnalazione === 'Contenzioso') {
      this.inizializzaPaginazioneContenzioso();
    }
  }

  inizializzaPaginazioneProdotto() {
    this.layoutNumbersProdotto = [];
    this.rilevazioniSrv.contaRicercaProdotto(this.settore == -1 ? null : this.settore, this.area, this.selectSede(), this.validitaDal, this.validitaAl, this.idStatoSegnalazione, this.selectRole(), this.storageService.getItem('matricola'), this.pagina, this.filtroperSede == null ? true : false).subscribe(response => {
      this.pageCurrProdotto = this.elemNumProdotto != response.totale ? 1 : this.pageCurrProdotto;
      this.elemNumProdotto = response.totale != null ? response.totale : response.count; // this.elemNumProdotto = response.totale;

      this.pageNumProdotto = Math.ceil(this.elemNumProdotto / Number(this.pageDimProdotto));
      this.scorriLayoutProdotto();
      this.ricercaProdotto();
    });
  }

  inizializzaPaginazioneContenzioso() {
    this.layoutNumbersContenzioso = [];
    this.rilevazioniSrv.contaRicercaContenzioso(this.settore == -1 ? null : this.settore, this.area, this.selectSede(), this.validitaDal, this.validitaAl, this.idStatoSegnalazione, this.idTipologiaContenzioso, this.selectRole(), this.storageService.getItem('matricola'), this.pagina, this.filtroperSede == null ? true : false).subscribe(response => {
      this.pageCurrContenzioso = this.elemNumContenzioso != response.totale ? 1 : this.pageCurrContenzioso;
      this.elemNumContenzioso = response.totale != null ? response.totale : response.count; // this.elemNumContenzioso = response.totale;

      this.pageNumContenzioso = Math.ceil(this.elemNumContenzioso / Number(this.pageDimContenzioso));
      this.scorriLayoutContenzioso();
      this.ricercaContenzioso();
    });
  }

  formatToSixDigits(value) {
    const numberValue = Number(value);

    if (value == null) {
      return null;
    }

    return numberValue.toString().padStart(6, '0');
  } //scorri layoutNumbers


  scorriLayoutProdotto() {
    const size = this.layoutDimProdotto; // Numero di elementi da visualizzare nel layout

    let currStart = Math.floor((this.pageCurrProdotto - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumProdotto);

    if (currEnd === this.pageNumProdotto && currEnd - currStart < size - 1) {
      currStart = Math.max(1, this.pageNumProdotto - size + 1);
    }

    this.layoutNumbersProdotto = [];

    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbersProdotto.push(i);
    }
  }

  scorriLayoutContenzioso() {
    const size = this.layoutDimContenzioso; // Numero di elementi da visualizzare nel layout

    let currStart = Math.floor((this.pageCurrContenzioso - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumContenzioso);

    if (currEnd === this.pageNumContenzioso && currEnd - currStart < size - 1) {
      currStart = Math.max(1, this.pageNumContenzioso - size + 1);
    }

    this.layoutNumbersContenzioso = [];

    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbersContenzioso.push(i);
    }
  }

  modificaPaginazione(tipoSegnalazione) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (tipoSegnalazione) {
      case prodotto:
        {
          this.resetPaginazioneProdotto();
          break;
        }

      case contenzioso:
        {
          this.resetPaginazioneContenzioso();
          break;
        }
    }

    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageNextProdotto(tipoSegnalazione) {
    if (this.pageCurrProdotto < this.pageNumProdotto) {
      this.pageCurrProdotto++;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevProdotto(tipoSegnalazione) {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto--;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  setPageCurrProdotto(page, tipoSegnalazione) {
    this.pageCurrProdotto = page;
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageFirstProdotto() {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto = 1;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione('Prodotto');
    }
  }

  pageLastProdotto() {
    if (this.pageCurrProdotto < this.pageNumProdotto) {
      this.pageCurrProdotto = this.pageNumProdotto;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione('Prodotto');
    }
  }

  pageNextContenzioso(tipoSegnalazione) {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso++;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevContenzioso(tipoSegnalazione) {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso--;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  setPageCurrContenzioso(page, tipoSegnalazione) {
    this.pageCurrContenzioso = page;
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageFirstContenzioso() {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso = 1;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione('Contenzioso');
    }
  }

  pageLastContenzioso() {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso = this.pageNumContenzioso;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione('Contenzioso');
    }
  } // openDialog(id: number) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.height = '700px';
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = id;
  //   const dialogRef = this.dialog2.open(RilevazioniDialogComponent, dialogConfig);
  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       //modifica
  //       this.router.navigate(['/organizzazione/rilevazioni/modifica/' + id]);
  //       return;
  //     }
  //     // this.inizializzaPaginazione();
  //   });
  // }


  showFieldStato(stato) {
    const statoImages = {
      1: 'In Bozza',
      2: 'Salvata',
      3: 'Da Risolvere',
      4: 'Integrata',
      5: 'Chiusa'
    };
    return statoImages[stato];
  }

  sortData(sort, tipologia) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';
    this.ordine = '';

    if (sort.direction) {
      this.ordine = sort.active + '_' + sort.direction;
    }

    this.ordineColonna = this.ordine;

    switch (tipologia) {
      case prodotto:
        {
          this.ricercaProdotto();
          break;
        }

      case contenzioso:
        {
          this.ricercaContenzioso();
          break;
        }
    } // this.popolaRisultato();

  } // popolaRisultato() {
  //   let datai = '';
  //   if (this.formRicerca.value.dataInizio) {
  //     datai =
  //       this.formRicerca.value.dataInizio._i.month +
  //       1 +
  //       '/' +
  //       this.formRicerca.value.dataInizio._i.date +
  //       '/' +
  //       this.formRicerca.value.dataInizio._i.year;
  //   }
  //   let dataf = '';
  //   if (this.formRicerca.value.dataFine) {
  //     dataf =
  //       this.formRicerca.value.dataFine._i.month +
  //       1 +
  //       '/' +
  //       (this.formRicerca.value.dataFine._i.date + 1) +
  //       '/' +
  //       this.formRicerca.value.dataFine._i.year;
  //   }
  //   this.isLoading = true;
  // }
  // updateList() {
  //   this.list = this.list.splice(-1).concat(this.list);
  // }


  vaiNuova(tipologia) {
    this.checkCurrentComponent = tipologia;
    this.setTipoSegnalazione(tipologia);
    tipologia == 'Prodotto' ? this.stepperService.datiSegnalazioneProdotto$.next(undefined) : this.stepperService.datiSegnalazioneContenzioso$.next(undefined);
    this.router.navigate(['/segnalazione/inserimento/nuova']);
  }

  setTipoSegnalazione(tipologia) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (tipologia) {
      case prodotto:
        {
          this.stepperService.inserimentoTipoSegnalazione$.next(prodotto);
          break;
        }

      case contenzioso:
        {
          this.stepperService.inserimentoTipoSegnalazione$.next(contenzioso);
          break;
        }
    }
  } // clickRiga(value: any) {
  //   this.openDialog(value.rowData.id);
  // }
  // Funzione per ottenere i filtri applicati

  /*private*/


  getAppliedFilters() {
    const filters = [];

    if (this.settoreCtrl.value) {
      filters.push({
        Filtro: 'Settore',
        Valore: this.settoreCtrl.value
      });
    }

    if (this.areaCtrl.value) {
      filters.push({
        Filtro: 'Area',
        Valore: this.areaCtrl.value
      });
    }

    if (this.sedeCtrl.value) {
      filters.push({
        Filtro: 'Sede',
        Valore: this.sedeCtrl.value
      });
    }

    if (this.tipologiaContenziosoCtrl.value) {
      filters.push({
        Filtro: 'Tipologia Contenzioso',
        Valore: this.tipologiaContenziosoCtrl.value
      });
    }

    if (this.formRicerca.value.dataInizio) {
      filters.push({
        Filtro: 'Data Inizio',
        Valore: this.formRicerca.value.dataInizio
      });
    }

    if (this.formRicerca.value.dataFine) {
      filters.push({
        Filtro: 'Data Fine',
        Valore: this.formRicerca.value.dataFine
      });
    }

    if (filters.length === 0) {
      filters.push({
        Filtro: 'Nessun filtro applicato',
        Valore: ''
      });
    }

    return filters;
  }

  exportAsXLSX(tipoSegnalazione) {
    if (tipoSegnalazione === 'Prodotto') {
      this.exportProdottoAsXLSX();
    } else if (tipoSegnalazione === 'Contenzioso') {
      this.exportContenziosoAsXLSX();
    }
  }
  /*private*/


  exportProdottoAsXLSX() {
    if (this.prodotti.length === 0) {
      this.dialog.alert("Nessun dato disponibile per l'esportazione!");
      return;
    }

    const mappedData = this.prodotti.map(item => ({
      'Data Creazione': item.data1,
      'Data Ultima Modifica': item.data2,
      'Settore/Materia': item.settoreMateria,
      'Area/Prodotto': item.areaProdotto,
      'Sede': this.showFieldSede(item.sedeId, item.sede),
      'Stato': item.statoDesc,
      'Inviata': item.inviata ? 'Sì' : 'No'
    })); // console.log('mappedData: ',mappedData)

    this.exportDataToExcel(mappedData, 'Prodotto');
  }
  /*private*/


  exportContenziosoAsXLSX() {
    if (this.contenziosi.length === 0) {
      this.dialog.alert("Nessun dato disponibile per l'esportazione!");
      return;
    }

    const mappedData = this.contenziosi.map(item => ({
      'Data Creazione': item.data1,
      'Data Ultima Modifica': item.data2,
      'Tipologia Contenzioso': item.contenziosoDesc,
      'Settore/Materia': item.settoreMateria,
      'Area/Prodotto': item.areaProdotto,
      'Sede': this.showFieldSede(item.sedeId, item.sede),
      'Stato': item.statoDesc,
      'Inviata': item.inviata ? 'Sì' : 'No'
    }));
    this.exportDataToExcel(mappedData, 'Contenzioso');
  } // Funzione per esportare i dati in Excel

  /*private*/


  exportDataToExcel(mappedData, tipoSegnalazione) {
    // Ottenere i filtri applicati
    const filters = this.getAppliedFilters(); // Convertire i filtri in un worksheet

    const filtersWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.json_to_sheet(filters); // Convertire i dati in un worksheet

    const dataWorksheet = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.json_to_sheet(mappedData); // Unire i due worksheet

    const workbook = {
      Sheets: {
        'Filtri Applicati': filtersWorksheet,
        'Dati': dataWorksheet
      },
      SheetNames: ['Filtri Applicati', 'Dati']
    }; // Aggiungere bordi alle celle del worksheet dei dati

    const range = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.decode_range(dataWorksheet['!ref'] || '');

    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = {
          c: C,
          r: R
        };
        const cell_ref = xlsx__WEBPACK_IMPORTED_MODULE_20__.utils.encode_cell(cell_address);
        if (!dataWorksheet[cell_ref]) dataWorksheet[cell_ref] = {
          t: 's',
          v: ''
        };
        dataWorksheet[cell_ref].s = {
          border: {
            top: {
              style: 'thin',
              color: {
                rgb: '000000'
              }
            },
            bottom: {
              style: 'thin',
              color: {
                rgb: '000000'
              }
            },
            left: {
              style: 'thin',
              color: {
                rgb: '000000'
              }
            },
            right: {
              style: 'thin',
              color: {
                rgb: '000000'
              }
            }
          }
        };
      }
    }

    const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_20__.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
    this.saveAsExcelFile(excelBuffer, this.getNomeFile(tipoSegnalazione));
  } // Funzione per salvare il file Excel

  /*private*/


  saveAsExcelFile(buffer, fileName) {
    const data = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_11__.saveAs)(data, fileName + EXCEL_EXTENSION);
  }
  /*private*/


  getNomeFile(tipoSegnalazione) {
    const format = 'yyyy-MM-dd';
    const locale = 'it-IT';
    const oggi = new Date();
    let baseFileName = 'Rilevazioni';

    if (tipoSegnalazione === 'Prodotto') {
      baseFileName = 'RilevazioneProdotti';
    } else if (tipoSegnalazione === 'Contenzioso') {
      baseFileName = 'RilevazioneContenziosi';
    }

    return `${baseFileName}-${oggi.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })}-${oggi.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    })}-${oggi.getMilliseconds()}`;
  }

  resetRicerca() {
    // this.clearDate('dataInizioContenzioso');
    // this.clearDate('dataInizio');
    // this.clearDate('dataInizioContenzioso');
    // this.clearDate('dataFineContenzioso');
    this.settore = null;
    this.area = null;
    this.areaProdotto = [];
    this.filtroperSede = null;
    this.dataInizio.reset();
    this.dataFine.reset();
    this.dataInizioContenzioso.reset();
    this.dataFineContenzioso.reset();
    this.idStatoSegnalazione = null;
    this.getAreaProdotto();
    this.settoreCtrl.reset();
    this.areaCtrl.reset();
    this.sedeCtrl.reset();
    this.tipologiaContenziosoCtrl.reset();
    this.filteredSettore = this.settoreCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterSettore(value)));
    this.filteredArea = this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterArea(value)));
    this.filteredSede = this.sedeCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterSede(value)));
    this.filteredTipologiaContenzioso = this.tipologiaContenziosoCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterTipologiaContenzioso(value))); // Esegui la ricerca senza filtri

    this.inizializzaPaginazione('Prodotto');
    this.inizializzaPaginazione('Contenzioso');
  }

  handleRowClickProdotto(segnalazioneSelezionata) {
    this.checkCurrentComponent = 'Prodotto';
    this.setTipoSegnalazione('Prodotto');
    this.stepperService.datiSegnalazioneProdotto$.next(segnalazioneSelezionata);
    const dialogRef = this.dialog2.open(_modal_modifica_segnalazione_modal_modifica_segnalazione_component__WEBPACK_IMPORTED_MODULE_9__.ModalModificaSegnalazioneComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.inizializzaPaginazione(this.stepperService.inserimentoTipoSegnalazione$.value);
    });
  }

  handleRowClickContenzioso(segnalazioneSelezionata) {
    this.checkCurrentComponent = 'Contenzioso';
    this.setTipoSegnalazione('Contenzioso');
    this.stepperService.datiSegnalazioneContenzioso$.next(segnalazioneSelezionata);
    const dialogRef = this.dialog2.open(_modal_modifica_segnalazione_modal_modifica_segnalazione_component__WEBPACK_IMPORTED_MODULE_9__.ModalModificaSegnalazioneComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto'
    });
    dialogRef.afterClosed().subscribe(() => {
      this.inizializzaPaginazione(this.stepperService.inserimentoTipoSegnalazione$.value);
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

  getSettoriMaterie() {
    this.settoreMateriaService.getSettoriConAreeProdotti().subscribe(data => {
      const emptyObject = {
        id: null,
        nome: ''
      }; // Verifica se `data` è un array; se lo è, combina con l'oggetto vuoto, altrimenti usa solo l'oggetto vuoto

      if (Array.isArray(data)) {
        this.settoreMateria = [emptyObject, ...data];
      } else {
        this.settoreMateria = [emptyObject]; // Se non è un array, assegna solo l'oggetto vuoto
      }
    });
  }

  getAreaProdotto() {
    this.areeProdottiService.getAllAreaProdotto().subscribe(data => {
      const emptyObject = {
        id: null,
        nome: ''
      };
      this.areaProdotto = [emptyObject, ...data];
      this.filteredArea = this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterArea(value)));
    });
  }

  settoreMateriaSelezionatoConId(idSettore) {
    if (idSettore == null || idSettore == -1) {
      this.areaProdotto = [];
      this.getAreaProdotto();
    } else {
      this.areeProdottiService.newGetAllByIdSettore(idSettore).subscribe(data => {
        const emptyObject = {
          id: null,
          nome: ''
        };
        this.areaProdotto = [emptyObject, ...data];
      });
      this.filteredArea = this.areaCtrl.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_16__.startWith)(''), (0,rxjs__WEBPACK_IMPORTED_MODULE_17__.map)(value => this._filterArea(value)));
      this.settore = idSettore;
    }
  }

  loadTipologieContenzioso() {
    this.contenziosoService.getAllTioplogie().subscribe(data => {
      const emptyObject = {
        id: null,
        nome: ''
      };
      this.tipologieContenzioso = [emptyObject, ...data];
    });
  }

  selectRole() {
    // se il multiruolo prevede l'amministratore, o il ruolo regionale oppure multiruoli che li includono
    const ruoli = this.role.split(';').map(ruolo => ruolo.trim());
    let ruoloSelezionato = "";

    switch (true) {
      case ruoli.includes(this.ruoloAmministratore):
        ruoloSelezionato = this.ruoloAmministratore;
        break;

      case ruoli.includes(this.ruoloRegionale):
        ruoloSelezionato = this.ruoloRegionale;
        break;

      case ruoli.includes(this.ruoloProvinciale):
        ruoloSelezionato = this.ruoloProvinciale;
        break;

      default:
        ruoloSelezionato = "";
    }

    return ruoloSelezionato;
  }

  selectSede() {
    var listaCodeSedi = [];

    if ((this.role.split(';').map(ruolo => ruolo.trim()).includes("P12689") || this.role.split(';').map(ruolo => ruolo.trim()).includes("P12690")) && this.filtroperSede == null
    /*&&
    this.codiceSede.length > 0*/
    ) {
      return null;
    } else if ((this.role.split(';').map(ruolo => ruolo.trim()).includes("P12689") || this.role.split(';').map(ruolo => ruolo.trim()).includes("P12690")) && this.filtroperSede != null) {
      listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede));
      return listaCodeSedi;
    } else {
      if ((this.role.split(';').map(ruolo => ruolo.trim()).includes(this.ruoloProvinciale) || this.role.split(';').map(ruolo => ruolo.trim()).includes(this.ruoloRegionale)) && this.filtroperSede == null && this.codiceSede.length > 0) {
        for (let i = 0; i < this.codiceSede.length; i++) {
          listaCodeSedi.push(this.codiceSede[i].sedeCode);
        }

        return listaCodeSedi;
      } else {
        listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede));
        return listaCodeSedi;
      }
    }
  }

  ricercaProdotto() {
    this.isLoading = true; // if (this.dataInizio.value != null) {
    //   this.validitaDal = moment(this.dataInizio.value).startOf('day').format('YYYY-MM-DD')
    // } else { this.validitaDal = null; }
    // if (this.dataFine.value != null) {
    //   this.validitaAl = moment(this.dataFine.value).startOf('day').format('YYYY-MM-DD')
    // } else { this.validitaAl = null; }

    const formValues = this.formRicerca.value;
    const codiceSede = this.filtroperSede == null && this.codiceSede.length > 0 ? this.codiceSede[0] : this.formatToSixDigits(this.filtroperSede); // var roleRicerca = "";

    this.rilevazioniSrv.getRicercaProdotto(Number(this.pageDimProdotto), this.pageCurrProdotto, this.settore == -1 ? null : this.settore, this.area, this.selectSede(), this.validitaDal, this.validitaAl, this.idStatoSegnalazione, this.selectRole(), this.storageService.getItem('matricola'), this.ordineColonna, 'Inserimento', this.filtroperSede == null ? true : false //10, 1, null, null, null, null, null, null, null, null, null
    ).subscribe(data => {
      this.isLoading = false;
      this.prodotti = data;

      if (!(this.prodotti.length > 0)
      /*&& this.ricercaAtt*/
      ) {
        this.dialog.alert('Nessun risultato per il filtro selezionato!');
        /*this.ricercaAtt = false;*/
      }
    }, error => {
      // console.error('Errore nel recupero dei prodotti', error);
      this.errorMessage = 'Errore nel recupero dei prodotti';
      this.isLoading = false;
    });
  }

  ricercaContenzioso() {
    this.isLoading = true;
    const formValues = this.formRicerca.value;
    this.rilevazioniSrv.getRicercaContenzioso(Number(this.pageDimContenzioso), this.pageCurrContenzioso, this.settore == -1 ? null : this.settore, this.area, this.selectSede(), this.validitaDal, this.validitaAl, this.idStatoSegnalazione, this.idTipologiaContenzioso, this.selectRole(), this.storageService.getItem('matricola'), this.ordineColonna, 'Inserimento', //<-- mettere "Gestione" nel caso della pagina della ricerca dell'amministratore in modo tale da farsi ritornare le date invio e data risolta
    this.filtroperSede == null ? true : false //10, 1, null, null, null, null, null, null, null, null, null, "Inserimento".  <-- mettere "Gestione" nel caso della pagina della ricerca dell'amministratore in modo tale da farsi ritornare le date invio e data risolta
    ).subscribe(data => {
      this.contenziosi = data;
      this.isLoading = false;
      console.log('tabProdotto: ', this.tabProdotto);

      if (!(this.contenziosi.length > 0) && this.tabProdotto == 1
      /*&& this.ricercaAtt*/
      ) {
        this.dialog.alert('Nessun risultato per il filtro selezionato!');
        /*this.ricercaAtt = false;*/
      }
    }, error => {
      // console.error('Errore nel recupero dei contenziosi', error);
      this.errorMessage = 'Errore nel recupero dei contenziosi';
      this.isLoading = false;
    });
  }

  onDateChange(typeDate) {
    if (typeDate.includes('Contenzioso')) {
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');

      if (this.validitaDal && this.validitaAl && this.validitaDal > this.validitaAl) {
        if (typeDate === 'startDateContenzioso') {
          this.dataInizioContenzioso.reset();
        } else if (typeDate === 'endDateContenzioso') {
          this.dataFineContenzioso.reset();
        }
      }
    } else {
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');

      if (this.validitaDal && this.validitaAl && this.validitaDal > this.validitaAl) {
        if (typeDate === 'startDate') {
          this.dataInizio.reset();
        } else if (typeDate === 'endDate') {
          this.dataFine.reset();
        }
      }
    }
  }

  openAreaPanel() {
    this.areaAutocompleteTrigger.openPanel();
  }

  openSedePanel() {
    this.sedeAutocompleteTrigger.openPanel();
  }

  openTipologiaContenziosoPanel() {
    this.tipologiaContenziosoAutocompleteTrigger.openPanel();
  }

  formatDateToISO(date) {
    if (!date) return '';
    return date.toISOString().split('T')[0]; // Ottiene la data in formato yyyy-MM-dd
  }

  onFocus(ctrl) {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

}

RilevazioniComponent.ɵfac = function RilevazioniComponent_Factory(t) {
  return new (t || RilevazioniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_ng_matero_extensions_dialog__WEBPACK_IMPORTED_MODULE_21__.MtxDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_rilevazione_service__WEBPACK_IMPORTED_MODULE_3__.RilevazioneService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_22__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_5__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_6__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_2__.Aree), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_territorio_service__WEBPACK_IMPORTED_MODULE_7__.TerritorioService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_services_contenzioso_service__WEBPACK_IMPORTED_MODULE_8__.ContenziosoService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared__WEBPACK_IMPORTED_MODULE_10__.StorageService));
};

RilevazioniComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: RilevazioniComponent,
  selectors: [["app-rilevazioni"]],
  viewQuery: function RilevazioniComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteTrigger);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c2, 5, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteTrigger);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.areaAutocompleteTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sedeAutocompleteTrigger = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.tipologiaContenziosoAutocompleteTrigger = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵProvidersFeature"]([_data_service__WEBPACK_IMPORTED_MODULE_1__.TablesDataService])],
  decls: 141,
  vars: 69,
  consts: [[3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "Segnalazioni Prodotto", 1, "tab"], ["align", "end", 1, "container-cards-buttons"], ["mat-raised-button", "", "type", "button", 1, "child-buttons-conferma", 3, "click"], ["mat-raised-button", "", "type", "submit", 1, "child-buttons-excel", 3, "click"], [3, "formGroup"], [1, "container-data"], [1, "child-data"], ["matInput", "", "placeholder", "Settore/Materia", 3, "formControl", "matAutocomplete", "focus"], [3, "optionSelected"], ["autoSettore", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Area/Prodotto", 3, "formControl", "matAutocomplete", "focus"], ["autoArea", "matAutocomplete"], ["matInput", "", "readonly", "", 3, "matDatepicker", "formControl", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], ["picker1", ""], ["matInput", "", "placeholder", "Sede", 3, "formControl", "matAutocomplete", "focus"], ["autoSede", "matAutocomplete"], [1, "container-buttons"], ["type", "submit", "mat-button", "", 1, "child-buttons", "child-buttons-conferma", 3, "click"], ["type", "button", "mat-button", "", 1, "child-buttons", "child-buttons-chiudi", 3, "click"], [1, "section-title"], ["class", "table", 4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], ["label", "Segnalazioni Contenzioso", 1, "tab"], ["mat-raised-button", "", "type", "submit", 1, "child-cards-buttons", "child-buttons-excel", 3, "click"], ["picker2", ""], ["matInput", "", "readonly", "", 3, "matDatepicker", "formControl", "min", "dateChange"], ["picker3", ""], ["matInput", "", "placeholder", "Tipologia Contenzioso", 3, "formControl", "matAutocomplete", "focus"], ["autoTipologiaContenzioso", "matAutocomplete"], [3, "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "table"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "data1"], ["mat-header-cell", "", "mat-sort-header", "data1", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "data2"], ["mat-header-cell", "", "mat-sort-header", "data2", 4, "matHeaderCellDef"], ["matColumnDef", "settoreMateria"], ["mat-header-cell", "", "mat-sort-header", "settoreMateria", 4, "matHeaderCellDef"], ["matColumnDef", "areaProdotto"], ["mat-header-cell", "", "mat-sort-header", "areaProdotto", 4, "matHeaderCellDef"], ["matColumnDef", "sede"], ["mat-header-cell", "", "mat-sort-header", "sede", 4, "matHeaderCellDef"], ["matColumnDef", "stato"], ["mat-header-cell", "", "mat-sort-header", "stato", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "align-elements", 4, "matCellDef"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], ["mat-header-row", ""], ["mat-row", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "data1"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "data2"], ["mat-header-cell", "", "mat-sort-header", "settoreMateria"], ["mat-header-cell", "", "mat-sort-header", "areaProdotto"], ["mat-header-cell", "", "mat-sort-header", "sede"], ["mat-header-cell", "", "mat-sort-header", "stato"], ["mat-cell", "", 1, "align-elements"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"], ["matColumnDef", "tipologiaContenzioso"], ["mat-header-cell", "", "mat-sort-header", "tipologiaContenzioso", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "tipologiaContenzioso"]],
  template: function RilevazioniComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "page-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "mat-tab-group", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectedTabChange", function RilevazioniComponent_Template_mat_tab_group_selectedTabChange_1_listener($event) {
        return ctx.tabClick($event);
      })("selectedIndexChange", function RilevazioniComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
        return ctx.tabProdotto = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-tab", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](3, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-card-actions", 2)(5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_5_listener() {
        return ctx.vaiNuova("Prodotto");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](7, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8, "\u00A0Nuova Segnalazione ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_9_listener() {
        return ctx.exportAsXLSX("Prodotto");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](11, " cloud_download");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](12, "\u00A0Genera Excel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "br")(14, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](15, "form", 5)(16, "div", 6)(17, "mat-form-field", 7)(18, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_18_listener() {
        return ctx.onFocus(ctx.settoreCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](19, "mat-autocomplete", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_19_listener($event) {
        return ctx.settoreSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](21, RilevazioniComponent_mat_option_21_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](23, RilevazioniComponent_button_23_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](24, "mat-form-field", 7)(25, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_25_listener() {
        return ctx.onFocus(ctx.areaCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "mat-autocomplete", 9, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_26_listener($event) {
        return ctx.areaSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](28, RilevazioniComponent_mat_option_28_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](30, RilevazioniComponent_button_30_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](31, "div", 6)(32, "mat-form-field", 7)(33, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](34, "Data inserimento da");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](35, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dateChange", function RilevazioniComponent_Template_input_dateChange_35_listener() {
        return ctx.onDateChange("startDate");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "mat-datepicker-toggle", 16)(37, "mat-datepicker", null, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](39, RilevazioniComponent_button_39_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](40, "mat-form-field", 7)(41, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](42, "Data inserimento a");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](43, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dateChange", function RilevazioniComponent_Template_input_dateChange_43_listener() {
        return ctx.onDateChange("endDate");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](44, "mat-datepicker-toggle", 16)(45, "mat-datepicker", null, 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](47, RilevazioniComponent_button_47_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "div", 6)(49, "mat-form-field", 7)(50, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_50_listener() {
        return ctx.onFocus(ctx.sedeCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](51, "mat-autocomplete", 9, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_51_listener($event) {
        return ctx.sedeSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](53, RilevazioniComponent_mat_option_53_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](54, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](55, RilevazioniComponent_button_55_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](57, "div", 21)(58, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_58_listener() {
        return ctx.inizializzaPaginazione("Prodotto");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](59, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](60, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_60_listener() {
        return ctx.resetRicerca();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](61, " Annulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](62, "br")(63, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](64, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](65);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](66, RilevazioniComponent_div_66_Template, 38, 14, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](67, RilevazioniComponent_ng_template_67_Template, 7, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](69, "mat-tab", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](70, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](71, "mat-card-actions", 2)(72, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_72_listener() {
        return ctx.vaiNuova("Contenzioso");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](73, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](74, "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](75, "\u00A0Nuova Segnalazione ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](76, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_76_listener() {
        return ctx.exportAsXLSX("Contenzioso");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](77, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](78, " cloud_download");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](79, "\u00A0Genera Excel ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](80, "br")(81, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](82, "div", 6)(83, "mat-form-field", 7)(84, "input", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_84_listener() {
        return ctx.onFocus(ctx.settoreCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](85, "mat-autocomplete", 9, 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_85_listener($event) {
        return ctx.settoreSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](87, RilevazioniComponent_mat_option_87_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](88, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](89, RilevazioniComponent_button_89_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](90, "mat-form-field", 7)(91, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_91_listener() {
        return ctx.onFocus(ctx.areaCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](92, "mat-autocomplete", 9, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_92_listener($event) {
        return ctx.areaSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](94, RilevazioniComponent_mat_option_94_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](95, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](96, RilevazioniComponent_button_96_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](97, "div", 6)(98, "mat-form-field", 7)(99, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](100, "Data inserimento da");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](101, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dateChange", function RilevazioniComponent_Template_input_dateChange_101_listener() {
        return ctx.onDateChange("startDateContenzioso");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](102, "mat-datepicker-toggle", 16)(103, "mat-datepicker", null, 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](105, RilevazioniComponent_button_105_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](106, "mat-form-field", 7)(107, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](108, "Data inserimento a");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](109, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("dateChange", function RilevazioniComponent_Template_input_dateChange_109_listener() {
        return ctx.onDateChange("endDateContenzioso");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](110, "mat-datepicker-toggle", 16)(111, "mat-datepicker", null, 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](113, RilevazioniComponent_button_113_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](114, "div", 6)(115, "mat-form-field", 7)(116, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_116_listener() {
        return ctx.onFocus(ctx.sedeCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](117, "mat-autocomplete", 9, 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_117_listener($event) {
        return ctx.sedeSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](119, RilevazioniComponent_mat_option_119_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](120, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](121, RilevazioniComponent_button_121_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](122, "mat-form-field", 7)(123, "input", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("focus", function RilevazioniComponent_Template_input_focus_123_listener() {
        return ctx.onFocus(ctx.tipologiaContenziosoCtrl);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](124, "mat-autocomplete", 9, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("optionSelected", function RilevazioniComponent_Template_mat_autocomplete_optionSelected_124_listener($event) {
        return ctx.tipologiaContenziosoSelected($event.option.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](126, RilevazioniComponent_mat_option_126_Template, 2, 2, "mat-option", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](127, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](128, RilevazioniComponent_button_128_Template, 3, 0, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](129, "div", 21)(130, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_130_listener() {
        return ctx.inizializzaPaginazione("Contenzioso");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](131, " Cerca ");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](132, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function RilevazioniComponent_Template_button_click_132_listener() {
        return ctx.resetRicerca();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](133, " Annulla");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](134, "br")(135, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](136, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](137);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](138, RilevazioniComponent_div_138_Template, 41, 14, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](139, RilevazioniComponent_ng_template_139_Template, 7, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](20);

      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](27);

      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](38);

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](46);

      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](52);

      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](68);

      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](104);

      const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](112);

      const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](125);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedIndex", ctx.tabProdotto);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formFiltriDiRicercaProdotto);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.settoreCtrl)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](22, 55, ctx.filteredSettore));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.settoreCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.areaCtrl)("matAutocomplete", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 57, ctx.filteredArea));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.areaCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r6)("formControl", ctx.dataInizio);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataInizio.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r8)("formControl", ctx.dataFine);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataFine.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.sedeCtrl)("matAutocomplete", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](54, 59, ctx.filteredSede));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sedeCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("Ricerca Segnalazioni Prodotto | ", ctx.prodotti.length, " risultati su ", ctx.elemNumProdotto, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.prodotti.length > 0)("ngIfElse", _r14);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.settoreCtrl)("matAutocomplete", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](88, 61, ctx.filteredSettore));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.settoreCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.areaCtrl)("matAutocomplete", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](95, 63, ctx.filteredArea));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.areaCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r22)("formControl", ctx.dataInizioContenzioso);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r22);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataInizioContenzioso.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matDatepicker", _r24)("formControl", ctx.dataFineContenzioso)("min", ctx.dataInizioContenzioso.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("for", _r24);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.dataFineContenzioso.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.sedeCtrl)("matAutocomplete", _r10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](120, 65, ctx.filteredSede));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.sedeCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControl", ctx.tipologiaContenziosoCtrl)("matAutocomplete", _r29);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](127, 67, ctx.filteredTipologiaContenzioso));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.tipologiaContenziosoCtrl.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"]("Ricerca Segnalazioni Contenzioso | ", ctx.contenziosi.length, " risultati su ", ctx.elemNumContenzioso, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.contenziosi.length > 0)("ngIfElse", _r14);
    }
  },
  directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_13__.PageHeaderComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__.MatTab, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_27__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_30__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocompleteTrigger, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlDirective, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_24__.MatAutocomplete, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_32__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatSuffix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__.MatLabel, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_33__.MatDatepicker, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__.DefaultClassDirective, _angular_material_select__WEBPACK_IMPORTED_MODULE_37__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _angular_material_card__WEBPACK_IMPORTED_MODULE_26__.MatCard],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.AsyncPipe],
  styles: [".nessuna-corr[_ngcontent-%COMP%] {\n  color: #898989;\n  font-style: oblique;\n  text-align: center;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.azzera-filtro[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  color: white;\n}\n\n.azzera-filtro[_ngcontent-%COMP%]:hover {\n  background-color: #6f98ff;\n}\n\n.azzera-filtro[_ngcontent-%COMP%]:disabled:hover {\n  background-color: #e0e0e0;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.container-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 50px;\n  margin-right: 50px;\n  justify-content: end;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 12pt;\n}\n\n.status-img[_ngcontent-%COMP%] {\n  width: 30px;\n  position: relative;\n  top: 2px;\n}\n\np[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n}\n\n#contenitoreMessaggi[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  padding-left: 1.3px;\n}\n\n#aggiustaText[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n\n\nmat-tab-group[_ngcontent-%COMP%]   mat-tab[_ngcontent-%COMP%]   .tab[_ngcontent-%COMP%] {\n  height: 200px;\n  margin: 2px;\n  background-color: #2f6dd5;\n  color: red;\n}\n\n.child-data[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.child-data[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n\n.child-data[_ngcontent-%COMP%]   .mat-form-field-flex[_ngcontent-%COMP%]   .mat-datepicker-toggle[_ngcontent-%COMP%] {\n  order: 1;\n  margin-left: auto;\n  margin-right: 0;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n  display: block;\n  width: auto;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJpbGV2YXppb25pLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxQcm9nZXR0aSUyMC5OZXRcXElOUFMtTUctV2ViQXBwU2lyaWNvXFxDbGllbnRBcHBcXHNyY1xcYXBwXFxyb3V0ZXNcXG9yZ2FuaXp6YXppb25lXFxyaWxldmF6aW9uaVxccmlsZXZhemlvbmkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREdBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQ0FGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0UseUJBQUE7RUNGRjtFREtBO0lBQ0Usb0JBQUE7RUNIRjtBQUNGOztBRE1BO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQ0pGOztBRFlBO0VBQ0UsZUFBQTtBQ1RGOztBRDRCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUN6QkY7O0FEdUlBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNwSUY7O0FEdUlBOztFQUdFLG1CQUFBO0FDcklGOztBRDJJQTtFQUNFLDJCQUFBO0FDeElGOztBRDJJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQTs7QUFzSUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtBQ3BPRjs7QUR1T0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ3BPRjs7QUR1T0E7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7QUNwT0Y7O0FEdU9BO0VBQ0UsUUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ3BPRjs7QUR1T0E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDcE9GIiwiZmlsZSI6InJpbGV2YXppb25pLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5lc3N1bmEtY29yciB7XHJcbiAgY29sb3I6ICM4OTg5ODk7XHJcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG5cclxufVxyXG5cclxuLmF6emVyYS1maWx0cm8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYXp6ZXJhLWZpbHRybzpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmOThmZjtcclxuXHJcbn1cclxuXHJcbi5henplcmEtZmlsdHJvOmRpc2FibGVkOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFpbmVyLWJ1dHRvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbn1cclxuXHJcbi8vIC8qdGFibGUqL1xyXG4vLyB0YWJsZSB7XHJcbi8vICAgd2lkdGg6IDEwMCU7XHJcbi8vIH1cclxuXHJcbnRoIHtcclxuICBmb250LXNpemU6IDEycHQ7XHJcbn1cclxuXHJcbi8vIC5tYXQtcm93IHtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtcm93OmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAyMzEsIDIzMSkgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XHJcbi8vIH1cclxuXHJcbi5zdGF0dXMtaW1nIHtcclxuICB3aWR0aDogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAycHg7XHJcbn1cclxuXHJcbi8vIC50b29sdGlwIHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAudG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG5cclxuLy8gICB3aWR0aDogMTgwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcwMSk7XHJcbi8vICAgY29sb3I6ICNmZmY7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuLy8gICBwYWRkaW5nOiA1cHggMDtcclxuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgei1pbmRleDogMTtcclxuLy8gICAvLyBib3R0b206IDE1MCU7IC8vdG9wXHJcbi8vICAgLy9sZWZ0OiA1MCU7ICAvL3RvcFxyXG4vLyAgIC8vIG1hcmdpbi1sZWZ0OiAtNjBweDsgLy90b3BcclxuLy8gICB0b3A6IDVweDtcclxuLy8gICByaWdodDogMTIwJTtcclxuXHJcbi8vICAgb3BhY2l0eTogMDtcclxuLy8gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAudG9vbHRpcCAudG9vbHRpcHRleHQ6OmFmdGVyIHtcclxuLy8gICBjb250ZW50OiBcIlwiO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAvL3RvcDogMTAwJTsgLy90b3BcclxuLy8gICAvL2xlZnQ6IDUwJTsgLy90b3BcclxuLy8gICAvL21hcmdpbi1sZWZ0OiAtNXB4OyAvL3RvcFxyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIGxlZnQ6IDEwMCU7XHJcbi8vICAgbWFyZ2luLXRvcDogLTVweDtcclxuLy8gICBib3JkZXItd2lkdGg6IDVweDtcclxuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4vLyAgIC8vYm9yZGVyLWNvbG9yOiBibGFjayB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuLy8gICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IGJsYWNrO1xyXG4vLyB9XHJcblxyXG4vLyAudG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4vLyAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbi8vICAgb3BhY2l0eTogMTtcclxuLy8gfVxyXG5cclxuLy9wYWdpbmF0b3Igc3R5bGVcclxuXHJcbi8vIC8vY29udGFpbmVyXHJcbi8vIC5tYXQtcGFnaW5hdG9yLW1vZCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgIGhlaWdodDogNTBweDtcclxuLy8gICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiB7XHJcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiBhIHtcclxuLy8gICBjb2xvcjogYmxhY2s7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuLy8gICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBjb2xvcjogd2hpdGU7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIGE6aG92ZXI6bm90KC5hY3RpdmUpIHtcclxuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gLnBhZ2luYXRvci1pbmZvIHtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgdG9wOiAxMnB4O1xyXG4vLyAgIGxlZnQ6IC0yNnB4O1xyXG4vLyAgIGNvbG9yOiBncmV5O1xyXG4vLyAgIGZvbnQtc2l6ZTogMTNweDtcclxuLy8gICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0b3ItbnVtZWxlbSB7XHJcbi8vICAgZmxvYXQ6IGxlZnQ7XHJcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgIHRvcDogNXB4O1xyXG4vLyAgIGxlZnQ6IDEwcHg7XHJcbi8vICAgcGFkZGluZzogNXB4O1xyXG4vLyAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbi8vICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRvci1udW1lbGVtLXNlbGVjdCB7XHJcbi8vICAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcclxuLy8gICBjb2xvcjogZ3JleTtcclxuLy8gfVxyXG5cclxucCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4jY29udGVuaXRvcmVNZXNzYWdnaSB0ZC5tYXQtY2VsbCxcclxudGQubWF0LWZvb3Rlci1jZWxsLyosXHJcbnRoLm1hdC1oZWFkZXItY2VsbCovIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEuM3B4O1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG4jYWdnaXVzdGFUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qXHJcbi5jb250YWluZXItZGF0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIC8vIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5jaGlsZC1kYXRhIHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxuICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5sb2NrLXRleHRhcmVhIHtcclxuICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXItYnV0dG9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuICAvLyBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4uY2hpbGQtYnV0dG9ucyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcbiovXHJcblxyXG5cclxuXHJcbi8vIC8vIE5VT1ZPXHJcbi8vIC5jb250YWluZXItZGF0YSB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgIC8vIGJvcmRlcjogM3B4IHNvbGlkIHJlZDtcclxuLy8gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbi8vIH1cclxuXHJcbi8vIC5jaGlsZC1kYXRhIHtcclxuLy8gICBtYXJnaW4tbGVmdDogNTBweDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbi8vICAgd2lkdGg6IDUwJTtcclxuLy8gICAvLyBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbi8vIH1cclxuXHJcbi8vIC5jaGlsZC1kYXRhLWRhdGUtcGlja2VyIHtcclxuLy8gICBtYXJnaW4tdG9wOiAtNDBweDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC8vIC5jaGlsZC1kYXRhLXBsYWNlaG9sZGVyIHtcclxuLy8gLy8gICBkaXNwbGF5OiBub25lO1xyXG4vLyAvLyB9XHJcblxyXG4vLyAuY29udGFpbmVyLWNhcmRzLWJ1dHRvbnMge1xyXG4vLyAgIGRpc3BsYXk6ZmxleDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuLy8gfVxyXG5cclxuLy8gLmNoaWxkLWNhcmRzLWJ1dHRvbnMge1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4vLyAubG9jay10ZXh0YXJlYSB7XHJcbi8vICAgcmVzaXplOiBub25lO1xyXG4vLyB9XHJcblxyXG4vLyAudG9nZ2xlIHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4vLyB9XHJcblxyXG4vLyAudG9nZ2xlLW1hcmdpbi10b3Age1xyXG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5jb250YWluZXItYnV0dG9ucyB7XHJcbi8vICAgZGlzcGxheTogZmxleDtcclxuLy8gICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4vLyAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcclxuLy8gICAvLyBib3JkZXI6IDNweCBzb2xpZCByZWQ7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4vLyB9XHJcblxyXG4vLyAvLyAuc2xpZGUtdG9nZ2xlIHtcclxuLy8gLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAvLyAgIGp1c3RpZnktY29udGVudDogZW5kO1xyXG4vLyAvLyAgIG1hcmdpbi1yaWdodDogNCU7XHJcbi8vIC8vICAgbWFyZ2luLXRvcDogLTMlO1xyXG4vLyAvLyB9XHJcblxyXG4vLyAuY2hpbGQtYnV0dG9ucyB7XHJcbi8vICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbi8vICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4vLyAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gLmFsaWduLWNvbnRlbnQtY2VudGVyIHtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5hbGlnbi1lbGVtZW50cyB7XHJcbi8vICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMC45JTtcclxuLy8gfVxyXG5cclxubWF0LXRhYi1ncm91cCBtYXQtdGFiIC50YWIge1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgbWFyZ2luOiAycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNTtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY2hpbGQtZGF0YSAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmNoaWxkLWRhdGEgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICBmbGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5jaGlsZC1kYXRhIC5tYXQtZm9ybS1maWVsZC1mbGV4IC5tYXQtZGF0ZXBpY2tlci10b2dnbGUge1xyXG4gIG9yZGVyOiAxO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxufSIsIi5uZXNzdW5hLWNvcnIge1xuICBjb2xvcjogIzg5ODk4OTtcbiAgZm9udC1zdHlsZTogb2JsaXF1ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucm90YXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHpvb206IDEuMjtcbn1cblxuLmF6emVyYS1maWx0cm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5henplcmEtZmlsdHJvOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmOThmZjtcbn1cblxuLmF6emVyYS1maWx0cm86ZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG4uY29udGFpbmVyLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGp1c3RpZnktY29udGVudDogZW5kO1xufVxuXG50aCB7XG4gIGZvbnQtc2l6ZTogMTJwdDtcbn1cblxuLnN0YXR1cy1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cblxucCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuI2NvbnRlbml0b3JlTWVzc2FnZ2kgdGQubWF0LWNlbGwsXG50ZC5tYXQtZm9vdGVyLWNlbGwge1xuICBwYWRkaW5nLWxlZnQ6IDEuM3B4O1xufVxuXG4jYWdnaXVzdGFUZXh0IHtcbiAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xufVxuXG4vKlxuLmNvbnRhaW5lci1kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgLy8gYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5jaGlsZC1kYXRhIHtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNTBweDtcbiAgd2lkdGg6IDMwJTtcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmVkO1xufVxuXG4ubG9jay10ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgLy8gYm9yZGVyOiAzcHggc29saWQgcmVkO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG59XG5cbi5jaGlsZC1idXR0b25zIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbiovXG5tYXQtdGFiLWdyb3VwIG1hdC10YWIgLnRhYiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIG1hcmdpbjogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1O1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2hpbGQtZGF0YSAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNoaWxkLWRhdGEgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNoaWxkLWRhdGEgLm1hdC1mb3JtLWZpZWxkLWZsZXggLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSB7XG4gIG9yZGVyOiAxO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uc2VjdGlvbi10aXRsZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */"]
});

/***/ }),

/***/ 87834:
/*!*************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/rilevazioni.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RilevazioniModule": () => (/* binding */ RilevazioniModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 54941);
/* harmony import */ var _rilevazioni_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rilevazioni-routing.module */ 43989);
/* harmony import */ var _rilevazioni_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rilevazioni.component */ 92931);
/* harmony import */ var _rilevazioni_nuova_rilevazioni_nuova_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rilevazioni-nuova/rilevazioni-nuova.component */ 10896);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _stepper_dialog_modifica_stepper_dialog_modifica_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stepper-dialog-modifica/stepper-dialog-modifica.component */ 15722);
/* harmony import */ var _stepper_dialog_creazione_aspetto_stepper_dialog_creazione_aspetto_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stepper-dialog-creazione-aspetto/stepper-dialog-creazione-aspetto.component */ 50056);
/* harmony import */ var _pagina_risolvi_aspetto_pagina_risolvi_aspetto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagina-risolvi-aspetto/pagina-risolvi-aspetto.component */ 408);
/* harmony import */ var _modale_testi_aspetti_modale_testi_aspetti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modale-testi-aspetti/modale-testi-aspetti.component */ 65293);
/* harmony import */ var _modal_risolvi_modal_risolvi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-risolvi/modal-risolvi.component */ 27068);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _gestione_segnalazione_gerarchico_gestione_segnalazione_gerarchico_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gestione-segnalazione-gerarchico/gestione-segnalazione-gerarchico.component */ 68601);
/* harmony import */ var _modal_modifica_segnalazione_modal_modifica_segnalazione_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-modifica-segnalazione/modal-modifica-segnalazione.component */ 41263);
/* harmony import */ var _modal_risolvi_contenzioso_modal_risolvi_contenzioso_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modal-risolvi-contenzioso/modal-risolvi-contenzioso.component */ 3921);
/* harmony import */ var _modal_dettagli_gestione_modal_dettagli_gestione_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modal-dettagli-gestione/modal-dettagli-gestione.component */ 76565);
/* harmony import */ var _modal_dettagli_gestione_contenziosi_modal_dettalgi_gestione_contenziosi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal-dettagli-gestione-contenziosi/modal-dettalgi-gestione-contenziosi.component */ 35118);
/* harmony import */ var _approvazione_approvazioni_approvazioni_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./approvazione/approvazioni/approvazioni.component */ 4609);
/* harmony import */ var _gestione_file_gestione_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gestione-file/gestione-file.component */ 96640);
/* harmony import */ var _modal_dettagli_segnalazione_modal_dettagli_segnalazione_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal-dettagli-segnalazione/modal-dettagli-segnalazione.component */ 50220);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 43188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 3184);






// import { RilevazioniModificaComponent } from './rilevazioni-modifica/rilevazioni-modifica.component';
// import { RilevazioniGestioneComponent } from './rilevazioni-gestione/rilevazioni-gestione.component';
// import { Step1ParametriComponent } from './rilevazioni-gestione/step1-parametri/step1-parametri.component';
// import { Step2FlussoLavoroComponent } from './rilevazioni-gestione/step2-flusso-lavoro/step2-flusso-lavoro.component';
// import { Step3GestioneRicorsiComponent } from './rilevazioni-gestione/step3-gestione-ricorsi/step3-gestione-ricorsi.component';
// import { Step4RilevazioneComponent } from './rilevazioni-gestione/step4-rilevazione/step4-rilevazione.component';
// import { DialogNoteComponent } from './rilevazioni-gestione/step4-rilevazione/dialog-note/dialog-note.component';
// import { ConfirmSaveComponent } from './rilevazioni-gestione/confirm-save/confirm-save.component';
// import { RilevazioniDialogComponent } from './rilevazioni-dialog/rilevazioni-dialog.component';
// import { DialogErroreComponent } from './rilevazioni-gestione/dialog-errore/dialog-errore.component';




















const COMPONENTS = [
    _rilevazioni_component__WEBPACK_IMPORTED_MODULE_2__.RilevazioniComponent,
    _rilevazioni_nuova_rilevazioni_nuova_component__WEBPACK_IMPORTED_MODULE_3__.RilevazioniNuovaComponent,
];
const COMPONENTS_DYNAMIC = [];
class RilevazioniModule {
}
RilevazioniModule.ɵfac = function RilevazioniModule_Factory(t) { return new (t || RilevazioniModule)(); };
RilevazioniModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({ type: RilevazioniModule });
RilevazioniModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({ providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_18__.NativeDateAdapter], imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _rilevazioni_routing_module__WEBPACK_IMPORTED_MODULE_1__.RilevazioniRoutingModule,
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](RilevazioniModule, { declarations: [_rilevazioni_component__WEBPACK_IMPORTED_MODULE_2__.RilevazioniComponent,
        _rilevazioni_nuova_rilevazioni_nuova_component__WEBPACK_IMPORTED_MODULE_3__.RilevazioniNuovaComponent, /*RilevazioniDialogComponent, RilevazioniModificaComponent, RilevazioniGestioneComponent, Step1ParametriComponent, Step2FlussoLavoroComponent, Step3GestioneRicorsiComponent, Step4RilevazioneComponent, DialogNoteComponent, ConfirmSaveComponent, DialogErroreComponent,*/ _stepper_dialog_modifica_stepper_dialog_modifica_component__WEBPACK_IMPORTED_MODULE_4__.StepperDialogModificaComponent, _stepper_dialog_creazione_aspetto_stepper_dialog_creazione_aspetto_component__WEBPACK_IMPORTED_MODULE_5__.StepperDialogCreazioneAspettoComponent, _pagina_risolvi_aspetto_pagina_risolvi_aspetto_component__WEBPACK_IMPORTED_MODULE_6__.PaginaRisolviAspettoComponent, _modale_testi_aspetti_modale_testi_aspetti_component__WEBPACK_IMPORTED_MODULE_7__.ModaleTestiAspettiComponent, _modal_risolvi_modal_risolvi_component__WEBPACK_IMPORTED_MODULE_8__.ModalRisolviComponent, _gestione_segnalazione_gerarchico_gestione_segnalazione_gerarchico_component__WEBPACK_IMPORTED_MODULE_9__.GestioneSegnalazioneGerarchicoComponent, _modal_modifica_segnalazione_modal_modifica_segnalazione_component__WEBPACK_IMPORTED_MODULE_10__.ModalModificaSegnalazioneComponent, _modal_risolvi_contenzioso_modal_risolvi_contenzioso_component__WEBPACK_IMPORTED_MODULE_11__.ModalRisolviContenziosoComponent, _modal_dettagli_gestione_modal_dettagli_gestione_component__WEBPACK_IMPORTED_MODULE_12__.ModalDettagliGestioneComponent, _modal_dettagli_gestione_contenziosi_modal_dettalgi_gestione_contenziosi_component__WEBPACK_IMPORTED_MODULE_13__.ModalDettalgiGestioneContenziosiComponent, _approvazione_approvazioni_approvazioni_component__WEBPACK_IMPORTED_MODULE_14__.ApprovazioniComponent, _gestione_file_gestione_file_component__WEBPACK_IMPORTED_MODULE_15__.GestioneFileComponent, _modal_dettagli_segnalazione_modal_dettagli_segnalazione_component__WEBPACK_IMPORTED_MODULE_16__.ModalDettagliSegnalazioneComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _rilevazioni_routing_module__WEBPACK_IMPORTED_MODULE_1__.RilevazioniRoutingModule,
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__.DragDropModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInputModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__.MatDialogModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_25__.MatDatepickerModule] }); })();


/***/ }),

/***/ 50056:
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/stepper-dialog-creazione-aspetto/stepper-dialog-creazione-aspetto.component.ts ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperDialogCreazioneAspettoComponent": () => (/* binding */ StepperDialogCreazioneAspettoComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/prodotti.service */ 7844);
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/routes/popup-errore-inserimento/popup-errore-inserimento.component */ 29570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);











class StepperDialogCreazioneAspettoComponent {
    constructor(dialog, stepperService, prodottiSrv) {
        this.dialog = dialog;
        this.stepperService = stepperService;
        this.prodottiSrv = prodottiSrv;
        this.nomeNuovoAspetto = "";
        this.aspettiDaValutare = [];
    }
    ngOnInit() {
        this.loadAspettiDaValutare();
    }
    loadAspettiDaValutare() {
        this.prodottiSrv.getAspettiEDescrizioni(this.stepperService.inserimentoTipoSegnalazione$.value).subscribe(data => {
            data.forEach(item => {
                this.aspettiDaValutare.push({
                    nomeAspetto: item.nome,
                    idAspetto: item.id,
                    descrizioneAspetto: item.descrizione,
                });
            });
        });
    }
    confirmDialogStepperNuovoAspetto() {
        // verifico se il testo inserito dall'utente contiene SOLO spazi bianchi
        const esito = this.stepperService.checkStringOnlySpaces(this.nomeNuovoAspetto.trim());
        if (esito == true) {
            this.openErrorDialog("Inserire un nome aspetto valido per proseguire.");
            return;
        }
        // verifico che il testo inserito dall'utente non sia il nome 'altro'
        if (this.nomeNuovoAspetto.trim().toLowerCase() == "altro") {
            this.openErrorDialog("Nome aspetto non valido.");
            return;
        }
        for (let i = 0; i < this.aspettiDaValutare.length; i++) {
            if (this.nomeNuovoAspetto.trim().toLowerCase() == this.aspettiDaValutare[i].nomeAspetto.toLowerCase()) {
                this.openErrorDialog("Esiste già un aspetto standard con il nome inserito.");
                return;
            }
        }
        if (esito == false) {
            this.stepperService.nuovoAspetto$.next(this.nomeNuovoAspetto.trim());
            this.dialog.closeAll();
        }
    }
    closeDialogStepperNuovoAspetto() {
        // if (confirm('Le modifiche effettuate non saranno salvate. Chiudere?')) {
        this.stepperService.nuovoAspetto$.next("");
        this.dialog.closeAll();
        // return true;
        // }
        // else return false;
    }
    openErrorDialog(message) {
        this.dialog.open(app_routes_popup_errore_inserimento_popup_errore_inserimento_component__WEBPACK_IMPORTED_MODULE_2__.PopupErroreInserimentoComponent, {
            data: { message: message },
        });
    }
}
StepperDialogCreazioneAspettoComponent.ɵfac = function StepperDialogCreazioneAspettoComponent_Factory(t) { return new (t || StepperDialogCreazioneAspettoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_1__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_0__.ProdottiService)); };
StepperDialogCreazioneAspettoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: StepperDialogCreazioneAspettoComponent, selectors: [["app-stepper-dialog-creazione-aspetto"]], decls: 12, vars: 2, consts: [[1, "title"], [1, "container-data"], [1, "child-data"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "container-buttons"], [1, "child-buttons", "child-buttons-chiudi", 3, "click"], [1, "child-buttons", "child-buttons-conferma", 3, "disabled", "click"]], template: function StepperDialogCreazioneAspettoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Inserisci nuova problematica");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Aspetti da valutare");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function StepperDialogCreazioneAspettoComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nomeNuovoAspetto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 4)(8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StepperDialogCreazioneAspettoComponent_Template_button_click_8_listener() { return ctx.closeDialogStepperNuovoAspetto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StepperDialogCreazioneAspettoComponent_Template_button_click_10_listener() { return ctx.confirmDialogStepperNuovoAspetto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Conferma");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.nomeNuovoAspetto);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.nomeNuovoAspetto == "");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel], styles: [".child-buttons[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBwZXItZGlhbG9nLWNyZWF6aW9uZS1hc3BldHRvLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxvcmdhbml6emF6aW9uZVxccmlsZXZhemlvbmlcXHN0ZXBwZXItZGlhbG9nLWNyZWF6aW9uZS1hc3BldHRvXFxzdGVwcGVyLWRpYWxvZy1jcmVhemlvbmUtYXNwZXR0by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUlFLGlCQUFBO0FDSEY7O0FEVUE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1BGIiwiZmlsZSI6InN0ZXBwZXItZGlhbG9nLWNyZWF6aW9uZS1hc3BldHRvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jaGlsZC1idXR0b25zIHtcclxuICAvLyB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAvLyBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIC8vIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDogMTVweDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLmNoaWxkLWJ1dHRvbnMge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 15722:
/*!****************************************************************************************************************!*\
  !*** ./src/app/routes/organizzazione/rilevazioni/stepper-dialog-modifica/stepper-dialog-modifica.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepperDialogModificaComponent": () => (/* binding */ StepperDialogModificaComponent)
/* harmony export */ });
/* harmony import */ var _shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/stepper.service */ 52127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);









function StepperDialogModificaComponent_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StepperDialogModificaComponent_mat_form_field_7_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.descrizione = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.titolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r0.aspettoDaModificare == null ? null : ctx_r0.aspettoDaModificare.descrizioneCriticita);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.descrizione);
} }
function StepperDialogModificaComponent_mat_form_field_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Criticita");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r1.aspettoDaModificare == null ? null : ctx_r1.aspettoDaModificare.descrizioneCriticita);
} }
function StepperDialogModificaComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 2)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "textarea", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function StepperDialogModificaComponent_mat_form_field_9_Template_textarea_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.descrizione = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.titolo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx_r2.aspettoDaModificare == null ? null : ctx_r2.aspettoDaModificare.descrizioneSuggerimento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r2.descrizione);
} }
function StepperDialogModificaComponent_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperDialogModificaComponent_button_13_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.confirmDialogStepperModifica(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.descrizione == "");
} }
function StepperDialogModificaComponent_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperDialogModificaComponent_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.confirmDialogStepperModifica(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class StepperDialogModificaComponent {
    constructor(stepperService, dialog) {
        var _a, _b;
        this.stepperService = stepperService;
        this.dialog = dialog;
        this.titolo = "";
        this.titolo = stepperService.getTitolo();
        this.aspettoDaModificare = stepperService.getAspetto();
        switch (this.titolo) {
            case 'Criticita': {
                this.descrizione = (_a = this.aspettoDaModificare) === null || _a === void 0 ? void 0 : _a.descrizioneCriticita;
                break;
            }
            case 'Suggerimento': {
                this.descrizione = (_b = this.aspettoDaModificare) === null || _b === void 0 ? void 0 : _b.descrizioneSuggerimento;
                break;
            }
        }
    }
    confirmDialogStepperModifica() {
        // verifico se il testo inserito dall'utente contiene solo spazi bianchi
        const esito = this.stepperService.checkStringOnlySpaces(this.descrizione.trim());
        switch (this.titolo) {
            case 'Criticita': {
                if (esito == false) {
                    this.aspettoDaModificare.descrizioneCriticita = this.descrizione.trim();
                }
                else if (esito == true) {
                    alert('Inserire una descrizione valida per proseguire.');
                }
                break;
            }
            case 'Suggerimento': {
                this.aspettoDaModificare.descrizioneSuggerimento = this.descrizione.trim();
                break;
            }
        }
        this.stepperService.datiAspetto$.next(this.aspettoDaModificare);
        this.dialog.closeAll();
    }
    closeDialogStepperModifica() {
        // if (confirm('Le modifiche effettuate non saranno salvate. Chiudere?')) {
        this.dialog.closeAll();
        // return true;
        // }
        // else return false;
    }
}
StepperDialogModificaComponent.ɵfac = function StepperDialogModificaComponent_Factory(t) { return new (t || StepperDialogModificaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_stepper_service__WEBPACK_IMPORTED_MODULE_0__.StepperService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
StepperDialogModificaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: StepperDialogModificaComponent, selectors: [["app-stepper-dialog-modifica"]], decls: 15, vars: 8, consts: [[1, "title"], [1, "container-data"], [1, "child-data"], ["matInput", "", "formControlName", "nomeAspetto", 3, "value", "disabled"], ["class", "child-data", 4, "ngIf"], [1, "container-buttons"], [1, "child-buttons", "child-buttons-chiudi", 3, "click"], ["class", "child-buttons child-buttons-conferma", 3, "disabled", "click", 4, "ngIf"], ["class", "child-buttons child-buttons-conferma", 3, "click", 4, "ngIf"], ["matInput", "", "maxlength", "65535", "type", "text", "rows", "7", "required", "", 3, "ngModel", "value", "ngModelChange"], ["disabled", "", "matInput", "", "maxlength", "65535", "type", "text", "rows", "7", "required", "", 3, "value"], ["matInput", "", "maxlength", "65535", "type", "text", "rows", "7", 3, "value", "ngModel", "ngModelChange"], [1, "child-buttons", "child-buttons-conferma", 3, "disabled", "click"], [1, "child-buttons", "child-buttons-conferma", 3, "click"]], template: function StepperDialogModificaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "mat-form-field", 2)(4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Aspetti da valutare");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, StepperDialogModificaComponent_mat_form_field_7_Template, 4, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, StepperDialogModificaComponent_mat_form_field_8_Template, 4, 1, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, StepperDialogModificaComponent_mat_form_field_9_Template, 4, 3, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5)(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StepperDialogModificaComponent_Template_button_click_11_listener() { return ctx.closeDialogStepperModifica(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Chiudi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, StepperDialogModificaComponent_button_13_Template, 2, 1, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, StepperDialogModificaComponent_button_14_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.titolo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.aspettoDaModificare == null ? null : ctx.aspettoDaModificare.nomeAspetto);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titolo == "Criticita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titolo == "Suggerimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titolo == "Suggerimento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titolo == "Criticita");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titolo == "Suggerimento");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel], styles: [".title[_ngcontent-%COMP%] {\n  color: black;\n  font-size: larger;\n  font-weight: bold;\n  margin-top: 25px;\n  margin-bottom: 10px;\n  text-align: center;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXBwZXItZGlhbG9nLW1vZGlmaWNhLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxvcmdhbml6emF6aW9uZVxccmlsZXZhemlvbmlcXHN0ZXBwZXItZGlhbG9nLW1vZGlmaWNhXFxzdGVwcGVyLWRpYWxvZy1tb2RpZmljYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3RlcHBlci1kaWFsb2ctbW9kaWZpY2EuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgcmVzaXplOiBub25lO1xyXG59IiwiLnRpdGxlIHtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICByZXNpemU6IG5vbmU7XG59Il19 */"] });


/***/ }),

/***/ 82930:
/*!***********************************************!*\
  !*** ./src/app/shared/models/attore.model.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Attore": () => (/* binding */ Attore)
/* harmony export */ });
class Attore {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ }),

/***/ 36470:
/*!**************************************************************!*\
  !*** ./src/app/shared/models/procedura-riferimento.model.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProceduraRiferimento": () => (/* binding */ ProceduraRiferimento)
/* harmony export */ });
class ProceduraRiferimento {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ }),

/***/ 10590:
/*!****************************************************!*\
  !*** ./src/app/shared/models/rilevazione.model.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rilevazione": () => (/* binding */ Rilevazione)
/* harmony export */ });
/* harmony import */ var _attore_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attore.model */ 82930);
/* harmony import */ var _procedura_riferimento_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procedura-riferimento.model */ 36470);
/* harmony import */ var _prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prodotti-tipologie-lavoratori.model */ 65908);
/* harmony import */ var _tipologia_ricorso_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tipologia-ricorso.model */ 25491);
/* harmony import */ var _stato_salvataggio_rilevazione_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stato-salvataggio-rilevazione.model */ 22293);





class Rilevazione {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.confermata = false;
        this.prodottoTipologiaLavoratore = new _prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_2__.ProdottiTipologieLavoratori();
        this.attore = new _attore_model__WEBPACK_IMPORTED_MODULE_0__.Attore();
        this.tipologiaRicorso = new _tipologia_ricorso_model__WEBPACK_IMPORTED_MODULE_3__.TipologiaRicorso();
        this.proceduraRiferimento = new _procedura_riferimento_model__WEBPACK_IMPORTED_MODULE_1__.ProceduraRiferimento();
        this.matricolaIns = '';
        this.scadenza = new Date();
        //this.matricolaIncarico = '';
        this.sede = '';
        this.statoSalvataggioRilevazione = new _stato_salvataggio_rilevazione_model__WEBPACK_IMPORTED_MODULE_4__.StatoSalvataggioRilevazione();
        this.ruoloIns = '';
    }
}


/***/ }),

/***/ 22293:
/*!**********************************************************************!*\
  !*** ./src/app/shared/models/stato-salvataggio-rilevazione.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatoSalvataggioRilevazione": () => (/* binding */ StatoSalvataggioRilevazione)
/* harmony export */ });
class StatoSalvataggioRilevazione {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.stato = '';
    }
}


/***/ }),

/***/ 25491:
/*!**********************************************************!*\
  !*** ./src/app/shared/models/tipologia-ricorso.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipologiaRicorso": () => (/* binding */ TipologiaRicorso)
/* harmony export */ });
class TipologiaRicorso {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ })

}]);
//# sourceMappingURL=src_app_routes_organizzazione_rilevazioni_rilevazioni_module_ts.js.map