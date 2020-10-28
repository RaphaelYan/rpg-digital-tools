import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { AuctionsRoutingModule } from './auctions-routing.module';
import { AuctionsComponent } from './auctions.component';
import { AuctionsService } from './auctions.service';

@NgModule({
  declarations: [AuctionsComponent],
  imports: [
    CommonModule,
    AuctionsRoutingModule,
    FormsModule,
    NgxChartsModule,
  ],
  providers: [
    AuctionsService
  ]
})
export class AuctionsModule { }
