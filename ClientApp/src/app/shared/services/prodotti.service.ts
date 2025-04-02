import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Prodotto } from '@shared/models/prodotto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI;
  private mgUrl = environment.MG_URL + 'AspettiProdottiGateway/';
  private mgUrl_AC = environment.MG_URL + 'AspettiContenziosiGateway/';

  constructor(private http: HttpClient) { }

  // getProdotti(id: number): Observable<Prodotto[]> {
  //   return this.http.get<Prodotto[]>(environment.API_URI+'sottoaree/'+id+'/prodotti');
  // }

  getAspettiEDescrizioni(tipo: string): Observable<any[]> {

    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch(tipo) {

      case prodotto: {
        return this.http.get<any[]>(this.mgUrl +'getAll');
        // break;
      }

      case contenzioso: {
        return this.http.get<any[]>(this.mgUrl_AC + 'getAll');
        // break;
      }
    }
    return this.http.get<any[]>(this.mgUrl +'getAll');
  }

}
