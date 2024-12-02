import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { LogsService } from '@shared/services/logs.service';
import { LogApplicativoDialogComponent } from '../log-applicativo-dialog/log-applicativo-dialog.component';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { TipiLogApplicativi } from '@shared/models/tipiLogApplicativi.model';
import * as moment from 'moment';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-log-applicativo',
  templateUrl: './log-applicativo.component.html',
  styleUrls: ['./log-applicativo.component.scss'],
})
export class LogApplicativoComponent implements OnInit {
  list: any[] = [];
  list2: any[] = [];
  tipiLogApp: TipiLogApplicativi[] = [];
  listFiltered: any[] = [];
  listFiltered2: any[] = [];
  isLoading = true;
  isLoading2 = true;
  ricercaAtt = false;
  ricercaAtt2 = false;

  displayedColumns: string[] = ['account', 'creato', 'matricola', 'evento', 'messaggio'];
  dataSource1: any[] = [];
  dataSourceFiltered: any[] = [];
  filtroStringa = '';
  ordine: string | null = null;
  displayedColumns2: string[] = ['account', 'creato', 'matricola', 'messaggio', 'evento'];
  dataSource2: any[] = [];
  dataSourceFiltered2: any[] = [];
  filtroStringa2 = '';
  ordine2: string | null = null;

  oldStartDate: any;
  oldEndDate: any;
  oldStartDate2: any;
  oldEndDate2: any;

  constructor(
    public dialogAlert: MtxDialog,
    private logSrv: LogsService,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private formBuilder2: FormBuilder
  ) {}

  tipoLogCtrl = new FormControl();
  filteredTipiLog: Observable<TipiLogApplicativi[]> | undefined;
  filtroperTipiLog: string | null = null;

  /*  parametri tab eccezioni */
  formRicerca = this.formBuilder.group({
    dataInizio: null,
    dataFine: null,
    dimensione: -1,
    idAccount: '',
    idMatricola: '',
    pagina: -1,
  });

  /* parametri tab eventi */
  formRicerca2 = this.formBuilder2.group({
    dataInizio2: null,
    dataFine2: null,
    dimensione2: -1,
    idAccount2: '',
    idMatricola2: '',
    tipoLog: this.tipoLogCtrl,
    pagina2: -1,
  });

  async ngOnInit(): Promise<void> {
    this.ricercaAtt = false;
    this.ricercaAtt2 = false;
    this.isLoading = true;
    this.isLoading2 = true;
    this.tipiLogApplicativi();

    await this.updateDates1(null, null);
    await this.updateDates2(null, null);

    this.inizializzaPaginazione();
    this.inizializzaPaginazione2();

    this.filteredTipiLog = this.tipoLogCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterTipiLog(value))
    );
  }

  private _filterTipiLog(value: string): TipiLogApplicativi[] {
    const filterValue = typeof value === 'string' ? value.toLowerCase() : '';
    return this.tipiLogApp.filter(option =>
      option.nome.toLowerCase().includes(filterValue)
    );
  }

    tipoLogSelected(selectedTipo: TipiLogApplicativi) {
      if (selectedTipo && selectedTipo.id !== -1) {
        this.tipoLogCtrl.setValue(selectedTipo);
        this.formRicerca2.patchValue({
          tipoLog: selectedTipo.id // Imposta solo l'ID del tipo di log
        });
      } else {
        this.clearTipoLog();
      }
    }
    displayTipoLog(option: TipiLogApplicativi | number): string {
      // Controlla se `tipiLogApp` è definita prima di utilizzare `.find()`
      if (!this.tipiLogApp || this.tipiLogApp.length === 0) {
        return '';
      }

      if (typeof option === 'number') {
        // Cerca il nome del tipo di log basato sull'ID
        const selectedOption = this.tipiLogApp.find(tipo => tipo.id === option);
        return selectedOption ? selectedOption.nome : '';
      }

      // Se viene passato un oggetto, restituisci direttamente il nome
      return option ? option.nome : '';
    }


  clearTipoLog() {
    this.tipoLogCtrl.setValue(null);
    this.formRicerca2.patchValue({ tipoLog: null });
  }

  onFocus(ctrl: FormControl): void {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }

  /* / parametri */

  //----------------paginazione config--------------------------
  pageDim = '20'; //numero di righe per pagina
  pageCurr = 1; //pagina corrente
  pageNum = 0; //numero di pagine
  elemNum = 0; //numero di elementi totali
  base = 1; //base per creazione layout
  layoutDim = 6; //elementi paginazione
  layoutNumbers: number[] = []; //numeri del paginatore
  numPages = ['5', '10', '20', '50', '100']; //possibili righe di paginazione

  //----------------paginazione config TAB EVENTI--------------------------
  pageDim2 = '20'; //numero di righe per pagina
  pageCurr2 = 1; //pagina corrente
  pageNum2 = 0; //numero di pagine
  elemNum2 = 0; //numero di elementi totali
  base2 = 1; //base per creazione layout
  layoutDim2 = 6; //elementi paginazione
  layoutNumbers2: number[] = []; //numeri del paginatore
  numPages2 = ['5', '10', '20', '50', '100']; //possibili righe di paginazione

  sortData(sort: Sort) {
    this.ordine = '';
    if (sort.direction) {
      this.ordine = sort.active + '_' + sort.direction;
    }
    this.popolaRisultato();
  }

  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente
    this.base = 1; //base per creazione layout
    this.layoutDim = 6; //elementi paginazione
    this.layoutNumbers = []; //numeri del paginatore
  }

  inizializzaPaginazione() {
    this.resetPaginazione();

    const datai = this.formatDate(this.formRicerca.value.dataInizio);
    const dataf = this.formatDate(this.formRicerca.value.dataFine);
    this.logSrv
      .contaErrori(this.formRicerca.value.idAccount,this.formRicerca.value.idMatricola,datai,dataf).subscribe(
        data => {
        this.elemNum = data;
        this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
        this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
        this.popolaRisultato();
      });
  }

  //scorri layoutNumbers
  scorriLayout() {
    if (this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1] && this.pageCurr < this.pageNum) {
      this.base = this.base + (this.layoutDim - 1);
      this.layoutNumbers = [];
      for (let i = this.base; i < this.base + 6 && i <= this.pageNum; i++) {
        this.layoutNumbers.push(i);
      }
    } else if (this.pageCurr <= this.layoutNumbers[0] && this.pageCurr > 1) {
      this.base = Math.max(this.base - (this.layoutDim - 1), 1);
      this.layoutNumbers = [];
      for (let i = this.base; i < this.base + 6 && i <= this.pageNum; i++) {
        this.layoutNumbers.push(i);
      }
    }
    else if (this.pageCurr === 1) {
      this.base = 1;
    }
  }

  scorriLayout2() {
    if (this.pageCurr2 >= this.layoutNumbers2[this.layoutNumbers2.length - 1] && this.pageCurr2 < this.pageNum2) {
      this.base2 = this.base2 + (this.layoutDim2 -1)
      this.layoutNumbers2 = [];
      for (let i = this.base2; i < this.base2 + 6 && i <= this.pageNum2; i++) {
        this.layoutNumbers2.push(i);
      }
    } else if (this.pageCurr2 <= this.layoutNumbers2[0] && this.pageCurr2 > 1) {
      this.base2 = Math.max(this.base2 - (this.layoutDim2 - 1), 1);
      this.layoutNumbers2 = [];
      for (let i = this.base2; i < this.base2 + 6 && i <= this.pageNum2; i++) {
        this.layoutNumbers2.push(i);
      }
    }
    else if (this.pageCurr2 === 1) {
      this.base2 = 1;
    }
  }

  pageNext() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr++;
      this.scorriLayout();
      this.popolaRisultato();
    }
  }

  pagePrev() {
    if (this.pageCurr > 1) {
      this.pageCurr--;
      this.scorriLayout();
      this.popolaRisultato();
    }
  }

  pageFirst() {
    if (this.pageCurr > 1) {
      this.pageCurr = 1;
      this.base = 1;
      this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
      this.popolaRisultato();
    }
  }

  pageLast() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr = this.pageNum;
      this.base = Math.max(1, this.pageNum - 5);
      this.layoutNumbers = Array.from({ length: 6 }, (_, i) => this.base + i).filter(
        k => k <= this.pageNum
      );
      this.popolaRisultato();
    }
  }

  setPageCurr(page: number) {
    this.pageCurr = page;
    this.popolaRisultato();
  }

  popolaTabella() {
    this.logSrv.getLogsParam(this.pageDim, this.ordine, this.pageCurr - 1).subscribe(data => {
      this.dataSource1 = data;
      this.dataSourceFiltered = data;
    });
  }

  azzeraFiltro() {
    this.filtroStringa = '';
    this.dataSourceFiltered = this.dataSource1;
  }

  openDialog(id: number) {
    this.logSrv.idAttivo = id;
    this.dialog.open(LogApplicativoDialogComponent).afterClosed().subscribe(() => {
      this.popolaRisultato();
    });
  }

  openErrorDialog(message: string, titolo: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { message: message, titolo: titolo },
    });
  }

  popolaRisultato() {
    const datai = this.formatDate(this.formRicerca.value.dataInizio);
    const dataf = this.formatDate(this.formRicerca.value.dataFine);

    this.isLoading = true;
    this.logSrv
      .getLogFilterByStacktrace(
        this.formRicerca.value.idAccount,
        this.formRicerca.value.idMatricola,
        datai,
        dataf,
        this.pageDim,
        this.ordine,
        this.pageCurr - 1
      )
      .subscribe((data: any) => {
        this.list = data;
        this.listFiltered = data;
        if (!(this.listFiltered.length > 0) /*&& this.ricercaAtt*/) {
          this.dialogAlert.alert(`Nessun risultato per il filtro selezionato!`);
          //this.ricercaAtt = false;
        }
      });
  }

    async resetRicerca() {
      // Resetta il form ai valori iniziali
      this.formRicerca.reset({
        dataInizio: null,
        dataFine: null,
        idAccount: '',
        idMatricola: '',
      });

      await this.updateDates1(null, null);

      // Reimposta la lista e la ricerca attiva
      this.list = [];
      this.isLoading = true;
      this.ricercaAtt = false;

      // Reimposta la paginazione
      this.pageCurr = 1; // Torna alla prima pagina
      this.inizializzaPaginazione(); // Ripopola la tabella con i dati completi
    }

  filtroRicerca() {
    this.listFiltered = this.list.filter(x =>
      x.matricola.toLocaleLowerCase().includes(this.formRicerca.get('idMatricola')?.value.toLocaleLowerCase()) &&
      x.account.toLocaleLowerCase().includes(this.formRicerca.get('idAccount')?.value.toLocaleLowerCase()));
  }

  //###############################################################################################
  // ---------------------------- INIZIO TAB EVENTI -----------------------------------------------
  //###############################################################################################

  sortData2(sort2: Sort) {
    this.ordine2 = '';
    if (sort2.direction) {
      this.ordine2 = sort2.active + '_' + sort2.direction;
    }
    this.popolaTabella2();
  }

  resetPaginazione2() {
    this.pageCurr2 = 1; //pagina corrente
    this.base2 = 1; //base per creazione layout
    this.layoutDim2 = 6; //elementi paginazione
    this.layoutNumbers2 = []; //numeri del paginatore
  }

  inizializzaPaginazione2() {
    this.resetPaginazione2();

    const formatDate = (date: any) => (date ? moment(date).format('MM/DD/YYYY') : '');
    const datai2 = formatDate(this.formRicerca2.value.dataInizio2);
    const dataf2 = formatDate(this.formRicerca2.value.dataFine2);
    // Ottieni solo l'ID del tipo di log
    const tipoLogId = this.formRicerca2.value.tipoLog;
    this.logSrv
      .contaEventi(
        this.formRicerca2.value.idAccount2,
        this.formRicerca2.value.idMatricola2,
        datai2,
        dataf2,
        tipoLogId
      )
      .subscribe(data2 => {
        this.elemNum2 = data2;
        this.pageNum2 = Math.ceil(this.elemNum2 / Number(this.pageDim2)) || 1;
        this.layoutNumbers2 = Array.from({ length: Math.min(6, this.pageNum2) }, (_, i) => i + 1);
        this.popolaTabella2();
      });
  }

  formatDate(date: any): string {
    return date ? moment(date).format('MM/DD/YYYY') : '';
  }

  pageNext2() {
    if (this.pageCurr2 < this.pageNum2) {
      this.pageCurr2++;
      this.scorriLayout2();
      this.popolaTabella2();
    }
  }

  pagePrev2() {
    if (this.pageCurr2 > 1) {
      this.pageCurr2--;
      this.scorriLayout2();
      this.popolaTabella2();
    }
  }

  setPageCurr2(page2: number) {
    this.pageCurr2 = page2;
    this.popolaTabella2();
  }

  pageFirst2() {
    if (this.pageCurr2 > 1) {
      this.pageCurr2 = 1;
      this.base2 = 1;
      this.layoutNumbers2 = Array.from({ length: Math.min(6, this.pageNum2) }, (_, i) => i + 1);
      this.popolaTabella2();
    }
  }

  pageLast2() {
    if (this.pageCurr2 < this.pageNum2) {
      this.pageCurr2 = this.pageNum2;
      this.base2 = Math.max(1, this.pageNum2 - 5);
      this.layoutNumbers2 = Array.from({ length: 6 }, (_, i) => this.base2 + i).filter(
        k => k <= this.pageNum2
      );
      this.popolaTabella2();
    }
  }

  popolaTabella2() {

    const datai2 = ((date: any) => (date ? this.formatDate(date) : ''))(this.formRicerca2.value.dataInizio2);
    const dataf2 = ((date: any) => (date ? this.formatDate(date) : ''))(this.formRicerca2.value.dataFine2);

    this.isLoading2 = true;
    this.logSrv.getLogs(
      this.formRicerca2.value.idAccount2, this.formRicerca2.value.idMatricola2,
      datai2, dataf2, this.formRicerca2.value.tipoLog, this.pageDim2,
      this.ordine2, this.pageCurr2 - 1).subscribe(
        (data: any) => {
          this.list2 = data;
          this.listFiltered2 = data;
          if (!(this.listFiltered2.length > 0) && this.ricercaAtt2) {
            this.dialogAlert.alert(`Nessun risultato per il filtro selezionato!`);
            this.ricercaAtt2 = false;
          }
        this.isLoading2 = false;
      });
  }

  filtroRicercaEventi() {
    this.listFiltered2 = this.list2.filter(
      x =>
        x.matricola.toLocaleLowerCase().includes(this.formRicerca2.get('idMatricola2')?.value.toLocaleLowerCase()) &&
        x.account.toLocaleLowerCase().includes(this.formRicerca2.get('idAccount2')?.value.toLocaleLowerCase())
    );
  }

  async resetRicercaEventi() {
    // Resetta il form ai valori iniziali
    this.formRicerca2.reset({
      dataInizio2: null,
      dataFine2: null,
      idAccount2: '',
      idMatricola2: '',
      tipoLog: null, // Resetta anche il tipo di evento
    });

      await this.updateDates2(null, null);

      // Reimposta la lista e la ricerca attiva
      this.list2 = [];
      this.isLoading2 = true;
      this.ricercaAtt2 = false;

      // Reimposta la paginazione
      this.pageCurr2 = 1; // Torna alla prima pagina
      this.inizializzaPaginazione2(); // Ripopola la tabella con i dati completi
    }

  tipiLogApplicativi() {
    this.logSrv.getTipiLogApplicativi().subscribe((data: TipiLogApplicativi[]) => {
      // Aggiungi un oggetto vuoto
    const emptyObject: TipiLogApplicativi = {
      id: -1, nome: '',
      creato: new Date(),
      aggiornato: new Date()
    };
      //this.tipiLogApp = data;
      this.tipiLogApp = [emptyObject, ...data];
    });
  }

  async updateDates1(dataInizio: Date | null, dataFine: Date | null): Promise<void> {
    const result = await this.updateDates(
      dataInizio,
      dataFine,
      12,
      this.formRicerca,
      'dataInizio',
      'dataFine',
      this.oldStartDate,
      this.oldEndDate
    );
    this.oldStartDate = result.oldStartDate;
    this.oldEndDate = result.oldEndDate;
  }

  async updateDates2(dataInizio2: Date | null, dataFine2: Date | null): Promise<void> {
    const result = await this.updateDates(
      dataInizio2,
      dataFine2,
      6,
      this.formRicerca2,
      'dataInizio2',
      'dataFine2',
      this.oldStartDate2,
      this.oldEndDate2
    );
    this.oldStartDate2 = result.oldStartDate;
    this.oldEndDate2 = result.oldEndDate;
  }
  private async updateDates(
    dataInizio: Date | null,
    dataFine: Date | null,
    maxMonths: number,
    form: FormGroup,
    dataInizioField: string,
    dataFineField: string,
    oldStartDate: Date | null,
    oldEndDate: Date | null
  ): Promise<{ oldStartDate: Date | null; oldEndDate: Date | null }> {
    const today = moment().startOf('day');
    let newStartDate = dataInizio ? moment(dataInizio).startOf('day') : null;
    let newEndDate = dataFine ? moment(dataFine).startOf('day') : null;

    if (!newStartDate && !newEndDate) {
      newEndDate = today.clone();
      newStartDate = today.clone().subtract(maxMonths, 'months');
      form.patchValue({
        [dataInizioField]: newStartDate.toDate(),
        [dataFineField]: newEndDate.toDate(),
      });
    } else if (!newStartDate && newEndDate) {
      const oldStartDateMoment = oldStartDate ? moment(oldStartDate).startOf('day') : null;
      const startDateForDiff = oldStartDateMoment || newEndDate.clone().subtract(maxMonths, 'months');
      const diffDays = newEndDate.diff(startDateForDiff, 'days');
      const diffMonths = newEndDate.diff(startDateForDiff, 'months', true);

      if (diffDays < 0) {
        form.patchValue({
          [dataFineField]: oldEndDate,
          [dataInizioField]: oldStartDate,
        });
        this.openErrorDialog('La data fine inserita è antecedente alla data inizio.', 'Errore:');
      } else if (diffMonths > maxMonths) {
        newStartDate = newEndDate.clone().subtract(maxMonths, 'months');
        form.patchValue({
          [dataInizioField]: newStartDate.toDate(),
          [dataFineField]: newEndDate.toDate(),
        });
        this.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:');
      } else {
        form.patchValue({
          [dataFineField]: newEndDate.toDate(),
        });
      }
    } else if (newStartDate && !newEndDate) {
      const oldEndDateMoment = oldEndDate ? moment(oldEndDate).startOf('day') : null;
      const endDateForDiff = oldEndDateMoment || today.clone();
      const diffDays = endDateForDiff.diff(newStartDate, 'days');
      const diffMonths = endDateForDiff.diff(newStartDate, 'months', true);

      if (diffMonths > maxMonths) {
        newEndDate = newStartDate.clone().add(maxMonths, 'months');
        if (newEndDate.isAfter(today)) {
          newEndDate = today.clone();
        }
        form.patchValue({
          [dataInizioField]: newStartDate.toDate(),
          [dataFineField]: newEndDate.toDate(),
        });
        this.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:');
      } else {
        form.patchValue({
          [dataInizioField]: newStartDate.toDate(),
        });
      }
    } else if (newStartDate && newEndDate) {
      if (newEndDate.isBefore(newStartDate)) {
        form.patchValue({
          [dataFineField]: oldEndDate,
          [dataInizioField]: oldStartDate,
        });
        this.openErrorDialog('La data fine inserita è antecedente alla data inizio.', 'Errore:');
      } else {
        const diffMonths = newEndDate.diff(newStartDate, 'months', true);
        if (diffMonths > maxMonths) {
          this.openErrorDialog(`Range di tempo massimo visualizzabile di ${maxMonths} mesi.`, 'Errore:');
          // ricalcola data in base a maxMonths
          newStartDate = newEndDate.clone().subtract(maxMonths, 'months');
          form.patchValue({
            [dataInizioField]: newStartDate.toDate(),
            [dataFineField]: newEndDate.toDate(),
          });
        } else {
          // range ricalcolato
          form.patchValue({
            [dataInizioField]: newStartDate.toDate(),
            [dataFineField]: newEndDate.toDate(),
          });
        }
      }
    }

    const updatedOldStartDate = form.value[dataInizioField] as Date | null;
    const updatedOldEndDate = form.value[dataFineField] as Date | null;

    return {
      oldStartDate: updatedOldStartDate,
      oldEndDate: updatedOldEndDate,
    };
  }
}
