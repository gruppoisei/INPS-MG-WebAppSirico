import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestioneSegnalazioneGerarchicoComponent } from './gestione-segnalazione-gerarchico.component';
const routes: Routes = [
  //{ path: '', component: RilevazioniComponent },
  //{ path: 'nuova', component: RilevazioniNuovaComponent },
  //{ path: '', component: GestioneSegnalazioneGerarchicoComponent },
  // { path: 'nuova',
  //   loadChildren: () => import('./rilevazioni/rilevazioni-nuova.module').then(m => m.RilevazioniNuovaComponent)
  // },
  //{ path: 'modifica/:id', component: RilevazioniModificaComponent},
  // NUOVO
  //{ path: 'risolvi-aspetti', component: PaginaRisolviAspettoComponent},
  // { path: 'risolvi-aspetti-gerarchico', component: GestioneSegnalazioneGerarchicoComponent},
  { path:'', component: GestioneSegnalazioneGerarchicoComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RilevazioniRoutingModule {}
