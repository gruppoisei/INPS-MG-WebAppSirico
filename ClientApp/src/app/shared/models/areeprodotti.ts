export class AreeProdotti
{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  nome!: string;
  idSettore!: number;

  constructor() {
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.nome = '';
    this.idSettore = 0;
  }
}

