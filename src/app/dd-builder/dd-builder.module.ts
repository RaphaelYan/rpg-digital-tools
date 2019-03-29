import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdBuilderRoutingModule } from './dd-builder-routing.module';
import { DdBuilderComponent } from './dd-builder.component';

@NgModule({
  declarations: [DdBuilderComponent],
  imports: [
    CommonModule,
    DdBuilderRoutingModule
  ]
})
export class DdBuilderModule { }
