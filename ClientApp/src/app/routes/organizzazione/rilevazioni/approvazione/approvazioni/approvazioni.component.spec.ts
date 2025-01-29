  import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
  import { ApprovazioniComponent } from './approvazioni.component';
  import { MatDialog, MatDialogConfig, MatDialogModule } from '@angular/material/dialog';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { RouterTestingModule } from '@angular/router/testing';
  import { of, throwError, Subject, BehaviorSubject } from 'rxjs';
  import { StepperService } from '@shared/services/stepper.service';
  import { ApprovazioneService } from '@shared/services/approvazione.service';
  import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
  import { MtxDialog } from '@ng-matero/extensions/dialog';
  import { MatCardModule } from '@angular/material/card';
  import { MatIconModule } from '@angular/material/icon';
  import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
  import { Sort } from '@angular/material/sort';
  import { segnalazione } from '@shared/interfaces/segnalazioneApprovazioni';
  import { MatCheckboxChange } from '@angular/material/checkbox';
import { ModalDettalgiGestioneContenziosiComponent } from '../../modal-dettagli-gestione-contenziosi/modal-dettalgi-gestione-contenziosi.component';
import { ModalDettagliGestioneComponent } from '../../modal-dettagli-gestione/modal-dettagli-gestione.component';
import { segnalazioneProdotto } from '@shared/interfaces/segnalazioneProdotto';
import { segnalazioneContenzioso } from '@shared/interfaces/segnalazioneContenzioso';


  describe('ApprovazioniComponent', () => {
    let component: ApprovazioniComponent;
    let fixture: ComponentFixture<ApprovazioniComponent>;
    let stepperService: jasmine.SpyObj<StepperService>;
    let approvazioneService: jasmine.SpyObj<ApprovazioneService>;
    let aspettiProdottiService: jasmine.SpyObj<AspettiprodottiService>;
    let mockDialog: jasmine.SpyObj<MatDialog>;
    let dialogClosedSubject: Subject<void>;
    let dialog2: jasmine.SpyObj<MatDialog>;

    beforeEach(async () => {
      dialogClosedSubject = new Subject<void>();

      stepperService = jasmine.createSpyObj('StepperService', ['dialogClosed$']);
      stepperService.dialogClosed$ = dialogClosedSubject;
   
      dialog2 = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);

      approvazioneService = jasmine.createSpyObj('ApprovazioneService', ['getSegnalazioniCount', 'getSegnalazioniDaConfermare', 'confermaSegnalazioni']);
      aspettiProdottiService = jasmine.createSpyObj('AspettiprodottiService', ['checkNuovoAspetto$']);
      mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

      aspettiProdottiService.checkNuovoAspetto$ = new BehaviorSubject<boolean | undefined>(undefined);
      approvazioneService.checkRisolviSegnalazione$ = new BehaviorSubject<boolean | undefined>(undefined);

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

    const mockSegnalazione: segnalazione = {
      areaId: 1,
      areaProdotto: 'Area Prodotto 1',
      data1: '2025-01-01',
      data2: '2025-01-02',
      id: 123,
      inviata: true,
      sede: 'Sede 1',
      sedeId: 101,
      settoreId: 202,
      settoreMateria: 'Settore Materia 1',
      statoDesc: 'In attesa',
      statoId: 301,
      nuovoAspetto: false,
      contenziosoId: 401,
      contenziosoDesc: 'Contenzioso A',
    };
    const mockSegnalazioneJSON = JSON.stringify(mockSegnalazione);

    it('should create', () => {
      expect(component).toBeTruthy();
    });

  describe('constructor', () => {
    it('should handle checkRisolviSegnalazione$ when dialogClosed$ emits', () => {
      spyOn(component, 'inizializzaPagina');
      component.approvazionesrv.checkRisolviSegnalazione$.next(true);
  
      dialogClosedSubject.next();
      expect(component.approvazionesrv.checkRisolviSegnalazione$.value).toBe(false);
      expect(component.inizializzaPagina).toHaveBeenCalled();
    });
  
    it('should handle checkNuovoAspetto$ when dialogClosed$ emits', () => {
      spyOn(component, 'inizializzaPagina');
      component.aspettiProdottiService.checkNuovoAspetto$.next(true);
  
      dialogClosedSubject.next();
      expect(component.aspettiProdottiService.checkNuovoAspetto$.value).toBe(false);
      expect(component.inizializzaPagina).toHaveBeenCalled();
    });
  
    it('should not call inizializzaPagina when neither checkRisolviSegnalazione$ nor checkNuovoAspetto$ is true', () => {
      spyOn(component, 'inizializzaPagina');

      component.approvazionesrv.checkRisolviSegnalazione$.next(false);
      component.aspettiProdottiService.checkNuovoAspetto$.next(false);
  
      dialogClosedSubject.next();
      expect(component.inizializzaPagina).not.toHaveBeenCalled();
    });
  });

  it('should initialize pagination on ngOnInit', async () => {
    spyOn(component, 'inizializzaPaginazione').and.callThrough();
    spyOn(component, 'inizializzaPagina').and.returnValue(Promise.resolve());

    await component.ngOnInit();

    expect(component.inizializzaPaginazione).toHaveBeenCalled();
    expect(component.inizializzaPagina).toHaveBeenCalled();
  });

  describe('inizializzaPagina', () => {
    it('should call countSegnalazioni if elemNum is not 0', async () => {
      spyOn(component, 'getSegnalazioni');
      spyOn(component, 'countSegnalazioni').and.returnValue(Promise.resolve());
      component.elemNum = 5; 
      
      await component.inizializzaPagina();

      expect(component.getSegnalazioni).toHaveBeenCalled();
    });

    it('should set isLoading false and segnalazioni empty if elemNum is 0', async () => {
      spyOn(component, 'countSegnalazioni').and.returnValue(Promise.resolve());
      component.isLoading = true;
      component.segnalazioni = [JSON.parse(mockSegnalazioneJSON)];
      component.elemNum = 0; 
      
      await component.inizializzaPagina();

      expect(component.isLoading).toBeFalse();
      expect(component.segnalazioni).toEqual([]);
    });

    it('should set errorMessage when an error occurs in inizializzaPagina', async () => {
      spyOn(component, 'countSegnalazioni').and.throwError('Test error');
      await component.inizializzaPagina();
      expect(component.errorMessage).toBe('Errore durante l\'inizializzazione: Error: Test error');
    });
  });

  describe ('countSegnalazioni', () => {
    it('should count notifications', async () => {
      const mockCount = 10;
      approvazioneService.getSegnalazioniCount.and.returnValue(Promise.resolve(mockCount));
  
      await component.countSegnalazioni();
  
      expect(component.elemNum).toBe(mockCount);
      expect(component.pageNum).toBe(Math.ceil(mockCount / Number(component.pageDim)));
      expect(component.layoutNumbers).toEqual(Array.from({ length: Math.min(6, component.pageNum) }, (_, i) => i + 1));
    });

    it('should set segnalaioni to empty array and isLoading to false when getSegnalazioniCount() fails', fakeAsync(() => {
      const mockError = new Error('Test error');
      approvazioneService.getSegnalazioniCount.and.returnValue(Promise.reject(mockError));
      component.segnalazioni = JSON.parse(mockSegnalazioneJSON);
      component.isLoading = true;

      component.countSegnalazioni();
      
      tick();
      expect(component.segnalazioni).toEqual([]);
      expect(component.isLoading).toBeFalse();
    }));
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

  describe('setPageCurr', () => {
    it('should set page curr, call getSegnalazioni and call scorriLayout if page >= 1 and <= pageNum', () => {
      spyOn(component,'getSegnalazioni');
      spyOn(component,'scorriLayout');
      approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([JSON.parse(mockSegnalazioneJSON)]));
  
      component.pageCurr = 1;
      component.pageNum = 10;
      const testPage = 5;
      
      component.setPageCurr(testPage);
  
      expect(component.pageCurr).toBe(testPage);
      expect(component.getSegnalazioni).toHaveBeenCalled();
      expect(component.scorriLayout).toHaveBeenCalled();
    });

    it('should do nothing if page < 1 and > pageNum', () => {
      spyOn(component,'getSegnalazioni');
      spyOn(component,'scorriLayout');
  
      component.pageCurr = 1;
      component.pageNum = 10;
      const testPage = 15;
      
      component.setPageCurr(testPage);
  
      expect(component.pageCurr).toBe(1);
      expect(component.getSegnalazioni).not.toHaveBeenCalled();
      expect(component.scorriLayout).not.toHaveBeenCalled();
    });
  })

  it('should sort data', () => {
    const sort: Sort = { active: 'settoreMateria', direction: 'asc' as 'asc' | 'desc' | '' };
    approvazioneService.getSegnalazioniDaConfermare.and.returnValue(of([{ id: 1 }]));

    component.sortData(sort);

    expect(component.ordineColonna).toBe('settoreMateria_asc');
  });

  describe('handlerowclick', () => {
    it('should open ModalDettagliGestioneComponent when contenziosoId is null', () => {
      const segnalazioneSelezionata: segnalazione = { 
        ...mockSegnalazione, 
        contenziosoId: null! 
      };
      stepperService.datiSegnalazioneProdotto$ = new BehaviorSubject<segnalazioneProdotto | undefined>(undefined);
      
      const dialog2Ref = jasmine.createSpyObj('MatDialog', ['afterClosed']);
      component.dialog2 = dialog2; // Assegna il mock alla proprietà dialog2 del componente

      dialog2Ref.afterClosed.and.returnValue(of('')); // Simula un risultato che viene emesso
      dialog2.open.and.returnValue(dialog2Ref); // Quando viene chiamato open(), deve restituire dialog2Ref

      component.handleRowClick(segnalazioneSelezionata);

      expect(stepperService.datiSegnalazioneProdotto$.value).toBe(segnalazioneSelezionata);
      expect(dialog2.open).toHaveBeenCalledWith(ModalDettagliGestioneComponent, jasmine.objectContaining({
        data: segnalazioneSelezionata.id,
      }));
  
      // Simula la chiusura del dialogo
      dialog2Ref.afterClosed().subscribe((result: any) => {
        stepperService.dialogClosed$.next();
      });
    });
  
    it('should open ModalDettagliGestioneContenziosiComponent when contenziosoId is not null', () => {
      const segnalazioneSelezionata: segnalazione = { 
        ...mockSegnalazione, 
        contenziosoId: 123 
      };
      stepperService.datiSegnalazioneContenzioso$ = new BehaviorSubject<segnalazioneContenzioso | undefined>(undefined);
  
      const dialog2Ref = jasmine.createSpyObj('MatDialog', ['afterClosed']);
      component.dialog2 = dialog2; // Assegna il mock alla proprietà dialog2 del componente

      dialog2Ref.afterClosed.and.returnValue(of('')); // Simula un risultato che viene emesso
      dialog2.open.and.returnValue(dialog2Ref); // Quando viene chiamato open(), deve restituire dialog2Ref

      component.handleRowClick(segnalazioneSelezionata);
  
      expect(stepperService.datiSegnalazioneContenzioso$.value).toBe(segnalazioneSelezionata);
      expect(dialog2.open).toHaveBeenCalledWith(ModalDettalgiGestioneContenziosiComponent, jasmine.objectContaining({
        data: segnalazioneSelezionata.id,
      }));
  
      // Simula la chiusura del dialogo
      dialog2Ref.afterClosed().subscribe((result: any) => {
        stepperService.dialogClosed$.next();
      });
    });
  });

  describe('confermaSegnalazioni', () => {
    it('should call confermaSegnalazioni with correct data on success', fakeAsync(() => {
      spyOn(component, 'inizializzaPagina');
      component.selectedKeys = new Set(['1-10', '2-20']);
      approvazioneService.confermaSegnalazioni.and.returnValue(of('Success'));
  
      component.confermaSegnalazioni();
      tick();

      const expectedData = [
        { IdSegnalazione: 1, IsContenzioso: true },
        { IdSegnalazione: 2, IsContenzioso: true }
      ];
      expect(approvazioneService.confermaSegnalazioni).toHaveBeenCalledWith(expectedData);
      expect(component.inizializzaPagina).toHaveBeenCalled();
      expect(component.selectedKeys.size).toBe(0);
    }));
  
    it('should handle error and set errorMessage on failure', () => {
      component.selectedKeys = new Set(['1-10', '2-20']);
      const errorResponse = 'Some error occurred';
      approvazioneService.confermaSegnalazioni.and.returnValue(throwError(() => new Error(errorResponse)));
  
      component.confermaSegnalazioni();
  
      expect(component.errorMessage).toBe('Errore durante l\'inizializzazione: Error: ' + errorResponse);
    });
  });

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

  it('should display formatted sede field if codiceSede and nomeSede are not null or undefined or empty', () => {
    let codiceSede = 1;
    let nomeSede = 'Main Office';
    let result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('000001 - Main Office');

    // codiceSede o nomeSede null
    codiceSede = null!;
    nomeSede = 'Main Office';
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');
    codiceSede = 1;
    nomeSede = null!;
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');

    // codiceSede o nomeSede undefined
    codiceSede = undefined!;
    nomeSede = 'Main Office';
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');
    codiceSede = 1;
    nomeSede = undefined!;
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');

    // codiceSede o nomeSede empty
    codiceSede = Number.parseInt('');
    nomeSede = 'Main Office';
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');
    codiceSede = 1;
    nomeSede = '';
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');

    // codiceSede e nomeSede null | undefined | empty
    codiceSede = null!;
    nomeSede = undefined!;
    result = component.showFieldSede(codiceSede, nomeSede);
    expect(result).toBe('');
  });

  it('should return correct status description for showFieldStato', () => {
    expect(component.showFieldStato(3)).toBe('Da Risolvere');
    expect(component.showFieldStato(4)).toBe('Integrata');
    expect(component.showFieldStato(5)).toBe('Chiusa');
    expect(component.showFieldStato(6)).toBe('STATO NON TROVATO');
  });

  it('modificaPaginazione: should call resetPaginazione, countSegnalazioni and getSegnalazioni', () => {
    spyOn(component, 'resetPaginazione');
    spyOn(component, 'countSegnalazioni');
    spyOn(component, 'getSegnalazioni');

    component.modificaPaginazione();

    expect(component.resetPaginazione).toHaveBeenCalled();
    expect(component.countSegnalazioni).toHaveBeenCalled();
    expect(component.getSegnalazioni).toHaveBeenCalled();
  });

  it('should toggle (select or deselect) all items based on MatCheckboxChange', () => {
    component.segnalazioni = [
      { ...mockSegnalazione, id: 1, contenziosoId: 10 },
      { ...mockSegnalazione, id: 2, contenziosoId: 20 },
      { ...mockSegnalazione, id: 3, contenziosoId: 30 }
    ];

    // Crea un evento MatCheckboxChange per il caso di selezione (checked = true)
    const eventChecked = { checked: true } as MatCheckboxChange;
    component.toggleAllSelection(eventChecked);

    // Verifica che tutte le chiavi siano selezionate
    expect(component.selectedKeys.has('1-10')).toBe(true);
    expect(component.selectedKeys.has('2-20')).toBe(true);
    expect(component.selectedKeys.has('3-30')).toBe(true);

    // Crea un evento MatCheckboxChange per il caso di deselection (checked = false)
    const eventUnchecked = { checked: false } as MatCheckboxChange;
    component.toggleAllSelection(eventUnchecked);

    // Verifica che tutte le chiavi siano deselezionate
    expect(component.selectedKeys.has('1-10')).toBe(false);
    expect(component.selectedKeys.has('2-20')).toBe(false);
    expect(component.selectedKeys.has('3-30')).toBe(false);
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

