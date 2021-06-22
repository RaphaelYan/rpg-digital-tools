import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParanoiaRoutingModule } from './paranoia-routing.module';
import { ParanoiaComponent } from './paranoia.component';
import { ParanoiaComputerComponent } from './computer/computer.component';
import { ParanoiaRibbonComponent } from './ribbon/ribbon.component';
import { ParanoiaCharacterComponent } from './character/character.component';
import { ParanoiaModalComponent } from './modal/modal.component';
import { ParanoiaService } from './paranoia.service';

import { SafeStylePipe } from './safe-style.pipe';

@NgModule({
  declarations: [
    ParanoiaComponent,
    ParanoiaComputerComponent,
    ParanoiaRibbonComponent,
    ParanoiaCharacterComponent,
    ParanoiaModalComponent,
    SafeStylePipe,
  ],
  imports: [
    CommonModule,
    ParanoiaRoutingModule,
    FormsModule
  ],
  providers: [
    ParanoiaService,
  ]
})
export class ParanoiaModule { }
