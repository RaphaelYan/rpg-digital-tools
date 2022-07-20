import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dd-spells',
  templateUrl: './dd-spells.component.html',
  styleUrls: ['./dd-spells.component.scss']
})
export class DdSpellsComponent implements OnInit {
  private spellsCollection: AngularFirestoreCollection<any>;
  public spells: Observable<any[]>;
  public spellForm: any = {};
  public user: any;
  public fetched: boolean = false;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
  }

  public ngOnInit() {
    this.resetSpellForm();
    this.angularFireAuth.authState.subscribe((user) => {
      this.fetched = true;
      if (!user) {
        return;
      }

      this.user = user;

      this.spellsCollection = this.afs.collection<any>('dd5-spells', (ref) => {
        return ref.orderBy('name', 'asc');
      });

      this.spells = this.spellsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
    });
  }

  public addSpell(): void {
    this.spellsCollection.add({
      author_uid: this.user.uid,
      author_name: this.user.displayName,
      created_at: Date.now(),
      ...this.spellForm,
    });

    this.resetSpellForm();
  }

  private resetSpellForm(): void {
    this.spellForm = {
      name: '',
      description: '',
      description_short: '',
      higher_level: '',
      range: '',
      components: '',
      ritual: false,
      duration: '',
      concentration: false,
      casting_time: '',
      level: 1,
      school: '',
      classes: '',
      source: '',
      tags: [],
    };
  }
}
