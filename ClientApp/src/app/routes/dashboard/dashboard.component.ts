import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { BachecaDTO, MessaggiService } from '@shared/services/messaggi.service';
import { ModalDettagliDashboardComponent } from './modal-dettagli-dashboard/modal-dettagli-dashboard.component';
import { StorageService } from '@shared';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

  data: BachecaDTO[] = [];
  disableRowClick: boolean = true;
  messaggioAttivo = true;
  isLoading = true;

  @ViewChild('table') table!: MatTable<any>;

  displayedColumns: string[] = [
    'dataInserimento',
    'oggetto',
    'messaggio',
    'nomeCognome'
  ];

  readonly ruoloAmministratore = 'P12689';
  readonly ruoloCentraleAmministrativoDCO = 'P12690';

  errorMessage: string = "";

  // Variabili paginazione
  pageDim = '20';
  pageCurr = 1;
  pageNum = 0;
  elemNum = 0;
  base = 1;
  layoutDim = 6;
  layoutNumbers: number[] = [];
  numPages = ['5', '10', '20', '50', '100'];
  ordinamentoColonna: string | null = null;
  allRoles!:string

  constructor(
    private messaggiService: MessaggiService,
    private dialog: MatDialog,
    private storageService: StorageService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.allRoles = this.storageService.getItem('allroles').toString().trim();
    this.checkRoles();
    this.inizializzaPaginazione();
  }

 checkRoles() {
    const allRoles = this.storageService.getItem('allroles').toString().trim();

    if (allRoles.includes(this.ruoloAmministratore) || allRoles.includes(this.ruoloCentraleAmministrativoDCO)) {
      this.disableRowClick = false;
    }
  }

  inizializzaPaginazione() {
    this.resetPaginazione();
    this.messaggiService.statoMessaggio$.next(this.messaggioAttivo);

    this.messaggiService.contaMessaggi(this.messaggioAttivo).subscribe((data: any) => {
      this.elemNum = Number.parseInt(data.numeroMessaggi);
      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim)) || 1;
      this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);
      this.popolaTabella();
    });
  }

  popolaTabella() {
    this.messaggiService
      .getMessaggi(
        Number.parseInt(this.pageDim.trim()),
        this.pageCurr,
        this.ordinamentoColonna,
        this.messaggioAttivo
      )
      .subscribe(
        (data: any[]) => {
          this.data = data;
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Errore nel recupero dei dati: ', error);
          this.errorMessage = 'Errore nel recupero dei dati'
        }
      );
  }

  sortData(sort: Sort) {

    if (sort.direction != "") {
      let ordine = '';
      ordine = sort.active + '_' + sort.direction;
      this.ordinamentoColonna = ordine;
    }
    else {
      this.ordinamentoColonna = null;
    }
    this.popolaTabella();
  }

  async handleRowClick(row: any, tipoOperazione: string) {

    if (tipoOperazione == 'Modifica') {
      this.messaggiService.datiMessaggio$.next(row);
    }
    else if (tipoOperazione == 'Inserimento') {
      this.messaggiService.datiMessaggio$.next(0);
    }

    const dialogRef = this.dialog.open(ModalDettagliDashboardComponent, {
      height: 'auto',
      width: '50vw',
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
        setTimeout(() => {
          this.inizializzaPaginazione();
        }, 500)
    });
  }

  onToggleChange(event: any) {
    if (event.checked === false) {
      this.messaggioAttivo == false;
    }
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

  displayFieldAttivo(messaggioAttivo: boolean) {
    if (messaggioAttivo === true) {
      return 'Attivi';
    }
    else {
      return 'Non Attivi';
    }
  }

  // Funzioni paginazione
  resetPaginazione() {
    this.pageCurr = 1; //pagina corrente
    this.base = 1; //base per creazione layout
    this.layoutDim = 6; //elementi paginazione
    this.layoutNumbers = []; //numeri del paginatore
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

  truncateText(text: string, limit: number): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}
