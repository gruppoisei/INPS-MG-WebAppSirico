import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { StorageService } from '@shared';
import { Utente } from '@shared/models/utente.model';
import { TerritorioService } from '@shared/services/territorio.service';
import { UserService } from '@shared/services/user.service';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { map, Observable, startWith, switchMap, tap } from 'rxjs';
import { ListaUtentiModificaComponent } from '../lista-utenti-modifica/lista-utenti-modifica.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lista-utenti',
  templateUrl: './lista-utenti.component.html',
  styleUrls: ['./lista-utenti.component.scss']
})
export class ListaUtentiComponent implements OnInit {
  @ViewChild('fileInput') fileInput: any;

  constructor(  private storageService: StorageService,
                private dialog: MatDialog,
                private cdr: ChangeDetectorRef,
                private utentiSrv: UserService,
                private territorioService: TerritorioService,
                public snackBar: MatSnackBar
              ) { }

  @ViewChild('regioneInput', { read: MatAutocompleteTrigger })
  regioneAutocompleteTrigger!: MatAutocompleteTrigger;
  @ViewChild('sedeInput', { read: MatAutocompleteTrigger })
  sedeAutocompleteTrigger!: MatAutocompleteTrigger;
  @ViewChild('ruoloInput', { read: MatAutocompleteTrigger })
  ruoloAutocompleteTrigger!: MatAutocompleteTrigger;

  codiceSede: any[] = [];
  role: string | null = null;
  ruoloSelezionato: string = "";
  displayedColumns: string[] = ['matricola', 'cognome', 'nome', 'email', 'accountWindows', 'codiceSede', 'ruoli'];
  displayedColumnsScarti: string[] = ['dataScarto', 'matricola', 'motivazioneScarto'];
  dataSource: any[] = [];
  dataSourceScarti: any[] = [];
  dataSourceFiltered: any[] = [];

  isLoading = true;
  utenti: Utente[] = [];

  listaRuoli: Ruolo[] = [];
  sede: Sede[] = [];
  regione: Sede[] = [];

  matricola = new FormControl();
  ruolo = new FormControl();
  regioneCtrl = new FormControl();
  sedeCtrl = new FormControl();
  matricolaCtrl = new FormControl();  
  ruoloCtrl = new FormControl();

  filteredSede: Observable<Sede[]> | undefined;
  filtroperSede: string | null = null;
  filteredRegione: Observable<Sede[]> | undefined;
  filtroperRegione: string | null = null;
  filteredRuolo: Observable<Ruolo[]> | undefined;
  filtroperRuolo: string | null = null;

  ordinamentoColonna: string | null = null;
  ordinamentoColonnaScarti: string | null = null;
  selectedFile: File | null = null;

  errorMessage: string | null = null;

  //----------------paginazione config--------------------------
  selectedTab: number = 0;  // per tenere traccia della tab selezionata (0: Gestione Utenti, 1: Lista Scarti)
  pageDim = '20'; //numero di righe per pagina
  pageCurr = 1; //pagina corrente
  pageNum = 0; //numero di pagine
  elemNum = 0; //numero di elementi totali
  base = 1; //base per creazione layout
  layoutDim = 6; //elementi paginazione
  layoutNumbers: number[] = []; //numeri del paginatore
  numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione
  //----------------paginazioneScarti config--------------------------
  // selectedTab: number = 0;  // per tenere traccia della tab selezionata (0: Gestione Utenti, 1: Lista Scarti)
  pageDimScarti = '20'; //numero di righe per pagina
  pageCurrScarti = 1; //pagina corrente
  pageNumScarti = 0; //numero di pagine
  elemNumScarti = 0; //numero di elementi totali
  baseScarti = 1; //base per creazione layout
  layoutDimScarti = 6; //elementi paginazione
  layoutNumbersScarti: number[] = []; //numeri del paginatore
  numPagesScarti = ['5', '10', '20', '50', '100']; //possibili righe di paginazione

