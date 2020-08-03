import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NwodComponent } from './nwod.component';
import { NwodMortalNewComponent } from './mortal/new.component';
import { NwodMageNewComponent } from './mage/new.component';
import { NwodMagePreludeComponent } from './mage/prelude.component';
import { NwodMageLeaderComponent } from './mage/leader.component';
import { NwodMageParadoxComponent } from './mage/paradox.component';
import { NwodMageRotesComponent } from './mage/rotes.component';
import { NwodMageGameComponent } from './mage/game.component';

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
  }, {
    path: 'mage/leader',
    component:  NwodMageLeaderComponent
  }, {
    path: 'mage/paradox',
    component:  NwodMageParadoxComponent
  }, {
    path: 'mage/rotes',
    component:  NwodMageRotesComponent
  }, {
    path: 'mage/game',
    component:  NwodMageGameComponent
  }, {
    path: 'mage/:id',
    component:  NwodMageNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NwodRoutingModule { }
