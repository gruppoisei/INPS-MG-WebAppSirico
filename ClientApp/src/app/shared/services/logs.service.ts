import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TipiLogApplicativi } from '@shared/models/tipiLogApplicativi.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  idAttivo = 0;
  json: any;

  api_url = environment.API_URI + 'Log/';

  constructor(private http: HttpClient) {}

  private formatDate(date: any): string {
    if (date) {
      const d = new Date(date);
      const month = ('0' + (d.getMonth() + 1)).slice(-2);
      const day = ('0' + d.getDate()).slice(-2);
      const year = d.getFullYear();
      return `${year}-${month}-${day}`;
    }
    return '';
  }

  getLogs(
    account2: string,
    matricola2: string,
    dataInizio2: string,
    dataFine2: string,
    tipoLog: number,
    dim2: string,
    ordine2: string | null,
    pagina2: number
  ): Observable<any> {
    let params = new HttpParams();

    if (account2) params = params.set('account', account2);
    if (matricola2) params = params.set('matricola', matricola2);
    if (tipoLog) params = params.set('tipo', tipoLog.toString());
    if (dataInizio2) params = params.set('dataInizio', this.formatDate(dataInizio2));
    if (dataFine2) params = params.set('dataFine', this.formatDate(dataFine2));
    if (ordine2 != null && ordine2 != '') params = params.set('ordine', ordine2);
    params = params.set('dimensione', dim2);
    params = params.set('pagina', pagina2.toString());

    const url = this.api_url + 'cercaSoloLogEventi';
    return this.http.get<any>(url, { params });
  }

  getLogFilterByStacktrace(
    account: string,
    matricola: string,
    dataInizio: string,
    dataFine: string,
    dim: string,
    ordine: string | null,
    pagina: number
  ): Observable<any> {
    let params = new HttpParams();

    if (account) params = params.set('account', account);
    if (matricola) params = params.set('matricola', matricola);
    if (dataInizio) params = params.set('dataInizio', this.formatDate(dataInizio));
    if (dataFine) params = params.set('dataFine', this.formatDate(dataFine));
    if (ordine != null && ordine != '') params = params.set('ordine', ordine);
    params = params.set('dimensione', dim);
    params = params.set('pagina', pagina.toString());

    const url = this.api_url + 'filtraPerLogError';
    return this.http.get<any>(url, { params });
  }

  getLogsId(id: number): Observable<any> {
    return this.http.get<any>(this.api_url + 'getById/' + id);
  }

  conta(): Observable<number> {
    return this.http.get<number>(this.api_url + 'conta');
  }

  contaErrori(
    account: string,
    matricola: string,
    dataInizio: string,
    dataFine: string
  ): Observable<number> {
    let params = new HttpParams();

    if (account) params = params.set('account', account);
    if (matricola) params = params.set('matricola', matricola);
    if (dataInizio) params = params.set('dataInizio', this.formatDate(dataInizio));
    if (dataFine) params = params.set('dataFine', this.formatDate(dataFine));

    const url = this.api_url + 'contaPerLogError';

    return this.http.get<{ count: number }>(url, { params }).pipe(
      map(response => response.count)
    );
  }

  getTipiLogApplicativi(): Observable<TipiLogApplicativi[]> {
    let url = this.api_url + 'tipi-log-usati';
    return this.http.get<TipiLogApplicativi[]>(url);
  }

  getLogsParam(dim: string, ordine: string | null, pagina: number): Observable<any> {
    let url = `${this.api_url}getAll/?dimensione=${dim}&ordine=${ordine}&pagina=${pagina}`;
    return this.http.get<any>(url);
  }

  contaEventi(
    account: string,
    matricola: string,
    dataInizio: string,
    dataFine: string,
    tipoLog: number
  ): Observable<number> {
    let params = new HttpParams();

    if (account) params = params.set('account', account);
    if (matricola) params = params.set('matricola', matricola);
    if (dataInizio) params = params.set('dataInizio', this.formatDate(dataInizio));
    if (dataFine) params = params.set('dataFine', this.formatDate(dataFine));
    if (tipoLog !== undefined && tipoLog !== null) params = params.set('tipo', tipoLog.toString());

    const url = this.api_url + 'contaPerLogEventi';

    return this.http.get<{ count: number }>(url, { params }).pipe(
      map(response => response.count)
    );
  }
}

