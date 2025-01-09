import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { StatiRilevazione } from '@shared/models/stati-rilevazione.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatiRilevazioneService {

  constructor(private http: HttpClient) { }

/*   getStatiRilevazione(): Observable<StatiRilevazione[]> {
    return this.http.get<StatiRilevazione[]>(environment.API_URI+'stati-rilevazioni?ordine=livello-asc');
  } */
}

