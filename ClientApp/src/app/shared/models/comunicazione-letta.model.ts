/* import { Comunicazione } from "./comunicazione.model";


export class ComunicazioneLetta{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  comunicazione!: Comunicazione;
  matricola!: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.comunicazione = new Comunicazione();
    this.matricola = '';
  }
} */

export class ComunicazioneLetta{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  idComunicazione!: number;
  matricola!: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.idComunicazione = 0;
    this.matricola = '';
  }
}

