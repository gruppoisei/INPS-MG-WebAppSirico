import { Attore } from './attore.model';
import { ProceduraRiferimento } from './procedura-riferimento.model';
import { ProdottiTipologieLavoratori } from './prodotti-tipologie-lavoratori.model';
import { TipologiaRicorso } from './tipologia-ricorso.model';
import { StatoSalvataggioRilevazione } from './stato-salvataggio-rilevazione.model';

export class Rilevazione {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  confermata!: boolean;
  prodottoTipologiaLavoratore!: ProdottiTipologieLavoratori;
  attore!: Attore;
  tipologiaRicorso!: TipologiaRicorso;
  proceduraRiferimento!: ProceduraRiferimento;
  matricolaIns!: string;
  scadenza!: Date;
  matricolaIncarico!: string;
  sede!: string;
  statoSalvataggioRilevazione!: StatoSalvataggioRilevazione;
  ruoloIns!: string;

  constructor() {
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.confermata = false;
    this.prodottoTipologiaLavoratore = new ProdottiTipologieLavoratori();
    this.attore = new Attore();
    this.tipologiaRicorso = new TipologiaRicorso();
    this.proceduraRiferimento = new ProceduraRiferimento();
    this.matricolaIns = '';
    this.scadenza = new Date();
    //this.matricolaIncarico = '';
    this.sede = '';
    this.statoSalvataggioRilevazione = new StatoSalvataggioRilevazione();
    this.ruoloIns = '';

  }
}
export interface Rilevazione {
  rilev: Rilevazione;
}

export interface RilevazioneToExcel {
  Creato: string;
  UltimaModifica: string;
  Area: string;
  SottoArea: string;
  Prodotto: string;
  TipologiaLavoratore: string;
  Attore: string;
  TipologiaRicorso: string;
  ProceduraRiferimento: string;
  Scadenza: string;
  Stato: string;
}
