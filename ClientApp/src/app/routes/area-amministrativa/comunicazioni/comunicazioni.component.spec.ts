import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { ComunicazioniComponent } from './comunicazioni.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { of } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { ComunicazioneNuovaComponent } from './comunicazione-nuova/comunicazione-nuova.component';
import { ComunicazioneAggiornaComponent } from './comunicazione-aggiorna/comunicazione-aggiorna.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('ComunicazioniComponent', () => {
  let component: ComunicazioniComponent;
  let fixture: ComponentFixture<ComunicazioniComponent>;
  let mockComunicazioniService: jasmine.SpyObj<ComunicazioniService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let dialogRefSpyNuova: jasmine.SpyObj<MatDialogRef<ComunicazioneNuovaComponent>>;
  let dialogRefSpyModifica: jasmine.SpyObj<MatDialogRef<ComunicazioneAggiornaComponent>>;

  beforeEach(async () => {
    mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
    dialogRefSpyNuova = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    dialogRefSpyModifica = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);

    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
          return JSON.stringify('gbellonio'); // Imposta un valore di test
      }
      return null;
    });

    mockComunicazioniService = jasmine.createSpyObj('ComunicazioniService', [
      'newContaComunicazioni',
      'newGetComunicazioniConPaginazione'
    ])

    await TestBed.configureTestingModule({
      declarations: [ ComunicazioniComponent, PageHeaderComponent, BreadcrumbComponent ],
        imports: [
          FormsModule,
          HttpClientModule,
          MatSelectModule,
          MatIconModule,
          MatCardModule,
          MatTableModule,
          MatTooltipModule,
          RouterTestingModule,
          TranslateModule.forRoot()
        ],
      providers: [
        { provide: ComunicazioniService, useValue: mockComunicazioniService },
        { provide: MatDialog, useValue: mockDialog }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicazioniComponent);
    component = fixture.componentInstance;
    mockComunicazioniService.newContaComunicazioni.and.returnValue(of({ count: 20 }));
    mockComunicazioniService.newGetComunicazioniConPaginazione.and.returnValue(of([{}, {}]));

    dialogRefSpyNuova.afterClosed.and.returnValue(of(null)); // Simula la chiusura del dialogo
    dialogRefSpyModifica.afterClosed.and.returnValue(of(null))
    mockDialog.open.and.returnValue(dialogRefSpyModifica); // Aggiungi questa linea per 'modificaDialog'


    fixture.detectChanges();
  });

  it('should create component Comunicazioni', () => {
    expect(component).toBeTruthy();
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
      spyOn(component, 'popolaTabella'); // Spia la funzione popolaTabella
      component.pageCurr = 2;
      component.pageNum = 2;
      component.pageFirst(); // Chiama la funzione da testare
      expect(component.pageCurr).toBe(1); // Assicurati che pageCurr venga impostato a 1
      expect(component.base).toBe(1); // Assicurati che base venga impostato a 1
      expect(component.layoutNumbers).toEqual([1,2]); // Assicurati che layoutNumbers sia aggiornato correttamente
      expect(component.popolaTabella).toHaveBeenCalled(); // Verifica che popolaTabella venga chiamato
    });

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

  describe('Comunicazioni Service', () => {
    it('should calculate pageNum, populate layoutNumbers, and call popolaTabella', () => {
        const mockCountResposne = {count: 40};
        mockComunicazioniService.newContaComunicazioni.and.returnValue(of(mockCountResposne));
        component.filtroStringa = '';
        component.pageNum = 0;
        component.elemNum = 0;
        component.layoutNumbers = [];

        spyOn(component, 'popolaTabella');

        component.inizializzaPaginazione();

        expect(component.elemNum).toBe(40);
        expect(component.pageNum).toBe(2);
        expect(component.layoutNumbers).toEqual([1,2]);

        expect(component.popolaTabella).toHaveBeenCalled();
    });

    it('should populate dataSource with data from newGetComunicazioniConPaginazione', () =>{
        const mockDataResponse = [
          {id: 1, oggetto: 'Oggetto', nome: 'Amministrativa', messaggio: 'messaggio', dataFine: '2024-12-31T00:00:00', dataInizio: '2024-10-29T00:00:00'},
          {id: 2, oggetto: 'Oggetto1', nome: 'Manutenzione', messaggio: 'messaggio1', dataFine: '2024-12-31T00:00:00', dataInizio: '2024-10-29T00:00:00'}
        ]
        mockComunicazioniService.newGetComunicazioniConPaginazione.and.returnValue(of(mockDataResponse));
        component.pageDim = '20';
        component.pageCurr = 1;
        component.ordine = '';
        component.filtroStringa = '';
        component.popolaTabella();
        expect(component.dataSource).toEqual(mockDataResponse);
    });
  });

  describe('Dialog actions', () => {
    it('should open a dialog and reset order and initialize pagination when dialog is closed', () => {
      spyOn(component, 'inizializzaPaginazione');
      component.nuovaDialog();

      // Cambia da mockDialog a mockDialog.open
      expect(mockDialog.open).toHaveBeenCalledWith(ComunicazioneNuovaComponent, jasmine.any(Object));

      const dialogConfig = mockDialog.open.calls.mostRecent().args[1];
      if (dialogConfig) {
        expect(dialogConfig.autoFocus).toBeTrue();
        expect(dialogConfig.height).toBe('auto');
        expect(dialogConfig.width).toBe('600px');
        expect(dialogConfig.data).toBe(0);
      } else {
        fail('dialogConfig should not be undefined');
      }

      dialogRefSpyNuova.afterClosed().subscribe(() => {
        expect(component.ordine).toBe('');
        expect(component.inizializzaPaginazione).toHaveBeenCalled();
      });
    });

/*     it('should open a dialog and initialize pagination when dialog is closed', () => {
      spyOn(component, 'inizializzaPaginazione');
      component.modificaDialog(1);

      // Cambia da mockDialog a mockDialog.open
      expect(mockDialog.open).toHaveBeenCalledWith(ComunicazioneAggiornaComponent, jasmine.any(Object));

      const dialogConfig = mockDialog.open.calls.mostRecent().args[1];
      if (dialogConfig) {
        expect(dialogConfig.autoFocus).toBeTrue();
        expect(dialogConfig.height).toBe('auto');
        expect(dialogConfig.width).toBe('600px');
        expect(dialogConfig.data).toEqual(1);
      } else {
        fail('dialogConfig should not be undefined');
      }

      dialogRefSpyModifica.afterClosed().subscribe(() => {
        expect(component.inizializzaPaginazione).toHaveBeenCalled();
      });
    }); */
  });


});
