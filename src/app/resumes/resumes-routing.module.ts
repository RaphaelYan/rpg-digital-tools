import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumesComponent } from './resumes.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {
    path: ':id',
    component:  ResumeComponent
  }, {
    path: '',
    component:  ResumesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumesRoutingModule { }
