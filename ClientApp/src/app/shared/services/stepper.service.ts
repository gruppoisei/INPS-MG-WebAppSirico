import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepperService { // da rinominare: segnalazioni service

  titolo: string = "";
  checkNuovoAspetto: boolean | undefined = undefined;

  public dialogClosed$: Subject<void> = new Subject<void>();


  inserimentoTipoSegnalazione!: string;
  inserimentoTipoSegnalazione$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.inserimentoTipoSegnalazione);

  datiAspetto!: Aspetto;
  datiAspetto$: BehaviorSubject<Aspetto | undefined> = new BehaviorSubject<Aspetto | undefined>(this.datiAspetto);

  settoreAreaSede!: any;
  settoreAreaSede$: BehaviorSubject<any | undefined> = new BehaviorSubject<any | undefined>(this.settoreAreaSede);

  noteAspetto!: string;
  noteAspetto$: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(this.noteAspetto);

  datiSegnalazioneProdotto!: segnalazioneProdotto;
  datiSegnalazioneProdotto$: BehaviorSubject<segnalazioneProdotto | undefined> = new BehaviorSubject<segnalazioneProdotto | undefined>(this.datiSegnalazioneProdotto);

  datiSegnalazioneContenzioso!: segnalazioneContenzioso;
  datiSegnalazioneContenzioso$: BehaviorSubject<segnalazioneContenzioso | undefined> = new BehaviorSubject<segnalazioneContenzioso | undefined>(this.datiSegnalazioneContenzioso);


  nuovoAspetto!: string;
  nuovoAspetto$: BehaviorSubject<string> = new BehaviorSubject<string>(this.nuovoAspetto);
  // nuovoAspetto$: BehaviorSubject<Aspetto | undefined> = new BehaviorSubject<Aspetto | undefined>(this.datiAspetto);

  constructor() { }

  setTitolo(campoDaModificare: string): void {
    this.titolo = campoDaModificare;
  }

  getTitolo(): string {
    return this.titolo;
  }

  setcheckNuovoAspetto(check: boolean): void {
    this.checkNuovoAspetto = check;
  }

  getcheckNuovoAspetto(): boolean {
    return this.checkNuovoAspetto!;
  }

  getAspetto(): Aspetto | undefined {
    return this.datiAspetto$.value;
  }

  checkStringOnlySpaces(testo: string): boolean {
    const isWhitespaceString = !/\S/.test(testo);
    return isWhitespaceString;
  }

}

export interface Aspetto {
  idAspetto: number,
  nomeAspetto: string,
  descrizioneCriticita: string,
  descrizioneSuggerimento: string,
  hasAllegato: boolean,
  nuovoAspetto: boolean
}

interface AspettoConNote {
  idAspetto: number,
  nomeAspetto: string,
  descrizioneCriticita: string,
  descrizioneSuggerimento: string,
  descrizioneNote: string
}

interface segnalazioneProdotto {
  areaId: number;
  areaProdotto: string;
  data1: string;
  data2: string;
  id: number;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string,
  statoId: number;
}

// interface segnalazioneProdotto {
//   id: number;
//   data1: string;
//   data2: string;
//   settoreMateria: string;
//   settoreId: number;
//   areaProdotto: string;
//   areaId: number;
//   sede: string;
//   sedeId: number;
//   statoId: number;
//   statoDesc: string,
//   inviata: boolean;
// }

interface segnalazioneContenzioso {
  areaId: number;
  areaProdotto: string;
  contenziosoDesc: string;
  contenziosoId: number;
  data1: string;
  data2: string;
  id: number;
  // tipologiaContenzioso: string;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string,
  statoId: number;
}


