import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ProceduraRiferimento } from '@shared/models/procedura-riferimento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcedureRiferimentiService {

  constructor(private http: HttpClient) { }

/*   getProcedureRiferimenti(): Observable<ProceduraRiferimento[]> {
    return this.http.get<ProceduraRiferimento[]>(environment.API_URI+'procedure-riferimenti');
  } */
}
