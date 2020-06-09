import { Component } from '@angular/core';

@Component({
  selector: 'app-nwod-mage-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NwodMageNewComponent {
  public form: any = {};

  public arrayOfCharacter: string[] = [
    'name',
    'player',
    'chronicle',
    'concept',
    'virtue',
    'vice',
    'path',
    'order',
    'cabal',
  ];
  public arrayOfFive: number[] = [1, 2, 3, 4, 5];
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
    'medecine',
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

  public debug: boolean = true; // @TODO TMP

  constructor() {
    this.resetSheet();
  }

  public clickDot(dotName: string, score: number): void {
    if (this.form[dotName] < score) {
      this.form[dotName]++;
    } else {
      this.form[dotName]--;
    }

    this.formChanged();
  }

  public formChanged(): void {
    this.form.speed = this.form.strength + this.form.dexterity + 5;
    this.form.initiative = this.form.dexterity + this.form.composure;
    this.form.defense = Math.min(this.form.dexterity, this.form.wits);
    this.form.health = this.form.size + this.form.stamina;
    this.form.willpower = this.form.resolve + this.form.composure;
    this.form.mana = this.form.morality;
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

    this.form.skillRotes = {};
    this.form.size = 5;
    this.form.morality = 7;
    this.form.gnosis = 1;

    this.formChanged();
  }
}
