import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GestioneSegnalazioneGerarchicoComponent } from './gestione-segnalazione-gerarchico.component';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { AreaService } from '../data.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { StepperService } from '@shared/services/stepper.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContenziosoService } from '@shared/services/contenzioso.service';
import { StorageService } from '@shared';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { segnalazioneContenzioso } from '@shared/interfaces/segnalazioneContenzioso';
import { segnalazioneProdotto } from '@shared/interfaces/segnalazioneProdotto';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatOptionModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Aree } from '@shared/services/areeservice.service';
import { Settore } from '@shared/models/settore-materia.model';

describe('GestioneSegnalazioneGerarchicoComponent', () => {
  let component: GestioneSegnalazioneGerarchicoComponent;
  let fixture: ComponentFixture<GestioneSegnalazioneGerarchicoComponent>;
  let mockMtxDialog: jasmine.SpyObj<MtxDialog>;
  let mockAreeSrv: jasmine.SpyObj<Aree>;
  let mockRilevazioniSrv: jasmine.SpyObj<RilevazioneService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockStepperSrv: jasmine.SpyObj<StepperService>;
  let mockSettoreMateriaSrv: jasmine.SpyObj<SettoreMateriaService>;
  let mockTerritorioSrv: jasmine.SpyObj<TerritorioService>;
  let mockContenziosoSrv: jasmine.SpyObj<ContenziosoService>;
  let mockStorageSrv: jasmine.SpyObj<StorageService>;
  let mockActivatedRoute: jasmine.SpyObj<ActivatedRoute>;
  const mockData = [
    {
      areaId: 1,
      areaProdotto: 'Prodotto A',
      data1: '2024-01-01',
      data2: '2024-01-15',
      id: 1,
      inviata: true,
      sede: 'Sede A',
      sedeId: 101,
      settoreId: 201,
      settoreMateria: 'Materia A',
      statoDesc: 'Stato A',
      statoId: 301,
      nuovoAspetto: false
    },];

    const mockDataContenzioso = [{
        areaId: 1,
        areaProdotto: 'Prodotto A',
        contenziosoDesc: 'Amministrativo',
        contenziosoId: 1,
        data1: '2024-01-01',
        data2: '2024-01-15',
        id: 1,
        inviata: true,
        sede: 'Sede A',
        sedeId: 101,
        settoreId: 201,
        settoreMateria: 'Materia A',
        statoDesc: 'Stato A',
        statoId: 1,
    },];

  beforeEach(async () => {

    mockStepperSrv = jasmine.createSpyObj('StepperService', ['dialogClosed$']);
    mockAreeSrv = jasmine.createSpyObj('AreaService', ['getAllAreaProdotto', 'newGetAllByIdSettore']);
    mockSettoreMateriaSrv = jasmine.createSpyObj('SettoreMateriaService', ['getSettoriConAreeProdotti']);
    mockRilevazioniSrv = jasmine.createSpyObj('RilevazioneService', ['contaRicercaProdotto', 'contaRicercaContenzioso', 'getRicercaProdotto', 'getRicercaContenzioso']);
    mockTerritorioSrv = jasmine.createSpyObj('TerritorioService', ['getSedi']);
    mockContenziosoSrv = jasmine.createSpyObj('ContenziosoService', ['getAllTioplogie']);
    mockStorageSrv = jasmine.createSpyObj('StorageService',['getItem']);
    mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', [], { snapshot: { params: {} } });
    mockMtxDialog = jasmine.createSpyObj('MtxDialog', ['alert']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open', ['afterClosed']]);

    const inserimentoTipoSegnalazioneSubject = new BehaviorSubject<string | undefined>(undefined);
    const datiSegnalazioneProdottoSubject = new BehaviorSubject<segnalazioneProdotto | undefined>(undefined);
    const datiSegnalazioneContenziosoSubject = new BehaviorSubject<segnalazioneContenzioso | undefined>(undefined);
    const dialogClosedSubject = new Subject<void>();

    mockStepperSrv = {
      inserimentoTipoSegnalazione$: inserimentoTipoSegnalazioneSubject.asObservable(),
      datiSegnalazioneProdotto$: datiSegnalazioneProdottoSubject.asObservable(),
      datiSegnalazioneContenzioso$: datiSegnalazioneContenziosoSubject.asObservable(),
      dialogClosed$: dialogClosedSubject.asObservable(),
    } as jasmine.SpyObj<StepperService>;

    mockSettoreMateriaSrv.getSettoriConAreeProdotti.and.returnValue(of([]));
    mockAreeSrv.getAllAreaProdotto.and.returnValue(of([]));
    mockTerritorioSrv.getSedi.and.returnValue(of([]));
    mockContenziosoSrv.getAllTioplogie.and.returnValue(of([]));
    mockRilevazioniSrv.contaRicercaProdotto.and.returnValue(
      of({ count: 50 })
    );
    mockRilevazioniSrv.contaRicercaContenzioso.and.returnValue(
      of({ count: 50 })
    );
    mockRilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockData));
    mockRilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockDataContenzioso))

    mockStorageSrv.getItem.and.callFake((key: string) => {
      if (key === 'listaSedi') return ['mockCodiceSede1', 'mockCodiceSede2'];
      if (key === 'allroles') return 'P12689';
      return null;
    });

    await TestBed.configureTestingModule({
      declarations: [ GestioneSegnalazioneGerarchicoComponent ],
      providers: [
        { provide: MtxDialog, useValue: mockMtxDialog },
        { provide: AreaService, useValue: mockAreeSrv },
        { provide: RilevazioneService, useValue: mockRilevazioniSrv },
        { provide: MatDialog, useValue: mockDialog },
        { provide: StepperService, useValue: mockStepperSrv },
        { provide: SettoreMateriaService, useValue: mockSettoreMateriaSrv },
        { provide: TerritorioService, useValue: mockTerritorioSrv },
        { provide: ContenziosoService, useValue: mockContenziosoSrv },
        { provide: StorageService, useValue: mockStorageSrv },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: StepperService, useValue: mockStepperSrv },
        { provide: MtxDialog, useValue: mockMtxDialog },
        FormBuilder,

      ],
      imports: [
        MatOptionModule,
        RouterTestingModule,
        MatFormFieldModule,
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
        FormsModule,
        MatInputModule,
        MatSelectModule,
        MatTabsModule,
        MatSlideToggleModule

      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioneSegnalazioneGerarchicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    describe('Reset function', () => {
      it('should reset form and properties correctly in resetFiltro', () => {
        component.resetFiltro();

        // Verifica che tutte le proprietà del form siano azzerate
        expect(component.formRicerca.value.dataInizio).toBeNull();
        expect(component.formRicerca.value.dataFine).toBeNull();
        expect(component.formRicerca.value.dataScadenza).toBeFalse();
        expect(component.formRicerca.value.dimensione).toBeNull();
        expect(component.formRicerca.value.idAttore).toBeNull();
        expect(component.formRicerca.value.idProceduraRiferimento).toBeNull();
        expect(component.formRicerca.value.idProdottoTipLav).toBeNull();
        expect(component.formRicerca.value.idTipologiaRicorso).toBeNull();
        expect(component.formRicerca.value.pagina).toBe(1);
        expect(component.formRicerca.value.area).toBeNull();
        expect(component.formRicerca.value.settore).toBeNull();
        expect(component.formRicerca.value.idSottoarea).toBeNull();
        expect(component.formRicerca.value.idProdotto).toBeNull();
        expect(component.sottoCatDisab).toBeTrue();
        expect(component.prodottoDisab).toBeTrue();
        expect(component.prodottoTipLavDisab).toBeTrue();
        expect(component.isLoading).toBeTrue();
        expect(component.ricercaAtt).toBeFalse();
      });

      it('should reset the paginator properties correctly in resetPaginazioneProdotto', () => {
        component.pageCurrProdotto = 5
        component.baseProdotto = 5;
        component.layoutDimProdotto = 5;
        component.layoutNumbersProdotto = [1,2,3,4,5];

        component.resetPaginazioneProdotto();
        expect(component.pageCurrProdotto).toEqual(1);
        expect(component.baseProdotto).toEqual(1);
        expect(component.layoutDimProdotto).toEqual(6);
        expect(component.layoutNumbersProdotto).toEqual([]);

      });

      it('should reset the paginator properties correctly in resetPaginazioneContenzioso', () => {
        component.pageCurrContenzioso = 5
        component.baseContenzioso = 5;
        component.layoutDimContenzioso = 5;
        component.layoutNumbersContenzioso = [1,2,3,4,5];

        component.resetPaginazioneContenzioso();
        expect(component.pageCurrContenzioso).toEqual(1);
        expect(component.baseContenzioso).toEqual(1);
        expect(component.layoutDimContenzioso).toEqual(6);
        expect(component.layoutNumbersContenzioso).toEqual([]);
      });

    });

    describe('Prodotto paginator and layout', () => {
      it('should go to the first page of Prodotto', () => {
        component.pageCurrProdotto = 2;
        component.baseProdotto = 2;
        component.pageNumProdotto = 6;

        spyOn(component, 'ricercaProdotto');

        component.pageFirstProdotto();

        expect(component.pageCurrProdotto).toBe(1);
        expect(component.baseProdotto).toBe(1);
        expect(component.layoutNumbersProdotto).toEqual([1, 2, 3, 4, 5, 6]);
        expect(component.ricercaProdotto).toHaveBeenCalled();
      });

      it('should go to the last page of Prodotto', () => {
        component.pageCurrProdotto = 1;
        component.baseProdotto = 2;
        component.pageNumProdotto = 6;

        spyOn(component, 'ricercaProdotto');

        component.pageLastProdotto();

        expect(component.pageCurrProdotto).toBe(6);
        expect(component.baseProdotto).toBe(1); // Perché 6 - 5 = 1
        expect(component.layoutNumbersProdotto).toEqual([1, 2, 3, 4, 5, 6]);
        expect(component.ricercaProdotto).toHaveBeenCalled();
      });

      it('should go to the first page of Contenzioso', () => {
        component.pageCurrContenzioso = 2;
        component.baseContenzioso = 2;
        component.pageNumContenzioso = 6;

        spyOn(component, 'ricercaContenzioso');

        component.pageFirstContenzioso();

        expect(component.pageCurrContenzioso).toBe(1);
        expect(component.baseContenzioso).toBe(1);
        expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3, 4, 5, 6]);
        expect(component.ricercaContenzioso).toHaveBeenCalled();
      });

      it('should go to the last page of Contenzioso', () => {
        component.pageCurrContenzioso = 1;
        component.baseContenzioso = 2;
        component.pageNumContenzioso = 6;

        spyOn(component, 'ricercaContenzioso');

        component.pageLastContenzioso();

        expect(component.pageCurrContenzioso).toBe(6);
        expect(component.baseContenzioso).toBe(1);
        expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3, 4, 5, 6]);
        expect(component.ricercaContenzioso).toHaveBeenCalled();
      });

      it('should go to the next page of Prodotto', () => {
        component.pageCurrProdotto = 2;
        component.pageNumProdotto = 5;
        const tipoSegnalazione = 'Prodotto';

        spyOn(component, 'aggiornaLayoutPaginazioneProdotto');
        spyOn(component, 'inizializzaPaginazione');

        component.pageNextProdotto(tipoSegnalazione);

        expect(component.pageCurrProdotto).toBe(3);
        expect(component.aggiornaLayoutPaginazioneProdotto).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should not go to the next page if already on the last page', () => {
        component.pageCurrProdotto = 5;
        component.pageNumProdotto = 5;
        const tipoSegnalazione = 'Prodotto';

        spyOn(component, 'aggiornaLayoutPaginazioneProdotto');
        spyOn(component, 'inizializzaPaginazione');

        component.pageNextProdotto(tipoSegnalazione);

        expect(component.pageCurrProdotto).toBe(5);
        expect(component.aggiornaLayoutPaginazioneProdotto).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
      });

      it('should go to the previous page of Prodotto', () => {
        component.pageCurrProdotto = 3;
        component.pageNumProdotto = 5;
        const tipoSegnalazione = 'Prodotto';

        spyOn(component, 'aggiornaLayoutPaginazioneProdotto');
        spyOn(component, 'inizializzaPaginazione');

        component.pagePrevProdotto(tipoSegnalazione);

        expect(component.pageCurrProdotto).toBe(2);
        expect(component.aggiornaLayoutPaginazioneProdotto).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should not go to the previous page if already on the first page', () => {
        component.pageCurrProdotto = 1;
        const tipoSegnalazione = 'Prodotto';

        spyOn(component, 'aggiornaLayoutPaginazioneProdotto');
        spyOn(component, 'inizializzaPaginazione');

        component.pagePrevProdotto(tipoSegnalazione);

        expect(component.pageCurrProdotto).toBe(1);
        expect(component.aggiornaLayoutPaginazioneProdotto).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
      });

      it('should go to the next page of Contenzioso', () => {
        component.pageCurrContenzioso = 2;
        component.pageNumContenzioso = 5;
        const tipoSegnalazione = 'Contezioso';

        spyOn(component, 'aggiornaLayoutPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');

        component.pageNextContenzioso(tipoSegnalazione);

        expect(component.pageCurrContenzioso).toBe(3);
        expect(component.aggiornaLayoutPaginazioneContenzioso).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should not go to the next page if already on the last page', () => {
        component.pageCurrContenzioso = 5;
        component.pageNumContenzioso = 5;
        const tipoSegnalazione = 'Contezioso';

        spyOn(component, 'aggiornaLayoutPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');

        component.pageNextContenzioso(tipoSegnalazione);

        expect(component.pageCurrContenzioso).toBe(5);
        expect(component.aggiornaLayoutPaginazioneContenzioso).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
      });

      it('should go to the previous page of Contezioso', () => {
        component.pageCurrContenzioso = 3;
        component.pageNumContenzioso = 5;
        const tipoSegnalazione = 'Contezioso';

        spyOn(component, 'aggiornaLayoutPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');

        component.pagePrevContenzioso(tipoSegnalazione);

        expect(component.pageCurrContenzioso).toBe(2);
        expect(component.aggiornaLayoutPaginazioneContenzioso).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should not go to the previous page if already on the first page', () => {
        component.pageCurrContenzioso = 1;
        const tipoSegnalazione = 'Contezioso';

        spyOn(component, 'aggiornaLayoutPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');

        component.pagePrevContenzioso(tipoSegnalazione);

        expect(component.pageCurrContenzioso).toBe(1);
        expect(component.aggiornaLayoutPaginazioneContenzioso).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
      });

      it('should set the current page of pageCurrProdotto', () => {
        component.pageCurrProdotto = 1;
        const tipoSegnalazione = "Prodotto";
        const pageNum = 2;

        spyOn(component, "aggiornaLayoutPaginazioneProdotto");
        spyOn(component, "inizializzaPaginazione");

        component.setPageCurrProdotto(pageNum, tipoSegnalazione);
        expect(component.pageCurrProdotto).toBe(2);
        expect(component.aggiornaLayoutPaginazioneProdotto).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should set the current page of PaceCurrContenzioso', () => {
        component.pageCurrContenzioso = 1;
        const tipoSegnalazione = "Contezioso";
        const pageNum = 2;

        spyOn(component, "aggiornaLayoutPaginazioneContenzioso");
        spyOn(component, "inizializzaPaginazione");

        component.setPageCurrContenzioso(pageNum, tipoSegnalazione);
        expect(component.pageCurrContenzioso).toBe(2);
        expect(component.aggiornaLayoutPaginazioneContenzioso).toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith(tipoSegnalazione);
      });

      it('should update layoutNumbersProdotto correctly in the middle of the range', () => {
        component.pageCurrProdotto = 5;
        component.layoutDimProdotto = 5;
        component.pageNumProdotto = 10;

        component.aggiornaLayoutPaginazioneProdotto();

        expect(component.layoutNumbersProdotto).toEqual([5,6,7,8,9]);
      });

      it('should update layoutNumbersProdotto correctly at the start of the range', () => {
        component.pageCurrProdotto = 1;
        component.layoutDimProdotto = 5;
        component.pageNumProdotto = 10;

        component.aggiornaLayoutPaginazioneProdotto();

        expect(component.layoutNumbersProdotto).toEqual([1,2,3,4,5]);
      });

      it('should update layoutNumbersProdotto correctly at the end of the range', () => {
        component.pageCurrProdotto = 10;
        component.layoutDimProdotto = 5;
        component.pageNumProdotto = 10;

        component.aggiornaLayoutPaginazioneProdotto();

        expect(component.layoutNumbersProdotto).toEqual([6,7,8,9,10]);
      });

      /*--------------------------------------------------------*/
      it('should update layoutNumbersContenzioso correctly in the middle of the range', () => {
        component.pageCurrContenzioso = 5;
        component.layoutDimContenzioso = 5;
        component.pageNumContenzioso = 10;

        component.aggiornaLayoutPaginazioneContenzioso();

        expect(component.layoutNumbersContenzioso).toEqual([5,6,7,8,9]);
      });

      it('should update layoutNumbersContenzioso correctly at the start of the range', () => {
        component.pageCurrContenzioso = 1;
        component.layoutDimContenzioso = 5;
        component.pageNumContenzioso = 10;
        component.aggiornaLayoutPaginazioneContenzioso();
        expect(component.layoutNumbersContenzioso).toEqual([1,2,3,4,5]);
      });

      it('should update layoutNumbersContenzioso correctly at the end of the range', () => {
        component.pageCurrContenzioso = 10;
        component.layoutDimContenzioso = 5;
        component.pageNumContenzioso = 10;
        component.aggiornaLayoutPaginazioneContenzioso();
        expect(component.layoutNumbersContenzioso).toEqual([6,7,8,9,10]);
      });

      it('should call resetPaginazioneProdotto and inizializzaPaginazione for "Prodotto"', () => {
        spyOn(component, 'resetPaginazioneProdotto');
        spyOn(component, 'resetPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');
        component.modificaPaginazione('Prodotto');

        expect(component.resetPaginazioneProdotto).toHaveBeenCalled();
        expect(component.resetPaginazioneContenzioso).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
      });

      it('should call resetPaginazioneContenzioso and inizializzaPaginazione for "Contenzioso"', () => {
        spyOn(component, 'resetPaginazioneProdotto');
        spyOn(component, 'resetPaginazioneContenzioso');
        spyOn(component, 'inizializzaPaginazione');
        component.modificaPaginazione('Contenzioso');

        expect(component.resetPaginazioneContenzioso).toHaveBeenCalled();
        expect(component.resetPaginazioneProdotto).not.toHaveBeenCalled();
        expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
      });
    });

    describe('SettoreMateriaService', () => {
      it('should update settoreMateria with data array from the service', () => {
        const mockData: Settore[] = [
          { id: 1, nome: 'Settore 1', creato: new Date(), aggiornato: new Date() },
          { id: 2, nome: 'Settore 2', creato: new Date(), aggiornato: new Date() }
        ];
        const expectedData = [{ id: null, nome: '' }, ...mockData];

        mockSettoreMateriaSrv.getSettoriConAreeProdotti.and.returnValue(of(mockData));

        component.getSettoriMaterie();

        expect(component.settoreMateria).toEqual(expectedData);
      });

      it('should update settoreMateria with only an empty object when service returns an empty array', () => {
        const mockData: Settore[] = [];
        const expectedData = [{ id: null, nome: '' }];

        mockSettoreMateriaSrv.getSettoriConAreeProdotti.and.returnValue(of(mockData));

        component.getSettoriMaterie();

        expect(component.settoreMateria).toEqual(expectedData);
      });

    });

    describe('_filterSettore', () => {
      beforeEach(() => {
        component.settoreMateria = [
          { id: 1, nome: 'Settore A' },
          { id: 2, nome: 'Settore B' },
          { id: 3, nome: 'Altro Settore' },
        ];
      });

      it('should return filtered SettoreMateria array based on input', () => {
        const result = component['_filterSettore']('b');
        expect(result).toEqual([
          { id: 2, nome: 'Settore B' },
        ]);
      });

      it('should return an empty array of settoreMateria if no match is found', () => {
        const result = component['_filterSettore']('xyz');
        expect(result).toEqual([]);
      });
    });

    describe('_filterArea', () => {
      beforeEach(() => {
        component.areaProdotto = [
          { id: 1, nome: 'Area Prodotto 1' },
          { id: 2, nome: 'Area Prodotto 2' },
          { id: 3, nome: 'Altra Area Prodotto' },
        ];
      });

      it('should return filtered areaProdotto array based on input', () => {
        const result = component['_filterArea']('2');
        expect(result).toEqual([
          { id: 2, nome: 'Area Prodotto 2' }
        ]);
      });

      it('should return an empty array of areaProdotto if no match is found', () => {
        const result = component['_filterArea']('xyz');
        expect(result).toEqual([]);
      });
    });

    describe('_filterSede', () => {
      beforeEach(() => {
        component.sede = [
          { id: 1, nome: 'AVEZZANO' },
          { id: 2, nome: 'PIEMONTE' },
          { id: 3, nome: 'PERUGIA' },
        ];
      });

      it('should return filtered sede array based on input', () => {
        const result = component['_filterSede']('per');
        expect(result).toEqual([
          { id: 3, nome: 'PERUGIA' },
        ]);
      });

      it('should return an empty array of sede if no match is found', () => {
        const result = component['_filterSede']('xyz');
        expect(result).toEqual([]);
      });
    });

    describe('_filterTipologiaContenzioso', () => {
      beforeEach(() => {
        component.tipologieContenzioso = [
          { id: 1, nome: 'Amministrativo' },
          { id: 2, nome: 'Giudiziaro' },
        ];
      });

      it('should return filtered tipologieContenzioso array based on input', () => {
        const result = component['_filterTipologiaContenzioso']('Giu');
        expect(result).toEqual([
          { id: 2, nome: 'Giudiziaro' },
        ]);
      });

      it('should return an empty array of tipologieContenzioso if no match is found', () => {
        const result = component['_filterTipologiaContenzioso']('xyz');
        expect(result).toEqual([]);
      });
    });

    describe('settoreSelected', () => {
      beforeEach(() => {
        component.settoreMateria = [
          { id: 1, nome: 'Settore A' },
          { id: 2, nome: 'Settore B' },
          { id: 3, nome: 'Settore C' },
        ];
        component.settoreCtrl = new FormControl();
        spyOn(component, 'settoreMateriaSelezionatoConId');
      });

      it('should set settoreCtrl with the selected settore name', () => {
        component.settoreSelected(2);
        expect(component.settoreCtrl.value).toBe('Settore B');
      });

      it('should set the selected settore ID', () => {
        component.settoreSelected(3);
        expect(component.settore).toBe(3);
      });

      it('should call settoreMateriaSelezionatoConId with the selected ID', () => {
        component.settoreSelected(1);
        expect(component.settoreMateriaSelezionatoConId).toHaveBeenCalledWith(1);
      });

      it('should set settoreCtrl to empty string if selected ID is not found', () => {
        component.settoreSelected(999);
        expect(component.settoreCtrl.value).toBe('');
      });

    });

    describe('areaSelected', () => {
      beforeEach(() => {
        component.areaProdotto = [
          { id: 1, nome: 'Area A' },
          { id: 2, nome: 'Area B' },
          { id: 3, nome: 'Area C' },
        ];
        component.areaCtrl = new FormControl();
      });

      it('should set areaCtrl with the selected area name', () => {
        component.areaSelected(2);
        expect(component.areaCtrl.value).toBe('Area B');
      });

      it('should set the selected area ID', () => {
        component.areaSelected(3);
        expect(component.area).toBe(3);
      });

      it('should set areaCtrl to an empty string if selected ID is not found', () => {
        component.areaSelected(999);
        expect(component.areaCtrl.value).toBe('');
      });

      it('should set area to the selected ID even if the name is not found', () => {
        component.areaSelected(-1);
        expect(component.area).toBe(-1);
        expect(component.areaCtrl.value).toBe('');
      });
    });

    describe('sedeSelected', () => {
      beforeEach(() => {
        component.sede = [
          { id: 1, nome: 'Sede A' },
          { id: 2, nome: 'Sede B' },
          { id: 3, nome: 'Sede C' },
        ];
        component.sedeCtrl = new FormControl();
        spyOn(component, 'showFieldSede').and.callFake((id: number, nome: string) => `ID: ${id} - Nome: ${nome}`);
      });

      it('should set sedeCtrl with the formatted selected sede name', () => {
        component.sedeSelected(2);
        expect(component.showFieldSede).toHaveBeenCalledWith(2, 'Sede B');
        expect(component.sedeCtrl.value).toBe('ID: 2 - Nome: Sede B');
      });

      it('should set filtroperSede with the selected sede ID as a string', () => {
        component.sedeSelected(3);
        expect(component.filtroperSede).toBe('3');
      });

      it('should set sedeCtrl to an empty string if selected ID is not found', () => {
        component.sedeSelected(999);
        expect(component.sedeCtrl.value).toBe('');
      });

      it('should handle a null or undefined selectedSede gracefully', () => {
        component.sede = [];
        component.sedeSelected(1);
        expect(component.sedeCtrl.value).toBe('');
        expect(component.filtroperSede).toBe('1');
      });
    });

    describe('tipologiaContenziosoSelected', () => {
      beforeEach(() => {
        component.tipologieContenzioso = [
          { id: 1, nome: 'Amministrativo' },
          { id: 2, nome: 'Giudiziario' },
        ];
        component.tipologiaContenziosoCtrl = new FormControl();
      });

      it('should set tipologiaContenziosoCtrl with the selected area name', () => {
        component.tipologiaContenziosoSelected(2);
        expect(component.tipologiaContenziosoCtrl.value).toBe('Giudiziario');
      });

      it('should set the selected idTipologiaContenzioso ID', () => {
        component.tipologiaContenziosoSelected(2);
        expect(component.idTipologiaContenzioso).toBe(2);
      });

      it('should set tipologiaContenziosoCtrl to an empty string if selected ID is not found', () => {
        component.tipologiaContenziosoSelected(999);
        expect(component.tipologiaContenziosoCtrl.value).toBe('');
      });

      it('should set idTipologiaContenzioso to the selected ID even if the name is not found', () => {
        component.tipologiaContenziosoSelected(-1);
        expect(component.idTipologiaContenzioso).toBe(-1);
        expect(component.tipologiaContenziosoCtrl.value).toBe('');
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

        component.settoreCtrl.setValue('test');
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

        component.areaCtrl.setValue('test');
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

    it('should call formatDate(null, null, "Prodotto") if all date values are null', () => {
      spyOn(component, 'formatDate');
      component.dataInizio = new FormControl(null);
      component.dataFine = new FormControl(null);
      component.dataInizioContenzioso = new FormControl(null);
      component.dataFineContenzioso = new FormControl(null);

      component.clearDate('dataInizio');
      expect(component.formatDate).toHaveBeenCalledWith(null, null, 'Prodotto');
    });

    it('should call formatDate(null, null, "Contenzioso") if all date values are null', () => {
      spyOn(component, 'formatDate');
      component.dataInizio = new FormControl(null);
      component.dataFine = new FormControl(null);
      component.dataInizioContenzioso = new FormControl(null);
      component.dataFineContenzioso = new FormControl(null);

      component.clearDate('dataInizioContenzioso');
      expect(component.formatDate).toHaveBeenCalledWith(null, null, 'Contenzioso');
    });


  });

  describe('getSedi', () => {
    it('should fetch sedi when role is P12689 or P12690', () => {
      mockActivatedRoute.queryParams = of({
        startDate: null,
        endDate: null,
        toggle: null,
      });
      mockStorageSrv.getItem.and.returnValue('P12689');
      spyOn(component, 'inizializzaPaginazione');
      component.getSedi();
      expect(mockTerritorioSrv.getSedi).toHaveBeenCalledWith(
        'P12689',
        component.codiceSede,
        component.pagina,
        component.ruoloRegionale,
        ''
      );
    });

    it('should not fetch sedi when role is P12799 and you have no sedi', () => {
      component.role = 'P12799';
      component.codiceSede = [];

      spyOn(component, 'inizializzaPaginazione');
      component.getSedi();
      expect(component.inizializzaPaginazione).not.toHaveBeenCalled();
    });

    it('should use the route params to populate the form value and initialize getSedi and inizializzaPaginazione', () => {
      mockActivatedRoute.queryParams = of({
        startDate: '2024-10-01',
        endDate: '2024-12-01',
        toggle: true,
      });
      component.role = 'P12799';
      component.codiceSede = ['mockCodiceSede1', 'mockCodiceSede2'];
      spyOn(component, 'inizializzaPaginazione');
      component.getSedi();

      expect(component.formRicerca.get('slideToggleDaRisolvere')?.value).toBe(true);
      expect(component.formRicerca.get('slideToggleDaRisolvereContenzioso')?.value).toBe(true);
      expect(component.dataInizio.value).toEqual(new Date('2024-10-01'));
      expect(component.dataFine.value).toEqual(new Date('2024-12-01'));
      expect(component.validitaDal).toBe('2024-10-01');
      expect(component.validitaAl).toBe('2024-12-01');
      expect(mockTerritorioSrv.getSedi).toHaveBeenCalledWith(
        component.role,
        component.codiceSede,
        component.pagina,
        component.ruoloRegionale,
        ''
      );

      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Prodotto');
      expect(component.inizializzaPaginazione).toHaveBeenCalledWith('Contenzioso');
    });
  });

  describe('inizializzaPaginazione', () => {
    it('should call iniziallizaPaginazioneProdotto with Prodotto as a params', () => {
      spyOn(component, 'inizializzaPaginazioneProdotto');
      spyOn(component, 'inizializzaPaginazioneContenzioso');
      const tipoSegnalazione = 'Prodotto';
      component.inizializzaPaginazione(tipoSegnalazione);
      expect(component.inizializzaPaginazioneProdotto).toHaveBeenCalled();
      expect(component.inizializzaPaginazioneContenzioso).not.toHaveBeenCalled();
    });

    it('should call inizializzaPaginazioneContenzioso with Contenzioso as a params', () => {
      spyOn(component, 'inizializzaPaginazioneProdotto');
      spyOn(component, 'inizializzaPaginazioneContenzioso');
      const tipoSegnalazione = 'Contenzioso';
      component.inizializzaPaginazione(tipoSegnalazione);
      expect(component.inizializzaPaginazioneProdotto).not.toHaveBeenCalled();
      expect(component.inizializzaPaginazioneContenzioso).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazioneProdotto', () => {
    it('should initialize pagination layout and perform ricercaProdotto', () => {
      component.pageDimProdotto = '10';
      component.formRicerca.get('slideToggleDaRisolvere')?.setValue(true);
      spyOn(component, 'aggiornaLayoutPaginazioneProdotto'); // Metodo che aggiorna il layout
      spyOn(component, 'ricercaProdotto'); // Metodo che esegue la ricerca
      component.inizializzaPaginazioneProdotto(false);
      expect(component.idStatoSegnalazione).toBe(3);

      expect(mockRilevazioniSrv.contaRicercaProdotto).toHaveBeenCalledWith(
        component.settore === -1 ? null : component.settore,
        component.area,
        component.selectSede(),
        component.validitaDal,
        component.validitaAl,
        component.idStatoSegnalazione,
        component.selectRole(),
        mockStorageSrv.getItem('matricola'),
        'Gestione',
        component.filtroperSede == null ? true : false
      );

      expect(component.elemNumProdotto).toBe(50);
      expect(component.pageNumProdotto).toBe(5); // 50 elementi con 10 per pagina = 5 pagine
      expect(component.layoutNumbersProdotto).toEqual([1, 2, 3, 4, 5]); // Primo set di pagine visibili

      expect(component.aggiornaLayoutPaginazioneProdotto).toHaveBeenCalled();

      expect(component.ricercaProdotto).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazioneContenzioso', () => {
    it('should initialize pagination layout and perform contaRicercaContenzioso', () => {
      component.pageDimContenzioso = '10';
      component.formRicerca.get('slideToggleDaRisolvereContenzioso')?.setValue(true);
      spyOn(component, 'aggiornaLayoutPaginazioneContenzioso'); // Metodo che aggiorna il layout
      spyOn(component, 'ricercaContenzioso'); // Metodo che esegue la ricerca
      component.inizializzaPaginazioneContenzioso(false);
      expect(component.idStatoSegnalazione).toBe(3);
      expect(mockRilevazioniSrv.contaRicercaContenzioso).toHaveBeenCalledWith(
        component.settore === -1 ? null : component.settore,
        component.area,
        component.selectSede(),
        component.validitaDal,
        component.validitaAl,
        component.idStatoSegnalazione,
        component.idTipologiaContenzioso,
        component.selectRole(),
        mockStorageSrv.getItem('matricola'),
        'Gestione',
        component.filtroperSede == null ? true : false
      );

      expect(component.elemNumContenzioso).toBe(50);
      expect(component.pageNumContenzioso).toBe(5); // 50 elementi con 10 per pagina = 5 pagine
      expect(component.layoutNumbersContenzioso).toEqual([1, 2, 3, 4, 5]); // Primo set di pagine visibili
      expect(component.aggiornaLayoutPaginazioneContenzioso).toHaveBeenCalled();

      expect(component.ricercaContenzioso).toHaveBeenCalled();
    });
  });

  describe('formatDate', () => {

    it('should format dates correctly for Prodotto', () => {
      component.dataInizio = new FormControl(new Date('2024-11-19'));
      component.dataFine = new FormControl(new Date('2024-12-01'));
      component.formatDate(component.dataInizio.value, component.dataFine.value, 'Prodotto');

      expect(component.validitaDal).toBe('2024-11-19');
      expect(component.validitaAl).toBe('2024-12-01');
    });

    it('should set validitaDal and validitaAl to null for Prodotto when dataInizio and dataFine are null', () => {
      component.dataInizio = new FormControl(null);
      component.dataFine = new FormControl(null);
      component.formatDate(null, null, 'Prodotto');

      expect(component.validitaDal).toBeNull();
      expect(component.validitaAl).toBeNull();
    });

    it('should format dates correctly for Contenzioso', () => {
      component.dataInizioContenzioso = new FormControl(new Date('2024-11-19'));
      component.dataFineContenzioso = new FormControl(new Date('2024-12-01'));
      component.formatDate(
        component.dataInizioContenzioso.value,
        component.dataFineContenzioso.value,
        'Contenzioso'
      );

      expect(component.validitaDal).toBe('2024-11-19');
      expect(component.validitaAl).toBe('2024-12-01');
    });

    it('should set validitaDal and validitaAl to null for Contenzioso when dataInizio and dataFine are null', () => {
      component.dataInizioContenzioso = new FormControl(null);
      component.dataFineContenzioso = new FormControl(null);
      component.formatDate(null, null, 'Contenzioso');

      expect(component.validitaDal).toBeNull();
      expect(component.validitaAl).toBeNull();
    });

    it('should not modify validitaDal and validitaAl for unknown tipoSegnalazione', () => {
      component.dataInizio = new FormControl(new Date('2024-11-19'));
      component.dataFine = new FormControl(new Date('2024-12-01'));
      component.formatDate(component.dataInizio.value, component.dataFine.value, 'Unknown');

      expect(component.validitaDal).toBeNull();
      expect(component.validitaAl).toBeNull();
    });

  });

  describe('toggleChange', () => {
    it('should set slideToggleDaRisolvereContenzioso to false when event.checked is false', () => {
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvereContenzioso: [true],
      });

      const event = { checked: false };
      component.onToggleChangeContenzioso(event);

      expect(component.formRicerca.get('slideToggleDaRisolvereContenzioso')?.value).toBe(false);
    });

    it('should not modify slideToggleDaRisolvereContenzioso when event.checked is true', () => {
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvereContenzioso: [true],
      });

      const event = { checked: true };
      component.onToggleChangeContenzioso(event);

      expect(component.formRicerca.get('slideToggleDaRisolvereContenzioso')?.value).toBe(true);
    });

    it('should set slideToggleDaRisolvere to false when event.checked is false', () => {
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvere: [true],
      });

      const event = { checked: false };
      component.onToggleChange(event);

      expect(component.formRicerca.get('slideToggleDaRisolvere')?.value).toBe(false);
    });

    it('should not modify slideToggleDaRisolvere when event.checked is true', () => {
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvere: [true],
      });

      const event = { checked: true };
      component.onToggleChange(event);

      expect(component.formRicerca.get('slideToggleDaRisolvere')?.value).toBe(true);
    });

  });

  describe('ricercaProdotto', () => {
    it('should populate prodotti correctly when data is returned', () => {
      const toggleValue = true;
      component.isLoading = true;
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvere: [toggleValue],
      });

      component.settore = 1;
      component.area = 1;
      component.pageDimProdotto = '10';
      component.pageCurrProdotto = 1;
      component.validitaDal = '2024-01-01';
      component.validitaAl = '2024-12-31';
      spyOn(component, 'selectSede').and.returnValue(['mockSede']);
      spyOn(component, 'selectRole').and.returnValue('mockRole');
      mockStorageSrv.getItem.and.returnValue('mockMatricola');
      mockRilevazioniSrv.getRicercaProdotto.and.returnValue(of(mockData));

      // Act
      component.ricercaProdotto();

      // Assert
      expect(mockRilevazioniSrv.getRicercaProdotto).toHaveBeenCalledWith(
        10,
        1,
        1,
        1,
        ['mockSede'],
        '2024-01-01',
        '2024-12-31',
        3,
        'mockRole',
        'mockMatricola',
        null,
        'Gestione',
        true
      );
      expect(component.prodotti).toEqual(mockData);
      expect(component.isLoading).toBeFalse();
    });

  });

  describe('ricercaContenzioso', () => {
    it('should populate prodotti correctly when data is returned', () => {
      const toggleValue = true;
      component.isLoading = true;
      component.formRicerca = new FormBuilder().group({
        slideToggleDaRisolvereContenzioso: [toggleValue],
      });
      component.settore = 1;
      component.area = 1;
      component.pageDimContenzioso = '10';
      component.pageCurrContenzioso = 1;
      component.validitaDal = '2024-01-01';
      component.validitaAl = '2024-12-31';
      component.idTipologiaContenzioso = 1;
      spyOn(component, 'selectSede').and.returnValue(['mockSede']);
      spyOn(component, 'selectRole').and.returnValue('mockRole');
      mockStorageSrv.getItem.and.returnValue('mockMatricola');
      mockRilevazioniSrv.getRicercaContenzioso.and.returnValue(of(mockDataContenzioso));

      component.ricercaContenzioso();
      expect(mockRilevazioniSrv.getRicercaContenzioso).toHaveBeenCalledWith(
        10,
        1,
        1,
        1,
        ['mockSede'],
        '2024-01-01',
        '2024-12-31',
        3,
        1,
       'mockRole',
       'mockMatricola',
        null,
        'Gestione',
        true
      );
      expect(component.contenziosi).toEqual(mockDataContenzioso);
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('onDateChange', () => {
    it('should reset dataInizioContenzioso if validitaDal > validitaAl', () => {

      component.validitaDal = '2023-11-15'; // 15 Novembre 2023
      component.validitaAl = '2023-11-10'; // 10 Novembre 2023
      component.dataInizioContenzioso.setValue('2023-11-15');
      component.dataFineContenzioso.setValue('2023-11-10');

      component.onDateChange('startDateContenzioso');

      expect(component.dataInizioContenzioso.value).toBeNull();
    });

    it('should reset dataFineContenzioso if validitaDal > validitaAl if typeData is endDateContenzioso', () => {

      component.validitaDal = '2023-11-15'; // 15 Novembre 2023
      component.validitaAl = '2023-11-10'; // 10 Novembre 2023
      component.dataInizioContenzioso.setValue('2023-11-15');
      component.dataFineContenzioso.setValue('2023-11-10');

      component.onDateChange('endDateContenzioso');

      expect(component.dataFineContenzioso.value).toBeNull();
    });

    it('should reset dataInizio if validitaDal > validitaAl', () => {

      component.validitaDal = '2023-11-15'; // 15 Novembre 2023
      component.validitaAl = '2023-11-10'; // 10 Novembre 2023
      component.dataInizio.setValue('2023-11-15');
      component.dataFine.setValue('2023-11-10');

      component.onDateChange('startDate');

      expect(component.dataInizio.value).toBeNull();
    });

    it('should reset dataFine if validitaDal > validitaAl and typeData is endDate', () => {

      component.validitaDal = '2023-11-15'; // 15 Novembre 2023
      component.validitaAl = '2023-11-10'; // 10 Novembre 2023
      component.dataInizio.setValue('2023-11-15');
      component.dataFine.setValue('2023-11-10');

      component.onDateChange('endDate');

      expect(component.dataFine.value).toBeNull();
    });
  });

  describe('filterDate', () => {
    it('should return true if dataInizio has no value', () => {
      component.dataInizio.setValue(''); // dataInizio non ha valore

      const result = component.filterDate(new Date('2023-11-10'));
      expect(result).toBeTrue();
    });

    it('should return true if the date is greater than or equal to dataInizio.value', () => {
      component.dataInizio.setValue(new Date('2023-11-10')); // Imposta il valore di dataInizio

      const result = component.filterDate(new Date('2023-11-11')); // Data maggiore
      expect(result).toBeTrue();
    });

    it('should return false if the date is less than dataInizio.value', () => {
      component.dataInizio.setValue(new Date('2023-11-10')); // Imposta il valore di dataInizio

      const result = component.filterDate(new Date('2023-11-09')); // Data minore
      expect(result).toBeFalse();
    });

    it('should use the current date if no date is provided', () => {
      const today = new Date();
      component.dataInizio.setValue(new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1)); // Data inferiore a oggi

      const result = component.filterDate(null); // Nessuna data fornita, usa quella attuale
      expect(result).toBeTrue(); // La data odierna è maggiore del valore di dataInizio
    });
  });

  describe('onFocus', () => {
    it('should set and clear the value of dataInizio if it is empty', fakeAsync(() => {
      component.dataInizio.setValue(''); // Inizialmente vuoto

      component.onFocus(component.dataInizio);

      // Verifica che il valore sia impostato a uno spazio temporaneo
      expect(component.dataInizio.value).toBe(' ');

      // Avanza il tempo di 1 millisecondo per verificare il reset
      tick(1);
      expect(component.dataInizio.value).toBe('');
    }));

    it('should not change the value of dataInizio if it is not empty', () => {
      component.dataInizio.setValue('some value'); // FormControl con un valore iniziale

      component.onFocus(component.dataInizio);

      // Verifica che il valore non cambi
      expect(component.dataInizio.value).toBe('some value');
    });

    it('should set and clear the value of dataFine if it is empty', fakeAsync(() => {
      component.dataFine.setValue(''); // Inizialmente vuoto

      component.onFocus(component.dataFine);

      // Verifica che il valore sia impostato a uno spazio temporaneo
      expect(component.dataFine.value).toBe(' ');

      // Avanza il tempo di 1 millisecondo per verificare il reset
      tick(1);
      expect(component.dataFine.value).toBe('');
    }));

    it('should not change the value of dataFine if it is not empty', () => {
      component.dataFine.setValue('some value'); // FormControl con un valore iniziale

      component.onFocus(component.dataFine);

      // Verifica che il valore non cambi
      expect(component.dataFine.value).toBe('some value');
    });

  });

});
