  import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
  import { AppComponent } from './app.component';
  import { MatDialog, MatDialogConfig, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
  import { PreloaderService } from '@core';
  import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
  import { RilevazioneService } from '@shared/services/rilevazione.service';
  import { StorageService } from '@shared';
  import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
  import { of, Subject, throwError } from 'rxjs'; 
  import { NavigationStart, Router, RouterModule, Routes } from '@angular/router';
  import { RouterTestingModule } from '@angular/router/testing';
  import { HttpClientTestingModule } from '@angular/common/http/testing';
  import { MatInputModule } from '@angular/material/input';
  import { MatFormFieldModule } from '@angular/material/form-field';
  import { MatIconModule } from '@angular/material/icon';
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  import { PopupErroreInserimentoComponent } from './routes/popup-errore-inserimento/popup-errore-inserimento.component';
  import { PopupComunicazioniComponent } from './routes/popup-comunicazioni/popup-comunicazioni.component';
import { environment } from '@env/environment';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { IdmUser } from '@shared/interfaces/Idm-user';

  describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    
    let dialog: jasmine.SpyObj<MatDialog>;
    let router: jasmine.SpyObj<any>
    let dialogRef: jasmine.SpyObj<MatDialogRef<PopupComunicazioniComponent>>;

    let storageService: jasmine.SpyObj<StorageService>;
    let ruoloComunicazioneService: jasmine.SpyObj<RuoloComunicazioneService>;
    let infoUtentiService: jasmine.SpyObj<InfoUtentiService>;

    let preloaderServiceMock: jasmine.SpyObj<PreloaderService>;

    let routerEventsSubject: Subject<any>;

    beforeEach(async () => {
      dialog = jasmine.createSpyObj('MatDialog', ['open']);
      router = jasmine.createSpyObj('Router', ['navigate']);
      dialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
      // storageService = jasmine.createSpyObj('StorageService', ['getItem']);
      storageService = jasmine.createSpyObj('StorageService', ['getItem', 'setItem']);

      ruoloComunicazioneService = jasmine.createSpyObj('RuoloComunicazioneService', [
        'newGetComunicazioniFilterByRuoloAndMatricola'
      ]);
      infoUtentiService = jasmine.createSpyObj('InfoUtentiService', [
        'WhoAmI',
        'fetchSedeDescriptions'
      ]);
      
      // MOCK: storageService
      storageService.getItem.and.callFake((key: string) => {
        if (key === 'matricola') {
          return 'testMatricola';
        } else if (key === 'allroles') {
          return 'testRole';
        } else if (key == 'isLogged') {
          return 'true';
        }
        return null;
      });

      routerEventsSubject = new Subject(); // Inizializza il Subject

      // Mocka router.events per restituire il Subject
      Object.defineProperty(router, 'events', {
        get: () => routerEventsSubject.asObservable()
      });


      // Configuriamo il comportamento di afterClosed per emettere un valore null quando il dialogo si chiude
      dialogRef.afterClosed.and.returnValue(of(null));
      dialog.open.and.returnValue(dialogRef);

      // MOCK preloaderService
      preloaderServiceMock = jasmine.createSpyObj('PreloaderService', ['getElement', 'hide']);
      // Se la funzione getElement è utilizzata nel codice, simula una risposta.
      preloaderServiceMock.getElement.and.returnValue(document.getElementById('globalLoader'));
      // Spy su hide
      preloaderServiceMock.hide.and.callThrough();

      
      await TestBed.configureTestingModule({
        declarations: [ AppComponent ],
        imports: [
          RouterTestingModule,
          HttpClientTestingModule,
          MatDialogModule,
          ReactiveFormsModule,
          MatIconModule,
          MatFormFieldModule,
          MatInputModule,
          BrowserAnimationsModule
        ],
        providers: [
          FormBuilder,
          { provide: RuoloComunicazioneService, useValue: ruoloComunicazioneService },
          { provide: MatDialog, useValue: dialog },
          { provide: StorageService, useValue: storageService},
          { provide: PreloaderService, useValue: preloaderServiceMock },
          { provide: Router, useValue: router },
        ],
      }).compileComponents();

      dialogRef.afterClosed.and.returnValue(of());

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    const mockComunicazioni = [
      {
        id: 1,
        creato: new Date('2024-12-01T10:00:00Z'),
        aggiornato: new Date('2024-12-02T10:00:00Z'),
        idComunicazione: 101,
        ruolo: 'Admin'
      },
      {
        id: 2,
        creato: new Date('2024-12-01T11:00:00Z'),
        aggiornato: new Date('2024-12-02T11:00:00Z'),
        idComunicazione: 102,
        ruolo: 'User'
      }
    ];
    const mockComunicazioniJSON = JSON.stringify(mockComunicazioni);

    const userResponse: IdmUser = {
      emailAddress: 'user@example.com',
      firstName: 'DefaultNome',
      fiscalCode: 'DefaultFiscalCode',
      lastName: 'DefaultCognome',
      matricula: 'E000-123',
      officeCode: '001',
      codiceSede: ['050000', '500000', '040000'],
      sedeAppartenenza: 'Sede Centrale',
      descrizioneSede: 'Descrizione Sede Centrale',
      appRoles: [
        'P12689 : Amministratore',
        'P12801 : Operatore Territoriale di Provincia',
        'P12799 : Operatore Territoriale Regionale',
        'P13000 : Utente'
      ],
      indirizzoIp: '192.168.1.1',
      officeSapCode: 'SAP12345',
      windowsAccount: 'Username'
    };

    const sedeDescriptions = [
      '050000 : P12801, role: Amministratore',
      '500000 : P12801, role: Operatore Territoriale di Provincia',
      '040000 : P12801, role: Operatore Territoriale Regionale'
    ];




    it('should create', () => {
      expect(component).toBeTruthy();
    });







    describe('ngOnInit', () => {
      it('should set tipoLogin to environment.loginIDM', () => {
        expect(component.tipoLogin).toBe(environment.loginIDM);
      });
    
      it('should call getAccountIdmLoggato if not logged in', () => {
        storageService.getItem.and.returnValue('false');
        spyOn(component, 'getAccountIdmLoggato');
    
        component.ngOnInit();
    
        expect(component.getAccountIdmLoggato).toHaveBeenCalled();
      });
    
      it('should call getComunicazioni if logged in', fakeAsync(() => {
        spyOn(component, 'getComunicazioni');
      
        // Mock del sessionStorage
        spyOn(sessionStorage, 'getItem').and.callFake((key: string) => {
          if (key === 'isLogged') {
            return 'true'; // Simula l'utente loggato
          }
          return null;
        });
      
        component.ngOnInit();
      
        // Avanziamo nel tempo per simulare l'esecuzione del setTimeout
        tick(0);
      
        expect(component.getComunicazioni).toHaveBeenCalled();
      }));
    
      it('should not call getComunicazioni if not logged in', fakeAsync(() => {
        spyOn(component, 'getComunicazioni');
        
        storageService.getItem.and.returnValue('false');
    
        component.ngOnInit();
        tick();
        flush();
    
        expect(component.getComunicazioni).not.toHaveBeenCalled();
      }));
    });

    describe('ngAfterViewInit', () => {
      it('should call preloader.hide() after view initialization', fakeAsync(() => {
        // Aggiungi l'elemento al DOM
        const loaderElement = document.createElement('div');
        loaderElement.id = 'globalLoader';
        document.body.appendChild(loaderElement);
    
        // Mocka getElement per restituire l'elemento appena aggiunto
        preloaderServiceMock.getElement.and.returnValue(loaderElement);
    
        // Mocka il comportamento di hide per modificare immediatamente la classe
        preloaderServiceMock.hide.and.callFake(() => {
          loaderElement.className = 'global-loader-hidden';  // Cambia la classe immediatamente
        });
    
        component.ngAfterViewInit();

        fixture.detectChanges();
        flush();
        
        expect(preloaderServiceMock.hide).toHaveBeenCalled();
        // Verifica che la classe venga cambiata
        expect(loaderElement.classList.contains('global-loader-hidden')).toBeTrue();
      }));
    });

    describe('getAccountIdmLoggato', () => {
      it('should return error message if appRoles is null'), () => {
        spyOn(component,'showErrorMessage');
        infoUtentiService.WhoAmI.and.returnValue(of());

        component.getAccountIdmLoggato();

        expect(component.showErrorMessage).toHaveBeenCalledWith("L'username inserito non ha ruoli associati.");
      }

      it('should fetch user data, parse roles and sede descriptions, and redirect to dashboard', fakeAsync(() => {
        // Mock dei servizi
        infoUtentiService.WhoAmI.and.returnValue(of(userResponse));
        // infoUtentiService.fetchSedeDescriptions.and.returnValue(of(sedeDescriptions));
    
        // Mock dello storageService per il setItem
        // storageService.setItem.and.callThrough();
    
        // Eseguiamo la chiamata al metodo
        component.getAccountIdmLoggato();
        // tick(); // Avanzare il timer per gestire la chiamata asincrona
    
        // // Verifica che i dati siano stati salvati nello storage
        // expect(storageService.setItem).toHaveBeenCalledWith('username', 'Username');
        // expect(storageService.setItem).toHaveBeenCalledWith('matricola', 'E000-123');
        // expect(storageService.setItem).toHaveBeenCalledWith('allroles', 'P12689; P12801; P12799; P13000');
        // expect(storageService.setItem).toHaveBeenCalledWith('roleDesc', [
        //   'Amministratore',
        //   'Operatore Territoriale di Provincia',
        //   'Operatore Territoriale Regionale',
        //   'Utente'
        // ]);
        // expect(storageService.setItem).toHaveBeenCalledWith('isLogged', true);
    
        // // Verifica che la listaSedi sia correttamente formattata
        // expect(storageService.setItem).toHaveBeenCalledWith('listaSedi', [
        //   { sedeCode: '050000', descSede: 'P12801', role: 'Amministratore' },
        //   { sedeCode: '500000', descSede: 'P12801', role: 'Operatore Territoriale di Provincia' },
        //   { sedeCode: '040000', descSede: 'P12801', role: 'Operatore Territoriale Regionale' }
        // ]);
    
        // // Verifica che il router abbia effettuato il reindirizzamento
        // expect(window.location.href).toBe('/dashboard');
      }));
    });
    
      
  
    // il metodo verrà rimosso in ambiente inps, test omesso
    // describe('getAccountLoggato', () => {
    // });

    describe('getComunicazioni', () => {
      it('should open the popup if comunicazioni are returned', () => {
        const mockComunicazioni = JSON.parse(mockComunicazioniJSON);
        
        ruoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola.and.returnValue(of(mockComunicazioni));
      
        component.getComunicazioni();
      
        expect(ruoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola).toHaveBeenCalledWith('testRole', 'testMatricola');
        expect(dialog.open).toHaveBeenCalledWith(PopupComunicazioniComponent, jasmine.objectContaining({
          autoFocus: true,
          width: '600px',
          height: 'auto',
          disableClose: true,
        }));
      });
      
      it('should not open popup if no comunicazioni are returned', () => {
        ruoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola.and.returnValue(of([]));
    
        storageService.getItem.and.returnValue('testMatricola');
    
        // Chiamata al metodo getComunicazioni
        component.getComunicazioni();
    
        // Avanzamento nel tempo per far completare l'operazione asincrona
    
        expect(dialog.open).not.toHaveBeenCalled();
      });
    
      it('should not call newGetComunicazioniFilterByRuoloAndMatricola if role or matricola is missing', () => {
        storageService.getItem.and.returnValue(null);
    
        component.getComunicazioni();
    
        expect(ruoloComunicazioneService.newGetComunicazioniFilterByRuoloAndMatricola).not.toHaveBeenCalled();
      });
    });

    describe('apriPopupComunicazioni', () => {
      it('should open the PopupComunicazioni dialog and handle afterClosed', () => {
        component.apriPopupComunicazioni();
    
        const expectedDialogConfig: MatDialogConfig = {
          autoFocus: true,
          width: '600px',
          height: 'auto',
          disableClose: true,
        };
    
        // Verifica che dialog.open sia stato chiamato con il componente giusto 
        // e una configurazione che contiene le proprietà rilevanti
        expect(dialog.open).toHaveBeenCalledWith(
          PopupComunicazioniComponent,
          jasmine.objectContaining(expectedDialogConfig) // Usa objectContaining per ignorare altre proprietà non rilevanti
        );
    
        dialogRef.afterClosed.and.returnValue(of(null));
    
        expect(dialogRef.afterClosed).toHaveBeenCalled();
      });
    });

    describe('openErrorDialog', () => {
      it('should call dialog.open with the correct parameters when openErrorDialog is called', () => {
        const message = 'Test message';
        const titolo = 'Test title';
    
        component.openErrorDialog(titolo, message);
    
        expect(dialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
          data: { titolo: titolo, message: message }
        });
      });
    });

    describe('showErrorMessage', () => {
      it('should call opeenErrorDialog and navigate', () => {
        spyOn(component,'openErrorDialog');
        const testMessage = 'Test message';
        
        component.showErrorMessage(testMessage);

        expect(router.navigate).toHaveBeenCalledWith(['/']);
        expect(component.openErrorDialog).toHaveBeenCalledWith('Errore:',testMessage);
      });
    });
  });