import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable()
export class AuctionsService {
  constructor(private afs: AngularFirestore) {
  }

  public getStaticData(dateFrom: string = null, dateTo: string = null): Promise<any> {
    return new Promise((resolve) => {
      const collection = this.afs.collection<any>('auctions', (ref) => {
        if (dateFrom && dateTo) {
          return ref.where('date', '>=', dateFrom).where('date', '<=', dateTo);
        }

        if (dateFrom) {
          return ref.where('date', '>=', dateFrom);
        }

        if (dateTo) {
          return ref.where('date', '<=', dateTo);
        }

        return ref;
      });

      const auctions = collection.valueChanges();
      auctions.pipe(first()).subscribe(resolve);
    });
  }

  public mergeAuctionItem(id, auctionItem) {
    this.afs.doc('auctions/' + id).set(auctionItem);
  }
}
