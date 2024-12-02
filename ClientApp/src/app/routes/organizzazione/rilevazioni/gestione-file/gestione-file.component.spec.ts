import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { GestioneFileComponent } from './gestione-file.component';
import { MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DocumentiService } from '@shared/services/documenti.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ElementRef, EventEmitter } from '@angular/core';
import { of, throwError } from 'rxjs';
import { ErroreAllegatoDialogComponent } from 'app/routes/errore-allegato-dialog/errore-allegato-dialog.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('GestioneFileComponent', () => {
  let component: GestioneFileComponent;
  let fixture: ComponentFixture<GestioneFileComponent>;
  let documentiService: jasmine.SpyObj<DocumentiService>;
  let matDialog: jasmine.SpyObj<MatDialog>;

  const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    documentiService = jasmine.createSpyObj('DocumentiService', ['verificaAllegato']);
    matDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      declarations: [GestioneFileComponent],
      imports: [MatDialogModule, MatSnackBarModule],
      providers: [
        { provide: DocumentiService, useValue: documentiService },
        { provide: MatDialog, useValue: matDialog },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GestioneFileComponent);
    component = fixture.componentInstance;

    // Inizializza EventEmitter per evitare errori undefined
    component.fileEvent = new EventEmitter();
    component.fileEvents = new EventEmitter();
    component.fileRemovedEvent = new EventEmitter();
    component.fileRemovedEvents = new EventEmitter();

    // Mock per fileUploader come ElementRef
    component.fileUploader = {
      nativeElement: {
        value: '',
      }
    } as ElementRef;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit fileEvent when idAspetto is 0 in sendFile', () => {
    const fileEventSpy = spyOn(component.fileEvent, 'emit');
    component.selectedFile = new File(['test'], 'test.txt');
    component.idAspetto = 0;

    component.sendFile();

    expect(fileEventSpy).toHaveBeenCalledWith(component.selectedFile);
  });

  it('should emit fileEvents with idAspetto when idAspetto is not 0 in sendFile', () => {
    const fileEventsSpy = spyOn(component.fileEvents, 'emit');
    component.selectedFile = new File(['test'], 'test.txt');
    component.idAspetto = 1;

    component.sendFile();

    expect(fileEventsSpy).toHaveBeenCalledWith({ file: component.selectedFile, idAspetto: component.idAspetto });
  });

  it('should open error dialog on addFile error', () => {
    component.selectedFile = new File(['test'], 'test.txt');
    documentiService.verificaAllegato.and.returnValue(throwError({ error: { message: 'Errore di allegato' } }));

    component.addFile();

    expect(matDialog.open).toHaveBeenCalledWith(ErroreAllegatoDialogComponent, jasmine.objectContaining({
      data: { errorMessage: 'Errore di allegato' }
    }));
    expect(component.fileUploader.nativeElement.value).toBe('');
    expect(component.selectedFile).toBeNull();
  });

  it('should call verificaAllegato and sendFile on valid file in addFile', () => {
    const sendFileSpy = spyOn(component, 'sendFile');
    component.selectedFile = new File(['test'], 'test.txt');
    documentiService.verificaAllegato.and.returnValue(of({ valido: true }));

    component.addFile();

    expect(documentiService.verificaAllegato).toHaveBeenCalledWith(component.selectedFile);
    expect(sendFileSpy).toHaveBeenCalled();
  });

  it('should display alert if no file is selected in addFile', () => {
    spyOn(window, 'alert');
    component.selectedFile = null;

    component.addFile();

    expect(window.alert).toHaveBeenCalledWith('Nessun file selezionato!');
  });

  it('should select file and call addFile on onFileSelected', () => {
    const addFileSpy = spyOn(component, 'addFile');
    const event = { target: { files: [new File(['test'], 'test.txt')] } };

    component.onFileSelected(event);

    expect(component.selectedFile).toEqual(event.target.files[0]);
    expect(addFileSpy).toHaveBeenCalled();
  });

  it('should emit fileRemovedEvent when idAspetto is 0 in removeFile', () => {
    const fileRemovedEventSpy = spyOn(component.fileRemovedEvent, 'emit');
    component.selectedFile = new File(['test'], 'test.txt');
    component.idAspetto = 0;

    component.removeFile();

    expect(component.selectedFile).toBeNull(); // Controlliamo che selectedFile sia null
    expect(fileRemovedEventSpy).toHaveBeenCalledWith(new File(['test'], 'test.txt')); // Verifichiamo che venga emesso il file
  });

  it('should emit fileRemovedEvents with idAspetto when idAspetto is not 0 in removeFile', () => {
    const fileRemovedEventsSpy = spyOn(component.fileRemovedEvents, 'emit');
    component.selectedFile = new File(['test'], 'test.txt');
    component.idAspetto = 1;

    component.removeFile();

    expect(component.selectedFile).toBeNull(); // Controlliamo che selectedFile sia null
    expect(fileRemovedEventsSpy).toHaveBeenCalledWith({
      file: new File(['test'], 'test.txt'),
      idAspetto: 1
    }); // Verifichiamo che venga emesso l'oggetto con file e idAspetto
  });
});
