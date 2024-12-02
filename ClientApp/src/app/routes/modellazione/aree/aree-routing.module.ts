import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreeComponent } from './aree.component';

const routes: Routes = [
  { path: '', component: AreeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AreeRoutingModule { }
