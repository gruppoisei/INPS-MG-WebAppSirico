import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogApplicativoDialogComponent } from './log-applicativo-dialog.component';
import { LogsService } from '@shared/services/logs.service';
import { MatDialogRef } from '@angular/material/dialog';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { Sort } from '@angular/material/sort';

describe('LogApplicativoDialogComponent', () => {
  let component: LogApplicativoDialogComponent;
  let fixture: ComponentFixture<LogApplicativoDialogComponent>;
  let mockLogSrv: jasmine.SpyObj<LogsService>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<LogApplicativoDialogComponent>>

  const mockGetLogsId = { logSrv: { id: 1, messaggio: 'errore' } };



  beforeEach(async () => {
    mockLogSrv = jasmine.createSpyObj('LogsService', ['getLogsId']);
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);
    mockLogSrv.getLogsId.and.returnValue(of(mockGetLogsId))

    await TestBed.configureTestingModule({
      declarations: [ LogApplicativoDialogComponent ],
      providers: [
        { provide: LogsService, useValue: mockLogSrv },
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
    .compileComponents();
  });




  beforeEach(() => {
    fixture = TestBed.createComponent(LogApplicativoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getLogsId and update result on popolaRis', () => {
    component.popolaRis();
    expect(mockLogSrv.getLogsId).toHaveBeenCalledWith(mockLogSrv.idAttivo);
    expect(component.result).toEqual(mockGetLogsId);
  });

  it('should toggle IsHidden when vediStack is called', () => {
    component.IsHidden = true;
    component.vediStack();
    expect(component.IsHidden).toBeFalse();

    component.vediStack();
    expect(component.IsHidden).toBeTrue();
  });

  it('should set ordine correctly based on sort input', () => {
    const sortAsc: Sort = { active: 'colonnaTest', direction: 'asc' };
    component.sortData(sortAsc);
    expect(component.ordine).toBe('colonnaTest_asc');
    const sortDesc: Sort = { active: 'colonnaTest', direction: 'desc' };
    component.sortData(sortDesc);
    expect(component.ordine).toBe('colonnaTest_desc');
    const sortNone: Sort = { active: 'colonnaTest', direction: '' };
    component.sortData(sortNone);
    expect(component.ordine).toBe('');
  });
});
