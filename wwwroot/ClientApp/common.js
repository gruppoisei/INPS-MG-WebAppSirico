"use strict";
(self["webpackChunksirico"] = self["webpackChunksirico"] || []).push([["common"],{

/***/ 17903:
/*!*********************************************!*\
  !*** ./src/app/shared/models/area.model.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Area": () => (/* binding */ Area)
/* harmony export */ });
class Area {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ }),

/***/ 65908:
/*!**********************************************************************!*\
  !*** ./src/app/shared/models/prodotti-tipologie-lavoratori.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdottiTipologieLavoratori": () => (/* binding */ ProdottiTipologieLavoratori)
/* harmony export */ });
/* harmony import */ var _prodotto_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prodotto.model */ 45282);
/* harmony import */ var _tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tipologia-lavoratore.model */ 31591);


class ProdottiTipologieLavoratori {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.prodotto = new _prodotto_model__WEBPACK_IMPORTED_MODULE_0__.Prodotto();
        this.tipologiaLavoratore = new _tipologia_lavoratore_model__WEBPACK_IMPORTED_MODULE_1__.TipologiaLavoratore();
    }
}


/***/ }),

/***/ 45282:
/*!*************************************************!*\
  !*** ./src/app/shared/models/prodotto.model.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Prodotto": () => (/* binding */ Prodotto)
/* harmony export */ });
/* harmony import */ var _sottoarea_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sottoarea.model */ 64842);

class Prodotto {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.ordine = 0;
        this.nome = '';
        this.sottoarea = new _sottoarea_model__WEBPACK_IMPORTED_MODULE_0__.Sottoarea();
    }
}


/***/ }),

/***/ 64842:
/*!**************************************************!*\
  !*** ./src/app/shared/models/sottoarea.model.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sottoarea": () => (/* binding */ Sottoarea)
/* harmony export */ });
/* harmony import */ var _area_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.model */ 17903);

class Sottoarea {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.ordine = 0;
        this.nome = '';
        this.area = new _area_model__WEBPACK_IMPORTED_MODULE_0__.Area();
    }
}


/***/ }),

/***/ 31591:
/*!*************************************************************!*\
  !*** ./src/app/shared/models/tipologia-lavoratore.model.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TipologiaLavoratore": () => (/* binding */ TipologiaLavoratore)
/* harmony export */ });
class TipologiaLavoratore {
    constructor() {
        this.id = 0;
        this.creato = new Date();
        this.aggiornato = new Date();
        this.nome = '';
    }
}


/***/ }),

/***/ 25821:
/*!********************************************************!*\
  !*** ./src/app/shared/services/areeservice.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aree": () => (/* binding */ Aree)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class Aree {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'AreaProdotti/';
    }
    newDeleteAreeProdotti(id) {
        return this.http.delete(`${this.apiUrl}EliminaAreeProdotti/${id}`);
    }
    newSalvaAreeProdotti(areaProdotto) {
        const headers = { 'content-type': 'application/json' };
        return this.http.post(`${this.apiUrl}InsertAreeProdotti`, areaProdotto, { headers });
    }
    newContaAreeProdotto(searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}GetCountVistaAreeProdotti`, { params });
    }
    newGetAreeConPaginazione(pageSize, orderBy, pageNumber, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('dimensione', pageSize.toString())
            .set('pagina', pageNumber.toString());
        params = orderBy == null ? params : params.set('ordine', orderBy);
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}GetAreeProdottiPaginazione`, { params });
    }
    newGetAreaProdotto(id) {
        return this.http.get(`${this.apiUrl}GetAreeProdottiById/${id}`);
    }
    newVerificaAreaProdotto(id) {
        return this.http.get(`${this.apiUrl}VerificaRimuovi/${id}`);
    }
    newAggiornaAreeProdotto(areaProdotto) {
        return this.http.post(`${this.apiUrl}UpdateAreeProdotto`, areaProdotto);
    }
    newGetAllByIdSettore(idSettore) {
        return this.http.get(`${this.apiUrl}getAllByIdSettore/${idSettore}`);
    }
    getAllAreaProdotto() {
        return this.http.get(`${this.apiUrl}getAllAreeProdotti`);
    }
    newGetAllByidArea(idSettore) {
        return this.http.get(`${this.apiUrl}GetAreeProdottiById/${idSettore}`);
    }
}
Aree.ɵfac = function Aree_Factory(t) { return new (t || Aree)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
Aree.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Aree, factory: Aree.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7844:
/*!*****************************************************!*\
  !*** ./src/app/shared/services/prodotti.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdottiService": () => (/* binding */ ProdottiService)
