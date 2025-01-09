"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["src_app_routes_modellazione_modellazione_module_ts"],{

/***/ 58439:
/*!**********************************************************************************************!*\
  !*** ./src/app/routes/modellazione/modellazione-aggiorna/modellazione-aggiorna.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModellazioneAggiornaComponent": () => (/* binding */ ModellazioneAggiornaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/areeservice.service */ 25821);
/* harmony import */ var _shared_services_sottoaree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/sottoaree.service */ 33492);
/* harmony import */ var _shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/services/prodotti.service */ 7844);
/* harmony import */ var _shared_services_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/services/tipologie-lavoratori.service */ 88980);
/* harmony import */ var _shared_services_prodotti_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/prodotti-tipologie-lavoratori.service */ 95883);
/* harmony import */ var _shared_models_area_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/models/area.model */ 17903);
/* harmony import */ var _shared_models_sottoarea_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/models/sottoarea.model */ 64842);
/* harmony import */ var _shared_models_prodotto_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/models/prodotto.model */ 45282);
/* harmony import */ var _shared_models_tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/models/tipologia-lavoratore.model */ 31591);
/* harmony import */ var _shared_models_prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/models/prodotti-tipologie-lavoratori.model */ 65908);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _shared_models_settore_materia_model__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/models/settore-materia.model */ 34898);
/* harmony import */ var _shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/services/settore-materia.service */ 10828);
/* harmony import */ var _shared_models_areeprodotti__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @shared/models/areeprodotti */ 40744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ 40089);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);






































function ModellazioneAggiornaComponent_div_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listSett_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", listSett_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](listSett_r8.nome);
} }
function ModellazioneAggiornaComponent_div_1_mat_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r3.form1.get("inputArea")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/50 ");
} }
function ModellazioneAggiornaComponent_div_1_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Il nome dell'Area/Prodotto non pu\u00F2 superare 50 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ModellazioneAggiornaComponent_div_1_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r5.errorMessage);
} }
function ModellazioneAggiornaComponent_div_1_br_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "br");
} }
function ModellazioneAggiornaComponent_div_1_span_34_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Eliminare definitivamente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_1_span_34_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r9.elimina(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_1_span_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r11.clickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r7.deleteButton ? "opacity-100" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r7.form1.valid || ctx_r7.areaCancellabile);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r7.form1.valid || ctx_r7.areaCancellabile);
} }
function ModellazioneAggiornaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Aggiorna Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ModellazioneAggiornaComponent_div_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r12.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ModellazioneAggiornaComponent_div_1_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Nome Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("focus", function ModellazioneAggiornaComponent_div_1_Template_input_focus_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r14.isInputAreaFocused = true; })("blur", function ModellazioneAggiornaComponent_div_1_Template_input_blur_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r15.isInputAreaFocused = false; })("paste", function ModellazioneAggiornaComponent_div_1_Template_input_paste_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r16.onPaste($event, 50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ModellazioneAggiornaComponent_div_1_mat_hint_16_Template, 2, 1, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ModellazioneAggiornaComponent_div_1_mat_error_17_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ModellazioneAggiornaComponent_div_1_mat_error_19_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, ModellazioneAggiornaComponent_div_1_br_20_Template, 1, 0, "br", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-dialog-actions", 10)(22, "button", 11)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](25, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_1_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r17.buttonClicked = "modifica"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](30, "div", 13)(31, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_1_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r13); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r18.clickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](32, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](34, ModellazioneAggiornaComponent_div_1_span_34_Template, 7, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.form1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.listaSettori);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.isInputAreaFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.form1.get("inputArea")) == null ? null : tmp_3_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r0.form1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matTooltipDisabled", ctx_r0.form1.valid && !ctx_r0.areaCancellabile);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r0.form1.valid || ctx_r0.areaCancellabile);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r0.deleteButton);
} }
function ModellazioneAggiornaComponent_div_2_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-hint", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r19.form5.get("inputSettore")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/50 ");
} }
function ModellazioneAggiornaComponent_div_2_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Il nome del Settore/Materia non pu\u00F2 superare 50 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function ModellazioneAggiornaComponent_div_2_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r21.errorMessage);
} }
function ModellazioneAggiornaComponent_div_2_span_27_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Eliminare definitivamente?");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_2_span_27_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r23.elimina(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "si");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_2_span_27_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r24); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r25.clickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "no");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngClass", ctx_r22.deleteButton ? "opacity-100" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r22.form5.valid || !ctx_r22.settoreCancellabile.esitoRimuovi);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r22.form5.valid || !ctx_r22.settoreCancellabile.esitoRimuovi);
} }
function ModellazioneAggiornaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](4, "Aggiorna Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ModellazioneAggiornaComponent_div_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r26.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Nome Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("focus", function ModellazioneAggiornaComponent_div_2_Template_input_focus_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r28.isInputSettoreFocused = true; })("blur", function ModellazioneAggiornaComponent_div_2_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r29.isInputSettoreFocused = false; })("paste", function ModellazioneAggiornaComponent_div_2_Template_input_paste_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r30.onPaste($event, 50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ModellazioneAggiornaComponent_div_2_mat_hint_10_Template, 2, 1, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ModellazioneAggiornaComponent_div_2_mat_error_11_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, ModellazioneAggiornaComponent_div_2_mat_error_12_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-dialog-actions", 10)(15, "button", 11)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](18, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_2_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r31.buttonClicked = "modifica"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](22, "Modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](23, "div", 22)(24, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModellazioneAggiornaComponent_div_2_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r27); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](); return ctx_r32.clickDelete(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](26, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](27, ModellazioneAggiornaComponent_div_2_span_27_Template, 7, 3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r1.form5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.isInputSettoreFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r1.form5.get("inputSettore")) == null ? null : tmp_2_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r1.form5.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matTooltipDisabled", ctx_r1.form5.valid && ctx_r1.settoreCancellabile.esitoRimuovi);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("disabled", !ctx_r1.form5.valid || !ctx_r1.settoreCancellabile.esitoRimuovi);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r1.deleteButton);
} }
class ModellazioneAggiornaComponent {
    constructor(formBuilder, areaSrv, sottoAreaSrv, prodottoSrv, tipLavSrv, prodottoTipLavSrv, settoreMtr, settoreSrv, router, dialogRef, dialog, snackBar, data) {
        this.formBuilder = formBuilder;
        this.areaSrv = areaSrv;
        this.sottoAreaSrv = sottoAreaSrv;
        this.prodottoSrv = prodottoSrv;
        this.tipLavSrv = tipLavSrv;
        this.prodottoTipLavSrv = prodottoTipLavSrv;
        this.settoreMtr = settoreMtr;
        this.settoreSrv = settoreSrv;
        this.router = router;
        this.dialogRef = dialogRef;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.data = data;
        this.isInputAreaFocused = false;
        this.isInputSettoreFocused = false;
        this.formAttivo = 0;
        this.area = new _shared_models_area_model__WEBPACK_IMPORTED_MODULE_5__.Area();
        this.areeProdotti = new _shared_models_areeprodotti__WEBPACK_IMPORTED_MODULE_12__.AreeProdotti();
        this.sottoarea = new _shared_models_sottoarea_model__WEBPACK_IMPORTED_MODULE_6__.Sottoarea();
        this.prodotto = new _shared_models_prodotto_model__WEBPACK_IMPORTED_MODULE_7__.Prodotto();
        this.tipologiaLavoratore = new _shared_models_tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_8__.TipologiaLavoratore();
        this.settore = new _shared_models_settore_materia_model__WEBPACK_IMPORTED_MODULE_10__.Settore();
        this.buttonClicked = '';
        this.areaCancellabile = false;
        this.sottoareaCancellabile = false;
        this.prodottoCancellabile = false;
        this.tipLavCancellabile = false;
        this.settoreCancellabile = { esitoRimuovi: false, messaggio: '' }; // Definizione di settoreCancellabile
        this.deleteButton = false;
        this.tipLavModificate = false;
        this.listaSettori = [];
        // listaAree: Area[] =[];
        this.listaTipLav = [];
        this.tipLavSelected = [];
        this.idSelezionati = [];
        this.prodottoTipLav = new _shared_models_prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_9__.ProdottiTipologieLavoratori();
        this.errorMessage = null;
        this.form1 = this.formBuilder.group({
            inputArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(50)]],
            selectSettoreMateria: ['']
        });
        this.form2 = this.formBuilder.group({
            inputArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            inputSottoarea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
        });
        this.form3 = this.formBuilder.group({
            inputArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            inputSottoarea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            inputProdotto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required],
            tiplav: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
        });
        this.form4 = this.formBuilder.group({
            inputTipologiaLavoratore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required]
        });
        this.form5 = this.formBuilder.group({
            inputSettore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.Validators.maxLength(50)]]
        });
    }
    ngOnInit() {
        this.formAttivo = this.data.formAttivo;
        if (this.formAttivo === 0) {
            this.newCaricaAreeProdotto(this.data.id);
            // this.popolaAree();
        }
        else if (this.formAttivo === 1) {
            this.caricaSottoarea(this.data.id);
        }
        else if (this.formAttivo === 2) {
            this.caricaProdotto(this.data.id);
        }
        else if (this.formAttivo === 3) {
            this.caricaTipologiaLavoratore(this.data.id);
        }
        else if (this.formAttivo === 4) {
            this.caricaSettore(this.data.id);
            this.popolaSettori();
        }
    }
    onPaste(event, maxLength) {
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData('text');
        const inputElement = event.target;
        const currentText = inputElement.value;
        const selectionStart = inputElement.selectionStart || 0;
        const selectionEnd = inputElement.selectionEnd || 0;
        const newText = currentText.slice(0, selectionStart) +
            pastedText +
            currentText.slice(selectionEnd);
        if (newText.length > maxLength) {
            event.preventDefault();
            this.snackBar.open(`Non puoi inserire più di ${maxLength} caratteri`, 'Chiudi', { duration: 3000 });
        }
    }
    /*   caricaArea(id: number){
        forkJoin(
          [this.areaSrv.getArea(id), this.areaSrv.verificaArea(id)]
        ).subscribe (
          data => {
            this.area = data[0];
            this.form1.controls.inputArea.setValue(this.area.nome);
            this.areaCancellabile = data[1];
          });
      } */
    newCaricaAreeProdotto(id) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.areaSrv.newGetAreaProdotto(id), this.settoreMtr.getAllSettoriMaterie(), this.areaSrv.newVerificaAreaProdotto(id)]).subscribe(data => {
            this.areeProdotti = data[0];
            this.listaSettori = data[1];
            this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
            this.form1.controls.inputArea.setValue(this.areeProdotti.nome);
            this.form1.controls.selectSettoreMateria.setValue(this.areeProdotti.idSettore);
            this.areaCancellabile = data[2].esitoRimuovi;
        }, //);
        //);
        error => {
            this.errorMessage = 'Error fetching data';
            // console.error('Error fetching data:', error);
        });
    }
    caricaSottoarea(id) {
        /* forkJoin(
          [this.sottoAreaSrv.getSottoArea(id), this.sottoAreaSrv.verificaSottoArea(id)]
        ).subscribe (
          data => {
            this.sottoarea = data[0];
            this.form2.controls.inputArea.setValue(this.sottoarea.area.nome);
            this.form2.controls.inputSottoarea.setValue(this.sottoarea.nome);
            this.sottoareaCancellabile = data[1];
          }); */
    }
    popolaSettori() {
        this.settoreMtr.getAllSettoriMaterie().subscribe({
            next: (data) => {
                this.listaSettori = data;
            },
            error: (error) => {
                this.errorMessage = 'Error fetching sectors';
            }
        });
    }
    // popolaAree(){
    //   this.areaSrv.getAllAreaProdotto().subscribe({
    //     next : (data =>{
    //       this.listaAree = data;
    //     })
    //   });
    // }
    caricaProdotto(id) {
        /* forkJoin(
           [this.prodottoSrv.getProdotto(id),
            this.prodottoSrv.verificaProdotto(id),
            this.tipLavSrv.getTipologieLavoratoriAll(),
            this.prodottoTipLavSrv.getTipologieLavoratori(id)]
        ).subscribe (
          data => {
            this.prodotto = data[0];
            this.form3.controls.inputArea.setValue(this.prodotto.sottoarea.area.nome);
            this.form3.controls.inputSottoarea.setValue(this.prodotto.sottoarea.nome);
            this.form3.controls.inputProdotto.setValue(this.prodotto.nome);
            this.prodottoCancellabile = data[1];
            this.listaTipLav = data[2];
            //console.log('tip lav all ', this.listaTipLav);
            this.tipLavSelected = data[3];
            //console.log('dopo lettura tipologie selezionate');
            this.tipLavSelected.forEach(el => {this.idSelezionati.push(el.tipologiaLavoratore.id)});
            //console.log('tip lav selected ', this.idSelezionati);
            this.form3.controls.tiplav.setValue(this.idSelezionati);
          }); */
    }
    caricaTipologiaLavoratore(id) {
        /* forkJoin(
          [this.tipLavSrv.getTipologiaLavoratore(id),
          this.tipLavSrv.verificaTipologiaLavoratore(id)]
        ).subscribe (
          data => {
            this.tipologiaLavoratore = data[0];
            this.form4.controls.inputTipologiaLavoratore.setValue(this.tipologiaLavoratore.nome);
            this.tipLavCancellabile = data[1];
            console.log('tip lav cancellabile ', this.tipLavCancellabile, id)
          }); */
    }
    caricaSettore(id) {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_15__.forkJoin)([this.settoreSrv.getSettoriMaterieById(id), this.settoreSrv.verificaRimuoviSettoreMateria(id)]).subscribe(data => {
            this.settore = data[0]; // Imposta il valore di settoreCancellabile
            this.form5.controls.inputSettore.setValue(this.settore.nome);
            this.settoreCancellabile = data[1];
        });
    }
    salvaArea() {
        this.area.nome = this.form1.value.inputArea.replace(/\s+/g, ' ').trim();
        /* this.areaSrv.aggiornaArea(this.area).subscribe(
                      data => {
                                  console.log(data);
                                  this.dialogRef.close();
                              }); */
    }
    newAggiornaArea() {
        this.areeProdotti.nome = this.form1.value.inputArea.replace(/\s+/g, ' ').trim();
        this.areeProdotti.idSettore = this.form1.value.selectSettoreMateria;
        this.areaSrv.newAggiornaAreeProdotto(this.areeProdotti).subscribe({
            next: () => {
                this.dialogRef.close(true); // Passa 'true' per indicare che l'aggiornamento è riuscito
            },
            error: (error) => {
                this.errorMessage = error.error.message;
            }
        });
    }
    salvaSottoArea() {
        this.sottoarea.nome = this.form2.value.inputSottoarea;
        /* this.sottoAreaSrv.aggiornaSottoArea(this.sottoarea).subscribe(
                      data => {
                                  console.log(data);
                                  this.dialogRef.close();
                              }); */
    }
    salvaProdotto() {
        this.prodotto.nome = this.form3.value.inputProdotto;
        /* this.prodottoSrv.aggiornaProdotto(this.prodotto).subscribe(
              data => {
                          console.log(data);
                          let i: number;
                          console.log('tip lav selezionati ', this.idSelezionati);
                          //se una tipologia lavoratore selezionata sul form non è presente tra quelle associate
                          //al prodotto viene inserita sul db
                          for (i=0; i<this.idSelezionati.length; i++)
                          {
                            const presente = this.tipLavSelected.some(x => x.tipologiaLavoratore.id == this.idSelezionati[i]);
                            if (!presente){
                              this.prodottoTipLav = new ProdottiTipologieLavoratori();
                              this.prodottoTipLav.prodotto.id = this.prodotto.id;
                              this.prodottoTipLav.tipologiaLavoratore.id = this.idSelezionati[i];
                              console.log('this.prodottoTipLav ', this.prodottoTipLav);
                              /* this.prodottoTipLavSrv.inserisciProdottoTipologiaLavoratore(this.prodottoTipLav).
                                  subscribe(
                                    data => {
                                      console.log('tip lav inserita ', data);
                                    }
                                  );
                              }
                          }
                          //se una tipologia lavoratore tra quelle associate al prodotto non è selezionata
                          //sul form viene cancellata dal db
                          // console.log('tipologie selezionate form',this.idSelezionati);
                          // console.log('tipologie selezionate DB', this.tipLavSelected);
                          for (i=0; i<this.tipLavSelected.length; i++)
                          {
                            const presente = this.idSelezionati.some(x => x == this.tipLavSelected[i].tipologiaLavoratore.id);
                            if (!presente){
                              console.log('id da cancellare ', this.tipLavSelected[i].id)
                              /* this.prodottoTipLavSrv.rimuoviProdottoTipologiaLavoratore(this.tipLavSelected[i].id).
                                  subscribe(
                                    data => {
                                      console.log('tip lav rimossa', data);
                                    }
                                  );
                              }
                            }
    
                                  this.dialogRef.close();
                              }) */
    }
    salvaTipologiaLavoratore() {
        this.tipologiaLavoratore.nome = this.form4.value.inputTipologiaLavoratore;
        /* this.tipLavSrv.aggiornaTipologiaLavoratore(this.tipologiaLavoratore).subscribe(
                      data => {
                                  console.log(data);
                                  this.dialogRef.close();
                              }); */
    }
    salvaSettore() {
        this.settore.nome = this.form5.value.inputSettore.replace(/\s+/g, ' ').trim();
        this.settoreSrv.inserisciSettore(this.settore).subscribe({
            next: () => {
                this.dialogRef.close(true); // Passa 'true' per indicare che l'aggiornamento è riuscito
            },
            error: (error) => {
                this.errorMessage = error.error.message;
            }
        });
    }
    onSubmit() {
        //console.log('evento: ', this.buttonClicked);
        if (this.buttonClicked === 'modifica') {
            //E' stato premuto il tasto Salva
            switch (this.formAttivo) {
                case 0: //Area
                    this.newAggiornaArea();
                    break;
                case 1: //SottoArea
                    this.salvaSottoArea();
                    break;
                case 2: //Prodotto
                    //console.log('aggiornamento prodotto: ', this.prodotto.id)
                    this.salvaProdotto();
                    break;
                case 3: //Tipologia Lavoratore
                    //console.log('aggiornamento prodotto: ', this.prodotto.id)
                    this.salvaTipologiaLavoratore();
                    break;
                case 4: //Settore/Materia
                    //console.log('aggiornamento prodotto: ', this.prodotto.id)
                    this.salvaSettore();
                    break;
            }
        }
    }
    clickDelete() {
        this.deleteButton = !this.deleteButton;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    elimina() {
        this.delay(1);
        switch (this.formAttivo) {
            case 0: //AreeProdotti
                this.areaSrv.newDeleteAreeProdotti(this.areeProdotti.id).subscribe(() => {
                    this.dialogRef.close();
                });
                break;
            case 1: //SottoArea
                /* this.sottoAreaSrv.deleteSottoArea(this.sottoarea.id).subscribe(
                  data => {
                    this.dialogRef.close();
                }); */
                break;
            case 2: //Prodotto
                /* this.prodottoTipLavSrv.rimuoviProdottoTipologieLavoratori(this.prodotto.id).subscribe(
                  data => {
                    console.log('cancellazione tip lav del prodotto');
                    this.prodottoSrv.deleteProdotto(this.prodotto.id).subscribe(
                      data => {
                        this.dialogRef.close();
                    });
                  }
                ) */
                break;
            case 3: //Tipologia Lavoratore
                /* this.tipLavSrv.deleteTipologiaLavoratore(this.tipologiaLavoratore.id).subscribe(
                  data => {
                    this.dialogRef.close();
                }); */
                break;
            case 4: //Settore/Materia
                this.settoreSrv.deleteSettoriMaterie(this.settore.id).subscribe(data => {
                    this.dialogRef.close();
                });
                break;
        }
    }
    onTipLavSelectionChanged(idSelected) {
        this.tipLavModificate = true;
        this.idSelezionati = idSelected;
        // this.tipLavSelected=tipLavSelected;
        // console.log(tipLavSelected);
    }
}
ModellazioneAggiornaComponent.ɵfac = function ModellazioneAggiornaComponent_Factory(t) { return new (t || ModellazioneAggiornaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_0__.Aree), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_sottoaree_service__WEBPACK_IMPORTED_MODULE_1__.SottoareeService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_2__.ProdottiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_3__.TipologieLavoratoriService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_prodotti_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_4__.ProdottiTipologieLavoratoriService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_11__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_11__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MAT_DIALOG_DATA)); };
ModellazioneAggiornaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: ModellazioneAggiornaComponent, selectors: [["app-modellazione-aggiorna"]], decls: 3, vars: 3, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "main-ico"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "full-width"], ["placeholder", "Settore/Materia", "name", "settoreMateria", "formControlName", "selectSettoreMateria"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Es. Area1", "formControlName", "inputArea", "maxlength", "50", 3, "focus", "blur", "paste"], ["align", "end", 4, "ngIf"], [4, "ngIf"], ["align", "center", 1, "btn-box"], ["mat-button", "", "mat-dialog-close", "", 1, "btn-back"], ["type", "submit", "mat-button", "", 1, "btn-mod", 3, "disabled", "click"], ["matTooltip", "L'Area/Prodotto selezionata ha delle Segnalazioni associate e non pu\u00F2 essere eliminata", 1, "btn-dlt-container", "tooltip", 3, "matTooltipDisabled"], ["mat-button", "", 1, "btn-dlt", 3, "disabled", "click"], ["class", "tooltiptext", 3, "ngClass", 4, "ngIf"], [3, "value"], ["align", "end"], [1, "tooltiptext", 3, "ngClass"], [1, "btn-def", "btn-def-yes", 3, "disabled", "click"], [1, "btn-def", "btn-def-no", 3, "disabled", "click"], ["matInput", "", "placeholder", "Es. Pensioni", "formControlName", "inputSettore", "maxlength", "50", 3, "focus", "blur", "paste"], ["matTooltip", "Il Settore/Materia selezionato ha delle Segnalazioni associate e non pu\u00F2 essere eliminato", 1, "btn-dlt-container", "tooltip", 3, "matTooltipDisabled"]], template: function ModellazioneAggiornaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "container-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ModellazioneAggiornaComponent_div_1_Template, 35, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ModellazioneAggiornaComponent_div_2_Template, 28, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitch", ctx.formAttivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgSwitchCase, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_22__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_23__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_24__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_25__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogClose, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_27__.DefaultClassDirective], styles: [".table[_ngcontent-%COMP%] {\n  min-width: 900px;\n}\n\n.mat-dialog-container[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\ntr[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.title[_ngcontent-%COMP%] {\n  position: relative;\n  top: -2px;\n  left: 0px;\n  font-size: 12px;\n  color: #656565;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n}\n\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  top: -20px;\n  left: 0px;\n  font-size: 22px;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background: #606470 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background-color: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%] {\n  background-color: #ff0000 !important;\n  color: white;\n}\n\n.btn-dlt[_ngcontent-%COMP%]:disabled {\n  background: #f6d9d9 !important;\n  color: white;\n}\n\n.btn-dlt-container[_ngcontent-%COMP%] {\n  margin-left: 9px;\n  text-decoration: none;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n\n.elem-ico[_ngcontent-%COMP%] {\n  zoom: 1;\n  position: relative;\n  top: 0px;\n  right: 0px;\n  color: #00000073 !important;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid silver;\n}\n\n.tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  transition: all 0.5s;\n}\n\n.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 288px;\n  padding: 12px;\n  background-color: rgba(65, 65, 65, 0.95);\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n  bottom: 126%;\n  left: -256%;\n  margin-left: -60px;\n  transition: opacity 0.5s;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n\n\n\n.opacity-100[_ngcontent-%COMP%] {\n  opacity: 100 !important;\n}\n\n.btn-def[_ngcontent-%COMP%] {\n  width: 30%;\n  margin: 2px;\n  padding: 2px;\n  cursor: pointer;\n  border: none;\n  border-radius: 2px;\n}\n\n.btn-def[_ngcontent-%COMP%]:disabled {\n  cursor: default;\n}\n\n.btn-def-yes[_ngcontent-%COMP%] {\n  background: #ff0000 !important;\n  color: white;\n}\n\n.btn-def-no[_ngcontent-%COMP%] {\n  background-color: #2f6dd5 !important;\n  color: white;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsbGF6aW9uZS1hZ2dpb3JuYS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxtb2RlbGxhemlvbmVcXG1vZGVsbGF6aW9uZS1hZ2dpb3JuYVxcbW9kZWxsYXppb25lLWFnZ2lvcm5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsZ0JBQUE7QUNYRjs7QURjQTtFQUNFLHFCQUFBO0FDWEY7O0FEY0E7RUFDRSxnQkFBQTtBQ1hGOztBRGNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsdURBQUE7QUNYRjs7QURjQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FDWEY7O0FEY0E7RUFDRSw4QkFBQTtFQUVBLFlBQUE7QUNaRjs7QURlQTtFQUNFLG9DQUFBO0VBRUEsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtBQ2JGOztBRGdCQTtFQUNFLDhCQUFBO0VBQ0EsWUFBQTtBQ2JGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ1pGOztBRGVBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQ1pGOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDWkY7O0FEZUE7RUFDRSxnQkFBQTtBQ1pGOztBRGVBO0VBQ0U7SUFDRSx5QkFBQTtFQ1pGO0VEY0E7SUFDRSxvQkFBQTtFQ1pGO0FBQ0Y7O0FEZUE7RUFDRSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUVBLDJCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsWUFBQTtFQUNBLDRCQUFBO0FDZEY7O0FEa0JBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDZkY7O0FEa0JBO0VBRUUsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSx3QkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxlQUFBO0VBRUEsY0FBQTtBQ2xCRjs7QUR1QkE7O0dBQUE7O0FBR0E7RUFDRSx1QkFBQTtBQ3BCRjs7QUR3QkE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDckJGOztBRHVCQTtFQUNFLGVBQUE7QUNwQkY7O0FEdUJBO0VBQ0UsOEJBQUE7RUFDQSxZQUFBO0FDcEJGOztBRHVCQTtFQUNFLG9DQUFBO0VBRUEsWUFBQTtBQ3JCRjs7QUR1QkE7RUFDRSxnQkFBQTtBQ3BCRiIsImZpbGUiOiJtb2RlbGxhemlvbmUtYWdnaW9ybmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuLy8gICBjb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbCB0ZXN0byBkZWwgY2FtcG8gKi9cclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDsgLyogQ2FtYmlhIGlsIGNvbG9yZSBkZWxsYSBsaW5lYSBvcml6em9udGFsZSAqL1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50OyAvKiBDYW1iaWEgaWwgY29sb3JlIGRlbGwnYW5pbWF6aW9uZSBkZWxsYSBsaW5lYSBvcml6em9udGFsZSAqL1xyXG4vLyB9XHJcblxyXG4udGFibGUge1xyXG4gIG1pbi13aWR0aDogOTAwcHg7XHJcbn1cclxuXHJcbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMnB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYigxMDEsIDEwMSwgMTAxKTtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTIwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuLmJ0bi1iYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjNjA2NDcwICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzVlNWU1ZSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1tb2Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcclxuICAvLyBiYWNrZ3JvdW5kOiAjNGM5OWZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRsdCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bi1kbHQ6ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmNmQ5ZDkgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1kbHQtY29udGFpbmVye1xyXG4gIG1hcmdpbi1sZWZ0OiA5cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG59XHJcblxyXG4udWx0LW1vZCB7XHJcbiAgY29sb3I6ICMwMDAwMDA3MztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4uZWxlbS1pY28ge1xyXG4gIHpvb206IDE7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwNzMgIWltcG9ydGFudDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDE5MiwgMTkyLCAxOTIpO1xyXG59XHJcblxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcblxyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDI4OHB4O1xyXG4gIHBhZGRpbmc6MTJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjUgNjUgNjUgLyA5NSUpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm90dG9tOiAxMjYlO1xyXG4gIGxlZnQ6IC0yNTYlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtNjBweDtcclxuXHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gY29sb3I6ICM0Yzk5ZmY7XHJcbn1cclxuXHJcblxyXG4vKiAudG9vbHRpcDphY3RpdmUgLnRvb2x0aXB0ZXh0IHtcclxuICBvcGFjaXR5OiAxMDA7XHJcbn0gKi9cclxuLm9wYWNpdHktMTAwe1xyXG4gIG9wYWNpdHk6IDEwMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJ0bi1kZWZ7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBtYXJnaW46IDJweDtcclxuICBwYWRkaW5nOjJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG4uYnRuLWRlZjpkaXNhYmxlZHtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbi5idG4tZGVmLXllc3tcclxuICBiYWNrZ3JvdW5kOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLWRlZi1ub3tcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOTlmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYnRuLWJveHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbiIsIi50YWJsZSB7XG4gIG1pbi13aWR0aDogOTAwcHg7XG59XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxudHIge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTJweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjU2NTY1O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMHB4O1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5idG4tYmFjayB7XG4gIGJhY2tncm91bmQ6ICM2MDY0NzAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNmNmQ5ZDkgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRsdC1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogOXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yb3RhdGlvbiB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGUtcy1sb2FkZXI7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgem9vbTogMS4yO1xufVxuXG4udWx0LW1vZCB7XG4gIGNvbG9yOiAjMDAwMDAwNzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsZWZ0OiAtMTBweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICBtaW4td2lkdGg6IDQwMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG4uZWxlbS1pY28ge1xuICB6b29tOiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMHB4O1xuICBjb2xvcjogIzAwMDAwMDczICFpbXBvcnRhbnQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgc2lsdmVyO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDI4OHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCA2NSwgNjUsIDAuOTUpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMjYlO1xuICBsZWZ0OiAtMjU2JTtcbiAgbWFyZ2luLWxlZnQ6IC02MHB4O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG59XG5cbnAge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMmY2ZGQ1O1xufVxuXG4vKiAudG9vbHRpcDphY3RpdmUgLnRvb2x0aXB0ZXh0IHtcbiAgb3BhY2l0eTogMTAwO1xufSAqL1xuLm9wYWNpdHktMTAwIHtcbiAgb3BhY2l0eTogMTAwICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tZGVmIHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luOiAycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1kZWY6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5idG4tZGVmLXllcyB7XG4gIGJhY2tncm91bmQ6ICNmZjAwMDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWRlZi1ubyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLWJveCB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59Il19 */"] });


/***/ }),

/***/ 28055:
/*!****************************************************************************************!*\
  !*** ./src/app/routes/modellazione/modellazione-nuova/modellazione-nuova.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModellazioneNuovaComponent": () => (/* binding */ ModellazioneNuovaComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_models_sottoarea_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/models/sottoarea.model */ 64842);
/* harmony import */ var _shared_models_prodotto_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/models/prodotto.model */ 45282);
/* harmony import */ var _shared_models_tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/models/tipologia-lavoratore.model */ 31591);
/* harmony import */ var _shared_models_prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/models/prodotti-tipologie-lavoratori.model */ 65908);
/* harmony import */ var _shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/services/areeservice.service */ 25821);
/* harmony import */ var _shared_services_sottoaree_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/services/sottoaree.service */ 33492);
/* harmony import */ var _shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/services/prodotti.service */ 7844);
/* harmony import */ var _shared_services_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/services/tipologie-lavoratori.service */ 88980);
/* harmony import */ var _shared_services_prodotti_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/services/prodotti-tipologie-lavoratori.service */ 95883);
/* harmony import */ var _shared_models_settore_materia_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/models/settore-materia.model */ 34898);
/* harmony import */ var _shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/services/settore-materia.service */ 10828);
/* harmony import */ var _shared_models_areeprodotti__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/models/areeprodotti */ 40744);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 32528);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 88133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 87317);


































