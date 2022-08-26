import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampaignRepieRoutingModule } from './campaign-repie-routing.module';
import { CampaignRepieComponent } from './campaign-repie.component';

@NgModule({
  declarations: [CampaignRepieComponent],
  imports: [
    CommonModule,
    FormsModule,
    CampaignRepieRoutingModule
  ]
})
export class CampaignRepieModule { }
