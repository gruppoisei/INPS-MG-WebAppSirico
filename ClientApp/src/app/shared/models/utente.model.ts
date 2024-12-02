export class Utente{
  username!: string;
  // accountWindows!: string;
  codiceFiscale!: string;
  sede!: string;
  // codiceSede!: string;
  codiceSedeSAP!: string;
  cognome!: string;
  nome!: string;
  matricola!: string;
  email!: string;
  ruoli!: string;
  ruolo!: string;
  // descrizioneRuolo!: string;

  constructor(){
    this.username = '';
    this.codiceFiscale = '';
    this.sede = '';
    this.codiceSedeSAP = '';
    this.cognome = '';
    this.nome = '';
    this.matricola = '';
    this.email = '';
    this.ruoli = '';
    this.ruolo = '';
  }
};
