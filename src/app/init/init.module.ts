import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InitRoutingModule } from './init-routing.module';
import { InitComponent } from './init.component';

@NgModule({
  declarations: [InitComponent],
  imports: [
    CommonModule,
    InitRoutingModule,
    FormsModule
  ]
})
export class InitModule { }
