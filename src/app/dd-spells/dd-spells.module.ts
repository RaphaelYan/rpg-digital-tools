import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdSpellsRoutingModule } from './dd-spells-routing.module';
import { DdSpellsComponent } from './dd-spells.component';

@NgModule({
  declarations: [DdSpellsComponent],
  imports: [
    CommonModule,
    DdSpellsRoutingModule
  ]
})
export class DdSpellsModule { }
