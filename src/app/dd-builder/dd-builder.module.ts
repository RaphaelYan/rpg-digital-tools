import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DdBuilderRoutingModule } from './dd-builder-routing.module';
import { DdBuilderComponent } from './dd-builder.component';

@NgModule({
  declarations: [DdBuilderComponent],
  imports: [
    CommonModule,
    FormsModule,
    DdBuilderRoutingModule
  ]
})
export class DdBuilderModule { }
