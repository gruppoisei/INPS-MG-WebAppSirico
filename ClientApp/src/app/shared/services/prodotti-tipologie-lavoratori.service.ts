import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { ProdottiTipologieLavoratori } from '@shared/models/prodotti-tipologie-lavoratori.model';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdottiTipologieLavoratoriService {

  constructor(private http: HttpClient) { }

 /*  getProdottiTipologieLavoratoriAll(): Observable<ProdottiTipologieLavoratori[]> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.get<ProdottiTipologieLavoratori[]>(environment.MS_SIRICOAPI + environment.API_URI+'prodotti-tipologie-lavoratori');
  }

  inserisciProdottoTipologiaLavoratore(prodottoTiplav: ProdottiTipologieLavoratori): Observable<ProdottiTipologieLavoratori> {
    //console.log(prodottoTiplav);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(prodottoTiplav);
    return this.http.post<ProdottiTipologieLavoratori>(environment.MS_SIRICOAPI + environment.API_URI+'prodotti-tipologie-lavoratori', body, {headers});
  }

  rimuoviProdottoTipologiaLavoratore(id: number): Observable<ProdottiTipologieLavoratori> {
    //console.log(ruoloComunic);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<ProdottiTipologieLavoratori>(environment.MS_SIRICOAPI + environment.API_URI+'prodotti-tipologie-lavoratori/'+id as string + '/rimuovi', body, {headers});
  }

  // estrae le tipologie di lavoratori associate ad un prodotto
  getTipologieLavoratori(id: number): Observable<ProdottiTipologieLavoratori[]> {
    //console.log('leggo le tipologie lavoratori associate al prodotto per l id:', id)
    //catchError(this.handleError)
    return this.http.get<ProdottiTipologieLavoratori[]>(environment.MS_SIRICOAPI + environment.API_URI+'prodotti-tipologie-lavoratori/'+id+'/prodotti');
  }

  rimuoviProdottoTipologieLavoratori(idProdotto: number): Observable<ProdottiTipologieLavoratori> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<ProdottiTipologieLavoratori>(environment.MS_SIRICOAPI + environment.API_URI+'prodotti-tipologie-lavoratori/'+idProdotto as string + '/prodotto/rimuovi', body, {headers});
  } */
}
