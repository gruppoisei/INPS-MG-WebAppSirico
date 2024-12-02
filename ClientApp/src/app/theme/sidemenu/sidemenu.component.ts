import { Menu, MenuService } from '@core';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxPermissionsService } from 'ngx-permissions';
import { StorageService } from '@shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidemenuComponent implements OnDestroy, OnInit {
  // NOTE: Ripple effect make page flashing on mobile
  @Input() ripple = false;

  userRoles: string = '';
  userRole: string = '';
  menuItems: Menu[] = []
  menu$ = this.menu.getAll();
  buildRoute = this.menu.buildRoute;
  ruoloSubscription: Subscription | undefined;

  isAmministrator: boolean = false;

  constructor(
    private menu: MenuService,
    private storageService: StorageService,
    private permissionsService: NgxPermissionsService
  ) {}

  ngOnInit() {
    this.userRole = this.storageService.getItem('allroles')
    this.ruoloSubscription = this.menu$.subscribe((menuItems: Menu[])=>{
    this.menuItems = this.filterMenuItems(menuItems, this.userRole);
    this.setPermissions(this.userRole);
    })
  }


  filterMenuItems(menuItems: Menu[], ruolo: string): Menu[] {
    return menuItems.filter(item => this.checkPermissions(item, ruolo));
  }

  checkPermissions(item: Menu, ruolo: string): boolean  {
    // Controlla se l'elemento del menu è accessibile per il ruolo specificato
    return !!item.permissions && !!item.permissions.only && item.permissions.only.includes(ruolo);
  }

  setPermissions(ruolo: string) {
    // Carica i permessi in base al ruolo corrente dell'utente
    this.permissionsService.loadPermissions([ruolo]);
  }

  ngOnDestroy(): void {}
}
