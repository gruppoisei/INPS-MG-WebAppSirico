import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Settore } from '@shared/models/settore-materia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettoreMateriaService {

  private apiUrl = environment.API_URI + 'SettoreMaterie';

  constructor(private http: HttpClient) {}

  getAllSettoriMaterie(): Observable<Settore[]> {
    return this.http.get<Settore[]>(`${this.apiUrl}/getAllSettoriMaterie`);
  }

  getSettoriConAreeProdotti(): Observable<Settore[]> {
    return this.http.get<Settore[]>(`${this.apiUrl}/getSettoriConAreaCollegata`);
  }

  getSettoriMaterieById(id: number): Observable<Settore> {
    return this.http.get<Settore>(`${this.apiUrl}/getSettoriMaterieById/${id}`);
  }

/*   getSettoriMaterieByNome(nome: string): Observable<Settore[]> {
    return this.http.get<Settore[]>(`${this.apiUrl}/getSettoriMaterieByNome/${nome}`);
  } */

  inserisciSettore(settoreMaterie: { id: number | null, nome: string }): Observable<Settore> {
    return this.http.post<Settore>(`${this.apiUrl}/aggiornaSettoriMaterie`, settoreMaterie);
  }

  deleteSettoriMaterie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/eliminaSettoriMaterie/${id}`);
  }

  contaSettoriMaterie(searchText: string) {
    let params = new HttpParams();
    params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<{ count: number }>(`${this.apiUrl}/countSettoriMaterie`, { params });
  }

  newGetSettoriConPaginazione(pageSize: number, orderBy: string, pageNumber: number, searchText: string) {
    let params = new HttpParams()
      .set('dimensione', pageSize.toString())
      .set('pagina', pageNumber.toString());
      params = orderBy == null ? params : params.set('ordine', orderBy);
      params = searchText == null ? params : params.set('searchText', searchText);

    return this.http.get<any[]>(`${this.apiUrl}/GetSettoriMateriePaginazione`, { params });
  }

  getFilteredSettoriMaterie(pageSize: number, orderBy: string | null, pageNumber: number): Observable<Settore[]> {
    let params = new HttpParams()
      .set('pageSize', pageSize.toString())
      .set('pageNumber', pageNumber.toString());
      params = orderBy == null ? params : params.set('orderBy', orderBy);

    return this.http.get<Settore[]>(`${this.apiUrl}/getFiltrataBy`, { params });
  }

  insertSettoreMateria(settoreMaterie: { nome: string }): Observable<Settore> {
    return this.http.post<Settore>(`${this.apiUrl}/InsertSettoreMateria`, settoreMaterie);
  }

  verificaRimuoviSettoreMateria(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/VerificaRimuoviSettoreMateria/${id}`,{});
  }

}
