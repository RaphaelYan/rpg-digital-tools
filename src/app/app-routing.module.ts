import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dd-builder',
    loadChildren: () => import('./dd-builder/dd-builder.module').then(m => m.DdBuilderModule)
  }, {
    path: 'dd-rules',
    loadChildren: () => import('./dd-rules/dd-rules.module').then(m => m.DdRulesModule)
  }, {
    path: 'dd-spells',
    loadChildren: () => import('./dd-spells/dd-spells.module').then(m => m.DdSpellsModule)
  }, {
    path: 'init',
    loadChildren: () => import('./init/init.module').then(m => m.InitModule)
  }, {
    path: 'resumes',
    loadChildren: () => import('./resumes/resumes.module').then(m => m.ResumesModule)
  }, {
    path: 'backgrounds',
    loadChildren: () => import('./backgrounds/backgrounds.module').then(m => m.BackgroundsModule)
  }, {
    path: 'proba',
    loadChildren: () => import('./proba/proba.module').then(m => m.ProbaModule)
  }, {
    path: 'escape',
    loadChildren: () => import('./escape/escape.module').then(m => m.EscapeModule)
  }, {
    path: 'nwod',
    loadChildren: () => import('./nwod/nwod.module').then(m => m.NwodModule)
  }, {
    path: 'paranoia',
    loadChildren: () => import('./paranoia/paranoia.module').then(m => m.ParanoiaModule)
  }, {
    path: 'auctions',
    loadChildren: () => import('./auctions/auctions.module').then(m => m.AuctionsModule)
  }, {
    path: 'auctions',
    loadChildren: () => import('./auctions/auctions.module').then(m => m.AuctionsModule)
  }, {
    path: 'l-homme-a-la-jambe-de-bois',
    loadChildren: () => import('./campaign-wirt/campaign-wirt.module').then(m => m.CampaignWirtModule)
  }, {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