function ModellazioneNuovaComponent_div_1_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listSett_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", listSett_r10.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", listSett_r10.nome, " ");
} }
function ModellazioneNuovaComponent_div_1_mat_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r6.form1.get("inputArea")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/50 ");
} }
function ModellazioneNuovaComponent_div_1_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Il nome dell'Area/Prodotto non pu\u00F2 superare 50 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ModellazioneNuovaComponent_div_1_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r8.errorMessage);
} }
function ModellazioneNuovaComponent_div_1_br_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "br");
} }
function ModellazioneNuovaComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Nuova Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ModellazioneNuovaComponent_div_1_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r11.newSalvaAreeProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ModellazioneNuovaComponent_div_1_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Nuova Area/Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function ModellazioneNuovaComponent_div_1_Template_input_focus_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r13.isInputAreaFocused = true; })("blur", function ModellazioneNuovaComponent_div_1_Template_input_blur_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r14.isInputAreaFocused = false; })("paste", function ModellazioneNuovaComponent_div_1_Template_input_paste_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r15.onPaste($event, 50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ModellazioneNuovaComponent_div_1_mat_hint_16_Template, 2, 1, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, ModellazioneNuovaComponent_div_1_mat_error_17_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, ModellazioneNuovaComponent_div_1_mat_error_19_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, ModellazioneNuovaComponent_div_1_br_20_Template, 1, 0, "br", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "mat-dialog-actions", 10)(22, "button", 11)(23, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Chiudi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "button", 12)(27, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Aggiungi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r0.form1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r0.listaSettori);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isInputAreaFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.form1.get("inputArea")) == null ? null : tmp_3_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r0.form1.valid);
} }
function ModellazioneNuovaComponent_div_2_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listaaree_elem_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", listaaree_elem_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](listaaree_elem_r17.nome);
} }
function ModellazioneNuovaComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Nuova Sottoarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ModellazioneNuovaComponent_div_2_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r18.salvaSottoArea(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ModellazioneNuovaComponent_div_2_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Nome Sottoarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-dialog-actions", 10)(17, "button", 11)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "button", 12)(22, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24, " Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r1.form2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r1.listaAree);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r1.form2.valid);
} }
function ModellazioneNuovaComponent_div_3_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listaaree_elem_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", listaaree_elem_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](listaaree_elem_r23.nome);
} }
function ModellazioneNuovaComponent_div_3_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const listasottoaree_elem_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", listasottoaree_elem_r24.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](listasottoaree_elem_r24.nome);
} }
function ModellazioneNuovaComponent_div_3_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tiplav_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("value", tiplav_r25.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](tiplav_r25.nome);
} }
function ModellazioneNuovaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Nuovo Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ModellazioneNuovaComponent_div_3_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r26.salvaProdotto(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Area");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function ModellazioneNuovaComponent_div_3_Template_mat_select_selectionChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r28.onAreaSelectionChanged($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ModellazioneNuovaComponent_div_3_mat_option_10_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Sottoarea");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, ModellazioneNuovaComponent_div_3_mat_option_16_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "mat-form-field", 4)(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "Nome Prodotto");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-form-field", 4)(24, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Tipologie Lavoratori");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectionChange", function ModellazioneNuovaComponent_div_3_Template_mat_select_selectionChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r29.onTipLavSelectionChanged($event.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, ModellazioneNuovaComponent_div_3_mat_option_27_Template, 2, 2, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "mat-dialog-actions", 10)(29, "button", 11)(30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](32, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "button", 12)(34, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, " Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r2.form3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.listaAree);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.sottoareeFiltered);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.listaTipLav);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r2.form3.valid);
} }
function ModellazioneNuovaComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Nuova Tipologia Lavoratore");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ModellazioneNuovaComponent_div_4_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r30.salvaTipologiaLavoratore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Nuova Tipologia Lavoratore");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-dialog-actions", 10)(11, "button", 11)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Chiudi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 12)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r3.form4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r3.form4.valid);
} }
function ModellazioneNuovaComponent_div_5_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-hint", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ((tmp_0_0 = ctx_r32.form5.get("inputSettore")) == null ? null : tmp_0_0.value == null ? null : tmp_0_0.value.length) || 0, "/50 ");
} }
function ModellazioneNuovaComponent_div_5_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Il nome del Settore/Materia non pu\u00F2 superare 50 caratteri. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function ModellazioneNuovaComponent_div_5_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r34.errorMessage);
} }
function ModellazioneNuovaComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "p")(2, "mat-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Nuovo Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngSubmit", function ModellazioneNuovaComponent_div_5_Template_form_ngSubmit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r35.salvaSettore(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-form-field", 4)(7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Nuovo Settore/Materia");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function ModellazioneNuovaComponent_div_5_Template_input_focus_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r37.isInputSettoreFocused = true; })("blur", function ModellazioneNuovaComponent_div_5_Template_input_blur_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r38.isInputSettoreFocused = false; })("paste", function ModellazioneNuovaComponent_div_5_Template_input_paste_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r36); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r39.onPaste($event, 50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, ModellazioneNuovaComponent_div_5_mat_hint_10_Template, 2, 1, "mat-hint", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, ModellazioneNuovaComponent_div_5_mat_error_11_Template, 2, 0, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, ModellazioneNuovaComponent_div_5_mat_error_12_Template, 2, 1, "mat-error", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "mat-dialog-actions", 10)(14, "button", 11)(15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Chiudi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "button", 12)(19, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Aggiungi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r4.form5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.isInputSettoreFocused);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.form5.get("inputSettore")) == null ? null : tmp_2_0.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.errorMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("disabled", !ctx_r4.form5.valid);
} }
class ModellazioneNuovaComponent {
    constructor(formBuilder, areaSrv, sottoAreaSrv, prodottoSrv, tipLavSrv, prodottoTipLavSrv, settoreSrv, settoreMtr, router, dialogRef, snackBar, id) {
        this.formBuilder = formBuilder;
        this.areaSrv = areaSrv;
        this.sottoAreaSrv = sottoAreaSrv;
        this.prodottoSrv = prodottoSrv;
        this.tipLavSrv = tipLavSrv;
        this.prodottoTipLavSrv = prodottoTipLavSrv;
        this.settoreSrv = settoreSrv;
        this.settoreMtr = settoreMtr;
        this.router = router;
        this.dialogRef = dialogRef;
        this.snackBar = snackBar;
        this.id = id;
        this.isInputAreaFocused = false;
        this.isInputSettoreFocused = false;
        this.formAttivo = 0;
        this.listaSettoriMaterie = [];
        this.listaAree = [];
        this.listaSottoAree = [];
        this.sottoareeFiltered = [];
        this.listaTipLav = [];
        this.tipLavSelected = [];
        this.listaSettori = [];
        this.idSelezionati = [];
        this.prodotto = new _shared_models_prodotto_model__WEBPACK_IMPORTED_MODULE_1__.Prodotto();
        this.prodottoTipLav = new _shared_models_prodotti_tipologie_lavoratori_model__WEBPACK_IMPORTED_MODULE_3__.ProdottiTipologieLavoratori();
        this.errorMessage = null;
        this.form1 = this.formBuilder.group({
            inputArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
            selectSettoreMateria: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
        });
        this.form2 = this.formBuilder.group({
            inputSottoarea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
        });
        this.form3 = this.formBuilder.group({
            inputProdotto: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            area: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            sottoarea: [{ value: "", disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
            tiplav: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
        });
        this.form4 = this.formBuilder.group({
            inputTipologiaLavoratore: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
        });
        this.form5 = this.formBuilder.group({
            inputSettore: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.maxLength(50)]],
        });
    }
    /* popolaSettori(){
      this.settoreMtr.getAllSettoriMaterie().subscribe({
        next : (data =>{
          this.listaSettori = data;
          this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
        })
      });
    } */
    popolaSettori() {
        this.settoreMtr.getAllSettoriMaterie().subscribe({
            next: (data) => {
                this.listaSettori = data;
                this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
            },
            error: (err) => {
                this.errorMessage = 'Error fetching data';
            }
        });
    }
    popolaAree(conSottoaree) {
        /* this.areaSrv.getAreeConSottoaree(conSottoaree).subscribe(data => {
          this.listaAree = data;
        }); */
    }
    popolaSottoAree() {
        /* this.sottoAreaSrv.getSottoAreeAll(false).subscribe(data => {
          this.listaSottoAree = data;
        }); */
    }
    popolaTipologieLavoratori() {
        /* this.tipLavSrv.getTipologieLavoratoriAll().subscribe(data => {
          this.listaTipLav = data;
        }); */
    }
    popolaSettore() {
        this.settoreSrv.getAllSettoriMaterie().subscribe(data => {
            this.listaSettori = data;
        });
    }
    ngOnInit() {
        this.formAttivo = this.id;
        if (this.formAttivo == 1)
            this.popolaAree(false);
        else if (this.formAttivo == 2)
            this.popolaAree(true);
        this.popolaSettori();
        if (this.formAttivo == 4)
            this.popolaSettore();
    }
    onPaste(event, maxLength) {
        const clipboardData = event.clipboardData || window.clipboardData;
        const pastedText = clipboardData.getData('text');
        const inputElement = event.target;
        const currentText = inputElement.value;
        const selectionStart = inputElement.selectionStart || 0;
        const selectionEnd = inputElement.selectionEnd || 0;
        const newText = currentText.slice(0, selectionStart) +
            pastedText +
            currentText.slice(selectionEnd);
        if (newText.length > maxLength) {
            event.preventDefault();
            this.snackBar.open(`Non puoi inserire più di ${maxLength} caratteri`, 'Chiudi', { duration: 3000 });
        }
    }
    onAreaSelectionChanged(value) {
        this.sottoareeFiltered = this.listaSottoAree.filter(s => s.area.id == value);
        //console.log('sottoaree filtrate: ', this.sottoareeFiltered );
        if (this.sottoareeFiltered.length > 0)
            this.form3.controls["sottoarea"].enable();
        else
            this.form3.controls["sottoarea"].disable();
        this.form3.patchValue({
            sottoarea: ""
        });
    }
    onTipLavSelectionChanged(idSelected) {
        this.idSelezionati = idSelected;
    }
    /*   salvaArea(){
        const area = new Area();
        area.nome = this.form1.value.inputArea;
        this.areaSrv.inserisciArea(area).subscribe(
                    data => {
                              this.dialogRef.close();
                            });
      } */
    newSalvaAreeProdotto() {
        const areaProdotto = new _shared_models_areeprodotti__WEBPACK_IMPORTED_MODULE_11__.AreeProdotti();
        areaProdotto.nome = this.form1.value.inputArea.replace(/\s+/g, ' ').trim();
        areaProdotto.idSettore = this.form1.value.selectSettoreMateria;
        this.areaSrv.newSalvaAreeProdotti(areaProdotto).subscribe({
            next: () => {
                this.dialogRef.close();
            },
            error: (error) => {
                this.errorMessage = error.error.message;
            }
        });
    }
    salvaSottoArea() {
        var _a;
        const sottoarea = new _shared_models_sottoarea_model__WEBPACK_IMPORTED_MODULE_0__.Sottoarea();
        sottoarea.nome = this.form2.value.inputSottoarea;
        sottoarea.area.id = +((_a = this.form2.get('area')) === null || _a === void 0 ? void 0 : _a.value);
        /* this.sottoAreaSrv.inserisciSottoArea(sottoarea).subscribe(
                    data => {
                              this.dialogRef.close();
                            }); */
    }
    salvaProdotto() {
        var _a;
        this.prodotto = new _shared_models_prodotto_model__WEBPACK_IMPORTED_MODULE_1__.Prodotto();
        this.prodotto.nome = this.form3.value.inputProdotto;
        this.prodotto.sottoarea.id = +((_a = this.form3.get('sottoarea')) === null || _a === void 0 ? void 0 : _a.value);
        /* this.prodottoSrv.inserisciProdotto(this.prodotto).subscribe(
                    data => {
                              this.prodotto = data;
                              let i: number;
                              for (i=0; i<this.idSelezionati.length; i++)
                              {
                                console.log('lav selected ', this.idSelezionati[i])
                                this.prodottoTipLav = new ProdottiTipologieLavoratori();
                                this.prodottoTipLav.prodotto.id = this.prodotto.id;
                                this.prodottoTipLav.tipologiaLavoratore.id = this.idSelezionati[i];
                                console.log('prodotto tip lav ', this.prodotto.id, this.idSelezionati[i])
                                this.prodottoTipLavSrv.inserisciProdottoTipologiaLavoratore(this.prodottoTipLav).subscribe(
                                  data => {}
                                );
                              }
                              this.dialogRef.close();
                            }); */
    }
    salvaTipologiaLavoratore() {
        const tipLav = new _shared_models_tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_2__.TipologiaLavoratore();
        tipLav.nome = this.form4.value.inputTipologiaLavoratore;
        /* this.tipLavSrv.inserisciTipologiaLavoratore(tipLav).subscribe(
                    data => {
                              this.dialogRef.close();
                            }); */
    }
    /*salvaSettore() {
      if (this.form5.invalid) {
        console.error('Form non valido');
        return;
      }
      const settore = new Settore();
      settore.nome = this.form5.value.inputSettore;
      this.settoreSrv.insertSettoreMateria(settore).subscribe(
        data => {
          this.dialogRef.close();
        },
        error => {
          console.error('Errore durante il salvataggio del settore: ', error);
        }
      );
    }*/
    salvaSettore() {
        if (this.form5.invalid) {
            // console.error('Form non valido');
            return;
        }
        const settoreNome = this.form5.value.inputSettore;
        /*       // Controlla se il settore esiste già
              const settoreEsistente = this.listaSettori.find(s => s.nome.toLowerCase() === settoreNome.toLowerCase());
              if (settoreEsistente) {
                this.errorMessage = `Il Settore/Materia "${settoreNome}" è già presente nel sistema.`;
                return;
              } */
        // Se non esiste, procedi con l'inserimento
        const settore = new _shared_models_settore_materia_model__WEBPACK_IMPORTED_MODULE_9__.Settore();
        settore.nome = settoreNome.replace(/\s+/g, ' ').trim();
        this.settoreSrv.insertSettoreMateria(settore).subscribe({
            next: () => {
                this.dialogRef.close();
            },
            error: (error) => {
                this.errorMessage = error.error.message;
            }
        });
    }
}
ModellazioneNuovaComponent.ɵfac = function ModellazioneNuovaComponent_Factory(t) { return new (t || ModellazioneNuovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_4__.Aree), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_sottoaree_service__WEBPACK_IMPORTED_MODULE_5__.SottoareeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_prodotti_service__WEBPACK_IMPORTED_MODULE_6__.ProdottiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_7__.TipologieLavoratoriService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_prodotti_tipologie_lavoratori_service__WEBPACK_IMPORTED_MODULE_8__.ProdottiTipologieLavoratoriService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_10__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_10__.SettoreMateriaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MAT_DIALOG_DATA)); };
ModellazioneNuovaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: ModellazioneNuovaComponent, selectors: [["app-modellazione-nuova"]], decls: 6, vars: 6, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [1, "main-ico"], [1, "form", 3, "formGroup", "ngSubmit"], ["appearance", "fill", 1, "full-width"], ["required", "", "placeholder", "Settore/Materia", "name", "settoreMateria", "formControlName", "selectSettoreMateria"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Es. Area1", "formControlName", "inputArea", "maxlength", "50", 3, "focus", "blur", "paste"], ["align", "end", 4, "ngIf"], [4, "ngIf"], ["align", "center", 1, "btn-box"], ["mat-button", "", "mat-dialog-close", "", 1, "btn", "btn-back"], ["type", "submit", "mat-button", "", 1, "btn", "btn-mod", 3, "disabled"], [3, "value"], ["align", "end"], ["name", "area", "formControlName", "area"], ["matInput", "", "placeholder", "Es. Area.1", "value", "", "formControlName", "inputSottoarea"], ["required", "", "placeolder", "Area", "formControlName", "area", 3, "selectionChange"], ["name", "sottoarea", "formControlName", "sottoarea"], ["matInput", "", "placeholder", "Es. Prodotto.1", "value", "", "formControlName", "inputProdotto"], ["formControlName", "tiplav", "multiple", "", 3, "selectionChange"], ["matInput", "", "placeholder", "Es. Tipologia Lavoratore 1", "value", "", "formControlName", "inputTipologiaLavoratore"], ["matInput", "", "placeholder", "Es. Pensioni", "formControlName", "inputSettore", "maxlength", "50", 3, "focus", "blur", "paste"]], template: function ModellazioneNuovaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "container-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, ModellazioneNuovaComponent_div_1_Template, 30, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, ModellazioneNuovaComponent_div_2_Template, 25, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, ModellazioneNuovaComponent_div_3_Template, 37, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, ModellazioneNuovaComponent_div_4_Template, 19, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, ModellazioneNuovaComponent_div_5_Template, 22, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitch", ctx.formAttivo);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngSwitchCase", 4);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgSwitchCase, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_22__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatError, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialogClose], styles: ["p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #2f6dd5;\n}\n\n.btn-back[_ngcontent-%COMP%] {\n  background-color: #606470 !important;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%] {\n  background-color: #2f6dd5;\n  color: white;\n}\n\n.btn-mod[_ngcontent-%COMP%]:disabled {\n  background: #2f6dd574;\n  color: white;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n}\n\n.ult-mod[_ngcontent-%COMP%] {\n  color: #00000073;\n  position: relative;\n  font-size: 15px;\n  left: -10px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 49%;\n}\n\nhr[_ngcontent-%COMP%] {\n  border: none;\n  border-top: 1px solid #0000001a;\n}\n\n.btn-box[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 16px;\n}\n\n.main-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: 2px;\n  left: -4px;\n  zoom: 0.8;\n}\n\n.mat-error[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 1rem;\n  \n  color: red;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGVsbGF6aW9uZS1udW92YS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxtb2RlbGxhemlvbmVcXG1vZGVsbGF6aW9uZS1udW92YVxcbW9kZWxsYXppb25lLW51b3ZhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVlBO0VBQ0UsZUFBQTtFQUVBLGNBQUE7QUNaRjs7QURnQkE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7QUNiRjs7QURnQkE7RUFDRSx5QkFBQTtFQUVBLFlBQUE7QUNkRjs7QURpQkE7RUFDRSxxQkFBQTtFQUdBLFlBQUE7QUNoQkY7O0FEbUJBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtBQ2hCRjs7QURtQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsZ0JBQUE7QUNoQkY7O0FEbUJBO0VBQ0UsVUFBQTtBQ2hCRjs7QURtQkE7RUFDRSxZQUFBO0VBQ0EsK0JBQUE7QUNoQkY7O0FEbUJBO0VBRUUsa0JBQUE7RUFDQSxnQkFBQTtBQ2pCRjs7QURvQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ2pCRjs7QURvQkE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFBcUIsaURBQUE7RUFDckIsVUFBQTtFQUFZLDZDQUFBO0FDZmQiLCJmaWxlIjoibW9kZWxsYXppb25lLW51b3ZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XHJcbi8vICAgY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDsgLyogQ2FtYmlhIGlsIGNvbG9yZSBkZWwgdGVzdG8gZGVsIGNhbXBvICovXHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7IC8qIENhbWJpYSBpbCBjb2xvcmUgZGVsbGEgbGluZWEgb3JpenpvbnRhbGUgKi9cclxuLy8gfVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDsgLyogQ2FtYmlhIGlsIGNvbG9yZSBkZWxsJ2FuaW1hemlvbmUgZGVsbGEgbGluZWEgb3JpenpvbnRhbGUgKi9cclxuLy8gfVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIC8vIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjMmY2ZGQ1O1xyXG4gIC8vIGNvbG9yOiAjNGM5OWZmO1xyXG59XHJcblxyXG4uYnRuLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDY0NzAgIWltcG9ydGFudDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG4tbW9kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM0Yzk5ZmY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYnRuLW1vZDpkaXNhYmxlZCB7XHJcbiAgYmFja2dyb3VuZDogIzJmNmRkNTc0O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM1YTY5ODQ7XHJcbiAgLy8gYmFja2dyb3VuZDogIzRjOWFmZjc0O1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuXHJcbi5yb3RhdGlvbiB7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xyXG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi51bHQtbW9kIHtcclxuICBjb2xvcjogIzAwMDAwMDczO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5mdWxsLXdpZHRoIHtcclxuICBtaW4td2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICB3aWR0aDogNDklO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMWE7XHJcbn1cclxuXHJcbi5idG4tYm94IHtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5tYWluLWljbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMnB4O1xyXG4gIGxlZnQ6IC00cHg7XHJcbiAgem9vbTogMC44O1xyXG59XHJcblxyXG4ubWF0LWVycm9yIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtOyAvKiBBZ2dpdW5nZSBzcGF6aW8gc290dG8gaWwgbWVzc2FnZ2lvIGRpIGVycm9yZSAqL1xyXG4gIGNvbG9yOiByZWQ7IC8qIENvbG9yZSBkZWwgdGVzdG8gZGVsIG1lc3NhZ2dpbyBkaSBlcnJvcmUgKi9cclxufVxyXG4iLCJwIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzJmNmRkNTtcbn1cblxuLmJ0bi1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjQ3MCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tbW9kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRuLW1vZDpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICMyZjZkZDU3NDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucm90YXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHpvb206IDEuMjtcbn1cblxuLnVsdC1tb2Qge1xuICBjb2xvcjogIzAwMDAwMDczO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGVmdDogLTEwcHg7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgbWluLXdpZHRoOiA1MDBweDtcbn1cblxuLmJ0biB7XG4gIHdpZHRoOiA0OSU7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDFhO1xufVxuXG4uYnRuLWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLm1haW4taWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbiAgbGVmdDogLTRweDtcbiAgem9vbTogMC44O1xufVxuXG4ubWF0LWVycm9yIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIC8qIEFnZ2l1bmdlIHNwYXppbyBzb3R0byBpbCBtZXNzYWdnaW8gZGkgZXJyb3JlICovXG4gIGNvbG9yOiByZWQ7XG4gIC8qIENvbG9yZSBkZWwgdGVzdG8gZGVsIG1lc3NhZ2dpbyBkaSBlcnJvcmUgKi9cbn0iXX0= */"] });


