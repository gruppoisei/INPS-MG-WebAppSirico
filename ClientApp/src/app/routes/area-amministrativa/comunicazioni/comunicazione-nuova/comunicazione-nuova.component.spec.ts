import { ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';

import { ComunicazioneNuovaComponent } from './comunicazione-nuova.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { TipiComunicazioneService } from '@shared/services/tipi-comunicazione.service';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { TipoComunicazione } from '@shared/models/tipo-comunicazione.model';
import * as moment from 'moment';

describe('ComunicazioneNuovaComponent', () => {
  let component: ComunicazioneNuovaComponent;
  let fixture: ComponentFixture<ComunicazioneNuovaComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<ComunicazioneNuovaComponent>>;
  let mockSnackBar: jasmine.SpyObj<MatSnackBar>;
  let mockTipiComunicazioneSrv: jasmine.SpyObj<TipiComunicazioneService>;
  let mockComunicazioniService: jasmine.SpyObj<ComunicazioniService>;
  let mockRuoloComunicazioneService: jasmine.SpyObj<RuoloComunicazioneService>;

  beforeEach(async () => {

    mockRuoloComunicazioneService = jasmine.createSpyObj('RuoloComunicazioneService', ['newInserisciRuoloComunicazione']);
    mockComunicazioniService = jasmine.createSpyObj('ComunicazioniService', ['newInserisciComunicazione']);
    mockTipiComunicazioneSrv = jasmine.createSpyObj('TipiComunicazioneService', ['getTipiComunicazioni']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);

    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
          return JSON.stringify('gbellonio'); // Imposta un valore di test
      }
      return null;
    });

    await TestBed.configureTestingModule({
      declarations: [ ComunicazioneNuovaComponent, PageHeaderComponent, BreadcrumbComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MatSnackBar, useValue: mockSnackBar },
        { provide: TipiComunicazioneService, useValue: mockTipiComunicazioneSrv},
        { provide: ComunicazioniService, useValue: mockComunicazioniService},
        { provide: RuoloComunicazioneService, useValue: mockRuoloComunicazioneService}
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule,
        MatListModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatMomentDateModule,
        MatDialogModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {

    const mockTipiComunicazione: TipoComunicazione[] = [
      { id: 1, nome: 'Tipo 1', creato: new Date(), aggiornato: new Date() },
      { id: 2, nome: 'Tipo 2', creato: new Date(), aggiornato: new Date() }
    ];
    mockTipiComunicazioneSrv.getTipiComunicazioni.and.returnValue(of(mockTipiComunicazione));
    mockComunicazioniService.newInserisciComunicazione.and.returnValue(of({ idComunicazione: 1 }));
    mockRuoloComunicazioneService.newInserisciRuoloComunicazione.and.returnValue(of({}));

    fixture = TestBed.createComponent(ComunicazioneNuovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component Comunicazioni nuova', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set isOggettoFocused to true if inputOggetto has no value', () => {
      component.form1.get('inputOggetto')?.setValue('Some Value');
      component.ngOnInit();
      expect(mockTipiComunicazioneSrv.getTipiComunicazioni).toHaveBeenCalled();
      expect(component.isOggettoFocused).toBeFalse();
    });
  });

  describe('TipiComunicazioniService', () => {
    it('should set listaTipiComunicazione with data from getTipiComunicazioni', () => {
      const mockTipiComunicazione: TipoComunicazione[] = [
        { id: 1, nome: 'Tipo 1', creato: new Date(), aggiornato: new Date() },
        { id: 2, nome: 'Tipo 2', creato: new Date(), aggiornato: new Date() }
      ];
      mockTipiComunicazioneSrv.getTipiComunicazioni.and.returnValues(of(mockTipiComunicazione));

      component.getTipiComunicazione();
      expect(component.listaTipiComunicazione).toEqual(mockTipiComunicazione);
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

  describe('onSelectionChange',() => {
    it('should set allRolesSelected to true when all roles are selected', () => {
      const allRoles = component.ruoliList.map(ruolo => ruolo.codice);
      component.form1.get('selectedRole')!.setValue(allRoles);
      component.onSelectionChange();
      expect(component.allRolesSelected).toBeTrue();
    });

    it('should set allRolesSelected to false when not all roles are selected', () => {
      const partialRoles = component.ruoliList.slice(0, 2).map(ruolo => ruolo.codice);
      component.form1.get('selectedRole')!.setValue(partialRoles);
      component.onSelectionChange();
      expect(component.allRolesSelected).toBeFalse();
    });

    it('should set allRolesSelected to false when no roles are selected', () => {
      component.form1.get('selectedRole')!.setValue([]);
      component.onSelectionChange();
      expect(component.allRolesSelected).toBeFalse();
    });
  });

  describe('SalvaComunicazione', () => {
    it('should call newInserisciComunicazione and newInserisciRuoloComunicazione and show success message', fakeAsync(() => {

      const validitaDal = new Date('2024-11-04');
      const validitaAl = new Date('2024-11-05');

      component.form1.setValue({
        inputOggetto: 'Test Oggetto',
        inputTipo: '1',
        inputMessaggio: 'Test Messaggio',
        validitaDal: validitaDal,
        validitaAl: validitaAl,
        selectedRole: ['P12689']
      });

      component.isSubmitting = true;
      mockComunicazioniService.newInserisciComunicazione.and.returnValue(of({ idComunicazione: 1 }));
      mockRuoloComunicazioneService.newInserisciRuoloComunicazione.and.returnValue(of({}));

      component.salvaComunicazione();
      tick();

      const expectedComunicazione = {
        oggetto: 'Test Oggetto',
        idTipoComunicazione: 1,
        messaggio: 'Test Messaggio',
        dataInizio: moment(validitaDal).startOf('day').format('YYYY-MM-DD'),
        dataFine: moment(validitaAl).startOf('day').format('YYYY-MM-DD'),
      };
      expect(component.comunicazione.oggetto).toBe('Test Oggetto');
      expect(component.comunicazione.idTipoComunicazione).toBe(1);
      expect(component.comunicazione.messaggio).toBe('Test Messaggio');
      expect(component.comunicazione.dataInizio).toBe(moment(validitaDal).startOf('day').format('YYYY-MM-DD'));
      expect(component.comunicazione.dataFine).toBe(moment(validitaAl).startOf('day').format('YYYY-MM-DD'));

      expect(mockComunicazioniService.newInserisciComunicazione).toHaveBeenCalledWith(jasmine.objectContaining(expectedComunicazione));
      expect(mockRuoloComunicazioneService.newInserisciRuoloComunicazione).toHaveBeenCalledWith([
        { idComunicazione: 1, ruolo: 'P12689' }
      ]);
      expect(mockSnackBar.open).toHaveBeenCalledWith('Comunicazione inserita con successo!', 'Chiudi', { duration: 3000 });
      expect(component.dialogRef.close).toHaveBeenCalled();
      expect(component.isSubmitting).toBeFalse();

    }));

    it('should handle error when newInserisciComunicazione fails', fakeAsync(() => {
      mockComunicazioniService.newInserisciComunicazione.and.returnValue(throwError(() => 'Error!'));
      component.salvaComunicazione();
      tick();

      expect(mockSnackBar.open).toHaveBeenCalledWith('Errore durante l\'inserimento della comunicazione. Riprova.', 'Chiudi', { duration: 5000 });
      expect(component.isSubmitting).toBe(false);
    }))
  });

});
