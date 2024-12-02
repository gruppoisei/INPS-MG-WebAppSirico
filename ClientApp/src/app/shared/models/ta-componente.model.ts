import { Componente } from "./componente.model";
import { TipologiaAnalisi } from "./tipologia-analisi.model";

export class TaComponente {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  nome!: string;
  tipologiaAnalisi!: TipologiaAnalisi;
  componente!: Componente;
  peso!: number;

  constructor(){
    this.tipologiaAnalisi = new TipologiaAnalisi();
    this.componente = new Componente();
  }
}
