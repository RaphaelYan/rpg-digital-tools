import { Component } from '@angular/core';
import { AuctionsService } from './auctions.service';
import { valueToPrice } from './models';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent {
  public auctions: any[] = null;

  constructor(
    private auctionsService: AuctionsService
  ) {
    this.auctionsService.getStaticData()
    .then((auctions) => {
      const tmpAuctions = {};

      for (const auction of auctions) {
        if (!tmpAuctions[auction.id]) {
          tmpAuctions[auction.id] = {
            name: auction.name,
            series: []
          };
        }

        tmpAuctions[auction.id].series.push({
          name: auction.date,
          value: auction.min_price
        });
      }

      this.auctions = Object.values(tmpAuctions);
    });
  }

  public yLeftTickFormat(value): string {
    return valueToPrice(value);
  }
}
