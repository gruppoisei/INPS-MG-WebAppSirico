import { Componente } from './componente.model';
import { TipologiaAnalisi } from './tipologia-analisi.model';

export interface TaComponente {
    id: number;
    creato: Date;
    aggiornato: Date;
    tipologiaAnalisi: TipologiaAnalisi;
    componente: Componente;
    peso: number;
}
export interface TaComponenteEsistente{
  id: number;
}

export interface Criterio {
    id: number;
    creato: Date;
    aggiornato: Date;
    nome: string;
}

export interface CriterioEsistente{
  id: number;
}

export interface TaComponenteCriterio {
    id: number;
    creato: Date;
    aggiornato: Date;
    taComponente: TaComponente;
    criterio: Criterio;
    peso: number;
    descrizione: string;
}

export interface TaComponenteCriterioNuovo {

  taComponente: TaComponenteEsistente;
  criterio: CriterioEsistente;
  peso: number;
  descrizione: string;
}



export interface TaComponenteCriterioLookup {
    id: number;
    descrizione: string;
}

export interface ComponenteCriterioItem {
    id: number;
    componenteId: number;
    componente: string;
    criterioId: number;
    criterio: string;
    descrizione: string;
    peso: number;
    testo: string;
}

export interface AnalisiComponenteCriterioItem {
  analisi: string;
  componente: string;
  criterio: string;
  descrizione: string;
}
