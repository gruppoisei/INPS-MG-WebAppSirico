import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IdmUser } from '@shared/interfaces/Idm-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUtentiService {

  constructor(private http : HttpClient) { }

  private apiUrl = environment.API_URI + 'Account/'
  private mgUrl = environment.MG_URL + 'Login/'

/*   infoUtente() : Observable<InfoUtente>{
    return this.http.get<InfoUtente>(environment.API_URI+'account');
  } */

  newInfoUtente() : Observable<IdmUser>{
    return this.http.get<IdmUser>((`${this.mgUrl}ForwardHeaders`))
  }

  getInfoUtenteByUsername(loginUsername: string) : Observable<IdmUser>{
    return this.http.get<IdmUser>((`${this.apiUrl}GetUtenteLoggatoByUsername/${loginUsername}`))
  }

  getStringaIDMConUsername(username: string) {
    return this.http.get<any>((`${this.apiUrl}GetStringaIDM?username=${username}`))
  }

  checkDatiLocaleIDM(stringaUtenteIDM: string, username: string) {
    return this.http.get<any>((`${this.apiUrl}ControlloLoginIDM?stringaUtenteIDM=${stringaUtenteIDM}&username=${username}`))
  }

  WhoAmI() : Observable<IdmUser>{
    return this.http.get<IdmUser>((`${this.mgUrl}WhoAmI`))
  }

  fetchSedeDescriptions(codiciSede: string[]): Observable<string[]> {
    const url = `${environment.API_URI}Territorio/GetSedeDescriptions`;
    return this.http.post<string[]>(url, codiciSede);
  }


  // getInfoUtente(loginUsername: string) : Observable<IdmUser>{
  //   return this.http.get<IdmUser>((`${this.apiUrl}GetInfoUtente/${loginUsername}`))
  // }
}
