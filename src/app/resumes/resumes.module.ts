import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResumesRoutingModule } from './resumes-routing.module';
import { ResumesComponent } from './resumes.component';

@NgModule({
  declarations: [ResumesComponent],
  imports: [
    CommonModule,
    ResumesRoutingModule,
    FormsModule
  ]
})
export class ResumesModule { }
