import { TipoComunicazione } from "./tipo-comunicazione.model";


export class Comunicazione{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  oggetto!: string;
  messaggio!: string;
  dataInizio!: Date;
  dataFine!: Date;
  tipoComunicazione!: TipoComunicazione;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.oggetto = '';
    this.messaggio = '';
    this.dataInizio = new Date();
    this.dataFine = new Date();
    this.tipoComunicazione = new TipoComunicazione();
  }
}
