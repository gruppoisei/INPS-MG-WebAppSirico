import { Injectable } from '@angular/core';

export interface AreaElement {
  id: number;
  nome: string;
  creato: string;
  aggiornato?: string;
}

export interface SottoareaElement {
  id: number;
  creato: string;
  aggiornato?: string;
  nome: string;
  idarea: number;
}

export interface ProdottoElement {
  id: number;
  creato: string;
  aggiornato?: string;
  nome: string;
  idsottoarea: number;
  idarea: number;
}

export interface AttoreElement {
  id: number;
  creato: string;
  aggiornato?: string;
  nome: string;
}

export interface TipologiaRicorsoElement {
  id: number;
  creato: string;
  aggiornato?: string;
  nome: string;
}

export interface ProceduraElement {
  id: number;
  creato: string;
  aggiornato?: string;
  nome: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  gender?: string;
  mobile?: string;
  tele?: string;
  city?: string;
  address?: string;
  birthday?: string;
  website?: string;
  company?: string;
  email?: string;
}

@Injectable()
export class AreaService {
  getAreaData() {
    return AREA_DATA;
  }
}

@Injectable()
export class SottoareaService {
  getSottoareaData(id: number) {
    alert('nuovo id ' + id);

    var SOTTOAREA_FILTERED: SottoareaElement[] = SOTTOAREA_DATA.filter(item => item.idarea === id);
    alert('num elem: ' + SOTTOAREA_FILTERED.length);
    return SOTTOAREA_FILTERED;
    //return SOTTOAREA_DATA.filter(item => item.idarea === id);
  }
}

@Injectable()
export class ProdottoService {
  getProdottoData() {
    return PRODOTTO_DATA;
  }
}

@Injectable()
export class AttoreService {
  getAttoreData() {
    return ATTORE_DATA;
  }
}

@Injectable()
export class TipologiaRicorsoService {
  getTipologiaRicorsoData() {
    return TIPOLOGIA_RICORSO_DATA;
  }
}

@Injectable()
export class ProceduraService {
  getProceduraData() {
    return PROCEDURA_DATA;
  }
}

@Injectable()
export class TablesDataService {
  getData() {
    return ELEMENT_DATA;
  }
}

const AREA_DATA: AreaElement[] = [
  {
    id: 1,
    nome: 'Gestione Separata',
    creato: '30/11/2021',
    aggiornato: '10/02/2022'
  },
  {
    id: 2,
    nome: 'ATPO',
    creato: '18/01/2022',
    aggiornato: '31/03/2022'
  },
  {
    id: 3,
    nome: 'Pensioni',
    creato: '04/11/2020',
    aggiornato: '10/07/2021'
  },
];

const SOTTOAREA_DATA: SottoareaElement[] = [
  {
    id: 1,
    creato: '30/11/2021',
    aggiornato: '18/02/2022',
    nome: 'Gestione Separata 1.1',
    idarea: 1
  },
  {
    id: 2,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Gestione Separata 1.2',
    idarea: 1
  },
  {
    id: 3,
    creato: '10/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Gestione Separata 1.3',
    idarea: 1
  },
  {
    id: 4,
    nome: 'ATPO 1.1',
    creato: '18/01/2022',
    aggiornato: '18/02/2022',
    idarea: 2
  },
  {
    id: 5,
    creato: '20/01/2022',
    aggiornato: '18/02/2022',
    nome: 'ATPO 1.2',
    idarea: 2
  },
  {
    id: 6,
    nome: 'Pensioni 1.1',
    creato: '04/11/2020',
    aggiornato: '18/02/2022',
    idarea: 3
  },
];

const PRODOTTO_DATA: ProdottoElement[] = [
  {
    id: 1,
    creato: '30/11/2021',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 1.1',
    idsottoarea: 1,
    idarea: 1
  },
  {
    id: 2,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 1.2',
    idsottoarea: 2,
    idarea: 1
  },
  {
    id: 3,
    creato: '10/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 1.3',
    idsottoarea: 3,
    idarea: 1
  },
  {
    id: 4,
    creato: '18/01/2022',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 2.4',
    idsottoarea: 4,
    idarea: 2
  },
  {
    id: 5,
    creato: '20/01/2022',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 2.5',
    idsottoarea: 5,
    idarea: 2
  },
  {
    id: 6,
    creato: '04/11/2020',
    aggiornato: '18/02/2022',
    nome: 'Prodotto 3.6',
    idsottoarea: 6,
    idarea: 3
  },
];

const ATTORE_DATA: AttoreElement[] = [
  {
    id: 1,
    creato: '30/11/2021',
    aggiornato: '18/02/2022',
    nome: 'Centrale'
  },
  {
    id: 2,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Territoriale'
  },
];

const TIPOLOGIA_RICORSO_DATA: TipologiaRicorsoElement[] = [
  {
    id: 1,
    creato: '30/11/2021',
    aggiornato: '18/02/2022',
    nome: 'Amministrativo'
  },
  {
    id: 2,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Giudiziario'
  },
  {
    id: 3,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'Sanitario'
  }
];

const PROCEDURA_DATA: TipologiaRicorsoElement[] = [
  {
    id: 1,
    creato: '30/11/2021',
    aggiornato: '18/02/2022',
    nome: 'DICA'
  },
  {
    id: 2,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'INCAS'
  },
  {
    id: 3,
    creato: '05/12/2021',
    aggiornato: '18/02/2022',
    nome: 'SISCO'
  }
];

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-12345678',
    city: 'New York',
    address: '555 Lexington Avenue',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    gender: 'male',
    mobile: '13034676675',
    tele: '010-23456781',
    city: 'Shanghai',
    address: '88 Songshan Road',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Helium@gmail.com',
  },
  {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    gender: 'male',
    mobile: '15376892233',
    tele: '010-34567812',
    city: 'Los Angeles',
    address: '48400 Seminole Dr.,Cabazon',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Lithium@gmail.com',
  },
  {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    gender: 'male',
    mobile: '13765443298',
    tele: '010-45678123',
    city: 'Beijing',
    address: 'chaoyang',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Beryllium@gmail.com',
  },
  {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-56781234',
    city: 'Berlin',
    address: 'Bernauer Str.111,13355',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Boron@gmail.com',
  },
  {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    gender: 'male',
    mobile: '13166665432',
    tele: '010-67812345',
    city: 'Madrid',
    address: 'Madrid International Exhibition Center',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Carbon@gmail.com',
  },
  {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    gender: 'male',
    mobile: '15811112222',
    tele: '010-78123456',
    city: 'Sydney',
    address: 'Circular Quay, Sydney NSW 2000',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Nitrogen@gmail.com',
  },
  {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    gender: 'male',
    mobile: '15044558899',
    tele: '010-81234567',
    city: 'Washington',
    address: 'University of Washington',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Oxygen@gmail.com',
  },
  {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    gender: 'male',
    mobile: '13198666677',
    tele: '010-12345678',
    city: 'London',
    address: 'unkown',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Fluorine@gmail.com',
  },
  {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    gender: 'male',
    mobile: '17098765432',
    tele: '010-12345678',
    city: 'Paris',
    address: 'Rue Croix des Petits Champs',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Neon@gmail.com',
  },
  {
    position: 11,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    gender: 'male',
    mobile: '13166665432',
    tele: '010-23456781',
    city: 'Madrid',
    address: 'Madrid International Exhibition Center',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Carbon@gmail.com',
  },
  {
    position: 12,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    gender: 'male',
    mobile: '15811112222',
    tele: '010-34567812',
    city: 'Sydney',
    address: 'Circular Quay, Sydney NSW 2000',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Nitrogen@gmail.com',
  },
  {
    position: 13,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    gender: 'male',
    mobile: '15044558899',
    tele: '010-45678123',
    city: 'Washington',
    address: 'University of Washington',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Oxygen@gmail.com',
  },
  {
    position: 14,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    gender: 'male',
    mobile: '13198666677',
    tele: '010-56781234',
    city: 'London',
    address: 'unkown',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Fluorine@gmail.com',
  },
  {
    position: 15,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    gender: 'male',
    mobile: '17098765432',
    tele: '010-67812345',
    city: 'Paris',
    address: 'Rue Croix des Petits Champs',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Neon@gmail.com',
  },
  {
    position: 16,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-78123456',
    city: 'New York',
    address: '555 Lexington Avenue',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Hydrogen@gmail.com',
  },
  {
    position: 17,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    gender: 'male',
    mobile: '13034676675',
    tele: '010-81234567',
    city: 'Shanghai',
    address: '88 Songshan Road',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Helium@gmail.com',
  },
  {
    position: 18,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    gender: 'male',
    mobile: '15376892233',
    tele: '010-12345678',
    city: 'Los Angeles',
    address: '48400 Seminole Dr.,Cabazon',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Lithium@gmail.com',
  },
  {
    position: 19,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    gender: 'male',
    mobile: '13765443298',
    tele: '010-12345678',
    city: 'Beijing',
    address: 'chaoyang',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Beryllium@gmail.com',
  },
  {
    position: 20,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    gender: 'male',
    mobile: '13198765432',
    tele: '010-23456781',
    city: 'Berlin',
    address: 'Bernauer Str.111,13355',
    birthday: '1607926887075',
    website: 'www.matero.com',
    company: 'matero',
    email: 'Boron@gmail.com',
  },
];


