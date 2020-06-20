import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Character {
  name: string;
  userid: string;
  timestamp: number;
}

@Component({
  selector: 'app-nwod',
  templateUrl: './nwod.component.html',
  styleUrls: ['./nwod.component.scss']
})
export class NwodComponent {
  public characters: Observable<Character[]>;

  private user: any;
  private charactersCollection: AngularFirestoreCollection<Character>;

  constructor(
    public auth: AngularFireAuth,
    afs: AngularFirestore,
  ) {
    auth.authState.subscribe((user) => {
      if (!user) {
        return;
      }

      this.user = user;

      this.charactersCollection = afs.collection<Character>('characters', (ref) => {
        return ref.where('userid', '==', user.uid)
          .orderBy('timestamp', 'asc');
      });
      this.characters = this.charactersCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Character;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    });
  }

  public createMage(): void {
    this.charactersCollection.add({
      name: 'Personnage sans nom',
      userid: this.user.uid,
      timestamp: Date.now()
    });
  }
}
