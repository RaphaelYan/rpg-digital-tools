import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampaignWirtRoutingModule } from './campaign-wirt-routing.module';
import { CampaignWirtComponent } from './campaign-wirt.component';

@NgModule({
  declarations: [CampaignWirtComponent],
  imports: [
    CommonModule,
    FormsModule,
    CampaignWirtRoutingModule
  ]
})
export class CampaignWirtModule { }
