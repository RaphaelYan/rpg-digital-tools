import { Component } from '@angular/core';

@Component({
  selector: 'app-nwod-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NwodNewComponent {
  public form: any = {};

  public arrayOfCharacter: string[] = [
    'name',
    'age',
    'player',
    'concept',
    'virtue',
    'vice',
    'chronicle',
    'faction',
    'groupname',
  ];
  public arrayOfFive: number[] = [1, 2, 3, 4, 5];
  public arrayOfTen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public arrayOfTwelve: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
  public arrayOfTraits: string[] = [
    'size',
    'speed',
    'initiative',
    'defense',
    'armor'
  ];
  public arrayOfStats: string[] = [
    'health',
    'willpower',
    'morality'
  ];

  public debug: boolean = false; // @TODO TMP

  constructor() {
    this.resetSheet();
  }

  public clickDot(dotName: string, score: number): void {
    if (this.form[dotName] < score) {
      this.form[dotName]++;
    } else {
      this.form[dotName]--;
    }

    this.formChanged(dotName);
  }

  public formChanged(fieldName: string): void {

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

    this.form.size = 5;
    this.form.speed = 0;
    this.form.initiative = 0;
    this.form.defense = 0;
    this.form.armor = 0;

    this.form.health = 0;
    this.form.willpower = 0;
    this.form.morality = 7;
  }
}
