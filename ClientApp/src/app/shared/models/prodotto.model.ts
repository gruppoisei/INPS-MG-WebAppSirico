import { Sottoarea } from './sottoarea.model';

export class Prodotto{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  ordine!: number;
  nome!: string;
  sottoarea!: Sottoarea;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.ordine = 0;
    this.nome = '';
    this.sottoarea = new Sottoarea();
  }
}
