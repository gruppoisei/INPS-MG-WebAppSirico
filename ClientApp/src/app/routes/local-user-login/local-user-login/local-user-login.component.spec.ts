// import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
// import { LocalUserLoginComponent } from './local-user-login.component';
// import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
// import { MatDialog, MatDialogModule } from '@angular/material/dialog';
// import { Router } from '@angular/router';
// import { of, throwError } from 'rxjs';
// import { StorageService } from '@shared';
// import { InfoUtentiService } from '@shared/services/info-utenti.service';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { PopupErroreInserimentoComponent } from 'app/routes/popup-errore-inserimento/popup-errore-inserimento.component';
// import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// describe('LocalUserLoginComponent', () => {
//   let component: LocalUserLoginComponent;
//   let fixture: ComponentFixture<LocalUserLoginComponent>;
//   let infoUtentiService: jasmine.SpyObj<InfoUtentiService>;
//   let storageService: jasmine.SpyObj<StorageService>;
//   let mockDialog: jasmine.SpyObj<MatDialog>;
//   let mockRouter: jasmine.SpyObj<Router>;

//   beforeEach(async () => {
//     infoUtentiService = jasmine.createSpyObj('InfoUtentiService', [
//       'newInfoUtente',
//       'getStringaIDMConUsername',
//       'checkDatiLocaleIDM',
//       'getInfoUtenteByUsername',
//     ]);
//     storageService = jasmine.createSpyObj('StorageService', ['setItem', 'remove']);
//     mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
//     mockRouter = jasmine.createSpyObj('Router', ['navigate']);

//     // Mock del metodo `navigate` del router per evitare reindirizzamenti
//     mockRouter.navigate.and.stub();

//     await TestBed.configureTestingModule({
//       declarations: [LocalUserLoginComponent],
//       imports: [ReactiveFormsModule, MatDialogModule],
//       providers: [
//         FormBuilder,
//         { provide: InfoUtentiService, useValue: infoUtentiService },
//         { provide: StorageService, useValue: storageService },
//         { provide: MatDialog, useValue: mockDialog },
//         { provide: Router, useValue: mockRouter }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA]
//     }).compileComponents();

//     fixture = TestBed.createComponent(LocalUserLoginComponent);
//     component = fixture.componentInstance;
//   });

//   it('should create the component', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should handle role change and set authorized sede codes', () => {
//     component.listaSedi = [
//       { sedeCode: '001', descSede: 'Sede A', role: 'P123' },
//       { sedeCode: '002', descSede: 'Sede B', role: 'P456' }
//     ];
//     component.form1.addControl('inpsSedi', new FormBuilder().control([]));

//     component.onRoleChange('P123');
//     expect(component.form1.get('inpsSedi')?.value).toEqual(['001']);
//   });

//   it('should clear sede codes if no authorized sedi for role', () => {
//     component.listaSedi = [{ sedeCode: '001', descSede: 'Sede A', role: 'P456' }];
//     component.form1.addControl('inpsSedi', new FormBuilder().control([]));

//     component.onRoleChange('P123');
//     expect(component.form1.get('inpsSedi')?.value).toEqual([]);
//   });

//   it('should call getAccountIdmLoggato on form submit', () => {
//     spyOn(component, 'getAccountIdmLoggato');
//     component.onSubmit();
//     expect(component.getAccountIdmLoggato).toHaveBeenCalled();
//   });

//   it('should open error dialog with correct message on showErrorMessage', () => {
//     spyOn(component, 'openErrorDialog');
//     component.showErrorMessage('Test Error Message');
//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/local-login']);
//     expect(component.openErrorDialog).toHaveBeenCalledWith('Errore:', 'Test Error Message');
//   });

//   it('should open error dialog with provided title and message', () => {
//     component.openErrorDialog('Test Title', 'Test Message');
//     expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
//       data: { titolo: 'Test Title', message: 'Test Message' },
//     });
//   });

//   it('should handle error in getAccountIdmLoggato and call showErrorMessage', () => {
//     const error = { error: { message: 'Generic Error' } };
//     infoUtentiService.newInfoUtente.and.returnValue(throwError(error));
//     spyOn(component, 'showErrorMessage');

//     component.getAccountIdmLoggato();

//     expect(component.showErrorMessage).toHaveBeenCalledWith('Generic Error');
//   });

//   it('should call openErrorDialog if checkDatiLocaleIDM returns false in getAccountLoggato', () => {
//     const mockUser = { stringaIDM: 'stringIDM', usernameIdm: 'username' };
//     infoUtentiService.getStringaIDMConUsername.and.returnValue(of(mockUser));
//     infoUtentiService.checkDatiLocaleIDM.and.returnValue(of({ esito: false }));

//     component.getAccountLoggato();

//     expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
//       data: { titolo: 'Errore:', message: 'I dati forniti da IDM non corrispondono ai dati della tabella Utente.' },
//     });
//   });

//   it('should navigate to /local-login and open error dialog on showErrorMessage', () => {
//     spyOn(component, 'openErrorDialog');

//     component.showErrorMessage('Test Error Message');

//     expect(mockRouter.navigate).toHaveBeenCalledWith(['/local-login']);
//     expect(component.openErrorDialog).toHaveBeenCalledWith('Errore:', 'Test Error Message');
//   });

//   it('should open error dialog with provided title and message', () => {
//     component.openErrorDialog('Test Title', 'Test Message');
//     expect(mockDialog.open).toHaveBeenCalledWith(PopupErroreInserimentoComponent, {
//       data: { titolo: 'Test Title', message: 'Test Message' },
//     });
//   });
// });


