import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Settore } from '@shared/models/settore-materia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettoreMateriaService {

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'SettoreMaterie';
  private mgUrl = environment.MG_URL + 'SettoreMaterieGateway/';

  constructor(private http: HttpClient) {}

  getAllSettoriMaterie(): Observable<Settore[]> {
    return this.http.get<Settore[]>(`${this.mgUrl}getAllSettoriMaterie`);
  }

  getSettoriConAreeProdotti(): Observable<Settore[]> {
    return this.http.get<Settore[]>(`${this.mgUrl}getSettoriConAreaCollegata`);
  }

  getSettoriMaterieById(id: number): Observable<Settore> {
    return this.http.get<Settore>(`${this.mgUrl}getSettoriMaterieById/${id}`);
  }

  inserisciSettore(settoreMaterie: { id: number | null, nome: string }): Observable<Settore> {
    return this.http.post<Settore>(`${this.mgUrl}aggiornaSettoriMaterie`, settoreMaterie);
  }

  deleteSettoriMaterie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.mgUrl}eliminaSettoriMaterie/${id}`);
  }

  contaSettoriMaterie(searchText: string) {
    let params = new HttpParams();
    params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<{ count: number }>(`${this.mgUrl}countSettoriMaterie`, { params });
  }

  newGetSettoriConPaginazione(pageSize: number, orderBy: string, pageNumber: number, searchText: string) {
    let params = new HttpParams()
      .set('dimensione', pageSize.toString())
      .set('pagina', pageNumber.toString());
      params = orderBy == null ? params : params.set('ordine', orderBy);
      params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<any[]>(`${this.mgUrl}GetSettoriMateriePaginazione`, { params });
  }

  getFilteredSettoriMaterie(pageSize: number, orderBy: string | null, pageNumber: number): Observable<Settore[]> {
    let params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('pageNumber', pageNumber.toString());
      params = orderBy == null ? params : params.set('orderBy', orderBy);

    return this.http.get<Settore[]>(`${this.mgUrl}getFiltrataBy`, { params });
  }

  insertSettoreMateria(settoreMaterie: { nome: string }): Observable<Settore> {
    return this.http.post<Settore>(`${this.mgUrl}InsertSettoreMateria`, settoreMaterie);
  }

  verificaRimuoviSettoreMateria(id: number): Observable<any> {
    return this.http.post<any>(`${this.mgUrl}VerificaRimuoviSettoreMateria/${id}`,{});
  }

}
