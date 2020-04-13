import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProbaComponent } from './proba.component';

const routes: Routes = [
  {
    path: '',
    component:  ProbaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProbaRoutingModule { }
