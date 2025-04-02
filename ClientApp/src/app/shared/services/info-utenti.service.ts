import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { IdmUser } from '@shared/interfaces/Idm-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoUtentiService {

  constructor(private http : HttpClient) { }

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI + 'Account/'
  private mgUrl = environment.MG_URL + 'Login/'
  private mgwUrl = environment.MG_URL + 'AccountGateway'
  
  newInfoUtente() : Observable<IdmUser>{
    return this.http.get<IdmUser>((`${this.mgUrl}ForwardHeaders`))
  }

  getInfoUtenteByUsername(loginUsername: string) : Observable<IdmUser>{
    return this.http.get<IdmUser>((`${this.mgwUrl}GetUtenteLoggatoByUsername/${loginUsername}`))
  }

  getStringaIDMConUsername(username: string) {
    return this.http.get<any>((`${this.mgwUrl}GetStringaIDM?username=${username}`))
  }

  checkDatiLocaleIDM(stringaUtenteIDM: string, username: string) {
    return this.http.get<any>((`${this.mgwUrl}ControlloLoginIDM?stringaUtenteIDM=${stringaUtenteIDM}&username=${username}`))
  }

  WhoAmI(): Observable<IdmUser>{
    console.log(`Sto girando in ambiente: ${environment.environmentName}`);

    return this.http.get<IdmUser>((`${this.mgUrl}WhoAmI`))
  }

  fetchSedeDescriptions(codiciSede: string[]): Observable<string[]> {
    //const url = `${environment.MS_SIRICOAPI}${environment.API_URI}Territorio/GetSedeDescriptions`;
    const url = `${environment.MG_URL}TerritorioGateway/GetSedeDescriptions`;
    return this.http.post<string[]>(url, codiciSede);
  }
}
