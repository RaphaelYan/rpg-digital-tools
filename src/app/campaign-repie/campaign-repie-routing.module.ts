import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignRepieComponent } from './campaign-repie.component';

const routes: Routes = [
  {
    path: '',
    component: CampaignRepieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRepieRoutingModule { }
