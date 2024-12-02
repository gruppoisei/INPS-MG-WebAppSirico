import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApprovazioniComponent } from './approvazioni.component';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError, Subject } from 'rxjs';
import { StepperService } from '@shared/services/stepper.service';
import { ApprovazioneService } from '@shared/services/approvazione.service';
import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Sort } from '@angular/material/sort';

describe('ApprovazioniComponent', () => {
  let component: ApprovazioniComponent;
  let fixture: ComponentFixture<ApprovazioniComponent>;
  let stepperService: jasmine.SpyObj<StepperService>;
  let approvazioneService: jasmine.SpyObj<ApprovazioneService>;
  let aspettiProdottiService: jasmine.SpyObj<AspettiprodottiService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let dialogClosedSubject: Subject<void>;

  beforeEach(async () => {
    dialogClosedSubject = new Subject<void>();

    stepperService = jasmine.createSpyObj('StepperService', ['dialogClosed$']);
    stepperService.dialogClosed$ = dialogClosedSubject;

    approvazioneService = jasmine.createSpyObj('ApprovazioneService', ['getSegnalazioniCount', 'getSegnalazioniDaConfermare', 'confermaSegnalazioni']);
    aspettiProdottiService = jasmine.createSpyObj('AspettiprodottiService', ['checkNuovoAspetto$']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [ApprovazioniComponent],
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        MatDialogModule,
        MatCardModule,
        MatIconModule,
      ],
      providers: [
        { provide: StepperService, useValue: stepperService },
        { provide: ApprovazioneService, useValue: approvazioneService },
        { provide: AspettiprodottiService, useValue: aspettiProdottiService },
        { provide: MatDialog, useValue: mockDialog },
        MtxDialog,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ApprovazioniComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pagination on ngOnInit', async () => {
    spyOn(component, 'inizializzaPaginazione').and.callThrough();
    spyOn(component, 'inizializzaPagina').and.returnValue(Promise.resolve());

    await component.ngOnInit();

    expect(component.inizializzaPaginazione).toHaveBeenCalled();
    expect(component.inizializzaPagina).toHaveBeenCalled();
  });

  it('should count notifications', async () => {
    approvazioneService.getSegnalazioniCount.and.returnValue(Promise.resolve(10));

    await component.countSegnalazioni();

    expect(component.elemNum).toBe(10);
    expect(component.pageNum).toBe(1);
  });

  it('should get notifications', () => {
    component.pageDim = '20';
    component.pageCurr = 1;
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.getSegnalazioni();

    expect(component.segnalazioni.length).toBe(1);
    expect(component.isLoading).toBe(false);
  });

  it('should handle errors when getting notifications', () => {
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(throwError('Error'));

    component.getSegnalazioni();

    expect(component.isLoading).toBe(false);
    expect(component.segnalazioni.length).toBe(0);
  });

  it('should reset pagination', async () => {
    component.pageCurr = 2;
    component.base = 3;
    approvazioneService.getSegnalazioniCount.and.returnValue(Promise.resolve(20));

    await component.resetPaginazione();

    expect(component.pageCurr).toBe(1);
    expect(component.base).toBe(1);
  });

  it('should initialize pagination correctly', () => {
    component.inizializzaPaginazione();

    expect(component.pageCurr).toBe(1);
    expect(component.layoutNumbers.length).toBe(0);
  });

  it('should navigate to the next page', () => {
    component.pageCurr = 1;
    component.pageNum = 3;
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.pageNext();

    expect(component.pageCurr).toBe(2);
  });

  it('should navigate to the previous page', () => {
    component.pageCurr = 2;
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.pagePrev();

    expect(component.pageCurr).toBe(1);
  });

  it('should go to the first page', () => {
    component.pageCurr = 2;
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.pageFirst();

    expect(component.pageCurr).toBe(1);
  });

  it('should go to the last page', () => {
    component.pageCurr = 1;
    component.pageNum = 3;
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.pageLast();

    expect(component.pageCurr).toBe(3);
  });

  it('should sort data', () => {
    const sort: Sort = { active: 'settoreMateria', direction: 'asc' as 'asc' | 'desc' | '' };
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.sortData(sort);

    expect(component.ordineColonna).toBe('settoreMateria_asc');
  });

  /* it('should confirm notifications', async () => {
    component.selectedKeys.add('1-0');
    approvazioneService.confermaSegnalazioni.and.returnValue(of());

    await component.confermaSegnalazioni();

    expect(approvazioneService.confermaSegnalazioni).toHaveBeenCalledWith(jasmine.any(Array));
    console.log('ciao:',component.selectedKeys.size);
    expect(component.selectedKeys.size).toBe(0);
  }); */

  it('should handle confirmation errors', async () => {
    component.selectedKeys.add('1-0');
    approvazioneService.confermaSegnalazioni.and.returnValue(throwError('Error'));

    await component.confermaSegnalazioni();

    expect(component.selectedKeys.size).toBe(1);
  });

  it('should reset dialogClosed$ in ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(stepperService.dialogClosed$ instanceof Subject).toBe(true);
  });

  it('should display formatted sede field', () => {
    const codiceSede = 1;
    const nomeSede = 'Main Office';
    const result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('000001 - Main Office');
  });

  it('should return correct status description for showFieldStato', () => {
    expect(component.showFieldStato(3)).toBe('Da Risolvere');
    expect(component.showFieldStato(4)).toBe('Integrata');
    expect(component.showFieldStato(5)).toBe('Chiusa');
    expect(component.showFieldStato(6)).toBe('STATO NON TROVATO');
  });

  it('should toggle individual selection correctly', () => {
    const id = 1;
    const contenziosoId = 10;
    component.toggleSelection(id, contenziosoId);
    expect(component.selectedKeys.has(`${id}-${contenziosoId}`)).toBe(true);

    component.toggleSelection(id, contenziosoId);
    expect(component.selectedKeys.has(`${id}-${contenziosoId}`)).toBe(false);
  });

  it('should return true when all items are selected', () => {
    component.elemNum = 2;
    component.selectedKeys.add('1-10');
    component.selectedKeys.add('2-20');

    expect(component.isAllSelected()).toBe(true);
  });

  it('should return true when some items are selected', () => {
    component.elemNum = 2;
    component.selectedKeys.add('1-10');

    expect(component.isIndeterminate()).toBe(true);
  });


});

