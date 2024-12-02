import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { Criterio } from '@shared/models/criterio.model';

@Injectable({
  providedIn: 'root'
})
export class CriteriService {

  constructor(private http: HttpClient) { }

/*   getCriteri(): Observable<Criterio[]> {
    return this.http.get<Criterio[]>(environment.API_URI+'criteri');
  }

  //save criteri
  saveCriteri(criterio: string): void {
    this.http.post<string>(environment.API_URI+'criteri', { nome: criterio }).subscribe();
  } */
}
