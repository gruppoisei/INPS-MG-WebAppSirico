import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessaggiService {

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Bacheca/';
  private mgUrl = environment.MG_URL + 'BachecaGateway/';

  datiMessaggio!: any;
  datiMessaggio$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.datiMessaggio);

  statoMessaggio!: boolean;
  statoMessaggio$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.statoMessaggio);

  constructor(private http: HttpClient) { }

  contaMessaggi(attivo: boolean): Observable<{ totale: number }> {

    const URL = `${this.mgUrl}contaMessaggi?visibilita=${attivo}`;
    return this.http.get<{ totale: number }>(URL);
  }

  getMessaggi(quantita: number | null, pagina: number | null, ordinamentoColonna: string | null, attivo: boolean): Observable<BachecaDTO[]> {
    let params = new HttpParams()

    if (quantita) params = params.set('quantita', quantita);
    if (pagina) params = params.set('pagina', pagina);
    if (ordinamentoColonna) params = params.set('ordinamentoColonna', ordinamentoColonna);
    if (attivo != null && attivo != undefined) params = params.set('visibilita', attivo.toString());

    const URL = this.mgUrl + 'getAllMessaggi' + '?' + params.toString();
    return this.http.get<BachecaDTO[]>(URL);
  }

  updateMessaggio(idMessaggio: number, oggettoMessaggio: string, contenutoMessaggio: string): Observable<boolean> {
    const body = { idMessaggio, oggettoMessaggio, contenutoMessaggio };
    console.log('Request body:', body);

    const headers = { 'content-type': 'application/json' };
    const url = `${this.mgUrl}updateMessaggioAttivo`;
    return this.http.put<any>(url, body, { headers });
  }

  insertMessaggio(oggettoMessaggio: string, contenutoMessaggio: string, matricolaUtente: string): Observable<boolean>  {

    const body = {oggettoMessaggio, contenutoMessaggio, matricolaUtente}
    const headers = { 'content-type': 'application/json' };
    const url = `${this.mgUrl}insertMessaggio`;

    return this.http.post<any>(url, body, {headers});
  }

  disattivaMessaggioAttivo(idMessaggio: number): Observable<boolean>  {

    const headers = { 'content-type': 'application/json' };
    const url = `${this.mgUrl}disattivaMessaggio?idMessaggio=${idMessaggio}`;

    return this.http.get<any>(url, {headers});
  }

  riattivaMessaggioDisattivato(idMessaggio: number): Observable<boolean>  {

    const headers = { 'content-type': 'application/json' };
    const url = `${this.mgUrl}riattivaMessaggio?idMessaggio=${idMessaggio}`;

    return this.http.get<any>(url, {headers});
  }
}

export interface BachecaDTO {
  id: number;
  dataInserimento: string;
  oggetto: string;
  messaggio: string;
  utente: string;
  visibile: boolean;
}
