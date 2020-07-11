import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundsComponent } from './backgrounds.component';

const routes: Routes = [
  {
    path: '',
    component:  BackgroundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundsRoutingModule { }
