import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParanoiaRoutingModule } from './paranoia-routing.module';
import { ParanoiaComponent } from './paranoia.component';
import { ParanoiaComputerComponent } from './computer/computer.component';

@NgModule({
  declarations: [
    ParanoiaComponent,
    ParanoiaComputerComponent,
  ],
  imports: [
    CommonModule,
    ParanoiaRoutingModule,
    FormsModule
  ]
})
export class ParanoiaModule { }
