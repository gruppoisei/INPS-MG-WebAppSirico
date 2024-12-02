import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ModalRisolviComponent } from './modal-risolvi.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StorageService } from '@shared';
import { AspettiprodottiService } from '@shared/services/aspettiprodotti.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { DocumentiService } from '@shared/services/documenti.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of, throwError } from 'rxjs';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { MatDialogModule } from '@angular/material/dialog'; // Importing MatDialogModule
import { MatIconModule } from '@angular/material/icon'; // Importing MatIconModule
import { MatTableModule } from '@angular/material/table'; // Importing MatTableModule
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; // Importing CUSTOM_ELEMENTS_SCHEMA

describe('ModalRisolviComponent', () => {
  let component: ModalRisolviComponent;
  let fixture: ComponentFixture<ModalRisolviComponent>;

  const mockDialogRef = { close: jasmine.createSpy('close') };
  const mockRilevazioneService = jasmine.createSpyObj('RilevazioneService', ['getDettagliAspettoSegnalazioneById', 'updateIntegrazioni']);
  const mockStorageService = jasmine.createSpyObj('StorageService', ['getItem']);
  const mockAspettiprodottiService = jasmine.createSpyObj('AspettiprodottiService', ['confermaAspetto']);
  const mockTerritorioService = jasmine.createSpyObj('TerritorioService', ['verificaSediIntegrazioneRegionale']);
  const mockDocumentiService = jasmine.createSpyObj('DocumentiService', ['findAllegatoAspetto', 'allegaFileAspetto']);

  const mockDialogData = [1, 1]; // Example of mock data passed to the dialog

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalRisolviComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        MatDialogModule,  // Importing the MatDialogModule
        MatIconModule,    // Importing the MatIconModule
        MatTableModule,   // Importing the MatTableModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: RilevazioneService, useValue: mockRilevazioneService },
        { provide: StorageService, useValue: mockStorageService },
        { provide: AspettiprodottiService, useValue: mockAspettiprodottiService },
        { provide: TerritorioService, useValue: mockTerritorioService },
        { provide: DocumentiService, useValue: mockDocumentiService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Add CUSTOM_ELEMENTS_SCHEMA if needed
    }).compileComponents();
  });

  beforeEach(() => {
    mockStorageService.getItem.and.callFake((key: string) => {
        switch (key) {
            case 'allroles':
                return 'P12799;P12801'; // Simula un valore di ruolo valido
            case 'listaSedi':
                return JSON.stringify([{ sedeCode: 'Sede1', descSede: 'Descrizione Sede 1', role: 'Role1' }]);
            default:
                return null; // Valore predefinito per chiavi non riconosciute
        }
    });
 
    mockRilevazioneService.getDettagliAspettoSegnalazioneById.and.returnValue(of({
        idAspettoSegnalazione: 1,
        integrazioneDR: 'Note DR',
        integrazioneDC: 'Note DC',
        criticita: 'High',
        suggerimento: 'Suggestion'
    }));
 
    fixture = TestBed.createComponent(ModalRisolviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
 });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should initialize idAspettoSegnalazione and idSegnalazione', () => {
      component.ngOnInit();
      expect(component.idAspettoSegnalazione).toEqual(1);
      expect(component.idSegnalazione).toEqual(1);
    });
  });

  /* describe('loadData', () => {
    it('should load data correctly', () => {
      mockStorageService.getItem.and.returnValue('P12799');
      mockRilevazioneService.getDettagliAspettoSegnalazioneById.and.returnValue(of({
        idAspettoSegnalazione: 1,
        integrazioneDR: 'Note DR',
        integrazioneDC: 'Note DC',
        criticita: 'High',
        suggerimento: 'Suggestion'
      }));
      component.loadData();
      expect(component.datiAspetto.length).toBe(1);
      expect(component.form1.controls['readOnlyNoteDR'].value).toBe('Note DR');
      expect(component.form1.controls['readOnlyNoteDC'].value).toBe('Note DC');
      expect(component.form1.controls['criticita'].value).toBe('High');
      expect(component.form1.controls['suggerimento'].value).toBe('Suggestion');
    });

    it('should handle error when loading data', () => {
      mockRilevazioneService.getDettagliAspettoSegnalazioneById.and.returnValue(throwError('Error'));
      component.loadData();
      expect(component.datiAspetto.length).toBe(0);
    });
  }); */

  describe('submitIntegrazioneStato', () => {
    it('should not submit if both input fields are empty', () => {
      component.form1.controls['inputNoteDR'].setValue('');
      component.form1.controls['inputNoteDC'].setValue('');
      component.submitIntegrazioneStato();
      expect(component.errorMessage).toBe('Errore: L\'integrazione non può essere vuota. Inserisci del testo prima di procedere.');
    });

    it('should submit integration successfully', () => {
      mockRilevazioneService.updateIntegrazioni.and.returnValue(of({}));
      component.form1.controls['inputNoteDR'].setValue('Some notes for DR');
      component.form1.controls['inputNoteDC'].setValue('Some notes for DC');
      component.submitIntegrazioneStato();
      expect(mockRilevazioneService.updateIntegrazioni).toHaveBeenCalled();
      expect(mockDialogRef.close).toHaveBeenCalled();
    });

    it('should handle error during integration submission', () => {
      mockRilevazioneService.updateIntegrazioni.and.returnValue(throwError('Error'));
      component.form1.controls['inputNoteDR'].setValue('Some notes for DR');
      component.form1.controls['inputNoteDC'].setValue('Some notes for DC');
      spyOn(window, 'alert'); // Spy on the alert function
      component.submitIntegrazioneStato();
      expect(window.alert).toHaveBeenCalledWith("Errore durante l'inserimento dell' integrazione o del cambio di stato della segnalazione");
    });
  });

  describe('toggleAllegatiAspetto', () => {
    it('should toggle showGestioneFileAspetto', () => {
      component.isFileAspetto = false;
      component.toggleAllegatiAspetto();
      expect(component.showGestioneFileAspetto).toBeTrue();

      component.isFileAspetto = true;
      component.toggleAllegatiAspetto();
      expect(component.showGestioneFileAspetto).toBeTrue();
    });
  });

  describe('hasValidRole', () => {
    it('should return true for valid role', () => {
      expect(component.hasValidRole('P12799')).toBeTrue();
    });

    it('should return false for invalid role', () => {
      expect(component.hasValidRole('InvalidRole')).toBeFalse();
    });
  });

  describe('removeFileAspetto', () => {
    it('should remove fileAspetto if it matches', () => {
      const file = new File([''], 'file.txt', { type: 'text/plain' });
      component.fileAspetto = file;
      component.removeFileAspetto(file);
      expect(component.fileAspetto).toBeNull();
      expect(component.isFileAspetto).toBeFalse();
    });

    it('should not remove fileAspetto if it does not match', () => {
      const file1 = new File([''], 'file1.txt', { type: 'text/plain' });
      const file2 = new File([''], 'file2.txt', { type: 'text/plain' });
      component.fileAspetto = file1;
      component.removeFileAspetto(file2);
      expect(component.fileAspetto).toBe(file1);
      expect(component.isFileAspetto).toBeFalse();
    });
  });

  describe('allegaFileAspetto', () => {
    it('should alert if no file is selected', () => {
      spyOn(window, 'alert');
      component.fileAspetto = null; // No file
      component.allegaFileAspetto();
      expect(window.alert).toHaveBeenCalledWith("Seleziona un file prima di allegare");
    });

    it('should call document service to upload file', () => {
      const file = new File([''], 'file.txt', { type: 'text/plain' });
      component.fileAspetto = file;
      mockDocumentiService.allegaFileAspetto.and.returnValue(of({}));
      component.allegaFileAspetto();
      expect(mockDocumentiService.allegaFileAspetto).toHaveBeenCalled();
    });
  });
});