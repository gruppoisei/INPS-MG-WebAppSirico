import { Prodotto } from "./prodotto.model";
import { TipologiaLavoratore } from "./tipologia-lavoratore.model";

export class ProdottiTipologieLavoratori {

  id!: number;
  creato!: Date;
  aggiornato!: Date;
  prodotto!: Prodotto;
  tipologiaLavoratore!: TipologiaLavoratore;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.prodotto = new Prodotto();
    this.tipologiaLavoratore = new TipologiaLavoratore();
  }

}

