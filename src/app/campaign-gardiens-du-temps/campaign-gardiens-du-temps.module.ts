import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CampaignGardiensDuTempsRoutingModule } from './campaign-gardiens-du-temps-routing.module';
import { CampaignGardiensDuTempsComponent } from './campaign-gardiens-du-temps.component';

@NgModule({
  declarations: [CampaignGardiensDuTempsComponent],
  imports: [
    CommonModule,
    FormsModule,
    CampaignGardiensDuTempsRoutingModule
  ]
})
export class CampaignGardiensDuTempsModule { }
