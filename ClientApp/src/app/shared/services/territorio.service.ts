import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '@env/environment';

export interface SedeDto {
  sedeCodSede: string;
  sedeDesc: string;
}

@Injectable({
  providedIn: 'root',
})
export class TerritorioService {
  private apiUrl = environment.API_URI + 'Territorio/';

  constructor(private http: HttpClient) {}

  getAllSediSorted(): Observable<any> {
    return this.http
      .get<{ sedeCodSede: string; sedeDesc: string }[]>(`${this.apiUrl}getAllSediSorted`)
      .pipe(map(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
  }

  getSediSortedRegione(regCodSede: string | null): Observable<any> {
    return this.http
      .get<{ sedeCodSede: string; sedeDesc: string }[]>(
        `${this.apiUrl}getSediSortedRegione/${regCodSede}`
      )
      .pipe(map(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
  }

  getSediSortedProvincia(provCodSede: string | null): Observable<any> {
    return this.http
      .get<{ sedeCodSede: string; sedeDesc: string }[]>(
        `${this.apiUrl}getSediSortedProvincia/${provCodSede}`
      )
      .pipe(map(sedi => sedi.map(s => ({ id: parseInt(s.sedeCodSede, 10), nome: s.sedeDesc }))));
  }

  listaCodiciProvinciali: string[] = [];
  listaCodiciRegionali: string[] = [];

  getSedi(role: string, codiceSede: any[] | null | undefined, pagina: string, ruoloRegionale: string, ruoloProvinciale: string): Observable<any[]> {

    let observables: Observable<any>[] = [];
    this.listaCodiciProvinciali = [];
    this.listaCodiciRegionali = [];

    for (let i=0; i<codiceSede!.length; i++) {
      if (codiceSede![i].role == ruoloRegionale) {
        this.listaCodiciRegionali.push(codiceSede![i].sedeCode);
      }
      if (codiceSede![i].role == ruoloProvinciale) {
        this.listaCodiciProvinciali.push(codiceSede![i].sedeCode);
      }
    }

    const fetchSediProv = (method: (listaCodiciProvinciali: string) => any) => {
      return (this.listaCodiciProvinciali ?? []).map(codice => method(codice).pipe(catchError(() => of([]))));
    };

    const fetchSediReg = (method: (listaCodiciRegionali: string) => any) => {
      return (this.listaCodiciRegionali ?? []).map(codice => method(codice).pipe(catchError(() => of([]))));
    };

    if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12689")) {
    // if ( (role!.split(';').map(ruolo => ruolo.trim()).includes("P12690")) ||
    //       (role!.split(';').map(ruolo => ruolo.trim()).includes("P12689")) ) {

      observables = [this.getAllSediSorted().pipe(catchError(() => of([])))];

    } else if (role == "P12800") {

      observables = [];

    } else {

      // nel caso di inserimento devo sempre mappare le sedi, l'utente amministrativo non incide
      // nel caso di gestione devo mappare le sedi solo se il (multi)ruolo non contiene l'utente amministrativo
      if (pagina == 'Gestione' && role.includes('P12690')) {
        observables = [this.getAllSediSorted().pipe(catchError(() => of([])))];
      }
      else {
        if (this.listaCodiciRegionali.length != 0) {
          observables = fetchSediReg(codice => this.getSediSortedRegione(codice));
        }

        if (this.listaCodiciProvinciali.length != 0) {
            observables.push(...fetchSediProv(codice => this.getSediSortedProvincia(codice)));
        }
      }
    }

    // Inserisci un elemento vuoto tra le chiamate per leggibilità
    const spacedObservables = [];
    for (let i = 0; i < observables.length; i++) {
      spacedObservables.push(observables[i]);
      if (i < observables.length - 1) {
        spacedObservables.push(of([{ id: null, nome: '' }]));
      }
    }

    return forkJoin(spacedObservables).pipe(
      map(results => results.flat())
    );
  }

  getRegioni(): Observable<any[]> {
    let url = this.apiUrl + 'getAllRegioniSorted'
    return this.http.get<any[]>(url);
  }

  getProvince(): Observable<any[]> {
    let url = this.apiUrl + 'getAllProvinceSorted'
    return this.http.get<any[]>(url);
  }

  getAllSediByIdRegione(codiceRegione: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}getSediSortedRegione/${codiceRegione}`);
  }

  getAllProvinceByIdRegione(codiceRegione: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}getProvinceRegionebyRegCodSede/${codiceRegione}`);
  }

  verificaSediIntegrazioneRegionale(descSedeSegnalazione: string, sediUtente: string[]): Observable<{risultato: boolean}>{
    let params = new HttpParams()
    .set('descSedeSegnalazione', descSedeSegnalazione)
    sediUtente.forEach(sedi =>{
      params = params.append('sediUtente', sedi)
    });

    return this.http.get<{risultato: boolean}>(`${this.apiUrl}VerificaSediIntegrazioneRegionale`, { params })
  }

  getRegioniByIdSede(codiceSede: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}getRegioneByCodSede/${codiceSede}`);
  }
}
