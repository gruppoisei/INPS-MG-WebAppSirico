import { ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { ModellazioneNuovaComponent } from './modellazione-nuova.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { of, throwError } from 'rxjs';
import { Aree } from '@shared/services/areeservice.service';
import { SottoareeService } from '@shared/services/sottoaree.service';
import { ProdottiService } from '@shared/services/prodotti.service';
import { TipologieLavoratoriService } from '@shared/services/tipologie-lavoratori.service';
import { ProdottiTipologieLavoratoriService } from '@shared/services/prodotti-tipologie-lavoratori.service';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { AreeProdotti } from '@shared/models/areeprodotti';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Sottoarea } from '@shared/models/sottoarea.model';

describe('ModellazioneNuovaComponent', () => {
  let component: ModellazioneNuovaComponent;
  let fixture: ComponentFixture<ModellazioneNuovaComponent>;

  let areeService: jasmine.SpyObj<Aree>;
  let sottoareeService: jasmine.SpyObj<SottoareeService>;
  let prodottiService: jasmine.SpyObj<ProdottiService>;
  let tipologieLavoratoriService: jasmine.SpyObj<TipologieLavoratoriService>;
  let prodottiTipologieLavoratoriService: jasmine.SpyObj<ProdottiTipologieLavoratoriService>;
  let settoreMateriaService: jasmine.SpyObj<SettoreMateriaService>;

  const matDialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

  beforeEach(async () => {
    areeService = jasmine.createSpyObj('Aree', ['getAreeConSottoaree', 'newSalvaAreeProdotti']);
    sottoareeService = jasmine.createSpyObj('SottoareeService', ['getSottoAreeAll']);
    prodottiService = jasmine.createSpyObj('ProdottiService', ['inserisciProdotto']);
    tipologieLavoratoriService = jasmine.createSpyObj('TipologieLavoratoriService', ['getTipologieLavoratoriAll','inserisciTipologiaLavoratore']);
    prodottiTipologieLavoratoriService = jasmine.createSpyObj('ProdottiTipologieLavoratoriService', ['inserisciProdottoTipologiaLavoratore']);
    settoreMateriaService = jasmine.createSpyObj('SettoreMateriaService', ['getAllSettoriMaterie', 'insertSettoreMateria']);

    await TestBed.configureTestingModule({
      declarations: [ModellazioneNuovaComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatSelectModule,
        NoopAnimationsModule
      ],
      providers: [
        FormBuilder,
        { provide: Aree, useValue: areeService },
        { provide: SottoareeService, useValue: sottoareeService },
        { provide: ProdottiService, useValue: prodottiService },
        { provide: TipologieLavoratoriService, useValue: tipologieLavoratoriService },
        { provide: ProdottiTipologieLavoratoriService, useValue: prodottiTipologieLavoratoriService },
        { provide: SettoreMateriaService, useValue: settoreMateriaService },
        { provide: MatDialogRef, useValue: matDialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: 1 } 
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ModellazioneNuovaComponent);
    component = fixture.componentInstance;

    settoreMateriaService.getAllSettoriMaterie.and.returnValue(of([]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize data on ngOnInit', () => {
    component.ngOnInit();
    expect(component.formAttivo).toBe(1); 
    expect(settoreMateriaService.getAllSettoriMaterie).toHaveBeenCalled(); 
  });

  it('should handle error in popolaSettori', () => {
    settoreMateriaService.getAllSettoriMaterie.and.returnValue(throwError('Error'));
    component.popolaSettori();
    expect(component.listaSettori).toEqual([]);
  }); 

  it('should handle paste event with max length in onPaste', () => {
    const snackBarSpy = spyOn(component['snackBar'], 'open'); // Spy su MatSnackBar
    const clipboardEvent = {
      clipboardData: { getData: () => 'test' },
      preventDefault: jasmine.createSpy(),
      target: { value: '12345', selectionStart: 5, selectionEnd: 5 } as any
    } as unknown as ClipboardEvent;

    component.onPaste(clipboardEvent, 5);
    expect(snackBarSpy).toHaveBeenCalledWith('Non puoi inserire più di 5 caratteri', 'Chiudi', { duration: 3000 });
  });

  it('should close dialog on successful area save', () => {
    areeService.newSalvaAreeProdotti.and.returnValue(of({ nome: 'Test Area', idSettore: 1 } as AreeProdotti));
    component.newSalvaAreeProdotto();
    expect(areeService.newSalvaAreeProdotti).toHaveBeenCalled();
    expect(matDialogRefSpy.close).toHaveBeenCalled();
  });

  it('should handle error on area save', () => {
    areeService.newSalvaAreeProdotti.and.returnValue(throwError({ error: { message: 'Error saving area' } }));
    component.newSalvaAreeProdotto();
    expect(component.errorMessage).toBe('Error saving area');
  });


  it('should update idSelezionati when onTipLavSelectionChanged is called', () => {
    const selectedIds = [1, 2, 3];
    component.onTipLavSelectionChanged(selectedIds);
  
    expect(component.idSelezionati).toEqual(selectedIds);
  });

  it('should handle invalid form in salvaSettore', () => {
    component.form5.setValue({
      inputSettore: '',
    });
  
    component.salvaSettore();
  
    expect(settoreMateriaService.insertSettoreMateria).not.toHaveBeenCalled();
  });
});
