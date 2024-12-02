import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AreeRoutingModule } from './aree-routing.module';
import { AreeComponent } from './aree.component';
// import { AreeNuovaComponent } from './aree-nuova/aree-nuova.component';



const COMPONENTS: any[] = [
  AreeComponent
];

const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, AreeRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],

  })
export class AreeModule { }

