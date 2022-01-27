import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdSpellsComponent } from './dd-spells.component';

const routes: Routes = [
  {
    path: '',
    component: DdSpellsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdSpellsRoutingModule { }
