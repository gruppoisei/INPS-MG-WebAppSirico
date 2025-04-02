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

//private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Utenti/';
  private apiUrlCensimento = environment.MS_SIRICOAPI + environment.API_URI + 'CensimentoUtenti/';
  private mgUrl = environment.MG_URL + 'UtentiGateway/';

  contaScarti() {
    const URL = this.apiUrlCensimento + 'scarti/count';
    // console.log('URL:',URL);
    return this.http.get<{ count: number }>(URL);
  }

  contaRicercaFiltrata(matricola: string | null, codiceRuolo: string | null, codiceRegione: string | null, codiceSede: string | null): Observable<{ count: number }> {
    let params = new HttpParams()

    if (matricola) params = params.set('matricola', matricola.trim());
    if (codiceRuolo) params = params.set('codiceRuolo', codiceRuolo);
    if (codiceRegione) params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
    if (codiceSede) params = params.set('codiceSede', codiceSede.split(" ")[0]);

    const URL = this.mgUrl + 'contaRicercaFiltrataUtenti' + '?' + params.toString();

    return this.http.get<{ count: number }>(URL);
  }

   getUtenti(quantita: number | null, pagina: number | null, ordinamentoColonna: string | null, matricola: string | null, codiceRuolo: string | null, codiceRegione: string | null, codiceSede: string | null): Observable<Utente[]> {
    let params = new HttpParams()

    if (quantita) params = params.set('quantita', quantita);
    if (pagina) params = params.set('pagina', pagina);
    if (ordinamentoColonna) params = params.set('ordinamentoColonna', ordinamentoColonna);
    if (matricola) params = params.set('matricola', matricola.trim());
    if (codiceRuolo) params = params.set('codiceRuolo', codiceRuolo);
    if (codiceRegione) params = params.set('codiceRegione', codiceRegione.split(" ")[0]);
    if (codiceSede) params = params.set('codiceSede', codiceSede.split(" ")[0]);

     const URL = this.mgUrl + 'ricercaFiltrataUtenti' + '?' + params.toString();

    return this.http.get<Utente[]>(URL);
  }

  getAllRuoli(): Observable<Utente[]> {
    let url = this.mgUrl + 'getAllRuoli'
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
}
