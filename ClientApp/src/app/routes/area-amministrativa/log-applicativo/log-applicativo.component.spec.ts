import { ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { LogApplicativoComponent } from './log-applicativo.component';
import { LogsService } from '@shared/services/logs.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TipiLogApplicativi } from '@shared/models/tipiLogApplicativi.model';
import { from, map, of } from 'rxjs';
import { Sort } from '@angular/material/sort';
import * as moment from 'moment';
import { LogApplicativoDialogComponent } from '../log-applicativo-dialog/log-applicativo-dialog.component';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';

describe('LogApplicativoComponent', () => {
  let component: LogApplicativoComponent;
  let fixture: ComponentFixture<LogApplicativoComponent>;
  let mockLogSrv: jasmine.SpyObj<LogsService>;
  let mockDialogAlert: jasmine.SpyObj<MtxDialog>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockTipoLogCtrl: jasmine.SpyObj<FormControl>;
  let mockFormRicerca2: jasmine.SpyObj<FormGroup>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogApplicativoComponent],
      providers: [
        { provide: LogsService, useValue: mockLogSrv },
        { provide: MtxDialog, useValue: mockDialogAlert },
        { provide: MatDialog, useValue: mockDialog },
        { provide: FormControl, useValue: mockTipoLogCtrl },
        { provide: FormGroup, useValue: mockFormRicerca2 },
        FormBuilder
      ],
      imports: [
        MatFormFieldModule,
        MatTabsModule,
        MatInputModule,
        HttpClientTestingModule,
        MatAutocompleteModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatCardModule,
        MatIconModule,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatMomentDateModule,
        MatAutocompleteModule

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  });

  mockLogSrv = jasmine.createSpyObj('LogsService', ['contaErrori','getLogsParam','idAttivo','getLogFilterByStacktrace','contaEventi','getLogs','getTipiLogApplicativi'])
  mockDialogAlert = jasmine.createSpyObj('MtxDialog', ['alert']);
  mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);
  mockTipoLogCtrl = jasmine.createSpyObj('FormControl', ['setValue']);
  mockFormRicerca2 = jasmine.createSpyObj('FormGroup', ['patchValue', 'reset']);

  const mockTipiLog: TipiLogApplicativi[] = [
    { id: 1, creato: new Date(), aggiornato: new Date(), nome: 'Tipo 1' },
    { id: 2, creato: new Date(), aggiornato: new Date(), nome: 'Tipo 2' }
  ];

  mockLogSrv.getTipiLogApplicativi.and.returnValue(of(mockTipiLog));
  mockLogSrv.contaErrori.and.returnValue(of({ count: 100 }).pipe(map(res => res.count)));
  mockLogSrv.contaEventi.and.returnValue(of({ count: 100 }).pipe(map(res => res.count)));



  beforeEach(() => {
    fixture = TestBed.createComponent(LogApplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit function', () =>{
    it('should call all necessary methods during ngOnInit', fakeAsync(() => {
      spyOn(component, 'updateDates1');
      spyOn(component, 'updateDates2');
      spyOn(component, 'inizializzaPaginazione');
      spyOn(component, 'inizializzaPaginazione2');

      component.ngOnInit();
      tick();
      expect(mockLogSrv.getTipiLogApplicativi).toHaveBeenCalled();
      expect(component.updateDates1).toHaveBeenCalledWith(null, null);
      expect(component.updateDates2).toHaveBeenCalledWith(null, null);
      expect(component.inizializzaPaginazione).toHaveBeenCalled();
      expect(component.inizializzaPaginazione2).toHaveBeenCalled();
      expect(component.tipiLogApp.length).toBe(3); // Oggetto vuoto + 2 tipi log
      expect(component.tipiLogApp[0].id).toBe(-1); // Oggetto vuoto
      expect(component.tipiLogApp[1].id).toBe(1); // Primo tipo log
      expect(component.tipiLogApp[2].id).toBe(2); // Secondo tipo log
    }));
  });

  describe('_filterTipiLog', () => {
    it('should return filtered results based on the input string', () => {
      component.tipiLogApp = [
        { id: 1, nome: 'Error Log', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Warning Log', creato: new Date(), aggiornato: new Date() },
        { id: 3, nome: 'Info Log', creato: new Date(), aggiornato: new Date() }
      ];

      const filterValue = 'Error';

      const result = component['_filterTipiLog'](filterValue);

      // Verifica se il risultato contiene solo l'elemento che ha 'Error' nel nome
      expect(result.length).toBe(1);
      expect(result[0].nome).toBe('Error Log');
    });

    it('should return empty array if no match is found', () => {
      component.tipiLogApp = [
        { id: 1, nome: 'Error Log', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Warning Log', creato: new Date(), aggiornato: new Date() },
        { id: 3, nome: 'Info Log', creato: new Date(), aggiornato: new Date() }
      ];

      const filterValue = 'Critical';
      const result = component['_filterTipiLog'](filterValue);
      expect(result.length).toBe(0);
    });

    it('should be case-insensitive when filtering', () => {
      component.tipiLogApp = [
        { id: 1, nome: 'Error Log', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Warning Log', creato: new Date(), aggiornato: new Date() },
        { id: 3, nome: 'Info Log', creato: new Date(), aggiornato: new Date() }
      ];

      const filterValue = 'error';

      const result = component['_filterTipiLog'](filterValue);
      expect(result.length).toBe(1);
      expect(result[0].nome).toBe('Error Log');
    });
  });

  describe('LogSelection and clearLog', () =>{
    it('should set the selected tipoLog in tipoLogCtrl and patch formRicerca2 when selectedTipo is valid', () => {
      const selectedTipo = { id: 2, nome: 'Error Log', creato: new Date(), aggiornato: new Date() };
      component.tipoLogCtrl = mockTipoLogCtrl;
      component.formRicerca2 = mockFormRicerca2;
      component.tipoLogSelected(selectedTipo);
      expect(mockTipoLogCtrl.setValue).toHaveBeenCalledWith(selectedTipo);
      expect(mockFormRicerca2.patchValue).toHaveBeenCalledWith({
        tipoLog: selectedTipo.id
      });
    });

    it('should call clearTipoLog when selectedTipo id is -1', () => {
      const selectedTipo = { id: -1, nome: 'Invalid Log', creato: new Date(), aggiornato: new Date() };
      spyOn(component, 'clearTipoLog');  // Spy sulla funzione clearTipoLog

      component.tipoLogCtrl = mockTipoLogCtrl;
      component.formRicerca2 = mockFormRicerca2;
      component.tipoLogSelected(selectedTipo);

      expect(component.clearTipoLog).toHaveBeenCalled();
    });

    it('should clear log if not valid', () => {
      component.tipoLogCtrl = mockTipoLogCtrl;
      component.formRicerca2 = mockFormRicerca2;
      component.clearTipoLog();
      expect(mockTipoLogCtrl.setValue).toHaveBeenCalledWith(null);
      expect(mockFormRicerca2.patchValue).toHaveBeenCalledWith({ tipoLog: null });
    });
  });

  describe('Display Log name', () => {
    it('should return the log name from the selectedTipo', () => {
      component.tipiLogApp = [
        { id: 1, nome: 'Info Log', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Error Log', creato: new Date(), aggiornato: new Date() }
      ];
      const selectedTipo = { id: 2, nome: 'Error Log', creato: new Date(), aggiornato: new Date() };
      const resultFromObject = component.displayTipoLog(selectedTipo);
      expect(resultFromObject).toBe('Error Log');
    });

    it('should return the log name from the id', () => {
      component.tipiLogApp = [
        { id: 1, nome: 'Info Log', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Error Log', creato: new Date(), aggiornato: new Date() }
      ];
      const resultFromObject = component.displayTipoLog(2);
      expect(resultFromObject).toBe('Error Log');
    });
  });

  describe('OnFocus function', () => {
    it('should set value to " " and reset to "" if control is empty', fakeAsync(() => {
      const ctrl = new FormControl('');
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');
    }));

    it('should not change value if control has a non-empty value', () => {
      const ctrl = new FormControl('existing value');
      component.onFocus(ctrl);
      expect(ctrl.value).toBe('existing value');
    });
  });

  describe('sortData', () => {
    beforeEach(() => {
      spyOn(component, 'popolaRisultato'); // Spia la funzione popolaRisultato
    });

    it('should set ordine to "active_direction" format and call popolaRisultato when direction is defined', () => {
      const sort: Sort = { active: 'name', direction: 'asc' };
      component.sortData(sort);
      expect(component.ordine).toBe('name_asc');
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should set ordine to an empty string and call popolaRisultato when direction is undefined', () => {
      const sort: Sort = { active: 'name', direction: '' };
      component.sortData(sort);
      expect(component.ordine).toBe('');
      expect(component.popolaRisultato).toHaveBeenCalled();
    });
  });

  describe('Paginator and layout', () => {

    it('should reset pagination correctly', () => {
      component.pageCurr = 5;
      component.base = 10;
      component.layoutDim = 15;
      component.layoutNumbers = [1, 2, 3];
      component.resetPaginazione();
      expect(component.pageCurr).toBe(1);
      expect(component.base).toBe(1);
      expect(component.layoutDim).toBe(6);
      expect(component.layoutNumbers).toEqual([]);
    });

    it('should scroll layout when current page is at the end', () => {
      component.pageCurr = 5;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 1;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(6);
      expect(component.layoutNumbers).toEqual([6, 7, 8, 9, 10]);
    });

    it('should not scroll layout when current page is 1', () => {
      component.pageCurr = 1;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 5;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should not scroll layout if current page is in the middle', () => {
      component.pageCurr = 3;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 1;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should set pageCurr to 1, base to 1, and call popolaTabella', () => {
      spyOn(component, 'popolaRisultato');
      component.pageCurr = 2;
      component.pageNum = 2;
      component.pageFirst();
      expect(component.pageCurr).toBe(1);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1,2]);
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should set pageCurr to last page', () =>{
      spyOn(component, 'popolaRisultato');
      component.pageCurr = 1;
      component.pageNum = 2;
      component.pageLast();

      expect(component.pageCurr).toBe(2);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1,2]);
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should go to the next page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaRisultato')
      component.pageCurr = 1;
      component.pageNum = 5;
      component.pageNext();
      expect(component.pageCurr).toBe(2);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should go to the prev page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaRisultato')
      component.pageCurr = 2;
      component.pageNum = 5;
      component.pagePrev();
      expect(component.pageCurr).toBe(1);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaRisultato).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazione',() => {
    it('should call resetPaginazione, return the count from countErrori and call popolaRisultato',() => {
      spyOn(component, 'resetPaginazione');
      spyOn(component, 'popolaRisultato');
      component.pageDim = '20'
      component.formRicerca.setValue({
        idAccount: 'testAccount',
        idMatricola: 'testMatricola',
        dataInizio: new Date('2024-01-01'),
        dataFine: new Date('2024-01-31'),
        dimensione: -1,
        pagina: -1
      });
      const datai = moment(component.formRicerca.value.dataInizio).format('MM/DD/YYYY');
      const dataf = moment(component.formRicerca.value.dataFine).format('MM/DD/YYYY');
      component.inizializzaPaginazione();

      expect(component.resetPaginazione).toHaveBeenCalled();
      expect(mockLogSrv.contaErrori).toHaveBeenCalledWith('testAccount', 'testMatricola', datai, dataf);
      expect(component.elemNum).toBe(100);
      expect(component.pageNum).toBe(Math.ceil(100 / Number(component.pageDim)) || 1);
      expect(component.layoutNumbers.length).toBeLessThanOrEqual(5);
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should call resetPaginazione2 return the count from contaEventi and call popolaTabella2', () => {
      spyOn(component, 'resetPaginazione2');
      spyOn(component, 'popolaTabella2');
      component.pageDim2 = '20';
      component.formRicerca2 = new FormGroup({
        idAccount2: new FormControl('testAccount'),
        idMatricola2: new FormControl('testMatricola'),
        dataInizio2: new FormControl(new Date('2024-01-01')),
        dataFine2: new FormControl(new Date('2024-01-31')),
        dimensione2: new FormControl(-1),
        pagina2: new FormControl(-1),
        tipoLog: new FormControl(1),
      });
      const datai = moment(component.formRicerca2.value.dataInizio2).format('MM/DD/YYYY');
      const dataf = moment(component.formRicerca2.value.dataFine2).format('MM/DD/YYYY');
      component.inizializzaPaginazione2();

      expect(component.resetPaginazione2).toHaveBeenCalled();
      expect(mockLogSrv.contaEventi).toHaveBeenCalledWith('testAccount', 'testMatricola', datai, dataf, 1);
      expect(component.elemNum2).toBe(100);
      expect(component.pageNum2).toBe(Math.ceil(100 / Number(component.pageDim2)) || 1);
      expect(component.layoutNumbers2.length).toBeLessThanOrEqual(5);
      expect(component.popolaTabella2).toHaveBeenCalled();
    });
  });

  describe('Paginator2 and layout2', () => {
    it('should reset pagination correctly', () => {
      component.pageCurr2 = 5;
      component.base2 = 10;
      component.layoutDim2 = 15;
      component.layoutNumbers2 = [1, 2, 3];
      component.resetPaginazione2();
      expect(component.pageCurr2).toBe(1);
      expect(component.base2).toBe(1);
      expect(component.layoutDim2).toBe(6);
      expect(component.layoutNumbers2).toEqual([]);
    });

    it('should scroll layout2 when current page is at the end', () => {
      component.pageCurr2 = 5;
      component.layoutNumbers2 = [1, 2, 3, 4, 5];
      component.base2 = 1;
      component.pageNum2 = 10;
      component.scorriLayout2();
      expect(component.base2).toBe(6);
      expect(component.layoutNumbers2).toEqual([6, 7, 8, 9, 10]);
    });

    it('should not scroll layout2 when current page is 1', () => {
      component.pageCurr2 = 1;
      component.layoutNumbers2 = [1, 2, 3, 4, 5];
      component.base2 = 5;
      component.pageNum2 = 10;
      component.scorriLayout2();
      expect(component.base2).toBe(1);
      expect(component.layoutNumbers2).toEqual([1, 2, 3, 4, 5]);
    });

    it('should not scroll layout2 if current page is in the middle', () => {
      component.pageCurr2 = 3;
      component.layoutNumbers2 = [1, 2, 3, 4, 5];
      component.base2 = 1;
      component.pageNum2 = 10;
      component.scorriLayout2();
      expect(component.base2).toBe(1);
      expect(component.layoutNumbers2).toEqual([1, 2, 3, 4, 5]);
    });


    it('should set pageCurr to 1, base to 1, and call popolaTabella2', () => {
      spyOn(component, 'popolaTabella2');
      component.pageCurr2 = 2;
      component.pageNum2 = 2;
      component.pageFirst2();
      expect(component.pageCurr2).toBe(1);
      expect(component.base2).toBe(1);
      expect(component.layoutNumbers2).toEqual([1,2]);
      expect(component.popolaTabella2).toHaveBeenCalled();
    });

    it('should set pageCurr to last page', () =>{
      spyOn(component, 'popolaTabella2');
      component.pageCurr2 = 1;
      component.pageNum2 = 2;
      component.pageLast2();

      expect(component.pageCurr2).toBe(2);
      expect(component.base2).toBe(1);
      expect(component.layoutNumbers2).toEqual([1,2]);
      expect(component.popolaTabella2).toHaveBeenCalled();
    });

    it('should go to the next page', () => {
      spyOn(component, 'scorriLayout2');
      spyOn(component, 'popolaTabella2')
      component.pageCurr2 = 1;
      component.pageNum2 = 5;
      component.pageNext2();
      expect(component.pageCurr2).toBe(2);
      expect(component.scorriLayout2).toHaveBeenCalled();
      expect(component.popolaTabella2).toHaveBeenCalled();
    });

    it('should go to the prev page', () => {
      spyOn(component, 'scorriLayout2');
      spyOn(component, 'popolaTabella2')
      component.pageCurr2 = 2;
      component.pageNum2 = 5;
      component.pagePrev2();
      expect(component.pageCurr2).toBe(1);
      expect(component.scorriLayout2).toHaveBeenCalled();
      expect(component.popolaTabella2).toHaveBeenCalled();
    });
  });

  describe('reset ricercaEventi and reset Errori', () =>{
    it('should filter events based on matricola and account', () => {
      component.list2 = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca2.get('idMatricola2')?.setValue('123');
      component.formRicerca2.get('idAccount2')?.setValue('abc');

      component.filtroRicercaEventi();

      expect(component.listFiltered2.length).toBe(1);
      expect(component.listFiltered2[0]).toEqual({ matricola: '123', account: 'abc' });
    });

    it('should filter events based on matricola only', () => {
      component.list2 = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca2.get('idMatricola2')?.setValue('456');
      component.formRicerca2.get('idAccount2')?.setValue('');

      component.filtroRicercaEventi();

      expect(component.listFiltered2.length).toBe(1);
      expect(component.listFiltered2[0]).toEqual({ matricola: '456', account: 'def' });
    });

    it('should filter events based on account only', () => {
      component.list2 = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca2.get('idMatricola2')?.setValue('');
      component.formRicerca2.get('idAccount2')?.setValue('def');

      component.filtroRicercaEventi();

      expect(component.listFiltered2.length).toBe(1);
      expect(component.listFiltered2[0]).toEqual({ matricola: '456', account: 'def' });
    });

    it('should return an empty array if no matches are found', () => {
      component.list2 = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca2.get('idMatricola2')?.setValue('000');
      component.formRicerca2.get('idAccount2')?.setValue('xyz');

      component.filtroRicercaEventi();

      expect(component.listFiltered2.length).toBe(0);
      expect(component.listFiltered2).toEqual([]);
    });

    it('should return all items if no search parameters are provided', () => {
      component.list2 = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca2.get('idMatricola2')?.setValue('');
      component.formRicerca2.get('idAccount2')?.setValue('');

      component.filtroRicercaEventi();

      expect(component.listFiltered2.length).toBe(3);
      expect(component.listFiltered2).toEqual([
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ]);
    });

    it('should filter errors based on matricola and account', () => {
      component.list = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca.get('idMatricola')?.setValue('456');
      component.formRicerca.get('idAccount')?.setValue('def');

      component.filtroRicerca();

      expect(component.listFiltered.length).toBe(1);
      expect(component.listFiltered[0]).toEqual({ matricola: '456', account: 'def' });
    });

    it('should filter errors based on account only', () => {
      component.list = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca.get('idMatricola')?.setValue('');
      component.formRicerca.get('idAccount')?.setValue('def');

      component.filtroRicerca();

      expect(component.listFiltered.length).toBe(1);
      expect(component.listFiltered[0]).toEqual({ matricola: '456', account: 'def' });
    });

    it('should filter errors based on matricola only', () => {
      component.list = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca.get('idMatricola')?.setValue('123');
      component.formRicerca.get('idAccount')?.setValue('');

      component.filtroRicerca();

      expect(component.listFiltered.length).toBe(1);
      expect(component.listFiltered[0]).toEqual({ matricola: '123', account: 'abc' });
    });

    it('should return an empty for the errors array if no matches are found', () => {
      component.list = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca.get('idMatricola')?.setValue('000');
      component.formRicerca.get('idAccount')?.setValue('xyz');

      component.filtroRicerca();

      expect(component.listFiltered.length).toBe(0);
      expect(component.listFiltered).toEqual([]);
    });

    it('should return all items for the errors array if no search parameters are provided', () => {
      component.list = [
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }
      ];

      component.formRicerca.get('idMatricola')?.setValue('');
      component.formRicerca.get('idAccount')?.setValue('');

      component.filtroRicerca();

      expect(component.listFiltered.length).toBe(3);
      expect(component.listFiltered).toEqual([
        { matricola: '123', account: 'abc' },
        { matricola: '456', account: 'def' },
        { matricola: '789', account: 'ghi' }]);
    });
  });

  describe('popolaTabella and popolaRisultato', () => {
    it('should populate dataSource1 and dataSourceFiltered with data from getLogsParam', () => {
      const mockData = [
        { id: 1, message: 'Log 1' },
        { id: 2, message: 'Log 2' }
      ];

      component.pageDim = '20';
      component.ordine = null;
      component.pageCurr = 1

      mockLogSrv.getLogsParam.and.returnValue(of(mockData));
      component.popolaTabella();
      expect(mockLogSrv.getLogsParam).toHaveBeenCalledWith(component.pageDim, component.ordine, component.pageCurr -1);
      expect(component.dataSource1).toEqual(mockData);
      expect(component.dataSourceFiltered).toEqual(mockData);
    });

    it('should populate list2 and listFiltered2 with data from getLogs', () => {
      const mockData = [
        { id: 1, message: 'Log 1' },
        { id: 2, message: 'Log 2' }
      ];

      component.isLoading2 = true;
      component.pageDim2 = '20';
      component.ordine2 = null;
      component.pageCurr2 = 1;

      component.formRicerca2.setValue({
        idAccount2: '',
        idMatricola2: '',
        dataInizio2: null,
        dataFine2:  null,
        dimensione2: -1,
        tipoLog: 1,
        pagina2: -1,
      });

      spyOn(component, 'formatDate').and.callFake((date) => (date ? 'Invalid date' : ''));
      const datai = component.formatDate(component.formRicerca2.value.dataInizio2);
      const dataf = component.formatDate(component.formRicerca2.value.dataFine2);
      mockLogSrv.getLogs.and.returnValue(of(mockData));
      component.popolaTabella2();
      expect(mockLogSrv.getLogs).toHaveBeenCalledWith(
        component.formRicerca2.value.idAccount2, component.formRicerca2.value.idMatricola2,
        datai, dataf,
        component.formRicerca2.value.tipoLog,
        component.pageDim2, component.ordine2,
        component.pageCurr2 - 1);
      expect(component.list2).toEqual(mockData);
      expect(component.listFiltered2).toEqual(mockData);
      expect(component.isLoading2).toBeFalse();
    });

    it('should open alert dialog when listFiltered2 is empty and ricercaAtt2 is true', () => {
      // Mock della risposta del servizio come lista vuota
      const mockData: any[] = [];

      // Configura lo stato del componente
      component.ricercaAtt2 = true;
      component.isLoading2 = true;
      component.pageDim2 = '20';
      component.ordine2 = null;
      component.pageCurr2 = 1;

      // Imposta i valori del form
      component.formRicerca2.setValue({
        idAccount2: '',
        idMatricola2: '',
        dataInizio2: null,
        dataFine2: null,
        dimensione2: -1,
        tipoLog: 1,
        pagina2: -1,
      });

      mockLogSrv.getLogs.and.returnValue(of(mockData));
      mockDialogAlert.alert

      component.popolaTabella2();
      expect(mockDialogAlert.alert).toHaveBeenCalledWith(`Nessun risultato per il filtro selezionato!`);
      expect(component.isLoading2).toBeFalse();
    });

    it('should populate list and listFiltered with data from getLogFilterByStacktrace', () => {
      const mockData = [{ id: 1, message: 'Log 1' }, { id: 2, message: 'Log 2' }];

      component.isLoading = true;
      component.pageDim = '20';
      component.ordine = null;
      component.pageCurr = 1;

      component.formRicerca.setValue({
        dataInizio: null,
        dataFine: null,
        dimensione: -1,
        idAccount: '',
        idMatricola: '',
        pagina: -1,
      });

      mockLogSrv.getLogFilterByStacktrace.and.returnValue(of(mockData));

      component.popolaRisultato();

      expect(mockLogSrv.getLogFilterByStacktrace).toHaveBeenCalledWith(
        component.formRicerca.value.idAccount,
        component.formRicerca.value.idMatricola,
        '',
        '',
        component.pageDim,
        component.ordine,
        component.pageCurr - 1
      );
      expect(component.list).toEqual(mockData);
      expect(component.listFiltered).toEqual(mockData);
    });

    it('should open alert dialog when list is empty and ricercaAtt is true', () => {
      const mockData: any[] = [];
      component.isLoading = true;
      component.pageDim = '20';
      component.ordine = null;
      component.pageCurr = 1;
      
      component.formRicerca.setValue({
        dataInizio: null,
        dataFine: null,
        dimensione: -1,
        idAccount: '',
        idMatricola: '',
        pagina: -1,
      });
      mockLogSrv.getLogFilterByStacktrace.and.returnValue(of(mockData));
      component.popolaRisultato();
      expect(mockDialogAlert.alert).toHaveBeenCalledWith(`Nessun risultato per il filtro selezionato!`);
      expect(component.ricercaAtt).toBeFalse();
    });
  });

  describe('Dialogs', () => {
    it('should set idAttivo, open MatDialog, and call popolaRisultato after the dialog is closed', () => {
      const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
      mockDialogRef.afterClosed.and.returnValue(of(null));

      mockDialog.open.and.returnValue(mockDialogRef);
      spyOn(component, 'popolaRisultato');

      const id = 123;
      component.openDialog(id);

      // Verifiche
      expect(mockLogSrv.idAttivo).toBe(id);
      expect(mockDialog.open).toHaveBeenCalledWith(LogApplicativoDialogComponent);
      expect(mockDialogRef.afterClosed).toHaveBeenCalled();
      expect(component.popolaRisultato).toHaveBeenCalled();
    });

    it('should open the error dialog with the correct message and title', () => {
      const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
      mockDialog.open.and.returnValue(mockDialogRef);
      const message = 'Test error message';
      const titolo = 'Test error title';
      component.openErrorDialog(message, titolo);
      expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
        data: { message: message, titolo: titolo }
      });
      // expect(mockDialog.open).toHaveBeenCalledTimes(1);
    });


  })
});
