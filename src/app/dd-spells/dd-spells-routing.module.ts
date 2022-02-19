import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DdSpellsComponent } from './spells/dd-spells.component';
import { DdSpellComponent } from './spell/dd-spell.component';

const routes: Routes = [
  {
    path: '', component: DdSpellsComponent,
  }, {
    path: ':id', component: DdSpellComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdSpellsRoutingModule { }
