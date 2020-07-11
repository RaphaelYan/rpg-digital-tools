import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BackgroundsRoutingModule } from './backgrounds-routing.module';
import { BackgroundsComponent } from './backgrounds.component';

@NgModule({
  declarations: [BackgroundsComponent],
  imports: [
    CommonModule,
    BackgroundsRoutingModule,
    FormsModule
  ]
})
export class BackgroundsModule { }
