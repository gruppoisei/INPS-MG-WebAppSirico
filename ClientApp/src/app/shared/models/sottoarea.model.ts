import { Area } from './area.model';

export class Sottoarea{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  ordine!: number;
  nome!: string;
  area!: Area;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.ordine = 0;
    this.nome = '';
    this.area = new Area();
  }
}
