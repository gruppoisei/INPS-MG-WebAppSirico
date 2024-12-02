import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ModalDettagliGestioneComponent } from './modal-dettagli-gestione.component';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StepperService } from '@shared/services/stepper.service';
import { StorageService } from '@shared/services/storage.service';
import { DocumentiService } from '@shared/services/documenti.service';
import { ApprovazioneService } from '@shared/services/approvazione.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';
import { HttpEventType } from '@angular/common/http';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('ModalDettagliGestioneComponent', () => {
  let component: ModalDettagliGestioneComponent;
  let fixture: ComponentFixture<ModalDettagliGestioneComponent>;

  let rilevazioneService: jasmine.SpyObj<RilevazioneService>;
  let documentiService: jasmine.SpyObj<DocumentiService>;
  let approvazioneService: jasmine.SpyObj<ApprovazioneService>;
  let stepperService: jasmine.SpyObj<StepperService>;
  let storageService: jasmine.SpyObj<StorageService>;


  beforeEach(async () => {
    rilevazioneService = jasmine.createSpyObj('RilevazioneService', ['getDettagliSegnalazioneById', 'updateIntegrazioni']);
    documentiService = jasmine.createSpyObj('DocumentiService', ['findAllegatoSegnalazione', 'findAllegatiAspetti', 'allegaFileSegnalazione', 'getFileAspetti', 'getFileSegnalazione']);
    approvazioneService = jasmine.createSpyObj('ApprovazioneService', ['checkRisolviSegnalazione$']);
    stepperService = jasmine.createSpyObj('StepperService', ['datiSegnalazioneProdotto$', 'dialogClosed$']);
    storageService = jasmine.createSpyObj('StorageService', ['getItem']);

    // Modifica la configurazione del ruolo mock
    storageService.getItem.and.callFake((key: string) => {
      if (key === 'allroles') return 'P12799;P12801;P12690'; // Assegna più ruoli validi
      return null;
    });

    rilevazioneService.getDettagliSegnalazioneById.and.returnValue(of([{ idAspetto: 1, integrazioneDC: 'test', integrazioneDR: 'test' }]));
    documentiService.findAllegatoSegnalazione.and.returnValue(of({ esito: true }));
    documentiService.findAllegatiAspetti.and.returnValue(of([{ idAspetto: 1, esito: true }]));

    await TestBed.configureTestingModule({
      declarations: [ModalDettagliGestioneComponent],
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
        MatIconModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
        { provide: RilevazioneService, useValue: rilevazioneService },
        { provide: DocumentiService, useValue: documentiService },
        { provide: ApprovazioneService, useValue: approvazioneService },
        { provide: StepperService, useValue: stepperService },
        { provide: StorageService, useValue: storageService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalDettagliGestioneComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle allegaFile correctly', () => {
    const mockFile = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    const mockEvent = { type: HttpEventType.UploadProgress, loaded: 50, total: 100 };

    component.fileSegnalazione = mockFile;
    documentiService.allegaFileSegnalazione.and.returnValue(of(mockEvent));

    component.allegaFile();

    expect(documentiService.allegaFileSegnalazione).toHaveBeenCalledWith(
      component.idSegnalazione,
      component.selectRole(),
      'Prodotto',
      mockFile
    );
    expect(component.uploadProgress).toBe(50);
  });

  it('should handle error on allegaFile', () => {
    spyOn(window, 'alert');
    component.fileSegnalazione = new File([''], 'test.pdf');
    documentiService.allegaFileSegnalazione.and.returnValue(throwError(() => new Error('Error')));

    component.allegaFile();

    expect(window.alert).toHaveBeenCalledWith("Errore durante l'allegato del file");
    expect(component.isUploading).toBeFalse();
  });

  it('should call downloadFileAspetto and handle the file download', () => {
    const mockResponse = new Blob(['file content'], { type: 'application/pdf' });
    documentiService.getFileAspetti.and.returnValue(of({
      body: mockResponse,
      headers: {
        get: () => 'attachment; filename="test.pdf"'
      }
    } as any));

    spyOn(window.URL, 'createObjectURL').and.returnValue('blob:url');

    // Usa un vero HTMLAnchorElement
    const anchorMock = document.createElement('a');
    spyOn(document, 'createElement').and.returnValue(anchorMock);
    spyOn(anchorMock, 'click');

    component.downloadFileAspetto(1);

    expect(documentiService.getFileAspetti).toHaveBeenCalledWith(
      component.idSegnalazione,
      1,
      'Prodotto',
      ''
    );

    expect(anchorMock.click).toHaveBeenCalled();
  });

  it('should log error if role is not set correctly', () => {
    spyOn(console, 'error');
    storageService.getItem.and.returnValue(null); // Forza un ruolo non valido

    component.selectRole();

    expect(component.errorMessage).toBe('Il ruolo non è stato impostato correttamente.');
    // expect(console.error).toHaveBeenCalledWith('Il ruolo non è stato impostato correttamente.');
  });

  it('should call downloadFileSegnalazione and handle the file download', () => {
    const mockResponse = new Blob(['file content'], { type: 'application/pdf' });
    documentiService.getFileSegnalazione.and.returnValue(of({
      body: mockResponse,
      headers: {
        get: () => 'attachment; filename="test.pdf"'
      }
    } as any));

    spyOn(window.URL, 'createObjectURL').and.returnValue('blob:url');

    const anchorMock = document.createElement('a');
    spyOn(document, 'createElement').and.returnValue(anchorMock);
    spyOn(anchorMock, 'click');

    component.downloadFileSegnalazione();

    expect(documentiService.getFileSegnalazione).toHaveBeenCalledWith(
      component.idSegnalazione,
      'Prodotto',
      ''
    );

    expect(anchorMock.click).toHaveBeenCalled();
  });

  it('should remove the selected file if it matches fileSegnalazione', () => {
    const mockFile = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    component.fileSegnalazione = mockFile;

    component.removeFileSegnalazione(mockFile);

    expect(component.fileSegnalazione).toBeNull();
    expect(component.isFile).toBeFalse();
  });

  it('should not remove the file if it does not match fileSegnalazione', () => {
    const mockFile = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    const differentFile = new File(['different content'], 'different.pdf', { type: 'application/pdf' });
    component.fileSegnalazione = mockFile;

    component.removeFileSegnalazione(differentFile);

    expect(component.fileSegnalazione).toEqual(mockFile);
  });
});


