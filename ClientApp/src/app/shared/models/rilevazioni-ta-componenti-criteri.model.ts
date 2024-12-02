import { Rilevazione } from "./rilevazione.model";
import { StatiRilevazione } from "./stati-rilevazione.model";
import { TaComponentiCriteri } from "./ta-componenti-criteri.model";

export class RilevazioniTaComponentiCriteri {

  id!: number;
  creato!: Date;
  aggiornato!: Date;
  note!: string;
  rilevazione!: Rilevazione;
  statoRilevazione!: StatiRilevazione;
  taComponenteCriterio!: TaComponentiCriteri;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.note = '';
    this.rilevazione = new Rilevazione();
    this.statoRilevazione = new StatiRilevazione();
    this.taComponenteCriterio = new TaComponentiCriteri();

  }
}

export interface RilevazioneRilevazioneTaComponenteCriterio {
  rilev: Rilevazione;
  rilevTaCompCrit: RilevazioniTaComponentiCriteri[];
}
