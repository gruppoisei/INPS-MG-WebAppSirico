import { Component, OnInit, Injectable, OnDestroy } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Aree } from '@shared/services/areeservice.service';
import { TipologiaRicorso } from '@shared/models/tipologia-ricorso.model';
import { ProceduraRiferimento } from '@shared/models/procedura-riferimento.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { Rilevazione } from '@shared/models/rilevazione.model';
import { StepperService } from '@shared/services/stepper.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { StorageService } from '@shared';
import { TablesDataService } from '../data.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { ContenziosoService } from '@shared/services/contenzioso.service';
import { ModalDettagliGestioneComponent } from '../modal-dettagli-gestione/modal-dettagli-gestione.component';
import { ModalDettalgiGestioneContenziosiComponent } from '../modal-dettagli-gestione-contenziosi/modal-dettalgi-gestione-contenziosi.component';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { map, Observable, startWith, Subject } from 'rxjs';
import * as moment from 'moment';

const EXCEL_TYPE =
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-gestione-segnalazione-gerarchico',
  templateUrl: './gestione-segnalazione-gerarchico.component.html',
  styleUrls: ['./gestione-segnalazione-gerarchico.component.scss'],
  providers: [TablesDataService],
})
export class GestioneSegnalazioneGerarchicoComponent implements OnInit, OnDestroy {

  minDate: any;
  maxDate: any;

  ordineColonna: string | null = null;

  //filtri ricerca:
  settore: number | null = null;
  area: number | null = null;
  filtroperSede: string | null = null;
  idStatoSegnalazione: number | null = null;
  idTipologiaContenzioso: number | null = null;


  listaTipologieRicorsi: TipologiaRicorso[] = [];
  listaProcedureRiferimenti: ProceduraRiferimento[] = [];
  sottoCatDisab = true;
  prodottoDisab = true;
  prodottoTipLavDisab = true;
  dataSource: any[] = [];
  isLoading = true;
  ricercaAtt = false;
  listaRilevazioni: Rilevazione[] = [];
  imageUrl: string[] = [];
  settoreMateria: SettoreMateria[] = [];
  areaProdotto: AreaProdotto[] = [];
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
  codiceSede: any[] = [];
  readonly ruoloAmministrativo: string = 'P12690';
  readonly ruoloAmministratore: string = 'P12689';
  readonly ruoloRegionale: string = 'P12799';
  readonly pagina: string = 'Gestione';
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
    slideToggleDaRisolvere: new FormControl(false),
    slideToggleDaRisolvereContenzioso: new FormControl(false),
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
  settoreCtrl = new FormControl('');
  areaCtrl = new FormControl('');
  sedeCtrl = new FormControl('');
  tipologiaContenziosoCtrl = new FormControl('');
  dataInizio = new FormControl('');
  dataFine = new FormControl('');
  dataInizioContenzioso = new FormControl('');
  dataFineContenzioso = new FormControl('');
  filteredSettore!: Observable<SettoreMateria[]>;
  filteredArea!: Observable<AreaProdotto[]>;
  filteredSede!: Observable<Sede[]>
  filteredTipologiaContenzioso!: Observable<tipologieContenzioso[]>;

  constructor(
    public dialog: MtxDialog, private areeSrv: Aree, private rilevazioniSrv: RilevazioneService, private router: Router,
    private formBuilder: FormBuilder, public dialog2: MatDialog, private stepperService: StepperService,
    private settoreMateriaService: SettoreMateriaService, private territorioService: TerritorioService,
    private contenziosoService: ContenziosoService, private storageService: StorageService, private activatedRoute: ActivatedRoute) {
    this.stepperService.dialogClosed$.subscribe(() => {
      this.inizializzaPaginazione(this.stepperService.inserimentoTipoSegnalazione$.value!);
    });
  }

