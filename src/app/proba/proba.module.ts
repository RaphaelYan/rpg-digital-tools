import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProbaRoutingModule } from './proba-routing.module';
import { ProbaComponent } from './proba.component';

@NgModule({
  declarations: [ProbaComponent],
  imports: [
    CommonModule,
    ProbaRoutingModule,
    FormsModule
  ]
})
export class ProbaModule { }
