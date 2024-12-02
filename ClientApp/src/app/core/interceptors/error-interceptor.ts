import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { MtxDialog } from '@ng-matero/extensions/dialog';
import { FormBuilder } from '@angular/forms';

export enum STATUS {
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  SESSION_EXPIRED = 0 || 304,
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private errorPages = [STATUS.FORBIDDEN, STATUS.NOT_FOUND, STATUS.INTERNAL_SERVER_ERROR];

  private getMessage = (error: HttpErrorResponse) => {
    if (error.error?.message) {
      return error.error.message;
    }

    if (error.error?.msg) {
      return error.error.msg;
    }

    return `${error.status} ${error.statusText}`;
  };
  counter: number = 0;

  constructor(
    private router: Router,
    private toast: ToastrService,
    public dialogAlert: MtxDialog,
    private formBuilder: FormBuilder
  ) {}

  form = this.formBuilder.group({});

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse) {
    console.log('Request URL:', error.url); // Log dell'URL della richiesta
    console.log('Request Status:', error.status); // Log del codice di stato
    console.log('Request Body:', error.message); // Log del messaggio di errore

    if (this.errorPages.includes(error.status)) {
      this.router.navigateByUrl(`/${error.status}`, {
        skipLocationChange: true,
      });
    } else {
      // console.error('ERROR', error);
      /* this.toast.error(this.getMessage(error)); */
      if (error.status === STATUS.UNAUTHORIZED) {
        this.router.navigateByUrl('/auth/login');
      }
      if (error.status === 0) {
        this.counter++;
        if (this.counter <= 1) {
          this.dialogAlert.alert(
            `Sessione scaduta! Si prega di refreshare la pagina o effettuare di nuovo il login.`
            // `Sessione scaduta! Si prega di refreshare la pagina o effettuare di nuovo il login,\n request url:\n` + error.url + '\n status: ' + error.status + '\n body: ' + error.message
          );
          this.router.navigateByUrl('/dashboard');
        }
      }
    }

    return throwError(error);
  }
}
