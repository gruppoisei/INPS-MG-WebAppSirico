import { TestBed, ComponentFixture } from '@angular/core/testing';
import { PaginaRisolviAspettoComponent } from './pagina-risolvi-aspetto.component';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { StepperService } from '@shared/services/stepper.service';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaginaRisolviAspettoComponent', () => {
    let component: PaginaRisolviAspettoComponent;
    let fixture: ComponentFixture<PaginaRisolviAspettoComponent>;
    let mockDialog: jasmine.SpyObj<MatDialog>;
    let mockLocation: jasmine.SpyObj<Location>;
    let mockStepperService: jasmine.SpyObj<StepperService>;

    beforeEach(async () => {
        mockDialog = jasmine.createSpyObj('MatDialog', ['open']);
        mockLocation = jasmine.createSpyObj('Location', ['back']);
        mockStepperService = jasmine.createSpyObj('StepperService', ['settoreAreaSede$', 'setcheckNuovoAspetto']); // Aggiungi il metodo mancante

        await TestBed.configureTestingModule({
            declarations: [PaginaRisolviAspettoComponent],
            providers: [
                { provide: MatDialog, useValue: mockDialog },
                { provide: Location, useValue: mockLocation },
                { provide: StepperService, useValue: mockStepperService },
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA], // Aggiungi CUSTOM_ELEMENTS_SCHEMA per sopprimere gli errori sui componenti sconosciuti
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginaRisolviAspettoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('goBack', () => {
        it('should call location.back', () => {
            component.goBack();
            expect(mockLocation.back).toHaveBeenCalled();
        });
    });

    describe('mostraTesto', () => {
        it('should open ModaleTestiAspettiComponent dialog if conditions are met', () => {
            const testo = 'Testo valido';
            const id = 1;
            component.mostraTesto(testo, id);
            expect(mockDialog.open).toHaveBeenCalled();
        });

        it('should not open dialog if id is 9', () => {
            const testo = 'Testo valido';
            const id = 9;
            component.mostraTesto(testo, id);
            expect(mockDialog.open).not.toHaveBeenCalled();
        });

        it('should not open dialog if text is empty', () => {
            const testo = '';
            const id = 1;
            component.mostraTesto(testo, id);
            expect(mockDialog.open).not.toHaveBeenCalled();
        });
    });
});
