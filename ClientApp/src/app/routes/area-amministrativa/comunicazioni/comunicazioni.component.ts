import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { ComunicazioneNuovaComponent } from './comunicazione-nuova/comunicazione-nuova.component';
import { ComunicazioneAggiornaComponent } from './comunicazione-aggiorna/comunicazione-aggiorna.component';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-comunicazioni',
  templateUrl: './comunicazioni.component.html',
  styleUrls: ['./comunicazioni.component.scss']
})
export class ComunicazioniComponent implements OnInit {

  private searchSubject = new Subject<string>();
  displayedColumns: string[] = ['oggetto', 'nome', 'messaggio', 'dataInizio', 'dataFine'];
  dataSource: any[] = [];
  filtroStringa = '';

  // Proprietà per paginazione e ordinamento
  pageDim = '20';
  pageCurr = 1;  // Pagina corrente
  pageNum = 0;   // Numero di pagine
  elemNum = 0;   // Numero di elementi totali
  base = 1;      // Base per creazione layout
  layoutDim = 6; // Elementi paginazione
  layoutNumbers: number[] = []; // Numeri del paginatore
  numPages = ['5', '10', '20', '50', '100'];  // Possibili righe di paginazione
  ordine = '';
  errorMessage: string = '';

  constructor(public dialog: MatDialog, private comunicazioniSrv: ComunicazioniService) { }

  ngOnInit(): void {
    this.inizializzaPaginazione();

    this.searchSubject.pipe(
      debounceTime(500)
    ).subscribe(searchTerm => {
      this.filtroStringa = searchTerm;
      this.pageCurr = 1;
      this.base = 1;
      this.layoutNumbers = [];
      this.inizializzaPaginazione();
    });
  }

  modificaDialog(id: number) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.width = '600px';
    dialogConfig.data = id;
    const dialogRef = this.dialog.open(ComunicazioneAggiornaComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.inizializzaPaginazione();
    });
  }

  nuovaDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = 0;
    dialogConfig.width = '600px';
    dialogConfig.height = 'auto';
    const dialogRef = this.dialog.open(ComunicazioneNuovaComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.ordine = '';
      this.inizializzaPaginazione();
    });
  }

  popolaTabella() {
    this.comunicazioniSrv.newGetComunicazioniConPaginazione(Number(this.pageDim),this.ordine,this.pageCurr - 1,this.filtroStringa).subscribe
    (data => {
        this.dataSource = data;
      },
      () => {
        this.errorMessage = 'Error fetching data';
        this.dataSource = [];
      });
  }

  azzeraFiltro() {
    this.filtroStringa = '';
    this.pageCurr = 1;
    this.base = 1;
    this.layoutNumbers = [];
    this.inizializzaPaginazione();
  }

  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }

  sortData(sort: Sort) {
    this.ordine = '';
    if (sort.direction)
      this.ordine = sort.active + '-' + sort.direction;
    this.popolaTabella();
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

  resetPaginazione() {
    this.pageCurr = 1;  // Pagina corrente
    this.base = 1; // Base per creazione layout
    this.layoutDim = 6; // Elementi paginazione
    this.layoutNumbers = []; // Numeri del paginatore
  }

  inizializzaPaginazione() {
    this.resetPaginazione();

    this.comunicazioniSrv.newContaComunicazioni(this.filtroStringa).subscribe(data => {
      this.elemNum = data.count;
      this.pageNum = Math.floor(this.elemNum / Number(this.pageDim));
      if ((this.elemNum % Number(this.pageDim)) > 0) this.pageNum++;
      for (let i = 1; i <= 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
      this.popolaTabella();
    },
    error => {
      console.error('Errore nel conta della paginazione:', error);
      this.elemNum = 0;
      this.pageNum = 0;
      this.dataSource = [];
    });
  }

  scorriLayout() {
    if ((this.pageCurr >= this.layoutNumbers[this.layoutNumbers.length - 1]) && this.pageCurr < this.pageNum) {
      this.base = this.base + (this.layoutDim - 1);
      this.layoutNumbers = [];
      for (let i = this.base; i < this.base + 6; i++) {
        if (i <= this.pageNum) {
          this.layoutNumbers.push(i);
        }
      }
    } else if ((this.pageCurr <= this.layoutNumbers[0]) && this.pageCurr > 1) {
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
}
