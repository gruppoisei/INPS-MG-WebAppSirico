import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ModellazioneRoutingModule } from './modellazione-routing.module';
import { ModellazioneNuovaComponent } from './modellazione-nuova/modellazione-nuova.component';
import { ModellazioneAggiornaComponent } from './modellazione-aggiorna/modellazione-aggiorna.component';


const COMPONENTS: any[] = [];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, ModellazioneRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, ModellazioneNuovaComponent, ModellazioneAggiornaComponent],
})
export class ModellazioneModule {}
