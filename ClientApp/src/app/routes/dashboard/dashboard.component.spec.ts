import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { BachecaDTO, MessaggiService } from '@shared/services/messaggi.service';
import { StorageService } from '@shared';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let messaggiServiceMock: any;
  let storageServiceMock: any;
  let dialogMock: any;

  beforeEach(async () => {
    messaggiServiceMock = {
      statoMessaggio$: { next: jasmine.createSpy('next') },
      contaMessaggi: jasmine.createSpy('contaMessaggi').and.returnValue(of({ numeroMessaggi: 100 })),
      getMessaggi: jasmine.createSpy('getMessaggi').and.returnValue(of([])),
      datiMessaggio$: { next: jasmine.createSpy('next'), value: null },
    };

    storageServiceMock = {
      getItem: jasmine.createSpy('getItem').and.returnValue('P12689'),
    };

    dialogMock = {
      open: jasmine.createSpy('open').and.returnValue({
        afterClosed: () => of(null),
      }),
    };

    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [
        { provide: MessaggiService, useValue: messaggiServiceMock },
        { provide: StorageService, useValue: storageServiceMock },
        { provide: MatDialog, useValue: dialogMock },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize roles and pagination on ngOnInit', async () => {
    spyOn(component, 'checkRoles');
    spyOn(component, 'inizializzaPaginazione');
    await component.ngOnInit();
    expect(storageServiceMock.getItem).toHaveBeenCalledWith('allroles');
    expect(component.checkRoles).toHaveBeenCalled();
    expect(component.inizializzaPaginazione).toHaveBeenCalled();
  });
 
  it('should enable row click for admin roles', () => {
    component.disableRowClick = true;
    storageServiceMock.getItem.and.returnValue('P12689; P12799; P12800; P12801');
    component.checkRoles();
    expect(component.disableRowClick).toBeFalse();
    component.disableRowClick = true;
    storageServiceMock.getItem.and.returnValue('P12690; P12799; P12800; P12801');
    component.checkRoles();
    expect(component.disableRowClick).toBeFalse();
    component.disableRowClick = true;
    storageServiceMock.getItem.and.returnValue('P12799; P12800; P12801');
    component.checkRoles();
    expect(component.disableRowClick).toBeTrue();
  });

  it('should initialize pagination and fetch message count', () => {
    spyOn(component, 'resetPaginazione');
    spyOn(component, 'popolaTabella');
    component.inizializzaPaginazione();
    expect(component.resetPaginazione).toHaveBeenCalled();
    expect(messaggiServiceMock.contaMessaggi).toHaveBeenCalledWith(true);
    expect(component.popolaTabella).toHaveBeenCalled();
  });

  it('should populate table with messages', () => {
    const mockData: BachecaDTO[] = [
      {
        id: 1,
        dataInserimento: '2024-11-14T12:34:56.789Z',
        oggetto: 'Test Oggetto',
        messaggio: 'Questo è un messaggio di test',
        utente: 'UT12345',
        // nome: 'Mario',
        // cognome: 'Rossi',
        visibile: true,
      },
    ];
  
    messaggiServiceMock.getMessaggi.and.returnValue(of(mockData)); 
    component.popolaTabella(); 
  
    expect(messaggiServiceMock.getMessaggi).toHaveBeenCalled();
    expect(component.data).toEqual(mockData); 
    expect(component.isLoading).toBeFalse(); 
  });
  

  it('should handle error when fetching messages', () => {
    spyOn(console, 'error'); 
    messaggiServiceMock.getMessaggi.and.returnValue(throwError(() => new Error('Errore')));

    component.popolaTabella();

    expect(console.error).toHaveBeenCalledWith('Errore nel recupero dei dati: ', jasmine.any(Error));
  });

  it('should set sorting order and populate table', () => {
    spyOn(component, 'popolaTabella');
    component.sortData({ active: 'oggetto', direction: 'asc' });
    expect(component.ordinamentoColonna).toBe('oggetto_asc');
    expect(component.popolaTabella).toHaveBeenCalled();
  });
  
  it('should clear sorting if direction is empty', () => {
    spyOn(component, 'popolaTabella');
    component.sortData({ active: 'oggetto', direction: '' });
    expect(component.ordinamentoColonna).toBeNull();
    expect(component.popolaTabella).toHaveBeenCalled();
  });

  it('should open dialog and handle row click for Modifica', fakeAsync(() => {
    spyOn(component, 'inizializzaPaginazione');
    messaggiServiceMock.datiMessaggio$ = new BehaviorSubject<any>(null);
    const row = 1;

    component.handleRowClick({ id: row }, 'Modifica');
    tick(500);
    expect(messaggiServiceMock.datiMessaggio$.value).toEqual({ id: row });
    expect(dialogMock.open).toHaveBeenCalled();
  
    component.handleRowClick({ id: 1 }, 'Inserimento');
    tick(500);
    expect(messaggiServiceMock.datiMessaggio$.value).toBe(0);
    expect(dialogMock.open).toHaveBeenCalled();
  }));

  it('should format date and time correctly', () => {
    const result = component.displayFieldData('2024-11-14T12:34:56.789Z');
    expect(result).toBe('14/11/2024 12:34:56');
  });
  
  it('should return "-" for invalid content', () => {
    expect(component.displayFieldData(null as unknown as string)).toBe('-');
    expect(component.displayFieldData('')).toBe('-');
  }); 

  it('should return "Attivi" for true', () => {
    expect(component.displayFieldAttivo(true)).toBe('Attivi');
  });
  
  it('should return "Non Attivi" for false', () => {
    expect(component.displayFieldAttivo(false)).toBe('Non Attivi');
  });
  
  it('should navigate to next page', () => {
    spyOn(component, 'popolaTabella');
    component.pageCurr = 1;
    component.pageNext();
    expect(component.pageCurr).toBe(2);
    expect(component.popolaTabella).toHaveBeenCalled();
  });
  
  it('should navigate to previous page', () => {
    spyOn(component, 'popolaTabella');
    component.pageCurr = 2;
    component.pagePrev();
    expect(component.pageCurr).toBe(1);
    expect(component.popolaTabella).toHaveBeenCalled();
  }); 

  it('should set pageCurr to the specified page and call popolaTabella', () => {
    spyOn(component, 'popolaTabella');
    const page = 3;
    component.setPageCurr(page);
    expect(component.pageCurr).toBe(page);
    expect(component.popolaTabella).toHaveBeenCalled();
  });
  
  it('should go to the first page', () => {
    spyOn(component, 'popolaTabella');
    component.pageCurr = 5;
    component.pageFirst();
    expect(component.pageCurr).toBe(1);
    expect(component.popolaTabella).toHaveBeenCalled();
  }); 
  
  it('should go to the last page', () => {
    spyOn(component, 'popolaTabella');
    component.pageNum = 10;
    component.pageLast();
    expect(component.pageCurr).toBe(10);
    expect(component.popolaTabella).toHaveBeenCalled();
  }); 

  it('should update layout numbers when scrolling layout', () => {
    component.pageCurr = 7; 
    component.pageNum = 10; 
    component.base = 1; 
    component.scorriLayout();
    expect(component.layoutNumbers).toEqual([6, 7, 8, 9, 10]); 
  });

  it('should sort data by column and direction', () => {
    spyOn(component, 'popolaTabella');
    component.sortData({ active: 'oggetto', direction: 'asc' }); 
    expect(component.ordinamentoColonna).toBe('oggetto_asc'); 
    expect(component.popolaTabella).toHaveBeenCalled(); 
  });

  it('should not update messaggioAttivo when toggle is checked', () => {
    const event = { checked: true }; 
    component.onToggleChange(event); 
    expect(component.messaggioAttivo).toBeTrue(); 
  });

  it('should not update messaggioAttivo when toggle is checked', () => {
    const event = { checked: true }; 
    component.onToggleChange(event); 
    expect(component.messaggioAttivo).toBeTrue(); 
  });

  describe('truncateText', () => {
    it('should truncate text longer than the limit and append "..."', () => {
      const text = 'This is a very long text that needs to be truncated';
      const limit = 50;
      
      const result = component.truncateText(text, limit);
      expect(result).toBe('This is a very long text that needs to be truncate...');
    });
  
    it('should return text unchanged if it is shorter than the limit', () => {
      const text = 'Short text';
      const limit = 50;
  
      const result = component.truncateText(text, limit);
      expect(result).toBe(text);
    });
  
    it('should return an empty string if the text is falsy (null, undefined, empty)', () => {
      const text = '';
      const limit = 50;
  
      const result = component.truncateText(text, limit);
      expect(result).toBe('');
    });
  
    it('should handle null text input correctly', () => {
      const text = null;
      const limit = 50;
  
      const result = component.truncateText(text!, limit);
      expect(result).toBe('');
    });
  
    it('should handle undefined text input correctly', () => {
      const text = undefined;
      const limit = 50;
  
      const result = component.truncateText(text!, limit);
      expect(result).toBe('');
    });
  });
  
});