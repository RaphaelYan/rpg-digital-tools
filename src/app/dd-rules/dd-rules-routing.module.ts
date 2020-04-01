import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdRulesComponent } from './dd-rules.component';

const routes: Routes = [
  {
    path: '',
    component: DdRulesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdRulesRoutingModule { }
