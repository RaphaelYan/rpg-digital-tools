import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EscapeComponent } from './escape.component';

const routes: Routes = [
  {
    path: '',
    component:  EscapeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscapeRoutingModule { }
