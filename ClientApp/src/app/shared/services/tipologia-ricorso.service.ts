import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { TipologiaRicorso } from '@shared/models/tipologia-ricorso.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipologiaRicorsoService {

  constructor(private http: HttpClient) { }

/*   getTipologiaRicorso(): Observable<TipologiaRicorso[]> {
    return this.http.get<TipologiaRicorso[]>(environment.API_URI+'tipologie-ricorsi');
  } */
}
