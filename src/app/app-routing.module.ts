import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }, {
    path: 'dd-builder',
    loadChildren: './dd-builder/dd-builder.module#DdBuilderModule'
  }, {
    path: 'init',
    loadChildren: './init/init.module#InitModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
