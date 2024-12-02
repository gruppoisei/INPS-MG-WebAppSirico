export class RuoliComunicazioni{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  idComunicazione!: number;
  ruolo: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.idComunicazione = 0;
    this.ruolo = '';
  }

}

