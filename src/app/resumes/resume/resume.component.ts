import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  public currentUser: any;
  public text: Observable<any>;
  public currentText: string;

  private textDoc: AngularFirestoreDocument<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
    auth.authState.subscribe((user) => {
      if (!user) {
        window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
        return;
      }

      this.currentUser = user;

      const routeParams = this.activatedRoute.snapshot.params;

      if (!routeParams.id) {
        return;
      }

      this.textDoc = this.afs.doc<any>(`resumes/${routeParams.id}`);
      this.text = this.textDoc.valueChanges();

      this.text.pipe(first()).subscribe((a) => {
        if (a) {
          this.currentText = a.text;
        }
      });
    });
  }

  public isAdmin(): boolean {
    return this.currentUser && this.currentUser.email === 'maferyt@gmail.com';
  }

  public updateText(text: string): void {
    this.textDoc.update({ text });
  }
}
