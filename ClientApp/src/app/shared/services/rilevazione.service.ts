import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
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

  private apiUrl = environment.API_URI;

  tabNomeSegnalazione!: string;
  tabNomeSegnalazione$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.tabNomeSegnalazione);

  //getRilevazioni with optional paramethers
  /*  getRilevazioni(
    idProdotto: number,
    idProdottoTipologiaLavoratore: number,
    idAttore: number,
    idTipologiaRicorso: number,
    idProceduraRiferimento: number,
    dataInizio: string,
    dataFine: string,
    dataScadenza: boolean,
    dim: string,
    ordine: string,
    pagina: number
  ): Observable<Rilevazione[]> {
    let url = environment.API_URI + 'rilevazioni?';
    // let url = 'http://localhost:5250/api/Prodotto/contaRicerca';
    let parametriUrl = '';
    if (idProdotto > 0) {
      parametriUrl += '&idProdotto=' + idProdotto;
    }
    if (idProdottoTipologiaLavoratore > 0) {
      parametriUrl += '&idProdottoTipologiaLavoratore=' + idProdottoTipologiaLavoratore;
    }
    if (idAttore > 0) {
      parametriUrl += '&idAttore=' + idAttore;
    }
    if (idTipologiaRicorso > 0) {
      parametriUrl += '&idTipologiaRicorso=' + idTipologiaRicorso;
    }
    if (idProceduraRiferimento > 0) {
      parametriUrl += '&idProceduraRiferimento=' + idProceduraRiferimento;
    }
    if (dataInizio) {
      parametriUrl += '&dataInizio=' + dataInizio;
    }
    if (dataFine) {
      parametriUrl += '&dataFine=' + dataFine;
    }
    if (dataScadenza) {
      parametriUrl += '&dataScadenza=' + dataScadenza;
    }
    parametriUrl += '&dimensione=' + dim + '&ordine=' + ordine + '&pagina=' + pagina;
    url = url + parametriUrl.substring(1);
    console.log('url: ', url)
    return this.http.get<Rilevazione[]>(url);
  }

  getRilevazioneId(id: number): Observable<Rilevazione> {
    return this.http.get<Rilevazione>(environment.API_URI + 'rilevazioni/' + id);
  } */

  /*   getRilevazioni(idProdotto: number): Observable<Rilevazione> {
    return this.http.get<Rilevazione>(environment.API_URI+'rilevazioni?idProdotto='+idProdotto);
  } */


  contaRicercaProdotto(settore?: number | null, area?: number | null, sede?: string[] | null, dataInizio?: string | null, dataFine?: string | null, idStatoSegnalazione?: number | null, ruolo?: string | null, utenteLoggato?: string | null, sourceCall?: string | null, sedeVuota?: boolean | null): Observable<{count: number}> {

    // console.log('dataInizio:',dataInizio!);
    // console.log('dataInizio:',dataInizio!.setHours(dataInizio!.getHours() + (2/3)));
    // console.log('new Date(dataInizio):',new Date(dataInizio!.setHours(dataInizio!.getHours() + 2)));
    // console.log('new Date',new Date(Date.now()));

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
    // console.log('params:',params);

    return this.http.get<{ count: number }>(`${this.apiUrl}SegnalazioneProdotto/contaRicerca`, {
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
    // if (sede) params = params.set('sede', sede);
    if (dataInizio) params = params.set('dataInizio', dataInizio);
    if (dataFine) params = params.set('dataFine', dataFine);
    if (idStatoSegnalazione) params = params.set('idStatoSegnalazione', idStatoSegnalazione.toString());
    if (idTipologiaContenzioso) params = params.set('idTipologiaContenzioso', idTipologiaContenzioso.toString());
    if (ruolo) params = params.set('ruolo', ruolo);
    if (utenteLoggato) params = params.set('utenteLoggato', utenteLoggato);
    if (sourceCall) params = params.set('sourceCall', sourceCall);
    if (sedeVuota) params = params.set('sedeVuoto', sedeVuota);
    return this.http.get<{ count: number }>(
      `${this.apiUrl}SegnalazioniContenziosi/contaRicercaContenziosi`,
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
      .get<any[]>(`${this.apiUrl}SegnalazioneProdotto/getRicerca`, { params })
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
    // if (sede) params = params.set('sede', sede);
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
      .get<any[]>(`${this.apiUrl}SegnalazioniContenziosi/getRicercaContenziosi`, { params })
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
      `${this.apiUrl}SegnalazioniEAspettiProdotti/salvaSegnalazioneProdotto`,
      segnalazioneProdotto
    );
  }

  salvaSegnalazioneContenzioso(segnalazioneContenzioso: any): Observable<any> {
    /* if (segnalazioneContenzioso.idArea == 0) {
      segnalazioneContenzioso.idArea = null;
    }
    if (segnalazioneContenzioso.contenziosoId == 0) {
      segnalazioneContenzioso.contenziosoId = null;
    } */
    return this.http.post<any>(`${this.apiUrl}SegnalazioniEAspettiContenzioso/salvaSegnalazione`, segnalazioneContenzioso);
  }
    /* salvaSegnalazioneProdotto(segnalazioneProdotto: FormData): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}api/SegnalazioniEAspettiProdotti/salvaSegnalazioneProdotto`, segnalazioneProdotto);
    }

    salvaSegnalazioneContenzioso(segnalazioneContenzioso: FormData): Observable<any> {
      return this.http.post<any>(`${this.apiUrl}api/SegnalazioniEAspettiContenzioso/salvaSegnalazione`, segnalazioneContenzioso);
    } */


  getDettagliSegnalazioneById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(
      `${this.apiUrl}SegnalazioniEAspettiProdotti/getDettagliSegnalazioneById`,
      { params }
    );
  }

  getDettagliAspettoSegnalazioneById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}SegnalazioniEAspettiProdotti/getAspettoSegnalazioneById/${id}`
    );
  }

  getDettagliAspettoSegnalazioneContenziosoById(id: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}SegnalazioniEAspettiContenzioso/getAspettoSegnalazioneById/${id}`
    );
  }

  getDettagliSegnalazioneContenziosoById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get<any>(
      `${this.apiUrl}SegnalazioniEAspettiContenzioso/getDettagliSegnalazioneContenziosoById`,
      { params }
    );
  }

  updateIntegrazioni(integrazioni: salvaDettagliASDTO[], matricola: string,statoSalvataggioSegnalazione: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const payload = {integrazioni, matricola, statoSalvataggioSegnalazione,};
    return this.http.post<any>(`${this.apiUrl}SegnalazioniEAspettiProdotti/aggiornaDettagliSegnalazione`, payload, { headers });
  }

  updateIntegrazioniContezioso(integrazioni: salvaDettagliASDTO[], matricola: string, statoSalvataggioSegnalazione: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const payload = {integrazioni, matricola, statoSalvataggioSegnalazione,};
    return this.http.post<any>(`${this.apiUrl}SegnalazioniEAspettiContenzioso/aggiornaDettagliSegnalazione`, payload, { headers });
  }

  /*   saveRilevazione(rilevazione: Rilevazione): Observable<any> {
    // alert(JSON.stringify(rilevazione));
    console.log(JSON.stringify(rilevazione));
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(rilevazione);
    return this.http.post(environment.API_URI + 'rilevazioni', body, { headers });
  }

  updateRilevazione(rilevazione: Rilevazione): Observable<any> {
    // alert(JSON.stringify(rilevazione));
    //console.log(JSON.stringify(rilevazione));
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(rilevazione);
    return this.http.post(environment.API_URI + 'rilevazioni' + '/aggiorna', body, { headers });
  } */
  /*
  conta(
    idProdotto: number,
    idProdottoTipologiaLavoratore: number,
    idAttore: number,
    idTipologiaRicorso: number,
    idProceduraRiferimento: number,
    dataInizio: string,
    dataFine: string,
    dataScadenza: boolean
  ): Observable<number> {
    // console.log('conta');
    let url = environment.API_URI + 'rilevazioni/conta';
    let parametriUrl = '';
    if (idProdotto > 0) {
      parametriUrl += '&idProdotto=' + idProdotto;
    }
    if (idProdottoTipologiaLavoratore > 0) {
      parametriUrl += '&idProdottoTipologiaLavoratore=' + idProdottoTipologiaLavoratore;
    }
    if (idAttore > 0) {
      parametriUrl += '&idAttore=' + idAttore;
    }
    if (idTipologiaRicorso > 0) {
      parametriUrl += '&idTipologiaRicorso=' + idTipologiaRicorso;
    }
    if (idProceduraRiferimento > 0) {
      parametriUrl += '&idProceduraRiferimento=' + idProceduraRiferimento;
    }
    if (dataInizio) {
      parametriUrl += '&dataInizio=' + dataInizio;
    }
    if (dataFine) {
      parametriUrl += '&dataFine=' + dataFine;
    }
    if (dataScadenza) {
      parametriUrl += '&dataScadenza=' + dataScadenza;
    }
    console.log('url: ', url)
    if (parametriUrl.substring(1)) {
      url = url + '?' + parametriUrl.substring(1);
    }
    return this.http.get<number>(url);
  } */

  /* getRilevazioniExcel(
    idProdotto: number,
    idProdottoTipologiaLavoratore: number,
    idAttore: number,
    idTipologiaRicorso: number,
    idProceduraRiferimento: number,
    dataInizio: string,
    dataFine: string,
    dataScadenza: string,
    account: string,
    matricola: string
  ): Observable<Rilevazione[]> {
    let url = environment.API_URI + 'rilevazioni?';
    let parametriUrl = '';
    if (idProdotto > 0) {
      parametriUrl += '&idProdotto=' + idProdotto;
    }
    if (idProdottoTipologiaLavoratore > 0) {
      parametriUrl += '&idProdottoTipologiaLavoratore=' + idProdottoTipologiaLavoratore;
    }
    if (idAttore > 0) {
      parametriUrl += '&idAttore=' + idAttore;
    }
    if (idTipologiaRicorso > 0) {
      parametriUrl += '&idTipologiaRicorso=' + idTipologiaRicorso;
    }
    if (idProceduraRiferimento > 0) {
      parametriUrl += '&idProceduraRiferimento=' + idProceduraRiferimento;
    }
    if (dataInizio) {
      parametriUrl += '&dataInizio=' + dataInizio;
    }
    if (dataFine) {
      parametriUrl += '&dataFine=' + dataFine;
    }
    if (dataScadenza) {
      parametriUrl += '&dataScadenza=' + dataScadenza;
    }
    if (account) {
      parametriUrl += '&account=' + account;
    }
    if (matricola) {
      parametriUrl += '&matricola=' + matricola;
    }
    url = url + parametriUrl.substring(1);
    return this.http.get<Rilevazione[]>(url);
  }

  prendiInCarico(id: number): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = '';
    return this.http.post(environment.API_URI + 'rilevazioni/' + id + '/presaIncarico', body, {
      headers,
    });
  }

  getScadenzaRilevazioni(
    scadenza: string,
    account: string,
    matricola: string
  ): Observable<Rilevazione[]> {
    let url = environment.API_URI + 'rilevazioni/scadenzaRilevazioni';
    let parametriUrl = '';
    if (account) {
      parametriUrl += '&account=' + account;
    }

    if (matricola) {
      parametriUrl += '&matricola=' + matricola;
    }
    if (scadenza != '' && scadenza != null) {
      parametriUrl += '&scadenza=' + scadenza;
    }
    url = url + '?' + parametriUrl.substring(1);
    return this.http.get<Rilevazione[]>(url);
  } */

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
        this.apiUrl +
          'SegnalazioniEAspettiProdotti/eliminaSegnalazioneEDettagli/' +
          idSegnalazione,
        { headers }
      );
    } /*if (tipologiaSegnalazione == 'Contenzioso')*/ else {
      return this.http.delete(
        this.apiUrl +
          'SegnalazioniEAspettiContenzioso/eliminaSegnalazioneEDettagli/' +
          idSegnalazione,
        { headers }
      );
    }
  }

  sendSegnalazione(tipologiaSegnalazione: string, idSegnalazione: number, statoId: number) {
    const headers = { 'content-type': 'application/json' };

    if (tipologiaSegnalazione == 'Prodotto') {
      return this.http.post<any>(
        `${this.apiUrl}SegnalazioneProdotto/aggiorna-stato-segnalazione?idSegnalazione=` +
          idSegnalazione +
          `&idStatoSegnalazione=` +
          (statoId + 1),
        headers
      ); //this.httpOptions);
    } else {
      return this.http.post<any>(
        `${this.apiUrl}SegnalazioniContenziosi/aggiorna-stato-segnalazione?idSegnalazione=` +
          idSegnalazione +
          `&idStatoSegnalazione=` +
          (statoId + 1),
        headers
      ); //this.httpOptions);
    }
  }
}

// export interface DC_getSegnalazioneDTO
// {
//     public long Id { get; set; }
//     public DateTime? DataInvio { get; set; }
//     public DateTime? DataRisoluzione { get; set; }
//     public long? SettoreId { get; set; }
//     public string? SettoreNome { get; set; }
//     public long AreaId { get; set; }
//     public string? AreaNome { get; set; }
//     public int StatoId { get; set; }
//     public string? StatoDescrizione { get; set; }
//     public string? SedeId { get; set; }
//     public string? SedeNome { get; set; }
//     public long? contenziosoId { get; set; }
//     public string? contenziosoDesc { get; set; }
// }
