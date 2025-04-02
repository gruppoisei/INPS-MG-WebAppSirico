import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComunicazioniService {
  constructor(private http: HttpClient) {}

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Comunicazioni/';
  private mgUrl = environment.MG_URL + 'ComunicazioniGateway/';

  newGetComunicazioneById(id: number): Observable<Comunicazioni>{
    return this.http.get<Comunicazioni>(`${this.mgUrl}GetComunicazioniById/${id}`)
  }

  getTipoComunicazioneById(id: number): Observable<any>{
    return this.http.get<any>(`${this.mgUrl}GetTipoComunicazioneById/${id}`)
  }

  newInserisciComunicazione(comunicazione: Comunicazioni): Observable<{idComunicazione: number}> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comunicazione);
    return this.http.post<{ idComunicazione: number }>(`${this.mgUrl}InsertComunicazione`, body, { headers });
  }

  newContaComunicazioni(searchText: string) {
    let params = new HttpParams();
    params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<{ count: number }>(`${this.mgUrl}GetCountVistaComunicazioniTipoComunicazioni`, { params });
  }

  newGetComunicazioniConPaginazione(pageSize: number, orderBy: string, pageNumber: number, searchText: string) {
    let params = new HttpParams()
      .set('dimensione', pageSize.toString())
      .set('pagina', pageNumber.toString());
      params = orderBy == null ? params : params.set('ordine', orderBy);
      params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<any[]>(`${this.mgUrl}GetComunicazioniPaginazione`, { params });
  }

  newDeleteComunicazione(id: number){
    return this.http.delete<any>(`${this.mgUrl}EliminaComunicazione/${id}`);
  }

  newAggiornaComunicazione(comunicazione: Comunicazioni): Observable<{idComunicazione: number}>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comunicazione);
    return this.http.put<{ idComunicazione: number }>(`${this.mgUrl}UpdateComunicazione`, body, { headers });
  }

  newSaveComunicazioneLettaChecked(comunicazioneLetta : ComunicazioneLetta): Observable<ComunicazioneLetta>{
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(comunicazioneLetta);
    return this.http.post<ComunicazioneLetta>(`${this.mgUrl}InsertComunicazioneLetta`, body, {headers})
  }

  newGetComunicazioniLetteByMatricola(matricola: string): Observable<any[]>{
    return this.http.get<any[]>(`${this.mgUrl}GetComunicazioniLetteByMatricola/${matricola}`)
  }
}
