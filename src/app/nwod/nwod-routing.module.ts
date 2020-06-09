import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NwodComponent } from './nwod.component';
import { NwodMortalNewComponent } from './mortal/new.component';
import { NwodMageNewComponent } from './mage/new.component';

const routes: Routes = [
  {
    path: '',
    component:  NwodComponent
  }, {
    path: 'mortal/new',
    component:  NwodMortalNewComponent
  }, {
    path: 'mage/new',
    component:  NwodMageNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NwodRoutingModule { }