/***/ }),

/***/ 59913:
/*!********************************************************************!*\
  !*** ./src/app/routes/modellazione/modellazione-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModellazioneRoutingModule": () => (/* binding */ ModellazioneRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core */ 3825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        redirectTo: 'settore-materia',
        pathMatch: 'full'
    },
    {
        path: 'area-prodotto',
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
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
                "P12800; P12801"] },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_modellazione_aree_aree_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./aree/aree.module */ 56091)).then(m => m.AreeModule),
    },
    {
        path: 'settore-materia',
        canActivate: [_core__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
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
                "P12800; P12801"] },
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_routes_modellazione_settore-materia_settore-materia_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./settore-materia/settore-materia.module */ 21499)).then(m => m.SettoreMateriaModule)
    },
];
class ModellazioneRoutingModule {
}
ModellazioneRoutingModule.ɵfac = function ModellazioneRoutingModule_Factory(t) { return new (t || ModellazioneRoutingModule)(); };
ModellazioneRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModellazioneRoutingModule });
ModellazioneRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModellazioneRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 83292:
/*!************************************************************!*\
  !*** ./src/app/routes/modellazione/modellazione.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModellazioneModule": () => (/* binding */ ModellazioneModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _modellazione_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modellazione-routing.module */ 59913);
