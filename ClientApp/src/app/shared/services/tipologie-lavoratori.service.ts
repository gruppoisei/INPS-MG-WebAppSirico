import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { TipologiaLavoratore } from '@shared/models/tipologia-lavoratore.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipologieLavoratoriService {

  constructor(private http: HttpClient) { }

  /* getTipologieLavoratoriAll(): Observable<TipologiaLavoratore[]> {
    return this.http.get<TipologiaLavoratore[]>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori');
  }

  getTipologieLavoratoriConPaginazione(dimensione: number, ordine: string, pagina: number): Observable<TipologiaLavoratore[]> {
    return this.http.get<TipologiaLavoratore[]>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori?dimensione='+dimensione as string+'&ordine='+ordine+'&pagina='+pagina as string);
  }

  contaTipologieLavoratori(): Observable<number> {
    return this.http.get<number>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori/conta');
  }

  getTipologiaLavoratore(id: number): Observable<TipologiaLavoratore> {
    return this.http.get<TipologiaLavoratore>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori/'+id);
  }

  verificaTipologiaLavoratore(id: number): Observable<boolean> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<boolean>(environment.MS_SIRICOAPI + environment.API_URI+ 'tipologie-lavoratori/'+id as string + '/verificaRimuovi', body, {headers});
  }

  inserisciTipologiaLavoratore(tipLav: TipologiaLavoratore): Observable<TipologiaLavoratore> {
    //console.log(tipLav);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(tipLav);
    return this.http.post<TipologiaLavoratore>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori', body, {headers});
  }

  aggiornaTipologiaLavoratore(tipLav: TipologiaLavoratore): Observable<TipologiaLavoratore> {
    //console.log(TipologiaLavoratore);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(tipLav);
    console.log('body: ', body);
    return this.http.post<TipologiaLavoratore>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori' + '/aggiorna', body, {headers});
  }

  deleteTipologiaLavoratore(id: number): Observable<TipologiaLavoratore> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<TipologiaLavoratore>(environment.MS_SIRICOAPI + environment.API_URI+'tipologie-lavoratori/'+id as string + '/rimuovi', body, {headers});
  } */
}
