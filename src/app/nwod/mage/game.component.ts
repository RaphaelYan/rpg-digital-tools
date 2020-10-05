import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { first } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-nwod-mage-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class NwodMageGameComponent {
  public players: Observable<any>;
  public currentUser: any;
  public text: Observable<any>;
  public currentText: string;
  public staticData = [];

  private currentPlayer: any;
  private currentBox: string[];
  private currentIndex: number;
  private textDoc: AngularFirestoreDocument<any>;

  constructor(
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private titleService: Title,
  ) {
    this.titleService.setTitle('Mage - Partie en cours');

    auth.authState.subscribe((user) => {
      if (!user) {
        window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
        return;
      }

      this.currentUser = user;

      const playersCollection = this.afs.collection('game');
      this.players = playersCollection.valueChanges();
      this.players.pipe(first()).subscribe((a) => {
        this.staticData = a;
      });

      this.textDoc = this.afs.doc<any>('texts/mage-2');
      this.text = this.textDoc.valueChanges();

      this.text.pipe(first()).subscribe((a) => {
        this.currentText = a.text;
      });
    });
  }

  public toggleBox(player: any, box: string[], index: number): void {
    box[index] = box[index] === '' ? 'bg-primary' : '';

    this.afs.doc('game/' + player.id).update(player);
  }

  public openModal(player: any, box: string[], index: number): void {
    this.currentBox = box;
    this.currentIndex = index;
    this.currentPlayer = player;
    $('#staticBackdrop').modal('show');
  }

  public setBox(value: string): void {
    this.currentBox[this.currentIndex] = value;
    this.afs.doc('game/' + this.currentPlayer.id).update(this.currentPlayer);
    $('#staticBackdrop').modal('hide');
  }

  public hasAccessToSheet(player: any): boolean {
    return this.currentUser.uid === player.ownerUid || this.isAdmin();
  }

  public isAdmin(): boolean {
    return this.currentUser && this.currentUser.email === 'maferyt@gmail.com';
  }

  public updateText(text: string): void {
    this.textDoc.update({ text });
  }

  public updatePlayerText(player: any, text: string): void {
    this.afs.doc('game/' + player.id).update({ text});
  }

  public togglePlayer(player): void {
    this.afs.doc('game/' + player.id).update({ displayed: !player.displayed});
  }
}
