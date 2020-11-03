import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ResumesRoutingModule } from './resumes-routing.module';
import { ResumesComponent } from './resumes.component';
import { ResumeComponent } from './resume/resume.component';
import { SanitizePipe } from './sanitize.pipe';

@NgModule({
  declarations: [
    ResumesComponent,
    ResumeComponent,
    SanitizePipe,
  ],
  imports: [
    CommonModule,
    ResumesRoutingModule,
    FormsModule
  ]
})
export class ResumesModule { }
