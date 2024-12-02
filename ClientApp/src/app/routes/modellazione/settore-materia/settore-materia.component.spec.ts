import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { SettoreMateriaComponent } from './settore-materia.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { of, throwError } from 'rxjs';
import { ModellazioneNuovaComponent } from '../modellazione-nuova/modellazione-nuova.component';
import { ModellazioneAggiornaComponent } from '../modellazione-aggiorna/modellazione-aggiorna.component';

describe('SettoreMateriaComponent', () => {
  let component: SettoreMateriaComponent;
  let fixture: ComponentFixture<SettoreMateriaComponent>;
  let mockSettoreMateriaService: jasmine.SpyObj<SettoreMateriaService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ModellazioneNuovaComponent>>;
  let dialogRefSpy2: jasmine.SpyObj<MatDialogRef<ModellazioneAggiornaComponent>>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRefSpy2 = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);

    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
          return JSON.stringify('gbellonio'); // Imposta un valore di test
      }
      return null;
    });
    // Creazione delle spie per SettoreMateriaService e MatDialog
    mockSettoreMateriaService = jasmine.createSpyObj('SettoreMateriaService', [
      'contaSettoriMaterie',
      'newGetSettoriConPaginazione'
    ]);

    await TestBed.configureTestingModule({
      declarations: [SettoreMateriaComponent, PageHeaderComponent, BreadcrumbComponent],
      imports: [
        MatDialogModule,
        HttpClientModule,
        MatIconModule,
        MatCardModule,
        FormsModule,
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: SettoreMateriaService, useValue: mockSettoreMateriaService },
        { provide: MatDialog, useValue: mockDialog }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettoreMateriaComponent);
    component = fixture.componentInstance;

    // Mock di default per i metodi del servizio
    mockSettoreMateriaService.contaSettoriMaterie.and.returnValue(of({ count: 20 }));
    mockSettoreMateriaService.newGetSettoriConPaginazione.and.returnValue(of([]));
    mockDialog.open.and.returnValue(dialogRefSpy);
    dialogRefSpy.afterClosed.and.returnValue(of(null)); // Simula la chiusura del dialogo
    dialogRefSpy2.afterClosed.and.returnValue(of(null))


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

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
    mockSettoreMateriaService.contaSettoriMaterie.and.returnValue(of(mockCountResponse));

    component.pageNum = 0;
    component.elemNum = 0;
    component.layoutNumbers = [];

    spyOn(component, 'popolaTabella');

    component.getCountPagineElementi();

    expect(component.elemNum).toBe(40);
    expect(component.pageNum).toBe(2); // Con pageDim = 20, ci aspettiamo 2 pagine (40 / 20 = 2)

    expect(component.layoutNumbers).toEqual([1, 2]);

    expect(component.popolaTabella).toHaveBeenCalled();
  });

  it('should populate dataSource with data from newGetSettoriConPaginazione', () => {
    // Mock del valore di ritorno per newGetSettoriConPaginazione
    const mockDataResponse = [{ id: 1, nome: 'Settore 1' }, { id: 2, nome: 'Settore 2' }];
    mockSettoreMateriaService.newGetSettoriConPaginazione.and.returnValue(of(mockDataResponse));
    // Impostiamo i valori iniziali
    component.pageDim = '20';
    component.pageCurr = 1;
    component.ordine = '';
    component.filtroStringa = '';
    // Eseguiamo la funzione da testare
    component.popolaTabella();
    // Verifica che dataSource contenga i dati simulati
    expect(component.dataSource).toEqual(mockDataResponse);
  });

  it('should set dataSource to an empty array if newGetSettoriConPaginazione fails', () => {
    mockSettoreMateriaService.newGetSettoriConPaginazione.and.returnValue(throwError('Errore di rete'));
    // Eseguiamo la funzione da testare
    component.popolaTabella();
    expect(component.dataSource).toEqual([]);
  });

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
        expect(dialogConfig.data).toBe(4);
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
        expect(dialogConfg.data).toEqual({ formAttivo: 4, id:1 });
      }
      else{
        fail('dialogConfig should not be undefined')
      }
      dialogRefSpy2.afterClosed().subscribe(() => {
        expect(component.inizializzaPaginazione).toHaveBeenCalled();
      });
    });
  });


  describe('pageFirst', () => {
    it('should set pageCurr to 1, base to 1, and call popolaTabella', () => {
      spyOn(component, 'popolaTabella'); // Spia la funzione popolaTabella
      component.pageCurr = 2;
      component.pageNum = 2;
      component.pageFirst(); // Chiama la funzione da testare
      // Verifiche
      expect(component.pageCurr).toBe(1); // Assicurati che pageCurr venga impostato a 1
      expect(component.base).toBe(1); // Assicurati che base venga impostato a 1
      expect(component.layoutNumbers).toEqual([1,2]); // Assicurati che layoutNumbers sia aggiornato correttamente
      expect(component.popolaTabella).toHaveBeenCalled(); // Verifica che popolaTabella venga chiamato
    });
  });

  describe('pageLast', () => {
    it('should set pageCurr to last page', () =>{
      spyOn(component, 'popolaTabella');
      component.pageCurr = 1;
      component.pageNum = 2;
      component.pageLast();

      expect(component.pageCurr).toBe(2);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1,2]);
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

  describe('pageNext', () => {
    it('should go to the next page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaTabella')
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
      spyOn(component, 'popolaTabella')
      component.pageCurr = 2;
      component.pageNum = 5;
      component.pagePrev();
      expect(component.pageCurr).toBe(1);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

});
