import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PopupComunicazioniComponent } from './popup-comunicazioni.component';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from '@shared';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';

describe('PopupComunicazioniComponent', () => {
  let component: PopupComunicazioniComponent;
  let fixture: ComponentFixture<PopupComunicazioniComponent>;
  let mockComunicazioniService: jasmine.SpyObj<ComunicazioniService>;
  let mockRuoloComunicazioneService: jasmine.SpyObj<RuoloComunicazioneService>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<PopupComunicazioniComponent>>;
  let mockStorageService: jasmine.SpyObj<StorageService>;

  beforeEach(async () => {
    mockComunicazioniService = jasmine.createSpyObj('ComunicazioniService', ['newGetComunicazioneById', 'getTipoComunicazioneById', 'newSaveComunicazioneLettaChecked']);
    mockRuoloComunicazioneService = jasmine.createSpyObj('RuoloComunicazioneService', ['newGetComunicazioniFilterByRuoloAndMatricola']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockStorageService = jasmine.createSpyObj('StorageService', ['getItem']);

    await TestBed.configureTestingModule({
      declarations: [PopupComunicazioniComponent],
      imports: [MatDialogModule], // Importa il modulo MatDialog
      providers: [
        { provide: ComunicazioniService, useValue: mockComunicazioniService },
        { provide: RuoloComunicazioneService, useValue: mockRuoloComunicazioneService },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: StorageService, useValue: mockStorageService }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA] // Ignora gli errori sui componenti sconosciuti
    }).compileComponents();

    fixture = TestBed.createComponent(PopupComunicazioniComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize properties on ngOnInit', () => {
    mockStorageService.getItem.and.callFake((key: string) => {
      if (key === 'allroles') return 'testRole';
      if (key === 'matricola') return 'testMatricola';
      return null;
    });

    mockRuoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola.and.returnValue(of([]));

    component.ngOnInit();

    expect(component.role).toBe('testRole');
    expect(component.matricola).toBe('testMatricola');
    expect(mockRuoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola).toHaveBeenCalledWith('testRole', 'testMatricola');
  });

  it('should close dialog in ultimoMessaggio', () => {
    component.ultimoMessaggio();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should close dialog if no messages are available', () => {
    mockStorageService.getItem.and.returnValue('testRole');
    mockRuoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola.and.returnValue(of([]));

    component.getComunicazioni();

    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should handle case when no messages are available in prossimoMessaggio', () => {
    const newCom = new Comunicazioni();

    component.ruoloComunicazioni = [{ idComunicazione: 1 }] as any; 
    component.indMessaggi = 0;
  
    mockComunicazioniService.newGetComunicazioneById.and.returnValue(of(newCom));
    mockComunicazioniService.getTipoComunicazioneById.and.returnValue(of(null));
  
    component.prossimoMessaggio();
    
    expect(component.comunicazione).toEqual(newCom); 
    expect(component.altriMessaggi).toBeFalse(); 
  });

  it('should save the communication as read', () => {
    jasmine.clock().install(); 
    const mockedDate = new Date('2024-11-15T11:06:08'); 
    jasmine.clock().mockDate(mockedDate);
  
    const comunicazioneId = 123; 
    const matricola = 'testMatricola'; 
  
    const expectedComunicazioneLetta = new ComunicazioneLetta();
    expectedComunicazioneLetta.idComunicazione = comunicazioneId;
    expectedComunicazioneLetta.matricola = matricola;
    expectedComunicazioneLetta.id = 0; 
    expectedComunicazioneLetta.creato = mockedDate;
    expectedComunicazioneLetta.aggiornato = mockedDate;
  
    mockComunicazioniService.newSaveComunicazioneLettaChecked.and.returnValue(of(expectedComunicazioneLetta));
  
    component.salvaComunicazioneLetta(comunicazioneId, matricola);
  
    expect(mockComunicazioniService.newSaveComunicazioneLettaChecked).toHaveBeenCalledWith(expectedComunicazioneLetta);
    expect(mockComunicazioniService.newSaveComunicazioneLettaChecked).toHaveBeenCalledTimes(1);
  
    jasmine.clock().uninstall(); 
  });

}); 

