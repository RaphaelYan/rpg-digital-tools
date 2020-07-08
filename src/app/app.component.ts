import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router, NavigationEnd, Event } from '@angular/router';

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
  private trackInit: boolean = false;

  constructor(
    public angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
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

      this.logUserAction();
      this.trackRouteChange();
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

  private trackRouteChange(): void {
    if (this.trackInit) {
      return;
    }
    this.trackInit = true;

    this.router.events.subscribe((event: Event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }

      this.logUserAction();
    });
  }

  private logUserAction(): void {
    if (!this.user || this.isAdmin()) {
      return;
    }

    this.logsCollection.add({
      uid: this.user.uid,
      email: this.user.email,
      displayName: this.user.displayName,
      photoURL: this.user.photoURL,
      timestamp: Date.now(),
      url: location.pathname
    });
  }
}
