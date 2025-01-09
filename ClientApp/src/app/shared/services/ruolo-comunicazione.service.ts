import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import { RuoloComunicazione } from '@shared/models/ruolo-comunicazione.model';
import { Observable } from 'rxjs';
import { RuoliComunicazione } from '@shared/interfaces/ruoli-comunicazioni';

@Injectable({
  providedIn: 'root'
})
export class RuoloComunicazioneService {

  private apiUrl = environment.API_URI + 'RuoliComunicazioni/';

  constructor(private http: HttpClient) { }

  /* inserisciRuoloComunicazione(ruoloComunic: RuoloComunicazione): Observable<RuoloComunicazione> {
    //console.log(ruoloComunic);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify(ruoloComunic);
    return this.http.post<RuoloComunicazione>(environment.API_URI+'ruoli-comunicazione', body, {headers});
  }

  rimuoviRuoloComunicazione(id: number): Observable<RuoloComunicazione> {
    //console.log(ruoloComunic);
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return this.http.post<RuoloComunicazione>(environment.API_URI+'ruoli-comunicazione/'+id as string + '/rimuovi', body, {headers});
  }

  deleteRuoliComunicazione(idComunicazione: number): Observable<number> {
    //console.log(ruoloComunic);
    alert('dentro delete');
    const headers = {'content-type': 'application/json'};
    // const stringa = '{\"idComunicazione\":' + idComunicazione as string +'}';
    // alert(stringa);
    const body=JSON.stringify(idComunicazione);
    alert(body);
    return this.http.post<number>(environment.API_URI+'ruoli-comunicazione/rimuovi-ruoli-comunicazione/', body, {headers});
  } */

  /* Nuove chiamate per il backend in C# */

  newInserisciRuoloComunicazione(ruoloCom: any[]): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(ruoloCom);
    return this.http.post<any>(`${this.apiUrl}InsertRuoliComunicazioni`, body, { headers });
  }

  newGetRuoliByComunicazioneId(id: number) : Observable<RuoliComunicazioni[]>{
    return this.http.get<RuoliComunicazioni[]>(`${this.apiUrl}GetRuoliByComunicazioneId/${id}`)
  }

  newDeleteRuoliComunicazioni(ruoloCom: any[]): Observable<any>{
    const headers = { 'content-type': 'application/json' };
    const options = {
      headers: new HttpHeaders(headers),
      body: ruoloCom // Passa l'array direttamente nel campo 'body'
    };
    return this.http.delete<any>(`${this.apiUrl}EliminaRuoliComunicazione`, options)
  }

  newGetComunicazioniFilterByRuoloAndMatricola(ruolo: string, matricola: string): Observable<RuoliComunicazione[]>{
    const params = new HttpParams()
    .set('ruoli', ruolo)
    .set('matricola', matricola)

    return this.http.get<RuoliComunicazione[]>(`${this.apiUrl}GetComunicazioniNonLetteByRuoloAndMatricola`, { params })
  }
}

