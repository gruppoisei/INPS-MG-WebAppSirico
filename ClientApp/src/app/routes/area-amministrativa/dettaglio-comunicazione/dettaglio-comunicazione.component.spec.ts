import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { DettaglioComunicazioneComponent } from './dettaglio-comunicazione.component';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { BreadcrumbComponent } from '@shared/components/breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from '@shared/components/page-header/page-header.component';
import { ComunicazioniService } from '@shared/services/comunicazioni.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Comunicazioni } from '@shared/models/comunicazioni.model';
import { ComunicazioneLetta } from '@shared/models/comunicazione-letta.model';
import { StorageService } from '@shared/services/storage.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

describe('DettaglioComunicazioneComponent', () => {
  let component: DettaglioComunicazioneComponent;
  let fixture: ComponentFixture<DettaglioComunicazioneComponent>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<DettaglioComunicazioneComponent>>;
  let mockComunicazioniSrv: jasmine.SpyObj<ComunicazioniService>;
  let mockStorageService: jasmine.SpyObj<StorageService>;

  beforeEach(async () => {

    mockComunicazioniSrv = jasmine.createSpyObj('ComunicazioniService', ['newGetComunicazioneById', 'getTipoComunicazioneById', 'newSaveComunicazioneLettaChecked']);
    mockStorageService = jasmine.createSpyObj('StorageService', ['getItem']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    const mockComunicazione = new Comunicazioni();
    mockComunicazione.id = 1;
    mockComunicazione.oggetto = 'Test Oggetto';
    mockComunicazione.messaggio = 'Test Messaggio';
    mockComunicazione.dataInizio = '2024-01-01';
    mockComunicazione.dataFine = '2024-12-31';
    mockComunicazione.idTipoComunicazione = 1;

    const mockComunicazioneLetta = new ComunicazioneLetta();
    mockComunicazioneLetta.id = 1;
    mockComunicazioneLetta.aggiornato = new Date();
    mockComunicazioneLetta.creato = new Date();
    mockComunicazioneLetta.idComunicazione = 1;
    mockComunicazioneLetta.matricola = 'M123456';

    mockComunicazioniSrv.newGetComunicazioneById.and.returnValue(of(mockComunicazione));
    mockComunicazioniSrv.getTipoComunicazioneById.and.returnValue(of({ id: 1, creato: new Date(), aggiornato: new Date(), nome: 'Type1' },));
    mockComunicazioniSrv.newSaveComunicazioneLettaChecked.and.returnValue(of(mockComunicazioneLetta));

    mockStorageService.getItem.and.callFake((key: string) => {
      if (key === 'matricola') {
        return 'M123456';
      } else if (key === 'allroles') {
        return JSON.stringify(["P12690","P12689"]);
      }
      return null;
    });


    spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
      if (key === 'username') {
          return JSON.stringify('gbellonio');
      }
      return null;
    });

    await TestBed.configureTestingModule({
      declarations: [ DettaglioComunicazioneComponent, PageHeaderComponent, BreadcrumbComponent ],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef},
        { provide: MAT_DIALOG_DATA, useValue: { tipoDettaglio: 0, id: 1 } },
        { provide: ComunicazioniService, useValue: mockComunicazioniSrv},
        { provide: StorageService, useValue: mockStorageService}
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        MatCheckboxModule,
        MatIconModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioComunicazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component DettaglioComunicazioneComponent', () => {
    it('should create Component', () => {
      expect(component).toBeTruthy();
    });
  })

  describe('ngOnInit', () => {
    it('should initialize properties and call getComunicazione', () => {
      spyOn(component, 'getComunicazione')
      component.ngOnInit();

      expect(component.tipoDettaglio).toBe(0);
      expect(component.idComunicazione).toBe(1); // Verifica l'id dal MAT_DIALOG_DATA
      expect(component.matricola).toBe('M123456'); // Verifica matricola dal mock di StorageService
      expect(component.role).toBe('["P12690","P12689"]'); // Verifica roles dal mock di StorageService
      expect(component.getComunicazione).toHaveBeenCalled(); // Verifica che getComunicazione sia stato chiamato
    });
  });

  describe('salvaComunicazioneLetta', () => {
    it('should call newSaveComunicazioneLettaChecked and close dialog when checked is true', () => {

      component.checked = true;
      component.idComunicazione = 1;
      component.matricola = 'M123456';

      component.salvaComunicazioneLetta();

      expect(mockComunicazioniSrv.newSaveComunicazioneLettaChecked).toHaveBeenCalledWith(jasmine.objectContaining({
        idComunicazione: 1,
        matricola: 'M123456'
      }));

      expect(mockDialogRef.close).toHaveBeenCalled();
    });

    it('should not call newSaveComunicazioneLettaChecked when checked is false', () => {

      component.checked = false;
      component.salvaComunicazioneLetta();

      expect(mockComunicazioniSrv.newSaveComunicazioneLettaChecked).not.toHaveBeenCalled();
      expect(mockDialogRef.close).not.toHaveBeenCalled(); // Verifica che il metodo close non sia chiamato
    });
  });


});
