import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-dd-spell',
  templateUrl: './dd-spell.component.html',
  styleUrls: ['./dd-spell.component.scss']
})
export class DdSpellComponent implements OnInit {
  public spell = null;
  private spellDoc: AngularFirestoreDocument<any>;
  private spell$: Observable<any>;
  private user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
  }

  public ngOnInit() {
    const routeParams = this.activatedRoute.snapshot.params;

    if (!routeParams.id) {
      this.router.navigateByUrl('/dd-spells');
      return;
    }

    this.spellDoc = this.afs.doc<any>('dd5-spells/' + routeParams.id);
    this.spell$ = this.spellDoc.snapshotChanges();

    this.spell$.pipe(first()).subscribe((a) => {
      this.spell = a.payload.data();
    });

    this.auth.authState.subscribe((user) => {
      if (!user) {
        return;
      }

      this.user = user;
    });
  }

  public isAdmin(): boolean {
    return this.user && this.user.email === 'maferyt@gmail.com';
  }

  public updateSpell(): void {
    this.afs.doc('dd5-spells/' + this.activatedRoute.snapshot.params.id).update(this.spell);
  }
}
