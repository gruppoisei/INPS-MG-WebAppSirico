export class StatoSalvataggioRilevazione {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  stato!: string;

  constructor() {
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.stato = '';
  }

}