/* harmony export */ });
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);




class ProdottiService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI;
    }
    // getProdotti(id: number): Observable<Prodotto[]> {
    //   return this.http.get<Prodotto[]>(environment.API_URI+'sottoaree/'+id+'/prodotti');
    // }
    getAspettiEDescrizioni(tipo) {
        const prodotto = 'Prodotto';
        const contenzioso = 'Contenzioso';
        switch (tipo) {
            case prodotto: {
                return this.http.get(this.apiUrl + 'AspettiProdotti/getAll');
                // break;
            }
            case contenzioso: {
                return this.http.get(this.apiUrl + 'AspettiContenziosi/getAll');
                // break;
            }
        }
        return this.http.get(this.apiUrl + 'AspettiProdotti/getAll');
    }
}
ProdottiService.ɵfac = function ProdottiService_Factory(t) { return new (t || ProdottiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
ProdottiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ProdottiService, factory: ProdottiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 10828:
/*!************************************************************!*\
  !*** ./src/app/shared/services/settore-materia.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettoreMateriaService": () => (/* binding */ SettoreMateriaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class SettoreMateriaService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'SettoreMaterie';
    }
    getAllSettoriMaterie() {
        return this.http.get(`${this.apiUrl}/getAllSettoriMaterie`);
    }
    getSettoriConAreeProdotti() {
        return this.http.get(`${this.apiUrl}/getSettoriConAreaCollegata`);
    }
    getSettoriMaterieById(id) {
        return this.http.get(`${this.apiUrl}/getSettoriMaterieById/${id}`);
    }
    /*   getSettoriMaterieByNome(nome: string): Observable<Settore[]> {
        return this.http.get<Settore[]>(`${this.apiUrl}/getSettoriMaterieByNome/${nome}`);
      } */
    inserisciSettore(settoreMaterie) {
        return this.http.post(`${this.apiUrl}/aggiornaSettoriMaterie`, settoreMaterie);
    }
    deleteSettoriMaterie(id) {
        return this.http.delete(`${this.apiUrl}/eliminaSettoriMaterie/${id}`);
    }
    contaSettoriMaterie(searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}/countSettoriMaterie`, { params });
    }
    newGetSettoriConPaginazione(pageSize, orderBy, pageNumber, searchText) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('dimensione', pageSize.toString())
            .set('pagina', pageNumber.toString());
        params = orderBy == null ? params : params.set('ordine', orderBy);
        params = searchText == null ? params : params.set('searchText', searchText);
        return this.http.get(`${this.apiUrl}/GetSettoriMateriePaginazione`, { params });
    }
    getFilteredSettoriMaterie(pageSize, orderBy, pageNumber) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set('pageSize', pageSize.toString())
            .set('pageNumber', pageNumber.toString());
        params = orderBy == null ? params : params.set('orderBy', orderBy);
        return this.http.get(`${this.apiUrl}/getFiltrataBy`, { params });
    }
    insertSettoreMateria(settoreMaterie) {
        return this.http.post(`${this.apiUrl}/InsertSettoreMateria`, settoreMaterie);
    }
    verificaRimuoviSettoreMateria(id) {
        return this.http.post(`${this.apiUrl}/VerificaRimuoviSettoreMateria/${id}`, {});
    }
}
SettoreMateriaService.ɵfac = function SettoreMateriaService_Factory(t) { return new (t || SettoreMateriaService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SettoreMateriaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SettoreMateriaService, factory: SettoreMateriaService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8091:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/territorio.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerritorioService": () => (/* binding */ TerritorioService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment.prod */ 89019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);






class TerritorioService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MS_SIRICOAPI + _env_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.API_URI + 'Territorio/';
        this.listaCodiciProvinciali = [];
        this.listaCodiciRegionali = [];
    }
    getAllSediSorted() {
        return this.http
            .get(`${this.apiUrl}getAllSediSorted`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
    }
    getSediSortedRegione(regCodSede) {
        return this.http
            .get(`${this.apiUrl}getSediSortedRegione/${regCodSede}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
    }
    getSediSortedProvincia(provCodSede) {
        return this.http
            .get(`${this.apiUrl}getSediSortedProvincia/${provCodSede}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
    }
    getSedi(role, codiceSede, pagina, ruoloRegionale, ruoloProvinciale) {
        let observables = [];
        this.listaCodiciProvinciali = [];
        this.listaCodiciRegionali = [];
        for (let i = 0; i < codiceSede.length; i++) {
            if (codiceSede[i].role == ruoloRegionale) {
                this.listaCodiciRegionali.push(codiceSede[i].sedeCode);
            }
            if (codiceSede[i].role == ruoloProvinciale) {
                this.listaCodiciProvinciali.push(codiceSede[i].sedeCode);
            }
        }
        const fetchSediProv = (method) => {
            var _a;
            return ((_a = this.listaCodiciProvinciali) !== null && _a !== void 0 ? _a : []).map(codice => method(codice).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]))));
        };
        const fetchSediReg = (method) => {
            var _a;
            return ((_a = this.listaCodiciRegionali) !== null && _a !== void 0 ? _a : []).map(codice => method(codice).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([]))));
        };
        if (role.split(';').map(ruolo => ruolo.trim()).includes("P12689")) {
            // if ( (role!.split(';').map(ruolo => ruolo.trim()).includes("P12690")) ||
            //       (role!.split(';').map(ruolo => ruolo.trim()).includes("P12689")) ) {
            observables = [this.getAllSediSorted().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])))];
        }
        else if (role == "P12800") {
            observables = [];
        }
        else {
            // nel caso di inserimento devo sempre mappare le sedi, l'utente amministrativo non incide
            // nel caso di gestione devo mappare le sedi solo se il (multi)ruolo non contiene l'utente amministrativo
            if (pagina == 'Gestione' && role.includes('P12690')) {
                observables = [this.getAllSediSorted().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([])))];
            }
            else {
                if (this.listaCodiciRegionali.length != 0) {
                    observables = fetchSediReg(codice => this.getSediSortedRegione(codice));
                }
                if (this.listaCodiciProvinciali.length != 0) {
                    observables.push(...fetchSediProv(codice => this.getSediSortedProvincia(codice)));
                }
            }
        }
        // Inserisci un elemento vuoto tra le chiamate per leggibilità
        const spacedObservables = [];
        for (let i = 0; i < observables.length; i++) {
            spacedObservables.push(observables[i]);
            if (i < observables.length - 1) {
                spacedObservables.push((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)([{ id: null, nome: '' }]));
            }
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)(spacedObservables).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(results => results.flat()));
    }
    getRegioni() {
        let url = this.apiUrl + 'getAllRegioniSorted';
        return this.http.get(url);
    }
    getProvince() {
        let url = this.apiUrl + 'getAllProvinceSorted';
        return this.http.get(url);
    }
    getAllSediByIdRegione(codiceRegione) {
        return this.http.get(`${this.apiUrl}getSediSortedRegione/${codiceRegione}`);
    }
    getAllProvinceByIdRegione(codiceRegione) {
        return this.http.get(`${this.apiUrl}getProvinceRegionebyRegCodSede/${codiceRegione}`);
    }
    verificaSediIntegrazioneRegionale(descSedeSegnalazione, sediUtente) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpParams()
            .set('descSedeSegnalazione', descSedeSegnalazione);
        sediUtente.forEach(sedi => {
            params = params.append('sediUtente', sedi);
        });
        return this.http.get(`${this.apiUrl}VerificaSediIntegrazioneRegionale`, { params });
    }
    getRegioniByIdSede(codiceSede) {
        return this.http.get(`${this.apiUrl}getRegioneByCodSede/${codiceSede}`);
    }
}
TerritorioService.ɵfac = function TerritorioService_Factory(t) { return new (t || TerritorioService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
TerritorioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: TerritorioService, factory: TerritorioService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map