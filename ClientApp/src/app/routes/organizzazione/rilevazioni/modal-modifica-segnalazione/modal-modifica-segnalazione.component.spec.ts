import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { ModalModificaSegnalazioneComponent } from './modal-modifica-segnalazione.component';
import { StepperService } from '@shared/services/stepper.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { DocumentiService } from '@shared/services/documenti.service';
import { StorageService } from '@shared';
import { ModalDettagliSegnalazioneComponent } from '../modal-dettagli-segnalazione/modal-dettagli-segnalazione.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockStepperService {
  inserimentoTipoSegnalazione$ = new BehaviorSubject<string>('Prodotto');
  datiSegnalazioneProdotto$ = new BehaviorSubject<any>({ id: 1, statoId: 5 }); // StatoId inizializzato
  datiSegnalazioneContenzioso$ = new BehaviorSubject<any>({ id: 2, statoId: 5 });
}

class MockRilevazioneService {
  getDettagliSegnalazioneById = jasmine.createSpy('getDettagliSegnalazioneById').and.returnValue(of([]));
  getDettagliSegnalazioneContenziosoById = jasmine.createSpy('getDettagliSegnalazioneContenziosoById').and.returnValue(of([]));
  deleteSegnalazione = jasmine.createSpy('deleteSegnalazione').and.returnValue(of(null));
  sendSegnalazione = jasmine.createSpy('sendSegnalazione').and.returnValue(of({}));
}

class MockDocumentiService {
  findAllegatiAspetti = jasmine.createSpy('findAllegatiAspetti').and.returnValue(of([]));
  findAllegatoSegnalazione = jasmine.createSpy('findAllegatoSegnalazione').and.returnValue(of({ esito: true }));
  deleteAllFileSegnalazione = jasmine.createSpy('deleteAllFileSegnalazione').and.returnValue(of(null));
}

class MockStorageService {
  getItem = jasmine.createSpy('getItem').and.returnValue('P12801');
}

class MockMatDialog {
  open = jasmine.createSpy('open').and.returnValue({ afterClosed: () => of(true) });
  closeAll = jasmine.createSpy('closeAll');
}

describe('ModalModificaSegnalazioneComponent', () => {
  let component: ModalModificaSegnalazioneComponent;
  let fixture: ComponentFixture<ModalModificaSegnalazioneComponent>;
  let stepperService: MockStepperService;
  let rilevazioneService: MockRilevazioneService;
  let documentiService: MockDocumentiService;
  let storageService: MockStorageService;
  let dialog: MockMatDialog;

  beforeEach(async () => {
    stepperService = new MockStepperService();
    rilevazioneService = new MockRilevazioneService();
    documentiService = new MockDocumentiService();
    storageService = new MockStorageService();
    dialog = new MockMatDialog();

    await TestBed.configureTestingModule({
      declarations: [ModalModificaSegnalazioneComponent],
      providers: [
        { provide: StepperService, useValue: stepperService },
        { provide: RilevazioneService, useValue: rilevazioneService },
        { provide: DocumentiService, useValue: documentiService },
        { provide: StorageService, useValue: storageService },
        { provide: MatDialog, useValue: dialog },
        { provide: MatDialogRef, useValue: {} },
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } },
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalModificaSegnalazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct title and role', () => {
    stepperService.inserimentoTipoSegnalazione$.next('Prodotto'); 
    component.ngOnInit(); 
  
    expect(component.titolo).toBe('Prodotto'); 
    expect(component.ruolo).toBe('P12801'); 
  }); 

  it('should load data for product', () => {
    stepperService.inserimentoTipoSegnalazione$.next('Prodotto');
    stepperService.datiSegnalazioneProdotto$.next({ id: 1, statoId: 5 });
  
    component.titolo = 'Prodotto'; 
    component.loadDatiSegnalazione(); 
  
    expect(rilevazioneService.getDettagliSegnalazioneById).toHaveBeenCalledWith(1);
    expect(documentiService.findAllegatiAspetti).toHaveBeenCalled();
    expect(documentiService.findAllegatoSegnalazione).toHaveBeenCalledWith(1, '', 'Prodotto');
  });

  it('should load data for contenzioso', () => {
    component.titolo = 'Contenzioso';
    component.loadDatiSegnalazione();

    expect(rilevazioneService.getDettagliSegnalazioneContenziosoById).toHaveBeenCalledWith(2);
    expect(documentiService.findAllegatiAspetti).toHaveBeenCalled();
    expect(documentiService.findAllegatoSegnalazione).toHaveBeenCalledWith(2, '', 'Contenzioso');
  }); 

  it('should close the dialog on modifyDialogStepperModifica', () => {
    component.modifyDialogStepperModifica();
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should call sendSegnalazione for product', () => {
    component.titolo = 'Prodotto';
    component.segnalazioneProdotto = { id: 1, statoId: 5 } as any;
    component.sendDialogStepperModifica();

    expect(rilevazioneService.sendSegnalazione).toHaveBeenCalledWith('Prodotto', 1, 5);
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should call sendSegnalazione for contenzioso', () => {
    component.titolo = 'Contenzioso';
    component.segnalazioneContenzioso = { id: 2, statoId: 5 } as any;
    component.sendDialogStepperModifica();

    expect(rilevazioneService.sendSegnalazione).toHaveBeenCalledWith('Contenzioso', 2, 5);
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should handle delete for product', () => {
    component.titolo = 'Prodotto';
    component.segnalazioneProdotto = { id: 1 } as any;
    component.deleteDialogStepperModifica();

    expect(rilevazioneService.deleteSegnalazione).toHaveBeenCalledWith('Prodotto', 1);
    expect(documentiService.deleteAllFileSegnalazione).toHaveBeenCalledWith(1, 'Prodotto');
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should handle delete for contenzioso', () => {
    component.titolo = 'Contenzioso';
    component.segnalazioneContenzioso = { id: 2 } as any;
    component.deleteDialogStepperModifica();

    expect(rilevazioneService.deleteSegnalazione).toHaveBeenCalledWith('Contenzioso', 2);
    expect(documentiService.deleteAllFileSegnalazione).toHaveBeenCalledWith(2, 'Contenzioso');
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should correctly map state to status images', () => {
    expect(component.showFieldStato(1)).toBe('../../../../assets/images/yellow_status.png');
    expect(component.showFieldStato(6)).toBe('../../../../assets/images/attesadefi.png');
    expect(component.showFieldStato(99)).toBe('../../../../assets/images/red_status.png');
  });

  it('should format sede correctly', () => {
    expect(component.showFieldSede(123, 'Rome')).toBe('123 - Rome');
    expect(component.showFieldSede(undefined as unknown as number, '')).toBe('');
  });

  it('should close all dialogs when closeDialogStepperModifica is called', () => {
    component.closeDialogStepperModifica();
    expect(dialog.closeAll).toHaveBeenCalled();
  });

  it('should return correct string for showFieldInviata', () => {
    expect(component.showFieldInviata(true)).toBe('Sì');
    expect(component.showFieldInviata(false)).toBe('No');
  });

  it('should truncate long descriptions', () => {
    expect(component.showDescrizioneTroncata('A very long description that exceeds 23 characters')).toBe('A very long descript...');
    expect(component.showDescrizioneTroncata('Short description')).toBe('Short description');
    expect(component.showDescrizioneTroncata(null)).toBe('N/A');
  });
});
