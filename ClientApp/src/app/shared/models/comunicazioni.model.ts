export class Comunicazioni{
  id!: number;
  creato!: Date;
  aggiornato!: Date;
  oggetto!: string;
  messaggio!: string;
  dataInizio!: string;
  dataFine!: string;
  idTipoComunicazione!: number;

  constructor(){
    this.id = 0;
    this.creato = new Date();
    this.aggiornato = new Date();
    this.oggetto = '';
    this.messaggio = '';
    this.dataInizio =  '';
    this.dataFine =  '';
    this.idTipoComunicazione = 0
  }
}
