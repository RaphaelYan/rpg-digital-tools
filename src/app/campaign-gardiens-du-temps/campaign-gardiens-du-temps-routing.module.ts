import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignGardiensDuTempsComponent } from './campaign-gardiens-du-temps.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignGardiensDuTempsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignGardiensDuTempsRoutingModule { }
