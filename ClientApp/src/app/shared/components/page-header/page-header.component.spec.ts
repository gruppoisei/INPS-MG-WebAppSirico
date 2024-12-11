// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { PageHeaderComponent } from './page-header.component';
// import { MenuService } from '@core/bootstrap/menu.service';
// import { InfoUtentiService } from '@shared/services/info-utenti.service';
// import { Router } from '@angular/router';
// import { CUSTOM_ELEMENTS_SCHEMA, Pipe, PipeTransform } from '@angular/core';
// import { of } from 'rxjs';
// import { MatIconModule } from '@angular/material/icon';
// import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

// @Pipe({ name: 'translate' })
// class MockTranslatePipe implements PipeTransform {
//   transform(value: string): string {
//     return value; 
//   }
// }

// describe('PageHeaderComponent', () => {
//   let component: PageHeaderComponent;
//   let fixture: ComponentFixture<PageHeaderComponent>;
//   let menuServiceMock: any;
//   let infoUtentiServiceMock: any;
//   let routerMock: any;

//   beforeEach(async () => {
//     menuServiceMock = {
//       getLevel: jasmine.createSpy('getLevel').and.returnValue(['Dashboard']),
//     };

//     infoUtentiServiceMock = {
//       getInfoUtenteByUsername: jasmine.createSpy('getInfoUtenteByUsername').and.returnValue(
//         of({
//           firstName: 'Mario',
//           lastName: 'Rossi',
//           matricula: '12345',
//         })
//       ),
//     };

//     routerMock = {
//       url: '/dashboard/home',
//     };

//     await TestBed.configureTestingModule({
//       declarations: [ PageHeaderComponent, MockTranslatePipe, BreadcrumbComponent ], 
//       imports: [ MatIconModule ],
//       providers: [
//         { provide: MenuService, useValue: menuServiceMock },
//         { provide: InfoUtentiService, useValue: infoUtentiServiceMock },
//         { provide: Router, useValue: routerMock },
//       ],
//     }).compileComponents();

//     fixture = TestBed.createComponent(PageHeaderComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should initialize user data and breadcrumb on ngOnInit', () => {
//     sessionStorage.setItem('username', '"testUser"');
//     sessionStorage.setItem('roleDesc', JSON.stringify(['Amministratore']));

//     component.ngOnInit();

//     expect(infoUtentiServiceMock.getInfoUtenteByUsername).toHaveBeenCalledWith('testUser');
//     expect(component.nomeUtente).toBe('Mario');
//     expect(component.cognomeUtente).toBe('Rossi');
//     expect(component.matricolaUtente).toBe('12345');
//     expect(component.roleDesc).toBe('Amministratore');
//     expect(component.nav).toEqual(['Home', 'Dashboard']);
//   });

//   it('should return correct role descriptions', () => {
//     expect(component.showFieldRole('Amministratore')).toBe('Amministratore');
//     expect(component.showFieldRole('Operatore Centrale Amministrativo')).toBe(
//       'Operatore Centrale<br>Amministrativo'
//     );
//     expect(component.showFieldRole('Operatore Centrale Informatico')).toBe(
//       'Operatore Centrale<br>Informatico'
//     );
//     expect(component.showFieldRole('Operatore Territoriale di Provincia')).toBe(
//       'Operatore Territoriale<br>di Provincia'
//     );
//     expect(component.showFieldRole('Operatore Territoriale Regionale')).toBe(
//       'Operatore Territoriale<br>Regionale'
//     );
//     expect(component.showFieldRole('Unknown Role')).toBeNull();
//   });

//   it('should update _hideBreadCrumb when hideBreadcrumb is set', () => {
//     component.hideBreadcrumb = true;
//     expect(component.hideBreadcrumb).toBeTrue();

//     component.hideBreadcrumb = false;
//     expect(component.hideBreadcrumb).toBeFalse();
//   });

//   it('should set title and nav correctly', () => {
//     component.nav = ['Home', 'Dashboard', 'Settings'];
//     component.title = 'Settings';
//     component.ngOnInit();

//     expect(component.title).toBe('Settings');
//     expect(component.nav).toEqual(['Home', 'Dashboard', 'Settings']);
//   });

//   it('should fallback to last nav item as title if title is not provided', () => {
//     component.nav = ['Home', 'Dashboard', 'Settings'];
//     component.title = '';
//     component.ngOnInit();

//     expect(component.title).toBe('Settings');
//   });
// });