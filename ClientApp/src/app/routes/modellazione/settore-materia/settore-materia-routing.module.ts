import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettoreMateriaComponent } from './settore-materia.component';

const routes: Routes = [
  { path: '', component: SettoreMateriaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettoreMateriaRoutingModule { }
