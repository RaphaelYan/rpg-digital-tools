import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NwodComponent } from './nwod.component';
import { NwodMortalNewComponent } from './mortal/new.component';
import { NwodMageNewComponent } from './mage/new.component';
import { NwodMagePreludeComponent } from './mage/prelude.component';

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
  }, {
    path: 'mage/prelude',
    component:  NwodMagePreludeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NwodRoutingModule { }
