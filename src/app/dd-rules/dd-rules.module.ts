import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdRulesRoutingModule } from './dd-rules-routing.module';
import { DdRulesComponent } from './dd-rules.component';

@NgModule({
  declarations: [DdRulesComponent],
  imports: [
    CommonModule,
    DdRulesRoutingModule
  ]
})
export class DdRulesModule { }
