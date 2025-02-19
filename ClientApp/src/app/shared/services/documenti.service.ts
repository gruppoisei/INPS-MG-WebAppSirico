import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { HttpResponse } from '@microsoft/signalr';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DocumentiService {
  private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Documenti/';
  private mgUrl = environment.MG_URL + 'Documenti/';

  constructor(private http: HttpClient) {}

  verificaAllegato(file: File): Observable<any> {

    // console.log('environment.MG_URL: ' + environment.MG_URL)
    console.log('apiUrl: ' + this.apiUrl)
    console.log('mgUrl: ' + this.mgUrl)

    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.mgUrl}VerificaAggiungiAllegato`, formData);
    // return this.http.post<any>(`${this.apiUrl}VerificaAggiungiAllegato`, formData);
  }

  findAllegatoSegnalazione(idSegnalazione: number, ruolo: string, tipoSegnalazione: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get<{esito: boolean}>(`${this.mgUrl}FindAllegatoSegnalazione/${idSegnalazione}`, { params })
    // return this.http.get<{esito: boolean}>(`${this.apiUrl}FindAllegatoSegnalazione/${idSegnalazione}`, { params })
  }

  findAllegatiAspetti(idSegnalazione: number, idAspetti: number[] ,tipoSegnalazione: string, ruolo: string): Observable<{ idAspetto: number, esito: boolean }[]>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);

    idAspetti.forEach(id => {
      params = params.append('idAspetti', id.toString());
    });
    return this.http.get<{ idAspetto: number, esito: boolean }[]>(`${this.mgUrl}FindAllegatoAspetti`, { params });
    // return this.http.get<{ idAspetto: number, esito: boolean }[]>(`${this.apiUrl}FindAllegatoAspetti`, { params });
  }

  getFileAspetti(idSegnalazione: number, idAspetto: number, tipoSegnalazione: string, ruolo: string){
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione.toString())
    .set('idAspetto', idAspetto.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get(`${this.mgUrl}GetFileAspettoById`, {responseType: 'blob' , params, observe: 'response'});
    // return this.http.get(`${this.apiUrl}GetFileAspettoById`, {responseType: 'blob' , params, observe: 'response'});
  }

  getFileSegnalazione(idSegnalazione: number, tipoSegnalazione: string, ruolo: string){
    let params = new HttpParams()
    .set('id', idSegnalazione.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get(`${this.mgUrl}GetFileSegnalazioneById`, {responseType: 'blob', params, observe: 'response'})
    // return this.http.get(`${this.apiUrl}GetFileSegnalazioneById`, {responseType: 'blob', params, observe: 'response'})
  }

  deleteFileSegnalazione(idSegnalazione: number, fileName: string, tipoSegnalazione: string, ruolo: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('fileName', fileName)
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo)
    return this.http.delete<{esito: boolean}>(`${this.mgUrl}DeleteFileSegnalazione`, {params})
    // return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteFileSegnalazione`, {params})
  }

  deleteFileAspetto(idSegnalazione: number, idAspetto: number, fileName: string, tipoSegnalazione: string, ruolo: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('idAspetto', idAspetto)
    .set('fileName', fileName)
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.delete<{esito: boolean}>(`${this.mgUrl}DeleteFileAspetto`, {params})
    // return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteFileAspetto`, {params})
  }

  deleteAllFileSegnalazione(idSegnalazione: number, tipoSegnalazione: string):  Observable<{esito: boolean}>
  {
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('tipoSegnalazione', tipoSegnalazione)
    return this.http.delete<{esito: boolean}>(`${this.mgUrl}DeleteAllFileSegnalazione`, {params})
    // return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteAllFileSegnalazione`, {params})
  }

  allegaFileSegnalazione(idSegnalazione: number, ruolo: string, tipoSegnalazione: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.mgUrl}AllegaFileSegnalazione/${idSegnalazione}/${ruolo}/${tipoSegnalazione}`, formData,
    // return this.http.post(`${this.apiUrl}AllegaFileSegnalazione/${idSegnalazione}/${ruolo}/${tipoSegnalazione}`, formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  allegaFileAspetto(idSegnalazione: number, idAspetto: number | null, tipoSegnalazione: string, ruolo: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.mgUrl}AleggaFileAspetto/${idSegnalazione}/${idAspetto}/${tipoSegnalazione}/${ruolo}`, formData,
    // return this.http.post<any>(`${this.apiUrl}AleggaFileAspetto/${idSegnalazione}/${idAspetto}/${tipoSegnalazione}/${ruolo}`, formData,
      {
        reportProgress: true,
        observe: 'events'
      });
  }

  findAllegatoAspetto(idSegnalazione: number, idAspetto: number, ruolo: string, tipoSegnalazione: string): Observable <{esito: boolean}>{

    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('idAspetto', idAspetto)
    .set('ruolo', ruolo)
    .set('tipoSegnalazione', tipoSegnalazione)
    return this.http.get<{esito: boolean}>(`${this.mgUrl}FindAllegatoAspetto`, { params })
    // return this.http.get<{esito: boolean}>(`${this.apiUrl}FindAllegatoAspetto`, { params })
  }

  salvaAllegatiSegnalazioneProdotto(allegatiSegnalazioneProdotto: any): Observable<any> {
    console.log(allegatiSegnalazioneProdotto);
    return this.http.post<any>(
      `${this.mgUrl}salvaAllegatiSegnalazioneProdotto`,
      allegatiSegnalazioneProdotto
    );
  }

  salvaAllegatiSegnalazioneContenzioso(allegatiSegnalazioneContenzioso: any): Observable<any> {
    console.log('allegati SegnalazioneContenzioso: ' + allegatiSegnalazioneContenzioso);
    return this.http.post<any>(
      `${this.mgUrl}salvaAllegatiSegnalazioneContenzioso`,
      allegatiSegnalazioneContenzioso
    );
  }
}
