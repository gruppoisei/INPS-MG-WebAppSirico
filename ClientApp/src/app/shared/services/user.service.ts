import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utente } from '@shared/models/utente.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

datiUtente!: any;
datiUtente$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.datiUtente);

// datiUtenteScarti!: any;
// datiUtenteScarti$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.datiUtenteScarti);

private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Utenti/';
private apiUrlCensimento = environment.MS_SIRICOAPI + environment.API_URI + 'CensimentoUtenti/';

  // getUser(idMatricola: number, idNome: number, idCognome: number): Observable<UserService[]> {
  //   let url = environment.MS_SIRICOAPI + environment.API_URI+'account?';
  //   if (idMatricola>0) {
  //     url += '&idMatricola='+idMatricola;
  //   }
  //   if (idNome>0) {
  //     url += '&idNome='+idNome;
  //   }
  //   if (idCognome>0) {
  //     url += '&idCognome='+idCognome;
  //   }

  //   return this.http.get<UserService[]>(url);
  // }

  // getUtente(): Observable<UserService[]> {
  //   let url = environment.MS_SIRICOAPI + environment.API_URI+'account?';
  //   return this.http.get<UserService[]>(url);
  // }
  contaScarti() {
    const URL = this.apiUrlCensimento + 'scarti/count';
    // console.log('URL:',URL);
    return this.http.get<{ count: number }>(URL);
  }

  contaRicercaFiltrata(matricola: string | null, codiceRuolo: string | null, codiceRegione: string | null, codiceSede: string | null): Observable<{ count: number }> {

    // console.log('DATI SERVICE:',matricola, codiceRuolo, codiceRegione, codiceSede);

    let params = new HttpParams()

    if (matricola) params = params.set('matricola', matricola.trim());
    if (codiceRuolo) params = params.set('codiceRuolo', codiceRuolo);
    if (codiceRegione) params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
    if (codiceSede) params = params.set('codiceSede', codiceSede.split(" ")[0]);

    const URL = this.apiUrl + 'contaRicercaFiltrataUtenti' + '?' + params.toString();
    // const URL = this.apiUrl + 'ricercaFiltrataUtenti' + '?' + params.toString();

    // console.log('params:',params);
    // console.log('URL:',URL);

    return this.http.get<{ count: number }>(URL);
    // return this.http.get<{ count: number }>(URL, { params });
    // return this.http.get<Utente[]>(URL);
  }

   getUtenti(quantita: number | null, pagina: number | null, ordinamentoColonna: string | null, matricola: string | null, codiceRuolo: string | null, codiceRegione: string | null, codiceSede: string | null): Observable<Utente[]> {

    // console.log('DATI SERVICE:',matricola, codiceRuolo, codiceRegione, codiceSede);
    let params = new HttpParams()

    if (quantita) params = params.set('quantita', quantita);
    if (pagina) params = params.set('pagina', pagina);
    if (ordinamentoColonna) params = params.set('ordinamentoColonna', ordinamentoColonna);
    if (matricola) params = params.set('matricola', matricola.trim());
    if (codiceRuolo) params = params.set('codiceRuolo', codiceRuolo);
    if (codiceRegione) params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
    if (codiceSede) params = params.set('codiceSede', codiceSede.split(" ")[0]);

    const URL = this.apiUrl + 'ricercaFiltrataUtenti' + '?' + params.toString();

    // console.log('params:',params);

    return this.http.get<Utente[]>(URL);
  }

  //  getUtenti(): Observable<Utente[]> {
  //   // console.log('getUtenti()');
  //   let url = this.apiUrl + 'getAllUtentiDTO' //environment.MS_SIRICOAPI + environment.API_URI+'utenti';
  //   // let url = "http://localhost:5250/api/Account/getAllUtenti" //environment.MS_SIRICOAPI + environment.API_URI+'utenti';
  //   return this.http.get<Utente[]>(url);
  // }

  getAllRuoli(): Observable<Utente[]> {
    let url = this.apiUrl + 'getAllRuoli'
    return this.http.get<Utente[]>(url);
  }

  censimentoUtenti(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('file', file, file.name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    return this.http.post(`${this.apiUrlCensimento}importaUtenti`, formData, { headers });
  }

  getScarti(quantita: number, pagina: number, orderBy?: string): Observable<any[]> {
    let params = new HttpParams()

    if (quantita) params = params.set('quantita', quantita);
    if (pagina) params = params.set('pagina', pagina);
    if (orderBy) params = params.set('orderBy', orderBy);

    // console.log('params SERVICE:',quantita, pagina, orderBy);
    const URL = `${this.apiUrlCensimento}getScarti` + '?' + params.toString();

    return this.http.get<any[]>(URL);
  }

  // getAllEmailUtenti(matricola: string): Observable<string[]> {
  //   let url = this.apiUrl + 'getAllEmail?matricola=' + matricola;
  //   return this.http.get<string[]>(url);
  // }

  // updateEmailUtente(matricola: string, email: string) {
  //   const headers = { 'content-type': 'application/json' };
  //   const url = `${this.apiUrl}UpdateEmail?matricola=${matricola}&email=${email}`;

  //   return this.http.put<any>(url, {}, {headers});
  // }
}
