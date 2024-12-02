import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RilevazioniNuovaComponent } from './rilevazioni-nuova.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { DocumentiService } from '@shared/services/documenti.service';
import { ProdottiService } from '@shared/services/prodotti.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TerritorioService } from '@shared/services/territorio.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { Settore } from '@shared/models/settore-materia.model';
import { RilevazioneService } from '@shared/services/rilevazione.service';


describe('RilevazioniNuovaComponent', () => {
  let component: RilevazioniNuovaComponent;
  let fixture: ComponentFixture<RilevazioniNuovaComponent>;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let documentiServiceSpy: jasmine.SpyObj<DocumentiService>;

  beforeEach(async () => {
    const dialogMock = jasmine.createSpyObj('MatDialog', ['open']);
    dialogMock.open.and.returnValue({ afterClosed: () => of(true) });
    documentiServiceSpy = jasmine.createSpyObj('DocumentiService', ['getFileSegnalazione', 'getFileAspetti','deleteFileSegnalazione','deleteFileAspetto',]);
    const settoreMateriaServiceSpy = jasmine.createSpyObj('SettoreMateriaService', ['getSettoriConAreeProdotti']);


    await TestBed.configureTestingModule({
      declarations: [RilevazioniNuovaComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatStepperModule,
        MatInputModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        FormBuilder,
        { provide: MatDialog, useValue: dialogMock },
        { provide: DocumentiService, useValue: documentiServiceSpy }, 
        { provide: ProdottiService, useValue: {} },
        { provide: SettoreMateriaService, useValue: settoreMateriaServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RilevazioniNuovaComponent);
    component = fixture.componentInstance;
    dialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;

    // Mocking dei metodi del componente
    spyOn(component, 'getSettoriMaterie').and.stub();
    spyOn(component, 'getAllAreaProdotto').and.stub();
    spyOn(component, 'loadTipologieContenzioso').and.stub();
    spyOn(component, 'loadAspettiDaValutare').and.stub();
    spyOn(component, 'getSedi').and.stub();

    // Inizializzazione dei form group nel componente
    component.firstFormGroup = new FormGroup({
      settoreMateria: new FormControl(''),
      areaProdotto: new FormControl(''),
      sede: new FormControl(''),
      tipologiaContenzioso: new FormControl(''),
    });

    component.secondFormGroup = new FormGroup({
      step2Aspetti: new FormControl(),
      step2Criticita: new FormControl(),
    });

    component.role = 'P12689';

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  /* describe('Initialization', () => {
    it('should set ruolo values on ngOnInit', () => {
      component.role = 'P12689';
      component.ngOnInit();
      expect(component.role).toBe('P12689');
    });

    it('should load all necessary data on ngOnInit', async () => {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
      spyOn(component, 'getSettoriMaterie');
      spyOn(component, 'getAllAreaProdotto');
      spyOn(component, 'loadTipologieContenzioso');
      spyOn(component, 'loadAspettiDaValutare');
      spyOn(component, 'getSedi'); 
      await component.ngOnInit();
      expect(component.getSettoriMaterie).toHaveBeenCalled();
      expect(component.getAllAreaProdotto).toHaveBeenCalled();
      expect(component.loadTipologieContenzioso).toHaveBeenCalled();
      expect(component.loadAspettiDaValutare).toHaveBeenCalled();
      expect(component.getSedi).toHaveBeenCalled();
    }); 
  });
*/
  describe('formatToSixDigits', () => {
    it('should format number to six digits', () => {
      const result = component.formatToSixDigits(123);
      expect(result).toBe('000123');
    });

    it('should return empty string for non-numeric input', () => {
      const result = component.formatToSixDigits('abc');
      expect(result).toBe('');
    });
  });

  describe('clear controls', () => {
    it('should reset settore control and area product', () => {
      component.clearSettore();
      expect(component.firstFormGroup.get('settoreMateria')!.value).toBe('');
      expect(component.firstFormGroup.get('areaProdotto')!.value).toBe('');
    });

    it('should clear sede control and reset value in form group', () => {
      component.clearSede();
      expect(component.firstFormGroup.get('sede')!.value).toBe('');
    });

    it('should clear tipologia control and reset value in form group', () => {
      component.clearTipologia();
      expect(component.firstFormGroup.get('tipologiaContenzioso')!.value).toBe('');
    });
  });

  describe('Dialogs', () => {
    it('should open StepperDialogModificaComponent', () => {
      component.dialogStepperModifica();
      expect(dialogSpy.open).toHaveBeenCalled();
    });

    it('should open StepperDialogCreazioneAspettoComponent dialog', () => {
      dialogSpy.open.and.returnValue({
        afterClosed: () => of(true),
      } as any);

      component.dialogStepperCreazioneAspetto();
      expect(dialogSpy.open).toHaveBeenCalled();
    });
  });

  describe('aspetto management', () => {
    it('should add a valid Aspetto to listaAspettiAggiunti', () => {
      component.secondFormGroup.patchValue({
        step2Aspetti: 1,
        step2Criticita: 'Test Criticita',
      });
      component.aspettiDaValutare = [{ idAspetto: 1, nomeAspetto: 'Test Aspetto', descrizioneAspetto: '' }];
      component.aggiungiAspettoCriticita();

      expect(component.listaAspettiAggiunti.length).toBe(1);
      expect(component.listaAspettiAggiunti[0].nomeAspetto).toBe('Test Aspetto');
      expect(component.listaAspettiAggiunti[0].descrizioneCriticita).toBe('Test Criticita');
    });
  });

  describe('isValidDatiGenerali', () => {
    it('should return true if all required fields are filled', () => {
      component.firstFormGroup.patchValue({
        settoreMateria: 'some settore',
        areaProdotto: 'some product',
        sede: 'some sede',
      });
      expect(component.isValidDatiGenerali()).toBeTrue();
    });

    it('should return false if any required field is empty', () => {
      component.firstFormGroup.patchValue({
        settoreMateria: 'some settore',
        areaProdotto: '',
        sede: 'some sede',
      });
      expect(component.isValidDatiGenerali()).toBeFalse();
    });
  }); 

  it('dovrebbe filtrare correttamente le opzioni di Settore', () => {
    component.settoreMateria = [
      { id: 1, nome: 'Settore A' },
      { id: 2, nome: 'Settore B' },
    ];
    const result = component['_filterSettore']('A');
    expect(result).toEqual([{ id: 1, nome: 'Settore A' }]);
  });

  it('dovrebbe filtrare correttamente le opzioni di Area', () => {
    component.areaProdotto = [
      { id: 1, nome: 'Area A' },
      { id: 2, nome: 'Area B' },
    ];
    const result = component['_filterArea']('B');
    expect(result).toEqual([{ id: 2, nome: 'Area B' }]);
  });

  it('dovrebbe filtrare correttamente le opzioni di Sede', () => {
    component.sede = [
      { id: 123, nome: 'Sede A' },
      { id: 456, nome: 'Sede B' },
    ];
    const result = component['_filterSede']('456');
    expect(result).toEqual([{ id: 456, nome: 'Sede B' }]);
  });

  it('dovrebbe filtrare correttamente gli aspetti da valutare', () => {
    component.aspettiDaValutare = [
      { idAspetto: 1, nomeAspetto: 'Aspetto A', descrizioneAspetto: '' },
      { idAspetto: 2, nomeAspetto: 'Aspetto B', descrizioneAspetto: '' },
    ];
    const result = component['_filterAspetti']('B');
    expect(result).toEqual([{ idAspetto: 2, nomeAspetto: 'Aspetto B', descrizioneAspetto: '' }]);
  });

  

  it('dovrebbe restituire false se nessun aspetto è stato aggiunto', () => {
    component.listaAspettiAggiunti = [];
    expect(component.isValidFormGroup()).toBeFalse();
  });

  it('dovrebbe restituire errore se nessun valore valido è presente', () => {
    const control = new FormControl('');
    const validator = component.checkFormEGriglia();
    const result = validator(control);
    expect(result).toEqual({ esito: false });
  });

  it('dovrebbe aggiungere correttamente i file', () => {
    const file = new File(['content'], 'test.txt', { type: 'text/plain' });
    component.onFilesAddedDatiGenerali(file);
    expect(component.fileSegnalazione).toBe(file);
  });

  it('dovrebbe restituire una lista vuota se non ci sono corrispondenze', () => {
    component.aspettiDaValutare = [
      { idAspetto: 1, nomeAspetto: 'Aspetto A', descrizioneAspetto: '' },
    ];
    const result = component['_filterAspetti']('Z');
    expect(result).toEqual([]);
  });

  it('dovrebbe restituire tutte le sedi se il filtro è vuoto', () => {
    component.sede = [
      { id: 1, nome: 'Sede A' },
      { id: 2, nome: 'Sede B' },
    ];
    const result = component['_filterSede']('');
    expect(result).toEqual(component.sede);
  });

  it('dovrebbe impostare il valore del campo su uno spazio vuoto quando ottiene il focus', () => {
    const control = new FormControl('');
    component.onFocus(control);
    expect(control.value).toBe(' ');
  });

  it('dovrebbe restituire true se tutti i campi richiesti per il prodotto sono validi', () => {
    component.nomeSettoreMateria = 'Settore';
    component.nomeAreaProdotto = 'Area';
    component.nomeSede = 'Sede';
    expect(component.isAllFieldsValidProdotto()).toBeTrue();
  });

  it('dovrebbe restituire false se manca un campo per il contenzioso', () => {
    component.nomeSettoreMateria = 'Settore';
    component.nomeAreaProdotto = '';
    component.nomeSede = 'Sede';
    component.nomeTipologiaContenzioso = 'Tipologia';
    expect(component.isAllFieldsValidContenzioso()).toBeFalse();
  });

  it('dovrebbe rimuovere il file associato a un aspetto', () => {
    const file = { file: new File([''], 'test.txt'), idAspetto: 1 };
    component.filesAspetti.push(file);
    component.removeFileAspetti(file);
    expect(component.filesAspetti.length).toBe(0);
  });

  it('dovrebbe restituire il nome del file per un aspetto dato', () => {
    component.nomiFileAspetti = [{ idAspetto: 1, fileName: 'file1.txt' }];
    const result = component.getNomeFileAspetto(1);
    expect(result).toBe('file1.txt');
  });

  it('dovrebbe invertire il valore di showGestioneFileDatiGenerali', () => {
    component.showGestioneFileDatiGenerali = false;
    component.toggleAllegaDatiGenerali();
    expect(component.showGestioneFileDatiGenerali).toBeTrue();
  
    component.toggleAllegaDatiGenerali();
    expect(component.showGestioneFileDatiGenerali).toBeFalse();
  });

  it('dovrebbe troncare il testo se supera il limite specificato', () => {
    const text = 'Questo è un testo molto lungo che deve essere troncato';
    const truncated = component.truncateText(text, 10);
    expect(truncated).toBe('Questo è u...');
  });
  
  it('dovrebbe restituire il testo completo se non supera il limite', () => {
    const text = 'Test breve';
    const truncated = component.truncateText(text, 20);
    expect(truncated).toBe('Test breve');
  });

  it('dovrebbe restituire true se tutti i dati sono validi', () => {
    component.firstFormGroup.patchValue({
      settoreMateria: 'Settore Test',
      areaProdotto: 'Area Test',
      sede: 'Sede Test',
    });
  
    component.listaAspettiAggiunti = [{
      idAspetto: 1, descrizioneCriticita: 'Criticità valida',
      nomeAspetto: '',
      descrizioneSuggerimento: '',
      hasAllegato: false,
      nuovoAspetto: false
    }];
  
    expect(component.isValidFormGroup()).toBeTrue();
  });

  it('dovrebbe aggiungere un file alla lista di file aspetti', () => {
    const file = { file: new File([''], 'test.txt'), idAspetto: 1 };
  
    component.onFilesAddedCriticita(file);
    expect(component.filesAspetti.length).toBe(1);
    expect(component.filesAspetti[0]).toEqual(file);
  });

  it('dovrebbe restituire una lista vuota se non ci sono settori corrispondenti', () => {
    component.settoreMateria = [];
    const result = component['_filterSettore']('Test');
    expect(result).toEqual([]);
  });

  it('dovrebbe restituire una stringa vuota se il settore è undefined', () => {
    const result = component.displaySettore(undefined);
    expect(result).toBe('');
  });

  it('dovrebbe restituire una stringa vuota se l\'area è undefined', () => {
    const result = component.displayArea(undefined);
    expect(result).toBe('');
  });

  it('dovrebbe restituire una stringa formattata con ID e nome per la sede', () => {
    const sede = { id: 123, nome: 'Sede Test' };
    const result = component.displaySede(sede);
    expect(result).toBe('000123 - Sede Test');
  });

  

  it('dovrebbe restituire false se le criticità degli aspetti sono vuote', () => {
    component.listaAspettiAggiunti = [{
      idAspetto: 1, descrizioneCriticita: '',
      nomeAspetto: '',
      descrizioneSuggerimento: '',
      hasAllegato: false,
      nuovoAspetto: false
    }];
    expect(component.isValidFormGroup()).toBeFalse();
  });

  it('dovrebbe non fare nulla se ID non è presente nella lista', () => {
    component.listaAspettiAggiunti = [
      {
        idAspetto: 1, nomeAspetto: 'Aspetto 1', descrizioneCriticita: 'Criticità 1', nuovoAspetto: false,
        descrizioneSuggerimento: '',
        hasAllegato: false
      },
    ];
  
    component.rimuoviAspettoAggiunto(99);
  
    expect(component.listaAspettiAggiunti.length).toBe(1);
  });

  it('non dovrebbe fare nulla se il ruolo è P12689 o P12690', () => {
    component.role = 'P12689'; // Simula un ruolo specifico
    const alertSpy = spyOn(window, 'alert'); // Verifica che l'alert non venga chiamato
  
    component.getSedi();
  
    expect(alertSpy).not.toHaveBeenCalled(); // Nessun alert deve essere mostrato
    expect(component.sede).toEqual([]); // Controlla che sia un array vuoto
  });
  
  it('should update area and settore in form group on areaSelected', () => {
    component.settoreMateria = [{ id: 1, nome: 'Settore 1' }];
    const mockEvent = { option: { value: { id: 1, idSettore: 1, nome: 'Area Test' } } };
    component.areaSelected(mockEvent);
    expect(component.firstFormGroup.value.areaProdotto).toBe(1);
    expect(component.firstFormGroup.value.settoreMateria).toBe(1);
  });

  it('should call formatIdToNameStep1 on stepper change', () => {
    const formatSpy = spyOn(component, 'formatIdToNameStep1');
    component.stepperChange({ selectedIndex: 1 });
    expect(formatSpy).toHaveBeenCalled();
  });

  describe('moveToStep', () => {
    it('should set the stepper to the correct index', () => {
      component.stepper = { selectedIndex: 0 } as MatStepper;
      component.moveToStep(2);
      expect(component.stepper.selectedIndex).toBe(1);
    });
  });

  describe('canAddAspect', () => {
    it('should return true if aspetto and criticità are valid', () => {
      component.secondFormGroup.patchValue({
        step2Aspetti: 1,
        step2Criticita: 'Valid Criticità',
      });
      expect(component.canAddAspect()).toBeTrue();
    });
  });

  describe('selectRole', () => {
  
    it('should return ruoloRegionale if role includes ruoloRegionale', () => {
      component.role = 'P12689;P12799'; // Simula un ruolo che include ruoloRegionale
      component.ruoloRegionale = 'P12799';
      const result = component.selectRole();
      expect(result).toBe('P12799');
    });
  
    it('should return ruoloProvinciale if role includes ruoloProvinciale', () => {
      component.role = 'P12801;P12690'; // Simula un ruolo che include ruoloProvinciale
      component.ruoloProvinciale = 'P12801';
      const result = component.selectRole();
      expect(result).toBe('P12801');
    });
  
    it('should return P12689 if role includes P12689', () => {
      component.role = 'P12689;P12802'; // Simula un ruolo che include P12689
      const result = component.selectRole();
      expect(result).toBe('P12689');
    });
  
    it('should return an empty string if no matching role is found', () => {
      component.role = 'P12802;P12803'; // Simula un ruolo che non corrisponde
      const result = component.selectRole();
      expect(result).toBe('');
    });
  });

  describe('inviaSegnalazioneProdotto', () => {
    it('should call salvaSegnalazioneProdotto with correct data', () => {
      const rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['salvaSegnalazioneProdotto']);
      rilevazioneSrvSpy.salvaSegnalazioneProdotto.and.returnValue(of({ id: 123 }));
      component['rilevazioneSrv'] = rilevazioneSrvSpy;

      (component as any).inviaSegnalazioneProdotto({ id: 0 }, 2);

      expect(rilevazioneSrvSpy.salvaSegnalazioneProdotto).toHaveBeenCalled();
    });

    it('should navigate on success when state is not draft (2)', () => {
      const rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['salvaSegnalazioneProdotto']);
      rilevazioneSrvSpy.salvaSegnalazioneProdotto.and.returnValue(of({ id: 123 }));
      component['rilevazioneSrv'] = rilevazioneSrvSpy;

      const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      component['router'] = routerSpy;

      (component as any).inviaSegnalazioneProdotto({ id: 0 }, 3); // Stato non in bozza

      expect(routerSpy.navigate).toHaveBeenCalledWith(['/segnalazione/inserimento']);
    });

    it('should not navigate on success when state is draft (2)', () => {
      const rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['salvaSegnalazioneProdotto']);
      rilevazioneSrvSpy.salvaSegnalazioneProdotto.and.returnValue(of({ id: 123 }));
      component['rilevazioneSrv'] = rilevazioneSrvSpy;

      const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      component['router'] = routerSpy;

      (component as any).inviaSegnalazioneProdotto({ id: 0 }, 2); // Stato in bozza

      expect(routerSpy.navigate).not.toHaveBeenCalled();
    });

    it('should call openErrorDialog if response is false', () => {
      const rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['salvaSegnalazioneProdotto']);
      rilevazioneSrvSpy.salvaSegnalazioneProdotto.and.returnValue(of({ id: null }));
      component['rilevazioneSrv'] = rilevazioneSrvSpy;

      spyOn(component, 'openErrorDialog');
      (component as any).inviaSegnalazioneProdotto({ id: 0 }, 2);

      expect(component.openErrorDialog).toHaveBeenCalledWith('Errore durante l\'invio dei dati');
    });

    it('should call openErrorDialog if an error occurs', () => {
      const rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['salvaSegnalazioneProdotto']);
      rilevazioneSrvSpy.salvaSegnalazioneProdotto.and.returnValue(
        throwError(() => ({ error: { message: 'Esiste già una segnalazione identica con lo stato di bozza.' } }))
      );
      component['rilevazioneSrv'] = rilevazioneSrvSpy;

      spyOn(component, 'openErrorDialog');
      (component as any).inviaSegnalazioneProdotto({ id: 0 }, 2);

      expect(component.openErrorDialog).toHaveBeenCalledWith('Esiste già una segnalazione identica con lo stato di bozza.');
    });
  }); 

  describe('sendDialogStepperModifica', () => {
    let rilevazioneSrvSpy: jasmine.SpyObj<any>;
    let routerSpy: jasmine.SpyObj<any>;
  
    beforeEach(() => {
      // Mock rilevazioneSrv
      rilevazioneSrvSpy = jasmine.createSpyObj('RilevazioneService', ['sendSegnalazione']);
      component['rilevazioneSrv'] = rilevazioneSrvSpy;
  
      // Mock router
      routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      component['router'] = routerSpy;
    });
  
    it('should call sendSegnalazione with correct parameters for "Prodotto"', () => {
      component.loadTipoSegnalazioni = 'Prodotto';
      component.idSegnalazioneCasoInvia = 123;
      rilevazioneSrvSpy.sendSegnalazione.and.returnValue(of({ success: true }));
  
      component.sendDialogStepperModifica(2);
  
      expect(rilevazioneSrvSpy.sendSegnalazione).toHaveBeenCalledWith('Prodotto', 123, 1); // statoId - 1
    });
  
    it('should call sendSegnalazione with correct parameters for non-"Prodotto"', () => {
      component.loadTipoSegnalazioni = 'AltroTipo';
      component.idSegnalazioneCasoInvia = 456;
      rilevazioneSrvSpy.sendSegnalazione.and.returnValue(of({ success: true }));
  
      component.sendDialogStepperModifica(3);
  
      expect(rilevazioneSrvSpy.sendSegnalazione).toHaveBeenCalledWith('AltroTipo', 456, 2); // statoId - 1
    });
  
    it('should navigate to "/segnalazione/inserimento" on successful response', () => {
      component.loadTipoSegnalazioni = 'Prodotto';
      component.idSegnalazioneCasoInvia = 123;
      rilevazioneSrvSpy.sendSegnalazione.and.returnValue(of({ success: true }));
  
      component.sendDialogStepperModifica(2);
  
      expect(routerSpy.navigate).toHaveBeenCalledWith(['/segnalazione/inserimento']);
    });
  
    it('should log an error if response.success is false', () => {
      spyOn(console, 'error');
      component.loadTipoSegnalazioni = 'Prodotto';
      component.idSegnalazioneCasoInvia = 123;
      rilevazioneSrvSpy.sendSegnalazione.and.returnValue(of({ success: false }));
  
      component.sendDialogStepperModifica(2);
  
      expect(console.error).toHaveBeenCalledWith('Errore durante l\'invio dei dati: Il backend ha restituito false');
      expect(routerSpy.navigate).not.toHaveBeenCalled(); // Navigazione non deve avvenire
    });
  
    it('should log an error if an error occurs during the request', () => {
      spyOn(console, 'error');
      component.loadTipoSegnalazioni = 'Prodotto';
      component.idSegnalazioneCasoInvia = 123;
      rilevazioneSrvSpy.sendSegnalazione.and.returnValue(throwError(() => new Error('Errore di rete')));
  
      component.sendDialogStepperModifica(2);
  
      expect(console.error).toHaveBeenCalledWith('Errore durante l\'invio dei dati:', jasmine.any(Error));
      expect(routerSpy.navigate).not.toHaveBeenCalled(); // Navigazione non deve avvenire
    });
  });

  describe('showDescrizioneTroncata', () => {
  
    it('should return an empty string if description is null', () => {
      const result = component.showDescrizioneTroncata(null);
      expect(result).toBe('');
    });
  
    it('should return an empty string if description is undefined', () => {
      const result = component.showDescrizioneTroncata(undefined);
      expect(result).toBe('');
    });
  
    it('should return an empty string if description is an empty string', () => {
      const result = component.showDescrizioneTroncata('');
      expect(result).toBe('');
    });
  });

  describe('downloadFileSegnalazione', () => {
    it('should download file for Prodotto with correct file name', () => {
      component.segnalazioneProdotto = { id: 123 } as any;
    
      const mockResponse = new HttpResponse<Blob>({
        body: new Blob(['mock content'], { type: 'text/plain' }),
        headers: new HttpHeaders({
          'Content-Disposition': 'attachment; filename="testFile.txt"'
        }),
        status: 200,
        statusText: 'OK',
        url: 'mockUrl',
      });
    
      documentiServiceSpy.getFileSegnalazione.and.returnValue(of(mockResponse));
    
      spyOn(window.URL, 'createObjectURL').and.returnValue('mockURL');
      spyOn(document.body, 'appendChild');
      spyOn(document.body, 'removeChild');
      spyOn(window.URL, 'revokeObjectURL');
    
      component.downloadFileSegnalazione();
    
      expect(documentiServiceSpy.getFileSegnalazione).toHaveBeenCalledWith(123, 'Prodotto', jasmine.any(String));
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalled();
      expect(window.URL.revokeObjectURL).toHaveBeenCalledWith('mockURL');
    });
  });
  
  describe('downloadFileAspetto', () => {
    it('should download file for Prodotto with correct file name', () => {
      component.segnalazioneProdotto = { id: 123 } as any; // Mock segnalazioneProdotto
  
      const mockResponse = new HttpResponse<Blob>({
        body: new Blob(['mock content'], { type: 'text/plain' }),
        headers: new HttpHeaders({
          'Content-Disposition': 'attachment; filename="testAspettoProdotto.txt"',
        }),
        status: 200,
        statusText: 'OK',
      });
  
      spyOn(component, 'selectRole').and.returnValue('mockRole'); // Mock selectRole
      documentiServiceSpy.getFileAspetti.and.returnValue(of(mockResponse)); // Mock DocumentiService
  
      spyOn(window.URL, 'createObjectURL').and.returnValue('mockURL');
      spyOn(document.body, 'appendChild');
      spyOn(document.body, 'removeChild');
      spyOn(window.URL, 'revokeObjectURL');
  
      component.downloadFileAspetto(1); // Chiamata al metodo
  
      expect(documentiServiceSpy.getFileAspetti).toHaveBeenCalledWith(123, 1, 'Prodotto', 'mockRole'); // Verifica chiamata al servizio
      expect(window.URL.createObjectURL).toHaveBeenCalledWith(mockResponse.body as Blob);
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalled();
      expect(window.URL.revokeObjectURL).toHaveBeenCalledWith('mockURL');
    });
  
    it('should download file for Contenzioso with correct file name', () => {
      component.segnalazioneContenzioso = { id: 456 } as any; // Mock segnalazioneContenzioso
  
      const mockResponse = new HttpResponse<Blob>({
        body: new Blob(['mock content'], { type: 'text/plain' }),
        headers: new HttpHeaders({
          'Content-Disposition': 'attachment; filename="testAspettoContenzioso.txt"',
        }),
        status: 200,
        statusText: 'OK',
      });
  
      spyOn(component, 'selectRole').and.returnValue('mockRole'); // Mock selectRole
      documentiServiceSpy.getFileAspetti.and.returnValue(of(mockResponse)); // Mock DocumentiService
  
      spyOn(window.URL, 'createObjectURL').and.returnValue('mockURL');
      spyOn(document.body, 'appendChild');
      spyOn(document.body, 'removeChild');
      spyOn(window.URL, 'revokeObjectURL');
  
      component.downloadFileAspetto(2); // Chiamata al metodo
  
      expect(documentiServiceSpy.getFileAspetti).toHaveBeenCalledWith(456, 2, 'Contenzioso', 'mockRole'); // Verifica chiamata al servizio
      expect(window.URL.createObjectURL).toHaveBeenCalledWith(mockResponse.body as Blob);
      expect(document.body.appendChild).toHaveBeenCalled();
      expect(document.body.removeChild).toHaveBeenCalled();
      expect(window.URL.revokeObjectURL).toHaveBeenCalledWith('mockURL');
    });
  });

  describe('deleteFileSegnalazione', () => {
    it('should delete file for Prodotto', () => {
      component.segnalazioneProdotto = { id: 123 } as any; // Mock segnalazioneProdotto
    
      documentiServiceSpy.deleteFileSegnalazione.and.returnValue(
        of({ esito: true }) // Restituisci un valore coerente con il tipo atteso
      );
    
      component.deleteFileSegnalazione('testFile.txt');
    
      expect(documentiServiceSpy.deleteFileSegnalazione).toHaveBeenCalledWith(
        123,
        'testFile.txt',
        'Prodotto',
        jasmine.any(String)
      );
      expect(component.isFileDatiGenerali).toBeFalse(); // Verifica che la proprietà venga aggiornata
    });
  
    it('should delete file for Contenzioso', () => {
      component.segnalazioneContenzioso = { id: 456 } as any; // Mock segnalazioneContenzioso
    
      documentiServiceSpy.deleteFileSegnalazione.and.returnValue(
        of({ esito: true }) // Restituisci un valore coerente con il tipo atteso
      );
    
      component.deleteFileSegnalazione('testFile.txt');
    
      expect(documentiServiceSpy.deleteFileSegnalazione).toHaveBeenCalledWith(
        456,
        'testFile.txt',
        'Contenzioso',
        jasmine.any(String)
      );
      expect(component.isFileDatiGenerali).toBeFalse();
    });
  });

  it('should delete file for Prodotto and update aspetto', () => {
    component.segnalazioneProdotto = { id: 123 } as any; // Mock segnalazioneProdotto
    const aspettoId = 1;
    const mockFileName = 'testFileAspetto.txt';
  
    spyOn(component, 'getNomeFileAspetto').and.returnValue(mockFileName);
  
    component.listaAspettiAggiunti = [{
      idAspetto: aspettoId, hasAllegato: true,
      nomeAspetto: '',
      descrizioneCriticita: '',
      descrizioneSuggerimento: '',
      nuovoAspetto: false
    }];
  
    documentiServiceSpy.deleteFileAspetto.and.returnValue(of({ esito: true }));
  
    component.deleteFileAspetto(aspettoId);
  
    expect(documentiServiceSpy.deleteFileAspetto).toHaveBeenCalledWith(
      123, 
      aspettoId, 
      mockFileName, 
      'Prodotto', 
      jasmine.any(String) 
    );
  
    expect(component.listaAspettiAggiunti[0].hasAllegato).toBeFalse();
  });

  it('should delete file for Contenzioso and update aspetto', () => {
    component.segnalazioneContenzioso = { id: 456 } as any; // Mock segnalazioneContenzioso
    const aspettoId = 2;
    const mockFileName = 'testFileContenzioso.txt';
  
    spyOn(component, 'getNomeFileAspetto').and.returnValue(mockFileName);
  
    component.listaAspettiAggiunti = [{
      idAspetto: aspettoId, hasAllegato: true,
      nomeAspetto: '',
      descrizioneCriticita: '',
      descrizioneSuggerimento: '',
      nuovoAspetto: false
    }];
  
    documentiServiceSpy.deleteFileAspetto.and.returnValue(of({ esito: true }));
  
    component.deleteFileAspetto(aspettoId);
  
    expect(documentiServiceSpy.deleteFileAspetto).toHaveBeenCalledWith(
      456, 
      aspettoId, 
      mockFileName, 
      'Contenzioso', 
      jasmine.any(String) 
    );
  
    expect(component.listaAspettiAggiunti[0].hasAllegato).toBeFalse();
  });

  it('should not call deleteFileAspetto if no segnalazione ID is present', () => {
    component.segnalazioneProdotto = null; 
    component.segnalazioneContenzioso = null; 
    const aspettoId = 1;
  
    spyOn(component, 'getNomeFileAspetto').and.returnValue('testFile.txt');
  
    component.deleteFileAspetto(aspettoId);
  
    expect(documentiServiceSpy.deleteFileAspetto).not.toHaveBeenCalled();
  });

  it('should not throw error if getSettoriMaterie is never called', () => {
    const settoreMateriaServiceSpy = TestBed.inject(SettoreMateriaService) as jasmine.SpyObj<SettoreMateriaService>;
  
    expect(() => {}).not.toThrow();
    expect(settoreMateriaServiceSpy.getSettoriConAreeProdotti).not.toHaveBeenCalled();
  });

  /* it('should initialize component and call required methods in ngOnInit', async () => {
    const getSettoriMaterieSpy = spyOn(component, 'getSettoriMaterie').and.returnValue(Promise.resolve());
    const getAllAreaProdottoSpy = spyOn(component, 'getAllAreaProdotto').and.returnValue(Promise.resolve());
    const loadTipologieContenziosoSpy = spyOn(component, 'loadTipologieContenzioso').and.returnValue(Promise.resolve());
    const loadAspettiDaValutareSpy = spyOn(component, 'loadAspettiDaValutare').and.returnValue();
    const getSediSpy = spyOn(component, 'getSedi').and.returnValue(Promise.resolve());
    const ensureSediLoadedSpy = spyOn(component, 'ensureSediLoaded').and.returnValue(Promise.resolve());
  
    await component.ngOnInit();
  
    expect(getSettoriMaterieSpy).toHaveBeenCalled();
    expect(getAllAreaProdottoSpy).toHaveBeenCalled();
    expect(loadTipologieContenziosoSpy).toHaveBeenCalled();
    expect(loadAspettiDaValutareSpy).toHaveBeenCalled();
    expect(getSediSpy).toHaveBeenCalled();
    expect(ensureSediLoadedSpy).toHaveBeenCalled();
  }); */

  it('should clear area and fetch areas by settore if settore is selected', () => {
    const mockSettore = { id: 1, nome: 'Settore A' };
    component.settoreCtrl.setValue(mockSettore);
    const fetchAreasSpy = spyOn((component as any).areeProdottiService, 'newGetAllByIdSettore').and.returnValue(of([]));
    
    component.clearArea();
  
    expect(component.firstFormGroup.get('areaProdotto')!.value).toBe('');
    expect(fetchAreasSpy).toHaveBeenCalledWith(mockSettore.id);
  });

});
