import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dd-builder',
    loadChildren: './dd-builder/dd-builder.module#DdBuilderModule'
  }, {
    path: 'dd-rules',
    loadChildren: './dd-rules/dd-rules.module#DdRulesModule'
  }, {
    path: 'init',
    loadChildren: './init/init.module#InitModule'
  }, {
    path: 'resumes',
    loadChildren: './resumes/resumes.module#ResumesModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
