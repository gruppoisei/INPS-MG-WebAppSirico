import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModaleTestiAspettiComponent } from './modale-testi-aspetti.component';

describe('ModaleTestiAspettiComponent', () => {
  let component: ModaleTestiAspettiComponent;
  let fixture: ComponentFixture<ModaleTestiAspettiComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<ModaleTestiAspettiComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      declarations: [ ModaleTestiAspettiComponent ],
      imports: [ MatDialogModule ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { text: 'Some text' } },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaleTestiAspettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onClose', () => {
    it('should call dialogRef.close when onClose is called', () => {
      component.onClose(); 
      expect(dialogRefSpy.close).toHaveBeenCalled();  // Verifica che close sia stato chiamato
    });
  
    it('should pass the correct data to the component', () => {
      expect(component.data.text).toBe('Some text');  // Verifica che i dati siano passati correttamente al componente
    });
  });
});
