export interface InfoUtente {
  role: string
  matricola: string,
  codiceFiscale: string,
  email: string,
  accountWindows: string,
  nominativo: string,
  nome: string,
  cognome: string,
  codiceSede: string,
  codiceSedeSAP: string,
  profiloVEGA: string,
  qualifica: string,
  ruoli: string,
  authorities: [
    {
      application: string,
      role: string,
      authority: string
    }
  ],
  enabled: boolean,
  password: string,
  username: string,
  amministratore: boolean,
  dirigenteCentrale: boolean,
  utenteAbilitato: boolean,
  accountNonLocked: boolean,
  credentialsNonExpired: boolean,
  accountNonExpired: boolean
}
