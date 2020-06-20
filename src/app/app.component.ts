import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public angularFireAuth: AngularFireAuth) {
  }

  public ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }

  public login(): void {
    this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  public logout(): void {
    this.angularFireAuth.signOut();
  }
}
