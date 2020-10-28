import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Injectable()
export class AuctionsService {
  private auctionsCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.auctionsCollection = this.afs.collection<any>('auctions');
  }

  public getStaticData(): Promise<any> {
    return new Promise((resolve) => {
      const auctions = this.auctionsCollection.valueChanges();
      auctions.pipe(first()).subscribe(resolve);
    });
  }
}
