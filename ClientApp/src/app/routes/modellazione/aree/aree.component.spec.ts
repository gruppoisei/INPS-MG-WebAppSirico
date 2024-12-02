import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AreeComponent } from './aree.component';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { Aree } from '@shared/services/areeservice.service'; // Assicurati che il path sia corretto
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { of, throwError } from 'rxjs';
import { Sort } from '@angular/material/sort';
import { ModellazioneNuovaComponent } from '../modellazione-nuova/modellazione-nuova.component';
import { ModellazioneAggiornaComponent } from '../modellazione-aggiorna/modellazione-aggiorna.component';

describe('AreeComponent', () => {
  let component: AreeComponent;
  let fixture: ComponentFixture<AreeComponent>;
  let areeService: jasmine.SpyObj<Aree>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ModellazioneNuovaComponent>>;
  let dialogRefSpy2: jasmine.SpyObj<MatDialogRef<ModellazioneAggiornaComponent>>;

  beforeEach(async () => {
    // Mock del sessionStorage per il test: l'username viene ottenuto nel componente che si occupa del login
    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
        return JSON.stringify('tuo_username'); // Imposta un valore di test
      }
      return null;
    });

    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRefSpy2 = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);

    const areeServiceStub = {
      newGetAreeConPaginazione: jasmine
        .createSpy('newGetAreeConPaginazione')
        .and.returnValue(
          of([
            {
              nomeSettoreMaterie: 'Settore 1',
              nomeAreaProdotto: 'Area 1',
              creato: new Date(),
              aggiornato: new Date(),
            },
          ])
        ),
      newContaAreeProdotto: jasmine
        .createSpy('newContaAreeProdotto')
        .and.returnValue(of({ count: 1 })),
    };

    await TestBed.configureTestingModule({
      declarations: [AreeComponent, PageHeaderComponent, BreadcrumbComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        { provide: Aree, useValue: areeServiceStub },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AreeComponent);
    component = fixture.componentInstance;
    areeService = TestBed.inject(Aree) as jasmine.SpyObj<Aree>;

    // Mock iniziale dei dati
    areeService.newGetAreeConPaginazione.and.returnValue(of([]));
    areeService.newContaAreeProdotto.and.returnValue(of({ count: 0 }));
    mockDialog.open.and.returnValue(dialogRefSpy);
    dialogRefSpy.afterClosed.and.returnValue(of(null));
    dialogRefSpy2.afterClosed.and.returnValue(of(null))

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize pagination on ngOnInit', () => {
    component.ngOnInit();
    expect(component.pageCurr).toBe(1);
    expect(component.base).toBe(1);
    expect(component.layoutNumbers.length).toBe(0);
    expect(areeService.newContaAreeProdotto).toHaveBeenCalledWith('');
  });

  // inizializzaPaginazione chiama due metodi definiti nel ts:
  // i test di tali metodi sono specifici e non sono scritti qua ma in it a parte
  it('should initialize pagination correctly', () => {

    spyOn(component, 'resetPaginazione').and.callThrough();
    spyOn(component, 'getCountPagineElementi').and.callThrough();

    component.inizializzaPaginazione();

    expect(component.resetPaginazione).toHaveBeenCalled();
    expect(component.getCountPagineElementi).toHaveBeenCalled();
  });


  it('should fetch count calling newContaAreeProdotto and update pagination correctly', () => {
    const mockCountResponse = { count: 10 }; // Simulazione della risposta del servizio
    const mockPageDim = 5; // Dimensione della pagina mock
    component.pageDim = mockPageDim.toString();
    component.filtroStringa = ''; // Imposta un filtro per il test
    component.layoutNumbers = [];
    // Mock della chiamata al servizio
    areeService.newContaAreeProdotto.and.returnValue(of(mockCountResponse));

    spyOn(component, 'popolaTabella');
    component.getCountPagineElementi();

    expect(areeService.newContaAreeProdotto).toHaveBeenCalledWith('');
    expect(component.elemNum).toBe(mockCountResponse.count);
    expect(component.pageNum).toBe(2); // 10 / 5 = 2
    expect(component.layoutNumbers).toEqual([1, 2]); // Dovrebbe popolare con i numeri delle pagine
    expect(component.dataSource).toEqual([]); // Assicurati che dataSource sia vuoto

    // Verifica che popolaTabella sia stato chiamato
    expect(component.popolaTabella).toHaveBeenCalled();
  });

  it('should handle errors of newContaAreeProdotto', () => {
    const errorResponse = 'Error fetching count';
    spyOn(console, 'error'); // Spy per il console.error

    areeService.newContaAreeProdotto.and.returnValue(throwError(() => errorResponse));

    component.getCountPagineElementi();

    expect(areeService.newContaAreeProdotto).toHaveBeenCalledWith('');
    expect(console.error).toHaveBeenCalledWith('Error fetching count:', errorResponse);
    expect(component.elemNum).toBe(0);
    expect(component.pageNum).toBe(0);
    expect(component.dataSource).toEqual([]);
  });

  it('should handle error in popolaTabella', () => {
    areeService.newGetAreeConPaginazione.and.returnValue(throwError(() => 'Error'));
    component.popolaTabella();
    expect(component.dataSource).toEqual([]);
    expect(component.errorMessage).toBe('Error fetching data');
  });

  it('should sort data and call popolaTabella', () => {
    const sort: Sort = { active: 'nomeSettoreMaterie', direction: 'asc' as 'asc' | 'desc' | '' };
    component.sortData(sort);
    expect(component.ordine).toBe('nomeSettoreMaterie-asc');
    expect(areeService.newGetAreeConPaginazione).toHaveBeenCalled();
  });

  it('should reset filter', () => {
    component.filtroStringa = 'test';
    component.azzeraFiltro();
    expect(component.filtroStringa).toBe('');
    expect(component.pageCurr).toBe(1);
  });

  it('should handle input change', () => {
    const inputEvent = { target: { value: 'test' } } as unknown as Event;
    component.onInputChange(inputEvent);
    expect(component.filtroStringa).toBe('');
    expect(component.pageCurr).toBe(1);
  });

  // Funzioni dialog
   describe('Dialog', () =>{
    it('should open a dialog and reset order and initialize pagination when dialog is closed', () => {
      // Chiamata alla funzione da testare
      spyOn(component, 'inizializzaPaginazione');
      component.nuovaDialog();

      // Verifica che il dialogo sia stato aperto con la configurazione corretta
      expect(mockDialog.open).toHaveBeenCalledWith(ModellazioneNuovaComponent, jasmine.any(MatDialogConfig));

      const dialogConfig = mockDialog.open.calls.mostRecent().args[1];
      if (dialogConfig) {
        expect(dialogConfig.autoFocus).toBeTrue();
        expect(dialogConfig.height).toBe('400px');
        expect(dialogConfig.data).toBe(0);
      } else {
        fail('dialogConfig should not be undefined');
      }

      // Simula la chiusura del dialogo
      dialogRefSpy.afterClosed().subscribe(() => {
        expect(component.ordine).toBe(''); // Assicurati che l'ordine venga azzerato
        expect(component.inizializzaPaginazione).toHaveBeenCalled(); // Assicurati che venga chiamato inizializzaPaginazione
      });
    });

    it('should open a dialog and initialize pagination when dialog is closed', () => {
      spyOn(component, 'inizializzaPaginazione');
      component.modificaDialog(1);
      expect(mockDialog.open).toHaveBeenCalledWith(ModellazioneAggiornaComponent, jasmine.any(MatDialogConfig));

      const dialogConfg = mockDialog.open.calls.mostRecent().args[1];
      if(dialogConfg){
        expect(dialogConfg.autoFocus).toBeTrue();
        expect(dialogConfg.height).toBe('400px');
        expect(dialogConfg.data).toEqual({ formAttivo: 0, id:1 });
      }
      else{
        fail('dialogConfig should not be undefined')
      }
      dialogRefSpy2.afterClosed().subscribe(() => {
        expect(component.inizializzaPaginazione).toHaveBeenCalled();
      });
    });
  });

  // Funzioni di paginazione
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

  it('should calculate pageNum, populate layoutNumbers, and call popolaTabella', () => {
    const mockCountResponse = { count: 40 }; // Ad esempio, 40 elementi
    areeService.newContaAreeProdotto.and.returnValue(of(mockCountResponse));

    component.pageNum = 0;
    component.elemNum = 0;
    component.layoutNumbers = [];

    spyOn(component, 'popolaTabella');

    component.getCountPagineElementi();

    expect(component.elemNum).toBe(40);
    expect(component.pageNum).toBe(2);

    expect(component.layoutNumbers).toEqual([1, 2]);

    expect(component.popolaTabella).toHaveBeenCalled();
  });

  describe('pageFirst', () => {
    it('should set pageCurr to 1, base to 1, and call popolaTabella', () => {
      spyOn(component, 'popolaTabella');
      component.pageCurr = 2;
      component.pageNum = 2;
      component.pageFirst();

      expect(component.pageCurr).toBe(1);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2]);
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

  describe('pageLast', () => {
    it('should set pageCurr to last page', () => {
      spyOn(component, 'popolaTabella');
      component.pageCurr = 1;
      component.pageNum = 2;
      component.pageLast();

      expect(component.pageCurr).toBe(2);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2]);
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

  describe('pageNext', () => {
    it('should go to the next page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaTabella');
      component.pageCurr = 1;
      component.pageNum = 5;
      component.pageNext();
      expect(component.pageCurr).toBe(2);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

  describe('pagePrev', () => {
    it('should go to the prev page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaTabella');
      component.pageCurr = 2;
      component.pageNum = 5;
      component.pagePrev();
      expect(component.pageCurr).toBe(1);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });
});
