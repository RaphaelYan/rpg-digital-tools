import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NwodRoutingModule } from './nwod-routing.module';
import { NwodComponent } from './nwod.component';
import { NwodMortalNewComponent } from './mortal/new.component';
import { NwodMageNewComponent } from './mage/new.component';
import { NwodMagePreludeComponent } from './mage/prelude.component';
import { NwodMageLeaderComponent } from './mage/leader.component';
import { NwodMageParadoxComponent } from './mage/paradox.component';
import { NwodMageRotesComponent } from './mage/rotes.component';

@NgModule({
  declarations: [
    NwodComponent,
    NwodMortalNewComponent,
    NwodMageNewComponent,
    NwodMagePreludeComponent,
    NwodMageLeaderComponent,
    NwodMageParadoxComponent,
    NwodMageRotesComponent,
  ],
  imports: [
    CommonModule,
    NwodRoutingModule,
    FormsModule
  ]
})
export class NwodModule { }
