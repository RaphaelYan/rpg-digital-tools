import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private logsCollection: AngularFirestoreCollection<any>;
  public logs: Observable<any[]>;
  private user: any;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
  }

  public ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();

    this.angularFireAuth.authState.subscribe((user) => {
      if (!user) {
        return;
      }

      this.user = user;

      this.logsCollection = this.afs.collection<any>('logs', (ref) => {
        return ref.orderBy('timestamp', 'desc');
      });
      this.logs = this.logsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as any;
          const id = a.payload.doc.id;
          const date = new Date(data['timestamp']);

          const timestampStr = date.getDate() + '/' + (1 + date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes();
          return { id, timestampStr, ...data };
        }))
      );

      this.logsCollection.add({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        timestamp: Date.now()
      });
    });
  }

  public login(): void {
    this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout(): void {
    this.angularFireAuth.signOut();
  }

  public isAdmin(): boolean {
    return this.user && this.user.email === 'maferyt@gmail.com';
  }
}
