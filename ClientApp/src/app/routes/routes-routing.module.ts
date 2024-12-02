import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
import { AdminLayoutComponent } from '../theme/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { AuthGuard } from '@core';
import { LocalUserLoginComponent } from './local-user-login/local-user-login/local-user-login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [

      { path: '', redirectTo: 'local-login', pathMatch: 'full' },

      {path: 'local-login', component: LocalUserLoginComponent},

      { path: 'dashboard',
        canActivate: [AuthGuard],
        data:{ role: ["P12689",
                      "P12689; P12690",
                      "P12689; P12690; P12799",
                      "P12689; P12690; P12799; P12800",
                      "P12689; P12690; P12799; P12800; P12801",
                      "P12689; P12690; P12799; P12801",
                      "P12689; P12690; P12800",
                      "P12689; P12690; P12800; P12801",
                      "P12689; P12690; P12801",
                      "P12689; P12799",
                      "P12689; P12799; P12800",
                      "P12689; P12799; P12800; P12801",
                      "P12689; P12799; P12801",
                      "P12689; P12800",
                      "P12689; P12800; P12801",
                      "P12689; P12801",
                      "P12690",
                      "P12690; P12799",
                      "P12690; P12799; P12800",
                      "P12690; P12799; P12800; P12801",
                      "P12690; P12799; P12801",
                      "P12690; P12800",
                      "P12690; P12800; P12801",
                      "P12690; P12801",
                      "P12799",
                      "P12799; P12800",
                      "P12799; P12800; P12801",
                      "P12799; P12801",
                      "P12800",
                      "P12800; P12801",
                      "P12801"]
                    },
        component: DashboardComponent },
      {
        path: 'segnalazione',
        canActivate: [AuthGuard],
        data:{ role: ["P12689",
                      "P12689; P12690",
                      "P12689; P12690; P12799",
                      "P12689; P12690; P12799; P12800",
                      "P12689; P12690; P12799; P12800; P12801",
                      "P12689; P12690; P12799; P12801",
                      "P12689; P12690; P12800",
                      "P12689; P12690; P12800; P12801",
                      "P12689; P12690; P12801",
                      "P12689; P12799",
                      "P12689; P12799; P12800",
                      "P12689; P12799; P12800; P12801",
                      "P12689; P12799; P12801",
                      "P12689; P12800",
                      "P12689; P12800; P12801",
                      "P12689; P12801",
                      "P12690",
                      "P12690; P12799",
                      "P12690; P12799; P12800",
                      "P12690; P12799; P12800; P12801",
                      "P12690; P12799; P12801",
                      "P12690; P12800",
                      "P12690; P12800; P12801",
                      "P12690; P12801",
                      "P12799",
                      "P12799; P12800",
                      "P12799; P12800; P12801",
                      "P12799; P12801",
                      "P12800; P12801",
                      "P12801"]
                    },
        loadChildren: () => import('./organizzazione/organizzazione.module').then(m => m.OrganizzazioneModule),
      },
      {
        path: 'modellazione',
        canActivate: [AuthGuard],
        data: {role:[ "P12689",
                      "P12689; P12690",
                      "P12689; P12690; P12799",
                      "P12689; P12690; P12799; P12800",
                      "P12689; P12690; P12799; P12800; P12801",
                      "P12689; P12690; P12799; P12801",
                      "P12689; P12690; P12800",
                      "P12689; P12690; P12800; P12801",
                      "P12689; P12690; P12801",
                      "P12689; P12799",
                      "P12689; P12799; P12800",
                      "P12689; P12799; P12800; P12801",
                      "P12689; P12799; P12801",
                      "P12689; P12800",
                      "P12689; P12800; P12801",
                      "P12689; P12801",
                      "P12690; P12799; P12800",
                      "P12690; P12799; P12800; P12801",
                      "P12690; P12800",
                      "P12690; P12800; P12801",
                      "P12799; P12800",
                      "P12799; P12800; P12801",
                      "P12800",
                      "P12800; P12801"
                      ]}, 
        loadChildren: () => import('./modellazione/modellazione.module').then(m => m.ModellazioneModule),
      },

      {
        path: 'amministrazione',
        canActivate: [AuthGuard],
        data: {role: ["P12689",
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
                      "P12689; P12690; P12799; P12800; P12801"
                    ]},
        loadChildren: () => import('./area-amministrativa/area-amministrativa.module').then(m => m.AreaAmministrativaModule),
      },
 /*      {
        path: 'gestione-componenti',
        loadChildren: () => import('./gestione-componenti/gestione-componenti.module').then(m => m.GestioneComponentiModule),
      },*/

      { path: '403', component: Error403Component },
      { path: '404', component: Error404Component },
      { path: '500', component: Error500Component },
    ],
  },
/*   {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: Error404Component },
    ],
  }, */
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
    }),
  ],
  exports: [RouterModule],
})
export class RoutesRoutingModule {}
