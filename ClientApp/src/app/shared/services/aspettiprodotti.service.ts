import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AspettiprodottiService {

  constructor(private http:  HttpClient) { }

  checkNuovoAspetto!: boolean;
  checkNuovoAspetto$: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(this.checkNuovoAspetto);

  private apiUrl = environment.MS_SIRICOAPI + environment.API_URI;

  confermaAspetto(id: number | null): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}AspettiProdotti/ConfermaAspetto`, id)
  }

  confermaAspettoContezioso(id: number | null): Observable<any>{
    return this.http.put<any>(`${this.apiUrl}AspettiContenziosi/ConfermaAspetto`, id)
  }

}
