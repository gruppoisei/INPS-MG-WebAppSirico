import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Area } from '@shared/models/area.model';
import { AreeProdotti } from '@shared/models/areeprodotti';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Aree {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'AreaProdotti/';

  newDeleteAreeProdotti(id: number) : Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}EliminaAreeProdotti/${id}`)
  }

  newSalvaAreeProdotti(areaProdotto: AreeProdotti){
    const headers = { 'content-type': 'application/json' };
    return this.http.post<AreeProdotti>(`${this.apiUrl}InsertAreeProdotti`, areaProdotto, {headers})
  }

  newContaAreeProdotto(searchText: string) {
    let params = new HttpParams();
    params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<{ count: number }>(`${this.apiUrl}GetCountVistaAreeProdotti`, { params });
  }

  newGetAreeConPaginazione(pageSize: number, orderBy: string, pageNumber: number, searchText: string) {
    let params = new HttpParams()
      .set('dimensione', pageSize.toString())
      .set('pagina', pageNumber.toString());
      params = orderBy == null ? params : params.set('ordine', orderBy);
      params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<any[]>(`${this.apiUrl}GetAreeProdottiPaginazione`, { params });
  }

  newGetAreaProdotto(id: number) : Observable<AreeProdotti>{
    return this.http.get<AreeProdotti>(`${this.apiUrl}GetAreeProdottiById/${id}`)
  }

  newVerificaAreaProdotto(id: number): Observable<{ esitoRimuovi: boolean }>{
    return this.http.get<{ esitoRimuovi: boolean }>(`${this.apiUrl}VerificaRimuovi/${id}`)
  }

  newAggiornaAreeProdotto(areaProdotto: AreeProdotti) : Observable<AreeProdotti>{
    return this.http.post<AreeProdotti>(`${this.apiUrl}UpdateAreeProdotto`, areaProdotto)
  }

  newGetAllByIdSettore(idSettore: number) : Observable<AreeProdotti>{
    return this.http.get<AreeProdotti>(`${this.apiUrl}getAllByIdSettore/${idSettore}`);
  }

  getAllAreaProdotto(): Observable<AreeProdotti[]> {
    return this.http.get<AreeProdotti[]>(`${this.apiUrl}getAllAreeProdotti`);
  }

  newGetAllByidArea(idSettore: number) : Observable<AreeProdotti>{
    return this.http.get<AreeProdotti>(`${this.apiUrl}GetAreeProdottiById/${idSettore}`);
  }
}
