import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TipologiaAnalisi } from '@shared/models/tipologia-analisi.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipologieAnalisiService {

  constructor(private http: HttpClient) { }

/*   getTipologieAnalisi(): Observable<TipologiaAnalisi[]> {
    return this.http.get<TipologiaAnalisi[]>(environment.API_URI+'tipologie-analisi');
  } */
}
