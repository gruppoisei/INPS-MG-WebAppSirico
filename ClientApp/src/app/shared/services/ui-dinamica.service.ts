import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiDinamicaService {
  chiudiDialogScadenze: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  $_chiudiDialogScadenze: Observable<boolean> = this.chiudiDialogScadenze.asObservable();

  constructor() {}

  public chiudiDialogWhenClickModifica(): void {
    this.chiudiDialogScadenze.next(true);
  }
}