  ngOnInit(): void {

    this.regioneCtrl.disable();
    this.sedeCtrl.disable();
    this.loadRuoli();
    this.getRegioni();
    this.getProvince();

    this.filteredRuolo = this.ruoloCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRuolo(value))
    );

    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );

    this.filteredRegione = this.regioneCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRegione(value))
    );

    this.inizializzaPaginazione();  // this.popolaTabella() invocata dentro inizializzaPaginazione()
    this.inizializzaPaginazioneScarti();  // this.loadScarti() invocata dentro inizializzaPaginazioneScarti()
  }

  ngAfterViewInit() {
    if (this.regioneAutocompleteTrigger) {
      this.regioneAutocompleteTrigger.panelClosingActions
        .pipe(
          switchMap(() => this.filteredRegione || []),
          tap(filtered => {
            if (this.regioneCtrl.value && !filtered.some(option => option.id === this.regioneCtrl.value)) {
              this.regioneCtrl.setValue(null);
            }
          })
        ).subscribe();
    }

    if (this.sedeAutocompleteTrigger) {
      this.sedeAutocompleteTrigger.panelClosingActions
        .pipe(
          switchMap(() => this.filteredSede || []),
          tap(filtered => {
            if (this.sedeCtrl.value && !filtered.some(option => option.id === this.sedeCtrl.value)) {
              this.sedeCtrl.setValue(null);
            }
          })
        ).subscribe();
    }
  }

  public _filterRuolo(value: string): Ruolo[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.listaRuoli.filter(option =>
      option.descrizione.toLowerCase().includes(filterValue)
    );
  }

  public _filterSede(value: string): Sede[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.sede.filter(option =>
      this.showFieldSede(option.id!, option.nome).toLowerCase().includes(filterValue)
    );
  }

  public _filterRegione(value: string): Sede[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.regione.filter(option =>
      this.showFieldSede(option.id!, option.nome).toLowerCase().includes(filterValue)
    );
  }

  sedeSelected(selectedId: number) {
    const selectedSede = this.sede.find(option => option.id === selectedId);
    this.sedeCtrl.setValue(this.showFieldSede(selectedSede!.id!, selectedSede!.nome) || '');
    if (selectedId != null) this.filtroperSede = selectedId.toString();    
    const sedeId = selectedId;
    if (sedeId == null || sedeId == -1) {
      this.sede = [];
      this.getProvince();

    } else {
      this.territorioService.getRegioniByIdSede(this.formatToSixDigits(sedeId)!).subscribe((data: any) => {
        for (let i = 0; i < this.regione.length; i++) {
          if (data.sedeCodSede !== this.regione[i].id && this.regione[i].id != null) {
            this.regione.splice(i, 1);
            i--;
          }
        }
        if (this.regione.length > 1) {
          this.regioneCtrl.setValue(this.showFieldSede(this.regione[1].id!, this.regione[1].nome));
        }
        else /*if (this.regione.length == 1)*/{
          // this.filteredSede = this.sedeCtrl.valueChanges.pipe(
          //   startWith(''),
          //   map(value => this._filterSede(value)));
          // this.regioneCtrl.reset();
          // this.regioneCtrl.setValue(this.showFieldSede(1, ""));
        }

      });
    }
  }

  regioneSelected(selectedId: number) {
    const selectedRegione = this.regione.find(option => option.id === selectedId);
    if (selectedRegione) this.regioneCtrl.setValue(this.showFieldSede(selectedRegione!.id!, selectedRegione!.nome) || '');
    this.filtroperRegione = selectedId.toString();
    try {
      const regioneId = selectedId;
    if (regioneId == null || regioneId == -1) {
      this.regione = [];
      this.getRegioni();
    } else {
      this.territorioService.getAllProvinceByIdRegione(regioneId).subscribe((data: any) => {
        if (data.length === 0) {
          // alert('Nessuna sede associata a questa regione.');
        } else {
          for (let l = 0; l < this.sede.length; l++) {
            let check = false;

            for (let i = 0; i < data.length; i++) {

              if (this.sede[l].nome === data[i].sedeDesc) {
                check = true;
              }
            }

            if (check == false) {
              this.sede.splice(l, 1);
              l--;
            }
          }
          this.sede.unshift({ id: null, nome: ""})
        }
        this.filteredSede = this.sedeCtrl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterSede(value))
        );
      }, (error) => {
          this.errorMessage = 'Errore nel caricamento delle sedi associate alla regione.';
      });
    }
    } catch (error) {
      // alert('Errore nel caricamento delle sedi associate alla regione.');
      this.errorMessage = 'Errore nel caricamento delle sedi associate alla regione.';
    }
  }

  ruoloSelected(selectedValue: string) {
    // Trova l'oggetto del ruolo selezionato in base al valore
    const selectedRole = this.listaRuoli.find(option => option.ruolo1 === selectedValue);
    
    if (selectedRole) {
      // Imposta il valore del FormControl con la descrizione del ruolo
      this.ruoloCtrl.setValue(selectedRole.descrizione);
      this.ruoloSelezionato = selectedRole.ruolo1;

      // Controlla il codice del ruolo per abilitare/disabilitare Regione e Sede
      if (selectedRole.ruolo1 === "P12689" || selectedRole.ruolo1 === "P12690" || selectedRole.ruolo1 === "P12800" || selectedRole.ruolo1 == '' ) {
        this.regioneCtrl.reset();
        this.sedeCtrl.reset();
        this.regioneCtrl.disable();
        this.sedeCtrl.disable();
      } else if (selectedRole.ruolo1 === "P12799" || selectedRole.ruolo1 === "P12801" || selectedRole.ruolo1 == null) {
        this.regioneCtrl.enable();
        this.sedeCtrl.enable();
      }
    } else {
      // Se il ruolo non è stato trovato o è nullo, abilita Regione e Sede di default
      this.regioneCtrl.disable();
      this.sedeCtrl.disable();
    }
  }

  clearSede() {
    if (this.regioneCtrl.value != null && this.regioneCtrl.value != undefined && this.regioneCtrl.value != '') {
      const regioneId = parseInt(this.regioneCtrl.value.toString().split(' ')[0], 10);
      this.regioneSelected(regioneId);
      // this.regioneSelected(this.regioneCtrl.value.toString().split(' ')[0]);
    }
    this.regione = [];
    this.getRegioni();
    this.sedeCtrl.setValue('');
    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );
  }

  clearRegione() {
    this.sede = [];
    this.getProvince();
    this.regioneCtrl.setValue('');
    this.filteredRegione = this.regioneCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRegione(value))
    );
  }

  clearMatricola() {
    this.matricolaCtrl.setValue('');
  }

  clearRuolo() {
    this.ruoloCtrl.setValue('');
    this.regioneCtrl.disable();
    this.sedeCtrl.disable();
  }

  async getRegioni() {
    this.territorioService.getRegioni().subscribe((results: any[]) => {

      this.regione.push({ id: null, nome: ""})

        for (let i = 0; i < results.length; i++) {
          this.regione.push({ id: results[i].sedeCodSede, nome: results[i].sedeDesc})
        }

        // if (this.regione.length === 0) {
        //   alert('Non ci sono sedi disponibili.');
        //   return;
        // }
    },
    (error) => {
      this.errorMessage = 'Non ci sono sedi disponibili.'
    });
  }

  async getProvince() {
    this.territorioService.getProvince().subscribe((results: any[]) => {
      this.sede.push({ id: null, nome: ""})
      
      for (let i = 0; i < results.length; i++) {
        this.sede.push({ id: results[i].sedeCodSede, nome: results[i].sedeDesc})
      }
      
      // if (this.sede.length === 0) {
      //   alert('Non ci sono sedi provinciali disponibili.');
      //   return;
      // }
    },
    (error) => {
      this.errorMessage = 'Non ci sono sedi disponibili.'
    });
  }

  ricercaFiltrata() {

    this.formatEmptyData();

    if (this.matricolaCtrl.value == null && this.ruoloCtrl.value == null) {
      this.openErrorDialog("Per effettuare la ricerca è necessario compilare il campo Matricola o il campo Ruolo.", '')
    }
    else {
      this.inizializzaPaginazione();
    }
  }

  formatEmptyData() {

    if (this.matricolaCtrl.value == "") {
      this.matricolaCtrl.reset();
    }
    if (this.ruoloCtrl.value == "") {
      this.ruoloCtrl.reset();
    }
    if (this.regioneCtrl.value == "") {
      this.regioneCtrl.reset();
    }
    if (this.sedeCtrl.value == "") {
      this.sedeCtrl.reset();
    }
  }

  popolaTabella(){

    this.isLoading = true;

    this.formatEmptyData();

    this.utentiSrv.getUtenti(
      Number.parseInt(this.pageDim.trim()),
      this.pageCurr,
      this.ordinamentoColonna,
      this.matricolaCtrl.value,
      this.ruoloSelezionato,
      this.regioneCtrl.value,
      this.sedeCtrl.value
    ).subscribe(
        (data: any[]) => {
          this.isLoading = false;
          this.dataSourceFiltered = data;
          this.dataSource = data;
          // this.utenti = data;
        },
        error => {
          this.errorMessage = 'Errore nel recupero degli utenti.'
          console.error('Errore nel recupero degli utenti.', error);
          this.isLoading = false;
        }
      );
  }

  loadRuoli() {
    this.utentiSrv.getAllRuoli().subscribe(
      (data: any[]) => {
        this.listaRuoli = data;
        this.listaRuoli.unshift(
          {id: null,
          ruolo1: "",
          descrizione: "" }
        )
      },
      (error: any) => {
        console.error('Errore nel recupero dei ruoli.', error);
        this.errorMessage = 'Errore nel recupero dei ruoli.'
        this.isLoading = false;
      }
    );
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

  showField(content: string) {

    if (content == null || content == undefined || content == "") {
      return "-"
    }
    return content;
  }

  formatToSixDigits(value: any): string | null {
    const numberValue = Number(value);
    if (value == null) {
      return null;
    }
    return numberValue.toString().padStart(6, '0');
  }

  displayFieldSede(sedeDTO: any[]) {
    let output = "";

    if (sedeDTO[0].sedeCodSede != null && sedeDTO[0].sedeCodSede != undefined) {
      output = sedeDTO[0].sedeCodSede + ' - ' + sedeDTO[0].sedeDesc;

      if (sedeDTO.length > 1) { output = output + ' ... ' }

      return output
    }
    else return "-";
  }

  showAllFieldSedi(sedeDTO: any[]) {

    if (sedeDTO.length != 1) {

      let output = "";

      for (let i = 0; i < sedeDTO.length; i++) {

        if (sedeDTO[i].sedeCodSede != null && sedeDTO[i].sedeCodSede != undefined) {
          const support = sedeDTO[i].sedeCodSede + ' - ' + sedeDTO[i].sedeDesc;
          output = output + support + '<br>';
        }
      }
      this.openErrorDialog(output, '');
    }
    // else non devo aprire il popup perché non ho informazioni aggiuntive da mostrare
  }

  displayFieldRuolo(ruoloDTO: any[]) {
    let output = "";
    
    if (ruoloDTO[0].ruoloCod != null && ruoloDTO[0].ruoloCod != undefined) {
      output = ruoloDTO[0].ruoloDesc;
      // const output = ruoloDTO[0].ruoloCod + ' - ' + ruoloDTO[0].ruoloDesc;

      if (ruoloDTO.length > 1) { output = output + ' ... ' }

      return output
    }
    else return "-";
  }

  showAllFieldRuoli(ruoloDTO: any[]) {

    if (ruoloDTO.length != 1) {

      let output = "";

      for (let i = 0; i < ruoloDTO.length; i++) {

        if (ruoloDTO[i].ruoloCod != null && ruoloDTO[i].ruoloCod != undefined) {
          const support = ruoloDTO[i].ruoloDesc;
          // const support = ruoloDTO[i].ruoloCod + ' - ' + ruoloDTO[i].ruoloDesc;
          output = output + support + '<br>';
        }
      }
      this.openErrorDialog(output, '');
    }
    // else non devo aprire il popup perché non ho informazioni aggiuntive da mostrare
  }

  openErrorDialog(message: string, titolo: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { message: message, titolo: titolo },
    });
  }

  resetRicerca() {
    this.matricolaCtrl.reset();
    this.ruoloCtrl.reset();

    this.filtroperSede = null;
    this.filtroperRegione = null;
    this.sedeCtrl.reset();
    this.regioneCtrl.reset();

    // non so se commentabili
    this.filteredSede = this.sedeCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterSede(value))
    );

    this.filteredRegione = this.regioneCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterRegione(value))
    );

    this.regione = [];
    this.sede = [];
    this.getRegioni();
    this.getProvince();

    this.elemNum = 0;
    this.dataSourceFiltered = [];

    this.sedeCtrl.disable();
    this.regioneCtrl.disable();
  }

  openSedePanel() {
    this.sedeAutocompleteTrigger.openPanel();
  }

  openRegionePanel() {
    this.regioneAutocompleteTrigger.openPanel();
  }

  openRuoloPanel() {
    this.ruoloAutocompleteTrigger.openPanel();
  }

  onFocus(ctrl: FormControl): void {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

  sortData(sort: Sort) {
    let ordine = "";
    if (sort.direction) {
      ordine = sort.active + '_' + sort.direction;
    }
    if (this.selectedTab === 0) {
      this.ordinamentoColonna = ordine;
      this.popolaTabella();
    } else if (this.selectedTab === 1) {
      this.ordinamentoColonna = ordine;
      this.loadScarti();  // Per aggiornare la tabella scarti con ordinamento
    }
  }

  handleRowClick(row: any) {
    // TAB Gestione Utenti
    // if (this.selectedTab === 0) {
    //   this.utentiSrv.datiUtente$.next({row: row, selectedTab: this.selectedTab});
    //   const dialogRef = this.dialog.open(ListaUtentiModificaComponent, {
    //     disableClose: true,
    // });
    // // dialogRef.afterClosed().subscribe(result => {
    // //   // se ho fatto modifiche ho impostato l'observable a null: lo sfrutto per ricaricare i dati aggiornati
    // //   if (this.utentiSrv.datiUtente$.value == null) {
    // //     this.inizializzaPaginazione();
    // //   }
    // //   // se non ho fatto modifiche l'observable contiene ancora l'ultimo record utente cliccato
    // //   else {}
    // // });
    // }
    // TAB Lista Scarti
    // else /*if this.selectedTab === 1*/ {
      this.utentiSrv.datiUtente$.next({row: row, selectedTab: this.selectedTab});
      const dialogRef = this.dialog.open(ListaUtentiModificaComponent, {
        disableClose: true,
      });
    // }
  }

  // FUNZIONI PAGINAZIONE TAB LISTA UTENTI
  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente
    this.base = 1; //base per creazione layout
    this.layoutDim = 6; //elementi paginazione
    this.layoutNumbers = []; //numeri del paginatore
  }

  inizializzaPaginazione() {
    this.resetPaginazione();
    this.utentiSrv.contaRicercaFiltrata(
      this.matricolaCtrl.value,
      this.ruoloSelezionato,
      this.regioneCtrl.value,
      this.sedeCtrl.value
    ).subscribe((data: any) => {
      this.elemNum = data.totale != null ? Number.parseInt(data.totale) : Number.parseInt(data.count);
      // this.elemNum = Number.parseInt(data.totale);
      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
      this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
      this.popolaTabella();
    });
  }

  pageNext() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr++;
      this.scorriLayout();
      this.popolaTabella();
    }
  }

  pagePrev() {
    if (this.pageCurr > 1) {
      this.pageCurr--;
      this.scorriLayout();
      this.popolaTabella();
    }
  }

  setPageCurr(page: number) {
    this.pageCurr = page;
    this.popolaTabella();
  }

  //scorri layoutNumbers
  scorriLayout() {
    if (
      this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1] &&
      this.pageCurr < this.pageNum
    ) {
      this.base = this.base + (this.layoutDim - 1);
      this.layoutNumbers = [];
      for (let i = this.base; i < this.base + 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
    } else if (this.pageCurr <= this.layoutNumbers[0] && this.pageCurr > 1) {
      this.base = this.base - (this.layoutDim - 1);
      this.layoutNumbers = [];
      for (let i = this.base; i < this.base + 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
    }
    else if (this.pageCurr === 1) {
      this.base = 1;
    }
  }

  pageFirst() {
    if (this.pageCurr > 1) {
      this.pageCurr = 1;
      this.base = 1;
      this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
      this.popolaTabella();
    }
  }

  pageLast() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr = this.pageNum;
      this.base = Math.max(1, this.pageNum - 5);
      this.layoutNumbers = Array.from({ length: 6 }, (_, i) => this.base + i).filter(
        k => k <= this.pageNum
      );
      this.popolaTabella();
    }
  }

  // FUNZIONI PAGINAZIONE TAB LISTA SCARTI
  resetPaginazioneScarti() {
    this.pageCurrScarti = 1; //pagina corrente
    this.baseScarti = 1; //base per creazione layout
    this.layoutDimScarti = 6; //elementi paginazione
    this.layoutNumbersScarti = []; //numeri del paginatore
  }

  inizializzaPaginazioneScarti() {
    this.resetPaginazioneScarti();
    this.utentiSrv.contaScarti(

    ).subscribe((data: any) => {
      this.elemNumScarti = data.totale != null ? Number.parseInt(data.totale) : Number.parseInt(data.count)
      // this.elemNumScarti = Number.parseInt(data.totale);
      this.pageNumScarti = Math.ceil(this.elemNumScarti / Number(this.pageDimScarti)) || 1;
      this.layoutNumbersScarti = Array.from({ length: Math.min(6, this.pageNumScarti) }, (_, i) => i + 1);
      this.loadScarti();
    });
  }

  pageNextScarti() {
    if (this.pageCurrScarti < this.pageNumScarti) {
      this.pageCurrScarti++;
      this.scorriLayoutScarti();
      this.loadScarti();
    }
  }

  pagePrevScarti() {
    if (this.pageCurrScarti > 1) {
      this.pageCurrScarti--;
      this.scorriLayoutScarti();
      this.loadScarti();
      // this.popolaTabella();
    }
  }

  setPageCurrScarti(page: number) {
    this.pageCurrScarti = page;
    this.loadScarti();
    // this.popolaTabella();
  }

  //scorri layoutNumbers
  scorriLayoutScarti() {
    if (
      this.pageCurrScarti >= this.layoutNumbersScarti[this.layoutNumbersScarti.length - 1] &&
      this.pageCurrScarti < this.pageNumScarti
    ) {
      this.baseScarti = this.baseScarti + (this.layoutDimScarti - 1);
      this.layoutNumbersScarti = [];
      for (let i = this.baseScarti; i < this.baseScarti + 6; i++) {
        if (i <= this.pageNumScarti) {
          this.layoutNumbersScarti.push(i);
        }
      }
    } else if (this.pageCurrScarti <= this.layoutNumbersScarti[0] && this.pageCurrScarti > 1) {
      this.baseScarti = this.baseScarti - (this.layoutDimScarti - 1);
      this.layoutNumbersScarti = [];
      for (let i = this.baseScarti; i < this.baseScarti + 6; i++) {
        if (i <= this.pageNumScarti) {
          this.layoutNumbersScarti.push(i);
        }
      }
    }
    else if (this.pageCurrScarti === 1) {
      this.baseScarti = 1;
    }
  }

  pageFirstScarti() {
    if (this.pageCurrScarti > 1) {
      this.pageCurrScarti = 1;
      this.baseScarti = 1;
      this.layoutNumbersScarti = Array.from({ length: Math.min(6, this.pageNumScarti) }, (_, i) => i + 1);
      this.loadScarti();
    }
  }

  pageLastScarti() {
    if (this.pageCurrScarti < this.pageNumScarti) {
      this.pageCurrScarti = this.pageNumScarti;
      this.baseScarti = Math.max(1, this.pageNumScarti - 5);
      this.layoutNumbersScarti = Array.from({ length: 6 }, (_, i) => this.baseScarti + i).filter(
        k => k <= this.pageNumScarti
      );
      this.loadScarti();
    }
  }

