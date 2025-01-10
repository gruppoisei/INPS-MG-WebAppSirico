import { ComponentFixture, fakeAsync, flushMicrotasks, TestBed, tick } from '@angular/core/testing';

import { ListaUtentiModificaComponent } from './lista-utenti-modifica.component';
import { UserService } from '@shared/services/user.service';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ListaUtentiModificaComponent', () => {
  let component: ListaUtentiModificaComponent;
  let fixture: ComponentFixture<ListaUtentiModificaComponent>;

  let utentiSrv: jasmine.SpyObj<UserService>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<ListaUtentiModificaComponent>>;

  const mockRow = {
    attivo: true,
    codiceFiscale: null,
    cognome: "C",
    creato: "2024-08-08T15:08:05.917",
    email: "f.c@emailsbagliata.it",
    id: 1017,
    matricola: "E0012345",
    nome: "F",
    ruoloDTO: [
      {
        id: 1,
        ruolo1: "P12689",
        descrizione: "Amministratore"
      },
      {
        id: 2,
        ruolo1: "P12690",
        descrizione: "Referente Centrale"
      },
      {
        id: 3,
        ruolo1: "P12800",
        descrizione: "Operatore Centrale"
      }
    ],
    sedeDTO: [
      { sedeCodSede: "030000", sedeDesc: "ANCONA" },
      { sedeCodSede: "818000", sedeDesc: "PIEMONTE" },
      { sedeCodSede: "440000", sedeDesc: "MACERATA" },
      { sedeCodSede: "498100", sedeDesc: "DCM MILANO" }
    ],
    username: "f.c"
  };

  let mockSelectedTab: number = 0 || 1;

  utentiSrv = jasmine.createSpyObj('UserService', ['']);
  utentiSrv.datiUtente$ = new BehaviorSubject<any>({ row: mockRow, selectedTab: mockSelectedTab }); 
  dialogRef = jasmine.createSpyObj('MatDialogRef', ['closeAll']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaUtentiModificaComponent ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,        
        MatDialogModule
      ],
      providers: [
        { provide: UserService, useValue: utentiSrv },
        { provide: MatDialogRef, useValue: dialogRef},
      ],
    })
    .compileComponents();
  
    fixture = TestBed.createComponent(ListaUtentiModificaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => { 
    it('should initialize component', () => {
      expect(component.data).toBe(mockRow);
      expect(component.idTab).toBe(mockSelectedTab);
    });
  });

  describe('showField', () => {
    it ('should return "-" if valueToDisplay is null or undefined or empty', () => {
      let result = component.showField(null!);
      expect(result).toBe('-');

      result = component.showField(undefined!);
      expect(result).toBe('-');

      result = component.showField('');
      expect(result).toBe('-');

      result = component.showField(' '.trim());
      expect(result).toBe('-');
    });

    it('should return valueToDisplay else', () => {
      const expectedResult = 'SomeText';
      const result = component.showField('SomeText');
      expect(result).toBe(expectedResult);
    });    
  });

  describe('closeDialog', () => {
    it('should close all dialogs', fakeAsync(() => {
      component.dialog = TestBed.inject(MatDialog);
      const closeAll = spyOn(component.dialog, 'closeAll').and.callThrough();
  
      component.dialog.open(ListaUtentiModificaComponent);
      
      component.closeDialog();
  
      expect(closeAll).toHaveBeenCalled();
    }));
  });
  
});
