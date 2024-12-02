import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogApplicativoComponent } from './log-applicativo/log-applicativo.component';
import { ComunicazioniComponent } from './comunicazioni/comunicazioni.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { AuthGuard } from '@core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comunicazioni',
    pathMatch: 'full' },

  {
    path: 'comunicazioni',
    canActivate: [AuthGuard],
    data:{role: [ "P12689",
                  "P12689; P12690",
                  "P12689; P12799",
                  "P12689; P12800",
                  "P12689; P12801",
                  "P12689; P12690; P12799",
                  "P12689; P12690; P12800",
                  "P12689; P12690; P12801",
                  "P12689; P12799; P12800",
                  "P12689; P12799; P12801",
                  "P12689; P12800; P12801",
                  "P12689; P12690; P12799; P12800",
                  "P12689; P12690; P12799; P12801",
                  "P12689; P12690; P12800; P12801",
                  "P12689; P12799; P12800; P12801",
                  "P12689; P12690; P12799; P12800; P12801"]},
    component: ComunicazioniComponent
  },
  {
    path: 'gestione-log',
    canActivate:[AuthGuard],
    data:{role: [ "P12689",
                  "P12689; P12690",
                  "P12689; P12799",
                  "P12689; P12800",
                  "P12689; P12801",
                  "P12689; P12690; P12799",
                  "P12689; P12690; P12800",
                  "P12689; P12690; P12801",
                  "P12689; P12799; P12800",
                  "P12689; P12799; P12801",
                  "P12689; P12800; P12801",
                  "P12689; P12690; P12799; P12800",
                  "P12689; P12690; P12799; P12801",
                  "P12689; P12690; P12800; P12801",
                  "P12689; P12799; P12800; P12801",
                  "P12689; P12690; P12799; P12800; P12801"]},
    component: LogApplicativoComponent},
  {
    path: 'lista-utenti',
    canActivate:[AuthGuard],
    data:{role: [ "P12689",
                  "P12689; P12690",
                  "P12689; P12799",
                  "P12689; P12800",
                  "P12689; P12801",
                  "P12689; P12690; P12799",
                  "P12689; P12690; P12800",
                  "P12689; P12690; P12801",
                  "P12689; P12799; P12800",
                  "P12689; P12799; P12801",
                  "P12689; P12800; P12801",
                  "P12689; P12690; P12799; P12800",
                  "P12689; P12690; P12799; P12801",
                  "P12689; P12690; P12800; P12801",
                  "P12689; P12799; P12800; P12801",
                  "P12689; P12690; P12799; P12800; P12801"]},
    component: ListaUtentiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaAmministrativaRoutingModule { }
