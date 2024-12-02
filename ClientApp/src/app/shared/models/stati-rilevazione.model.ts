export class StatiRilevazione {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  livello!: number;
  nome!: string;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.livello = 0;
    this.nome = '';
  }
}
