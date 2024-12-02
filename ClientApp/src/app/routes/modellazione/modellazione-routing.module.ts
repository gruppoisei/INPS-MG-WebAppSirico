import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'settore-materia',
      pathMatch: 'full'
    },
    {
      path: 'area-prodotto',
      canActivate: [AuthGuard],
      data:{role: ["P12689",
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
                  "P12800; P12801"]},
      loadChildren: () => import('./aree/aree.module').then(m => m.AreeModule),
    },
    {
    path: 'settore-materia',
    canActivate: [AuthGuard],
      data:{role: ["P12689",
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
                  "P12800; P12801"]},
    loadChildren: () => import('./settore-materia/settore-materia.module').then(m => m.SettoreMateriaModule)
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModellazioneRoutingModule {}
