import { Component } from '@angular/core';

@Component({
  selector: 'app-branding',
  template: `
    <a class="matero-branding" [routerLink]="'/dashboard'">
      <img src="./assets/images/INPS_logo_negativo_colore_RGB.png" class="matero-branding-logo-expanded" alt="logo" />
    </a>
  `,
})
export class BrandingComponent {}
