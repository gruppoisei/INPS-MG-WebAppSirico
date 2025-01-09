/* eslint-disable quote-props */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { TaComponente } from '@shared/models/ta-componente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaComponentiService {
  idAttivo = 0;
  constructor(private http: HttpClient) {}

/*   getTaComponenti(): Observable<TaComponente[]> {
    return this.http.get<TaComponente[]>(environment.API_URI+'ta-componente');
  }
  saveTaComponenti(id_componente:number, id_ta_analisi:number): void {
    this.http.post<string>(environment.API_URI+'ta-componente', {

      'componente': {
        'id': id_componente
      },
      // eslint-disable-next-line object-shorthand
      'peso':0,
      // eslint-disable-next-line object-shorthand
      'tipologiaAnalisi': {
        'id': id_ta_analisi
      }
    }
    ).subscribe();
  }

  // eslint-disable-next-line max-len
  nuovaAssociazione(taComponente:number,taComponentiCriteri:any): Observable<any> {
    return this.http.post<any>(environment.API_URI+'ta-componente/'+taComponente+'/ta-componenti-criteri', taComponentiCriteri );
  } */

}
