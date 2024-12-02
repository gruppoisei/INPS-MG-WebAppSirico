import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { TipoComunicazione } from '@shared/models/tipo-comunicazione.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipiComunicazioneService {

  private apiUrl = environment.API_URI + 'TipiComunicazioni/';

  constructor(private http: HttpClient) { }

  getTipiComunicazioni():Observable<TipoComunicazione[]>{
    return this.http.get<TipoComunicazione[]>(`${this.apiUrl}GetAllTipoComunicazioni`)
  }

}
