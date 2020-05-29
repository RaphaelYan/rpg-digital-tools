import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NwodComponent } from './nwod.component';
import { NwodNewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component:  NwodComponent
  }, {
    path: 'new',
    component:  NwodNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NwodRoutingModule { }
