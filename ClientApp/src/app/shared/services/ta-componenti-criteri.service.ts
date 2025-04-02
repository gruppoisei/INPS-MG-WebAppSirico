/* eslint-disable max-len */
/* eslint-disable quote-props */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { TaComponentiCriteri } from '@shared/models/ta-componenti-criteri.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaComponentiCriteriService {

  constructor(private http: HttpClient) {}

  idAttivo = 0;


 /*  getTaComponentiCriteri(): Observable<TaComponentiCriteri[]> {
    return this.http.get<TaComponentiCriteri[]>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri');
  }

  getTaComponentiCriteriParam(dim: string, ordine: string,pagina: number): Observable<TaComponentiCriteri[]> {
    return this.http.get<TaComponentiCriteri[]>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri?dimensione='+dim+'&ordine='+ordine+'&pagina='+pagina);
  }


  getTaComponentiCriteriId(id: number): Observable<TaComponentiCriteri[]> {
    return this.http.get<TaComponentiCriteri[]>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri'+'/'+id);
  }

  //save criteri
  // eslint-disable-next-line max-len
  saveTaComponentiCriteri(idCriterio: number, idComponente: number, peso: number, descrizione: string): void {
    this.http.post<string>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri', {
      'criterio': {
        'id': idCriterio
      },
      // eslint-disable-next-line object-shorthand
      'peso':peso,
      // eslint-disable-next-line object-shorthand
      'descrizione':descrizione,
      'taComponente': {
        'id': idComponente
      }
    }).subscribe();
  }

  conta(): Observable<number> {
    return this.http.get<number>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri/conta');
  }

  eliminabile(): Observable<boolean> {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<boolean>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri/'+this.idAttivo + '/verificaRimuovi', body, {headers});
  }

  elimina(): Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<any>(environment.MS_SIRICOAPI + environment.API_URI+'ta-componenti-criteri/'+this.idAttivo + '/rimuovi', body, {headers});
  } */


}

