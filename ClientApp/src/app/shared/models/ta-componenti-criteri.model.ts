import { Criterio } from "./criterio.model";
import { TaComponente } from "./ta-componente.model";
export class TaComponentiCriteri {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  taComponente!: TaComponente;
  criterio!: Criterio;
  peso!: number;
  descrizione!: string;

  constructor(){
    this.taComponente = new TaComponente();
    this.criterio = new Criterio();
  }
}
