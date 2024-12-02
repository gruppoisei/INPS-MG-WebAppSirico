import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwichtRuoloService {


  ruolo : Subject<boolean> = new Subject<boolean>();
  _ruolo$ : Observable<boolean>  = this.ruolo.asObservable();

  constructor() {

  }

  SwitchRuolo(isAmministrator : boolean) : void {
    this.ruolo.next(isAmministrator);
  }
}
