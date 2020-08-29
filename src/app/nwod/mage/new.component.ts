import { Component } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';

export interface Character {
  name: string;
  userid: string;
  timestamp: number;
}

@Component({
  selector: 'app-nwod-mage-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NwodMageNewComponent {
  public form: any = {
    skillRotes: {},
    merits: {}
  };

  public arrayOfFive: number[] = [1, 2, 3, 4, 5];
  public arrayOfEight: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  public arrayOfTen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public arrayOfFifteen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  public arrayOfTwenty: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  public arrayOfAttributes: string[] = [
    'intelligence',
    'wits',
    'resolve',
    'strength',
    'dexterity',
    'stamina',
    'presence',
    'manipulation',
    'composure',
  ];
  public arrayOfSkills: string[] = [
    'academics',
    'computer',
    'crafts',
    'investigation',
    'medicine',
    'occult',
    'politics',
    'science',
    'athletics',
    'brawl',
    'drive',
    'firearms',
    'larceny',
    'stealth',
    'survival',
    'weaponry',
    'animalken',
    'empathy',
    'expression',
    'intimidation',
    'persuasion',
    'socialize',
    'streetwise',
    'subterfuge'
  ];
  public arrayOfArcanas: string[] = [
    'destin',
    'espace',
    'esprit',
    'forces',
    'matiere',
    'mort',
    'prime',
    'psyche',
    'temps',
    'vie',
  ];

  public debug: boolean = false;
  public displayPrintMode: boolean = false;

  private characterDoc: AngularFirestoreDocument<any>;
  private character: Observable<any>;
  private timeout = null;
  private lastUpdate = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public auth: AngularFireAuth,
    private afs: AngularFirestore,
    private titleService: Title,
  ) {
    this.resetSheet();

    auth.authState.subscribe((user) => {
      if (!user) {

        window.alert('Va sur https://raphaelyan.github.io/rpg-digital-tools et connecte toi !');
        return;
      }

      const routeParams = this.activatedRoute.snapshot.params;

      if (!routeParams.id) {
        this.router.navigateByUrl('/nwod');
        return;
      }

      this.characterDoc = this.afs.doc<any>('characters/' + routeParams.id);
      this.character = this.characterDoc.snapshotChanges();

      this.character.pipe(first()).subscribe((a) => {
        this.form = Object.assign(this.form, a.payload.data());
        this.formChanged();
      });
    });
  }

  public printMode(): void {
    document.getElementsByClassName('login')[0].classList.add('hidden');
    document.getElementsByClassName('link-github')[0].classList.add('hidden');
    document.getElementsByTagName('header')[0].classList.add('hidden');
    document.getElementsByTagName('main')[0].classList.remove('container');

    this.displayPrintMode = true;
    this.debug = false;
  }

  public clickDot(dotName: string, score: number): void {
    if (dotName === 'gnosis' && score === 1 && this.form.gnosis === 1) {
      return;
    }

    if (this.form.favoredAttribute === dotName) {
      if (this.form[dotName] === 1 && score <= 2) {
        return; // Can't be less than 2
      }

      score -= 1;
    }

    if (this.form[dotName] < score) {
      this.form[dotName]++;
    } else {
      this.form[dotName]--;
    }

    this.formChanged();
  }

  public selectChanged(): void {
    if (this.form.path) {
      const composure = ['acanthus', 'moros', 'thyrsus'];
      const resolve = ['mastigos', 'obrimos'];

      if (composure.includes(this.form.path)) {
        this.form.favoredAttribute = 'composure';
      } else if (resolve.includes(this.form.path)) {
        this.form.favoredAttribute = 'resolve';
      }
    }

    if (this.form.order) {
      this.form.skillRotes = {};

      if (this.form.order === 'adamantine_arrow') {
        this.form.skillRotes['athletics'] = true;
        this.form.skillRotes['intimidation'] = true;
        this.form.skillRotes['medicine'] = true;
      } else if (this.form.order === 'free_council') {
        this.form.skillRotes['crafts'] = true;
        this.form.skillRotes['persuasion'] = true;
        this.form.skillRotes['science'] = true;
      } else if (this.form.order === 'guardians_of_the__veil') {
        this.form.skillRotes['investigation'] = true;
        this.form.skillRotes['stealth'] = true;
        this.form.skillRotes['subterfuge'] = true;
      } else if (this.form.order === 'mysterium') {
        this.form.skillRotes['investigation'] = true;
        this.form.skillRotes['occult'] = true;
        this.form.skillRotes['survival'] = true;
      } else if (this.form.order === 'silver_ldder') {
        this.form.skillRotes['expression'] = true;
        this.form.skillRotes['persuasion'] = true;
        this.form.skillRotes['subterfuge'] = true;
      }
    }

    this.formChanged();
  }

  public formChanged(fromReset: boolean = false): void {
    this.form.speed = this.form.strength + this.form.dexterity + 5;
    this.form.initiative = this.form.dexterity + this.form.composure;
    this.form.defense = Math.min(this.form.dexterity, this.form.wits);
    this.form.health = this.form.size + this.form.stamina;
    this.form.willpower = this.form.resolve + this.form.composure + (!!this.form.path ? 1 : 0);
    this.form.mana = this.form.morality;

    let manaPerTurn = this.form.gnosis;
    if (this.form.gnosis === 9) {
      manaPerTurn = 10;
    } else if (this.form.gnosis === 10) {
      manaPerTurn = 15;
    }
    this.form['mana-per-turn'] = manaPerTurn;

    if (!fromReset) {
      this.saveSheet();
    }

    this.titleService.setTitle('Mage - ' + this.form.name);
  }

  public hasManaAccess(score: number): boolean {
    if (this.form.gnosis <= 6) {
      return score <= +this.form.gnosis + 9;
    } else if (this.form.gnosis === 7) {
      return score <= 20;
    } else if (this.form.gnosis === 8) {
      return score <= 30;
    } else if (this.form.gnosis === 9) {
      return score <= 50;
    } else if (this.form.gnosis === 10) {
      return score <= 100;
    }

    return false;
  }

  public eraseSheet(): void {
    if (!window.confirm('Tu es sûr de vouloir tout remettre à 0 ?')) {
      return;
    }

    this.resetSheet();
    this.formChanged(false);
  }

  private resetSheet(): void {
    for (const attribute of this.arrayOfAttributes) {
      this.form[attribute] = 1;
    }
    for (const skill of this.arrayOfSkills) {
      this.form[skill] = 0;
    }
    for (const arcana of this.arrayOfArcanas) {
      this.form[arcana] = 0;
      this.form['arcana-' + arcana] = 0;
    }

    this.form.merits = {};
    for (const nb of this.arrayOfEight) {
      this.form['merits-' + nb] = 0;
    }

    this.form.name = '';
    this.form.player = '';
    this.form.chronicle = '';
    this.form.concept = '';
    this.form.cabal = '';

    this.form['flaw-1'] = '';
    this.form['flaw-2'] = '';
    this.form['flaw-3'] = '';

    this.form.vice = '';
    this.form.virtue = '';
    this.form.path = '';
    this.form.order = '';
    this.form.skillRotes = {};
    this.form.size = 5;
    this.form.morality = 7;
    this.form.gnosis = 1;
    this.form.favoredAttribute = '';

    this.form['experience'] = 0;
    this.form['experience-arcana'] = 0;

    this.formChanged(true);
  }

  private saveSheet(): void {
    if (this.lastUpdate === null || JSON.stringify(this.form) === this.lastUpdate) {
      this.lastUpdate = JSON.stringify(this.form);
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
      clearTimeout(this.timeout);

      const doc = Object.assign(this.form, {
        lastUpdate: Date.now()
      });

      this.characterDoc.update(doc);
    }, 1000);
  }
}
