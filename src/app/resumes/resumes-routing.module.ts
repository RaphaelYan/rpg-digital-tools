import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumesComponent } from './resumes.component';

const routes: Routes = [
  {
    path: '',
    component:  ResumesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumesRoutingModule { }
