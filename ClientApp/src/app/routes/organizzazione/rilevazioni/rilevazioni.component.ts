import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { TablesDataService } from './data.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Aree } from '@shared/services/areeservice.service';
import { TipologiaRicorso } from '@shared/models/tipologia-ricorso.model';
import { ProceduraRiferimento } from '@shared/models/procedura-riferimento.model';
import { Router } from '@angular/router';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { RilevazioniDialogComponent } from './rilevazioni-dialog/rilevazioni-dialog.component';
import { Sort } from '@angular/material/sort';
import { Rilevazione, RilevazioneToExcel } from '@shared/models/rilevazione.model';
import { StepperService } from '@shared/services/stepper.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { ContenziosoService } from '@shared/services/contenzioso.service';
import { ModalModificaSegnalazioneComponent } from './modal-modifica-segnalazione/modal-modifica-segnalazione.component';
import { StorageService } from '@shared';
import { map, Observable, startWith, switchMap, tap } from 'rxjs';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
//import * as XLSX from 'xlsx-style';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import * as moment from 'moment';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-rilevazioni',
  templateUrl: './rilevazioni.component.html',
  styleUrls: ['./rilevazioni.component.scss'],
  providers: [TablesDataService],
})
export class RilevazioniComponent implements OnInit, OnDestroy {
  @ViewChild('areaInput', { read: MatAutocompleteTrigger })
  areaAutocompleteTrigger!: MatAutocompleteTrigger;
  @ViewChild('sedeInput', { read: MatAutocompleteTrigger })
  sedeAutocompleteTrigger!: MatAutocompleteTrigger;
  @ViewChild('tipologiaContenziosoInput', { read: MatAutocompleteTrigger })
  tipologiaContenziosoAutocompleteTrigger!: MatAutocompleteTrigger;
  listaTipologieRicorsi: TipologiaRicorso[] = [];
  listaProcedureRiferimenti: ProceduraRiferimento[] = [];
  sottoCatDisab = true;
  prodottoDisab = true;
  prodottoTipLavDisab = true;
  // list: any[] = [];
  dataSource: any[] = [];
  isLoading = true;
  ricercaAtt = false;
  listaRilevazioni: Rilevazione[] = [];
  imageUrl: string[] = [];
  settoreMateria: SettoreMateria[] = [];
  areaProdotto: AreaProdotto[] = [];
  tutteLeAreeProdotto: AreaProdotto[] = [];
  sede: Sede[] = [];
  tipologieContenzioso: tipologieContenzioso[] = [];
  prodotti: segnalazioneProdotto[] = [];
  contenziosi: segnalazioneContenzioso[] = [];
  aspetti: Aspetti[] = [
    { id: null, nome: '' },
    { id: 1, nome: 'Nuovi Aspetti' },
    { id: 2, nome: 'Solo Aspetti Standard' },
  ];
  role: string | null = null;

  tabProdotto: number = 0
  checkCurrentComponent: string | null = null;  // verifica se sto navigando verso nuovo inserimento o un altro componente

  errorMessage: string | null = null;
  // codiceSede: string[] = [];
  codiceSede: any[] = [];
  readonly ruoloRegionale: string = 'P12799';
  readonly ruoloProvinciale: string = 'P12801';
  readonly ruoloAmministratore: string = 'P12689';
  readonly ruoloDCO: string = 'P12690';
  readonly ruoloInformatico: string = 'P12800';
  readonly pagina: string = 'Inserimento';

  /*nome del file excel che verrà scaricato. */
  fileName = 'RilevazioniExcel';

  /*parametri*/
  formRicerca = this.formBuilder.group({
    settore: null,
    area: null,
    idSottoarea: null,
    idProdotto: null,
    idProdottoTipLav: null,
    idAttore: null,
    idTipologiaRicorso: null,
    idProceduraRiferimento: null,
    dataInizio: null,
    dataFine: null,
    dataScadenza: false,
    dimensione: null,
    pagina: null,
  });

  displayedColumnsProdotto: string[] = [
    'data1',
    'data2',
    'settoreMateria',
    'areaProdotto',
    'sede',
    'stato',
  ];
  displayedColumnsContenzioso: string[] = [
    'data1',
    'data2',
    'tipologiaContenzioso',
    'settoreMateria',
    'areaProdotto',
    'sede',
    'stato',
  ];
  dataInizio = new FormControl();
  dataFine = new FormControl();
  dataInizioContenzioso = new FormControl();
  dataFineContenzioso = new FormControl();
  settoreCtrl = new FormControl();
  filteredSettore: Observable<SettoreMateria[]> | undefined;

  areaCtrl = new FormControl();
  sedeCtrl = new FormControl();
  tipologiaContenziosoCtrl = new FormControl();

  filteredArea: Observable<AreaProdotto[]> | undefined;
  filteredSede: Observable<Sede[]> | undefined;
  filteredTipologiaContenzioso: Observable<tipologieContenzioso[]> | undefined;

  constructor(
    public dialog: MtxDialog,
    // private areeSrv: Aree,
    private rilevazioniSrv: RilevazioneService,
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog2: MatDialog,
    private stepperService: StepperService,
    private settoreMateriaService: SettoreMateriaService,
    private areeProdottiService: Aree,
    private territorioService: TerritorioService,
    private contenziosoService: ContenziosoService,
    private storageService: StorageService
  ) {}

  // resetFiltro() {
  //   this.formRicerca.reset();
  //   this.sottoCatDisab = true;
  //   this.prodottoDisab = true;
  //   this.prodottoTipLavDisab = true;
  //   this.list = [];
  //   this.isLoading = true;
  //   this.ricercaAtt = false;

  //   this.formRicerca.value.dataInizio = null;
  //   this.formRicerca.value.dataFine = null;
  //   this.formRicerca.value.dataScadenza = false;
  //   this.formRicerca.value.dimensione = null;
  //   this.formRicerca.value.idAttore = null;
  //   this.formRicerca.value.idProceduraRiferimento = null;
  //   this.formRicerca.value.idProdottoTipLav = null;
  //   this.formRicerca.value.idTipologiaRicorso = null;
  //   this.formRicerca.value.pagina = 1;
  //   this.formRicerca.value.area = null;
  //   this.formRicerca.value.settore = null;
  //   this.formRicerca.value.idSottoarea = null;
  //   this.formRicerca.value.idProdotto = null;
  //   this.ricercaAtt = false;
  //   this.isLoading = true;
  //   this.loadStack();
  // }

  ngOnDestroy(): void {
    if (this.checkCurrentComponent == null) {
      this.rilevazioniSrv.tabNomeSegnalazione$.next(undefined);
    }
  }

  async ngOnInit() {
    try {
      this.checkCurrentTab();
      this.resetPaginazioneProdotto();
      this.resetPaginazioneContenzioso();
      this.ricercaAtt = false;
      this.isLoading = true;
      // this.loadStack();
      this.getSettoriMaterie();
      this.getAreaProdotto();

      this.codiceSede = this.storageService.getItem('listaSedi');
      this.role = this.storageService.getItem('allroles');
      await this.getSedi();
      this.loadTipologieContenzioso();

    } catch (error) {
    }

    this.filteredSettore = this.settoreCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSettore(value))
    );

    this.filteredArea = this.areaCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterArea(value))
    );

    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );

    this.filteredTipologiaContenzioso = this.tipologiaContenziosoCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipologiaContenzioso(value))
    );

    // Aggiungi un listener per il controllo del settore
    this.settoreCtrl.valueChanges.subscribe(value => {
      if (!value) {
        this.getAreaProdotto();
      }
    });
  }

  ngAfterViewInit() {
    if(this.areaAutocompleteTrigger){
      this.areaAutocompleteTrigger.panelClosingActions
      .pipe(
        switchMap(() => this.filteredArea || []),
        tap(filtered => {
          if (this.areaCtrl.value && !filtered.some(option => option.id === this.areaCtrl.value)) {
            this.areaCtrl.setValue(null);
          }
        })
      )
      .subscribe();
    }

    if(this.sedeAutocompleteTrigger){
      this.sedeAutocompleteTrigger.panelClosingActions
      .pipe(
        switchMap(() => this.filteredSede || []),
        tap(filtered => {
          if (this.sedeCtrl.value && !filtered.some(option => option.id === this.sedeCtrl.value)) {
            this.sedeCtrl.setValue(null);
          }
        })
      )
      .subscribe();
    }

    if(this.tipologiaContenziosoAutocompleteTrigger){
      this.tipologiaContenziosoAutocompleteTrigger.panelClosingActions
      .pipe(
        switchMap(() => this.filteredTipologiaContenzioso || []),
        tap(filtered => {
          if (
            this.tipologiaContenziosoCtrl.value &&
            !filtered.some(option => option.id === this.tipologiaContenziosoCtrl.value)
          ) {
            this.tipologiaContenziosoCtrl.setValue(null);
          }
        })
      )
      .subscribe();
    }
  }

  checkCurrentTab() {
    // con
    // caso default, primo accesso alla pagina
    if (this.rilevazioniSrv.tabNomeSegnalazione$.value == undefined) {
      this.rilevazioniSrv.tabNomeSegnalazione$.next('Segnalazioni Prodotto');
    }
    else {
      if (this.rilevazioniSrv.tabNomeSegnalazione$.value == 'Segnalazioni Prodotto') {
        this.tabProdotto = 0;
      }
      else if (this.rilevazioniSrv.tabNomeSegnalazione$.value == 'Segnalazioni Contenzioso') {
        this.tabProdotto = 1;
      }
    }
  }

  tabClick(tab: any) {
    this.rilevazioniSrv.tabNomeSegnalazione$.next(tab.tab.textLabel);
  }

  /*private*/ _filterSettore(value: string): SettoreMateria[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.settoreMateria.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  /*private*/ _filterArea(value: string): AreaProdotto[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.areaProdotto.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  /*private*/ _filterSede(value: string): Sede[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.sede.filter(option =>
      this.showFieldSede(option.id!, option.nome).toLowerCase().includes(filterValue)
    );
  }

  /*private*/ _filterTipologiaContenzioso(value: string): tipologieContenzioso[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    // const filterValue = value.toLowerCase();
    return this.tipologieContenzioso.filter(option =>
      option.nome.toLowerCase().includes(filterValue)
    );
  }

  async settoreSelected(selectedId: number) {
    const selectedSettore = this.settoreMateria.find(option => option.id === selectedId);
    this.settoreCtrl.setValue(selectedSettore?.nome || '');
    this.settore = selectedId;
    // gestisci qualsiasi logica aggiuntiva quando un settore è selezionato
    try {
      await this.settoreMateriaSelezionatoConId(selectedId);
    } catch (error) {
      // console.error('Errore nel caricamento delle aree prodotto', error);
      this.errorMessage = 'Errore nel caricamento delle aree prodotto. Riprova più tardi.';
      this.dialog.alert('Errore nel caricamento delle aree prodotto. Riprova più tardi.');
    }
  }

  // async loadAreeProdotto(settoreId: number) {
  //   if (settoreId == null || settoreId == -1) {
  //     this.areaProdotto = [];
  //     this.getAreaProdotto();
  //   } else {
  //     this.areeProdottiService.newGetAllByIdSettore(settoreId).subscribe((data: any) => {
  //       if (data.length === 0) {
  //         alert('Nessuna area prodotto associata a questo settore.');
  //         this.areaProdotto = [];
  //       } else {
  //         this.areaProdotto = data;
  //       }
  //       this.filteredArea = this.areaCtrl.valueChanges.pipe(
  //         startWith(''),
  //         map(value => this._filterArea(value))
  //       );
  //     });
  //   }
  // }

  areaSelected(selectedId: number) {
    const selectedArea = this.areaProdotto.find(option => option.id === selectedId);
    this.areaCtrl.setValue(selectedArea?.nome || '');
    this.area = selectedId;
    // gestisci qualsiasi logica aggiuntiva quando un'area è selezionata
  }

  sedeSelected(selectedId: number) {
    const selectedSede = this.sede.find(option => option.id === selectedId);
    this.sedeCtrl.setValue(this.showFieldSede(selectedSede?.id!, selectedSede?.nome!) || '');
    this.filtroperSede = selectedId.toString();
    // gestisci qualsiasi logica aggiuntiva quando una sede è selezionata
  }

  tipologiaContenziosoSelected(selectedId: number) {
    const selectedTipologia = this.tipologieContenzioso.find(option => option.id === selectedId);
    this.tipologiaContenziosoCtrl.setValue(selectedTipologia?.nome || '');
    this.idTipologiaContenzioso = selectedId;
    // gestisci qualsiasi logica aggiuntiva quando una tipologia di contenzioso è selezionata
  }

  clearSettore() {
    this.settoreCtrl.setValue('');
    this.areaCtrl.setValue('');
    this.settore = null;
    this.area = null;
    this.filteredSettore = this.settoreCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSettore(value))
    );
    this.areaProdotto = [];
    this.getAreaProdotto(); // Ricarica tutte le aree prodotto
  }

  clearArea() {
    this.areaCtrl.setValue('');
    this.area = null;
    this.filteredArea = this.areaCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterArea(value))
    );
  }

  clearSede() {
    this.sedeCtrl.setValue('');
    this.filtroperSede = null;
    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );
  }

  clearTipologiaContenzioso() {
    this.tipologiaContenziosoCtrl.setValue('');
    this.idTipologiaContenzioso = null;
    this.filteredTipologiaContenzioso = this.tipologiaContenziosoCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipologiaContenzioso(value))
    );
  }

  clearDate(controlName: string) {
    if (controlName === 'dataInizio') {
      this.dataInizio.reset();
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');
    } else if (controlName === 'dataFine') {
      this.dataFine.reset();
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');
    } else if (controlName === 'dataInizioContenzioso') {
      this.dataInizioContenzioso.reset();
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');
    } else if (controlName === 'dataFineContenzioso') {
      this.dataFineContenzioso.reset();
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');
    }
    if (this.dataInizio.value == null && this.dataFine.value == null && this.dataInizioContenzioso.value == null && this.dataFineContenzioso.value == null){
      this.formatDate(null, null, 'Prodotto')
    }
  }

  async getSedi() {

    const ruoliTrimmed = this.role!.split(';').map(ruolo => ruolo.trim());

    if (ruoliTrimmed.includes("P12689")) {
    } else {
        if ((ruoliTrimmed.includes(this.ruoloRegionale) || ruoliTrimmed.includes(this.ruoloProvinciale)) && this.codiceSede.length === 0) {
          this.dialog.alert('Non ci sono sedi associate al tuo account.');
            return;
        }
    }

    this.territorioService.getSedi(this.role!, this.codiceSede, this.pagina, this.ruoloRegionale, this.ruoloProvinciale)
    .subscribe((results: Sede[]) => {
      const emptyObject = { id: null, nome: '' };
      this.sede = [emptyObject, ... results];
      // for(let i = 0; i < this.sede.length; i++) {
      // }

      // if (this.sede.length === 0) {
      //   this.dialog.alert('Non ci sono sedi disponibili.');
      //   return;
      // }

      // let selectedSede: string | undefined;
      // const loadTipoSegnalazioni = this.stepperService.inserimentoTipoSegnalazione$.value || 'Prodotto'; //caso default
      //   if (loadTipoSegnalazioni === 'Prodotto') {
      //     if (this.stepperService.datiSegnalazioneProdotto$.value) {
      //       selectedSede = this.stepperService.datiSegnalazioneProdotto$.value.sede;
      //     }
      //   } else {
      //     if (this.stepperService.datiSegnalazioneContenzioso$.value) {
      //       selectedSede = this.stepperService.datiSegnalazioneContenzioso$.value.sede;
      //     }
      //   }
/*
        this.sede.forEach(sede => {
          if (selectedSede === sede.nome) {
            console.log(`Selected Sede: ${sede.id}`);
          }
        }); */
      });

    this.inizializzaPaginazione('Prodotto');
    this.inizializzaPaginazione('Contenzioso');
  }

  // loadStack() {
  //   this.list = [];
  // }

  //----------------paginazione config--------------------------
  pageDimProdotto = '20'; //numero di righe per pagina
  pageDimContenzioso = '20'; //numero di righe per pagina
  pageCurrProdotto = 1; //pagina corrente
  pageCurrContenzioso = 1; //pagina corrente
  pageNumProdotto = 0; //numero di pagine
  pageNumContenzioso = 0; //numero di pagine
  elemNumProdotto = 0; //numero di elementi totali
  elemNumContenzioso = 0; //numero di elementi totali
  baseProdotto = 1; //base per creazione layout
  baseContenzioso = 1; //base per creazione layout
  layoutDimProdotto = 6; //elementi paginazione
  layoutDimContenzioso = 6; //elementi paginazione
  layoutNumbersProdotto: number[] = []; //numeri del paginatore
  layoutNumbersContenzioso: number[] = []; //numeri del paginatore
  numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
  ordine = 'aggiornato-desc'; //'id-desc';

  resetPaginazioneProdotto() {
    this.pageCurrProdotto = 1; //pagina corrente
    this.baseProdotto = 1; //base per creazione layout
    this.layoutDimProdotto = 6; //elementi paginazione
    this.layoutNumbersProdotto = []; //numeri del paginatore
  }

  resetPaginazioneContenzioso() {
    this.pageCurrContenzioso = 1; //pagina corrente
    this.baseContenzioso = 1; //base per creazione layout
    this.layoutDimContenzioso = 6; //elementi paginazione
    this.layoutNumbersContenzioso = []; //numeri del paginatore
  }

  validitaDal: string | null = null;
  validitaAl: string | null = null;

  formatDate(dataInizio: Date | null, dataFine: Date | null, tipoSegnalazione: string) {
    if (tipoSegnalazione === 'Prodotto') {
      if (dataInizio != null) {
        this.validitaDal = moment(this.dataInizio.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaDal = null;
      }
      if (dataFine != null) {
        this.validitaAl = moment(this.dataFine.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaAl = null;
      }
    } else if (tipoSegnalazione === 'Contenzioso') {
      if (dataInizio != null) {
        this.validitaDal = moment(this.dataInizioContenzioso.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaDal = null;
      }
      if (dataFine != null) {
        this.validitaAl = moment(this.dataFineContenzioso.value).startOf('day').format('YYYY-MM-DD');
      } else {
        this.validitaAl = null;
      }
    }
  }

  inizializzaPaginazione(tipoSegnalazione: string) {
    if (tipoSegnalazione === 'Prodotto') {
      this.inizializzaPaginazioneProdotto(false);
    } else if (tipoSegnalazione === 'Contenzioso') {
      this.inizializzaPaginazioneContenzioso(false);
    }
  }

  inizializzaPaginazioneProdotto(fromButton: boolean) {
    this.ricercaAtt = fromButton;

    this.layoutNumbersProdotto = [];

    this.rilevazioniSrv.contaRicercaProdotto(
      this.settore == -1 ? null : this.settore,
      this.area,
      this.selectSede(),
      this.validitaDal,
      this.validitaAl,
      this.idStatoSegnalazione,
      this.selectRole(),
      this.storageService.getItem('matricola'),
      this.pagina,
      (this.filtroperSede == null ? true : false)
    ).subscribe((response: any) => {
      this.pageCurrProdotto = (this.elemNumProdotto != response.totale) ? 1 : this.pageCurrProdotto;
      
      this.elemNumProdotto = response.totale != null ? response.totale : response.count;
      // this.elemNumProdotto = response.totale;
      this.pageNumProdotto = Math.ceil(this.elemNumProdotto / Number(this.pageDimProdotto));

      this.scorriLayoutProdotto();
      this.ricercaProdotto();
    });
  }

  inizializzaPaginazioneContenzioso(fromButton: boolean) {
    this.ricercaAtt = fromButton;

    this.layoutNumbersContenzioso = [];

    this.rilevazioniSrv.contaRicercaContenzioso(
      this.settore == -1 ? null : this.settore,
      this.area,
      this.selectSede(),
      this.validitaDal,
      this.validitaAl,
      this.idStatoSegnalazione,
      this.idTipologiaContenzioso,
      this.selectRole(),
      this.storageService.getItem('matricola'),
      this.pagina,
      (this.filtroperSede == null ? true : false)
    ).subscribe((response: any) => {
      this.pageCurrContenzioso = (this.elemNumContenzioso != response.totale) ? 1 : this.pageCurrContenzioso;

      this.elemNumContenzioso = response.totale != null ? response.totale : response.count;
      // this.elemNumContenzioso = response.totale;
      this.pageNumContenzioso = Math.ceil(this.elemNumContenzioso / Number(this.pageDimContenzioso));

      this.scorriLayoutContenzioso();
      this.ricercaContenzioso();
    });
  }

  formatToSixDigits(value: any): string | null {
    const numberValue = Number(value);
    if (value == null) {
      return null;
    }
    return numberValue.toString().padStart(6, '0');
  }

  //scorri layoutNumbers
  scorriLayoutProdotto() {
    const size = this.layoutDimProdotto; // Numero di elementi da visualizzare nel layout
    let currStart = Math.floor((this.pageCurrProdotto - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumProdotto);

    if (currEnd === this.pageNumProdotto && currEnd - currStart < size - 1) {
      currStart = Math.max(1, this.pageNumProdotto - size + 1);
    }

    this.layoutNumbersProdotto = [];
    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbersProdotto.push(i);
    }
  }

  scorriLayoutContenzioso() {
    const size = this.layoutDimContenzioso; // Numero di elementi da visualizzare nel layout
    let currStart = Math.floor((this.pageCurrContenzioso - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumContenzioso);

    if (currEnd === this.pageNumContenzioso && currEnd - currStart < size - 1) {
      currStart = Math.max(1, this.pageNumContenzioso - size + 1);
    }

    this.layoutNumbersContenzioso = [];
    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbersContenzioso.push(i);
    }
  }

  modificaPaginazione(tipoSegnalazione: string) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (tipoSegnalazione) {
      case prodotto: {
        this.resetPaginazioneProdotto();
        break;
      }
      case contenzioso: {
        this.resetPaginazioneContenzioso();
        break;
      }
    }
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageNextProdotto(tipoSegnalazione: string) {
    if (this.pageCurrProdotto < this.pageNumProdotto) {
      this.pageCurrProdotto++;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevProdotto(tipoSegnalazione: string) {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto--;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  setPageCurrProdotto(page: number, tipoSegnalazione: string) {
    this.pageCurrProdotto = page;
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageFirstProdotto() {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto = 1;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione('Prodotto');
    }
  }

  pageLastProdotto() {
    if (this.pageCurrProdotto < this.pageNumProdotto) {
      this.pageCurrProdotto = this.pageNumProdotto;
      this.scorriLayoutProdotto();
      this.inizializzaPaginazione('Prodotto');
    }
  }

  pageNextContenzioso(tipoSegnalazione: string) {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso++;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevContenzioso(tipoSegnalazione: string) {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso--;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  setPageCurrContenzioso(page: number, tipoSegnalazione: string) {
    this.pageCurrContenzioso = page;
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageFirstContenzioso() {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso = 1;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione('Contenzioso');
    }
  }

  pageLastContenzioso() {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso = this.pageNumContenzioso;
      this.scorriLayoutContenzioso();
      this.inizializzaPaginazione('Contenzioso');
    }
  }

  // openDialog(id: number) {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.height = '700px';
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   dialogConfig.data = id;

  //   const dialogRef = this.dialog2.open(RilevazioniDialogComponent, dialogConfig);

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       //modifica
  //       this.router.navigate(['/organizzazione/rilevazioni/modifica/' + id]);
  //       return;
  //     }
  //     // this.inizializzaPaginazione();
  //   });
  // }

  showFieldStato(stato: number) {
    const statoImages: { [key: number]: string } = {
      1: 'In Bozza',
      2: 'Salvata',
      3: 'Da Risolvere',
      4: 'Integrata',
      5: 'Chiusa',
    };

    return statoImages[stato];
  }

  sortData(sort: Sort, tipologia: string) {

    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    this.ordine = '';

    if (sort.direction) {
      this.ordine = sort.active + '_' + sort.direction;
    }

    this.ordineColonna = this.ordine;

    switch (tipologia) {
      case prodotto: {
        this.ricercaProdotto();
        break;
      }
      case contenzioso: {
        this.ricercaContenzioso();
        break;
      }
    }
    // this.popolaRisultato();
  }

  // popolaRisultato() {
  //   let datai = '';

  //   if (this.formRicerca.value.dataInizio) {
  //     datai =
  //       this.formRicerca.value.dataInizio._i.month +
  //       1 +
  //       '/' +
  //       this.formRicerca.value.dataInizio._i.date +
  //       '/' +
  //       this.formRicerca.value.dataInizio._i.year;
  //   }

  //   let dataf = '';
  //   if (this.formRicerca.value.dataFine) {
  //     dataf =
  //       this.formRicerca.value.dataFine._i.month +
  //       1 +
  //       '/' +
  //       (this.formRicerca.value.dataFine._i.date + 1) +
  //       '/' +
  //       this.formRicerca.value.dataFine._i.year;
  //   }

  //   this.isLoading = true;
  // }

  // updateList() {
  //   this.list = this.list.splice(-1).concat(this.list);
  // }

  vaiNuova(tipologia: string): void {
    this.checkCurrentComponent = tipologia;
    this.setTipoSegnalazione(tipologia);
    tipologia == 'Prodotto'
      ? this.stepperService.datiSegnalazioneProdotto$.next(undefined)
      : this.stepperService.datiSegnalazioneContenzioso$.next(undefined);
    this.router.navigate(['/segnalazione/inserimento/nuova']);
  }

  setTipoSegnalazione(tipologia: string) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    switch (tipologia) {
      case prodotto: {
        this.stepperService.inserimentoTipoSegnalazione$.next(prodotto);
        break;
      }
      case contenzioso: {
        this.stepperService.inserimentoTipoSegnalazione$.next(contenzioso);
        break;
      }
    }
  }

  // clickRiga(value: any) {
  //   this.openDialog(value.rowData.id);
  // }

  // Funzione per ottenere i filtri applicati
  /*private*/public getAppliedFilters(): any[] {
    const filters: any[] = [];
    if (this.settoreCtrl.value) {
      filters.push({ Filtro: 'Settore', Valore: this.settoreCtrl.value });
    }
    if (this.areaCtrl.value) {
      filters.push({ Filtro: 'Area', Valore: this.areaCtrl.value });
    }
    if (this.sedeCtrl.value) {
      filters.push({ Filtro: 'Sede', Valore: this.sedeCtrl.value });
    }
    if (this.tipologiaContenziosoCtrl.value) {
      filters.push({
        Filtro: 'Tipologia Contenzioso',
        Valore: this.tipologiaContenziosoCtrl.value,
      });
    }
    if (this.formRicerca.value.dataInizio) {
      filters.push({ Filtro: 'Data Inizio', Valore: this.formRicerca.value.dataInizio });
    }
    if (this.formRicerca.value.dataFine) {
      filters.push({ Filtro: 'Data Fine', Valore: this.formRicerca.value.dataFine });
    }
    if (filters.length === 0) {
      filters.push({ Filtro: 'Nessun filtro applicato', Valore: '' });
    }
    return filters;
  }

  exportAsXLSX(tipoSegnalazione: string): void {
    if (tipoSegnalazione === 'Prodotto') {
      this.exportProdottoAsXLSX();
    } else if (tipoSegnalazione === 'Contenzioso') {
      this.exportContenziosoAsXLSX();
    }
  }

  /*private*/ exportProdottoAsXLSX(): void {
    if (this.prodotti.length === 0) {
      this.dialog.alert("Nessun dato disponibile per l'esportazione!");
      return;
    }

    const mappedData = this.prodotti.map(item => ({
      'Data Creazione': item.data1,
      'Data Ultima Modifica': item.data2,
      'Settore/Materia': item.settoreMateria,
      'Area/Prodotto': item.areaProdotto,
      'Sede': this.showFieldSede(item.sedeId, item.sede),
      'Stato': item.statoDesc,
      'Inviata': item.inviata ? 'Sì' : 'No',
    }));
    // console.log('mappedData: ',mappedData)
    this.exportDataToExcel(mappedData, 'Prodotto');
  }

  /*private*/ exportContenziosoAsXLSX(): void {
    if (this.contenziosi.length === 0) {
      this.dialog.alert("Nessun dato disponibile per l'esportazione!");
      return;
    }

    const mappedData = this.contenziosi.map(item => ({
      'Data Creazione': item.data1,
      'Data Ultima Modifica': item.data2,
      'Tipologia Contenzioso': item.contenziosoDesc,
      'Settore/Materia': item.settoreMateria,
      'Area/Prodotto': item.areaProdotto,
      'Sede': this.showFieldSede(item.sedeId, item.sede),
      'Stato': item.statoDesc,
      'Inviata': item.inviata ? 'Sì' : 'No',
    }));
    this.exportDataToExcel(mappedData, 'Contenzioso');
  }

  // Funzione per esportare i dati in Excel
  /*private*/ exportDataToExcel(mappedData: any[], tipoSegnalazione: string): void {
    // Ottenere i filtri applicati
    const filters = this.getAppliedFilters();

    // Convertire i filtri in un worksheet
    const filtersWorksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(filters);

    // Convertire i dati in un worksheet
    const dataWorksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(mappedData);

    // Unire i due worksheet
    const workbook: XLSX.WorkBook = {
      Sheets: {
        'Filtri Applicati': filtersWorksheet,
        'Dati': dataWorksheet,
      },
      SheetNames: ['Filtri Applicati', 'Dati'],
    };

    // Aggiungere bordi alle celle del worksheet dei dati
    const range = XLSX.utils.decode_range(dataWorksheet['!ref'] || '');
    for (let R = range.s.r; R <= range.e.r; ++R) {
      for (let C = range.s.c; C <= range.e.c; ++C) {
        const cell_address = { c: C, r: R };
        const cell_ref = XLSX.utils.encode_cell(cell_address);
        if (!dataWorksheet[cell_ref]) dataWorksheet[cell_ref] = { t: 's', v: '' };
        dataWorksheet[cell_ref].s = {
          border: {
            top: { style: 'thin', color: { rgb: '000000' } },
            bottom: { style: 'thin', color: { rgb: '000000' } },
            left: { style: 'thin', color: { rgb: '000000' } },
            right: { style: 'thin', color: { rgb: '000000' } },
          },
        };
      }
    }

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, this.getNomeFile(tipoSegnalazione));
  }

  // Funzione per salvare il file Excel
  /*private*/ saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, fileName + EXCEL_EXTENSION);
  }

  /*private*/ getNomeFile(tipoSegnalazione: string): string {
    const format = 'yyyy-MM-dd';
    const locale = 'it-IT';
    const oggi = new Date();
    let baseFileName = 'Rilevazioni';

    if (tipoSegnalazione === 'Prodotto') {
      baseFileName = 'RilevazioneProdotti';
    } else if (tipoSegnalazione === 'Contenzioso') {
      baseFileName = 'RilevazioneContenziosi';
    }
    return `${baseFileName}-${oggi.toLocaleDateString(locale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })}-${oggi.toLocaleTimeString(locale, {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    })}-${oggi.getMilliseconds()}`;
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////
  // NUOVO
  minDate: any;
  maxDate: any;

  ordineColonna: string | null = null;

  //filtri ricerca:
  settore: number | null = null;
  area: number | null = null;
  filtroperSede: string | null = null;
  /* dataInizio: Date | null = null;
  dataFine: Date | null = null; */
  idStatoSegnalazione: number | null = null;
  idTipologiaContenzioso: number | null = null;

  formFiltriDiRicercaProdotto = this.formBuilder.group({
    settore: null,
    area: null,
    filtroperSede: null,
    dataInizio: null,
    dataFine: null,
    idStatoSegnalazione: null,
    idTipologiaContenzioso: null,
  });

  formFiltriDiRicercaContenzioso = this.formBuilder.group({
    settore: null,
    area: null,
    filtroperSede: null,
    dataInizio: null,
    dataFine: null,
    idStatoSegnalazione: null,
    idTipologiaContenzioso: null,
  });

  resetRicerca() {
    // this.clearDate('dataInizioContenzioso');
    // this.clearDate('dataInizio');
    // this.clearDate('dataInizioContenzioso');
    // this.clearDate('dataFineContenzioso');
    this.settore = null;
    this.area = null;
    this.areaProdotto = [];
    this.filtroperSede = null;
    this.dataInizio.reset();
    this.dataFine.reset();
    this.dataInizioContenzioso.reset();
    this.dataFineContenzioso.reset();
    this.idStatoSegnalazione = null;
    this.getAreaProdotto();
    this.settoreCtrl.reset();
    this.areaCtrl.reset();
    this.sedeCtrl.reset();
    this.tipologiaContenziosoCtrl.reset();
    this.filteredSettore = this.settoreCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSettore(value))
    );
    this.filteredArea = this.areaCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterArea(value))
    );

    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );

    this.filteredTipologiaContenzioso = this.tipologiaContenziosoCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipologiaContenzioso(value))
    );
    // Esegui la ricerca senza filtri
    this.inizializzaPaginazione('Prodotto');
    this.inizializzaPaginazione('Contenzioso');
  }

  handleRowClickProdotto(segnalazioneSelezionata: segnalazioneProdotto) {
    this.checkCurrentComponent = 'Prodotto';

    this.setTipoSegnalazione('Prodotto');
    this.stepperService.datiSegnalazioneProdotto$.next(segnalazioneSelezionata);

    const dialogRef = this.dialog2.open(ModalModificaSegnalazioneComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.inizializzaPaginazione(this.stepperService.inserimentoTipoSegnalazione$.value!);
    });
  }

  handleRowClickContenzioso(segnalazioneSelezionata: segnalazioneContenzioso) {
    this.checkCurrentComponent = 'Contenzioso';

    this.setTipoSegnalazione('Contenzioso');
    this.stepperService.datiSegnalazioneContenzioso$.next(segnalazioneSelezionata);

    const dialogRef = this.dialog2.open(ModalModificaSegnalazioneComponent, {
      disableClose: true,
      width: 'auto',
      height: 'auto',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.inizializzaPaginazione(this.stepperService.inserimentoTipoSegnalazione$.value!);
    });
  }

  showFieldSede(codiceSede: number, nomeSede: string): string {
    if (
      codiceSede != null &&
      codiceSede != undefined &&
      codiceSede != Number('') &&
      nomeSede != null &&
      nomeSede != undefined &&
      nomeSede != ''
    ) {
      var codiceFormattato = this.formatToSixDigits(codiceSede);
      return codiceFormattato + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  getSettoriMaterie() {
    this.settoreMateriaService.getSettoriConAreeProdotti().subscribe((data: SettoreMateria[] | string) => {
      const emptyObject: SettoreMateria = { id: null, nome: '' };
      // Verifica se `data` è un array; se lo è, combina con l'oggetto vuoto, altrimenti usa solo l'oggetto vuoto
      if (Array.isArray(data)) {
        this.settoreMateria = [emptyObject, ...data];
      } else {
        this.settoreMateria = [emptyObject]; // Se non è un array, assegna solo l'oggetto vuoto
      }
    });
  }

  getAreaProdotto() {
    this.areeProdottiService.getAllAreaProdotto().subscribe((data: AreaProdotto[]) => {
      const emptyObject: AreaProdotto = { id: null, nome: '' };
      this.areaProdotto = [emptyObject, ...data];
      this.filteredArea = this.areaCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterArea(value))
      );
    });
  }

  settoreMateriaSelezionatoConId(idSettore: number) {
    if (idSettore == null || idSettore == -1) {
      this.areaProdotto = [];
      this.getAreaProdotto();
    } else {
      this.areeProdottiService.newGetAllByIdSettore(idSettore).subscribe((data: any) => {
        const emptyObject: AreaProdotto = { id: null, nome: '' };
        this.areaProdotto = [emptyObject, ...data];
      });
      this.filteredArea = this.areaCtrl.valueChanges.pipe(
        startWith(''),
        map(value => this._filterArea(value))
      );
      this.settore = idSettore;
    }
  }

  loadTipologieContenzioso(): void {
    this.contenziosoService.getAllTioplogie().subscribe((data: tipologieContenzioso[]) => {
      const emptyObject: tipologieContenzioso = { id: null, nome: '' };
      this.tipologieContenzioso = [emptyObject, ...data];
    });
  }

  selectRole(): string {
    // se il multiruolo prevede l'amministratore, o il ruolo regionale oppure multiruoli che li includono
    const ruoli = this.role!.split(';').map(ruolo => ruolo.trim());
    let ruoloSelezionato = "";

    switch (true) {
      case ruoli.includes(this.ruoloAmministratore):
        ruoloSelezionato = this.ruoloAmministratore;
        break;
      case ruoli.includes(this.ruoloRegionale):
        ruoloSelezionato = this.ruoloRegionale;
        break;
      case ruoli.includes(this.ruoloProvinciale):
        ruoloSelezionato = this.ruoloProvinciale;
        break;
      default:
        ruoloSelezionato = "";
    }
    return ruoloSelezionato;
  }

  selectSede(): string[] | null {
    var listaCodeSedi = [];
    if ( (this.role!.split(';').map(ruolo => ruolo.trim()).includes("P12689") ||
          this.role!.split(';').map(ruolo => ruolo.trim()).includes("P12690") ) &&
          this.filtroperSede == null /*&&
          this.codiceSede.length > 0*/ ) {
            return null
    } else if ( (this.role!.split(';').map(ruolo => ruolo.trim()).includes("P12689") ||
          this.role!.split(';').map(ruolo => ruolo.trim()).includes("P12690") ) &&
          this.filtroperSede != null ) {
            listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede)!);
            return listaCodeSedi;
    }
    else {

      if ( (this.role!.split(';').map(ruolo => ruolo.trim()).includes(this.ruoloProvinciale) ||
        this.role!.split(';').map(ruolo => ruolo.trim()).includes(this.ruoloRegionale) ) &&
        this.filtroperSede == null &&
        this.codiceSede.length > 0 ) {

        for (let i=0; i<this.codiceSede.length; i++) {
          listaCodeSedi.push(this.codiceSede[i].sedeCode)
        }

        return listaCodeSedi;
      } else {
        listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede)!);
        return listaCodeSedi;
      }
    }
  }

  ricercaProdotto() {

    this.isLoading = true;
    // if (this.dataInizio.value != null) {
    //   this.validitaDal = moment(this.dataInizio.value).startOf('day').format('YYYY-MM-DD')
    // } else { this.validitaDal = null; }
    // if (this.dataFine.value != null) {
    //   this.validitaAl = moment(this.dataFine.value).startOf('day').format('YYYY-MM-DD')
    // } else { this.validitaAl = null; }

    const formValues = this.formRicerca.value;

    const codiceSede = (this.filtroperSede == null && this.codiceSede.length > 0) ? this.codiceSede[0] : this.formatToSixDigits(this.filtroperSede);
    // var roleRicerca = "";
    this.rilevazioniSrv
      .getRicercaProdotto(
        Number(this.pageDimProdotto),
        this.pageCurrProdotto,
        this.settore == -1 ? null : this.settore,
        this.area,
        this.selectSede(),
        this.validitaDal,
        this.validitaAl,
        this.idStatoSegnalazione,
        this.selectRole(),
        this.storageService.getItem('matricola'),
        this.ordineColonna,
        'Inserimento',
        this.filtroperSede == null ? true : false
        //10, 1, null, null, null, null, null, null, null, null, null
      )
      .subscribe(
        (data: any[]) => {
          this.isLoading = false;
          this.prodotti = data;
          if (!(this.prodotti.length > 0) && (this.ricercaAtt == true)) {
            this.dialog.alert('Nessun risultato per il filtro selezionato!');
            this.ricercaAtt = false;
          }
        },
        error => {
          // console.error('Errore nel recupero dei prodotti', error);
          this.errorMessage = 'Errore nel recupero dei prodotti';
          this.isLoading = false;
        }
      );
  }

  ricercaContenzioso() {
    this.isLoading = true;
    const formValues = this.formRicerca.value;

    this.rilevazioniSrv
      .getRicercaContenzioso(
        Number(this.pageDimContenzioso),
        this.pageCurrContenzioso,
        this.settore == -1 ? null : this.settore,
        this.area,
        this.selectSede(),
        this.validitaDal,
        this.validitaAl,
        this.idStatoSegnalazione,
        this.idTipologiaContenzioso,
        this.selectRole(),
        this.storageService.getItem('matricola'),
        this.ordineColonna,
        'Inserimento', //<-- mettere "Gestione" nel caso della pagina della ricerca dell'amministratore in modo tale da farsi ritornare le date invio e data risolta
        this.filtroperSede == null ? true : false
        //10, 1, null, null, null, null, null, null, null, null, null, "Inserimento".  <-- mettere "Gestione" nel caso della pagina della ricerca dell'amministratore in modo tale da farsi ritornare le date invio e data risolta
      )
      .subscribe(
        (data: any[]) => {
          this.contenziosi = data;
          this.isLoading = false;
          console.log('tabProdotto: ', this.tabProdotto)
          if (!(this.contenziosi.length > 0) /*&& (this.tabProdotto == 1)*/ && (this.ricercaAtt == true)) {
            this.dialog.alert('Nessun risultato per il filtro selezionato!');
            this.ricercaAtt = false;
          }
        },
        error => {
          // console.error('Errore nel recupero dei contenziosi', error);
          this.errorMessage = 'Errore nel recupero dei contenziosi';
          this.isLoading = false;
        }
      );
  }

  onDateChange(typeDate: string) {
    if (typeDate.includes('Contenzioso')) {
      this.formatDate(this.dataInizioContenzioso.value, this.dataFineContenzioso.value, 'Contenzioso');
      if (this.validitaDal && this.validitaAl && this.validitaDal > this.validitaAl) {

        if (typeDate === 'startDateContenzioso') {
          this.dataInizioContenzioso.reset();
        } else if (typeDate === 'endDateContenzioso') {
          this.dataFineContenzioso.reset();
        }
      }
    } else {
      this.formatDate(this.dataInizio.value, this.dataFine.value, 'Prodotto');
      if (this.validitaDal && this.validitaAl && this.validitaDal > this.validitaAl) {
        if (typeDate === 'startDate') {
          this.dataInizio.reset();
        } else if (typeDate === 'endDate') {
          this.dataFine.reset();
        }
      }
    }
  }

  filterDate = (date: Date | null): boolean => {
    const currentDate = date || new Date();
    return this.dataInizio ? currentDate >= this.dataInizio.value : true;
  };

  openAreaPanel() {
    this.areaAutocompleteTrigger.openPanel();
  }

  openSedePanel() {
    this.sedeAutocompleteTrigger.openPanel();
  }

  openTipologiaContenziosoPanel() {
    this.tipologiaContenziosoAutocompleteTrigger.openPanel();
  }

  formatDateToISO(date: Date | null | undefined): string {
    if (!date) return '';
    return date.toISOString().split('T')[0]; // Ottiene la data in formato yyyy-MM-dd
  }

  onFocus(ctrl: FormControl): void {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }
}

export interface Record {
  id: number;
  dataInvio: string;
  dataRisoluzione: string;
  settoreMateria: string;
  areaProdotto: string;
  stato: string;
  sede: string;
}

interface SettoreMateria {
  id: number | null;
  nome: string;
}

interface AreeProdotti {
  areaProdotto: AreaProdotto[];
}

interface AreaProdotto {
  id: number | null;
  nome: string;
}

interface Sede {
  id: number | null;
  nome: string;
}

interface Aspetti {
  // consiglio di rinominare (es: tipiAspetto) perché si tratta di aspetti standard e nuovi aspetti
  id: number | null;
  nome: string;
}
interface tipologieContenzioso {
  id: number | null;
  nome: string;
}

interface segnalazioneContenzioso {
  areaId: number;
  areaProdotto: string;
  contenziosoDesc: string;
  contenziosoId: number;
  data1: string;
  data2: string;
  id: number;
  // tipologiaContenzioso: string;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string;
  statoId: number;
}

interface segnalazioneProdotto {
  areaId: number;
  areaProdotto: string;
  data1: string;
  data2: string;
  id: number;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string;
  statoId: number;
}
