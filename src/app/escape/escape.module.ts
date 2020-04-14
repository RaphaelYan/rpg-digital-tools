import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EscapeRoutingModule } from './escape-routing.module';
import { EscapeComponent } from './escape.component';

@NgModule({
  declarations: [EscapeComponent],
  imports: [
    CommonModule,
    EscapeRoutingModule,
    FormsModule
  ]
})
export class EscapeModule { }
