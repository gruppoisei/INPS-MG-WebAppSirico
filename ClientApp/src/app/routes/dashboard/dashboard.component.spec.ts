import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { BachecaDTO, MessaggiService } from '@shared/services/messaggi.service';
import { StorageService } from '@shared';
import { of, throwError } from 'rxjs';
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
    component.checkRoles();
    expect(component.disableRowClick).toBeFalse();
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

  it('should open dialog and handle row click for Modifica', () => {
    spyOn(component, 'inizializzaPaginazione');
    component.handleRowClick({ id: 1 }, 'Modifica');
    expect(messaggiServiceMock.datiMessaggio$.next).toHaveBeenCalledWith({ id: 1 });
    expect(dialogMock.open).toHaveBeenCalled();
  });

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

});