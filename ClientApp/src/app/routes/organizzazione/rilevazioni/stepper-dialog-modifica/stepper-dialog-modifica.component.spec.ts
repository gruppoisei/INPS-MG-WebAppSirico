import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperDialogModificaComponent } from './stepper-dialog-modifica.component';
import { MatDialog } from '@angular/material/dialog';
import { StepperService } from '@shared/services/stepper.service';
import { of, BehaviorSubject } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

describe('StepperDialogModificaComponent', () => {
  let component: StepperDialogModificaComponent;
  let fixture: ComponentFixture<StepperDialogModificaComponent>;
  let mockStepperService: jasmine.SpyObj<StepperService>;
  let mockDialog: jasmine.SpyObj<MatDialog>;
  let mockDatiAspetto$: BehaviorSubject<any>;

  beforeEach(async () => {
    mockStepperService = jasmine.createSpyObj('StepperService', ['getTitolo', 'getAspetto', 'checkStringOnlySpaces']);
    mockDialog = jasmine.createSpyObj('MatDialog', ['closeAll']);
    mockDatiAspetto$ = new BehaviorSubject(null);
    mockStepperService.datiAspetto$ = mockDatiAspetto$;

    await TestBed.configureTestingModule({
      declarations: [StepperDialogModificaComponent],
      providers: [
        { provide: StepperService, useValue: mockStepperService },
        { provide: MatDialog, useValue: mockDialog },
      ],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(StepperDialogModificaComponent);
    component = fixture.componentInstance;

    // Initialize the mock service returns
    mockStepperService.getTitolo.and.returnValue('Criticita');
    mockStepperService.getAspetto.and.returnValue({
      idAspetto: 1,
      nomeAspetto: 'Aspetto di esempio',
      descrizioneCriticita: 'Test description',
      descrizioneSuggerimento: '',
      hasAllegato: false,
      nuovoAspetto: false
    });

    // Call the constructor to initialize the component state
    component = new StepperDialogModificaComponent(mockStepperService, mockDialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties correctly', () => {
    expect(component.titolo).toBe('Criticita');
    expect(component.aspettoDaModificare).toEqual({
      idAspetto: 1,
      nomeAspetto: 'Aspetto di esempio',
      descrizioneCriticita: 'Test description',
      descrizioneSuggerimento: '',
      hasAllegato: false,
      nuovoAspetto: false
    });
    expect(component.descrizione).toBe('Test description');
  });

  it('should alert if description is only spaces', () => {
    spyOn(window, 'alert');  // Spy on the window alert
    mockStepperService.checkStringOnlySpaces.and.returnValue(true);
    component.descrizione = '   ';  // Spaces only

    component.confirmDialogStepperModifica();

    expect(window.alert).toHaveBeenCalledWith('Inserire una descrizione valida per proseguire.');
  });

  it('should close dialog on closeDialogStepperModifica', () => {
    component.closeDialogStepperModifica();
    expect(mockDialog.closeAll).toHaveBeenCalled();
  });
});


