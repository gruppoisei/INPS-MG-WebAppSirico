import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ModalDettagliSegnalazioneComponent } from './modal-dettagli-segnalazione.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError, BehaviorSubject } from 'rxjs';
import { StepperService } from '@shared/services/stepper.service';
import { StorageService } from '@shared/services/storage.service';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ModalDettagliSegnalazioneComponent', () => {
  let component: ModalDettagliSegnalazioneComponent;
  let fixture: ComponentFixture<ModalDettagliSegnalazioneComponent>;

  let rilevazioneService: jasmine.SpyObj<RilevazioneService>;
  let stepperService: jasmine.SpyObj<StepperService>;
  let storageService: jasmine.SpyObj<StorageService>;

  const mockDialogData = 1; // Mock per i dati del dialogo (id aspetto segnalazione)

  beforeEach(async () => {
    // Configurazione degli spie del servizio Rilevazione
    rilevazioneService = jasmine.createSpyObj('RilevazioneService', [
      'getDettagliAspettoSegnalazioneById',
      'getDettagliAspettoSegnalazioneContenziosoById',
    ]);

    // Configurazione del StepperService con BehaviorSubjects per ogni osservabile necessario
    stepperService = {
      datiSegnalazioneProdotto$: new BehaviorSubject({
        settoreMateria: 'Settore Test',
        areaProdotto: 'Area Test',
        sede: 'Sede Test',
        sedeId: 1,
        data1: '2024-11-04',
        statoId: 5,
        areaId: 1,
        data2: '2024-11-05',
        id: 123,
        inviata: true
      }),
      datiSegnalazioneContenzioso$: new BehaviorSubject({
        settoreMateria: 'Settore Test',
        areaProdotto: 'Area Test',
        sede: 'Sede Test',
        sedeId: 1,
        contenziosoDesc: 'Descrizione Test',
        data1: '2024-11-04',
        statoId: 5,
        areaId: 2,
        data2: '2024-11-05',
        id: 456,
        inviata: true
      }),
      inserimentoTipoSegnalazione$: new BehaviorSubject('Prodotto')
    } as any; // Usa "as any" per ignorare eventuali errori di tipo

    // Configurazione dello StorageService
    storageService = jasmine.createSpyObj('StorageService', ['getItem']);
    storageService.getItem.and.returnValue('P12799');

    await TestBed.configureTestingModule({
      declarations: [ModalDettagliSegnalazioneComponent],
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        MatTableModule,
        MatIconModule,
        NoopAnimationsModule  // Disattiva le animazioni per il test
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: RilevazioneService, useValue: rilevazioneService },
        { provide: StepperService, useValue: stepperService },
        { provide: StorageService, useValue: storageService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Consente l'uso dei componenti Material senza specificare ogni modulo
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDettagliSegnalazioneComponent);
    component = fixture.componentInstance;

    // Configurazione del metodo rilevazioneService per restituire un Observable
    rilevazioneService.getDettagliAspettoSegnalazioneById.and.returnValue(
      of({ criticita: 'Criticità Test', suggerimento: 'Suggerimento Test', integrazioneDR: 'Nota DR', integrazioneDC: 'Nota DC' })
    );

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form and load data correctly on ngOnInit', () => {
    component.ngOnInit();
    expect(component.titolo).toBe('Prodotto');
    expect(component.idAspettoSegnalazione).toBe(mockDialogData);
    expect(component.ruolo).toBe('P12799');
    expect(component.displayedColumns).toContain('integrazioneDR');
    expect(component.displayedColumns).toContain('integrazioneDC');
  });

  it('should call getDettagliAspettoSegnalazioneById and populate form values for Prodotto', () => {
    component.loadData();

    expect(rilevazioneService.getDettagliAspettoSegnalazioneById).toHaveBeenCalledWith(mockDialogData);
    expect(component.datiAspetto.length).toBeGreaterThan(0);

    const aspetto = component.datiAspetto[0];
    expect(aspetto.criticita).toBe('Criticità Test');
    expect(aspetto.suggerimento).toBe('Suggerimento Test');
    expect(component.form1.value.criticita).toBe('Criticità Test');
    expect(component.form1.value.suggerimento).toBe('Suggerimento Test');
  });

  /* it('should set correct form values and columns for Contenzioso', () => {
    // Cambia `inserimentoTipoSegnalazione$` a 'Contenzioso'
    stepperService.inserimentoTipoSegnalazione$.next('Contenzioso');
    component.loadData();

    expect(rilevazioneService.getDettagliAspettoSegnalazioneContenziosoById).toHaveBeenCalledWith(mockDialogData);
    expect(component.displayedColumns).toContain('integrazioneDR');
    expect(component.displayedColumns).toContain('integrazioneDC');
    expect(component.nomeContenzioso).toBe('Descrizione Test');
  }); */

  it('should handle error when loading aspetto segnalazione data', () => {
    rilevazioneService.getDettagliAspettoSegnalazioneById.and.returnValue(throwError('Error'));

    component.datiAspetto = [];

    component.loadData();
    expect(component.datiAspetto).toEqual([]);
  });
});
