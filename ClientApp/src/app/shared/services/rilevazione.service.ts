import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { salvaDettagliASDTO } from '@shared/interfaces/salvaDettagliASDTO';
import { BehaviorSubject, map, Observable } from 'rxjs';

//da dichiarare esterna e levare da qui
interface segnalazioneProdotto {
  id: number;
  dataCreazione: string;
  dataUltimaModifica: string;
  settoreMateria: string;
  areaProdotto: string;
  sede: string;
  statoId: number;
  statoDesc: string;
  inviata: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class RilevazioneService {
  httpOptionsFormData: Object = {
    responseType: 'text',
  };

  idAttivo = 0;
  idMod = 0;
  constructor(private http: HttpClient) {}

  //private apiUrl = environment.MS_SIRICOAPI + environment.API_URI;
  private mgUrl = environment.MG_URL;

  tabNomeSegnalazione!: string;
  tabNomeSegnalazione$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.tabNomeSegnalazione);

  contaRicercaProdotto(settore?: number | null, area?: number | null, sede?: string[] | null, dataInizio?: string | null, dataFine?: string | null, idStatoSegnalazione?: number | null, ruolo?: string | null, utenteLoggato?: string | null, sourceCall?: string | null, sedeVuota?: boolean | null): Observable<{count: number}> {
    let params = new HttpParams();

    if (settore) params = params.set('settore', settore.toString());
    if (area) params = params.set('area', area.toString());
    if (sede) {
      if (typeof sede === 'string') {
        params = params.set('sedi', sede);
      } else if (Array.isArray(sede)) {
        sede.forEach((s) => {
          params = params.append('sedi', s);
        });
      }
    }
    if (dataInizio) params = params.set('dataInizio', dataInizio);
    if (dataFine) params = params.set('dataFine', dataFine);
    if (idStatoSegnalazione) params = params.set('idStatoSegnalazione', idStatoSegnalazione.toString());
    if (ruolo) params = params.set('ruolo', ruolo);
    if (utenteLoggato) params = params.set('utenteLoggato', utenteLoggato);
    if (sourceCall) params = params.set('sourceCall', sourceCall);
    if (sedeVuota) params = params.set('sedeVuoto', sedeVuota);

    debugger;

    return this.http.get<{ count: number }>(`${this.mgUrl}SegnalazioneProdottoGateway/contaRicerca`, {
      params,
    });
  }

  contaRicercaContenzioso(settore?: number | null, area?: number | null, sede?: string[] | null, dataInizio?: string | null, dataFine?: string | null, idStatoSegnalazione?: number | null, idTipologiaContenzioso?: number | null, ruolo?: string | null, utenteLoggato?: string | null, sourceCall?: string | null, sedeVuota?: boolean | null): Observable<{count: number}> {
    let params = new HttpParams()

    if (settore) params = params.set('settore', settore.toString());
    if (area) params = params.set('area', area.toString());
    if (sede) {
      if (typeof sede === 'string') {
        params = params.set('sedi', sede);
      } else if (Array.isArray(sede)) {
        sede.forEach((s) => {
          params = params.append('sedi', s);
        });
      }
    }

    if (dataInizio) params = params.set('dataInizio', dataInizio);
    if (dataFine) params = params.set('dataFine', dataFine);
    if (idStatoSegnalazione) params = params.set('idStatoSegnalazione', idStatoSegnalazione.toString());
    if (idTipologiaContenzioso) params = params.set('idTipologiaContenzioso', idTipologiaContenzioso.toString());
    if (ruolo) params = params.set('ruolo', ruolo);
    if (utenteLoggato) params = params.set('utenteLoggato', utenteLoggato);
    if (sourceCall) params = params.set('sourceCall', sourceCall);
    if (sedeVuota) params = params.set('sedeVuoto', sedeVuota);
    return this.http.get<{ count: number }>(
      `${this.mgUrl}SegnalazioniContenziosiGateway/contaRicercaContenziosi`,
      { params }
    );
  }

  getRicercaProdotto(quantita: number, pagina: number, settore?: number | null, area?: number | null, sede?: string[] | null, dataInizio?: string | null, dataFine?: string | null, idStatoSegnalazione?: number | null, ruolo?: string | null, utenteLoggato?: string | null, ordineColonna?: string | null, sourceCall?: string | null, sedeVuota?: boolean | null): Observable<any[]> {
    let params = new HttpParams()
      .set('quantita', quantita.toString())
      .set('pagina', pagina.toString());

    if (settore) params = params.set('settore', settore.toString());
    if (area) params = params.set('area', area.toString());
    if (sede) {
      if (typeof sede === 'string') {
        params = params.set('sedi', sede);
      } else if (Array.isArray(sede)) {
        sede.forEach((s) => {
          params = params.append('sedi', s);
        });
      }
    }
    if (dataInizio) params = params.set('dataInizio', dataInizio);
    if (dataFine) params = params.set('dataFine', dataFine);
    if (idStatoSegnalazione)params = params.set('idStatoSegnalazione', idStatoSegnalazione.toString());
    if (ruolo) params = params.set('ruolo', ruolo);
    if (utenteLoggato) params = params.set('utenteLoggato', utenteLoggato);
    if (ordineColonna) params = params.set('ordineColonna', ordineColonna);
    if (sourceCall) params = params.set('sourceCall', sourceCall);
    if (sedeVuota) params = params.set('sedeVuoto', sedeVuota);

    return this.http
      .get<any[]>(`${this.mgUrl}SegnalazioneProdottoGateway/getRicerca`, { params })
      .pipe(
        map((datiEndpoint: any[]) =>
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
            inviata: item.inviata,
            chiusa: item.chiusa,
            scadenza: this.formatDate(item.scadenza),
            nuovoAspetto: item.nuovoAspetto,
          }))
        )
      );
  }

  getRicercaContenzioso(quantita: number, pagina: number, settore?: number | null, area?: number | null, sede?: string[] | null, dataInizio?: string | null, dataFine?: string | null, idStatoSegnalazione?: number | null, idTipologiaContenzioso?: number | null, ruolo?: string | null, utenteLoggato?: string | null, ordineColonna?: string | null, sourceCall?: string | null, sedeVuota?: boolean | null): Observable<any[]> {
    let params = new HttpParams()
      .set('quantita', quantita.toString())
      .set('pagina', pagina.toString());

    if (settore) params = params.set('settore', settore.toString());
    if (area) params = params.set('area', area.toString());
    if (sede) {
      if (typeof sede === 'string') {
        params = params.set('sedi', sede);
      } else if (Array.isArray(sede)) {
        sede.forEach((s) => {
          params = params.append('sedi', s);
        });
      }
    }

    if (dataInizio) params = params.set('dataInizio', dataInizio);
    if (dataFine) params = params.set('dataFine', dataFine);
    if (idStatoSegnalazione)
      params = params.set('idStatoSegnalazione', idStatoSegnalazione.toString());
    if (idTipologiaContenzioso)
      params = params.set('idTipologiaContenzioso', idTipologiaContenzioso.toString());
    if (ruolo) params = params.set('ruolo', ruolo);
    if (utenteLoggato) params = params.set('utenteLoggato', utenteLoggato);
    if (ordineColonna) params = params.set('ordineColonna', ordineColonna);
    if (sourceCall) params = params.set('sourceCall', sourceCall);
    if (sedeVuota) params = params.set('sedeVuoto', sedeVuota);

    return this.http
      .get<any[]>(`${this.mgUrl}SegnalazioniContenziosiGateway/getRicercaContenziosi`, { params })
      .pipe(
        map((datiEndpoint: any[]) =>
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
            sedeId: item.sedeId, // codice sede
            inviata: item.inviata,
            chiusa: item.chiusa,
            contenziosoId: item.contenziosoId,
            contenziosoDesc: item.contenziosoDesc,
            scadenza: this.formatDate(item.scadenza),
            nuovoAspetto: item.nuovoAspetto,
          }))
        )
      );
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

   salvaSegnalazioneProdotto(segnalazioneProdotto: any): Observable<any> {
    return this.http.post<any>(
      `${this.mgUrl}SegnalazioniEAspettiProdottiGateway/salvaSegnalazioneProdotto`,
      segnalazioneProdotto
    );
  }

  salvaSegnalazioneContenzioso(segnalazioneContenzioso: any): Observable<any> {
    return this.http.post<any>(`${this.mgUrl}SegnalazioniEAspettiContenziosoGateway/salvaSegnalazione`, segnalazioneContenzioso);
  }

  getDettagliSegnalazioneById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(
      `${this.mgUrl}SegnalazioniEAspettiProdottiGateway/getDettagliSegnalazioneById`,
      { params }
    );
  }

  getDettagliAspettoSegnalazioneById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.mgUrl}SegnalazioniEAspettiProdottiGateway/getAspettoSegnalazioneById/${id}`
    );
  }

  getDettagliAspettoSegnalazioneContenziosoById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.mgUrl}SegnalazioniEAspettiContenziosoGateway/getAspettoSegnalazioneById/${id}`
    );
  }

  getDettagliSegnalazioneContenziosoById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(
      `${this.mgUrl}SegnalazioniEAspettiContenziosoGateway/getDettagliSegnalazioneContenziosoById`,
      { params }
    );
  }

  updateIntegrazioni(integrazioni: salvaDettagliASDTO[], matricola: string,statoSalvataggioSegnalazione: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const payload = {integrazioni, matricola, statoSalvataggioSegnalazione,};
    return this.http.post<any>(`${this.mgUrl}SegnalazioniEAspettiProdottiGateway/aggiornaDettagliSegnalazione`, payload, { headers });
  }

  updateIntegrazioniContezioso(integrazioni: salvaDettagliASDTO[], matricola: string, statoSalvataggioSegnalazione: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const payload = {integrazioni, matricola, statoSalvataggioSegnalazione,};
    return this.http.post<any>(`${this.mgUrl}SegnalazioniEAspettiContenziosoGateway/aggiornaDettagliSegnalazione`, payload, { headers });
  }

  httpOptions: Object = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text',
  };

  deleteSegnalazione(tipologiaSegnalazione: string, idSegnalazione: number) {
    const headers = { 'content-type': 'application/json' };

    if (tipologiaSegnalazione == 'Prodotto') {
      return this.http.delete(
        this.mgUrl +
          'SegnalazioniEAspettiProdottiGateway/eliminaSegnalazioneEDettagli/' +
          idSegnalazione,
        { headers }
      );
    } else {
      return this.http.delete(
        this.mgUrl +
          'SegnalazioniEAspettiContenziosoGateway/eliminaSegnalazioneEDettagli/' +
          idSegnalazione,
        { headers }
      );
    }
  }

  sendSegnalazione(tipologiaSegnalazione: string, idSegnalazione: number, statoId: number) {
    const headers = { 'content-type': 'application/json' };

    if (tipologiaSegnalazione == 'Prodotto') {
      return this.http.post<any>(
        `${this.mgUrl}SegnalazioneProdottoGateway/aggiorna-stato-segnalazione?idSegnalazione=` +
          idSegnalazione +
          `&idStatoSegnalazione=` +
          (statoId + 1),
        headers
      );
    } else {
      return this.http.post<any>(
        `${this.mgUrl}SegnalazioniContenziosiGateway/aggiorna-stato-segnalazione?idSegnalazione=` +
          idSegnalazione +
          `&idStatoSegnalazione=` +
          (statoId + 1),
        headers
      );
    }
  }
}
