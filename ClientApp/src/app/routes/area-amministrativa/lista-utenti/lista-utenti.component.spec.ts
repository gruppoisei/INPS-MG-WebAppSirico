import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ListaUtentiComponent } from './lista-utenti.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatAutocompleteModule, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { BehaviorSubject, of, Subject, throwError } from 'rxjs';
import { MatOptionSelectionChange } from '@angular/material/core';
import { TerritorioService } from '@shared/services/territorio.service';
import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
import { Sort } from '@angular/material/sort';
import { ListaUtentiModificaComponent } from '../lista-utenti-modifica/lista-utenti-modifica.component';

describe('ListaUtentiComponent', () => {
  let component: ListaUtentiComponent;
  let fixture: ComponentFixture<ListaUtentiComponent>;

  let utentiSrv: jasmine.SpyObj<UserService>;
  let territorioService: jasmine.SpyObj<TerritorioService>;

  let dialog: jasmine.SpyObj<MatDialog>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;

  beforeEach(async () => {  
    utentiSrv = jasmine.createSpyObj('UserService', [
      'contaScarti',
      'contaRicercaFiltrata',
      'getUtenti',
      'getAllRuoli',
      'censimentoUtenti',
      'getScarti',
      'getAllEmailUtenti',
    ]);

    territorioService = jasmine.createSpyObj('TerritorioService', [
      'getRegioniByIdSede',
      'getProvince',
      'getAllProvinceByIdRegione',
      'getRegioni'
    ]);

    territorioService.getRegioniByIdSede.and.returnValue(of());
    territorioService.getRegioni.and.returnValue(of());
    territorioService.getProvince.and.returnValue(of());
    utentiSrv.getAllRuoli.and.returnValue(of());
    utentiSrv.contaRicercaFiltrata.and.returnValue(of());
    utentiSrv.contaScarti.and.returnValue(of());

    dialog = jasmine.createSpyObj('MatDialog', ['open']);
    snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
   
    await TestBed.configureTestingModule({
      declarations: [ ListaUtentiComponent ],
      imports: [
        ReactiveFormsModule,        
        MatAutocompleteModule
      ],
      providers: [
        { provide: MatSnackBar, useValue: snackBar },
        { provide: TerritorioService, useValue: territorioService },
        { provide: UserService, useValue: utentiSrv },
        { provide: MatDialog, useValue: dialog }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaUtentiComponent);
    component = fixture.componentInstance;   
    component.listaRuoli = mockRuoli;
    fixture.detectChanges();

    // Simulazione dei MatAutocompleteTrigger
    component.regioneAutocompleteTrigger = {
      panelClosingActions: new Subject<MatOptionSelectionChange>(),
    } as unknown as MatAutocompleteTrigger;

    component.sedeAutocompleteTrigger = {
      panelClosingActions: new Subject<MatOptionSelectionChange>(),
    } as unknown as MatAutocompleteTrigger;
  }); 


  const mockRuoli = [{
    id: 1,
    ruolo1: "P12689",
    descrizione: "Amministratore"
  },
  {
    id: 2,
    ruolo1: "P12690",
    descrizione: "Operatore Centrale Amministrativo"
  },
  {
    id: 3,
    ruolo1: "P12800",
    descrizione: "Operatore Centrale Informatico"
  },
  {
    id: 4,
    ruolo1: "P12801",
    descrizione: "Operatore Territoriale di Provincia"
  },
  {
    id: 5,
    ruolo1: "P12799",
    descrizione: "Operatore Territoriale Regionale"
  }];

  const mockSedi = [
    { id: 1, nome: 'Sede 1' },
    { id: 2, nome: 'Sede 2' }
  ];
  const mockSediJson = JSON.stringify(mockSedi);

  const mockRegioni = [
    { id: 1, nome: 'Regione 1' },
    { id: 2, nome: 'Regione 2' }
  ];
  
  const mockUtenti = [
  {
    username: 'mario.rossi',
    codiceFiscale: 'RSSMRA80A01H501Z',
    sede: 'Milano',
    codiceSedeSAP: 'IT_MIL_001',
    cognome: 'Rossi',
    nome: 'Mario',
    matricola: '12345',
    email: 'mario.rossi@example.com',
    ruoli: 'Admin, User',
    ruolo: 'Admin',
  },
  {
    username: 'giulia.bianchi',
    codiceFiscale: 'BNCGLL85C55Z404L',
    sede: 'Roma',
    codiceSedeSAP: 'IT_ROM_002',
    cognome: 'Bianchi',
    nome: 'Giulia',
    matricola: '67890',
    email: 'giulia.bianchi@example.com',
    ruoli: 'User',
    ruolo: 'User',
  },
  ];

  const mockScarti = [
    {
      attivo: true,
      codiceFiscale: null,
      cognome: "Bianchi",
      dataScarto: "2024-10-01T13:24:29.9",
      email: "franchesco.bianchigruppoisei.it",
      id: 49,
      matricola: "E0059088",
      motivazioneScarto: "Formato dell'email non valido; Matricola duplicata nel file; Username duplicato nel file; Username fbianchi01 già associato a un'altra matricola nel database",
      nome: "Francesco",
      nomeFile: "Utenti_C1.15.xlsx",
      ruoloDTO: mockRuoli,
      sedeDTO: mockSedi,
      username: "fbianchi01"
    },
    {
      attivo: true,
      codiceFiscale: null,
      cognome: "Rossi",
      dataScarto: "2024-10-02T14:45:00.9",
      email: "marco.rossi@example.com",
      id: 50,
      matricola: "E0059090",
      motivazioneScarto: "Email non valida; Matricola duplicata nel file",
      nome: "Marco",
      nomeFile: "Utenti_C2.15.xlsx",
      ruoloDTO: mockRuoli,
      sedeDTO: mockSedi,
      username: "mrossi02"
    }
  ];
  
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize the component and call necessary methods on ngOnInit', () => {
      spyOn(component.regioneCtrl, 'disable');
      spyOn(component.sedeCtrl, 'disable');

      spyOn(component, 'loadRuoli');      
      spyOn(component, 'getRegioni');      
      spyOn(component, 'getProvince');   

      spyOn(component, '_filterRuolo');      
      spyOn(component, '_filterSede');      
      spyOn(component, '_filterRegione');   
      
      component.ruoloCtrl = new FormControl(''); 
      component.sedeCtrl = new FormControl('');
      component.regioneCtrl = new FormControl('');

      spyOn(component, 'inizializzaPaginazione');   
      spyOn(component, 'inizializzaPaginazioneScarti');   
      
      component.ngOnInit();

      component.ruoloCtrl.setValue('test');  // Questo innesca _filterRuolo
      component.sedeCtrl.setValue('test');   // Questo innesca _filterSede
      component.regioneCtrl.setValue('test'); // Questo innesca _filterRegione

      fixture.detectChanges();

      expect(component.sedeCtrl.disabled).toBeTruthy();
      expect(component.regioneCtrl.disabled).toBeTruthy();

      expect(component.loadRuoli).toHaveBeenCalled();
      expect(component.getRegioni).toHaveBeenCalled();
      expect(component.getProvince).toHaveBeenCalled();

      expect(component._filterRuolo).toHaveBeenCalled();
      expect(component._filterSede).toHaveBeenCalled();
      expect(component._filterRegione).toHaveBeenCalled();

      expect(component.inizializzaPaginazione).toHaveBeenCalled();
      expect(component.inizializzaPaginazioneScarti).toHaveBeenCalled();
    });
  });
  
  describe('ngAfterViewInit', () => {
    it('should set regioneCtrl to null if value is not in filteredRegione', () => {
      const invalidRegione = 3;
      component.filteredRegione = of(mockRegioni); 
      component.regioneCtrl.setValue(invalidRegione); 

      component.ngAfterViewInit(); 

      // Simula la chiusura del pannello
      (component.regioneAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>).next({
        source: {} as any,
        isUserInput: true
      });

      expect(component.regioneCtrl.value).toBeNull(); 
    });

    it('should keep regioneCtrl value if it is valid', () => {
      const validRegione = 1;
      component.filteredRegione = of(mockRegioni); 
      component.regioneCtrl.setValue(validRegione); 

      component.ngAfterViewInit(); 

      (component.regioneAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>).next({
        source: {} as any,
        isUserInput: true
      });

      expect(component.regioneCtrl.value).toBe(validRegione); 
    });

    it('should set sedeCtrl to null if value is not in filteredSede', () => {
      const invalidSede = 3
      component.filteredSede = of(mockSedi); 
      component.sedeCtrl.setValue(invalidSede);

      component.ngAfterViewInit(); 

      (component.sedeAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>).next({
        source: {} as any,
        isUserInput: true
      });

      expect(component.sedeCtrl.value).toBeNull(); 
    });

    it('should keep sedeCtrl value if it is valid', () => {
      const validSede = 1;
      component.filteredSede = of(mockSedi); 
      component.sedeCtrl.setValue(validSede); 

      component.ngAfterViewInit(); 

      (component.sedeAutocompleteTrigger.panelClosingActions as Subject<MatOptionSelectionChange>).next({
        source: {} as any,
        isUserInput: true
      });

      expect(component.sedeCtrl.value).toBe(validSede); 
    });
  });

  describe('_filterRuolo', () => {
    it('should filter roles by description', () => {
      spyOn(component, '_filterRuolo').and.callThrough();      
      component.listaRuoli = component._filterRuolo("Amministratore");
      expect(component.listaRuoli).toEqual([mockRuoli[0]]);
    });  

    it('should return all roles when input is empty', () => {
      spyOn(component, '_filterRuolo').and.callThrough();      
      component.listaRuoli = component._filterRuolo("");
      expect(component.listaRuoli).toEqual(component.listaRuoli);
    });

    it('should return an empty array when no roles match', () => {
      spyOn(component, '_filterRuolo').and.callThrough();      
      component.listaRuoli = component._filterRuolo("NonExistingRole");
      expect(component.listaRuoli).toEqual([]);
    });

    it('should be case insensitive when filtering', () => {
      spyOn(component, '_filterRuolo').and.callThrough();      
      component.listaRuoli = component._filterRuolo("operAtore centRale amminisTrativO");
      expect(component.listaRuoli).toEqual([mockRuoli[1]]);
    });
  });

  describe('_filterSede', () => { 
    it('should filter sede by name', () => {
      const mockSedi = JSON.parse(mockSediJson);
      component.sede = mockSedi;    
      const result = component['_filterSede']('Sede 1');
      expect(result).toEqual([mockSedi[0]]);
    });
  
    it('should return all sede when input is empty', () => {
      component.sede = mockSedi;
      const result = component['_filterSede']('');
      expect(result).toEqual(component.sede); 
    });
  
    it('should return an empty array when no sede match', () => {
      component.sede = mockSedi;
      const result = component['_filterSede']('NonExistingSede');
      expect(result).toEqual([]);
    });
  
    it('should be case insensitive when filtering', () => {
      const mockSedi = JSON.parse(mockSediJson);
      component.sede = mockSedi;
      const result = component['_filterSede']('Sede 2');
      expect(result).toEqual([mockSedi[1]]);
    });
  });
  
  describe('_filterRegione', () => {     
    it('should filter regions by name', () => {
      component.regione = mockRegioni;      
      const result = component['_filterRegione']('Regione 1');
      expect(result).toEqual([mockRegioni[0]]);
    });
  
    it('should return all regions when input is empty', () => {
      const result = component['_filterRegione']('');
      expect(result).toEqual(component.regione);
    });
  
    it('should return an empty array when no regions match', () => {
      const result = component['_filterRegione']('NonExistingRegione');
      expect(result).toEqual([]);
    });
  
    it('should be case insensitive when filtering', () => {
      component.regione = mockRegioni;
      const result = component['_filterRegione']('regione 2');
      expect(result).toEqual([mockRegioni[1]]);
    });
  });

  describe('sedeSelected', () => {
    it('should set the selected sede value', () => {
      const selectedId = 1;
      const selectedSede = mockSedi.find(sede => sede.id === selectedId);
      component.sede = mockSedi;
      component.sedeSelected(selectedId);
      
      expect(component.sedeCtrl.value).toEqual(component.showFieldSede(selectedSede!.id!, selectedSede!.nome));
      expect(component.filtroperSede).toEqual(selectedId.toString());
    });

    it('should call getProvince if selectedId is -1', () => {
      spyOn(component, 'getProvince').and.callThrough();
    
      component.getProvince();
    
      expect(component.getProvince).toHaveBeenCalled();

      expect(component.sedeCtrl.value).toBe(null);
      expect(component.filtroperSede).toEqual(null); 
    });
  
    it('should filter regions based on selected sede', () => {
      const selectedId = 1;
      const formattedId = selectedId.toString().padStart(6, '0'); // Assicurati che l'ID sia formattato come '000001'
      
      territorioService.getRegioniByIdSede.and.returnValue(of(mockRegioni));

      component.sede = mockSedi;
      component.sedeSelected(selectedId);

      expect(territorioService.getRegioniByIdSede).toHaveBeenCalledWith(formattedId);        
      expect(territorioService.getRegioniByIdSede.length).toBe(0);        
      expect(component.regione.length).toBe(0);
    });   
  });
  
  describe('regioneSelected', () => {
    it('should call getRegioni if selectedId is -1', () => {
        spyOn(component, 'getRegioni');
        component.regione = mockRegioni;

        component.regioneSelected(-1);
        
        expect(component.getRegioni).toHaveBeenCalled();
        expect(component.regione).toEqual([]);
        expect(component.regioneCtrl.value).toBeNull();
        expect(component.filtroperRegione).toBe("-1"); 
    });
  
    it('should filter sedi based on selected regione', () => {
      const expectedResult = [{ id: null, nome: '' }, mockSedi[0]]
         
      const mockSediDTO = mockSedi.map(sede => ({
        sedeCodSede: sede.id,   
        sedeDesc: sede.nome     
      }));
        territorioService.getAllProvinceByIdRegione.and.returnValue(of([mockSediDTO[0]]));
        component.regione = mockRegioni;
        component.sede = mockSedi;

        component.regioneSelected(1);

        expect(territorioService.getAllProvinceByIdRegione).toHaveBeenCalledWith(1);        
        expect(component.sede.length).toBe(2);
        expect(component.sede).toEqual(expectedResult);
    });

    it('should handle errors', () => {
      territorioService.getAllProvinceByIdRegione.and.returnValue(throwError(() => new Error('Error fetching data.')));
      component.regioneSelected(0);
      expect(component.errorMessage).toBe('Errore nel caricamento delle sedi associate alla regione.', 'Errore:');
    });
  });

  describe('ruoloSelected', () => {
    it('should set the value of ruoloCtrl and disable regioneCtrl and sedeCtrl when a restricted role is selected', () => {
      const selectedValue = 'P12689';
      const expectedResult = mockRuoli.find(role => role.ruolo1 === selectedValue);

      component.listaRuoli = mockRuoli;
  
      component.ruoloSelected(selectedValue);
  
      expect(component.ruoloSelezionato).toBe(expectedResult!.ruolo1);
      expect(component.ruoloCtrl.value).toBe(expectedResult!.descrizione);
  
      expect(component.regioneCtrl.disabled).toBeTrue();
      expect(component.sedeCtrl.disabled).toBeTrue();
    });
  
    it('should set the value of ruoloCtrl and enable regioneCtrl and sedeCtrl when an enabling role is selected', () => {
      const selectedValue = 'P12799';
      const expectedResult = mockRuoli.find(role => role.ruolo1 === selectedValue);

      component.listaRuoli = mockRuoli;
  
      component.ruoloSelected(selectedValue);
  
      expect(component.ruoloSelezionato).toBe(expectedResult!.ruolo1);
      expect(component.ruoloCtrl.value).toBe(expectedResult?.descrizione);
  
      expect(component.regioneCtrl.enabled).toBeTrue();
      expect(component.sedeCtrl.enabled).toBeTrue();
    });
  
    it('should disable regioneCtrl and sedeCtrl when an invalid or null role is selected', () => {
      component.listaRuoli = mockRuoli;
  
      component.ruoloSelected('P99999');
  
      expect(component.ruoloSelezionato).toBe('');
      expect(component.ruoloCtrl.value).toBeNull();
  
      expect(component.regioneCtrl.disabled).toBeTrue();
      expect(component.sedeCtrl.disabled).toBeTrue();
    });
  });

  describe('clearSede', () => {
    it('should call regioneSelected if regioneCtrl value is valid', () => {
      component.regioneCtrl.setValue('1 Regione 1'); 
  
      spyOn(component, 'regioneSelected');
      spyOn(component, 'getRegioni');
  
      component.clearSede();
  
      expect(component.regioneSelected).toHaveBeenCalledWith(1);
      expect(component.getRegioni).toHaveBeenCalled();

      expect(component.sedeCtrl.value).toBe('');
      expect(component.filteredSede).toBeTruthy();
    });
  
    it('should not call regioneSelected if regioneCtrl value is invalid', () => {
      component.regioneCtrl.setValue('');
  
      spyOn(component, 'regioneSelected');
      spyOn(component, 'getRegioni');

      component.clearSede();
  
      expect(component.regioneSelected).not.toHaveBeenCalled();
      expect(component.getRegioni).toHaveBeenCalled();

      expect(component.sedeCtrl.value).toBe('');
      expect(component.filteredSede).toBeTruthy();
    });
  
    it('should handle case when regioneCtrl is null', () => {
      component.regioneCtrl.setValue(null);
  
      spyOn(component, 'regioneSelected');
      spyOn(component, 'getRegioni');
  
      component.clearSede();
  
      expect(component.regioneSelected).not.toHaveBeenCalled();
      expect(component.getRegioni).toHaveBeenCalled();
  
      expect(component.sedeCtrl.value).toBe('');
      expect(component.filteredSede).toBeTruthy();
    });

    it('should handle case when regioneCtrl is undefined', () => {
      component.regioneCtrl.setValue(undefined);
  
      spyOn(component, 'regioneSelected');
      spyOn(component, 'getRegioni');
  
      component.clearSede();
  
      expect(component.regioneSelected).not.toHaveBeenCalled();
      expect(component.getRegioni).toHaveBeenCalled();
  
      expect(component.sedeCtrl.value).toBe('');
      expect(component.filteredSede).toBeTruthy();
    });
  
    it('should reset regione and call getRegioni', () => {
      component.regioneCtrl.setValue('1 Regione 1');
      spyOn(component, 'getRegioni');

      component.clearSede();
  
      expect(component.regione).toEqual([]);
      expect(component.getRegioni).toHaveBeenCalled();
    });
  });

  describe('clearRegione', () => {
    it('should clear sede array, call getProvince, and reset regioneCtrl and filteredRegione', () => {
      spyOn(component, 'getProvince').and.callThrough();
      component.sede = [{ ...mockSedi[0] }];
      component.regioneCtrl = new FormControl();
      component.regioneCtrl.setValue('Regione 1');
      expect(component.sede.length).toBe(1);
      expect(component.regioneCtrl.value).toBe('Regione 1');
      
      component.clearRegione();
      
      expect(component.getProvince).toHaveBeenCalled();
      
      expect(component.sede.length).toBe(0);
      expect(component.regioneCtrl.value).toEqual('');
      expect(component.filteredRegione).toBeDefined();
    });
  });

  describe('clearMatricola', () => {
    it('should clear the value of matricolaCtrl', () => {
      component.matricolaCtrl.setValue('12345');
      expect(component.matricolaCtrl.value).toBe('12345');
      
      component.clearMatricola();

      expect(component.matricolaCtrl.value).toBe('');
    });
  });

  describe('clearRuolo', () => {
    it('should clear the value of ruoloCtrl and disable regioneCtrl and sedeCtrl', () => {
      component.ruoloCtrl.setValue('Admin');
      component.regioneCtrl.setValue('Regione 1');
      component.sedeCtrl.setValue('Sede 1');
      
      expect(component.ruoloCtrl.value).toBe('Admin');
      expect(component.regioneCtrl.value).toBe('Regione 1');
      expect(component.sedeCtrl.value).toBe('Sede 1');
      
      component.clearRuolo();
      
      expect(component.ruoloCtrl.value).toBe('');
      expect(component.regioneCtrl.disabled).toBeTrue(); 
      expect(component.sedeCtrl.disabled).toBeTrue();
    });
  });

  describe('getRegioni', () => {
    it('should call getRegioni service and populate regione array', () => {
      const mockRegioniDTO = mockRegioni.map(regione => ({
        sedeCodSede: regione.id,   
        sedeDesc: regione.nome     
      }));

      territorioService.getRegioni.and.returnValue(of(mockRegioniDTO));

      component.getRegioni();
      
      expect(component.regione).toEqual([{ id: null, nome: "" }, ...mockRegioni]);
      expect(component.regione.length).toBe(mockRegioni.length + 1);
    });
    
    it('should handle error if getRegioni() fails', () => {
      territorioService.getRegioni.and.returnValue(throwError(() => 'Error fetching data.'));
      component.getRegioni();
      expect(component.errorMessage).toBe('Non ci sono sedi disponibili.', 'Errore:');
    });
  });
  
  describe('getProvince', () => {    
    it('should call getProvince service and populate regione array', () => {
      const mockProvinceDTO = mockSedi.map(provincia => ({
        sedeCodSede: provincia.id,   
        sedeDesc: provincia.nome     
      }));

      territorioService.getProvince.and.returnValue(of(mockProvinceDTO));

      component.getProvince();
      
      expect(component.sede).toEqual([{ id: null, nome: "" }, ...mockSedi]);
      expect(component.sede.length).toBe(mockSedi.length + 1);
    });

    it('should handle error if getProvince() fails', () => {
      territorioService.getProvince.and.returnValue(throwError(() => 'Error fetching data.'));
      component.getProvince();
      expect(component.errorMessage).toBe('Non ci sono sedi disponibili.', 'Errore:');
    });
  });

  describe('ricercaFiltrata', () => {
    it('should show error dialog if both matricola and ruolo are null', () => {
      spyOn(component, 'openErrorDialog');
  
      component.matricolaCtrl.setValue(null);
      component.ruoloCtrl.setValue(null);
  
      component.ricercaFiltrata();
  
      expect(component.openErrorDialog).toHaveBeenCalledWith(
        'Per effettuare la ricerca è necessario compilare il campo Matricola o il campo Ruolo.',
        ''
      );
    });
  
    it('should initialize pagination if at least one of matricola or ruolo is provided', () => {
      spyOn(component, 'inizializzaPaginazione');
  
      component.matricolaCtrl.setValue('12345'); // Entrambi non null o uno dei due null
      component.ruoloCtrl.setValue(null);  
  
      component.ricercaFiltrata();
  
      expect(component.inizializzaPaginazione).toHaveBeenCalled();
    });
  });

  describe('formatEmptyData', () => {
    it('should reset matricolaCtrl if its value is an empty string', () => {
      spyOn(component.matricolaCtrl, 'reset');
  
      component.matricolaCtrl.setValue('');
  
      component.formatEmptyData();
  
      expect(component.matricolaCtrl.reset).toHaveBeenCalled();
    });
  
    it('should reset ruoloCtrl if its value is an empty string', () => {
      spyOn(component.ruoloCtrl, 'reset');
  
      component.ruoloCtrl.setValue('');
  
      component.formatEmptyData();
  
      expect(component.ruoloCtrl.reset).toHaveBeenCalled();
    });
  
    it('should reset regioneCtrl if its value is an empty string', () => {
      spyOn(component.regioneCtrl, 'reset');
  
      component.regioneCtrl.setValue('');
  
      component.formatEmptyData();
  
      expect(component.regioneCtrl.reset).toHaveBeenCalled();
    });
  
    it('should reset sedeCtrl if its value is an empty string', () => {
      spyOn(component.sedeCtrl, 'reset');
  
      component.sedeCtrl.setValue('');
  
      component.formatEmptyData();
  
      expect(component.sedeCtrl.reset).toHaveBeenCalled();
    });
  
    it('should not reset any control if their values are not empty', () => {
      spyOn(component.matricolaCtrl, 'reset');
      spyOn(component.ruoloCtrl, 'reset');
      spyOn(component.regioneCtrl, 'reset');
      spyOn(component.sedeCtrl, 'reset');
  
      component.matricolaCtrl.setValue('123');
      component.ruoloCtrl.setValue('Admin');
      component.regioneCtrl.setValue('Regione 1');
      component.sedeCtrl.setValue('Sede 1');
  
      component.formatEmptyData();
  
      expect(component.matricolaCtrl.reset).not.toHaveBeenCalled();
      expect(component.ruoloCtrl.reset).not.toHaveBeenCalled();
      expect(component.regioneCtrl.reset).not.toHaveBeenCalled();
      expect(component.sedeCtrl.reset).not.toHaveBeenCalled();
    });
  });

  describe('popolaTabella', () => {
    it('should call utentiSrv.getUtenti and populate dataSource on success', () => {
      spyOn(component, 'formatEmptyData');
      utentiSrv.getUtenti.and.returnValue(of(mockUtenti));
      expect(component.isLoading).toBeTrue();

      component.popolaTabella();
      
      expect(component.formatEmptyData).toHaveBeenCalled();
      
      expect(utentiSrv.getUtenti).toHaveBeenCalledWith(
        20,  // pageDim
        1,   // pageCurr
        null, // ordinamentoColonna
        null,  // matricolaCtrl.value
        '', // ruoloSelezionato
        null, // regioneCtrl.value
        null // sedeCtrl.value
      );
  
      expect(component.dataSource).toEqual(mockUtenti);
      expect(component.dataSourceFiltered).toEqual(mockUtenti);
      expect(component.isLoading).toBeFalse();  
    });
  
    it('should handle error when getUtenti fails', () => {
      utentiSrv.getUtenti.and.returnValue(throwError(() => ('Error fetching data.')));
      spyOn(console, 'error');
  
      component.popolaTabella();
  
      expect(component.errorMessage).toBe('Errore nel recupero degli utenti.')
      // expect(console.error).toHaveBeenCalledWith('Errore nel recupero degli utenti.', 'Error fetching data.');
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('loadRuoli', () => {
    it('should load roles successfully and add an empty role at the beginning', () => {
      utentiSrv.getAllRuoli.and.returnValue(of(mockUtenti));
  
      component.loadRuoli();
  
      expect(utentiSrv.getAllRuoli).toHaveBeenCalled();  
      expect(component.listaRuoli[0]).toEqual({ id: null, ruolo1: '', descrizione: '' }); 
      expect(component.isLoading).toBeTrue(); 
    });
  
    it('should handle error and set isLoading to false', () => {
      const errorResponse = new Error('Errore nel recupero dei ruoli.');
      utentiSrv.getAllRuoli.and.returnValue(throwError(() => errorResponse));
  
      spyOn(console, 'error');
  
      component.loadRuoli();
  
      expect(component.isLoading).toBeFalse(); 
      expect(component.errorMessage).toEqual('Errore nel recupero dei ruoli.'); 
      expect(console.error).toHaveBeenCalledWith('Errore nel recupero dei ruoli.', errorResponse); 
    });
  });
  
  describe('showFieldSede', () => {
    it('should return formatted sede if codiceSede e nomeSede not empty and not null and not undefined', () => {
      spyOn(component, 'formatToSixDigits').and.returnValue('038000'); 
      const codiceSede = 38000;
      const nomeSede = "MARCHE"
  
      const result = component.showFieldSede(codiceSede, nomeSede);

      expect(component.formatToSixDigits).toHaveBeenCalledWith(codiceSede);  
      expect(result).toEqual('038000 - MARCHE'); 
    });

    it('should return empty ("") if codiceSede is empty', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = Number("");
      const nomeSede = "MARCHE";
  
      const result = component.showFieldSede(codiceSede, nomeSede);

      expect(result).toEqual('');
    });

    it('should return empty ("") if codiceSede is null', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = null;
      const nomeSede = "MARCHE";
  
      const result = component.showFieldSede(codiceSede!, nomeSede);

      expect(result).toEqual('');
    });

    it('should return empty ("") if codiceSede is undefined', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = undefined;
      const nomeSede = "MARCHE";
  
      const result = component.showFieldSede(codiceSede!, nomeSede);

      expect(result).toEqual('');
    });

    it('should return empty ("") if nomeSede is empty', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = 38000;
      const nomeSede = "";
  
      const result = component.showFieldSede(codiceSede, nomeSede);

      expect(result).toEqual('');
    });

    it('should return empty ("") if nomeSede is null', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = 38000;
      const nomeSede = null;
  
      const result = component.showFieldSede(codiceSede, nomeSede!);

      expect(result).toEqual('');
    });

    it('should return empty ("") if nomeSede is undefined', () => {
      spyOn(component, 'formatToSixDigits');
      const codiceSede = 38000;
      const nomeSede = undefined;
  
      const result = component.showFieldSede(codiceSede, nomeSede!);

      expect(result).toEqual('');
    });
  });
  
  describe('showField', () => {
    it('should return "-" if content is empty', () => {
      const result = component.showField("");
      expect(result).toBe('-');
    });

    it('should return "-" if content is null', () => {
      const result = component.showField(null!);
      expect(result).toBe('-');
    });

    it('should return "-" if content is undefined', () => {
      const result = component.showField(undefined!);
      expect(result).toBe('-');
    });
    
    it('should return content if content is not empty and is not null and is not undefined', () => {
      const result = component.showField("something");
      expect(result).toBe("something");
    });
  });

  describe('formatToSixDigits', () => {
    it('should return null if value is null', () => {
      const value = null;
      const result = component.formatToSixDigits(value);
      expect(result).toBeNull();
    });

    it('should return formatted string if value is not null', () => {
      const value = 38000;
      const expectedResult = value.toString().padStart(6, '0'); // const expectedResult = "038000";

      const result = component.formatToSixDigits(value);
      expect(result).toBe(expectedResult);
    });
  });

  describe('displayFieldSede', () => {
    it ('should format data if sedeDTO[0].sedeCodSede is not null and is not undefined and sedeDTO.length > 1', () => {
      const mockSediDTO = JSON.parse(mockSediJson).map((sede: { id: any; nome: any; }) => ({
        sedeCodSede: sede.id,   // Rinomina 'id' in 'sedeCodSede'
        sedeDesc: sede.nome     // Rinomina 'nome' in 'sedeDesc'
      }));
      const expectedResult = mockSediDTO[0].sedeCodSede + ' - ' + mockSediDTO[0].sedeDesc + ' ... ';

      expect(mockSediDTO.length).toBeGreaterThan(1);

      const result = component.displayFieldSede(mockSediDTO);
      
      expect(result).toBe(expectedResult);
    });

    it ('should format data if sedeCodSede is not null and is not undefined and sedeDTO.length is equal 1', () => {
      const mockSedi = JSON.parse(mockSediJson);
      const mockSedeDTO = { sedeCodSede: mockSedi[0].id, sedeDesc: mockSedi[0].nome };
      const expectedResult = mockSedeDTO.sedeCodSede + ' - ' + mockSedeDTO.sedeDesc;

      const result = component.displayFieldSede([mockSedeDTO]);

      expect(result).toBe(expectedResult);
    });

    it ('should return "-" if sedeDTO[0].sedeCodSede is null', () => {
      const mockSedeDTO = { sedeCodSede: null, sedeDesc: mockSedi[0].nome };
      const expectedResult = "-";

      const result = component.displayFieldSede([mockSedeDTO]);

      expect(result).toBe(expectedResult);
    });

    it ('should return "-" if sedeDTO[0].sedeCodSede is undefined', () => {
      const mockSedeDTO = { sedeCodSede: undefined, sedeDesc: mockSedi[0].nome };
      const expectedResult = "-";

      const result = component.displayFieldSede([mockSedeDTO]);

      expect(result).toBe(expectedResult);
    });
  });

  describe('showAllFieldSedi', () => {
    it('should format data and call openErrorDialog() if sedeDTO.length is greater than 1', () => {
      spyOn(component, 'openErrorDialog');
      const mockSediDTO = mockSedi.map(sede => ({
        sedeCodSede: sede.id,   
        sedeDesc: sede.nome     
      }));

      expect(mockSediDTO.length).toBeGreaterThan(1);

      component.showAllFieldSedi(mockSediDTO);

      expect(component.openErrorDialog).toHaveBeenCalled();
    });
  });

  describe('displayFieldRuolo', () => {
    it ('should format data if ruoloDTO[0].ruoloCod is not null and is not undefined and ruoloDTO.length > 1', () => {
      const mockRuoliDTO = mockRuoli.map(ruolo => ({
        ruoloCod: ruolo.id,   
        ruoloDesc: ruolo.descrizione     
      }));

      expect(mockRuoliDTO.length).toBeGreaterThan(1);

      const expectedResult = mockRuoliDTO[0].ruoloDesc + ' ... ';

      const result = component.displayFieldRuolo(mockRuoliDTO);

      expect(result).toBe(expectedResult);
    });

    it ('should format data if ruoloCod is not null and is not undefined and ruoloDTO.length is equal 1', () => {
      const mockRuoloDTO = { ruoloCod: mockRuoli[0].id, ruoloDesc: mockRuoli[0].descrizione };
      const expectedResult = mockRuoloDTO.ruoloDesc;

      const result = component.displayFieldRuolo([mockRuoloDTO]);

      expect(result).toBe(expectedResult);
    });

    it ('should return "-" if ruoloDTO[0].ruoloCod is null', () => {
      const mockRuoloDTO = { ruoloCod: null, ruoloDesc: mockRuoli[0].descrizione };
      const expectedResult = "-";

      const result = component.displayFieldRuolo([mockRuoloDTO]);

      expect(result).toBe(expectedResult);
    });

    it ('should return "-" if ruoloDTO[0].ruoloCod is undefined', () => {
      const mockRuoloDTO = { ruoloCod: undefined, ruoloDesc: mockRuoli[0].descrizione };
      const expectedResult = "-";

      const result = component.displayFieldRuolo([mockRuoloDTO]);

      expect(result).toBe(expectedResult);
    });
  });

  describe('showAllFieldRuoli', () => {
    it('should format data and call openErrorDialog() if ruoloDTO.length is greater than 1', () => {
      spyOn(component, 'openErrorDialog');
      const mockRuoliDTO = mockRuoli.map(ruolo => ({
        ruoloCod: ruolo.id,   
        ruoloDesc: ruolo.descrizione     
      }));

      expect(mockRuoliDTO.length).toBeGreaterThan(1);

      component.showAllFieldSedi(mockRuoliDTO);

      expect(component.openErrorDialog).toHaveBeenCalled();
    });
  });
  
  describe('openErrorDialog', () => {
    it('should call dialog.open with the correct parameters when openErrorDialog is called', () => {
      const message = 'Test message';
      const titolo = 'Test title';
  
      component.openErrorDialog(message, titolo);
  
      expect(dialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
        data: { message: message, titolo: titolo }
      });
    });
  });
  
  describe('resetRicerca', () => {
    it('should reset variables and filters and call getRegioni() and getProvince()', () => {
      spyOn(component.regioneCtrl, 'disable');
      spyOn(component.sedeCtrl, 'disable');

      spyOn(component, 'getRegioni');      
      spyOn(component, 'getProvince');   

      spyOn(component, '_filterSede');      
      spyOn(component, '_filterRegione');   
      
      component.sedeCtrl = new FormControl('');
      component.regioneCtrl = new FormControl('');

      component.resetRicerca();

      component.sedeCtrl.setValue('test');   // Questo innesca _filterSede
      component.regioneCtrl.setValue('test'); // Questo innesca _filterRegione

      fixture.detectChanges();

      expect(component._filterSede).toHaveBeenCalled();
      expect(component._filterRegione).toHaveBeenCalled();

      component.resetRicerca();

      expect(component.sedeCtrl.value).toBeNull();
      expect(component.regioneCtrl.value).toBeNull();

      expect(component.filtroperSede).toBeNull();
      expect(component.filtroperRegione).toBeNull();

      expect(component.regione).toEqual([]);
      expect(component.sede).toEqual([]);

      expect(component.getRegioni).toHaveBeenCalled();
      expect(component.getProvince).toHaveBeenCalled();

      expect(component.elemNum).toBe(0);
      expect(component.dataSourceFiltered).toEqual([]);

      expect(component.sedeCtrl.disabled).toBeTrue();
      expect(component.regioneCtrl.disabled).toBeTrue();
    });
  });

  describe('openSedePanel', () => {
    it('should open the sede autocomplete panel when openSedePanel is called', () => {
      component.sedeAutocompleteTrigger = jasmine.createSpyObj('MatAutocompleteTrigger', ['openPanel']);  
      component.openSedePanel();
      expect(component.sedeAutocompleteTrigger.openPanel).toHaveBeenCalled();
    });
  });

  describe('openRegionePanel', () => {
    it('should open the regione autocomplete panel when openRegionePanel is called', () => {
      component.regioneAutocompleteTrigger = jasmine.createSpyObj('MatAutocompleteTrigger', ['openPanel']);  
      component.openRegionePanel();
      expect(component.regioneAutocompleteTrigger.openPanel).toHaveBeenCalled();
    });
  });

  describe('openRuoloPanel', () => {
    it('should open the ruolo autocomplete panel when openRuoloPanel is called', () => {
      component.ruoloAutocompleteTrigger = jasmine.createSpyObj('MatAutocompleteTrigger', ['openPanel']);  
      component.openRuoloPanel();
      expect(component.ruoloAutocompleteTrigger.openPanel).toHaveBeenCalled();
    });    
  });
  
  describe('onFocus', () => {
    it('should set the control value to " " and then reset it to "" when onFocus is called', fakeAsync(() => {
      const ctrl = new FormControl('');
      spyOn(ctrl, 'setValue').and.callThrough();
  
      component.onFocus(ctrl);
  
      // Verifica che setValue sia stato chiamato con ' ' prima del timeout
      expect(ctrl.setValue).toHaveBeenCalledWith(' ');
  
      // Avanza nel tempo per far scatenare il setTimeout
      tick(1);
  
      expect(ctrl.setValue).toHaveBeenCalledWith('');
    }));
  });

  describe('sortData', () => {
    it ('should set sorting order and call popolaTabella() if selected tab is equal to 0', () => {
      let sort: Sort = { active: "matricola", direction: "asc" };
      component.selectedTab = 0;
      
      spyOn(component, 'popolaTabella');

      component.sortData(sort);

      expect(component.ordinamentoColonna).toBe(sort.active + '_' + sort.direction);
      expect(component.popolaTabella).toHaveBeenCalled();
    });

    it ('should set sorting order and call loadScarti() if selected tab is equal to 1', () => {
      let sort: Sort = { active: "matricola", direction: "asc" };
      component.selectedTab = 1;
      
      spyOn(component, 'loadScarti');
      
      component.sortData(sort);

      expect(component.ordinamentoColonna).toBe(sort.active + '_' + sort.direction);
      expect(component.loadScarti).toHaveBeenCalled();
    });
  });

  describe('handleRowClick', () => {
    it('should call datiUtente$.next and open user details dialog when handleRowClick is called', () => {
      // mocks
      const mockSediDTO = mockSedi.map(sede => ({
        sedeCodSede: sede.id,       
        sedeDesc: sede.nome 
      }));
      const mockRuoliDTO = mockRuoli.map(ruolo => ({
        ruoloCod: ruolo.ruolo1,      
        ruoloDesc: ruolo.descrizione 
      }));
      const row = {
        id: 1020,
        nome: 'A',
        cognome: 'P',
        username: 'a.p',
        matricola: 'E0012348',
        codiceFiscale: null,
        sedeDTO: mockSediDTO,
        ruoloDTO: mockRuoliDTO,
        email: 'ap@azienda.it',
        creato: '2024-08-08T15:17:22.033',
        attivo: true
      };
      const support = 1;
      component.selectedTab = support;
      
      const datiUtente: any = { row, support };
      utentiSrv.datiUtente$ = new BehaviorSubject<any | undefined>(datiUtente);
      
      component.handleRowClick(row);

      // Verifica che il valore di datiUtente$ sia stato aggiornato correttamente dopo la chiamata a next
      expect(utentiSrv.datiUtente$.value).toEqual({
        row: row,
        selectedTab: component.selectedTab
      });

      // Verifica che il dialogo ListaUtentiModificaComponent sia stato aperto
      expect(dialog.open).toHaveBeenCalledWith(ListaUtentiModificaComponent, {
        disableClose: true
      });
    });
  });

  describe('inizializzaPaginazione', () => {
    it('should call resetPaginazione(), contaRicercaFiltrata() and popolaTabella()', () => {
      spyOn(component, 'popolaTabella');
      spyOn(component, 'resetPaginazione');
      
      const mockCountResponse = { count: 40 }; 
      utentiSrv.contaRicercaFiltrata.and.returnValue(of(mockCountResponse));
  
      component.inizializzaPaginazione();

      expect(component.elemNum).toBe(40);
      expect(component.pageNum).toBe(2); 
  
      expect(component.layoutNumbers).toEqual([1, 2]);
  
      expect(component.resetPaginazione).toHaveBeenCalled();
      expect(utentiSrv.contaRicercaFiltrata).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });

  describe('inizializzaPaginazioneScarti', () => {
    it('should calculate pageNum scarti, populate layoutNumbers scarti, and call loadScarti', () => {
      spyOn(component, 'loadScarti');
      spyOn(component, 'resetPaginazioneScarti');

      const mockCountResponse = { count: 40 }; 
      utentiSrv.contaScarti.and.returnValue(of(mockCountResponse));

      component.inizializzaPaginazioneScarti();

      expect(component.elemNumScarti).toBe(40);
      expect(component.pageNumScarti).toBe(2); 
  
      expect(component.layoutNumbersScarti).toEqual([1, 2]);
  
      expect(component.resetPaginazioneScarti).toHaveBeenCalled();
      expect(utentiSrv.contaScarti).toHaveBeenCalled();
      expect(component.loadScarti).toHaveBeenCalled();
    });
  });

  describe('onFileSelected', () => {
    it('should show an error message if the file is not xls or xlsx', () => {
      spyOn(component, 'onUpload');
      const event = { target: { files: [ new File([''], 'invalidExtensionFile.txt') ] } };
      component.snackBar = snackBar; 
       
      component.onFileSelected(event);

      expect(component.onUpload).toHaveBeenCalled();

      expect(snackBar.open).toHaveBeenCalledWith(
        'Errore: puoi selezionare solo file .xlsx e .xls', 
        'Chiudi', 
        { duration: 3000 }
      );
      expect(component.selectedFile).toBeNull();
    });

    it('should allow xls and xlsx files and set the selected file', () => {
      spyOn(component, 'onUpload');

      const validXlsFile = { target: { files: [ new File( [''], 'validExtensionFile.xls') ] } }; // File con estensione xls
      const validXlsxFile = { target: { files: [ new File([''], 'validExtensionFile.xlsx') ] } }; // File con estensione xlsx
      
      // test estensione: .xls
      component.onFileSelected(validXlsFile);

      expect(component.onUpload).toHaveBeenCalled();
      expect(snackBar.open).toHaveBeenCalledWith(
        'File inviato per l\'elaborazione', 
        'Chiudi', 
        { duration: 3000 }
      );
      expect(component.selectedFile).toEqual(validXlsFile.target.files[0]);

      // test estensione: .xlsx
      component.onFileSelected(validXlsxFile);
      
      expect(component.onUpload).toHaveBeenCalled();
      expect(snackBar.open).toHaveBeenCalledWith(
        'File inviato per l\'elaborazione', 
        'Chiudi', 
        { duration: 3000 }
      );

      expect(component.selectedFile).toEqual(validXlsxFile.target.files[0]);
    });
  });

  describe('onUpload', () => {
    it ('should upload file when selected and response is successful ', () => {
      const validResponse = { message: 'Success' };
      const validFile = new File([''], 'validExtensionFile.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      
      spyOn(component, 'inizializzaPaginazioneScarti');
      spyOn(component, 'openErrorDialog');
      utentiSrv.censimentoUtenti.and.returnValue(of(validResponse));

      component.selectedFile = validFile;
      
      component.onUpload();

      expect(component.openErrorDialog).toHaveBeenCalledWith('Success', '');
      expect(component.selectedFile).toBeNull();
      expect(component.inizializzaPaginazioneScarti).toHaveBeenCalled();
    });

    it('should handle error if the upload fails', () => {
      const errorResponse = { message: 'Errore durante l\'upload' };
      const validFile = new File([''], 'validExtensionFile.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
      spyOn(component, 'openErrorDialog');
      spyOn(component, 'inizializzaPaginazioneScarti');
  
      utentiSrv.censimentoUtenti.and.returnValue(throwError(() => errorResponse.message));
      
      component.selectedFile = validFile;
      
      component.onUpload();
  
      expect(component.openErrorDialog).toHaveBeenCalledWith('Errore durante l\'upload', 'Errore:');
      expect(component.errorMessage).toBe('Errore durante l\'upload');
      expect(component.inizializzaPaginazioneScarti).not.toHaveBeenCalled();
    });

    it('should show an error message when no file is selected', () => {
      component.selectedFile = null;
  
      component.onUpload();
  
      expect(snackBar.open).toHaveBeenCalledWith(
        'Nessun file selezionato o File selezionato del tipo sbagliato', 
        'Chiudi', 
        { duration: 5000 }
      );
      expect(component.selectedFile).toBeNull();

      component.selectedFile = undefined!;

      component.onUpload();

      expect(snackBar.open).toHaveBeenCalledWith(
        'Nessun file selezionato o File selezionato del tipo sbagliato', 
        'Chiudi', 
        { duration: 5000 }
      );
      expect(component.selectedFile).toBeUndefined();
    });
  });

  describe('loadScarti', () => {
    it('should call getScarti() and populate the table with data', () => {
      utentiSrv.getScarti.and.returnValue(of(mockScarti));
      
      component.loadScarti();

      expect(utentiSrv.getScarti).toHaveBeenCalledWith(20, 1, null!);
      expect(component.dataSourceScarti).toBe(mockScarti);
      expect(component.errorMessage).toBeNull(); 
    });

    it('should handle error if getScarti() fails', () => {
      utentiSrv.getScarti.and.returnValue(throwError(() => 'Error fetching data.'));
      component.loadScarti();
      expect(component.errorMessage).toBe('Errore nel recupero degli scarti', 'Errore:');
    });
  });

  describe('displayFieldData', () => {
    it ('should return "-" if content is null, undefined or empty', () => {
      let content: string;
      let result: string;
      
      content = null!;
      result = component.displayFieldData(content);
      expect(result).toBe('-');
      
      content = undefined!;
      result = component.displayFieldData(content);
      expect(result).toBe('-');
      
      content = "";
      result = component.displayFieldData(content);
      expect(result).toBe('-');

      content = " ".trim();
      result = component.displayFieldData(content);
      expect(result).toBe('-');
    });

    it ('should return formatted data if content is not null, undefined or empty', () => {
      const content = "2024-10-02T14:45:00.9";
      const result = component.displayFieldData(content);
      expect(result).toBe("02/10/2024 14:45:00");      
    });
  });

  // TEST PAGINAZIONE: LISTA UTENTI
  describe('paginationUtenti', () => {
    it('should reset pagination correctly', () => {
      component.pageCurr = 5;
      component.base = 10;
      component.layoutDim = 15;
      component.layoutNumbers = [1, 2, 3];
      component.resetPaginazione();
      expect(component.pageCurr).toBe(1);
      expect(component.base).toBe(1);
      expect(component.layoutDim).toBe(6);
      expect(component.layoutNumbers).toEqual([]);
    });
  
    it('should scroll layout when current page is at the end', () => {
      component.pageCurr = 5;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 1;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(6);
      expect(component.layoutNumbers).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should not scroll layout when current page is 1', () => {
      component.pageCurr = 1;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 5;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should not scroll layout if current page is in the middle', () => {
      component.pageCurr = 3;
      component.layoutNumbers = [1, 2, 3, 4, 5];
      component.base = 1;
      component.pageNum = 10;
      component.scorriLayout();
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1, 2, 3, 4, 5]);
    });
     
    it('should set pageCurr to 1, base to 1, and call popolaTabella', () => {
      spyOn(component, 'popolaTabella'); 
      component.pageCurr = 2;
      component.pageNum = 2;
      component.pageFirst(); 

      expect(component.pageCurr).toBe(1); 
      expect(component.base).toBe(1); 
      expect(component.layoutNumbers).toEqual([1,2]); 
      expect(component.popolaTabella).toHaveBeenCalled(); 
    });

    it('should set pageCurr to last page', () =>{
      spyOn(component, 'popolaTabella');
      component.pageCurr = 1;
      component.pageNum = 2;
      component.pageLast();

      expect(component.pageCurr).toBe(2);
      expect(component.base).toBe(1);
      expect(component.layoutNumbers).toEqual([1,2]);
      expect(component.popolaTabella).toHaveBeenCalled();
    });

    it('should go to the next page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaTabella')
      component.pageCurr = 1;
      component.pageNum = 5;
      component.pageNext();
      expect(component.pageCurr).toBe(2);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });

    it('should go to the prev page', () => {
      spyOn(component, 'scorriLayout');
      spyOn(component, 'popolaTabella')
      component.pageCurr = 2;
      component.pageNum = 5;
      component.pagePrev();
      expect(component.pageCurr).toBe(1);
      expect(component.scorriLayout).toHaveBeenCalled();
      expect(component.popolaTabella).toHaveBeenCalled();
    });
  });
  
  // TEST PAGINAZIONE: LISTA SCARTI
  describe('paginationUtenti', () => {
    it('should reset pagination scarti correctly', () => {
      component.pageCurrScarti = 5;
      component.baseScarti = 10;
      component.layoutDimScarti = 15;
      component.layoutNumbersScarti = [1, 2, 3];
      component.resetPaginazioneScarti();
      expect(component.pageCurrScarti).toBe(1);
      expect(component.baseScarti).toBe(1);
      expect(component.layoutDimScarti).toBe(6);
      expect(component.layoutNumbersScarti).toEqual([]);
    });
  
    it('should scroll layout scarti when current page scarti is at the end', () => {
      component.pageCurrScarti = 5;
      component.layoutNumbersScarti = [1, 2, 3, 4, 5];
      component.baseScarti = 1;
      component.pageNumScarti = 10;
      component.scorriLayoutScarti();
      expect(component.baseScarti).toBe(6);
      expect(component.layoutNumbersScarti).toEqual([6, 7, 8, 9, 10]);
    });
  
    it('should not scroll layout scarti when current page is 1', () => {
      component.pageCurrScarti = 1;
      component.layoutNumbersScarti = [1, 2, 3, 4, 5];
      component.baseScarti = 5;
      component.pageNumScarti = 10;
      component.scorriLayoutScarti();
      expect(component.baseScarti).toBe(1);
      expect(component.layoutNumbersScarti).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should not scroll layout scarti if current page is in the middle', () => {
      component.pageCurrScarti = 3;
      component.layoutNumbersScarti = [1, 2, 3, 4, 5];
      component.baseScarti = 1;
      component.pageNumScarti = 10;
      component.scorriLayoutScarti();
      expect(component.baseScarti).toBe(1);
      expect(component.layoutNumbersScarti).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should set pageCurr scarti to 1, base to 1, and call loadScarti', () => {
      spyOn(component, 'loadScarti'); 
      component.pageCurrScarti = 2;
      component.pageNumScarti = 2;
      component.pageFirstScarti(); 

      expect(component.pageCurrScarti).toBe(1); 
      expect(component.baseScarti).toBe(1); 
      expect(component.layoutNumbersScarti).toEqual([1,2]); 
      expect(component.loadScarti).toHaveBeenCalled(); 
    });

    it('should set pageCurr scarti to last page scarti', () =>{
      spyOn(component, 'loadScarti');
      component.pageCurrScarti = 1;
      component.pageNumScarti = 2;
      component.pageLastScarti();

      expect(component.pageCurrScarti).toBe(2);
      expect(component.baseScarti).toBe(1);
      expect(component.layoutNumbersScarti).toEqual([1,2]);
      expect(component.loadScarti).toHaveBeenCalled();
    });

    it('should go to the next page scarti', () => {
      spyOn(component, 'scorriLayoutScarti');
      spyOn(component, 'loadScarti')
      component.pageCurrScarti = 1;
      component.pageNumScarti = 5;
      component.pageNextScarti();
      expect(component.pageCurrScarti).toBe(2);
      expect(component.scorriLayoutScarti).toHaveBeenCalled();
      expect(component.loadScarti).toHaveBeenCalled();
    });

    it('should go to the prev page scarti', () => {
      spyOn(component, 'scorriLayoutScarti');
      spyOn(component, 'loadScarti')
      component.pageCurrScarti = 2;
      component.pageNumScarti = 5;
      component.pagePrevScarti();
      expect(component.pageCurrScarti).toBe(1);
      expect(component.scorriLayoutScarti).toHaveBeenCalled();
      expect(component.loadScarti).toHaveBeenCalled();
    });  
  });
});