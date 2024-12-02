import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { PopupErroreInserimentoComponent } from './popup-errore-inserimento.component';

describe('PopupErroreInserimentoComponent', () => {
  let component: PopupErroreInserimentoComponent;
  let fixture: ComponentFixture<PopupErroreInserimentoComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  const mockDialogData = {
    titolo: 'Errore',
    message: 'Qualcosa è andato storto',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupErroreInserimentoComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PopupErroreInserimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the data passed to the dialog', () => {
    expect(component.data.titolo).toEqual('Errore');
    expect(component.data.message).toEqual('Qualcosa è andato storto');
  });

  it('should call MatDialogRef.close when onClose is invoked', () => {
    component.onClose();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });
});