/////////////////////////////////////////////////////////////////////////////////////////////
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Controlla se il file è xls o xlsx
      const extension = file.name.split('.').pop().toLowerCase();
      if (extension !== 'xls' && extension !== 'xlsx') {
        this.snackBar.open('Errore: puoi selezionare solo file .xlsx e .xls', 'Chiudi', {
          duration: 3000,
        });
        this.selectedFile = null;
      } else {
        this.selectedFile = file;
        this.snackBar.open('File inviato per l\'elaborazione', 'Chiudi', {
          duration: 3000,
        });
      }
    }
    this.onUpload();
  }

  onUpload(): void {
    if (this.selectedFile) {
      this.utentiSrv.censimentoUtenti(this.selectedFile)
        .subscribe(
          (response) => {
            this.openErrorDialog(response.message,'');
            this.selectedFile = null;
            this.inizializzaPaginazioneScarti();
          },
          (error) => {
            this.errorMessage = 'Errore durante l\'upload';
            this.openErrorDialog(error,'Errore:');
          }
        );
    } else {
      this.snackBar.open('Nessun file selezionato o File selezionato del tipo sbagliato', 'Chiudi', { duration: 5000 });
    }
  }

  loadScarti() {
    const ordinamento = this.ordinamentoColonna != null ? this.ordinamentoColonna : null
    this.utentiSrv.getScarti(
      Number.parseInt(this.pageDimScarti.trim()),
      this.pageCurrScarti,
      ordinamento!
    ).subscribe((data: any[]) => {
        this.dataSourceScarti = data;
      }, error => {
        this.errorMessage = 'Errore nel recupero degli scarti';
      });
  }

  displayFieldData(content: string) {

    if (content == null || content == undefined || content == '' || content.trim() == "") {
      return "-"
    }
    else {
      const data = content.split('T')[0]
      const ora = content.split('T')[1]

      const formatData = data.split('-').reverse().join('-').replace(/-/g, '/');
      const formatOra = ora.split('.')[0]

      return formatData + ' ' + formatOra;
    }
  }
}

interface Ruolo {
  id: number | null,
  ruolo1: string,
  descrizione: string
}

interface Sede {
  id: number | null;
  nome: string;
}
