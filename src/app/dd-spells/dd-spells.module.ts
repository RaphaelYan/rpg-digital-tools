import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DdSpellsRoutingModule } from './dd-spells-routing.module';
import { DdSpellsComponent } from './spells/dd-spells.component';
import { DdSpellComponent } from './spell/dd-spell.component';

@NgModule({
  declarations: [
    DdSpellsComponent,
    DdSpellComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    DdSpellsRoutingModule,
  ]
})
export class DdSpellsModule { }
