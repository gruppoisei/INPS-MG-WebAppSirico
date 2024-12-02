import { Comunicazione } from "./comunicazione.model";


export class RuoloComunicazione{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  comunicazione!: Comunicazione;
  ruolo: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.comunicazione = new Comunicazione();
    this.ruolo = '';
  }

}

