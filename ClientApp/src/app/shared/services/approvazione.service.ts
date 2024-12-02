import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class ApprovazioneService {

  checkRisolviSegnalazione!: boolean;
  checkRisolviSegnalazione$: BehaviorSubject<boolean | undefined> = new BehaviorSubject<boolean | undefined>(this.checkRisolviSegnalazione);

  private baseUrl = environment.API_URI + 'approvazione';

  constructor(private http: HttpClient) { }

  getSegnalazioniDaConfermare(quantita: number = 20, pagina: number = 1, ordineColonna?: string | null): Observable<any> {
    const params: any = { quantita, pagina };
    if (ordineColonna) {
      params.ordineColonna = ordineColonna;
    }
    return this.http.get<any[]>(`${this.baseUrl}/getSegnalazioniDaConfermare`, { params }).pipe(
      map(datiEndpoint =>
        datiEndpoint.map(item => ({
          id: item.id,
          data1: this.formatDate(item.data1),
          data2: this.formatDate(item.data2),
          settoreMateria: item.settoreNome,
          settoreId: item.settoreId,
          areaProdotto: item.areaNome,
          areaId: item.areaId,
          statoId: item.statoId,
          statoDesc: item.statoDescrizione,
          sede: item.sedeNome,
          sedeId: item.sedeId,
          contenziosoId: item.contenziosoId,
          contenziosoDesc: this.formatContenziosoDesc(item.contenziosoDesc),
          scadenza: this.formatDate(item.scadenza),
          nuovoAspetto: item.nuovoAspetto,
          matIns: item.matricolaIncaricato
        }))
      )
    );
  }

  confermaSegnalazioni(segnalazioni: any[]): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/confermaSegnalazioni`, segnalazioni, { responseType: 'text' as 'json' });
  }

  getSegnalazioniCount(): Promise<number> {
    return this.http.get<{ totalCount: number }>(`${this.baseUrl}/count`).pipe(
      map(response => response.totalCount)
    ).toPromise() as Promise<number>;
  }

  private formatDate(dateString: string): string {
    if (dateString == null || dateString == undefined) {
      return `-`;
    } else {
      const date = new Date(dateString);
      const day = this.pad(date.getDate());
      const month = this.pad(date.getMonth() + 1);
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }

  private pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

  private formatContenziosoDesc(desc: string | null): string {
    return desc == null || desc == undefined ? '-' : desc;
  }
}
