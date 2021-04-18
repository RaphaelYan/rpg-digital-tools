import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParanoiaComponent } from './paranoia.component';

const routes: Routes = [
  {
    path: '',
    component:  ParanoiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParanoiaRoutingModule { }
