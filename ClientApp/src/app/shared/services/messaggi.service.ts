import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessaggiService {

  private apiUrl = environment.API_URI + 'Bacheca/';

  datiMessaggio!: any;
  datiMessaggio$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.datiMessaggio);

  statoMessaggio!: boolean;
  statoMessaggio$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statoMessaggio);

  constructor(private http: HttpClient) { }

  contaMessaggi(attivo: boolean): Observable<{ totale: number }> {

    // const URL = this.apiUrl + 'contaMessaggiAttivi';
    const URL = `${this.apiUrl}contaMessaggi?visibilita=${attivo}`;

    // console.log('params:',params);
    // console.log('URL:',URL);
    return this.http.get<{ totale: number }>(URL);
  }

  getMessaggi(quantita: number | null, pagina: number | null, ordinamentoColonna: string | null, attivo: boolean): Observable<BachecaDTO[]> {
    let params = new HttpParams()

    if (quantita) params = params.set('quantita', quantita);
    if (pagina) params = params.set('pagina', pagina);
    if (ordinamentoColonna) params = params.set('ordinamentoColonna', ordinamentoColonna);
    if (attivo != null && attivo != undefined) params = params.set('visibilita', attivo.toString());

    const URL = this.apiUrl + 'getAllMessaggi' + '?' + params.toString();
    // const URL = this.apiUrl + 'getAllMessaggi' + '?' + params.toString() + '&visibilita=' + attivo;

    return this.http.get<BachecaDTO[]>(URL);
  }

  updateMessaggio(idMessaggio: number, oggettoMessaggio: string, contenutoMessaggio: string): Observable<boolean> {
    const body = { idMessaggio, oggettoMessaggio, contenutoMessaggio };
    console.log('Request body:', body);

    const headers = { 'content-type': 'application/json' };
    const url = `${this.apiUrl}updateMessaggioAttivo`;

    return this.http.put<any>(url, body, { headers });
  }


  insertMessaggio(oggettoMessaggio: string, contenutoMessaggio: string, matricolaUtente: string): Observable<boolean>  {

    const body = {oggettoMessaggio, contenutoMessaggio, matricolaUtente}
    const headers = { 'content-type': 'application/json' };
    const url = `${this.apiUrl}insertMessaggio`;

    return this.http.post<any>(url, body, {headers});
  }

  disattivaMessaggioAttivo(idMessaggio: number): Observable<boolean>  {

    const headers = { 'content-type': 'application/json' };
    const url = `${this.apiUrl}disattivaMessaggio?idMessaggio=${idMessaggio}`;

    return this.http.get<any>(url, {headers});
  }

  riattivaMessaggioDisattivato(idMessaggio: number): Observable<boolean>  {

    const headers = { 'content-type': 'application/json' };
    const url = `${this.apiUrl}riattivaMessaggio?idMessaggio=${idMessaggio}`;

    return this.http.get<any>(url, {headers});
  }

}

export interface BachecaDTO {
  id: number;
  dataInserimento: string;
  oggetto: string;
  messaggio: string;
  utente: string;
  nome: string;
  cognome: string;
  visibile: boolean;
}