/* harmony import */ var _modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modellazione-nuova/modellazione-nuova.component */ 28055);
/* harmony import */ var _modellazione_aggiorna_modellazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modellazione-aggiorna/modellazione-aggiorna.component */ 58439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);





const COMPONENTS = [];
const COMPONENTS_DYNAMIC = [];
class ModellazioneModule {
}
ModellazioneModule.ɵfac = function ModellazioneModule_Factory(t) { return new (t || ModellazioneModule)(); };
ModellazioneModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: ModellazioneModule });
ModellazioneModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _modellazione_routing_module__WEBPACK_IMPORTED_MODULE_1__.ModellazioneRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ModellazioneModule, { declarations: [_modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_2__.ModellazioneNuovaComponent, _modellazione_aggiorna_modellazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_3__.ModellazioneAggiornaComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _modellazione_routing_module__WEBPACK_IMPORTED_MODULE_1__.ModellazioneRoutingModule] }); })();


/***/ }),

/***/ 40744:
/*!***********************************************!*\
  !*** ./src/app/shared/models/areeprodotti.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreeProdotti": () => (/* binding */ AreeProdotti)
/* harmony export */ });
class AreeProdotti {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
        this.idSettore = 0;
    }
}


/***/ }),

/***/ 34898:
/*!********************************************************!*\
  !*** ./src/app/shared/models/settore-materia.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Settore": () => (/* binding */ Settore)
