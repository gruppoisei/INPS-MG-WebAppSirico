"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["src_app_routes_modellazione_settore-materia_settore-materia_module_ts"],{

/***/ 86195:
/*!***************************************************************************************!*\
  !*** ./src/app/routes/modellazione/settore-materia/settore-materia-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettoreMateriaRoutingModule": () => (/* binding */ SettoreMateriaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settore_materia_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settore-materia.component */ 67489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _settore_materia_component__WEBPACK_IMPORTED_MODULE_0__.SettoreMateriaComponent }
];
class SettoreMateriaRoutingModule {
}
SettoreMateriaRoutingModule.ɵfac = function SettoreMateriaRoutingModule_Factory(t) { return new (t || SettoreMateriaRoutingModule)(); };
SettoreMateriaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SettoreMateriaRoutingModule });
SettoreMateriaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettoreMateriaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 67489:
/*!**********************************************************************************!*\
  !*** ./src/app/routes/modellazione/settore-materia/settore-materia.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettoreMateriaComponent": () => (/* binding */ SettoreMateriaComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modellazione-nuova/modellazione-nuova.component */ 28055);
/* harmony import */ var _shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/services/settore-materia.service */ 10828);
/* harmony import */ var _modellazione_aggiorna_modellazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modellazione-aggiorna/modellazione-aggiorna.component */ 58439);
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
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ 13338);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 91434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ 88133);




















function SettoreMateriaComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00A0per il filtro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_11_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.azzeraFiltro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.filtroStringa, " ");
} }
function SettoreMateriaComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0su ", ctx_r1.elemNum, "\n");
} }
function SettoreMateriaComponent_div_16_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 32);
} }
function SettoreMateriaComponent_div_16_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 33);
} }
function SettoreMateriaComponent_div_16_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Settore/Materia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettoreMateriaComponent_div_16_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_td_6_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const element_r20 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r21.modificaDialog(element_r20.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r20.nome, " ");
} }
function SettoreMateriaComponent_div_16_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data creazione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettoreMateriaComponent_div_16_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_td_9_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const element_r23 = restoredCtx.$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r24.modificaDialog(element_r23.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r23.creato, "dd/MM/yyyy"), " ");
} }
function SettoreMateriaComponent_div_16_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data Ultima modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SettoreMateriaComponent_div_16_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_td_12_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const element_r26 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r27.modificaDialog(element_r26.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r26.aggiornato, "dd/MM/yyyy"), " ");
} }
const _c0 = function () { return { "first-last-page-icon": true }; };
function SettoreMateriaComponent_div_16_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_a_15_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.pageFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function SettoreMateriaComponent_div_16_a_19_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_a_19_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ln_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.setPageCurr(ln_r31); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ln_r31 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ln_r31 === ctx_r16.pageCurr ? "active" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ln_r31);
} }
function SettoreMateriaComponent_div_16_a_23_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_a_23_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r34.pageLast(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function SettoreMateriaComponent_div_16_mat_option_26_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_mat_option_26_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.inizializzaPaginazione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", num_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r36);
} }
function SettoreMateriaComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function SettoreMateriaComponent_div_16_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r39.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SettoreMateriaComponent_div_16_tr_2_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SettoreMateriaComponent_div_16_tr_3_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, SettoreMateriaComponent_div_16_th_5_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, SettoreMateriaComponent_div_16_td_6_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, SettoreMateriaComponent_div_16_th_8_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SettoreMateriaComponent_div_16_td_9_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SettoreMateriaComponent_div_16_th_11_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SettoreMateriaComponent_div_16_td_12_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 22)(14, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, SettoreMateriaComponent_div_16_a_15_Template, 3, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r41.pagePrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, SettoreMateriaComponent_div_16_a_19_Template, 2, 2, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_div_16_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r42.pageNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, SettoreMateriaComponent_div_16_a_23_Template, 3, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 28)(25, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettoreMateriaComponent_div_16_Template_mat_select_ngModelChange_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r43.pageDim = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, SettoreMateriaComponent_div_16_mat_option_26_Template, 2, 2, "mat-option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
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
function SettoreMateriaComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 40)(3, "h1", 41)(4, "mat-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
class SettoreMateriaComponent {
    constructor(dialog, settoreSrv) {
        this.dialog = dialog;
        this.settoreSrv = settoreSrv;
        this.displayedColumns = ['nome', 'creato', 'aggiornato'];
        this.dataSource = [];
        this.filtroStringa = '';
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        //proprietà per paginazione e ordinamento
        this.pageDim = '20';
        this.pageCurr = 1; //pagina corrente
        this.pageNum = 0; //numero di pagine
        this.elemNum = 0; //numero di elementi totali
        this.base = 1; //base per creazione layout
        this.layoutDim = 6; //elementi paginazione
        this.layoutNumbers = []; //numeri del paginatore
        this.numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
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
    onInputChange(event) {
        const input = event.target;
        this.searchSubject.next(input.value);
    }
    modificaDialog(id) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.data = { formAttivo: 4, id };
        const dialogRef = this.dialog.open(_modellazione_aggiorna_modellazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_2__.ModellazioneAggiornaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.inizializzaPaginazione();
        });
    }
    nuovaDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.data = 4;
        const dialogRef = this.dialog.open(_modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_0__.ModellazioneNuovaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.ordine = '';
            this.inizializzaPaginazione();
        });
    }
    popolaTabella() {
        this.settoreSrv
            .newGetSettoriConPaginazione(Number(this.pageDim), this.ordine, this.pageCurr - 1, this.filtroStringa)
            .subscribe(data => {
            this.dataSource = data;
        }, error => {
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
        this.pageCurr = 1; //pagina corrente
        this.base = 1; //base per creazione layout
        this.layoutDim = 6; //elementi paginazione
        this.layoutNumbers = []; //numeri del paginatore
    }
    inizializzaPaginazione() {
        this.resetPaginazione();
        this.getCountPagineElementi();
    }
    getCountPagineElementi() {
        this.settoreSrv.contaSettoriMaterie(this.filtroStringa).subscribe({
            next: data => {
                this.elemNum = data.count;
                this.pageNum = Math.floor(this.elemNum / Number(this.pageDim));
                if (this.elemNum % Number(this.pageDim) > 0)
                    this.pageNum++;
                for (let i = 1; i <= 6; i++) {
                    if (i <= this.pageNum) {
                        this.layoutNumbers.push(i);
                    }
                }
                this.popolaTabella();
            },
            error: error => {
                console.error('Error fetching count:', error);
                this.elemNum = 0;
                this.pageNum = 0;
                this.dataSource = [];
            }
        });
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
    scorriLayout() {
        if (this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1] && this.pageCurr < this.pageNum) {
            this.base = this.base + (this.layoutDim - 1);
            this.layoutNumbers = [];
            for (let i = this.base; i < this.base + 6; i++) {
                if (i <= this.pageNum) {
                    this.layoutNumbers.push(i);
                }
            }
        }
        else if (this.pageCurr <= this.layoutNumbers[0] && this.pageCurr > 1) {
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
}
SettoreMateriaComponent.ɵfac = function SettoreMateriaComponent_Factory(t) { return new (t || SettoreMateriaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_settore_materia_service__WEBPACK_IMPORTED_MODULE_1__.SettoreMateriaService)); };
SettoreMateriaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SettoreMateriaComponent, selectors: [["app-settore-materia"]], decls: 19, vars: 6, consts: [["align", "end", 1, "container-cards-buttons"], ["mat-raised-button", "", "type", "button", 1, "child-buttons-conferma", 3, "click"], [1, "new-ico"], [1, "section-title"], ["class", "section-filtro-att", 4, "ngIf"], ["type", "text", "align", "end", "placeholder", "Cerca settore/materia...", 1, "ricerca", 3, "ngModel", "ngModelChange", "input"], [1, "filter-ico"], [4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], [1, "section-filtro-att"], [1, "box-filtro"], [1, "clear-filter-ico", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "nome"], ["mat-header-cell", "", "mat-sort-header", "nome", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "creato"], ["mat-header-cell", "", "mat-sort-header", "creato", 4, "matHeaderCellDef"], ["matColumnDef", "aggiornato"], ["mat-header-cell", "", "mat-sort-header", "aggiornato", 4, "matHeaderCellDef"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", "", "mat-sort-header", "nome"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "creato"], ["mat-header-cell", "", "mat-sort-header", "aggiornato"], [3, "ngClass", "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"]], template: function SettoreMateriaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-actions", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SettoreMateriaComponent_Template_button_click_2_listener() { return ctx.nuovaDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0Nuovo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br")(7, "br")(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, SettoreMateriaComponent_div_11_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, SettoreMateriaComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SettoreMateriaComponent_Template_input_ngModelChange_13_listener($event) { return ctx.filtroStringa = $event; })("input", function SettoreMateriaComponent_Template_input_input_13_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, SettoreMateriaComponent_div_16_Template, 29, 14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, SettoreMateriaComponent_ng_template_17_Template, 6, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Modellazione Settore/Materia | ", ctx.dataSource.length, " risultati");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSource.length > 0)("ngIfElse", _r3);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.dx[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.new-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  right: 5px;\n  zoom: 1.2;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #2f6dd5 !important;\n  margin-top: 20px;\n}\n\n.mat-card-title-mod[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 6px;\n  right: -19px;\n}\n\n.mat-card-ico-mod[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  right: 4px;\n  zoom: 1.2;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n  position: relative;\n  top: 28px;\n}\n\n.rotation-div[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  height: 100px;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.mat-paginator-empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRvcmUtbWF0ZXJpYS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcUHJvZ2V0dGklMjAuTmV0XFxJTlBTLU1HLVdlYkFwcFNpcmljb1xcQ2xpZW50QXBwXFxzcmNcXGFwcFxccm91dGVzXFxtb2RlbGxhemlvbmVcXHNldHRvcmUtbWF0ZXJpYVxcc2V0dG9yZS1tYXRlcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBSUUsZUFBQTtBQ0ZGOztBRHlCQTtFQUNFLFlBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBRUEsZ0JBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsdUJBQUE7QUN2QkY7O0FEMEJBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3ZCRjs7QUQwQkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxXQUFBO0FDdkJGOztBRDBCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDdkJGOztBRDBCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ3ZCRjs7QUQwQkE7RUFDRSxjQUFBO0FDdkJGOztBRDBCQTtFQUNFO0lBQ0UseUJBQUE7RUN2QkY7RUQwQkE7SUFDRSxvQkFBQTtFQ3hCRjtBQUNGIiwiZmlsZSI6InNldHRvcmUtbWF0ZXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxudGgge1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcclxuICAvLyAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4vLyAubWF0LXJvdyB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpob3ZlciB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMSwgMjMxLCAyMzEpICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi8vIC5tYXQtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjQ1LCAyNDUpO1xyXG4vLyB9XHJcblxyXG4vLyAubmV3LWJ1dHRvbiB7XHJcbi8vICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4vLyB9XHJcblxyXG4uZHgge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm5ldy1pY28ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xcHg7XHJcbiAgcmlnaHQ6IDVweDtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbi50b3AtYm9yZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmNmRkNSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDZweDtcclxuICByaWdodDogLTE5cHg7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1pY28tbW9kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI4cHg7XHJcbn1cclxuXHJcbi5yb3RhdGlvbi1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJpY2VyY2Ege1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgem9vbTogMS4yO1xyXG4gIGNvbG9yOiAjODM4MzgzO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1lbXB0eSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLnNlY3Rpb24tZmlsdHJvLWF0dCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMTZweDtcclxufVxyXG5cclxuLmJveC1maWx0cm8ge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDMwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHpvb206IDAuODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xyXG4gIGNvbG9yOiAjZTNlM2UzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJvdGF0ZS1zLWxvYWRlciB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuXHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL3BhZ2luYXRvciBzdHlsZVxyXG5cclxuLy9jb250YWluZXJcclxuLy8gLm1hdC1wYWdpbmF0b3ItbW9kIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIHBhZGRpbmc6IDVweDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIHtcclxuLy8gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vIH1cclxuXHJcbi8vIC5wYWdpbmF0aW9uIGEge1xyXG4vLyAgIGNvbG9yOiBibGFjaztcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbi8vICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM0MGE4ZmI7XHJcbi8vICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgIGNvbG9yOiB3aGl0ZTtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRpb24gYTpob3Zlcjpub3QoLmFjdGl2ZSkge1xyXG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAucGFnaW5hdG9yLWluZm8ge1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6IDEycHg7XHJcbi8vICAgbGVmdDogLTI2cHg7XHJcbi8vICAgY29sb3I6IGdyZXk7XHJcbi8vICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRvci1udW1lbGVtIHtcclxuLy8gICBmbG9hdDogbGVmdDtcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgdG9wOiA1cHg7XHJcbi8vICAgbGVmdDogMTBweDtcclxuLy8gICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuLy8gICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdG9yLW51bWVsZW0tc2VsZWN0IHtcclxuLy8gICB3aWR0aDogODBweCAhaW1wb3J0YW50O1xyXG4vLyAgIGNvbG9yOiBncmV5O1xyXG4vLyB9XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZHgge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uZXctaWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHpvb206IDEuMjtcbn1cblxuLnRvcC1ib3JkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLm1hdC1jYXJkLXRpdGxlLW1vZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDZweDtcbiAgcmlnaHQ6IC0xOXB4O1xufVxuXG4ubWF0LWNhcmQtaWNvLW1vZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG4gIHJpZ2h0OiA0cHg7XG4gIHpvb206IDEuMjtcbn1cblxuaHRtbCB7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4ucm90YXRpb24ge1xuICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlLXMtbG9hZGVyO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gIHpvb206IDEuMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDI4cHg7XG59XG5cbi5yb3RhdGlvbi1kaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucmljZXJjYSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDJweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmZpbHRlci1pY28ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMnB4O1xuICByaWdodDogNXB4O1xuICB6b29tOiAxLjI7XG4gIGNvbG9yOiAjODM4MzgzO1xufVxuXG4ubWF0LXBhZ2luYXRvci1lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5zZWN0aW9uLWZpbHRyby1hdHQge1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE2cHg7XG59XG5cbi5ib3gtZmlsdHJvIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBwYWRkaW5nOiA1cHggMzBweCA1cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xufVxuXG4uY2xlYXItZmlsdGVyLWljbyB7XG4gIGZsb2F0OiByaWdodDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgem9vbTogMC44O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsZWFyLWZpbHRlci1pY286aG92ZXIge1xuICBjb2xvcjogI2UzZTNlMztcbn1cblxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 21499:
/*!*******************************************************************************!*\
  !*** ./src/app/routes/modellazione/settore-materia/settore-materia.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettoreMateriaModule": () => (/* binding */ SettoreMateriaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 44770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 43365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 87317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 65590);
/* harmony import */ var _settore_materia_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settore-materia-routing.module */ 86195);
/* harmony import */ var _settore_materia_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settore-materia.component */ 67489);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ 44466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);










class SettoreMateriaModule {
}
SettoreMateriaModule.ɵfac = function SettoreMateriaModule_Factory(t) { return new (t || SettoreMateriaModule)(); };
SettoreMateriaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SettoreMateriaModule });
SettoreMateriaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _settore_materia_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettoreMateriaRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SettoreMateriaModule, { declarations: [_settore_materia_component__WEBPACK_IMPORTED_MODULE_1__.SettoreMateriaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _settore_materia_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettoreMateriaRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_routes_modellazione_settore-materia_settore-materia_module_ts.js.map