import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dd-builder',
    loadChildren: () => import('./dd-builder/dd-builder.module').then(m => m.DdBuilderModule)
  }, {
    path: 'dd-rules',
    loadChildren: () => import('./dd-rules/dd-rules.module').then(m => m.DdRulesModule)
  }, {
    path: 'init',
    loadChildren: () => import('./init/init.module').then(m => m.InitModule)
  }, {
    path: 'resumes',
    loadChildren: () => import('./resumes/resumes.module').then(m => m.ResumesModule)
  }, {
    path: 'proba',
    loadChildren: () => import('./proba/proba.module').then(m => m.ProbaModule)
  }, {
    path: 'escape',
    loadChildren: () => import('./escape/escape.module').then(m => m.EscapeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
