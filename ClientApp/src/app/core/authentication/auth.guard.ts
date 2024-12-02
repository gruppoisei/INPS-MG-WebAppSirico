import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { StorageService } from '@shared';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private storageService:  StorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkRole(route.data.role);
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    return this.checkRole(childRoute.data.role);
  }

  private checkRole(role: string[]): boolean | UrlTree {
    const userRole = this.storageService.getItem('allroles');
    if (userRole && userRole.includes("P12689")) {
      return true;
    }
    else if (userRole && role.includes(userRole)) {
      return true;
    }
    else {
      return this.newRedirectUser(userRole)
    }
  }

  private newRedirectUser(role: string | null): any {

    return this.router.parseUrl('dashboard');

    // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12800")) {
    //   return this.router.parseUrl('modellazione/settore-materia');
    // }
    // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12801")) {
    //   return this.router.parseUrl('segnalazione/inserimento');
    // }
    // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12799")) {
    //   return this.router.parseUrl('segnalazione/inserimento');
    // }
    // if (role!.split(';').map(ruolo => ruolo.trim()).includes("P12690")) {
    //   return this.router.parseUrl('segnalazione/gestione');
    // }
  }
}
