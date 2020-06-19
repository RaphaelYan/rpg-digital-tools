import { Component } from '@angular/core';

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

  public arrayOfCharacter: string[] = [
    'name',
    'player',
    'chronicle',
    'concept',
    'cabal',
  ];
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

  constructor() {
    this.resetSheet();

    if (localStorage.getItem('sheet-mage')) {
      const values = JSON.parse(localStorage.getItem('sheet-mage'));
      this.form = Object.assign(this.form, values);
      this.formChanged();
    }
  }

  public clickDot(dotName: string, score: number): void {
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
    this.form.willpower = this.form.resolve + this.form.composure;
    this.form.mana = this.form.morality;

    if (!fromReset) {
      const values = JSON.stringify(this.form);
      localStorage.setItem('sheet-mage', values);
    }
  }

  public eraseSheet(): void {
    this.resetSheet();
    this.formChanged(false);
  }

  private resetSheet(): void {
    for (const item of this.arrayOfCharacter) {
      this.form[item] = '';
    }
    for (const attribute of this.arrayOfAttributes) {
      this.form[attribute] = 1;
    }
    for (const skill of this.arrayOfSkills) {
      this.form[skill] = 0;
    }
    for (const arcana of this.arrayOfArcanas) {
      this.form[arcana] = 0;
    }

    this.form.merits = {};
    for (const nb of this.arrayOfEight) {
      this.form['merits-' + nb] = 0;
    }

    this.form.vice = '';
    this.form.virtue = '';
    this.form.path = '';
    this.form.order = '';
    this.form.skillRotes = {};
    this.form.size = 5;
    this.form.morality = 7;
    this.form.gnosis = 1;
    this.form.favoredAttribute = '';

    this.formChanged(true);
  }
}
