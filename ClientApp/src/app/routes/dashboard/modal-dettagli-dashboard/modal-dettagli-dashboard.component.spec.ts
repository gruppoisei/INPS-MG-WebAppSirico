import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of, BehaviorSubject } from 'rxjs';

import { ModalDettagliDashboardComponent } from './modal-dettagli-dashboard.component';
import { MessaggiService } from '@shared/services/messaggi.service';
import { StorageService } from '@shared';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ModalDettagliDashboardComponent', () => {
  let component: ModalDettagliDashboardComponent;
  let fixture: ComponentFixture<ModalDettagliDashboardComponent>;
  let mockMessaggiService: jasmine.SpyObj<MessaggiService>;
  let mockStorageService: jasmine.SpyObj<StorageService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    mockMessaggiService = jasmine.createSpyObj(
      'MessaggiService',
      [
        'updateMessaggio',
        'insertMessaggio',
        'disattivaMessaggioAttivo',
        'riattivaMessaggioDisattivato',
      ],
      {
        statoMessaggio$: new BehaviorSubject<boolean>(true),
        datiMessaggio$: new BehaviorSubject<any>(0),
      }
    );

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

    mockStorageService = jasmine.createSpyObj('StorageService', ['getItem']);
    mockStorageService.getItem.and.returnValue('12345'); // Simula il valore della matricola

    mockDialog = jasmine.createSpyObj('MatDialog', ['open', 'closeAll']);

    await TestBed.configureTestingModule({
      imports: [ 
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        NoopAnimationsModule
      ],
      declarations: [ModalDettagliDashboardComponent],
      providers: [
        { provide: MessaggiService, useValue: mockMessaggiService },
        { provide: StorageService, useValue: mockStorageService },
        { provide: MatDialog, useValue: mockDialog },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDettagliDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call enableDisableForms and checkMessaggioValue', () => {
      spyOn(component, 'enableDisableForms');
      spyOn(component, 'checkMessaggioValue');

      component.ngOnInit();

      expect(component.enableDisableForms).toHaveBeenCalled();
      expect(component.checkMessaggioValue).toHaveBeenCalled();
    });
  });

  describe('onDestroy', () => {
    it('should set variable to false when component is destroyed', () => {
      component.ngOnDestroy();
      expect(component.disableElimina).toBeFalse();
    });
  });

  describe('checkRoles', () => {
    it('should set disableButton false if ruolo includes ruoloAmministratore or ruoloDCO', () => {
      component.checkRoles();
      expect(component.disableButton).toBeFalse();
    });
  });

  describe('enableDisableForms', () => {
    it('should enable form controls when messaggioAttivo is true', () => {
      mockMessaggiService.statoMessaggio$.next(true);
      component.enableDisableForms();

      expect(component.form.controls['oggettoMessaggio'].enabled).toBeTrue();
      expect(component.form.controls['contenutoMessaggio'].enabled).toBeTrue();
    });

    it('should disable form controls when messaggioAttivo is false', () => {
      mockMessaggiService.statoMessaggio$.next(false);
      component.enableDisableForms();

      expect(component.form.controls['oggettoMessaggio'].disabled).toBeTrue();
      expect(component.form.controls['contenutoMessaggio'].disabled).toBeTrue();
    });
  });

  describe('checkMessaggioValue', () => {
    it('should set nomeBottone to "Crea Nuovo" and disableElimina to true when datiMessaggio$ is 0', () => {
      mockMessaggiService.datiMessaggio$.next(0);
      component.checkMessaggioValue();

      expect(component.nomeBottone).toBe('Crea Nuovo');
      expect(component.disableElimina).toBeTrue();
    });

    it('should set form values and nomeBottone to "Modifica" when datiMessaggio$ is a valid message', () => {
      const mockData = { id: 1, oggetto: 'Test', messaggio: 'Messaggio di prova' };
      mockMessaggiService.datiMessaggio$.next(mockData);
      component.checkMessaggioValue();

      expect(component.nomeBottone).toBe('Modifica');
      expect(component.form.value).toEqual({
        oggettoMessaggio: mockData.oggetto.trim(),
        contenutoMessaggio: mockData.messaggio.trim(),
      });
    });
  });

  describe('modifica', () => {
    it('should call modificaMessaggio when form is valid', () => {
      spyOn(component, 'modificaMessaggio');
      component.form.setValue({
        oggettoMessaggio: 'Valid Oggetto',
        contenutoMessaggio: 'Valid Contenuto',
      });

      component.modifica();

      expect(component.modificaMessaggio).toHaveBeenCalled();
    });

    it('should open error dialog for validation errors', () => {
      component.form.setValue({
        oggettoMessaggio: '',
        contenutoMessaggio: '',
      });

      component.modifica();

      expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
        data: { titolo: 'Errore:', message: "L'oggetto del messaggio è obbligatorio." },
      });
    });
  });

  describe('modificaMessaggio', () => {
    it('should call insertMessaggio for new message', () => {
      component.data = null;
      component.form.setValue({
        oggettoMessaggio: 'New Oggetto',
        contenutoMessaggio: 'New Contenuto',
      });

      component.modificaMessaggio();

      expect(mockMessaggiService.insertMessaggio).toHaveBeenCalledWith(
        'New Oggetto',
        'New Contenuto',
        '12345'
      );
    });
  });

  describe('openErrorDialog', () => {
    it('should open the error dialog with correct data', () => {
      component.openErrorDialog('Errore Test', 'Messaggio di prova');

      expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
        data: { titolo: 'Errore Test', message: 'Messaggio di prova' },
      });
    });
  });

  describe('closeDialog', () => {
    it('should call MatDialog.closeAll', () => {
      component.closeDialog();
      expect(mockDialog.closeAll).toHaveBeenCalled();
    });
  });

  it('should set disableElimina to false on component destruction', () => {
    component.disableElimina = true;

    component.ngOnDestroy();

    expect(component.disableElimina).toBeFalse();
  });
});
