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

  constructor(private http: HttpClient) {}

  verificaAllegato(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}VerificaAggiungiAllegato`, formData);
  }

  findAllegatoSegnalazione(idSegnalazione: number, ruolo: string, tipoSegnalazione: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get<{esito: boolean}>(`${this.apiUrl}FindAllegatoSegnalazione/${idSegnalazione}`, { params })
  }

  findAllegatiAspetti(idSegnalazione: number, idAspetti: number[] ,tipoSegnalazione: string, ruolo: string): Observable<{ idAspetto: number, esito: boolean }[]>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);

    idAspetti.forEach(id => {
      params = params.append('idAspetti', id.toString());
    });
    return this.http.get<{ idAspetto: number, esito: boolean }[]>(`${this.apiUrl}FindAllegatoAspetti`, { params });
  }

  getFileAspetti(idSegnalazione: number, idAspetto: number, tipoSegnalazione: string, ruolo: string){
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione.toString())
    .set('idAspetto', idAspetto.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get(`${this.apiUrl}GetFileAspettoById`, {responseType: 'blob' , params, observe: 'response'});
  }

  getFileSegnalazione(idSegnalazione: number, tipoSegnalazione: string, ruolo: string){
    let params = new HttpParams()
    .set('id', idSegnalazione.toString())
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.get(`${this.apiUrl}GetFileSegnalazioneById`, {responseType: 'blob', params, observe: 'response'})
  }

  deleteFileSegnalazione(idSegnalazione: number, fileName: string, tipoSegnalazione: string, ruolo: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('fileName', fileName)
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo)
    return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteFileSegnalazione`, {params})
  }

  deleteFileAspetto(idSegnalazione: number, idAspetto: number, fileName: string, tipoSegnalazione: string, ruolo: string): Observable<{esito: boolean}>{
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('idAspetto', idAspetto)
    .set('fileName', fileName)
    .set('tipoSegnalazione', tipoSegnalazione)
    .set('ruolo', ruolo);
    return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteFileAspetto`, {params})
  }

  deleteAllFileSegnalazione(idSegnalazione: number, tipoSegnalazione: string):  Observable<{esito: boolean}>
  {
    let params = new HttpParams()
    .set('idSegnalazione', idSegnalazione)
    .set('tipoSegnalazione', tipoSegnalazione)
    return this.http.delete<{esito: boolean}>(`${this.apiUrl}DeleteAllFileSegnalazione`, {params})
  }

  allegaFileSegnalazione(idSegnalazione: number, ruolo: string, tipoSegnalazione: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.apiUrl}AllegaFileSegnalazione/${idSegnalazione}/${ruolo}/${tipoSegnalazione}`, formData,
      {
        reportProgress: true,
        observe: 'events'
      }
    );
  }

  allegaFileAspetto(idSegnalazione: number, idAspetto: number | null, tipoSegnalazione: string, ruolo: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this.http.post<any>(`${this.apiUrl}AleggaFileAspetto/${idSegnalazione}/${idAspetto}/${tipoSegnalazione}/${ruolo}`, formData,
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
    return this.http.get<{esito: boolean}>(`${this.apiUrl}FindAllegatoAspetto`, { params })

  }
}