  async ngOnInit() {
      this.resetPaginazioneProdotto();
      this.resetPaginazioneContenzioso();
      this.ricercaAtt = false;
      this.isLoading = true;
      this.getSettoriMaterie();
      this.getAreaProdotto();
      this.codiceSede = this.storageService.getItem('listaSedi');
      this.role = this.storageService.getItem('allroles');
      await this.getSedi();
      this.loadTipologieContenzioso();

    this.filteredSettore = this.settoreCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSettore(value)));

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

    this.settoreCtrl.valueChanges.subscribe(value => {
      if (!value) {
        this.getAreaProdotto();
      }
    });
  }

  ngOnDestroy(): void {
    this.stepperService.dialogClosed$ = new Subject<void>();
  }

  resetFiltro() {
    this.formRicerca.reset();
    this.sottoCatDisab = true;
    this.prodottoDisab = true;
    this.prodottoTipLavDisab = true;
    this.isLoading = true;
    this.ricercaAtt = false;

    this.formRicerca.value.dataInizio = null;
    this.formRicerca.value.dataFine = null;
    this.formRicerca.value.dataScadenza = false;
    this.formRicerca.value.dimensione = null;
    this.formRicerca.value.idAttore = null;
    this.formRicerca.value.idProceduraRiferimento = null;
    this.formRicerca.value.idProdottoTipLav = null;
    this.formRicerca.value.idTipologiaRicorso = null;
    this.formRicerca.value.pagina = 1;
    this.formRicerca.value.area = null;
    this.formRicerca.value.settore = null;
    this.formRicerca.value.idSottoarea = null;
    this.formRicerca.value.idProdotto = null;
    this.ricercaAtt = false;
    this.isLoading = true;
  }


  _filterSettore(value: string): SettoreMateria[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.settoreMateria.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  _filterArea(value: string): AreaProdotto[] {
    const filterValue = value.toLowerCase();
    return this.areaProdotto.filter(option => option.nome.toLowerCase().includes(filterValue));
  }

  _filterSede(value: string): Sede[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.sede.filter(option =>
      this.showFieldSede(option.id!, option.nome).toLowerCase().includes(filterValue)
    );
  }

  _filterTipologiaContenzioso(value: string): tipologieContenzioso[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.tipologieContenzioso.filter(option => option.nome.toLowerCase().includes(filterValue)
    );
  }

  async settoreSelected(selectedId: number) {
    const selectedSettore = this.settoreMateria.find(option => option.id === selectedId);
    this.settoreCtrl.setValue(selectedSettore?.nome || '');
    this.settore = selectedId;
    try {
      this.settoreMateriaSelezionatoConId(selectedId);
    } catch (error) {
      alert('Errore nel caricamento delle aree prodotto. Riprova più tardi.');
    }
  }

  areaSelected(selectedId: number) {
    const selectedArea = this.areaProdotto.find(option => option.id === selectedId);
    this.areaCtrl.setValue(selectedArea?.nome || '');
    this.area = selectedId;
  }

  sedeSelected(selectedId: number) {
    const selectedSede = this.sede.find(option => option.id === selectedId);
    if (selectedSede) {
      this.sedeCtrl.setValue(this.showFieldSede(selectedSede.id!, selectedSede.nome) || '');
    } else {
      this.sedeCtrl.setValue('');
    }
    this.filtroperSede = selectedId.toString();
  }

  tipologiaContenziosoSelected(selectedId: number) {
    const selectedTipologia = this.tipologieContenzioso.find(option => option.id === selectedId);
    this.tipologiaContenziosoCtrl.setValue(selectedTipologia?.nome || '');
    this.idTipologiaContenzioso = selectedId;
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
    this.getAreaProdotto();
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

    if (ruoliTrimmed.includes(this.ruoloAmministrativo) || ruoliTrimmed.includes(this.ruoloAmministratore)) {
    } else if (ruoliTrimmed.includes(this.ruoloRegionale) && this.codiceSede.length === 0) {
      this.dialog.alert('Non ci sono sedi associate al tuo account.');
      return;
    }


      this.territorioService.getSedi(this.role!, this.codiceSede, this.pagina, this.ruoloRegionale, '').subscribe((results: Sede[]) => {
        const emptyObject = { id: null, nome: '' };
        this.sede = [emptyObject, ...results];
      });

      this.activatedRoute.queryParams.subscribe(params => {
        const startDate = params['startDate'] ? new Date(params['startDate']) : null;
        const endDate = params['endDate'] ? new Date(params['endDate']) : null;
        const toggle = params['toggle']
        this.formRicerca.get('slideToggleDaRisolvere')?.setValue(toggle);
        this.formRicerca.get('slideToggleDaRisolvereContenzioso')?.setValue(toggle);

        if (startDate) {
          this.dataInizio.setValue(startDate);
          this.dataInizioContenzioso.setValue(startDate)
          this.validitaDal = moment(this.dataInizio.value).startOf('day').format('YYYY-MM-DD');
        }
        if (endDate) {
          this.dataFine.setValue(endDate);
          this.dataFineContenzioso.setValue(endDate)
          this.validitaAl = moment(this.dataFine.value).startOf('day').format('YYYY-MM-DD');
        }

        this.inizializzaPaginazione('Prodotto');
        this.inizializzaPaginazione('Contenzioso');
      });
  }

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
        this.validitaDal = moment(this.dataInizioContenzioso.value)
          .startOf('day')
          .format('YYYY-MM-DD');
      } else {
        this.validitaDal = null;
      }
      if (dataFine != null) {
        this.validitaAl = moment(this.dataFineContenzioso.value)
          .startOf('day')
          .format('YYYY-MM-DD');
      } else {
        this.validitaAl = null;
      }
    }
  }

  selectRole(): string {
    // se il multiruolo prevede il ruolo regionale oppure entrambi i ruoli regionale e provinciale
    if (
      this.role!.split(';')
        .map(ruolo => ruolo.trim())
        .includes(this.ruoloAmministratore)
    ) {
      return this.ruoloAmministratore;
    }
    if (
      this.role!.split(';')
        .map(ruolo => ruolo.trim())
        .includes(this.ruoloAmministrativo)
    ) {
      return this.ruoloAmministrativo;
    }
    if (
      this.role!.split(';')
        .map(ruolo => ruolo.trim())
        .includes(this.ruoloRegionale)
    ) {
      return this.ruoloRegionale;
    }
    return '';
  }

  selectSede(): string[] | null {
    var listaCodeSedi = [];
    if ((this.role!.split(';')
        .map(ruolo => ruolo.trim())
        .includes('P12689') ||this.role!.split(';')
        .map(ruolo => ruolo.trim()).includes('P12690')) && this.filtroperSede == null){
          return null;
    }
    else if (
      (this.role!.split(';')
        .map(ruolo => ruolo.trim())
        .includes('P12689') || this.role!.split(';')
        .map(ruolo => ruolo.trim()).includes('P12690')) && this.filtroperSede != null){
          listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede)!);
          return listaCodeSedi;
    }
     else {
      if (
        this.role!.split(';')
          .map(ruolo => ruolo.trim())
          .includes(this.ruoloRegionale) &&
        this.filtroperSede == null &&
        this.codiceSede.length > 0
      ) {
        for (let i = 0; i < this.codiceSede.length; i++) {
          listaCodeSedi.push(this.codiceSede[i].sedeCode);
        }
        return listaCodeSedi;
      } else {
        listaCodeSedi.push(this.formatToSixDigits(this.filtroperSede)!);
        return listaCodeSedi;
      }
    }
  }

  inizializzaPaginazione(tipoSegnalazione: string) {
    if (tipoSegnalazione === 'Prodotto') {
      this.inizializzaPaginazioneProdotto();
    } else if (tipoSegnalazione === 'Contenzioso') {
      this.inizializzaPaginazioneContenzioso();
    }
  }

  inizializzaPaginazioneProdotto() {
    const toggle = this.formRicerca.get('slideToggleDaRisolvere')?.value
    this.layoutNumbersProdotto = [];
    this.idStatoSegnalazione = toggle ? 3 : null;

    this.rilevazioniSrv
      .contaRicercaProdotto(
        this.settore === -1 ? null : this.settore,
        this.area,
        this.selectSede(),
        this.validitaDal,
        this.validitaAl,
        this.idStatoSegnalazione,
        this.selectRole(),
        this.storageService.getItem('matricola'),
        'Gestione',
        this.filtroperSede == null ? true : false
      )
      .subscribe((response: any) => {
        this.pageCurrProdotto = (this.elemNumProdotto != response.totale) ? 1 : this.pageCurrProdotto;
        this.elemNumProdotto = response.totale != null ? response.totale : response.count;

        this.pageNumProdotto = Math.floor(this.elemNumProdotto / Number(this.pageDimProdotto));
        if (this.elemNumProdotto % Number(this.pageDimProdotto) > 0) {
          this.pageNumProdotto += 1;
        }

        for (let i = 1; i <= 6; i++) {
          if (i <= this.pageNumProdotto) {
            this.layoutNumbersProdotto.push(i);
          }
        }
        this.aggiornaLayoutPaginazioneProdotto(); // Aggiorna il layout
        this.ricercaProdotto();
      });
  }

  inizializzaPaginazioneContenzioso() {
    const toggle = this.formRicerca.get('slideToggleDaRisolvereContenzioso')?.value
    this.layoutNumbersContenzioso = [];
    this.idStatoSegnalazione = toggle ? 3 : null;

    this.rilevazioniSrv
      .contaRicercaContenzioso(
        this.settore === -1 ? null : this.settore,
        this.area,
        this.selectSede(),
        this.validitaDal,
        this.validitaAl,
        this.idStatoSegnalazione,
        this.idTipologiaContenzioso,
        this.selectRole(),
        this.storageService.getItem('matricola'),
        'Gestione',
        this.filtroperSede == null ? true : false
      )
      .subscribe((response: any) => {
        this.pageCurrContenzioso = (this.elemNumContenzioso != response.totale) ? 1 : this.pageCurrContenzioso;
        this.elemNumContenzioso = response.totale != null ? response.totale : response.count;

        this.pageNumContenzioso = Math.floor(
          this.elemNumContenzioso / Number(this.pageDimContenzioso)
        );
        if (this.elemNumContenzioso % Number(this.pageDimContenzioso) > 0) {
          this.pageNumContenzioso += 1;
        }

        for (let i = 1; i <= 6; i++) {
          if (i <= this.pageNumContenzioso) {
            this.layoutNumbersContenzioso.push(i);
          }
        }
        this.aggiornaLayoutPaginazioneContenzioso(); // Aggiorna il layout
        this.ricercaContenzioso();
      });
  }

  onToggleChange(event: any) {
    if (event.checked === false) {
      this.formRicerca.get('slideToggleDaRisolvere')?.setValue(false)
    }
  }
  onToggleChangeContenzioso(event: any) {
    if (event.checked === false) {
      this.formRicerca.get('slideToggleDaRisolvereContenzioso')?.setValue(false)
    }
  }

  formatToSixDigits(value: any): string | null {
    const numberValue = Number(value);
    if (value == null) {
      return null;
    }
    return numberValue.toString().padStart(6, '0');
  }

  //scorri layoutNumbers
  aggiornaLayoutPaginazioneProdotto() {
    const size = this.layoutDimProdotto;
    let currStart = Math.floor((this.pageCurrProdotto - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumProdotto);

    if (this.pageNumProdotto - currStart + 1 < size) {
      currEnd = this.pageNumProdotto;
      const pagesToShow = Math.min(size, this.pageNumProdotto);
      currStart = Math.max(1, currEnd - pagesToShow + 1);
    }

    this.layoutNumbersProdotto = [];
    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbersProdotto.push(i);
    }
  }

  aggiornaLayoutPaginazioneContenzioso() {
    const size = this.layoutDimContenzioso;
    let currStart = Math.floor((this.pageCurrContenzioso - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNumContenzioso);

    if (this.pageNumContenzioso - currStart + 1 < size) {
      currEnd = this.pageNumContenzioso;
      const pagesToShow = Math.min(size, this.pageNumContenzioso);
      currStart = Math.max(1, currEnd - pagesToShow + 1);
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
      this.aggiornaLayoutPaginazioneProdotto(); // Aggiorna il layout
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevProdotto(tipoSegnalazione: string) {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto--;
      this.aggiornaLayoutPaginazioneProdotto(); // Aggiorna il layout
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pageFirstProdotto() {
    if (this.pageCurrProdotto > 1) {
      this.pageCurrProdotto = 1;
      this.baseProdotto = 1;
      this.layoutNumbersProdotto = Array.from(
        { length: Math.min(6, this.pageNumProdotto) },
        (_, i) => i + 1
      );
      this.ricercaProdotto();
    }
  }

  pageLastProdotto() {
    if (this.pageCurrProdotto < this.pageNumProdotto) {
      this.pageCurrProdotto = this.pageNumProdotto;
      this.baseProdotto = Math.max(1, this.pageNumProdotto - 5);
      this.layoutNumbersProdotto = Array.from(
        { length: 6 },
        (_, i) => this.baseProdotto + i
      ).filter(k => k <= this.pageNumProdotto);
      this.ricercaProdotto();
    }
  }

  setPageCurrProdotto(page: number, tipoSegnalazione: string) {
    this.pageCurrProdotto = page;
    this.aggiornaLayoutPaginazioneProdotto(); // Aggiorna il layout
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageNextContenzioso(tipoSegnalazione: string) {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso++;
      this.aggiornaLayoutPaginazioneContenzioso(); // Aggiorna il layout
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  pagePrevContenzioso(tipoSegnalazione: string) {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso--;
      this.aggiornaLayoutPaginazioneContenzioso(); // Aggiorna il layout
      this.inizializzaPaginazione(tipoSegnalazione);
    }
  }

  setPageCurrContenzioso(page: number, tipoSegnalazione: string) {
    this.pageCurrContenzioso = page;
    this.aggiornaLayoutPaginazioneContenzioso(); // Aggiorna il layout
    this.inizializzaPaginazione(tipoSegnalazione);
  }

  pageFirstContenzioso() {
    if (this.pageCurrContenzioso > 1) {
      this.pageCurrContenzioso = 1;
      this.baseContenzioso = 1;
      this.layoutNumbersContenzioso = Array.from(
        { length: Math.min(6, this.pageNumContenzioso) },
        (_, i) => i + 1
      );
      this.ricercaContenzioso();
    }
  }

  pageLastContenzioso() {
    if (this.pageCurrContenzioso < this.pageNumContenzioso) {
      this.pageCurrContenzioso = this.pageNumContenzioso;
      this.baseContenzioso = Math.max(1, this.pageNumContenzioso - 5);
      this.layoutNumbersContenzioso = Array.from(
        { length: 6 },
        (_, i) => this.baseContenzioso + i
      ).filter(k => k <= this.pageNumContenzioso);
      this.ricercaContenzioso();
    }
  }

  statiSegnalazione = [
    { id: 1, stato: 'In Bozza' },
    { id: 2, stato: 'Salvata' },
    { id: 3, stato: 'Inviata' },
    { id: 4, stato: 'Integrata' },
    { id: 5, stato: 'Risolta DR' },
    { id: 6, stato: 'Chiusa' },
  ];

  showFieldStato(stato: number) {
    const statoSegnalazione: { [key: number]: string } = {
      3: 'Da Risolvere',
      4: 'Integrata',
      5: 'Chiusa',
    };
    return statoSegnalazione[stato] || 'STATO NON TROVATO';
  }

  sortData(sort: Sort) {
    this.ordine = '';
    if (sort.direction) {
      this.ordine = sort.active + '_' + sort.direction;
    }
    this.ordineColonna = this.ordine;
    this.ricercaProdotto();
    this.ricercaContenzioso();
    this.popolaRisultato(); //forse non serve
  }

  popolaRisultato() {
    let datai = '';
    let dataf = '';

    if (this.formRicerca.value.dataInizio) {
      datai =this.formRicerca.value.dataInizio._i.month + 1 + '/' + this.formRicerca.value.dataInizio._i.date + '/' +this.formRicerca.value.dataInizio._i.year;
    }

    if (this.formRicerca.value.dataFine) {
      dataf = this.formRicerca.value.dataFine._i.month + 1 + '/' + (this.formRicerca.value.dataFine._i.date + 1) + '/' + this.formRicerca.value.dataFine._i.year;
    }
    this.isLoading = true;
  }


  vaiNuova(tipologia: string): void {
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

  // Funzione per ottenere i filtri applicati
  private getAppliedFilters(): any[] {
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

  private exportProdottoAsXLSX(): void {
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
    this.exportDataToExcel(mappedData, 'Prodotto');
  }

  private exportContenziosoAsXLSX(): void {
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
  private exportDataToExcel(mappedData: any[], tipoSegnalazione: string): void {
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
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, fileName + EXCEL_EXTENSION);
  }

  private getNomeFile(tipoSegnalazione: string): string {
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

  resetRicerca(tipo: string) {
    if(tipo === 'Prodotto'){
      this.settore = null;
      this.area = null;
      this.areaProdotto = [];
      this.filtroperSede = null;
      this.idStatoSegnalazione = null;
      this.idTipologiaContenzioso = null;
      this.getAreaProdotto();
      this.settoreCtrl.reset();
      this.areaCtrl.reset();
      this.sedeCtrl.reset();
      this.dataInizio.reset();
      this.dataFine.reset();
      this.validitaAl = '';
      this.validitaDal = '';
      this.formRicerca.reset()
    }
    if(tipo === 'Contenzioso'){
      this.dataInizioContenzioso.reset();
      this.dataFineContenzioso.reset();
      this.idStatoSegnalazione = null;
      this.idTipologiaContenzioso = null;
      this.getAreaProdotto();
      this.settoreCtrl.reset();
      this.areaCtrl.reset();
      this.sedeCtrl.reset();
      this.settore = null;
      this.area = null;
      this.areaProdotto = [];
      this.filtroperSede = null;
      this.validitaAl = '';
      this.validitaDal = '';
      this.formRicerca.reset()
      this.tipologiaContenziosoCtrl.reset();
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
    // Esegui la ricerca senza filtri
    this.inizializzaPaginazione('Prodotto');
    this.inizializzaPaginazione('Contenzioso');
  }

  handleRowClickProdotto(segnalazioneSelezionata: segnalazioneProdotto) {
    this.setTipoSegnalazione('Prodotto');
    this.stepperService.datiSegnalazioneProdotto$.next(segnalazioneSelezionata);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = segnalazioneSelezionata.id as number;
    const dialogRef = this.dialog2.open(ModalDettagliGestioneComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.stepperService.dialogClosed$.next();
    });
  }

  handleRowClickContenzioso(segnalazioneSelezionata: segnalazioneContenzioso) {
    this.setTipoSegnalazione('Contenzioso');
    this.stepperService.datiSegnalazioneContenzioso$.next(segnalazioneSelezionata);

    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = 'auto';
    dialogConfig.height = 'auto';
    dialogConfig.data = segnalazioneSelezionata.id as number;
    const dialogRef = this.dialog2.open(ModalDettalgiGestioneContenziosiComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.stepperService.dialogClosed$.next();
    });
  }

  showFieldInviata(inviata: boolean): string {
    if (inviata == true) {
      var output = 'Sì';
    } else {
      var output = 'No';
    }
    return output;
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
    this.settoreMateriaService.getSettoriConAreeProdotti().subscribe((data: SettoreMateria[]) => {
      const emptyObject: SettoreMateria = { id: null, nome: '' };
      if (Array.isArray(data)) {
        this.settoreMateria = [emptyObject, ...data];
      } else {
        this.settoreMateria = [emptyObject];
      }
    });
  }

  getAreaProdotto() {
    this.areeSrv.getAllAreaProdotto().subscribe((data: AreaProdotto[]) => {
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
      this.areeSrv.newGetAllByIdSettore(idSettore).subscribe((data: any) => {
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

  ricercaProdotto() {
    this.isLoading = true;
    const toggle = this.formRicerca.get('slideToggleDaRisolvere')?.value
    this.idStatoSegnalazione = toggle ? 3 : null;

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
        'Gestione',
        this.filtroperSede == null ? true : false
      )
      .subscribe(
        (data: any[]) => {
          this.prodotti = data;
          this.isLoading = false;
          if (!(this.prodotti.length > 0) && this.ricercaAtt) {
            this.dialog.alert('Nessun risultato per il filtro selezionato!');
            this.ricercaAtt = false;
          }
        },
        error => {
          console.error('Errore nel recupero dei prodotti', error);
          this.isLoading = false;
        }
      );
  }

  ricercaContenzioso() {
    this.isLoading = true;
    const toggle = this.formRicerca.get('slideToggleDaRisolvereContenzioso')?.value
    this.idStatoSegnalazione = toggle ? 3 : null;

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
        'Gestione',
        this.filtroperSede == null ? true : false
      )
      .subscribe(
        (data: any[]) => {
          // ;
          this.contenziosi = data;
          this.isLoading = false;
          if (!(this.prodotti.length > 0) && this.ricercaAtt) {
            this.dialog.alert('Nessun risultato per il filtro selezionato!');
            this.ricercaAtt = false;
          }
        },
        error => {
          console.error('Errore nel recupero dei prodotti', error);
          this.isLoading = false;
        }
      );
  }

  onDateChange(typeDate: string) {
    if (typeDate.includes('Contenzioso')) {
      this.formatDate(this.dataInizioContenzioso.value,this.dataFineContenzioso.value,'Contenzioso');
      if (this.validitaDal && this.validitaAl && this.validitaDal > this.validitaAl) {
        if (typeDate === 'startDateContenzioso') {
          this.dataInizioContenzioso.reset();
        } else if (typeDate === 'endDateContenzioso') {
          this.dataFineContenzioso.reset();
        }
      }
    }
    else {
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
  nuovoAspetto: boolean;
}
