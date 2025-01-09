import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { Componente } from '@shared/models/componente.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ComponentiService {

  constructor(private http: HttpClient) { }

/*   getComponenti(): Observable<Componente[]> {
    return this.http.get<Componente[]>(environment.API_URI+'componenti');
  }

  //save componenti
  saveComponenti(componente: string): any {
    return this.http.post<string>(environment.API_URI+'componenti', { nome: componente });
  } */
}
