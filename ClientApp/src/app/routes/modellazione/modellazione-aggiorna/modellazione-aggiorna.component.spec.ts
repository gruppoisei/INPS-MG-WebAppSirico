import { ComponentFixture, fakeAsync, getTestBed, TestBed, tick } from '@angular/core/testing';
import { ModellazioneAggiornaComponent } from './modellazione-aggiorna.component';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, throwError } from 'rxjs';
import { Aree } from '@shared/services/areeservice.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Settore } from '@shared/models/settore-materia.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AreeProdotti } from '@shared/models/areeprodotti';

describe('ModellazioneAggiornaComponent', () => {
  let component: ModellazioneAggiornaComponent;
  let fixture: ComponentFixture<ModellazioneAggiornaComponent>;
  let areaSrv: jasmine.SpyObj<Aree>;
  let settoreSrv: jasmine.SpyObj<SettoreMateriaService>;

  beforeEach(async () => {
    areaSrv = jasmine.createSpyObj('Aree', [
      'newGetAreaProdotto',
      'newAggiornaAreeProdotto',
      'newDeleteAreeProdotti',
      'getSottoarea',
      'getProdotto',
      'newVerificaAreaProdotto',
    ]);

    settoreSrv = jasmine.createSpyObj('SettoreMateriaService', [
      'getSettoriMaterieById',
      'deleteSettoriMaterie',
      'getTipologiaLavoratore',
      'getSettore',
      'getAllSettoriMaterie',
      'inserisciSettore',
    ]);

    settoreSrv.getAllSettoriMaterie.and.returnValue(of([]));
    // areaSrv.newGetAreaProdotto.and.returnValue(of());
    // areaSrv.newVerificaAreaProdotto.and.returnValue(of());
    // settoreSrv.inserisciSettore.and.returnValue(of());

    await TestBed.configureTestingModule({
      declarations: [ModellazioneAggiornaComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatDialogModule,
        MatIconModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTooltipModule,
      ],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } },
        { provide: MAT_DIALOG_DATA, useValue: { formAttivo: 0, id: 1 } },
        { provide: MatSnackBar, useValue: { open: () => {} } },
        { provide: Aree, useValue: areaSrv },
        { provide: SettoreMateriaService, useValue: settoreSrv },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ModellazioneAggiornaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  const mockSettori = [
    { id: 1, nome: 'Settore A', creato: new Date(), aggiornato: new Date() },
    { id: 2, nome: 'Settore B', creato: new Date(), aggiornato: new Date() },
  ];

  const mockSettore = mockSettori[0];
  // const mockSettore = { id: 1, nome: 'Settore A', creato: new Date(), aggiornato: new Date() };

  const mockAreaProdotto = {
    id: 1,
    nome: 'Area 1',
    idSettore: 2,
    creato: new Date(),
    aggiornato: new Date(),
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call newCaricaAreeProdotto when formAttivo is 0', () => {
      spyOn(component, 'newCaricaAreeProdotto');
      component.ngOnInit();
      expect(component.newCaricaAreeProdotto).toHaveBeenCalledWith(1);
    });

    it('should call caricaSottoarea when formAttivo is 1', () => {
      component.data.formAttivo = 1;
      spyOn(component, 'caricaSottoarea');
      component.ngOnInit();
      expect(component.caricaSottoarea).toHaveBeenCalledWith(1);
    });

    it('should call caricaProdotto when formAttivo is 2', () => {
      component.data.formAttivo = 2;
      spyOn(component, 'caricaProdotto');
      component.ngOnInit();
      expect(component.caricaProdotto).toHaveBeenCalledWith(1);
    });

    it('should call caricaTipologiaLavoratore when formAttivo is 3', () => {
      component.data.formAttivo = 3;
      spyOn(component, 'caricaTipologiaLavoratore');
      component.ngOnInit();
      expect(component.caricaTipologiaLavoratore).toHaveBeenCalledWith(1);
    });

    it('should call caricaSettore when formAttivo is 4', () => {
      component.data.formAttivo = 4;
      spyOn(component, 'caricaSettore');
      component.ngOnInit();
      expect(component.caricaSettore).toHaveBeenCalledWith(1);
    });
  });

  describe('newCaricaAreeProdotto', () => {
    it('should call services and populate form fields correctly', () => {
      const mockVerifica = { esitoRimuovi: true };

      // Mock delle chiamate ai servizi
      areaSrv.newGetAreaProdotto.and.returnValue(of(mockAreaProdotto));
      settoreSrv.getAllSettoriMaterie.and.returnValue(of(mockSettori));
      areaSrv.newVerificaAreaProdotto.and.returnValue(of(mockVerifica));

      component.newCaricaAreeProdotto(0);

      // Controlla che i servizi siano stati chiamati
      expect(areaSrv.newGetAreaProdotto).toHaveBeenCalledWith(0);
      expect(settoreSrv.getAllSettoriMaterie).toHaveBeenCalled();
      expect(areaSrv.newVerificaAreaProdotto).toHaveBeenCalledWith(0);

      // Controlla che i valori siano stati assegnati correttamente e la lista settori popolata e ordinata
      expect(component.form1.controls.inputArea.value).toBe(mockAreaProdotto.nome);
      expect(component.form1.controls.selectSettoreMateria.value).toBe(mockAreaProdotto.idSettore);
      expect(component.listaSettori).toEqual(
        mockSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1))
      );
      // Controlla che areaCancellabile sia impostata correttamente
      expect(component.areaCancellabile).toBe(mockVerifica.esitoRimuovi);
    });

    it('should handle errors when services fail', () => {
      // Simula un errore nella chiamata a newGetAreaProdotto
      areaSrv.newGetAreaProdotto.and.returnValue(throwError(() => 'Error'));

      component.newCaricaAreeProdotto(0);

      // Verifica che il form non sia stato popolato in caso di errore e verifica il messaggio di errore
      expect(component.form1.controls.inputArea.value).toBe('');
      expect(component.form1.controls.selectSettoreMateria.value).toBe('');
      expect(component.errorMessage).toBe('Error fetching data');
    });
  });

  describe('popolaSettori', () => {
    it('should call getAllSettoriMaterie and populate listaSettori', () => {
      settoreSrv.getAllSettoriMaterie.and.returnValue(of(mockSettori));

      component.popolaSettori();

      expect(settoreSrv.getAllSettoriMaterie).toHaveBeenCalled();
      expect(component.listaSettori).toEqual(mockSettori);
    });

    it('should handle errors when getAllSettoriMaterie fails', () => {
      settoreSrv.getAllSettoriMaterie.and.returnValue(throwError(() => 'Error'));

      component.popolaSettori();

      expect(component.listaSettori).toEqual([]);
      expect(component.errorMessage).toBe('Error fetching sectors');
    });
  });

  describe('newAggiornaArea', () => {
    it('should update area and close dialog on success', () => {
      component.areeProdotti = {
        id: 1, // Assicurati di impostare l'ID qui
        nome: 'Area 1',
        idSettore: 2,
        creato: new Date(),
        aggiornato: new Date(),
      };

      component.form1.patchValue({
        inputArea: ' Nuova Area ',
        selectSettoreMateria: 2,
      });

      areaSrv.newAggiornaAreeProdotto.and.returnValue(of(component.areeProdotti));
      spyOn(component.dialogRef, 'close');

      component.newAggiornaArea();

      expect(areaSrv.newAggiornaAreeProdotto).toHaveBeenCalledWith(
        jasmine.objectContaining({
          id: 1, // Qui verifichi che l'ID sia quello giusto
          nome: 'Nuova Area',
          idSettore: 2,
        })
      );
      expect(component.dialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should set errorMessage on service failure', () => {
      const errorResponse = { error: { message: 'Error updating area' } };
      areaSrv.newAggiornaAreeProdotto.and.returnValue(throwError(() => errorResponse));

      component.newAggiornaArea();

      expect(component.errorMessage).toBe('Error updating area');
    });
  });

  describe('salvaSettore', () => {
    it('should call inserisciSettore and close the dialog on success', () => {
      component.form5.patchValue({
        inputSettore: 'Settore Test',
      });

      component.settore = new Settore();

      settoreSrv.inserisciSettore.and.returnValue(of(mockSettore));
      spyOn(component.dialogRef, 'close');

      component.salvaSettore();

      expect(settoreSrv.inserisciSettore).toHaveBeenCalledWith(
        jasmine.objectContaining({ nome: 'Settore Test' })
      );
      expect(component.dialogRef.close).toHaveBeenCalledWith(true);
    });

    it('should set errorMessage on service failure', () => {
      const errorResponse = { error: { message: 'Error saving sector' } };
      settoreSrv.inserisciSettore.and.returnValue(throwError(() => errorResponse));

      component.salvaSettore();

      expect(component.errorMessage).toBe('Error saving sector');
    });
  });

  describe('onSubmit', () => {
    it('should call onSubmit correctly', () => {
      component.buttonClicked = '';
      component.formAttivo = 0;
      spyOn(component, 'newAggiornaArea').and.callThrough();
      spyOn(component, 'salvaSottoArea').and.callThrough();
      spyOn(component, 'salvaProdotto').and.callThrough();
      spyOn(component, 'salvaTipologiaLavoratore').and.callThrough();
      spyOn(component, 'salvaSettore').and.callThrough();

      component.onSubmit();

      expect(component.newAggiornaArea).not.toHaveBeenCalled();
      expect(component.salvaSottoArea).not.toHaveBeenCalled();
      expect(component.salvaProdotto).not.toHaveBeenCalled();
      expect(component.salvaTipologiaLavoratore).not.toHaveBeenCalled();
      expect(component.salvaSettore).not.toHaveBeenCalled();
    });
  });

  describe('clickDelete', () => {
    it('should toggle deleteButton from false to true', () => {
      component.deleteButton = false;
      component.clickDelete();
      expect(component.deleteButton).toBeTrue();
    });

    it('should toggle deleteButton from true to false', () => {
      component.deleteButton = true;
      component.clickDelete();
      expect(component.deleteButton).toBeFalse();
    });
  });

  describe('delay', () => {
    it('should resolve after the specified delay', fakeAsync(() => {
        const ms = 125; // Tempo di attesa
        const start = Date.now();

        component.delay(ms);
        tick(ms); // Avanza il timer

        const duration = Date.now() - start;
        expect(duration).toBeGreaterThan(ms - 10);
        expect(duration).toBeLessThan(ms + 10);
    }));
  });

  describe('elimina', () => {
    it('should call newDeleteAreeProdotti and close dialog for case 0', fakeAsync(() => {

        areaSrv.newDeleteAreeProdotti.and.returnValue(of(undefined));
        spyOn(component.dialogRef, 'close');

        component.areeProdotti = new AreeProdotti();
        component.formAttivo = 0;

        component.elimina();

        tick(1);

        expect(areaSrv.newDeleteAreeProdotti).toHaveBeenCalledWith(0);
        expect(component.dialogRef.close).toHaveBeenCalled();
    }));

    it('should call deleteSettoriMaterie and close dialog for case 4', fakeAsync(() => {

        settoreSrv.deleteSettoriMaterie.and.returnValue(of(undefined));
        spyOn(component.dialogRef, 'close');

        component.settore = new Settore();
        component.formAttivo = 4;

        component.elimina();

        tick(1);

        expect(settoreSrv.deleteSettoriMaterie).toHaveBeenCalledWith(0);
        expect(component.dialogRef.close).toHaveBeenCalled();
    }));
  });


});
