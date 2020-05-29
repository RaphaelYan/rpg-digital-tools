import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NwodRoutingModule } from './nwod-routing.module';
import { NwodComponent } from './nwod.component';
import { NwodNewComponent } from './new/new.component';

@NgModule({
  declarations: [
    NwodComponent,
    NwodNewComponent
  ],
  imports: [
    CommonModule,
    NwodRoutingModule,
    FormsModule
  ]
})
export class NwodModule { }
