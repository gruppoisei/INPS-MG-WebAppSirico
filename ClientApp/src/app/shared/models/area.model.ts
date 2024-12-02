export class Area {
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  nome!: string;

  constructor() {
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.nome = '';
  }
}
