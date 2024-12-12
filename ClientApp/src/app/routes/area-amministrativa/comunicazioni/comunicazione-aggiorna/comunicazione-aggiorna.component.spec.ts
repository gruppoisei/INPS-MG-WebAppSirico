import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComunicazioneAggiornaComponent } from './comunicazione-aggiorna.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatListOption } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { TipiComunicazioneService } from '@shared/services/tipi-comunicazione.service';
import { RuoliComunicazioni } from '@shared/models/ruoli-comunicazioni.module';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { TipoComunicazione } from '@shared/models/tipo-comunicazione.model';
import { MatTooltipModule } from '@angular/material/tooltip';

describe('ComunicazioneAggiornaComponent', () => {
  let component: ComunicazioneAggiornaComponent;
  let fixture: ComponentFixture<ComunicazioneAggiornaComponent>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<ComunicazioneAggiornaComponent>>;
  let mockTipiComunicazioneSrv: jasmine.SpyObj<TipiComunicazioneService>;
  let mockComunicazioniSrv: jasmine.SpyObj<ComunicazioniService>;
  let mockRuoloComunincazioneSrv: jasmine.SpyObj<RuoloComunicazioneService>;

  beforeEach(async () => {

    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
          return JSON.stringify('gbellonio'); // Imposta un valore di test
      }
      return null;
    });

    mockTipiComunicazioneSrv = jasmine.createSpyObj('TipiComunicazioneService', ['getTipiComunicazioni']);
    mockComunicazioniSrv = jasmine.createSpyObj('ComunicazioniService', ['newGetComunicazioneById', 'newAggiornaComunicazione', 'newDeleteComunicazione']);
    mockRuoloComunincazioneSrv = jasmine.createSpyObj('RuoloComunicazioneService',['newGetRuoliByComunicazioneId', 'newInserisciRuoloComunicazione', 'newDeleteRuoliComunicazioni'])

    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockSnackBar.open.and.returnValue({
      afterDismissed: () => of({})  // Mock di afterDismissed che restituisce un Observable vuoto
    } as MatSnackBarRef<any>);

    await TestBed.configureTestingModule({
      declarations: [ ComunicazioneAggiornaComponent, PageHeaderComponent, BreadcrumbComponent ],
      providers:  [
        { provide: MatSnackBar, useValue: mockSnackBar},
        { provide: MatDialogRef, useValue: mockDialogRef},
        { provide: TipiComunicazioneService, useValue: mockTipiComunicazioneSrv},
        { provide: ComunicazioniService, useValue: mockComunicazioniSrv},
        { provide: RuoloComunicazioneService, useValue: mockRuoloComunincazioneSrv},
        { provide: MAT_DIALOG_DATA, useValue: 1 },
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule,
        MatListModule,
        MatInputModule,
        MatCheckboxModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatDialogModule,
        MatSnackBarModule,
        MatTooltipModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunicazioneAggiornaComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();

    mockTipiComunicazioneSrv.getTipiComunicazioni.and.returnValue(of(mockTipiComunicazione));
    mockComunicazioniSrv.newGetComunicazioneById.and.returnValue(of(mockComunicazione));
    mockRuoloComunincazioneSrv.newGetRuoliByComunicazioneId.and.returnValue(of(mockRuoliComunicazione));

    fixture.detectChanges();

    component.ruoliComunicazione = [
      { id: 1, creato: new Date(), aggiornato: new Date(), ruolo: 'P12689', idComunicazione: 1 },
      { id: 2, creato: new Date(), aggiornato: new Date(), ruolo: 'P12800', idComunicazione: 1 },
      { id: 3, creato: new Date(), aggiornato: new Date() ,ruolo: 'P12690', idComunicazione: 1 }
    ];
    component.ruoliList = [
      { codice: 'P12689', nome: 'Amministratore' },
      { codice: 'P12800', nome: 'Operatore Centrale'},
    ];
    component.form1 = new FormBuilder().group({
      inputOggetto: [''],
      inputTipo: [''],
      inputMessaggio: [''],
      validitaDal: [''],
      validitaAl: [''],
      selectedRole: [[]]
    });
  });

  const mockTipiComunicazione: TipoComunicazione[] = [
    { id: 1, creato: new Date(), aggiornato: new Date(), nome: 'Type1' },
    { id: 2, creato: new Date(), aggiornato: new Date(), nome: 'Type2' }
  ];
  const mockComunicazione: Comunicazioni = {
    id: 1,
    creato: new Date(),
    aggiornato: new Date(),
    oggetto: 'Test Object',
    messaggio: 'Test Message',
    dataInizio: '2024-01-01',
    dataFine: '2024-12-31',
    idTipoComunicazione: 1
  };
  const mockRuoliComunicazione: RuoliComunicazioni[] = [
    { id: 1, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12690' },
    { id: 2, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12800' }
  ];

  it('should create component ComunicazioniAggiorna', () => {
    expect(component).toBeTruthy();
  });

describe('should check if the selected roles are being modified', () => {
  it('should update state when options are selected', () => {
    // Simula la selezione di elementi nel template
    const matOptions = fixture.debugElement.queryAll(By.directive(MatListOption));

    // Seleziona le opzioni
    matOptions.forEach(option => {
      option.componentInstance.selected = true;
      fixture.detectChanges();
    });

    // Simula il metodo onSelectionChange
    const selectedOptions = matOptions.map(option => option.componentInstance);
    component.onSelectionChange(selectedOptions);

    // Verifica le asserzioni
    expect(component.allRolesSelected).toBeTrue();
    expect(component.ruoliModificati).toBeTrue();
    expect(component.ruoloSelezionato).toBeTrue();
  });

  it('should set ruoloSelezionato to false when no options are selected', () => {
    component.onSelectionChange([]);
    expect(component.ruoloSelezionato).toBeFalse();
  });
});

describe('ToggleAllRoles', () => {
  it('should select all roles when toggleAllRoles is called with true', () => {
    component.toggleAllRoles(true);

    expect(component.allRolesSelected).toBeTrue();

    const expectedRoles = component.ruoliList.map(ruolo => ruolo.codice);
    expect(component.form1.get('selectedRole')?.value).toEqual(expectedRoles);
  });

  it('should deselect all roles when toggleAllRoles is called with false', () => {
    component.toggleAllRoles(false);

    expect(component.allRolesSelected).toBeFalse();

    expect(component.form1.get('selectedRole')?.value).toEqual([]);
  });
});

  describe('Check if the roles exist', () => {
    it('should return true if the role exists', () => {
      const result = component.isChecked('P12689');
      expect(result).toBeTrue();
    });

    it('should return false if the role does not exist', () => {
      const result = component.isChecked('P12801');
      expect(result).toBeFalse();
    });
  });

  describe('ngOnInit', () => {
    it('should set isOggettoFocused to true if inputOggetto has no value', () => {
      spyOn(component, 'loadData').and.callThrough();
      component.form1.get('inputOggetto')?.setValue('Some Value');
      component.ngOnInit();
      expect(component.idComunicazione).toBe(1);
      expect(component.loadData).toHaveBeenCalled();
      expect(component.isOggettoFocused).toBeFalse();
    });
  });

  describe('SnackBar function', () => {
    it('should add a message to the snackBarQueue and not immediately call openNextSnackBar', () => {

      component.snackBarRef = {} as any;

      component.showSnackBar('Test message', 'Close', 3000);

      // Verifica che la coda abbia l'elemento appena aggiunto
      expect(component.snackBarQueue.length).toBe(1);
      expect(component.snackBarQueue[0]).toEqual({ message: 'Test message', action: 'Close', duration: 3000 });
    });

    it('should not call openNextSnackBar if snackBarRef is already present', () => {
      component.snackBarRef = {} as any; // Mock a snackBarRef to simulate an open snackbar
      spyOn(component, 'openNextSnackBar').and.callThrough();

      component.showSnackBar('Another message', 'Action', 2000);

      expect(component.openNextSnackBar).not.toHaveBeenCalled();
    });
  });
  describe('loadData function', () => {
    it('should load data and update list and form controls', () => {

      component.form1 = new FormBuilder().group({
        inputOggetto: [''],
        inputTipo: [''],
        inputMessaggio: [''],
        validitaDal: [''],
        validitaAl: ['']
      });



      mockTipiComunicazioneSrv.getTipiComunicazioni.and.returnValue(of(mockTipiComunicazione));
      mockComunicazioniSrv.newGetComunicazioneById.and.returnValue(of(mockComunicazione));
      mockRuoloComunincazioneSrv.newGetRuoliByComunicazioneId.and.returnValue(of(mockRuoliComunicazione));
      component.loadData();

      // Verify that the component properties have been updated
      expect(component.listaTipiComunicazione).toEqual(mockTipiComunicazione);
      expect(component.comunicazione).toEqual(mockComunicazione);
      expect(component.ruoliComunicazione).toEqual(mockRuoliComunicazione);

      // Verify that the form controls have been updated with the expected values
      expect(component.form1.controls['inputOggetto'].value).toBe('Test Object');
      expect(component.form1.controls['inputTipo'].value).toBe(1);
      expect(component.form1.controls['inputMessaggio'].value).toBe('Test Message');
      expect(component.form1.controls['validitaDal'].value).toBe('2024-01-01');
      expect(component.form1.controls['validitaAl'].value).toBe('2024-12-31');
    });
    it('should handle error response from loadData', () => {
      const errorResponse = new HttpErrorResponse({ error: 'error', status: 404 });

      // Mock the service to throw an error
      mockTipiComunicazioneSrv.getTipiComunicazioni.and.returnValue(throwError(() => errorResponse));
      mockComunicazioniSrv.newGetComunicazioneById.and.returnValue(throwError(() => errorResponse));
      mockRuoloComunincazioneSrv.newGetRuoliByComunicazioneId.and.returnValue(throwError(() => errorResponse));

      // Call the loadData method
      spyOn(console, 'error');
      component.loadData();

      // Verify that console.error was called
      expect(console.error).toHaveBeenCalledWith(errorResponse);
    });

    describe('OnSubmit', () => {

      it('should update communication and don\'t add any roles', () => {

        spyOn(component, 'showSnackBar')
        component.form1 = new FormBuilder().group({
          inputOggetto: [''],
          inputTipo: [''],
          inputMessaggio: [''],
          validitaDal: [''],
          validitaAl: [''],
          selectedRole: [[]]
        });

        // Arrange
        component.form1.patchValue({
          inputOggetto: 'Test Oggetto',
          inputTipo: 1,
          inputMessaggio: 'Test Messaggio',
          validitaDal: new Date(),
          validitaAl: new Date(),
          selectedRole: ['P12800', 'P12690',]
        });

        component.comunicazione = {
          id: 1,
          creato: new Date(),
          aggiornato: new Date(),
          oggetto: 'Test Object',
          messaggio: 'Test Message',
          dataInizio: '2024-01-01',
          dataFine: '2024-12-31',
          idTipoComunicazione: 1
        };

        const mockData = { idComunicazione: 1 };

        mockComunicazioniSrv.newAggiornaComunicazione.and.returnValue(of(mockData));

        mockRuoloComunincazioneSrv.newInserisciRuoloComunicazione.and.returnValue(of(null));

        component.ruoliComunicazione = [
          { id: 1, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12690' }, // Existing role
          { id: 2, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12800' }  // Existing role
        ];

        component.isSubmitting = true;
        component.buttonClicked = 'modifica';
        component.onSubmit();

        expect(mockComunicazioniSrv.newAggiornaComunicazione).toHaveBeenCalledWith(component.comunicazione);

        expect(component.showSnackBar).toHaveBeenCalledWith('Comunicazione aggiornata con successo', 'Chiudi');
      });

      it('should update communication and add new roles', () => {
        spyOn(component, 'showSnackBar');
        component.form1 = new FormBuilder().group({
            inputOggetto: [''],
            inputTipo: [''],
            inputMessaggio: [''],
            validitaDal: [''],
            validitaAl: [''],
            selectedRole: [[]]
        });

        // Arrange
        component.form1.patchValue({
            inputOggetto: 'Test Oggetto',
            inputTipo: 1,
            inputMessaggio: 'Test Messaggio',
            validitaDal: new Date(),
            validitaAl: new Date(),
            selectedRole: ['P12800', 'P13000', 'P12690'] // Include a new role 'P13000' to be added
        });

        component.comunicazione = {
            id: 1,
            creato: new Date(),
            aggiornato: new Date(),
            oggetto: 'Test Object',
            messaggio: 'Test Message',
            dataInizio: '2024-01-01',
            dataFine: '2024-12-31',
            idTipoComunicazione: 1
        };

        const mockData = { idComunicazione: 1 };
        mockComunicazioniSrv.newAggiornaComunicazione.and.returnValue(of(mockData));

        mockRuoloComunincazioneSrv.newInserisciRuoloComunicazione.and.returnValue(of(null));

        // Existing roles
        component.ruoliComunicazione = [
            { id: 1, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12690' }, // Existing role
            { id: 2, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12800' }  // Existing role
        ];

        component.isSubmitting = true;
        component.buttonClicked = 'modifica';
        component.onSubmit();

        expect(mockComunicazioniSrv.newAggiornaComunicazione).toHaveBeenCalledWith(component.comunicazione);

        // Verify that the role insertion method was called with the new role to be added
        const expectedRolesToAdd = [
            { idComunicazione: 1, ruolo: 'P13000' }  // Only this role should be added
        ];
        expect(mockRuoloComunincazioneSrv.newInserisciRuoloComunicazione).toHaveBeenCalledWith(expectedRolesToAdd);

        expect(component.showSnackBar).toHaveBeenCalledWith('Comunicazione aggiornata con successo', 'Chiudi');
    });

      it('should update communication and remove roles', () => {
        spyOn(component, 'showSnackBar');
        component.form1 = new FormBuilder().group({
            inputOggetto: [''],
            inputTipo: [''],
            inputMessaggio: [''],
            validitaDal: [''],
            validitaAl: [''],
            selectedRole: [[]]
        });

        component.form1.patchValue({
            inputOggetto: 'Test Oggetto',
            inputTipo: 1,
            inputMessaggio: 'Test Messaggio',
            validitaDal: new Date(),
            validitaAl: new Date(),
            selectedRole: ['P12800'] // 'P12690' is missing and should be removed
        });

        component.comunicazione = {
            id: 1,
            creato: new Date(),
            aggiornato: new Date(),
            oggetto: 'Test Object',
            messaggio: 'Test Message',
            dataInizio: '2024-01-01',
            dataFine: '2024-12-31',
            idTipoComunicazione: 1
        };

        const mockData = { idComunicazione: 1 };

        mockComunicazioniSrv.newAggiornaComunicazione.and.returnValue(of(mockData));

        mockRuoloComunincazioneSrv.newDeleteRuoliComunicazioni.and.returnValue(of(null));

        // Existing roles, 'P12690' should be removed because it's not in selectedRole
        component.ruoliComunicazione = [
            { id: 1, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12690' }, // Role to be removed
            { id: 2, creato: new Date(), aggiornato: new Date(), idComunicazione: 1, ruolo: 'P12800' }  // Role kept
        ];

        component.isSubmitting = true;
        component.buttonClicked = 'modifica'; // Ensure this is set to trigger the logic
        component.onSubmit(); // Call the method to test

        expect(mockComunicazioniSrv.newAggiornaComunicazione).toHaveBeenCalledWith(component.comunicazione);

        const expectedRolesToRemove = [
            { idComunicazione: 1, ruolo: 'P12690' }  // Only this role should be removed
        ];
        expect(mockRuoloComunincazioneSrv.newDeleteRuoliComunicazioni).toHaveBeenCalledWith(expectedRolesToRemove);

        expect(component.showSnackBar).toHaveBeenCalledWith('Comunicazione aggiornata con successo', 'Chiudi');
      });
    });
  });
});
