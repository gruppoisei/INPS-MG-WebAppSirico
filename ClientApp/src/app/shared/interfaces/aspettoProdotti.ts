export interface AspettoProdotti{
  idAspetto: number | null;
  nomeAspetto: string | null;
  descrizioneAspetto: string | null;
  idAspettoSegnalazione: number | null;
  criticita: string | null;
  suggerimento: string | null;
  integrazioneDR: string | null;
  integrazioneDC: string | null;
  nuovoAspetto: boolean | null;
  idStato: number | null;
  hasAllegato: boolean;
}
