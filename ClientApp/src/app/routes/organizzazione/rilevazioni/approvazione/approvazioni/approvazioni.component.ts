import { Component, OnInit, OnDestroy } from '@angular/core';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { StepperService } from '@shared/services/stepper.service';
import { ModalDettagliGestioneComponent } from '../../modal-dettagli-gestione/modal-dettagli-gestione.component';
import { ApprovazioneService } from '@shared/services/approvazione.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ModalDettalgiGestioneContenziosiComponent } from '../../modal-dettagli-gestione-contenziosi/modal-dettalgi-gestione-contenziosi.component';
import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
import { Subject } from 'rxjs';
import { segnalazione } from '@shared/interfaces/segnalazioneApprovazioni';


@Component({
  selector: 'app-approvazioni',
  templateUrl: './approvazioni.component.html',
  styleUrls: ['./approvazioni.component.scss']
})
export class ApprovazioniComponent implements OnInit, OnDestroy {
  displayedColumnsProdotto: string[] = [
    'data1',
    'settoreMateria',
    'areaProdotto',
    'tipoContenzioso',
    'matIns',
    'sede',
    //'stato',
    'tutte',
  ];

  segnalazioni: segnalazione[] = [];
  formRicerca: FormGroup;
  isLoading = true;
  pageDim = '20';
  pageCurr = 1;
  pageNum = 0;
  elemNum = 0;
  base = 1;
  layoutDim = 6;
  layoutNumbers: number[] = [];
  numPages = ['5', '10', '20', '50', '100'];
  ordineColonna: string | null = null;
  selectedKeys = new Set<string>();

  minDate: any;
  maxDate: any;

  errorMessage: string = "";

  constructor(
    public dialog: MtxDialog,
    private formBuilder: FormBuilder,
    public dialog2: MatDialog,
    private stepperService: StepperService,
    public approvazionesrv: ApprovazioneService,
    public aspettiProdottiService: AspettiprodottiService
  ) {
    this.formRicerca = this.formBuilder.group({
      settore: null,
      area: null,
      dataInizio: null,
      dataFine: null,
    });

    this.stepperService.dialogClosed$.subscribe(() => {
      if (this.approvazionesrv.checkRisolviSegnalazione$.value) {
        this.approvazionesrv.checkRisolviSegnalazione$.next(false);
        this.inizializzaPagina();
      }
      else if (this.aspettiProdottiService.checkNuovoAspetto$.value) {
        this.aspettiProdottiService.checkNuovoAspetto$.next(false);
        this.inizializzaPagina();
      }
    });
  }

  async ngOnInit() {
    this.inizializzaPaginazione();
    await this.inizializzaPagina();
  }

  ngOnDestroy(): void {
    this.stepperService.dialogClosed$ = new Subject<void>();
  }

  async inizializzaPagina() {
    try {
      await this.countSegnalazioni();

      if (this.elemNum !== 0) {
        this.getSegnalazioni();
      } else {
        this.segnalazioni = [];
        this.isLoading = false;
      }
    } catch (error) {
      this.errorMessage = 'Errore durante l\'inizializzazione: ' + error;
    }
  }

  async countSegnalazioni(): Promise<void> {
    try {
      const count = await this.approvazionesrv.getSegnalazioniCount();
      this.elemNum = count;
      this.pageNum = Math.ceil(this.elemNum / Number(this.pageDim));
      this.layoutNumbers = Array.from({ length: Math.min(6, this.pageNum) }, (_, i) => i + 1);

    } catch (error) {
      this.segnalazioni = [];
      this.isLoading = false;
    }
  }

  getSegnalazioni(): void {
    this.isLoading = true;
    this.approvazionesrv.getSegnalazioniDaConfermare(Number(this.pageDim), this.pageCurr, this.ordineColonna).subscribe({
      next: (data : any) => {
        this.segnalazioni = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.isLoading = false;
      }
    });
  }

  async resetPaginazione() {
    this.pageCurr = 1;
    this.base = 1;
    this.layoutNumbers = [];
    try {
      const count = await this.approvazionesrv.getSegnalazioniCount();
      this.elemNum = count;
      this.scorriLayout();
    } catch (error) {}
  }

  async inizializzaPaginazione() {
    this.pageCurr = 1;
    this.layoutNumbers = [];
  }

