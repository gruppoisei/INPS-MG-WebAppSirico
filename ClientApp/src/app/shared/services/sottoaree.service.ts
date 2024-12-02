/* eslint-disable quote-props */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Sottoarea } from '@shared/models/sottoarea.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SottoareeService {

  constructor(private http: HttpClient) { }

  getSottoAree(id: number, soloConTipLav: boolean): Observable<Sottoarea[]> {
    return this.http.get<Sottoarea[]>(environment.API_URI+'aree/'+id+'/sottoaree?soloTipLav='+soloConTipLav);
  }

  getSottoArea(id: number): Observable<Sottoarea> {
    return this.http.get<Sottoarea>(environment.API_URI+'sottoaree/'+id as string);
  }

  getSottoAreeAll(soloConTipLav = false): Observable<Sottoarea[]> {
    return this.http.get<Sottoarea[]>(environment.API_URI+'sottoaree?soloConTipLav='+soloConTipLav);
  }

  getSottoareeConPaginazione(dimensione: number, ordine: string, pagina: number): Observable<Sottoarea[]> {
    return this.http.get<Sottoarea[]>(environment.API_URI+'sottoaree?dimensione='+dimensione as string+'&ordine='+ordine+'&pagina='+pagina as string);
  }

  contaSottoaree(): Observable<number> {
    return this.http.get<number>(environment.API_URI+'sottoaree/conta');
  }

  inserisciSottoArea(sottoarea: Sottoarea): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(sottoarea);
    return (this.http.post(environment.API_URI+'sottoaree', body, {headers}));
  }

  aggiornaSottoArea(sottoarea: Sottoarea): Observable<any> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(sottoarea);
    //console.log('body: ', body);
    return (this.http.post(environment.API_URI+'sottoaree'  + '/aggiorna', body, {headers}));
  }

  verificaSottoArea(id: number): Observable<boolean> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<boolean>(environment.API_URI+'sottoaree/'+id as string + '/verificaRimuovi', body, {headers});
  }

  deleteSottoArea(id: number): Observable<Sottoarea> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<Sottoarea>(environment.API_URI+'sottoaree/'+id as string + '/rimuovi', body, {headers});
  } 

}
