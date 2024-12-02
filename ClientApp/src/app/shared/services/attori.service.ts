import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Attore } from '@shared/models/attore.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttoriService {

  constructor(private http: HttpClient) { }
/* getAttori(): Observable<Attore[]> {
    return this.http.get<Attore[]>(environment.API_URI+'attori');
  } */
}
