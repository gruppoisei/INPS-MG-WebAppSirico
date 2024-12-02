import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatDialog } from '@angular/material/dialog';
import { PreloaderService } from '@core';
import { FormBuilder } from '@angular/forms';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StorageService } from '@shared';
import { RuoloComunicazioneService } from '@shared/services/ruolo-comunicazione.service';
import { of } from 'rxjs';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let dialogMock: any;
  let preloaderServiceMock: any;
  let storageServiceMock: any;
  let ruoloComunicazioneServiceMock: any;

  beforeEach(async () => {
    dialogMock = {
      open: jasmine.createSpy('open').and.returnValue({
        afterClosed: () => of(null),
      }),
    };

    preloaderServiceMock = {
      hide: jasmine.createSpy('hide'),
    };

    storageServiceMock = {
      getItem: jasmine.createSpy('getItem').and.callFake((key: string) => {
        if (key === 'allroles') return 'Role1,Role2';
        if (key === 'matricola') return '12345';
        return null;
      }),
    };

    ruoloComunicazioneServiceMock = {
      newGetComunicazioniFilterByRuoloAndMatricola: jasmine
        .createSpy('newGetComunicazioniFilterByRuoloAndMatricola')
        .and.returnValue(of([])),
    };

    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        { provide: MatDialog, useValue: dialogMock },
        { provide: PreloaderService, useValue: preloaderServiceMock },
        { provide: StorageService, useValue: storageServiceMock },
        { provide: RuoloComunicazioneService, useValue: ruoloComunicazioneServiceMock },
        FormBuilder,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getComunicazioni on ngOnInit', () => {
    spyOn(component, 'getComunicazioni');
    component.ngOnInit();
    expect(component.getComunicazioni).toHaveBeenCalled();
  });

  it('should open popup for comunicazioni', () => {
    component.apriPopupComunicazioni();
  
    expect(dialogMock.open).toHaveBeenCalled();
    const dialogConfig = dialogMock.open.calls.mostRecent().args[1];
    expect(dialogConfig.autoFocus).toBeTrue();
    expect(dialogConfig.width).toBe('600px');
    expect(dialogConfig.disableClose).toBeTrue();
  });  
 
  it('should hide preloader on ngAfterViewInit', () => {
    component.ngAfterViewInit();
    expect(preloaderServiceMock.hide).toHaveBeenCalled();
  });
});