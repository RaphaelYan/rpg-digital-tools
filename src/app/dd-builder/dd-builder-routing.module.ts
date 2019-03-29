import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdBuilderComponent } from './dd-builder.component';

const routes: Routes = [
  {
    path: '',
    component: DdBuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdBuilderRoutingModule { }
