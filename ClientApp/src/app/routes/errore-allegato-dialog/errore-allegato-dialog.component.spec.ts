import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErroreAllegatoDialogComponent } from './errore-allegato-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ErroreAllegatoDialogComponent', () => {
  let component: ErroreAllegatoDialogComponent;
  let fixture: ComponentFixture<ErroreAllegatoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroreAllegatoDialogComponent ],
      imports: [
        MatDialogModule,
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { formAttivo: 0, id: 1 } },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroreAllegatoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
