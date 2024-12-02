import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperDialogCreazioneAspettoComponent } from './stepper-dialog-creazione-aspetto.component';
import { MatDialog } from '@angular/material/dialog';
import { ProdottiService } from '@shared/services/prodotti.service';
import { StepperService } from '@shared/services/stepper.service';
import { of, BehaviorSubject } from 'rxjs';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('StepperDialogCreazioneAspettoComponent', () => {
  let component: StepperDialogCreazioneAspettoComponent;
  let fixture: ComponentFixture<StepperDialogCreazioneAspettoComponent>;
  let mockProdottiService: jasmine.SpyObj<ProdottiService>;
  let mockStepperService: jasmine.SpyObj<StepperService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    // Crea i mock dei servizi
    mockProdottiService = jasmine.createSpyObj('ProdottiService', ['getAspettiEDescrizioni']);
    mockStepperService = jasmine.createSpyObj('StepperService', ['checkStringOnlySpaces']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);

    // Inizializza i BehaviorSubject
    mockStepperService.nuovoAspetto$ = new BehaviorSubject<string>('');

    await TestBed.configureTestingModule({
      declarations: [StepperDialogCreazioneAspettoComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
      ],
      providers: [
        { provide: ProdottiService, useValue: mockProdottiService },
        { provide: StepperService, useValue: mockStepperService },
        { provide: MatDialog, useValue: mockDialog },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperDialogCreazioneAspettoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not open error dialog and call next on stepper service if name is valid', () => {
    mockStepperService.checkStringOnlySpaces.and.returnValue(false);
    component.aspettiDaValutare = [{ nomeAspetto: 'Aspetto 1', idAspetto: 1, descrizioneAspetto: 'Descrizione 1' }];
    component.nomeNuovoAspetto = 'Aspetto 2'; // Nome valido

    spyOn(mockStepperService.nuovoAspetto$, 'next'); // Assicurati di avere questo spy

    component.confirmDialogStepperNuovoAspetto();
    expect(mockDialog.closeAll).toHaveBeenCalled();
    expect(mockStepperService.nuovoAspetto$.next).toHaveBeenCalledWith('Aspetto 2'); // Questo dovrebbe ora funzionare
});

  it('should close dialog and reset value on closeDialogStepperNuovoAspetto', () => {
      // Spia il metodo next
      spyOn(mockStepperService.nuovoAspetto$, 'next'); // Aggiungi questo

      component.closeDialogStepperNuovoAspetto();
      expect(mockStepperService.nuovoAspetto$.next).toHaveBeenCalledWith(''); // Controlla che next sia chiamato
      expect(mockDialog.closeAll).toHaveBeenCalled();
  });

  it('should open error dialog if name is only spaces', () => {
    mockStepperService.checkStringOnlySpaces.and.returnValue(true);
    component.nomeNuovoAspetto = '   '; // Spazi bianchi
    component.confirmDialogStepperNuovoAspetto();
    expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, jasmine.any(Object));
  });

  it('should open error dialog if name is "altro"', () => {
    component.nomeNuovoAspetto = 'altro';
    component.confirmDialogStepperNuovoAspetto();
    expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, jasmine.any(Object));
  });

  it('should open error dialog if aspect already exists', () => {
    component.aspettiDaValutare = [{ nomeAspetto: 'Aspetto 1', idAspetto: 1, descrizioneAspetto: 'Descrizione 1' }];
    component.nomeNuovoAspetto = 'Aspetto 1';
    component.confirmDialogStepperNuovoAspetto();
    expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, jasmine.any(Object));
  });

  it('should open error dialog with specific message', () => {
    const message = 'Error message';
    component.openErrorDialog(message);
    expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
      data: { message: message },
    });
  });
});
