import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { AlertSegnalazioniTabComponent } from './alert-segnalazioni-tab.component';
import { NotificheService } from '@shared/services/notifiche.service';
import { Router } from '@angular/router';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { of, Subject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('AlertSegnalazioniTabComponent', () => {
  let component: AlertSegnalazioniTabComponent;
  let fixture: ComponentFixture<AlertSegnalazioniTabComponent>;
  let mockNotificheService: jasmine.SpyObj<NotificheService>;

  const count30DaysSubject = new Subject<number>();
  const count30To45DaysSubject = new Subject<number>();
  const count45To60DaysSubject = new Subject<number>();

  beforeEach(async () => {

    mockNotificheService = jasmine.createSpyObj('NotificheService', [], {
      count30Days$: of(10),
      count30To45Days$: of(5),
      count45To60Days$: of(3)
    });

    await TestBed.configureTestingModule({
      declarations: [ AlertSegnalazioniTabComponent, PageHeaderComponent, BreadcrumbComponent ],
      providers: [
        { provide: NotificheService, useValue: mockNotificheService }
      ],
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatIconModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSegnalazioniTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component AlertSegnalazioniTab', () => {
    it('should create Component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('ngOnInit', () => {
    it('should update count properties when NotificheService observables emit values', () => {
      // Emissione dei valori sui soggetti simulati
      count30DaysSubject.next(10);
      count30To45DaysSubject.next(5);
      count45To60DaysSubject.next(3);

      expect(component.count30Days).toBe(10);
      expect(component.countFrom30To45Days).toBe(5);
      expect(component.countFrom45To60Days).toBe(3);
    });
  });

  describe('navigateWithDates', () => {
    it('should navigate with correct queryParams when called', () => {
      const router = TestBed.inject(Router);
      const navigateSpy = spyOn(router, 'navigate');

      component.navigateWithDates(30,45);

      const expectedEndDate = new Date();
      expectedEndDate.setDate(new Date().getDate() - 30);
      const expectedStartDate = new Date();
      expectedStartDate.setDate(new Date().getDate() - 45);

      expect(navigateSpy).toHaveBeenCalledWith(['/segnalazione/gestione'], {
        queryParams: {
          startDate: expectedStartDate.toISOString().split('T')[0],
          endDate: expectedEndDate.toISOString().split('T')[0],
          toggle: true
        }
      });
    });
  });
});
