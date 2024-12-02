import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { RilevazioniTaComponentiCriteri } from '@shared/models/rilevazioni-ta-componenti-criteri.model';

@Injectable({
  providedIn: 'root'
})
export class RilevazioneTaComponenteCriterioService {

  constructor(private http: HttpClient) { }

  /* saveRilevazioneTaComponenteCriterio(rilTaCompCrit: RilevazioniTaComponentiCriteri): Observable<any> {
    // alert(JSON.stringify(rilTaCompCrit));
    console.log(JSON.stringify(rilTaCompCrit));
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(rilTaCompCrit);
    return (this.http.post(environment.API_URI+'rilevazioni-ta-componenti-criteri', body, {headers}));
  }


  updateRilevazioneTaComponenteCriterio(rilTaCompCrit: RilevazioniTaComponentiCriteri): Observable<any> {
    // alert(JSON.stringify(rilTaCompCrit));
    console.log(JSON.stringify(rilTaCompCrit));
    const headers = { 'content-type': 'application/json'};
    const body=JSON.stringify(rilTaCompCrit);
    return (this.http.post(environment.API_URI+'rilevazioni-ta-componenti-criteri' + '/aggiorna', body, {headers}));
  }

  deleteRilevazioneTaComponenteCriterio(id: number): any {
    const headers = {'content-type': 'application/json'};
    const body=JSON.stringify('');
    return (this.http.post(environment.API_URI+'rilevazioni-ta-componenti-criteri/'+id + '/rimuovi', body, {headers}));
  }

  getRilevazioneTaComponenteCriterioById(id: number): Observable<RilevazioniTaComponentiCriteri[]> {
    return this.http.get<RilevazioniTaComponentiCriteri[]>(environment.API_URI+'rilevazioni-ta-componenti-criteri?idRilevazione='+id);

  }

  getRilTaCompCritByIdConPaginazione(id: number, dimensione: number, ordine: string, pagina: number): Observable<RilevazioniTaComponentiCriteri[]> {
    return this.http.get<RilevazioniTaComponentiCriteri[]>(environment.API_URI+'rilevazioni-ta-componenti-criteri?idRilevazione='+id as string+'&dimensione='+dimensione as string+'&ordine='+ordine+'&pagina='+pagina as string);
  }

  contaRilevazioniTaComponentiCriteri(id: number): Observable<number> {
    return this.http.get<number>(environment.API_URI+'rilevazioni-ta-componenti-criteri/conta?idRilevazione='+id);
  } */
}
