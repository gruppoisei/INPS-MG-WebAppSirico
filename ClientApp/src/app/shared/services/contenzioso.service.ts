import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '@env/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ContenziosoService {

  private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'TipologieContenzioso/';

  constructor(private http: HttpClient) {}

  getAllTioplogie(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}getAll`);
  }
}
