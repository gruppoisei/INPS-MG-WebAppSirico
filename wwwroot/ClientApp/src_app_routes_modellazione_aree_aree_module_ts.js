"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["src_app_routes_modellazione_aree_aree_module_ts"],{

/***/ 99435:
/*!*****************************************************************!*\
  !*** ./src/app/routes/modellazione/aree/aree-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreeRoutingModule": () => (/* binding */ AreeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _aree_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aree.component */ 81974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    { path: '', component: _aree_component__WEBPACK_IMPORTED_MODULE_0__.AreeComponent },
];
class AreeRoutingModule {
}
AreeRoutingModule.ɵfac = function AreeRoutingModule_Factory(t) { return new (t || AreeRoutingModule)(); };
AreeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AreeRoutingModule });
AreeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AreeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 81974:
/*!************************************************************!*\
  !*** ./src/app/routes/modellazione/aree/aree.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreeComponent": () => (/* binding */ AreeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/services/areeservice.service */ 25821);
/* harmony import */ var _modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modellazione-nuova/modellazione-nuova.component */ 28055);
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




















function AreeComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " \u00A0per il filtro: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_11_Template_mat_icon_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.azzeraFiltro(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.filtroStringa, " ");
} }
function AreeComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0su ", ctx_r1.elemNum, "\n");
} }
function AreeComponent_div_16_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 34);
} }
function AreeComponent_div_16_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 35);
} }
function AreeComponent_div_16_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Settore/Materia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreeComponent_div_16_td_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_td_6_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const element_r22 = restoredCtx.$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r23.modificaDialog(element_r22.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.nomeSettoreMaterie, " ");
} }
function AreeComponent_div_16_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Area/Prodotto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreeComponent_div_16_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_td_9_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const element_r25 = restoredCtx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r26.modificaDialog(element_r25.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r25.nomeAreaProdotto, " ");
} }
function AreeComponent_div_16_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data creazione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreeComponent_div_16_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_td_12_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r30); const element_r28 = restoredCtx.$implicit; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r29.modificaDialog(element_r28.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r28.creato, "dd/MM/yyyy"), " ");
} }
function AreeComponent_div_16_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ultima modifica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AreeComponent_div_16_td_15_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_td_15_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const element_r31 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r32.modificaDialog(element_r31.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, element_r31.aggiornato, "dd/MM/yyyy"), " ");
} }
const _c0 = function () { return { "first-last-page-icon": true }; };
function AreeComponent_div_16_a_18_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_a_18_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r34.pageFirst(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "first_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function (a0) { return { "active": a0 }; };
function AreeComponent_div_16_a_22_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_a_22_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r38); const ln_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r37.setPageCurr(ln_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ln_r36 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, ln_r36 === ctx_r18.pageCurr));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ln_r36);
} }
function AreeComponent_div_16_a_26_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_a_26_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r39.pageLast(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "last_page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c0));
} }
function AreeComponent_div_16_mat_option_29_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_mat_option_29_Template_mat_option_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r42.inizializzaPaginazione(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", num_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r41);
} }
const _c2 = function (a0) { return { "disabled": a0 }; };
function AreeComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "table", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function AreeComponent_div_16_Template_table_matSortChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r44.sortData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AreeComponent_div_16_tr_2_Template, 1, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AreeComponent_div_16_tr_3_Template, 1, 0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](4, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, AreeComponent_div_16_th_5_Template, 2, 0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AreeComponent_div_16_td_6_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](7, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AreeComponent_div_16_th_8_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, AreeComponent_div_16_td_9_Template, 2, 1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](10, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AreeComponent_div_16_th_11_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AreeComponent_div_16_td_12_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](13, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, AreeComponent_div_16_th_14_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AreeComponent_div_16_td_15_Template, 3, 4, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 24)(17, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AreeComponent_div_16_a_18_Template, 3, 2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r46.pagePrev(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "keyboard_arrow_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AreeComponent_div_16_a_22_Template, 2, 4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_div_16_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r47.pageNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AreeComponent_div_16_a_26_Template, 3, 2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 30)(28, "mat-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AreeComponent_div_16_Template_mat_select_ngModelChange_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r48.pageDim = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, AreeComponent_div_16_mat_option_29_Template, 2, 2, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r2.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r2.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pageCurr > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r2.pageCurr === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](18, _c2, ctx_r2.pageCurr === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.layoutNumbers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r2.pageCurr === ctx_r2.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](21, _c2, ctx_r2.pageCurr === ctx_r2.pageNum));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](23, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.pageCurr < ctx_r2.pageNum);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.pageDim);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.numPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Pagina ", ctx_r2.pageCurr, " di ", ctx_r2.pageNum, "");
} }
function AreeComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "br")(1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 43)(3, "h1", 44)(4, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "cached");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} }
class AreeComponent {
    constructor(dialog, areeSrv) {
        this.dialog = dialog;
        this.areeSrv = areeSrv;
        this.displayedColumns = ['nomeSettoreMaterie', 'nomeAreaProdotto', 'creato', 'aggiornato'];
        this.dataSource = [];
        this.filtroStringa = '';
        this.searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.errorMessage = null;
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
        dialogConfig.height = '400px';
        dialogConfig.data = ({ formAttivo: 0, id });
        const dialogRef = this.dialog.open(_modellazione_aggiorna_modellazione_aggiorna_component__WEBPACK_IMPORTED_MODULE_2__.ModellazioneAggiornaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.inizializzaPaginazione();
        });
    }
    nuovaDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogConfig();
        dialogConfig.autoFocus = true;
        dialogConfig.height = '400px';
        dialogConfig.data = 0;
        const dialogRef = this.dialog.open(_modellazione_nuova_modellazione_nuova_component__WEBPACK_IMPORTED_MODULE_1__.ModellazioneNuovaComponent, dialogConfig);
        dialogRef.afterClosed().subscribe(() => {
            this.ordine = '';
            this.inizializzaPaginazione();
        });
    }
    popolaTabella() {
        this.areeSrv.newGetAreeConPaginazione(Number(this.pageDim), this.ordine, this.pageCurr - 1, this.filtroStringa).subscribe(data => {
            this.dataSource = data;
        }, error => {
            this.errorMessage = 'Error fetching data';
            // console.error('Error fetching data:', error);
            this.dataSource = [];
        });
    }
    onInputChange(event) {
        const input = event.target;
        this.searchSubject.next(input.value);
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
        this.areeSrv.newContaAreeProdotto(this.filtroStringa).subscribe({
            next: data => {
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
            },
            error: error => {
                console.error('Error fetching count:', error);
                this.elemNum = 0;
                this.pageNum = 0;
                this.dataSource = [];
            }
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
AreeComponent.ɵfac = function AreeComponent_Factory(t) { return new (t || AreeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_areeservice_service__WEBPACK_IMPORTED_MODULE_0__.Aree)); };
AreeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AreeComponent, selectors: [["app-aree"]], decls: 19, vars: 6, consts: [["align", "end", 1, "container-cards-buttons"], ["mat-raised-button", "", "type", "button", 1, "child-buttons-conferma", 3, "click"], [1, "new-ico"], [1, "section-title"], ["class", "section-filtro-att", 4, "ngIf"], ["type", "text", "align", "end", "placeholder", "Cerca area/prodotto...", 1, "ricerca", 3, "ngModel", "ngModelChange", "input"], [1, "filter-ico"], [4, "ngIf", "ngIfElse"], ["nessunRisultato", ""], [1, "section-filtro-att"], [1, "box-filtro"], [1, "clear-filter-ico", 3, "click"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "nomeSettoreMaterie"], ["mat-header-cell", "", "mat-sort-header", "nomeSettoreMaterie", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "nomeAreaProdotto"], ["mat-header-cell", "", "mat-sort-header", "nomeAreaProdotto", 4, "matHeaderCellDef"], ["matColumnDef", "creato"], ["mat-header-cell", "", "mat-sort-header", "creato", 4, "matHeaderCellDef"], ["matColumnDef", "aggiornato"], ["mat-header-cell", "", "mat-sort-header", "aggiornato", 4, "matHeaderCellDef"], [1, "mat-paginator-mod"], [1, "pagination"], [3, "click", 4, "ngIf"], [3, "ngClass", "click"], [3, "ngClass"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "paginator-numelem"], ["name", "numElem", 1, "paginator-numelem-select", 3, "ngModel", "ngModelChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "paginator-info"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", "", "mat-sort-header", "nomeSettoreMaterie"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "nomeAreaProdotto"], ["mat-header-cell", "", "mat-sort-header", "creato"], ["mat-header-cell", "", "mat-sort-header", "aggiornato"], [3, "click"], [3, "value", "click"], [1, "rotation-div"], [1, "nessuna-corr"], [1, "rotation"]], template: function AreeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-actions", 0)(2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreeComponent_Template_button_click_2_listener() { return ctx.nuovaDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A0Nuova ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "br")(7, "br")(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, AreeComponent_div_11_Template, 6, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AreeComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AreeComponent_Template_input_ngModelChange_13_listener($event) { return ctx.filtroStringa = $event; })("input", function AreeComponent_Template_input_input_13_listener($event) { return ctx.onInputChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "filter_list");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AreeComponent_div_16_Template, 32, 24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, AreeComponent_ng_template_17_Template, 6, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Modellazione Aree/Prodotti | ", ctx.dataSource.length, " risultati");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.filtroStringa);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.dataSource.length > 0)("ngIfElse", _r3);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_3__.PageHeaderComponent, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgModel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSort, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_sort__WEBPACK_IMPORTED_MODULE_14__.MatSortHeader, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__.DefaultClassDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_17__.MatOption], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.dx[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.new-ico[_ngcontent-%COMP%] {\n  position: relative;\n  top: -1px;\n  right: 5px;\n  zoom: 1.2;\n}\n\n.top-border[_ngcontent-%COMP%] {\n  height: 50px;\n  background-color: #2f6dd5;\n  margin-top: 20px;\n}\n\n.mat-card-title-mod[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  top: 6px;\n  right: -19px;\n}\n\n.mat-card-ico-mod[_ngcontent-%COMP%] {\n  position: relative;\n  top: 4px;\n  right: 4px;\n  zoom: 1.2;\n}\n\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\n\n.rotation[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-name: rotate-s-loader;\n  animation-timing-function: linear;\n  zoom: 1.2;\n  position: relative;\n  top: 28px;\n}\n\n.rotation-div[_ngcontent-%COMP%] {\n  background-color: white;\n  text-align: center;\n  height: 100px;\n}\n\n.ricerca[_ngcontent-%COMP%] {\n  float: right;\n  margin-bottom: 10px;\n  padding: 5px;\n  position: relative;\n  top: 12px;\n  right: 2px;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 12px;\n  right: 5px;\n  zoom: 1.2;\n  color: #838383;\n}\n\n.mat-paginator-empty[_ngcontent-%COMP%] {\n  background-color: white;\n  height: 50px;\n}\n\n.section-filtro-att[_ngcontent-%COMP%] {\n  float: left;\n  position: relative;\n  top: 16px;\n}\n\n.box-filtro[_ngcontent-%COMP%] {\n  display: inline;\n  padding: 5px 30px 5px 8px;\n  border-radius: 25px;\n  background-color: #00000085;\n  color: white;\n  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.53);\n}\n\n.clear-filter-ico[_ngcontent-%COMP%] {\n  float: right;\n  position: relative;\n  top: 0px;\n  right: 30px;\n  cursor: pointer;\n  zoom: 0.8;\n  color: #ffffff;\n}\n\n.clear-filter-ico[_ngcontent-%COMP%]:hover {\n  color: #e3e3e3;\n}\n\n@keyframes rotate-s-loader {\n  from {\n    transform: rotate(360deg);\n  }\n  to {\n    transform: rotate(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFyZWUuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXFByb2dldHRpJTIwLk5ldFxcSU5QUy1NRy1XZWJBcHBTaXJpY29cXENsaWVudEFwcFxcc3JjXFxhcHBcXHJvdXRlc1xcbW9kZWxsYXppb25lXFxhcmVlXFxhcmVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBSUUsZUFBQTtBQ0ZGOztBRHlCQTtFQUNFLFlBQUE7QUN0QkY7O0FEeUJBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUN0QkY7O0FEeUJBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBRUEsZ0JBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUN0QkY7O0FEd0JBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsdUJBQUE7QUNyQkY7O0FEd0JBO0VBQ0Usc0JBQUE7RUFDQSwrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQ3JCRjs7QUR3QkE7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxXQUFBO0FDckJGOztBRHdCQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNyQkY7O0FEd0JBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0FDckJGOztBRHVCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFFQSxpREFBQTtBQ25CRjs7QURzQkE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQ25CRjs7QURzQkE7RUFDRSxjQUFBO0FDbkJGOztBRHNCQTtFQUNFO0lBQ0UseUJBQUE7RUNuQkY7RURxQkE7SUFDRSxvQkFBQTtFQ25CRjtBQUNGIiwiZmlsZSI6ImFyZWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnRoIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjMmY2ZGQ1ICFpbXBvcnRhbnQ7XHJcbiAgLy8gLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMyAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLy8gLm1hdC1yb3cge1xyXG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC1yb3c6aG92ZXIge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDIzMSwgMjMxKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gfVxyXG5cclxuLy8gLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDI0NSwgMjQ1KTtcclxuLy8gfVxyXG5cclxuLy8gLm5ldy1idXR0b24ge1xyXG4vLyAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuLy8gfVxyXG5cclxuLmR4IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5uZXctaWNvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgem9vbTogMS4yO1xyXG59XHJcblxyXG4udG9wLWJvcmRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5tYXQtY2FyZC10aXRsZS1tb2Qge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA2cHg7XHJcbiAgcmlnaHQ6IC0xOXB4O1xyXG59XHJcbi5tYXQtY2FyZC1pY28tbW9kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiA0cHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB6b29tOiAxLjI7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG4ucm90YXRpb24ge1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcclxuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgem9vbTogMS4yO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI4cHg7XHJcbn1cclxuXHJcbi5yb3RhdGlvbi1kaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnJpY2VyY2Ege1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmZpbHRlci1pY28ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgem9vbTogMS4yO1xyXG4gIGNvbG9yOiAjODM4MzgzO1xyXG59XHJcblxyXG4ubWF0LXBhZ2luYXRvci1lbXB0eSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uc2VjdGlvbi1maWx0cm8tYXR0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxNnB4O1xyXG59XHJcbi5ib3gtZmlsdHJvIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcGFkZGluZzogNXB4IDMwcHggNXB4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4NTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIycHggLTVweCByZ2JhKDAsIDAsIDAsIDAuNTMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjJweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41Myk7XHJcbn1cclxuXHJcbi5jbGVhci1maWx0ZXItaWNvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMHB4O1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6b29tOiAwLjg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jbGVhci1maWx0ZXItaWNvOmhvdmVyIHtcclxuICBjb2xvcjogI2UzZTNlMztcclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGUtcy1sb2FkZXIge1xyXG4gIGZyb20ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4vL3BhZ2luYXRvciBzdHlsZVxyXG5cclxuLy9jb250YWluZXJcclxuLy8gLm1hdC1wYWdpbmF0b3ItbW9kIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbi8vICAgaGVpZ2h0OiA1MHB4O1xyXG4vLyAgIHBhZGRpbmc6NXB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRpb24ge1xyXG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRpb24gYSB7XHJcbi8vICAgY29sb3I6IGJsYWNrO1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBwYWRkaW5nOiA4cHggMTZweDtcclxuLy8gICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiBhLmFjdGl2ZSB7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzQwYThmYjtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgY29sb3I6IHdoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdGlvbiBhOmhvdmVyOm5vdCguYWN0aXZlKSB7XHJcbi8vICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuLy8gfVxyXG5cclxuXHJcbi8vIC5wYWdpbmF0b3ItaW5mb3tcclxuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbi8vICAgdG9wOiAxMnB4O1xyXG4vLyAgIGxlZnQ6IC0yNnB4O1xyXG4vLyAgIGNvbG9yOmdyZXk7XHJcbi8vICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgIGZsb2F0OiByaWdodDtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRvci1udW1lbGVte1xyXG4vLyAgIGZsb2F0OiBsZWZ0O1xyXG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuLy8gICB0b3A6NXB4O1xyXG4vLyAgIGxlZnQ6IDEwcHg7XHJcbi8vICAgcGFkZGluZzo1cHg7XHJcbi8vICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuLy8gICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4vLyB9XHJcblxyXG4vLyAucGFnaW5hdG9yLW51bWVsZW0tc2VsZWN0e1xyXG4vLyAgIHdpZHRoOjgwcHggIWltcG9ydGFudDtcclxuLy8gICBjb2xvcjogZ3JleTtcclxuLy8gfVxyXG5cclxuLy8gLnBhZ2luYXRpb24gYS5kaXNhYmxlZCB7XHJcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IC8qIERpc2FiaWxpdGEgaSBjbGljayAqL1xyXG4vLyAgIGN1cnNvcjogZGVmYXVsdDsgLyogQ2FtYmlhIGlsIGN1cnNvcmUgcGVyIGluZGljYXJlIGNoZSBpbCBsaW5rIMOoIGRpc2FiaWxpdGF0byAqL1xyXG4vLyAgIGNvbG9yOiAjZGRkOyAvKiBDb2xvcmUgZ3JpZ2lvIHBlciBpbmRpY2FyZSBkaXNhYmlsaXRhdG8gKi9cclxuLy8gfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZHgge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5uZXctaWNvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHpvb206IDEuMjtcbn1cblxuLnRvcC1ib3JkZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZjZkZDU7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5tYXQtY2FyZC10aXRsZS1tb2Qge1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA2cHg7XG4gIHJpZ2h0OiAtMTlweDtcbn1cblxuLm1hdC1jYXJkLWljby1tb2Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNHB4O1xuICByaWdodDogNHB4O1xuICB6b29tOiAxLjI7XG59XG5cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuLnJvdGF0aW9uIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZS1zLWxvYWRlcjtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICB6b29tOiAxLjI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyOHB4O1xufVxuXG4ucm90YXRpb24tZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnJpY2VyY2Ege1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAycHg7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5maWx0ZXItaWNvIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDVweDtcbiAgem9vbTogMS4yO1xuICBjb2xvcjogIzgzODM4Mztcbn1cblxuLm1hdC1wYWdpbmF0b3ItZW1wdHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uc2VjdGlvbi1maWx0cm8tYXR0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNnB4O1xufVxuXG4uYm94LWZpbHRybyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgcGFkZGluZzogNXB4IDMwcHggNXB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg1O1xuICBjb2xvcjogd2hpdGU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAyMnB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjUzKTtcbn1cblxuLmNsZWFyLWZpbHRlci1pY28ge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHpvb206IDAuODtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jbGVhci1maWx0ZXItaWNvOmhvdmVyIHtcbiAgY29sb3I6ICNlM2UzZTM7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlLXMtbG9hZGVyIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbn0iXX0= */"] });


/***/ }),

/***/ 56091:
/*!*********************************************************!*\
  !*** ./src/app/routes/modellazione/aree/aree.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreeModule": () => (/* binding */ AreeModule)
/* harmony export */ });
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 44466);
/* harmony import */ var _aree_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aree-routing.module */ 99435);
/* harmony import */ var _aree_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aree.component */ 81974);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




// import { AreeNuovaComponent } from './aree-nuova/aree-nuova.component';
const COMPONENTS = [
    _aree_component__WEBPACK_IMPORTED_MODULE_2__.AreeComponent
];
const COMPONENTS_DYNAMIC = [];
class AreeModule {
}
AreeModule.ɵfac = function AreeModule_Factory(t) { return new (t || AreeModule)(); };
AreeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AreeModule });
AreeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _aree_routing_module__WEBPACK_IMPORTED_MODULE_1__.AreeRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AreeModule, { declarations: [_aree_component__WEBPACK_IMPORTED_MODULE_2__.AreeComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _aree_routing_module__WEBPACK_IMPORTED_MODULE_1__.AreeRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_routes_modellazione_aree_aree_module_ts.js.map