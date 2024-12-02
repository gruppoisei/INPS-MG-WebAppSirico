import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Prodotto } from '@shared/models/prodotto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  private apiUrl = environment.API_URI;
  constructor(private http: HttpClient) { }

  // getProdotti(id: number): Observable<Prodotto[]> {
  //   return this.http.get<Prodotto[]>(environment.API_URI+'sottoaree/'+id+'/prodotti');
  // }

  getAspettiEDescrizioni(tipo: string): Observable<any[]> {

    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch(tipo) {

      case prodotto: {
        return this.http.get<any[]>(this.apiUrl+'AspettiProdotti/getAll');
        // break;
      }

      case contenzioso: {
        return this.http.get<any[]>(this.apiUrl + 'AspettiContenziosi/getAll');
        // break;
      }
    }
    return this.http.get<any[]>(this.apiUrl+'AspettiProdotti/getAll');
  }

  // getAspettiEDescrizioniProdotti(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl+'getAll');
  // }

  /*  getProdotti(id: number, soloConTipLav: boolean): Observable<Prodotto[]> {
    //console.log('soloConTipLav ' + soloConTipLav);
    return this.http.get<Prodotto[]>(environment.API_URI+'sottoaree/'+id+'/prodotti?soloConTipLav='+soloConTipLav);
  }

   getProdottiAll(soloConTipLav: boolean): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(environment.API_URI+'prodotti?soloConTipLav='+soloConTipLav);
  }

  getProdottiConPaginazione(dimensione: number, ordine: string, pagina: number): Observable<Prodotto[]> {
    return this.http.get<Prodotto[]>(environment.API_URI+'prodotti?dimensione='+dimensione as string+'&ordine='+ordine+'&pagina='+pagina as string);
  }

  contaProdotti(): Observable<number> {
    return this.http.get<number>(environment.API_URI+'prodotti/conta');
  }

  getProdotto(id: number): Observable<Prodotto> {
    return this.http.get<Prodotto>(environment.API_URI+'prodotti/'+id);
  }

  inserisciProdotto(prodotto: Prodotto): Observable<Prodotto> {
    //console.log(prodotto);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(prodotto);
    return this.http.post<Prodotto>(environment.API_URI+'prodotti', body, {headers});
  }

  aggiornaProdotto(prodotto: Prodotto): Observable<Prodotto> {
    //console.log(prodotto);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(prodotto);
    //console.log('body: ', body);
    return this.http.post<Prodotto>(environment.API_URI+'prodotti'  + '/aggiorna', body, {headers});
  }

  verificaProdotto(id: number): Observable<boolean> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<boolean>(environment.API_URI+'prodotti/'+id as string + '/verificaRimuovi', body, {headers});
  }

  deleteProdotto(id: number): Observable<number> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<number>(environment.API_URI+'prodotti/'+id as string + '/rimuovi', body, {headers});
  } */

}
