import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { OrganizzazioneRoutingModule } from './organizzazione-routing.module';


const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, OrganizzazioneRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
})
export class OrganizzazioneModule {}
