import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ParanoiaService {
  public paranoiaLogs: Observable<any[]>;
  private paranoiaLogsCollection: AngularFirestoreCollection<any>;

  constructor(
    private afs: AngularFirestore,
  ) {
  }

  public initParanoiaLogs(): void {
    this.paranoiaLogsCollection = this.afs.collection<any>('paranoia-logs', (ref) => {
      return ref.orderBy('timestamp', 'desc').limit(20);
    });

    this.paranoiaLogs = this.paranoiaLogsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as any;
        const id = a.payload.doc.id;
        const date = new Date(data['timestamp']);

        const timestampStr = date.getDate() + '/' + (1 + date.getMonth()) + ' ' + date.getHours() + ':' + date.getMinutes();
        return { id, timestampStr, ...data };
      }))
    );
  }

  public addParanoiaLog(wording: string, user: any): void {
    this.paranoiaLogsCollection.add({
      uid: user.uid,
      timestamp: Date.now(),
      wording: wording,
    });
  }

  public transformToAccreditationColor(wording: string, levelNumber: number): string {
    const levelLetter = this.getLevelLetterFromNumber(levelNumber);
    return `<span class="text-level-${levelLetter}">${wording}</span>`;
  }

  private getLevelLetterFromNumber(levelNumber: number): string {
    const levels = ['R', 'O', 'J', 'V', 'B', 'I'];
    return levels[levelNumber - 1];
  }
}