  pageNext() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr++;
      this.getSegnalazioni();
      this.scorriLayout();
    }
  }

  pagePrev() {
    if (this.pageCurr > 1) {
      this.pageCurr--;
      this.getSegnalazioni();
      this.scorriLayout();
    }
  }

  pageFirst() {
    if (this.pageCurr > 1) {
      this.pageCurr = 1;
      this.scorriLayout();
      this.getSegnalazioni();
    }
  }

  pageLast() {
    if (this.pageCurr < this.pageNum) {
      this.pageCurr = this.pageNum;
      this.scorriLayout();
      this.getSegnalazioni();
    }
  }

  setPageCurr(page: number) {
    if (page >= 1 && page <= this.pageNum) {
      this.pageCurr = page;
      this.getSegnalazioni();
      this.scorriLayout();
    }
  }

  scorriLayout() {
    const size = this.layoutDim;
    let currStart = Math.floor((this.pageCurr - 1) / (size - 1)) * (size - 1) + 1;
    let currEnd = Math.min(currStart + size - 1, this.pageNum);

    if (currEnd === this.pageNum && currEnd - currStart < size - 1) {
      currStart = Math.max(1, this.pageNum - size + 1);
    }

    this.layoutNumbers = [];
    for (let i = currStart; i <= currEnd; i++) {
      this.layoutNumbers.push(i);
    }
  }

  sortData(sort: Sort) {
    this.ordineColonna = sort.active + '_' + sort.direction;
    this.getSegnalazioni();
  }

  handleRowClick(segnalazioneSelezionata: segnalazione) {
    if (segnalazioneSelezionata.contenziosoId == null) {
      this.stepperService.datiSegnalazioneProdotto$.next(segnalazioneSelezionata);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.data = segnalazioneSelezionata.id;
      const dialogRef = this.dialog2.open(ModalDettagliGestioneComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.stepperService.dialogClosed$.next();
      });
    } else {
      this.stepperService.datiSegnalazioneContenzioso$.next(segnalazioneSelezionata);
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = true;
      dialogConfig.width = 'auto';
      dialogConfig.height = 'auto';
      dialogConfig.data = segnalazioneSelezionata.id;
      const dialogRef = this.dialog2.open(ModalDettalgiGestioneContenziosiComponent, dialogConfig);
      dialogRef.afterClosed().subscribe(() => {
        this.stepperService.dialogClosed$.next();
      });
    }
  }

  showFieldSede(codiceSede: number, nomeSede: string): string {
    if (codiceSede && nomeSede) {
      return codiceSede.toString().padStart(6, '0') + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  showFieldStato(stato: number) {
    const statoSegnalazione: { [key: number]: string } = {
      3: 'Da Risolvere',
      4: 'Integrata',
      5: 'Chiusa',
    };
    return statoSegnalazione[stato] || 'STATO NON TROVATO';
  }

  modificaPaginazione() {
    this.resetPaginazione();
    this.countSegnalazioni();
    this.getSegnalazioni();
  }

  toggleAllSelection(event: MatCheckboxChange) {
    if (event.checked) {
        // Seleziona tutte le segnalazioni della pagina corrente
      this.segnalazioni.forEach(s => {
      const key = `${s.id}-${s.contenziosoId}`; // Crea una chiave unica usando id e contenziosoId
      this.selectedKeys.add(key); // Aggiungi la chiave al set
      });
      }else {
        // Deseleziona tutte le segnalazioni della pagina corrente
          this.segnalazioni.forEach(s => {
          const key = `${s.id}-${s.contenziosoId}`; // Crea una chiave unica usando id e contenziosoId
          this.selectedKeys.delete(key); // Rimuovi la chiave dal set
        });
      }
    }

  toggleSelection(id: number, contenziosoId: number) {
    const key = `${id}-${contenziosoId}`; // Crea una chiave unica usando id e contenziosoId
    if (this.selectedKeys.has(key)) {
      this.selectedKeys.delete(key); // Rimuovi dalla selezione se già selezionato
    } else {
      this.selectedKeys.add(key); // Aggiungi alla selezione se non selezionato
    }
  }

    isAllSelected() {
      const numSelected = this.selectedKeys.size;
      return this.elemNum > 0 && numSelected === this.elemNum;
    }

    isIndeterminate() {
      return this.selectedKeys.size > 0 && this.selectedKeys.size < this.elemNum;
    }

    confermaSegnalazioni() {
      const segnalazioniDaConfermare = Array.from(this.selectedKeys).map(key => {
        const [id, contenziosoId] = key.split('-').map(Number); // Riconverte la stringa in id e contenziosoId
        return {
          IdSegnalazione: id,
          IsContenzioso: !Number.isNaN(contenziosoId),
        };
      });

      this.approvazionesrv.confermaSegnalazioni(segnalazioniDaConfermare).subscribe({
        next: async (response) => {
          await this.inizializzaPagina();
          this.selectedKeys.clear(); // Pulisce la selezione dopo la conferma
        },
        error: (error) => {
          this.errorMessage = 'Errore durante l\'inizializzazione: ' + error;
        }
      });
    }
}