/* harmony export */ });
class Settore {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ }),

/***/ 95883:
/*!**************************************************************************!*\
  !*** ./src/app/shared/services/prodotti-tipologie-lavoratori.service.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdottiTipologieLavoratoriService": () => (/* binding */ ProdottiTipologieLavoratoriService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);



class ProdottiTipologieLavoratoriService {
    constructor(http) {
        this.http = http;
    }
}
ProdottiTipologieLavoratoriService.ɵfac = function ProdottiTipologieLavoratoriService_Factory(t) { return new (t || ProdottiTipologieLavoratoriService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProdottiTipologieLavoratoriService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProdottiTipologieLavoratoriService, factory: ProdottiTipologieLavoratoriService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33492:
/*!******************************************************!*\
  !*** ./src/app/shared/services/sottoaree.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SottoareeService": () => (/* binding */ SottoareeService)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* eslint-disable quote-props */




class SottoareeService {
    constructor(http) {
        this.http = http;
    }
    getSottoAree(id, soloConTipLav) {
        return this.http.get(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'aree/' + id + '/sottoaree?soloTipLav=' + soloConTipLav);
    }
    getSottoArea(id) {
        return this.http.get(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree/' + id);
    }
    getSottoAreeAll(soloConTipLav = false) {
        return this.http.get(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree?soloConTipLav=' + soloConTipLav);
    }
    getSottoareeConPaginazione(dimensione, ordine, pagina) {
        return this.http.get(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree?dimensione=' + dimensione + '&ordine=' + ordine + '&pagina=' + pagina);
    }
    contaSottoaree() {
        return this.http.get(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree/conta');
    }
    inserisciSottoArea(sottoarea) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(sottoarea);
        return (this.http.post(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree', body, { headers }));
    }
    aggiornaSottoArea(sottoarea) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify(sottoarea);
        //console.log('body: ', body);
        return (this.http.post(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree' + '/aggiorna', body, { headers }));
    }
    verificaSottoArea(id) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify('');
        return this.http.post(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree/' + id + '/verificaRimuovi', body, { headers });
    }
    deleteSottoArea(id) {
        const headers = { 'content-type': 'application/json' };
        const body = JSON.stringify('');
        return this.http.post(_env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'sottoaree/' + id + '/rimuovi', body, { headers });
    }
}
SottoareeService.ɵfac = function SottoareeService_Factory(t) { return new (t || SottoareeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SottoareeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SottoareeService, factory: SottoareeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88980:
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/tipologie-lavoratori.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipologieLavoratoriService": () => (/* binding */ TipologieLavoratoriService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);



class TipologieLavoratoriService {
    constructor(http) {
        this.http = http;
    }
}
TipologieLavoratoriService.ɵfac = function TipologieLavoratoriService_Factory(t) { return new (t || TipologieLavoratoriService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
TipologieLavoratoriService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TipologieLavoratoriService, factory: TipologieLavoratoriService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_routes_modellazione_modellazione_module_ts.js.map