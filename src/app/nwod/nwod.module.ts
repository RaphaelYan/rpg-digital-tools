import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NwodRoutingModule } from './nwod-routing.module';
import { NwodComponent } from './nwod.component';
import { NwodMortalNewComponent } from './mortal/new.component';
import { NwodMageNewComponent } from './mage/new.component';

@NgModule({
  declarations: [
    NwodComponent,
    NwodMortalNewComponent,
    NwodMageNewComponent,
  ],
  imports: [
    CommonModule,
    NwodRoutingModule,
    FormsModule
  ]
})
export class NwodModule { }
