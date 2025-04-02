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

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'RuoliComunicazioni/';
  private mgUrl = environment.MG_URL + 'RuoliComunicazioniGateway/';

  constructor(private http: HttpClient) { }

  /* Nuove chiamate per il backend in C# */

  newInserisciRuoloComunicazione(ruoloCom: any[]): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(ruoloCom);
    return this.http.post<any>(`${this.mgUrl}InsertRuoliComunicazioni`, body, { headers });
  }

  newGetRuoliByComunicazioneId(id: number) : Observable<RuoliComunicazioni[]>{
    return this.http.get<RuoliComunicazioni[]>(`${this.mgUrl}GetRuoliByComunicazioneId/${id}`)
  }

  newDeleteRuoliComunicazioni(ruoloCom: any[]): Observable<any>{
    const headers = { 'content-type': 'application/json' };
    const options = {
      headers: new HttpHeaders(headers),
      body: ruoloCom // Passa l'array direttamente nel campo 'body'
    };
    return this.http.delete<any>(`${this.mgUrl}EliminaRuoliComunicazione`, options)
  }

  newGetComunicazioniFilterByRuoloAndMatricola(ruolo: string, matricola: string): Observable<RuoliComunicazione[]>{
    const params = new HttpParams()
    .set('ruoli', ruolo ?? '')  // Default a stringa vuota se null
    .set('matricola', matricola ?? '');

    return this.http.get<RuoliComunicazione[]>(`${this.mgUrl}GetComunicazioniNonLetteByRuoloAndMatricola`, { params })
  }
}
