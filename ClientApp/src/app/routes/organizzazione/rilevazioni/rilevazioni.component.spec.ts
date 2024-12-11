import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { RilevazioniComponent } from './rilevazioni.component';
import { Aree } from '@shared/services/areeservice.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { MatDialog } from '@angular/material/dialog';
import { ContenziosoService } from '@shared/services/contenzioso.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { StepperService } from '@shared/services/stepper.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {
  NoopAnimationsModule,
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatNativeDateModule, MatOptionSelectionChange } from '@angular/material/core';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';
import * as moment from 'moment';
import { Sort } from '@angular/material/sort';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ModalModificaSegnalazioneComponent } from './modal-modifica-segnalazione/modal-modifica-segnalazione.component';

describe('RilevazioniComponent', () => {
  let component: RilevazioniComponent;
  let fixture: ComponentFixture<RilevazioniComponent>;

  let areeProdottiService: jasmine.SpyObj<Aree>;
  let rilevazioniSrv: jasmine.SpyObj<RilevazioneService>;
  let stepperService: jasmine.SpyObj<StepperService>;
  let settoreMateriaService: jasmine.SpyObj<SettoreMateriaService>;
  let territorioService: jasmine.SpyObj<TerritorioService>;
  let contenziosoService: jasmine.SpyObj<ContenziosoService>;

  let dialog2: jasmine.SpyObj<MatDialog>;
  let dialog: jasmine.SpyObj<MtxDialog>;
  let router: jasmine.SpyObj<Router>;
  let saveAsSpy: jasmine.Spy; // Excel

  let areaAutocompleteTriggerSpy: jasmine.Spy;
  let sedeAutocompleteTriggerSpy: jasmine.Spy;
  let tipologiaAutocompleteTriggerSpy: jasmine.Spy;


  beforeEach(async () => {
    areeProdottiService = jasmine.createSpyObj('Aree', [
      'newGetAllByIdSettore',
      'getAllAreaProdotto',
    ]);
    rilevazioniSrv = jasmine.createSpyObj('RilevazioneService', [
      'contaRicercaProdotto',
      'contaRicercaContenzioso',
      'getRicercaProdotto',
      'getRicercaContenzioso',
    ]);
    stepperService = jasmine.createSpyObj('StepperService', ['']);
    settoreMateriaService = jasmine.createSpyObj('SettoreMateriaService', [
      'getSettoriConAreeProdotti',
    ]);
    contenziosoService = jasmine.createSpyObj('ContenziosoService', ['getAllTioplogie']);
    territorioService = jasmine.createSpyObj('TerritorioService', ['getSedi']);

    dialog2 = jasmine.createSpyObj('MatDialog', ['open', 'afterClosed']);
    dialog = jasmine.createSpyObj('MtxDialog', ['alert']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    saveAsSpy = spyOn(saveAs, 'saveAs').and.callThrough(); // Excel

    areaAutocompleteTriggerSpy = jasmine.createSpy('openPanel');
    sedeAutocompleteTriggerSpy = jasmine.createSpy('openPanel');
    tipologiaAutocompleteTriggerSpy = jasmine.createSpy('openPanel');

    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'allroles') {
        return JSON.stringify('P12689; P12799; P12801'); 
      }
      if (key === 'listaSedi') {
        return JSON.stringify(
          '[{"sedeCode":"818000","descSede":"PIEMONTE","role":"P12799"},{"sedeCode":"498100","descSede":"DCM MILANO","role":"P12799"},{"sedeCode":"030000","descSede":"ANCONA","role":"P12801"},{"sedeCode":"440000","descSede":"MACERATA","role":"P12801"}]'
        );
      }
      return null;
    });

    rilevazioniSrv.tabNomeSegnalazione$ = new BehaviorSubject<string | undefined>(
      'Segnalazioni Prodotto'
    );
    stepperService.datiSegnalazioneProdotto$ = new BehaviorSubject<any | undefined>(undefined);
    stepperService.datiSegnalazioneContenzioso$ = new BehaviorSubject<any | undefined>(undefined);
    stepperService.inserimentoTipoSegnalazione$ = new BehaviorSubject<string | undefined>('');

    contenziosoService.getAllTioplogie.and.returnValue(of(mockTipologieContenzioso));

    await TestBed.configureTestingModule({
      declarations: [RilevazioniComponent],
      imports: [
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
      ],
      providers: [
        { provide: Aree, useValue: areeProdottiService },
        { provide: RilevazioneService, useValue: rilevazioniSrv },
        { provide: StepperService, useValue: stepperService },
        { provide: SettoreMateriaService, useValue: settoreMateriaService },
        { provide: TerritorioService, useValue: territorioService },
        { provide: ContenziosoService, useValue: contenziosoService },
        
        { provide: MatDialog, useValue: dialog2 },
        { provide: MtxDialog, useValue: dialog },
        { provide: Router, useValue: router },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(RilevazioniComponent);
    component = fixture.componentInstance;
    component.role = JSON.parse(sessionStorage.getItem('allroles')!);
    fixture.detectChanges();

    // panels mocks
    component.areaAutocompleteTrigger = {
      panelClosingActions: new Subject<MatOptionSelectionChange>(),
      openPanel: areaAutocompleteTriggerSpy,
    } as unknown as MatAutocompleteTrigger;

    component.sedeAutocompleteTrigger = {
      panelClosingActions: new Subject<MatOptionSelectionChange>(),
      openPanel: sedeAutocompleteTriggerSpy,
    } as unknown as MatAutocompleteTrigger;

    component.tipologiaContenziosoAutocompleteTrigger = {
      panelClosingActions: new Subject<MatOptionSelectionChange>(),
      openPanel: tipologiaAutocompleteTriggerSpy,
    } as unknown as MatAutocompleteTrigger;
  });

  // objects mocks
  const mockTipologieContenzioso = [
    { id: 1, nome: 'Amministrativo' },
    { id: 2, nome: 'Giudiziario' },
  ];
  const mockTipologieContenziosoJSON = JSON.stringify(mockTipologieContenzioso);

  const mockAree = [
    { id: 20027, nome: 'Cambio Ufficio Pagatore' },
    { id: 20028, nome: 'Pensione Supplementare' },
    { id: 20029, nome: 'Assicurazione sociale vita' },
  ];
  const mockAreeJSON = JSON.stringify(mockAree);

  const mockSettoriMaterie = [
    { id: 14, nome: 'Cambio Ufficio Pagatore' },
    { id: 15, nome: 'Ammortizzatori sociali' },
  ];
  const mockSettoriMaterieJSON = JSON.stringify(mockSettoriMaterie);

  const mockSedi = [
    { id: 38000, nome: 'MARCHE' },
    { id: 30000, nome: 'ANCONA' },
  ];
  const mockSediJSON = JSON.stringify(mockSedi);

  const mockEventTabChange = {
    index: 0,
    tab: {
      _disabled: false,
      textLabel: 'Segnalazioni Prodotto',
      position: 0,
      // ...
    },
    __ngContext__: [],
    __ngSimpleChanges__: { previous: {}, current: null },
    // ...
  };

  const mockCountResponse = { count: 40 };

  const mockGetRicercaProdotto = [
    {
      id: 20362,
      areaId: 20032,
      areaProdotto: 'Indennità Covid 19',
      chiusa: true,
      data1: '04/10/2024',
      data2: '04/10/2024',
      inviato: true,
      nuovoAspetto: true,
      scadenza: '15/11/2024',
      sede: 'PARTINICO',
      sedeId: '550006',
      settoreId: 15,
      settoreMateria: 'Ammortizzatori sociali',
      statoDesc: 'Chiusa',
      statoId: 5,
    },
    {
      id: 20128,
      areaId: 20028,
      areaProdotto: 'Pensione Supplementare',
      chiusa: true,
      data1: '09/09/2024',
      data2: '11/09/2024',
      inviato: true,
      nuovoAspetto: false,
      scadenza: '21/10/2024',
      sede: 'PIEMONTE',
      sedeId: '818000',
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'Chiusa',
      statoId: 5,
    },
  ];

  const mockGetRicercaContenzioso = [
    {
      id: 10118,
      areaId: 20027,
      areaProdotto: 'Cambio Ufficio Pagatore',
      chiusa: false,
      contenziosoDesc: 'Amministrativo',
      contenziosoId: 1,
      data1: '12/11/2024',
      data2: '-',
      inviato: false,
      nuovoAspetto: false,
      scadenza: '24/12/2024',
      sede: 'PIEMONTE',
      sedeId: '818000',
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'In Bozza',
      statoId: 1,
    },
    {
      id: 10117,
      areaId: 20027,
      areaProdotto: 'Cambio Ufficio Pagatore',
      chiusa: true,
      contenziosoDesc: 'Amministrativo',
      contenziosoId: 1,
      data1: '09/09/2024',
      data2: '09/09/2024',
      inviato: true,
      nuovoAspetto: false,
      scadenza: '21/10/2024',
      sede: 'LEGNANO',
      sedeId: '490800',
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'Chiusa',
      statoId: 5,
    },
  ];

  const mockDatiSegnalazioneProdotto = [
    {
      areaId: 20028,
      areaProdotto: 'Pensione Supplementare',
      data1: '13/11/2024',
      data2: '-',
      id: 20364,
      inviata: false,
      sede: 'ALESSANDRIA',
      sedeId: 20000,
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'In Bozza',
      statoId: 1,
    },
    {
      areaId: 20028,
      areaProdotto: 'Pensione Supplementare',
      data1: '14/11/2024',
      data2: '-',
      id: 20365,
      inviata: false,
      sede: 'MARCHE',
      sedeId: 38000,
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'In Bozza',
      statoId: 1,
    },
  ];

  const mockDatiSegnalazioneContenzioso = [
    {
      areaId: 20027,
      areaProdotto: 'Cambio Ufficio Pagatore',
      contenziosoDesc: 'Amministrativo',
      contenziosoId: 1,
      data1: '12/11/2024',
      data2: '-',
      id: 10118,
      inviata: false,
      sede: 'PIEMONTE',
      sedeId: 818000,
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'In Bozza',
      statoId: 1,
    },
    {
      areaId: 20027,
      areaProdotto: 'Cambio Ufficio Pagatore',
      contenziosoDesc: 'Giudiziario',
      contenziosoId: 1,
      data1: '14/11/2024',
      data2: '-',
      id: 10119,
      inviata: false,
      sede: 'MARCHE',
      sedeId: 38000,
      settoreId: 14,
      settoreMateria: 'Pensioni',
      statoDesc: 'In Bozza',
      statoId: 1,
    },
  ];

  const ruoloAmministratore = 'P12689';
  const ruoloOperatoreCentraleAmministrativoDCO = 'P12690';
  const ruoloOperatoreTerritorialeRegionale = 'P12799';
  const ruoloOperatoreTerritorialeProvinciale = 'P12801';
  const ruoloOperatoreInformatico = 'P12800';
  const pagina = 'Inserimento';

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnDestroy', () => {
    it('should clean behavior subject when component is destroyed', () => {
      component.checkCurrentComponent = null;
      component.ngOnDestroy();
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBeUndefined();
    });
  });

  describe('ngOnInit', () => {
    it('should initialize component when is created', fakeAsync(() => {
      spyOn(component, 'checkCurrentTab');
      spyOn(component, 'resetPaginazioneProdotto');
      spyOn(component, 'resetPaginazioneContenzioso');
      // spyOn(component, 'loadStack');
      spyOn(component, 'getSettoriMaterie');
      spyOn(component, 'getAreaProdotto');
      spyOn(component, 'getSedi');
      spyOn(component, 'loadTipologieContenzioso');

      expect(component.isLoading).toBeTrue();
      // expect(component.ricercaAtt).toBeFalse();

      const loggedRoles = JSON.parse(sessionStorage.getItem('allroles')!);

      spyOn(component, '_filterSettore');
      spyOn(component, '_filterArea');
      spyOn(component, '_filterSede');
      spyOn(component, '_filterTipologiaContenzioso');

      component.settoreCtrl = new FormControl('');
      component.areaCtrl = new FormControl('');
      component.sedeCtrl = new FormControl('');
      component.tipologiaContenziosoCtrl = new FormControl('');

      component.ngOnInit();

      component.settoreCtrl.setValue('test'); // Questo innesca _filterSettore
      component.areaCtrl.setValue('test'); // Questo innesca _filterArea
      component.sedeCtrl.setValue('test'); // Questo innesca _filterSede
      component.tipologiaContenziosoCtrl.setValue('test'); // Questo innesca _filterTipologiaContenzioso

      fixture.detectChanges();
      tick();

      expect(loggedRoles.length).toBeGreaterThan(1);

      expect(component.isLoading).toBeTrue();
      // expect(component.ricercaAtt).toBeFalse();

      expect(component.checkCurrentTab).toHaveBeenCalled();
      expect(component.resetPaginazioneProdotto).toHaveBeenCalled();
      expect(component.resetPaginazioneContenzioso).toHaveBeenCalled();
      // expect(component.loadStack).toHaveBeenCalled();
      expect(component.getSettoriMaterie).toHaveBeenCalled();
      expect(component.getAreaProdotto).toHaveBeenCalled();
      expect(component.getSedi).toHaveBeenCalled();
      expect(component.loadTipologieContenzioso).toHaveBeenCalled();

      fixture.detectChanges();

      expect(component._filterSettore).toHaveBeenCalled();
      expect(component._filterArea).toHaveBeenCalled();
      expect(component._filterSede).toHaveBeenCalled();
      expect(component._filterTipologiaContenzioso).toHaveBeenCalled();
    }));
  });

  describe('ngAfterViewInit', () => {
    it('should keep areaCtrl value if it is valid', fakeAsync(() => {
      const validArea = 20027;
      component.filteredArea = of(mockAree);
      spyOn(component, '_filterArea').and.callThrough();
      component.areaCtrl.setValue(validArea);

      component.ngAfterViewInit();
      tick();

      (
        component.areaAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>
      ).next({
        source: {} as any,
        isUserInput: true,
      });
      expect(component.areaCtrl.value).toBe(validArea);
    }));

    it('should set areaCtrl to null if value is not in filteredArea', fakeAsync(() => {
      const invalidArea = 1;
      component.filteredArea = of(mockAree);
      spyOn(component, '_filterArea').and.callThrough();
      component.areaCtrl.setValue(1);

      component.ngAfterViewInit();
      tick();

      (
        component.areaAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>
      ).next({
        source: {} as any,
        isUserInput: true,
      });

      expect(component.areaCtrl.value).toBe(null);
    }));

    it('should keep sedeCtrl value if it is valid', fakeAsync(() => {
      const validSede = 38000;
      component.filteredSede = of(mockSedi);
      spyOn(component, '_filterSede').and.callThrough();
      component.sedeCtrl.setValue(validSede);

      component.ngAfterViewInit();
      tick();

      (
        component.sedeAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>
      ).next({
        source: {} as any,
        isUserInput: true,
      });
      expect(component.sedeCtrl.value).toBe(validSede);
    }));

    it('should set sedeCtrl to null if value is not in filteredSede', fakeAsync(() => {
      const invalidSede = 1;
      component.filteredSede = of(mockSedi);
      spyOn(component, '_filterSede').and.callThrough();
      component.sedeCtrl.setValue(invalidSede);

      component.ngAfterViewInit();
      tick();

      (
        component.sedeAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>
      ).next({
        source: {} as any,
        isUserInput: true,
      });
      expect(component.sedeCtrl.value).toBeNull();
    }));

    it('should keep tipologiaContenziosoCtrl value if it is valid', fakeAsync(() => {
      const validTipologiaContenzioso = 1;
      component.filteredTipologiaContenzioso = of(mockTipologieContenzioso);
      spyOn(component, '_filterTipologiaContenzioso').and.callThrough();
      component.tipologiaContenziosoCtrl.setValue(validTipologiaContenzioso);

      component.ngAfterViewInit();
      tick();

      (
        component.tipologiaContenziosoAutocompleteTrigger
          .panelClosingActions as Subject<MatOptionSelectionChange>
      ).next({
        source: {} as any,
        isUserInput: true,
      });
      expect(component.tipologiaContenziosoCtrl.value).toBe(validTipologiaContenzioso);
    }));

    it('should set tipologiaContenziosoCtrl to null if value is not in filteredTipologiaContenzioso', fakeAsync(() => {
      const invalidTipologiaContenzioso = 3;
      component.filteredTipologiaContenzioso = of(mockTipologieContenzioso);
      spyOn(component, '_filterTipologiaContenzioso').and.callThrough();
      component.tipologiaContenziosoCtrl.setValue(invalidTipologiaContenzioso);

      component.ngAfterViewInit();
      tick();

      (component.tipologiaContenziosoAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>).next({
        source: {} as any,
        isUserInput: true
      });
      expect(component.tipologiaContenziosoCtrl.value).toBeNull();
    }));
  });

  describe('checkCurrentTab', () => {
    it('should set subject to Segnalazioni Prodotto if tabNomeSegnalazione$ is undefined', () => {
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBeDefined();

      rilevazioniSrv.tabNomeSegnalazione$ = new BehaviorSubject<string | undefined>(undefined);
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBeUndefined();

      component.checkCurrentTab();

      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBe('Segnalazioni Prodotto');
    });

    it('should set tabProdotto equal to 0 if tabNomeSegnalazione is equal to "Segnalazioni Prodotto" ', () => {
      rilevazioniSrv.tabNomeSegnalazione$ = new BehaviorSubject<string | undefined>(
        'Segnalazioni Prodotto'
      );
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBeDefined();

      component.checkCurrentTab();

      expect(component.tabProdotto).toBe(0);
    });

    it('should set tabProdotto equal to 1 if tabNomeSegnalazione is equal to "Segnalazioni Contenzioso" ', () => {
      rilevazioniSrv.tabNomeSegnalazione$ = new BehaviorSubject<string | undefined>(
        'Segnalazioni Contenzioso'
      );
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBeDefined();

      component.checkCurrentTab();

      expect(component.tabProdotto).toBe(1);
    });
  });

  describe('tabClick', () => {
    it('should set tabNomeSegnalazione equal to tab.tab.textLabel', () => {
      const expectedResult = mockEventTabChange.tab.textLabel;
      component.tabClick(mockEventTabChange);
      expect(rilevazioniSrv.tabNomeSegnalazione$.value).toBe(expectedResult);
    });
  });

  describe('_filterSettore', () => {
    it('should filter settori by description', () => {
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      component.settoreMateria = component._filterSettore('Cambio Ufficio Pagatore');
      expect(component.settoreMateria).toEqual([mockSettoriMaterie[0]]);
    });

    it('should return all settori when input is empty', () => {
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      component.settoreMateria = component._filterSettore('');
      expect(component.settoreMateria).toEqual(mockSettoriMaterie);
    });

    it('should return an empty array when no settore match', () => {
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      component.settoreMateria = component._filterSettore('NonExistingSettore');
      expect(component.settoreMateria).toEqual([]);
    });

    it('should be case insensitive when filtering', () => {
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      component.settoreMateria = component._filterSettore('cambiO uffIcio pAgaTore');
      expect(component.settoreMateria).toEqual([mockSettoriMaterie[0]]);
    });
  });

  describe('_filterArea', () => {
    it('should filter aree by description', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      component.areaProdotto = component._filterArea('Cambio Ufficio Pagatore');
      expect(component.areaProdotto).toEqual([mockAree[0]]);
    });

    it('should return all aree when input is empty', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      component.areaProdotto = component._filterArea('');
      expect(component.areaProdotto).toEqual(mockAree);
    });

    it('should return an empty array when no area match', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      component.areaProdotto = component._filterArea('NonExistingArea');
      expect(component.areaProdotto).toEqual([]);
    });

    it('should be case insensitive when filtering', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      component.areaProdotto = component._filterArea('cAmbiO uFfIcio paGatoRE');
      expect(component.areaProdotto).toEqual([mockAree[0]]);
    });
  });

  describe('_filterSede', () => {
    it('should filter sedi by description', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      component.sede = component._filterSede(mockSedi[0].nome); // "MARCHE"
      expect(component.sede).toEqual([mockSedi[0]]);
    });

    it('should return all sedi when input is empty', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      component.sede = component._filterSede('');
      expect(component.sede).toEqual(mockSedi);
    });

    it('should return an empty array when no sede match', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      component.sede = component._filterSede('NonExistingSede');
      expect(component.sede).toEqual([]);
    });

    it('should be case insensitive when filtering', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      component.sede = component._filterSede('MaRcHe');
      expect(component.sede).toEqual([mockSedi[0]]);
    });
  });

  describe('_filterTipologiaContenzioso', () => {
    it('should filter tipologieContenzioso by description', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      component.tipologieContenzioso = component._filterTipologiaContenzioso('Amministrativo');
      expect(component.tipologieContenzioso).toEqual([mockTipologieContenzioso[0]]);
    });

    it('should return all tipologieContenzioso when input is empty', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      component.tipologieContenzioso = component._filterTipologiaContenzioso('');
      expect(component.tipologieContenzioso).toEqual(mockTipologieContenzioso);
    });

    it('should return an empty array when no sede match', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      component.tipologieContenzioso = component._filterTipologiaContenzioso(
        'NonExistingTipologiaContenzioso'
      );
      expect(component.tipologieContenzioso).toEqual([]);
    });

    it('should be case insensitive when filtering', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      component.tipologieContenzioso = component._filterTipologiaContenzioso('amMINISTRatiVo');
      expect(component.tipologieContenzioso).toEqual([mockTipologieContenzioso[0]]);
    });
  });

  describe('settoreSelected', () => {
    it('should set some value for settoreCtrl and settore and call settoreMateriaSelezionatoConId', () => {
      spyOn(component, 'settoreMateriaSelezionatoConId');

      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      const selectedId = mockSettoriMaterie[0].id;

      component.settoreSelected(selectedId);

      expect(component.settoreCtrl.value).toBe(mockSettoriMaterie[0].nome);
      expect(component.settore).toBe(selectedId);
      expect(component.settoreMateriaSelezionatoConId).toHaveBeenCalledWith(selectedId);
    });

    it('should handle catch error', () => {
      // Evito di spiare la funzione nel try (settoreMateriaSelezionatoConId()) per forzare l'entrata nel catch
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      component.settoreMateria = mockSettoriMaterie;
      const selectedId = mockSettoriMaterie[0].id;

      component.settoreSelected(selectedId);

      expect(component.settoreCtrl.value).toBe(mockSettoriMaterie[0].nome);
      expect(component.settore).toBe(selectedId);

      expect(component.errorMessage).toBe(
        'Errore nel caricamento delle aree prodotto. Riprova più tardi.'
      );
      expect(dialog.alert).toHaveBeenCalledWith(
        'Errore nel caricamento delle aree prodotto. Riprova più tardi.'
      );
    });
  });
  
  describe('areaSelected', () => {
    it('should set areaCtrl and set area if selectedArea is found', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      const selectedId = mockAree[0].id; // 20027

      component.areaSelected(selectedId);

      expect(component.areaCtrl.value).toBe(mockAree[0].nome);
      expect(component.area).toBe(selectedId);
    });

    it('should set areaCtrl to "" and set area if selectedArea is not found', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      const invalidId = 10101;

      component.areaSelected(invalidId);

      expect(component.areaCtrl.value).toBe('');
      expect(component.area).toBe(invalidId);
    });
  });

  describe('sedeSelected', () => {
    it('should set sedeCtrl and filtroperSede if selectedSede is found', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      const selectedId = mockSedi[0].id; // 38000

      component.sedeSelected(selectedId);

      expect(component.sedeCtrl.value).toBe(
        component.showFieldSede(mockSedi[0].id, mockSedi[0].nome)
      );
      expect(component.filtroperSede).toBe(selectedId.toString());
    });

    it('should set sedeCtrl to "" and set filtroperSede if selectedSede is not found', () => {
      const mockSedi = JSON.parse(mockSediJSON);
      component.sede = mockSedi;
      const invalidId = 10101;

      component.sedeSelected(invalidId);

      expect(component.sedeCtrl.value).toBe('');
      expect(component.filtroperSede).toBe(invalidId.toString());
    });
  });

  describe('tipologiaContenziosoSelected', () => {
    it('should set tipologiaContenziosoCtrl and idTipologiaContenzioso if selectedTipologia is found', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      const selectedId = mockTipologieContenzioso[0].id; // 1

      component.tipologiaContenziosoSelected(selectedId);

      expect(component.tipologiaContenziosoCtrl.value).toBe(mockTipologieContenzioso[0].nome);
      expect(component.idTipologiaContenzioso).toBe(selectedId);
    });

    it('should set tipologiaContenziosoCtrl to "" and set idTipologiaContenzioso if selectedTipologia is not found', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);
      component.tipologieContenzioso = mockTipologieContenzioso;
      const invalidId = 10101;

      component.tipologiaContenziosoSelected(invalidId);

      expect(component.tipologiaContenziosoCtrl.value).toBe('');
      expect(component.idTipologiaContenzioso).toBe(invalidId);
    });
  });

  describe('clearSettore', () => {
    it('should clear settore input and related aree reloading all aree calling getAreaProdotto()', () => {
      spyOn(component, 'getAreaProdotto');
      spyOn(component, '_filterSettore');
      component.settoreCtrl = new FormControl('');

      component.clearSettore();

      expect(component.settoreCtrl.value).toBe('');
      expect(component.areaCtrl.value).toBe('');
      expect(component.settore).toBeNull();
      expect(component.area).toBeNull();
      expect(component.areaProdotto).toEqual([]);
      expect(component.getAreaProdotto).toHaveBeenCalled();

      component.settoreCtrl.setValue('test'); // Questo innesca _filterSettore
      fixture.detectChanges();
      expect(component._filterSettore).toHaveBeenCalled();
    });
  });

  describe('clearArea', () => {
    it('should clear area input', () => {
      spyOn(component, '_filterArea');
      component.areaCtrl = new FormControl('');

      component.clearArea();

      expect(component.areaCtrl.value).toBe('');
      expect(component.area).toBeNull();

      component.areaCtrl.setValue('test'); // Questo innesca _filterArea
      fixture.detectChanges();
      expect(component._filterArea).toHaveBeenCalled();
    });
  });

  describe('clearSede', () => {
    it('should clear sede input', () => {
      spyOn(component, '_filterSede');
      component.sedeCtrl = new FormControl('');

      component.clearSede();

      expect(component.sedeCtrl.value).toBe('');
      expect(component.filtroperSede).toBeNull();

      component.sedeCtrl.setValue('test');
      fixture.detectChanges();
      expect(component._filterSede).toHaveBeenCalled();
    });
  });

  describe('clearTipologiaContenzioso', () => {
    it('should clear tipologia contenzioso input', () => {
      spyOn(component, '_filterTipologiaContenzioso');
      component.tipologiaContenziosoCtrl = new FormControl('');

      component.clearTipologiaContenzioso();

      expect(component.tipologiaContenziosoCtrl.value).toBe('');
      expect(component.idTipologiaContenzioso).toBeNull();

      component.tipologiaContenziosoCtrl.setValue('test');
      fixture.detectChanges();
      expect(component._filterTipologiaContenzioso).toHaveBeenCalled();
    });
  });

  describe('clearDate', () => {
    it('should clear date input and format date based on data inizio/data fine (for prodotto)', () => {
      spyOn(component, 'formatDate');
      let tipoSegnalazione = 'Prodotto';
      let controlName = 'dataInizio';
      component.dataInizio = new FormControl(new Date());

      component.clearDate(controlName);

      expect(component.dataInizio.value).toBeNull();
      expect(component.formatDate).toHaveBeenCalledWith(
        component.dataInizio.value,
        component.dataFine.value,
        tipoSegnalazione
      );

      controlName = 'dataFine';
      component.dataFine = new FormControl(new Date());

      component.clearDate(controlName);

      expect(component.dataFine.value).toBeNull();
      expect(component.formatDate).toHaveBeenCalledWith(
        component.dataInizio.value,
        component.dataFine.value,
        tipoSegnalazione
      );
    });

    it('should clear date input and format date based on data inizio/data fine (for contenzioso)', () => {
      spyOn(component, 'formatDate');
      let tipoSegnalazione = 'Contenzioso';
      let controlName = 'dataInizioContenzioso';
      component.dataInizioContenzioso = new FormControl(new Date());

      component.clearDate(controlName);

      expect(component.dataInizioContenzioso.value).toBeNull();
      expect(component.formatDate).toHaveBeenCalledWith(
        component.dataInizioContenzioso.value,
        component.dataFineContenzioso.value,
        tipoSegnalazione
      );

      controlName = 'dataFineContenzioso';
      component.dataFineContenzioso = new FormControl(new Date());

      component.clearDate(controlName);

      expect(component.dataFineContenzioso.value).toBeNull();
      expect(component.formatDate).toHaveBeenCalledWith(
        component.dataInizioContenzioso.value,
        component.dataFineContenzioso.value,
        tipoSegnalazione
      );
    });

    it('should call formatDate with (null,null,"Prodotto") if all dates are null', () => {
      spyOn(component, 'formatDate');

      component.dataInizio = new FormControl(null);
      component.dataFine = new FormControl(null);
      component.dataInizioContenzioso = new FormControl(null);
      component.dataFineContenzioso = new FormControl(null);

      let controlName = 'Prodotto';
      component.clearDate(controlName);
      expect(component.formatDate).toHaveBeenCalledWith(null, null, 'Prodotto');

      controlName = 'Contenzioso';
      component.clearDate(controlName);
      expect(component.formatDate).toHaveBeenCalledWith(null, null, 'Prodotto');
    });
  });

  describe('getSedi', () => {
    it("should display alert and return if logged ruoloRegionale and ruoloProvinciale don't have sedi", () => {
      component.role =
        ruoloOperatoreCentraleAmministrativoDCO +
        '; ' +
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeRegionale +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;
        component.codiceSede = [];
    
        component.getSedi();

        expect(dialog.alert).toHaveBeenCalledWith('Non ci sono sedi associate al tuo account.');
    });

    it('should get list of sedi based on role and call inizializzaPaginazione', () => {
      component.role = JSON.parse(sessionStorage.getItem('allroles')!);
      component.codiceSede = JSON.parse(sessionStorage.getItem('listaSedi')!);

      spyOn(component, 'inizializzaPaginazione');

      const mockSedi = JSON.parse(mockSediJSON);
      territorioService.getSedi.and.returnValue(of(mockSedi));

      rilevazioniSrv.contaRicercaProdotto.and.returnValue(of(mockCountResponse));
      rilevazioniSrv.contaRicercaContenzioso.and.returnValue(of(mockCountResponse));
      rilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockDatiSegnalazioneProdotto));
      rilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockDatiSegnalazioneContenzioso));

      component.getSedi();

      expect(territorioService.getSedi).toHaveBeenCalledWith(
        component.role!,
        component.codiceSede,
        pagina,
        ruoloOperatoreTerritorialeRegionale,
        ruoloOperatoreTerritorialeProvinciale
      );
      expect(component.sede.length).toBe(mockSedi.length + 1);
      expect(component.sede).toEqual([ { id: null, nome: '' }, ...mockSedi ]);
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  });

  describe('formatDate', () => {
    it('should format date if it is not null, else set null value based on tipoSegnalazione (for prodotto)', () => {
      const tipoSegnalazione = 'Prodotto';

      component.dataInizio = new FormControl(new Date(Date.now()));
      component.dataFine = new FormControl(null);

      component.formatDate(component.dataInizio.value, component.dataFine.value, tipoSegnalazione);

      expect(component.validitaDal).toBe(
        moment(component.dataInizio.value).startOf('day').format('YYYY-MM-DD')
      );
      expect(component.validitaAl).toBeNull();
    });

    it('should format date if it is not null, else set null value based on tipoSegnalazione (for contenzzioso)', () => {
      const tipoSegnalazione = 'Contenzioso';

      component.dataInizioContenzioso = new FormControl(null);
      component.dataFineContenzioso = new FormControl(new Date(Date.now()));

      component.formatDate(
        component.dataInizioContenzioso.value,
        component.dataFineContenzioso.value,
        tipoSegnalazione
      );

      expect(component.validitaDal).toBeNull();
      expect(component.validitaAl).toBe(
        moment(component.dataFineContenzioso.value).startOf('day').format('YYYY-MM-DD')
      );
    });
  });

  describe('inizializzaPaginazione', () => {
    it('should call correct page initialization based on tipoSegnalazione', () => {
      spyOn(component, 'inizializzaPaginazioneProdotto');
      spyOn(component, 'inizializzaPaginazioneContenzioso');

      let tipoSegnalazione = 'Prodotto';
      component.inizializzaPaginazione(tipoSegnalazione);
      expect(component.inizializzaPaginazioneProdotto).toHaveBeenCalled();

      tipoSegnalazione = 'Contenzioso';
      component.inizializzaPaginazione(tipoSegnalazione);
      expect(component.inizializzaPaginazioneContenzioso).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazioneProdotto', () => {
    it('should call contaRicercaProdotto and set pagination', () => {
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'ricercaProdotto');

      const loggedRoles = JSON.parse(sessionStorage.getItem('allroles')!);
      component.role = loggedRoles;

      rilevazioniSrv.contaRicercaProdotto.and.returnValue(of(mockCountResponse));
      rilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockGetRicercaProdotto));

      component.inizializzaPaginazioneProdotto();

      expect(component.layoutNumbersProdotto).toEqual([]);
      expect(rilevazioniSrv.contaRicercaProdotto).toHaveBeenCalledWith(
        /*settore:*/ null,
        /*area:*/ null,
        /*sede:*/ null,
        /*dataInizio:*/ null,
        /*dataFine:*/ null,
        /*idStatoSegnalazione:*/ null,
        /*ruolo:*/ 'P12689',
        /*utenteLoggato:*/ null,
        /*sourceCall:*/ pagina,
        /*sedeVuota:*/ true
      );
      expect(component.pageCurrProdotto).toBe(1); // pagina 1 dopo la ricerca
      expect(component.elemNumProdotto).toBe(mockCountResponse.count);
      expect(component.pageDimProdotto).toBe('20');
      expect(component.pageNumProdotto).toBe(2);

      expect(component.scorriLayoutProdotto).toHaveBeenCalled();
      expect(component.ricercaProdotto).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazioneContenzioso', () => {
    it('should call contaRicercaContenzioso and set pagination', () => {
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'ricercaContenzioso');

      const loggedRoles = JSON.parse(sessionStorage.getItem('allroles')!);
      component.role = loggedRoles;

      rilevazioniSrv.contaRicercaContenzioso.and.returnValue(of(mockCountResponse));

      rilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockGetRicercaContenzioso));

      component.inizializzaPaginazioneContenzioso();

      expect(component.layoutNumbersContenzioso).toEqual([]);
      expect(rilevazioniSrv.contaRicercaContenzioso).toHaveBeenCalledWith(
        /*settore:*/ null,
        /*area:*/ null,
        /*sede:*/ null,
        /*dataInizio:*/ null,
        /*dataFine:*/ null,
        /*idStatoSegnalazione:*/ null,
        /*idTipologiaContenzioso:*/ null,
        /*ruolo:*/ 'P12689',
        /*utenteLoggato:*/ null,
        /*sourceCall:*/ pagina,
        /*sedeVuota:*/ true
      );
      expect(component.pageCurrContenzioso).toBe(1); // pagina 1 dopo la ricerca
      expect(component.elemNumContenzioso).toBe(mockCountResponse.count);
      expect(component.pageDimContenzioso).toBe('20');
      expect(component.pageNumContenzioso).toBe(2);

      expect(component.scorriLayoutContenzioso).toHaveBeenCalled();
      expect(component.ricercaContenzioso).toHaveBeenCalled();
    });
  });

  describe('formatToSixDigits', () => {
    it('should return null if value is null', () => {
      const value = null;
      const result = component.formatToSixDigits(value);
      expect(result).toBeNull();
    });

    it('should return formatted string if value is not null', () => {
      const value = 38000;
      const expectedResult = value.toString().padStart(6, '0'); // const expectedResult = "038000";

      const result = component.formatToSixDigits(value);
      expect(result).toBe(expectedResult);
    });
  });

  describe('modificaPaginazione', () => {
    it('should call resetPaginazione based on tipoSegnalazione e inizializzaPaginazione', () => {
      spyOn(component, 'resetPaginazioneProdotto');
      spyOn(component, 'resetPaginazioneContenzioso');
      spyOn(component, 'inizializzaPaginazione');

      let tipoSegnalazione = 'Prodotto';
      component.modificaPaginazione(tipoSegnalazione);
      expect(component.resetPaginazioneProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalled();

      tipoSegnalazione = 'Contenzioso';
      component.modificaPaginazione(tipoSegnalazione);
      expect(component.resetPaginazioneContenzioso).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalled();
    });
  });

  describe('showFieldStato', () => {
    it('should return text status from id status', () => {
      const expectedResult = 'In Bozza';
      const result = component.showFieldStato(1);
      expect(result).toBe(expectedResult);
    });
  });

  describe('sortData', () => {
    it('should call ricerca based on tipologia and set ordine if sort.direction is not null', () => {
      spyOn(component, 'ricercaProdotto');
      spyOn(component, 'ricercaContenzioso');

      const loggedRoles = JSON.parse(sessionStorage.getItem('allroles')!);
      component.role = loggedRoles;

      rilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockGetRicercaContenzioso));
      rilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockGetRicercaProdotto));

      // caso tipologia = 'Prodotto' con sort.direction != ""
      let sort: Sort = { active: 'matricola', direction: 'asc' };
      let tipologia = 'Prodotto';

      component.sortData(sort, tipologia);

      expect(component.ordine).toBe(sort.active + '_' + sort.direction);
      expect(component.ricercaProdotto).toHaveBeenCalled();

      // caso tipologia = 'Contenzioso' con sort.direction = ""
      sort = { active: 'matricola', direction: '' };
      tipologia = 'Contenzioso';

      component.sortData(sort, tipologia);

      expect(component.ordine).toBe('');
      expect(component.ricercaContenzioso).toHaveBeenCalled();
    });
  });

  describe('vaiNuova', () => {
    it('should set tipo segnalazione and clear datiSegnalazione subject, then navigate to next page ', () => {
      spyOn(component, 'setTipoSegnalazione');

      // caso: tipologia = 'Prodotto'
      stepperService.datiSegnalazioneProdotto$ = new BehaviorSubject<any | undefined>(
        mockDatiSegnalazioneProdotto
      );
      let tipologia = 'Prodotto';

      component.vaiNuova(tipologia);

      expect(component.checkCurrentComponent).toBe(tipologia);
      expect(component.setTipoSegnalazione).toHaveBeenCalledWith(tipologia);
      expect(stepperService.datiSegnalazioneProdotto$.value).toBeUndefined();

      // caso: tipologia = 'Contenzioso'
      stepperService.datiSegnalazioneContenzioso$ = new BehaviorSubject<any | undefined>(
        mockDatiSegnalazioneContenzioso
      );
      tipologia = 'Contenzioso';

      component.vaiNuova(tipologia);

      expect(component.checkCurrentComponent).toBe(tipologia);
      expect(component.setTipoSegnalazione).toHaveBeenCalledWith(tipologia);
      expect(stepperService.datiSegnalazioneContenzioso$.value).toBeUndefined();
    });
  });

  describe('setTipoSegnalazione', () => {
    it('should set tipo segnalazione subject', () => {
      stepperService.inserimentoTipoSegnalazione$ = new BehaviorSubject<string | undefined>('mock');

      let tipologia = 'Prodotto';
      component.setTipoSegnalazione(tipologia);
      expect(stepperService.inserimentoTipoSegnalazione$.value).toBe(tipologia);

      tipologia = 'Contenzioso';
      component.setTipoSegnalazione(tipologia);
      expect(stepperService.inserimentoTipoSegnalazione$.value).toBe(tipologia);
    });
  });

  describe('getAppliedFilters', () => {
    it('should return "Nessun filtro applicato" if all formctrl and formgroup are null', () => {
      component.settoreCtrl = new FormControl(null);
      component.areaCtrl = new FormControl(null);
      component.sedeCtrl = new FormControl(null);
      component.tipologiaContenziosoCtrl = new FormControl(null);
      component.formRicerca.patchValue({ dataInizio: null, dataFine: null });

      const result = component.getAppliedFilters();

      expect(result.length).toBe(1);
      expect(result[0].Filtro).toBe('Nessun filtro applicato');
      expect(result[0].Valore).toBe('');
    });

    it('should return filters when defined', () => {
      component.settoreCtrl = new FormControl(mockSettoriMaterie[0].nome);
      component.areaCtrl = new FormControl(null);
      component.sedeCtrl = new FormControl(null);
      component.tipologiaContenziosoCtrl = new FormControl(null);
      component.formRicerca.patchValue({ dataInizio: null, dataFine: null });

      let result = component.getAppliedFilters();
      expect(result.length).toBe(1);

      component.areaCtrl = new FormControl(mockAree[0].nome);
      result = component.getAppliedFilters();
      expect(result.length).toBe(2);

      component.sedeCtrl = new FormControl(mockSedi[0].nome);
      result = component.getAppliedFilters();
      expect(result.length).toBe(3);

      component.tipologiaContenziosoCtrl = new FormControl(mockTipologieContenzioso[0].nome);
      result = component.getAppliedFilters();
      expect(result.length).toBe(4);

      component.formRicerca.patchValue({ dataInizio: new Date(Date.now()) });
      result = component.getAppliedFilters();
      expect(result.length).toBe(5);

      component.formRicerca.patchValue({ dataFine: new Date(Date.now()) });
      result = component.getAppliedFilters();
      expect(result.length).toBe(6);
    });
  });

  describe('exportAsXLSX', () => {
    it('should call right method based on tipoSegnalazione', () => {
      spyOn(component, 'exportProdottoAsXLSX');
      spyOn(component, 'exportContenziosoAsXLSX');

      let tipoSegnalazione = 'Prodotto';
      component.exportAsXLSX(tipoSegnalazione);
      expect(component.exportProdottoAsXLSX).toHaveBeenCalled();

      tipoSegnalazione = 'Contenzioso';
      component.exportAsXLSX(tipoSegnalazione);
      expect(component.exportContenziosoAsXLSX).toHaveBeenCalled();
    });
  });

  describe('exportProdottoAsXLSX', () => {
    it('should open alert and return if data length is equal to 0', () => {
      component.prodotti = [];
      component.exportProdottoAsXLSX();
      expect(dialog.alert).toHaveBeenCalledWith("Nessun dato disponibile per l'esportazione!");
    });

    it('should map data and call exportDataToExcel in case of data', () => {
      spyOn(component, 'exportDataToExcel');

      component.prodotti = mockDatiSegnalazioneProdotto;

      const mappedData = component.prodotti.map(item => ({
        'Data Creazione': item.data1,
        'Data Ultima Modifica': item.data2,
        'Settore/Materia': item.settoreMateria,
        'Area/Prodotto': item.areaProdotto,
        'Sede': component.showFieldSede(item.sedeId, item.sede),
        'Stato': item.statoDesc,
        'Inviata': item.inviata ? 'Sì' : 'No',
      }));

      component.exportProdottoAsXLSX();
      expect(component.exportDataToExcel).toHaveBeenCalledWith(mappedData, 'Prodotto');
    });
  });

  describe('exportContenziosoAsXLSX', () => {
    it('should open alert and return if data length is equal to 0', () => {
      component.contenziosi = [];
      component.exportContenziosoAsXLSX();
      expect(dialog.alert).toHaveBeenCalledWith("Nessun dato disponibile per l'esportazione!");
    });

    it('should map data and call exportDataToExcel in case of data', () => {
      spyOn(component, 'exportDataToExcel');

      component.contenziosi = mockDatiSegnalazioneContenzioso;

      const mappedData = component.contenziosi.map(item => ({
        'Data Creazione': item.data1,
        'Data Ultima Modifica': item.data2,
        'Tipologia Contenzioso': item.contenziosoDesc,
        'Settore/Materia': item.settoreMateria,
        'Area/Prodotto': item.areaProdotto,
        'Sede': component.showFieldSede(item.sedeId, item.sede),
        'Stato': item.statoDesc,
        'Inviata': item.inviata ? 'Sì' : 'No',
      }));

      component.exportContenziosoAsXLSX();
      expect(component.exportDataToExcel).toHaveBeenCalledWith(mappedData, 'Contenzioso');
    });
  });

  describe('exportDataToExcel', () => {
    it('should set excel file properties and call saveAsExcelFile', () => {
      const mockExcelFilters = [
        { Filtro: 'Settore', Valore: mockSettoriMaterie[0].nome },
        { Filtro: 'Area', Valore: mockAree[0].nome },
        { Filtro: 'Sede', Valore: mockSedi[0].nome },
        { Filtro: 'Tipologia Contenzioso', Valore: mockTipologieContenzioso[0].nome },
        { Filtro: 'Data Inizio', Valore: new Date(Date.now()) },
        { Filtro: 'Data Fine', Valore: new Date(Date.now()) },
      ];

      spyOn(component, 'saveAsExcelFile');
      spyOn(component, 'getNomeFile').and.returnValue('test-file.xlsx');
      spyOn(component, 'getAppliedFilters').and.returnValue(mockExcelFilters);

      // Mock di XLSX.utils.json_to_sheet per ritornare un oggetto fittizio
      spyOn(XLSX.utils, 'json_to_sheet').and.returnValue({
        '!ref': 'A1:B2', // Mock del range di celle
        'A1': { v: 'Test Filter' },
        'B1': { v: 'Test Value' },
      });

      // Mock della funzione saveAsExcelFile, che invoca XLSX.write
      const saveAsExcelFileMock = jasmine
        .createSpy('saveAsExcelFile')
        .and.callFake((excelBuffer, fileName) => {
          // Verifica che venga passato un ArrayBuffer e il nome del file
          expect(excelBuffer).toBeInstanceOf(ArrayBuffer);
          expect(fileName).toBe('test-file.xlsx');
        });

      // Assegniamo il nostro mock al metodo saveAsExcelFile
      component.saveAsExcelFile = saveAsExcelFileMock;

      // Eseguiamo la funzione che dovrebbe invocare XLSX.write internamente
      const mappedData = mockDatiSegnalazioneProdotto.map(item => ({
        'Data Creazione': item.data1,
        'Data Ultima Modifica': item.data2,
        'Settore/Materia': item.settoreMateria,
        'Area/Prodotto': item.areaProdotto,
        'Sede': component.showFieldSede(item.sedeId, item.sede),
        'Stato': item.statoDesc,
        'Inviata': item.inviata ? 'Sì' : 'No',
      }));

      component.exportDataToExcel(mappedData, 'Pensione Supplementare');

      // Verifica che XLSX.utils.json_to_sheet sia stato chiamato con i filtri e i dati
      expect(XLSX.utils.json_to_sheet).toHaveBeenCalledWith(mockExcelFilters);
      expect(XLSX.utils.json_to_sheet).toHaveBeenCalledWith(mappedData);

      // Verifica che saveAsExcelFile sia stato chiamato con i dati giusti
      expect(saveAsExcelFileMock).toHaveBeenCalledWith(jasmine.any(ArrayBuffer), 'test-file.xlsx');
    });
  });
  
  describe('saveAsExcelFile', () => {
    it('should create a Blob and call saveAs with correct parameters', () => {
      const mockBuffer = new TextEncoder().encode('mock Excel data').buffer; // Buffer fittizio
      const mockFileName = 'test-file'; // Nome fittizio
      const EXCEL_EXTENSION = '.xlsx'; // Estensione file

      component.saveAsExcelFile(mockBuffer, mockFileName);

      // Crea il Blob che ci aspettiamo
      const expectedBlob = new Blob([mockBuffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });

      // Verifica che 'saveAs' sia stata chiamata con i parametri corretti
      expect(saveAsSpy).toHaveBeenCalledWith(expectedBlob, mockFileName + EXCEL_EXTENSION);
    });
  });

  describe('getNomeFile', () => {
    it('should return correctly formatted name file excel (for prodotto)', () => {
      const tipoSegnalazione: string = 'Prodotto';

      let result = component.getNomeFile(tipoSegnalazione); // example: RilevazioneProdotti-14/11/2024-12:27:50-21

      // Verifica che il nome del file contenga la parte iniziale 'RilevazioneProdotti-'
      expect(result).toContain('RilevazioneProdotti-');

      // Verifica che il formato della data sia dd/mm/yyyy
      const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
      expect(result).toMatch(dateRegex);

      // Verifica che il formato dell'ora sia hh:mm:ss (24 ore)
      const timeRegex = /\d{2}:\d{2}:\d{2}/;
      expect(result).toMatch(timeRegex);
    });

    it('should return correctly formatted name file excel (for contenzioso)', () => {
      const tipoSegnalazione: string = 'Contenzioso';

      let result = component.getNomeFile(tipoSegnalazione); // example: RilevazioneContenziosi-14/11/2024-12:27:50-21

      // Verifica che il nome del file contenga la parte iniziale 'RilevazioneContenziosi-'
      expect(result).toContain('RilevazioneContenziosi-');

      // Verifica che il formato della data sia dd/mm/yyyy
      const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
      expect(result).toMatch(dateRegex);

      // Verifica che il formato dell'ora sia hh:mm:ss (24 ore)
      const timeRegex = /\d{2}:\d{2}:\d{2}/;
      expect(result).toMatch(timeRegex);
    });
  });

  describe('resetRicerca', () => {
    it('should reset search form and call getAreaProdotto and inizializzaPaginazione', () => {
      spyOn(component, 'getAreaProdotto');
      spyOn(component, 'inizializzaPaginazione');
      spyOn(component, '_filterSettore');
      spyOn(component, '_filterArea');
      spyOn(component, '_filterSede');
      spyOn(component, '_filterTipologiaContenzioso');

      component.role = JSON.parse(sessionStorage.getItem('allroles')!);

      rilevazioniSrv.contaRicercaProdotto.and.returnValue(of(mockCountResponse));
      rilevazioniSrv.contaRicercaContenzioso.and.returnValue(of(mockCountResponse));
      component.resetRicerca();

      expect(component.settore).toBeNull();
      expect(component.area).toBeNull();
      expect(component.areaProdotto).toEqual([]);
      expect(component.filtroperSede).toBeNull();
      expect(component.dataInizio.value).toBeNull();
      expect(component.dataFine.value).toBeNull();
      expect(component.dataInizioContenzioso.value).toBeNull();
      expect(component.dataFineContenzioso.value).toBeNull();
      expect(component.idStatoSegnalazione).toBeNull();
      expect(component.settoreCtrl.value).toBeNull();
      expect(component.areaCtrl.value).toBeNull();
      expect(component.sedeCtrl.value).toBeNull();
      expect(component.tipologiaContenziosoCtrl.value).toBeNull();

      expect(component.getAreaProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');

      component.settoreCtrl.setValue('test'); // Questo innesca _filterSettore
      component.areaCtrl.setValue('test'); // Questo innesca _filterArea
      component.sedeCtrl.setValue('test'); // Questo innesca _filterSede
      component.tipologiaContenziosoCtrl.setValue('test'); // Questo innesca _filterTipologiaContenzioso

      fixture.detectChanges();

      expect(component._filterSettore).toHaveBeenCalledWith('test');
      expect(component._filterArea).toHaveBeenCalledWith('test');
      expect(component._filterSede).toHaveBeenCalledWith('test');
      expect(component._filterTipologiaContenzioso).toHaveBeenCalledWith('test');
    });
  });

  describe('handleRowClickProdotto', () => {
    it('should open segnalazione details in a modal when table row is clicked and initialize pagination when closed', () => {
      spyOn(component, 'inizializzaPaginazione');
      spyOn(component, 'setTipoSegnalazione');

      const dialog2Ref = jasmine.createSpyObj('MatDialog', ['afterClosed']);
      component.dialog2 = dialog2; // Assegna il mock alla proprietà dialog2 del componente

      dialog2Ref.afterClosed.and.returnValue(of('')); // Simula un risultato che viene emesso
      dialog2.open.and.returnValue(dialog2Ref); // Quando viene chiamato open(), deve restituire dialog2Ref

      component.handleRowClickProdotto(mockDatiSegnalazioneProdotto[0]);

      expect(component.checkCurrentComponent).toBe('Prodotto');
      expect(component.setTipoSegnalazione).toHaveBeenCalledWith('Prodotto');
      expect(stepperService.datiSegnalazioneProdotto$.value).toBe(mockDatiSegnalazioneProdotto[0]);

      // Verifica che open sia stato chiamato con i parametri corretti
      expect(dialog2.open).toHaveBeenCalledWith(ModalModificaSegnalazioneComponent, {
        disableClose: true,
        width: 'auto',
        height: 'auto',
      });

      // Verifica che la funzione inizializzaPaginazione venga chiamata con '' dopo che il dialogo è chiuso
      dialog2Ref.afterClosed().subscribe((result: any) => {
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith('');
      });
    });
  });

  describe('handleRowClickContenzioso', () => {
    it('should open segnalazione details in a modal when table row is clicked and initialize pagination when closed', () => {
      spyOn(component, 'inizializzaPaginazione');
      spyOn(component, 'setTipoSegnalazione');

      const dialog2Ref = jasmine.createSpyObj('MatDialog', ['afterClosed']);
      component.dialog2 = dialog2; // Assegna il mock alla proprietà dialog2 del componente

      dialog2Ref.afterClosed.and.returnValue(of('')); // Simula un risultato che viene emesso
      dialog2.open.and.returnValue(dialog2Ref); // Quando viene chiamato open(), deve restituire dialog2Ref

      component.handleRowClickContenzioso(mockDatiSegnalazioneContenzioso[0]);

      expect(component.checkCurrentComponent).toBe('Contenzioso');
      expect(component.setTipoSegnalazione).toHaveBeenCalledWith('Contenzioso');
      expect(stepperService.datiSegnalazioneContenzioso$.value).toBe(
        mockDatiSegnalazioneContenzioso[0]
      );

      // Verifica che open sia stato chiamato con i parametri corretti
      expect(dialog2.open).toHaveBeenCalledWith(ModalModificaSegnalazioneComponent, {
        disableClose: true,
        width: 'auto',
        height: 'auto',
      });

      // Verifica che la funzione inizializzaPaginazione venga chiamata con '' dopo che il dialogo è chiuso
      dialog2Ref.afterClosed().subscribe((result: any) => {
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith('');
      });
    });
  });

  describe('showFieldSede', () => {
    it('should return "" if input values are null or undefined or empty', () => {
      let codiceSede: number | null | undefined;
      let nomeSede: string | null | undefined;

      // nomeSede undefined, codiceSede undefined
      codiceSede = null;
      nomeSede = undefined;

      let result = component.showFieldSede(codiceSede!, nomeSede!);
      expect(result).toBe('');

      // nomeSede defined, codiceSede undefined
      nomeSede = 'MARCHE';

      codiceSede = null;
      result = component.showFieldSede(codiceSede!, nomeSede);
      expect(result).toBe('');

      codiceSede = undefined;
      result = component.showFieldSede(codiceSede!, nomeSede);
      expect(result).toBe('');

      codiceSede = Number('');
      result = component.showFieldSede(codiceSede!, nomeSede);
      expect(result).toBe('');

      // codiceSede defined, nomeSede undefined
      codiceSede = 38000;

      nomeSede = null;
      result = component.showFieldSede(codiceSede, nomeSede!);
      expect(result).toBe('');

      nomeSede = undefined;
      result = component.showFieldSede(codiceSede, nomeSede!);
      expect(result).toBe('');

      nomeSede = '';
      result = component.showFieldSede(codiceSede, nomeSede!);
      expect(result).toBe('');
    });

    it('should return formatted data if input values are not null or not undefined or not empty', () => {
      spyOn(component, 'formatToSixDigits').and.returnValue('038000');

      const codiceSede = 38000;
      const nomeSede = 'MARCHE';

      const result = component.showFieldSede(codiceSede, nomeSede);

      expect(result).toBe('038000 - MARCHE');

      expect(component.formatToSixDigits).toHaveBeenCalledWith(codiceSede);
    });
  });

  describe('getSettoriMaterie', () => {
    it('should get list of settori materie', () => {
      const mockSettoriMaterie = JSON.parse(mockSettoriMaterieJSON);
      const mapReturnData = mockSettoriMaterie.map((settore: { id: any; nome: any }) => ({
        id: settore.id,
        nome: settore.nome,
        creato: new Date(Date.now()),
        aggiornato: new Date(Date.now()),
      }));
      settoreMateriaService.getSettoriConAreeProdotti.and.returnValue(of(mapReturnData));

      component.getSettoriMaterie();

      expect(settoreMateriaService.getSettoriConAreeProdotti).toHaveBeenCalled();
      expect(component.settoreMateria.length).toBe(mockSettoriMaterie.length + 1); // +1 because of { id: null, nome: '' }
      const unmapSettoreMateria = component.settoreMateria.map(
        (settore: { id: any; nome: any }) => ({
          id: settore.id,
          nome: settore.nome,
        })
      );
      expect(unmapSettoreMateria).toEqual([{ id: null, nome: '' }, ...mockSettoriMaterie]);
    });

    it('should return only empty object if list of settori from subscribe is empty', () => {
      settoreMateriaService.getSettoriConAreeProdotti.and.returnValue(of([]));

      component.getSettoriMaterie();

      expect(settoreMateriaService.getSettoriConAreeProdotti).toHaveBeenCalled();
      expect(component.settoreMateria.length).toBe(1);
      expect(component.settoreMateria).toEqual([{ id: null, nome: '' }]);
    });
  });

  describe('getAreaProdotto', () => {
    it('should get list of aree prodotto and call _filterArea', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      const areeMappate = mockAree.map((area: { id: any; nome: any }, index: number) => ({
        id: area.id,
        nome: area.nome,
        creato: new Date(Date.now()),
        aggiornato: new Date(Date.now()),
        idSettore: index + 1, // aggiungo un settore randomico di mock
      }));
      areeProdottiService.getAllAreaProdotto.and.returnValue(of(areeMappate));
      spyOn(component, '_filterArea');
      component.areaCtrl.setValue('test');

      component.getAreaProdotto();

      expect(areeProdottiService.getAllAreaProdotto).toHaveBeenCalled();
      expect(component.areaProdotto.length).toBe(mockAree.length + 1);
      const unmapAreeProdotto = component.areaProdotto.map((area: { id: any; nome: any }) => ({
        id: area.id,
        nome: area.nome,
      }));
      expect(unmapAreeProdotto).toEqual([{ id: null, nome: '' }, ...mockAree]);
      expect(component._filterArea).toHaveBeenCalledWith('test');
    });
  });

  describe('settoreMateriaSelezionatoConId', () => {
    it('should set areaProdotto to empty and call getAreaProdotto if idSettore is null or equal to -1', () => {
      const mockAree = JSON.parse(mockAreeJSON);
      component.areaProdotto = mockAree;
      spyOn(component, 'getAreaProdotto');

      let idSettore = -1;
      component.settoreMateriaSelezionatoConId(idSettore);

      expect(component.areaProdotto).toEqual([]);
      expect(component.getAreaProdotto).toHaveBeenCalled();

      idSettore = null!;
      component.settoreMateriaSelezionatoConId(idSettore);

      expect(component.areaProdotto).toEqual([]);
      expect(component.getAreaProdotto).toHaveBeenCalledTimes(2);
    });

    it('should fill list of aree prodotto and call _filterArea', fakeAsync(() => {
      const mockAree = JSON.parse(mockAreeJSON);
      const idSettore = 1;

      areeProdottiService.newGetAllByIdSettore.and.returnValue(of(mockAree));
      spyOn(component, '_filterArea');
      
      component.areaCtrl = new FormControl('');
      
      component.settoreMateriaSelezionatoConId(idSettore);
      
      fixture.detectChanges();
      tick();

      expect(areeProdottiService.newGetAllByIdSettore).toHaveBeenCalledWith(idSettore);
      expect(component.areaProdotto.length).toBe(mockAree.length + 1);
      expect(component.areaProdotto).toEqual([ { id: null, nome: '' }, ...mockAree ]);
      expect(component._filterArea).toHaveBeenCalledWith('');
      expect(component.settore).toBe(idSettore);

      component.areaCtrl.setValue(mockAree[0].nome);
      expect(component._filterArea).toHaveBeenCalledWith(mockAree[0].nome);
    }));
    
  });

  describe('loadTipologieContenzioso', () => {
    it('should get list of tipologie contenzioso', () => {
      const mockTipologieContenzioso = JSON.parse(mockTipologieContenziosoJSON);

      contenziosoService.getAllTioplogie.and.returnValue(of(mockTipologieContenzioso));

      component.loadTipologieContenzioso();

      expect(contenziosoService.getAllTioplogie).toHaveBeenCalled();
      expect(component.tipologieContenzioso.length).toBe(mockTipologieContenzioso.length + 1);
      expect(component.tipologieContenzioso).toEqual([
        { id: null, nome: '' },
        ...mockTipologieContenzioso,
      ]);
    });
  });

  describe('selectRole', () => {
    it('should return a single ruolo from multiruolo based on hierarchy', () => {
      component.role =
        ruoloAmministratore +
        '; ' +
        ruoloOperatoreCentraleAmministrativoDCO +
        '; ' +
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeRegionale +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;

      let result = component.selectRole();
      expect(result).toBe(ruoloAmministratore);

      component.role =
        ruoloOperatoreCentraleAmministrativoDCO +
        '; ' +
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeRegionale +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;

      result = component.selectRole();
      expect(result).toBe(ruoloOperatoreTerritorialeRegionale);

      component.role =
        ruoloOperatoreCentraleAmministrativoDCO +
        '; ' +
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;

      result = component.selectRole();
      expect(result).toBe(ruoloOperatoreTerritorialeProvinciale);
    });

    it('should return "" if multiruolo does not include ruoloAmministratore or ruoloRegionale or ruoloProvinciale', () => {
      component.role = ruoloOperatoreCentraleAmministrativoDCO + '; ' + ruoloOperatoreInformatico;
      let result = component.selectRole();
      expect(result).toBe('');
    });
  });

  describe('selectSede', () => {
    it('should return correct null or listaCodeSedi if logged role includes ruoloAmministratore or ruoloDCO', () => {
      component.role =
        ruoloAmministratore +
        '; ' +
        ruoloOperatoreCentraleAmministrativoDCO +
        '; ' +
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeRegionale +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;

      component.filtroperSede = null;
      let result = component.selectSede();
      expect(result).toBeNull();

      component.filtroperSede = '038000';
      result = component.selectSede();
      expect(result).toEqual(['038000']);
      expect(result?.length).toBe(1);
    });

    it('should return correct null or listaCodeSedi if logged role includes ruoloAmministratore or ruoloDCO', () => {
      component.role =
        ruoloOperatoreInformatico +
        '; ' +
        ruoloOperatoreTerritorialeRegionale +
        '; ' +
        ruoloOperatoreTerritorialeProvinciale;
      const mockSedi = JSON.parse(mockSediJSON);
      const mappedMockSedi = mockSedi.map((sede: { id: any; nome: any }) => ({
        sedeCode: sede.id,
        descSede: sede.nome,
      }));

      component.codiceSede = mappedMockSedi;
      component.filtroperSede = null;

      let result = component.selectSede();

      expect(result!.length).toBe(mockSedi.length);
      expect(result).toEqual(mockSedi.map((sede: { id: any }) => sede.id));

      component.codiceSede = mappedMockSedi;
      component.filtroperSede = '038000';

      result = component.selectSede();

      expect(result?.length).toBe(1);
      expect(result).toEqual(['038000']);
    });
  });

  describe('ricercaProdotto', () => {
    it('should call getRicercaProdotto and handle subscribe result', () => {
      rilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockDatiSegnalazioneProdotto));
      component.ricercaProdotto();

      expect(rilevazioniSrv.getRicercaProdotto).toHaveBeenCalledWith(
        /*Number(this.pageDimProdotto)*/ 20,
        /*this.pageCurrProdotto*/ 1,
        /*this.settore == -1 ? null : this.settore*/ null,
        /*this.area*/ null,
        /*this.selectSede()*/ null,
        /*this.validitaDal*/ null,
        /*this.validitaAl*/ null,
        /*this.idStatoSegnalazione*/ null,
        /*this.selectRole()*/ 'P12689',
        /*this.storageService.getItem('matricola')*/ null,
        /*this.ordineColonna*/ null,
        pagina,
        /*this.filtroperSede == null ? true : false*/ true
      );
      expect(component.isLoading).toBeFalse();
      expect(component.prodotti).toEqual(mockDatiSegnalazioneProdotto);
    });

    it('should display alert if data.length from subsribe is equal to 0', () => {
      expect(component.isLoading).toBeTrue();

      rilevazioniSrv.getRicercaProdotto.and.returnValue(of([]));

      component.ricercaProdotto();

      expect(component.isLoading).toBeFalse();
      expect(component.prodotti).toEqual([]);
      expect(component.prodotti.length).toBe(0);
      expect(dialog.alert).toHaveBeenCalledWith('Nessun risultato per il filtro selezionato!');
    });

    it('should handle subscribe error', () => {
      rilevazioniSrv.getRicercaProdotto.and.returnValue(throwError(() => 'Error fetching data.'));

      component.ricercaProdotto();

      expect(component.prodotti).toEqual([]);
      expect(component.errorMessage).toBe('Errore nel recupero dei prodotti');
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('ricercaContenzioso', () => {
    it('should call getRicercaContenzioso and handle subscribe result', () => {
      rilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockDatiSegnalazioneContenzioso));
      component.ricercaContenzioso();

      expect(rilevazioniSrv.getRicercaContenzioso).toHaveBeenCalledWith(
        /*Number(this.pageDimContenzioso)*/ 20,
        /*this.pageCurrContenzioso*/ 1,
        /*this.settore == -1 ? null : this.settore*/ null,
        /*this.area*/ null,
        /*this.selectSede()*/ null,
        /*this.validitaDal*/ null,
        /*this.validitaAl*/ null,
        /*this.idStatoSegnalazione*/ null,
        /*this.idTipologiaContenzioso*/ null,
        /*this.selectRole()*/ 'P12689',
        /*this.storageService.getItem('matricola')*/ null,
        /*this.ordineColonna*/ null,
        pagina,
        /*this.filtroperSede == null ? true : false*/ true
      );
      expect(component.isLoading).toBeFalse();
      expect(component.contenziosi).toEqual(mockDatiSegnalazioneContenzioso);
    });

    it('should display alert if data.length from subsribe is equal to 0 and tabProdotto is equal to  1', () => {
      expect(component.isLoading).toBeTrue();

      rilevazioniSrv.getRicercaContenzioso.and.returnValue(of([]));
      component.tabProdotto = 1;

      component.ricercaContenzioso();

      expect(component.isLoading).toBeFalse();
      expect(component.contenziosi).toEqual([]);
      expect(component.contenziosi.length).toBe(0);
      expect(dialog.alert).toHaveBeenCalledWith('Nessun risultato per il filtro selezionato!');
    });

    it('should handle subscribe error', () => {
      rilevazioniSrv.getRicercaContenzioso.and.returnValue(
        throwError(() => 'Error fetching data.')
      );

      component.ricercaContenzioso();

      expect(component.contenziosi).toEqual([]);
      expect(component.errorMessage).toBe('Errore nel recupero dei contenziosi');
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('onDateChange', () => {
    it('should check dates validity when form date is changed (for contenzioso)', fakeAsync(() => {
      spyOn(component, 'formatDate').and.callThrough();
  
      let typeDate: string = "startDateContenzioso";
  
      let yesterday = new Date();
      yesterday.setDate(new Date().getDate() - 1);
      let tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
  
      // Imposta domani come data inizio > di ieri come data fine
      component.dataInizioContenzioso.setValue(tomorrow); 
      component.dataFineContenzioso.setValue(yesterday);
  
      expect(component.dataInizioContenzioso.value).toBe(tomorrow);
      expect(component.dataFineContenzioso.value).toBe(yesterday);
  
      component.onDateChange(typeDate);
  
      expect(component.formatDate).toHaveBeenCalledWith(tomorrow, yesterday, 'Contenzioso');
  
      fixture.detectChanges();
      tick();
  
      // Verifica che la data di inizio venga resettata (perché la data fine è antecedente alla data inizio)
      expect(component.dataInizioContenzioso.value).toBeNull();
      expect(component.dataFineContenzioso.value).toEqual(yesterday);
    }));

    it('should check dates validity when form date is changed (for prodotto)', fakeAsync(() => {
      spyOn(component, 'formatDate').and.callThrough();
  
      let typeDate: string = "startDate";
  
      let yesterday = new Date();
      yesterday.setDate(new Date().getDate() - 1);
      let tomorrow = new Date();
      tomorrow.setDate(new Date().getDate() + 1);
  
      // Imposta domani come data inizio > di ieri come data fine
      component.dataInizio.setValue(tomorrow); 
      component.dataFine.setValue(yesterday);
  
      expect(component.dataInizio.value).toBe(tomorrow);
      expect(component.dataFine.value).toBe(yesterday);
  
      component.onDateChange(typeDate);
  
      expect(component.formatDate).toHaveBeenCalledWith(tomorrow, yesterday, 'Prodotto');
  
      fixture.detectChanges();
      tick();
  
      // Verifica che la data di inizio venga resettata (perché la data fine è antecedente alla data inizio)
      expect(component.dataInizio.value).toBeNull();
      expect(component.dataFine.value).toEqual(yesterday);
    }));
  });

  describe('filterDate', () => {
    it('should return data comparison if dataInizio is not null, else true', () => {
      //  caso: dataInizio = null
      let date = new Date();
      component.dataInizio.setValue(null);
      let result = component.filterDate(date);
      expect(result).toBeTrue();

      //  caso: currentDate > this.dataInizio.value
      date.setDate(date.getDate() + 1);
      component.dataInizio.setValue(new Date());
      result = component.filterDate(date);
      expect(result).toBeTrue();

      //  caso: currentDate = this.dataInizio.value
      date = new Date();
      component.dataInizio.setValue(new Date());
      result = component.filterDate(date);
      expect(result).toBeTrue();

      //  caso: currentDate < this.dataInizio.value
      date.setDate(date.getDate() - 1);
      component.dataInizio.setValue(new Date());
      result = component.filterDate(date);
      expect(result).toBeFalse();
    });
  });

  describe('openAreaPanel', () => {
    it('should open area panel when openAreaPanel is called', () => {
      component.openAreaPanel();
  
      // Verifichiamo che openPanel sia stato chiamato su areaAutocompleteTrigger
      expect(areaAutocompleteTriggerSpy).toHaveBeenCalled();
    });
  });

  describe('openSedePanel', () => {
    it('should open sede panel when openAreaPanel is called', () => {
      component.openSedePanel();
  
      // Verifichiamo che openPanel sia stato chiamato su sedeAutocompleteTrigger
      expect(sedeAutocompleteTriggerSpy).toHaveBeenCalled();
    });
  });

  describe('openTipologiaContenziosoPanel', () => {
    it('should open tipologia panel when tipologiaContenziosoPanel is called', () => {
      component.openTipologiaContenziosoPanel();
  
      // Verifichiamo che openPanel sia stato chiamato su tipologiaAutocompleteTrigger
      expect(tipologiaAutocompleteTriggerSpy).toHaveBeenCalled();
    });
  });

  describe('formatDateToISO', () => {
    it('should return formatted data if input parameter is not null or is not undefined, else ""', () => {
      let date: Date | null | undefined;

      date = null;
      let result = component.formatDateToISO(date);
      expect(result).toBe('');

      date = undefined;
      result = component.formatDateToISO(date);
      expect(result).toBe('');

      date = new Date();
      result = component.formatDateToISO(date);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}$/); // Verifica che il formato della data sia yyyy-mm-dd
    });
  });

  describe('onFocus', () => {
    it('should set ctrl value and then set timenout to set ctrl value if ctrl is variously not defined', fakeAsync(() => {
      let ctrl = new FormControl();

      ctrl.setValue(null);
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');

      ctrl.setValue(undefined);
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');

      ctrl.setValue(NaN);
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');

      ctrl.setValue('');
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');
      ctrl.setValue(0);

      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');

      ctrl.setValue(false);
      component.onFocus(ctrl);
      expect(ctrl.value).toBe(' ');
      tick(1);
      expect(ctrl.value).toBe('');
    }));
  });

  //  TEST PAGINAZIONE: TAB PRODOTTO
  describe('resetPaginazioneProdotto', () => {
    it('should reset paginator data', () => {
      component.pageCurrProdotto = 5;
      component.baseProdotto = 2;
      component.layoutDimProdotto = 10;
      component.layoutNumbersProdotto = [1, 2, 3, 4, 5];
  
      component.resetPaginazioneProdotto();
  
      expect(component.pageCurrProdotto).toBe(1);
      expect(component.baseProdotto).toBe(1);
      expect(component.layoutDimProdotto).toBe(6);
      expect(component.layoutNumbersProdotto).toEqual([]);
    })
  });

  describe('scorriLayoutProdotto', () => {
    it('should calculate layoutNumbersProdotto correctly on first page', () => {
      // Imposta le variabili per la prima pagina
      component.layoutDimProdotto = 5;
      component.pageCurrProdotto = 1;
      component.pageNumProdotto = 10;
  
      component.scorriLayoutProdotto();
  
      // Verifica che i numeri siano corretti (prima pagina)
      expect(component.layoutNumbersProdotto).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should calculate layoutNumbersProdotto correctly on last page', () => {
      // Imposta le variabili per l'ultima pagina
      component.layoutDimProdotto = 5;
      component.pageCurrProdotto = 10;
      component.pageNumProdotto = 10;
  
      component.scorriLayoutProdotto();
  
      // Verifica che i numeri siano corretti (ultima pagina)
      expect(component.layoutNumbersProdotto).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should handle the case where the last page has fewer items', () => {
      // Imposta le variabili per una situazione in cui l'ultima pagina ha meno numeri
      component.layoutDimProdotto = 5;
      component.pageCurrProdotto = 9;
      component.pageNumProdotto = 10;
  
      component.scorriLayoutProdotto();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersProdotto).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should calculate layoutNumbersProdotto correctly with fewer pages', () => {
      // Imposta le variabili per un caso con poche pagine
      component.layoutDimProdotto = 5;
      component.pageCurrProdotto = 1;
      component.pageNumProdotto = 3;
  
      component.scorriLayoutProdotto();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersProdotto).toEqual([1, 2, 3]);
    });
  
    it('should reset layoutNumbersProdotto on first page with a large size', () => {
      // Imposta una configurazione che va oltre il numero massimo
      component.layoutDimProdotto = 6;
      component.pageCurrProdotto = 1;
      component.pageNumProdotto = 20;
  
      component.scorriLayoutProdotto();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersProdotto).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('pageNextProdotto', () => {
    it('should increment pageCurrProdotto and call scorriLayoutProdotto and inizializzaPaginazione when pageCurrProdotto < pageNumProdotto', () => {
      component.pageCurrProdotto = 1;
      component.pageNumProdotto = 5;
      component.layoutDimProdotto = 5;
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageNextProdotto('Prodotto');
  
      // Verifica che la pagina corrente sia stata incrementata
      expect(component.pageCurrProdotto).toBe(2);  // La pagina deve passare da 1 a 2
  
      expect(component.scorriLayoutProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
    });
  
    it('should not increment pageCurrProdotto if it is the last page', () => {
      component.pageCurrProdotto = 5;
      component.pageNumProdotto = 5;
      component.layoutDimProdotto = 5;
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageNextProdotto('Prodotto');
  
      // Verifica che la pagina corrente non sia stata incrementata
      expect(component.pageCurrProdotto).toBe(5);
  
      expect(component.scorriLayoutProdotto).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('pagePrevProdotto', () => {
    it('should decrement pageCurrProdotto and call scorriLayoutProdotto and inizializzaPaginazione when pageCurrProdotto > 1', () => {
      component.pageCurrProdotto = 2;  // Pagina corrente maggiore di 1
      component.pageNumProdotto = 5;  // Totale pagine
      component.layoutDimProdotto = 5;
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pagePrevProdotto('Prodotto');
  
      // Verifica che la pagina corrente sia stata decrementata
      expect(component.pageCurrProdotto).toBe(1);  // La pagina deve passare da 2 a 1
  
      expect(component.scorriLayoutProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
    });
  
    it('should not decrement pageCurrProdotto if it is the first page', () => {
      component.pageCurrProdotto = 1;  // Pagina corrente è 1 (prima pagina)
      component.pageNumProdotto = 5;
      component.layoutDimProdotto = 5;
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pagePrevProdotto('Prodotto');
  
      // Verifica che la pagina corrente non sia stata decrementata
      expect(component.pageCurrProdotto).toBe(1);  // La pagina non deve cambiare (è già la prima)
  
      expect(component.scorriLayoutProdotto).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('setPageCurrProdotto', () => {
    it('should set pageCurrProdotto to the specified page and call inizializzaPaginazione', () => {
      spyOn(component, 'inizializzaPaginazione');
  
      const page = 3;
      const tipoSegnalazione = 'Prodotto';
  
      component.setPageCurrProdotto(page, tipoSegnalazione);
  
      expect(component.pageCurrProdotto).toBe(page);
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
    });
  });
  
  describe('pageFirstProdotto', () => {
    it('should set pageCurrProdotto to 1 and call scorriLayoutProdotto and inizializzaPaginazione when pageCurrProdotto > 1', () => {
      component.pageCurrProdotto = 2; // Imposta una pagina corrente maggiore di 1
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageFirstProdotto();
      
      expect(component.pageCurrProdotto).toBe(1); // Verifica che la pagina corrente sia stata impostata a 1
  
      expect(component.scorriLayoutProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
    });
  
    it('should not change pageCurrProdotto and not call scorriLayoutProdotto or inizializzaPaginazione if pageCurrProdotto is already 1', () => {
      component.pageCurrProdotto = 1; // Imposta la pagina corrente a 1
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageFirstProdotto();
  
      expect(component.pageCurrProdotto).toBe(1);   // Verifica che la pagina corrente non sia cambiata (è già 1)
  
      expect(component.scorriLayoutProdotto).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('pageLastProdotto', () => {
    it('should set pageCurrProdotto to pageNumProdotto and call scorriLayoutProdotto and inizializzaPaginazione when pageCurrProdotto < pageNumProdotto', () => {
      // Imposta una pagina corrente inferiore al numero totale di pagine
      component.pageCurrProdotto = 3;
      component.pageNumProdotto = 5;  
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageLastProdotto();
  
      // Verifica che la pagina corrente sia stata impostata all'ultima pagina (pageNumProdotto)
      expect(component.pageCurrProdotto).toBe(component.pageNumProdotto); // La pagina corrente deve essere 5
  
      expect(component.scorriLayoutProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
    });
  
    it('should not change pageCurrProdotto and not call scorriLayoutProdotto or inizializzaPaginazione if pageCurrProdotto is already the last page', () => {
      // Imposta la pagina corrente all'ultima pagina
      component.pageCurrProdotto = 5;
      component.pageNumProdotto = 5;  // Imposta pageNumProdotto a 5 per simulare che siamo già all'ultima pagina
  
      spyOn(component, 'scorriLayoutProdotto');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageLastProdotto();
  
      // Verifica che la pagina corrente non sia cambiata (è già l'ultima pagina)
      expect(component.pageCurrProdotto).toBe(5); // La pagina non deve cambiare
  
      expect(component.scorriLayoutProdotto).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  //  TEST PAGINAZIONE: TAB CONTENZIOSO
  describe('resetPaginazioneContenzioso', () => {
    it('should reset paginator data', () => {
      component.pageCurrContenzioso = 5;
      component.baseContenzioso = 2;
      component.layoutDimContenzioso = 10;
      component.layoutNumbersContenzioso = [1, 2, 3, 4, 5];

      component.resetPaginazioneContenzioso();

      expect(component.pageCurrContenzioso).toBe(1);
      expect(component.baseContenzioso).toBe(1);
      expect(component.layoutDimContenzioso).toBe(6);
      expect(component.layoutNumbersContenzioso).toEqual([]);
    });
  });
  
  describe('scorriLayoutContenzioso', () => {
    it('should calculate layoutNumbersContenzioso correctly on first page', () => {
      // Imposta le variabili per la prima pagina
      component.layoutDimContenzioso = 5;
      component.pageCurrContenzioso = 1;
      component.pageNumContenzioso = 10;
  
      component.scorriLayoutContenzioso();
  
      // Verifica che i numeri siano corretti (prima pagina)
      expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should calculate layoutNumbersContenzioso correctly on last page', () => {
      // Imposta le variabili per l'ultima pagina
      component.layoutDimContenzioso = 5;
      component.pageCurrContenzioso = 10;
      component.pageNumContenzioso = 10;
  
      component.scorriLayoutContenzioso();
  
      // Verifica che i numeri siano corretti (ultima pagina)
      expect(component.layoutNumbersContenzioso).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should handle the case where the last page has fewer items', () => {
      // Imposta le variabili per una situazione in cui l'ultima pagina ha meno numeri
      component.layoutDimContenzioso = 5;
      component.pageCurrContenzioso = 9;
      component.pageNumContenzioso = 10;
  
      component.scorriLayoutContenzioso();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersContenzioso).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should calculate layoutNumbersContenzioso correctly with fewer pages', () => {
      // Imposta le variabili per un caso con poche pagine
      component.layoutDimContenzioso = 5;
      component.pageCurrContenzioso = 1;
      component.pageNumContenzioso = 3;
  
      component.scorriLayoutContenzioso();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3]);
    });
  
    it('should reset layoutNumbersContenzioso on first page with a large size', () => {
      // Imposta una configurazione che va oltre il numero massimo
      component.layoutDimContenzioso = 6;
      component.pageCurrContenzioso = 1;
      component.pageNumContenzioso = 20;
  
      component.scorriLayoutContenzioso();
  
      // Verifica che i numeri siano corretti
      expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('pageNextContenzioso', () => {
    it('should increment pageCurrContenzioso and call scorriLayoutContenzioso and inizializzaPaginazione when pageCurrContenzioso < pageNumContenzioso', () => {
      component.pageCurrContenzioso = 1;
      component.pageNumContenzioso = 5;
      component.layoutDimContenzioso = 5;
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageNextContenzioso('Contenzioso');
  
      // Verifica che la pagina corrente sia stata incrementata
      expect(component.pageCurrContenzioso).toBe(2);  // La pagina deve passare da 1 a 2
  
      expect(component.scorriLayoutContenzioso).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  
    it('should not increment pageCurrContenzioso if it is the last page', () => {
      component.pageCurrContenzioso = 5;
      component.pageNumContenzioso = 5;
      component.layoutDimContenzioso = 5;
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageNextContenzioso('Contenzioso');
  
      // Verifica che la pagina corrente non sia stata incrementata
      expect(component.pageCurrContenzioso).toBe(5);
  
      expect(component.scorriLayoutContenzioso).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('pagePrevContenzioso', () => {
    it('should decrement pageCurrContenzioso and call scorriLayoutContenzioso and inizializzaPaginazione when pageCurrContenzioso > 1', () => {
      component.pageCurrContenzioso = 2;  // Pagina corrente maggiore di 1
      component.pageNumContenzioso = 5;  // Totale pagine
      component.layoutDimContenzioso = 5;
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pagePrevContenzioso('Contenzioso');
  
      // Verifica che la pagina corrente sia stata decrementata
      expect(component.pageCurrContenzioso).toBe(1);  // La pagina deve passare da 2 a 1
  
      expect(component.scorriLayoutContenzioso).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  
    it('should not decrement pageCurrContenzioso if it is the first page', () => {
      component.pageCurrContenzioso = 1;  // Pagina corrente è 1 (prima pagina)
      component.pageNumContenzioso = 5;
      component.layoutDimContenzioso = 5;
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pagePrevContenzioso('Contenzioso');
  
      // Verifica che la pagina corrente non sia stata decrementata
      expect(component.pageCurrContenzioso).toBe(1);  // La pagina non deve cambiare (è già la prima)
  
      expect(component.scorriLayoutContenzioso).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('setPageCurrContenzioso', () => {
    it('should set pageCurrContenzioso to the specified page and call inizializzaPaginazione', () => {
      spyOn(component, 'inizializzaPaginazione');
  
      const page = 3;
      const tipoSegnalazione = 'Contenzioso';
  
      component.setPageCurrContenzioso(page, tipoSegnalazione);
  
      expect(component.pageCurrContenzioso).toBe(page);
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
    });
  });
  
  describe('pageFirstContenzioso', () => {
    it('should set pageCurrContenzioso to 1 and call scorriLayoutContenzioso and inizializzaPaginazione when pageCurrContenzioso > 1', () => {
      component.pageCurrContenzioso = 2; // Imposta una pagina corrente maggiore di 1
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageFirstContenzioso();
      
      expect(component.pageCurrContenzioso).toBe(1); // Verifica che la pagina corrente sia stata impostata a 1
  
      expect(component.scorriLayoutContenzioso).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  
    it('should not change pageCurrContenzioso and not call scorriLayoutContenzioso or inizializzaPaginazione if pageCurrContenzioso is already 1', () => {
      component.pageCurrContenzioso = 1; // Imposta la pagina corrente a 1
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageFirstContenzioso();
  
      expect(component.pageCurrContenzioso).toBe(1);   // Verifica che la pagina corrente non sia cambiata (è già 1)
  
      expect(component.scorriLayoutContenzioso).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });

  describe('pageLastContenzioso', () => {
    it('should set pageCurrContenzioso to pageNumContenzioso and call scorriLayoutContenzioso and inizializzaPaginazione when pageCurrContenzioso < pageNumContenzioso', () => {
      // Imposta una pagina corrente inferiore al numero totale di pagine
      component.pageCurrContenzioso = 3;
      component.pageNumContenzioso = 5;  
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageLastContenzioso();
  
      // Verifica che la pagina corrente sia stata impostata all'ultima pagina (pageNumContenzioso)
      expect(component.pageCurrContenzioso).toBe(component.pageNumContenzioso); // La pagina corrente deve essere 5
  
      expect(component.scorriLayoutContenzioso).toHaveBeenCalled();
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  
    it('should not change pageCurrContenzioso and not call scorriLayoutContenzioso or inizializzaPaginazione if pageCurrContenzioso is already the last page', () => {
      // Imposta la pagina corrente all'ultima pagina
      component.pageCurrContenzioso = 5;
      component.pageNumContenzioso = 5;  // Imposta pageNumContenzioso a 5 per simulare che siamo già all'ultima pagina
  
      spyOn(component, 'scorriLayoutContenzioso');
      spyOn(component, 'inizializzaPaginazione');
  
      component.pageLastContenzioso();
  
      // Verifica che la pagina corrente non sia cambiata (è già l'ultima pagina)
      expect(component.pageCurrContenzioso).toBe(5); // La pagina non deve cambiare
  
      expect(component.scorriLayoutContenzioso).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });
  });
});
