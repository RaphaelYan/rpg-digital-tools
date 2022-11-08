import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuctionsService } from './auctions.service';
import { valueToPrice } from './models';
import { auctionStore } from './store';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.scss']
})
export class AuctionsComponent {
  public auctions: any[] = null;
  public clientid = '';
  public clientsecret = '';
  private user: any;
  private chogallConnected = 1621;
  private store = Object.assign({}, auctionStore);

  constructor(
    public angularFireAuth: AngularFireAuth,
    private auctionsService: AuctionsService,
    private httpClient: HttpClient,
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (!user) {
        return;
      }

      this.user = user;

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
    });
  }

  public yLeftTickFormat(value): string {
    return valueToPrice(value);
  }

  public scrap(): void {
    for (const key in this.store) {
      this.store[key].date = new Date().toISOString();
      this.store[key].id = key;
    }

    this.loginBattleNet()
    .then((responseAuth) => {
      this.getCommodities(responseAuth)
      .then((responseCommodities: any) => {
        this.getAuctions(responseAuth)
        .then((responseAuctions: any) => {

          console.log(`On parse les résultats : ${responseCommodities.auctions.length} + ${responseAuctions.auctions.length}`);

          this.processAuctionsItems([...responseCommodities.auctions, ...responseAuctions.auctions]);

          console.log('OK');

        }).catch(console.error);
      }).catch(console.error);
    }).catch(console.error);
  }

  public isAdmin(): boolean {
    return this.user && this.user.email === 'maferyt@gmail.com';
  }

  private loginBattleNet() {
    if (!this.clientid || !this.clientsecret) {
      return Promise.reject('No credentials');
    }

    const url = 'https://eu.battle.net/oauth/token?grant_type=client_credentials';
    const encoded = btoa(`${this.clientid}:${this.clientsecret}`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${encoded}`
      })
    };

    console.log('loginBattleNet');

    return this.httpClient.post(
      url,
      {},
      httpOptions,
    ).toPromise();
  }

  private getCommodities(responseAuth) {
    let url = 'https://eu.api.blizzard.com/data/wow/auctions/commodities';
    url += '?namespace=dynamic-eu';
    url += '&locale=fr_FR';
    url += '&access_token=' + responseAuth.access_token;

    console.log('getCommodities');

    return this.httpClient.get(url).toPromise();
  }

  private getAuctions(responseAuth) {
    let url = 'https://eu.api.blizzard.com/data/wow/connected-realm/';
    url += this.chogallConnected + '/auctions';
    url += '?namespace=dynamic-eu';
    url += '&locale=fr_FR';
    url += '&access_token=' + responseAuth.access_token;

    console.log('Avant 3ème requete');

    return this.httpClient.get(url).toPromise();
  }

  private processAuctionsItems(auctionItems) {
    for (const auctionItem of auctionItems) {
      this.processToStore(auctionItem);
    }

    for (const auctionItem in this.store) {
      this.logItem(this.store[auctionItem]);
    }

    console.log(this.store);
  }

  private processToStore(auctionItem) {
    if (!this.store[auctionItem.item.id]) {
      return;
    }

    if (this.store[auctionItem.item.id].context && auctionItem.item.context !== this.store[auctionItem.item.id].context) {
      return;
    }

    if (auctionItem.unit_price &&
      (
        !this.store[auctionItem.item.id].min_price ||
        this.store[auctionItem.item.id].min_price > auctionItem.unit_price
      )
    ) {
      this.store[auctionItem.item.id].min_price = auctionItem.unit_price;
    }

    if (auctionItem.buyout &&
      (
        !this.store[auctionItem.item.id].buyout ||
        this.store[auctionItem.item.id].buyout > auctionItem.buyout
      )
    ) {
      this.store[auctionItem.item.id].min_price = auctionItem.buyout;
    }
  }

  private logItem(auctionItem) {
    if (typeof auctionItem.min_price === 'undefined') {
      return;
    }

    const id = auctionItem.date + '-' + auctionItem.id;

    this.auctionsService.mergeAuctionItem(id, auctionItem);
  }

}
