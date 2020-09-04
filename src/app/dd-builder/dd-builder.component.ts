import { Component, AfterViewInit } from '@angular/core';
import {races} from './races';
import {table} from './table';
import {racial} from './racial';

declare var $: any;

@Component({
  selector: 'app-dd-builder',
  templateUrl: './dd-builder.component.html',
  styleUrls: ['./dd-builder.component.scss']
})
export class DdBuilderComponent implements AfterViewInit {
  mode = 'points';
  races = races;
  table = JSON.parse(JSON.stringify((table)));
  points = 27;
  totalMods = -6;
  othersBonus = 0;
  raceWithBonus = false;
  exceptBonus = 0;
  tooltips = {
    str: 'Puissance physique, aptitude athlétique naturelle',
    dex: 'Agilité, réflexes, équilibre',
    con: 'Santé, endurance, force vitale',
    int: 'Acuité mentale, raisonnement, mémoire',
    sag: 'Perception, intuition, perspicacité',
    cha: 'Force de personnalité, éloquence, leadership',
  };

  ngAfterViewInit() {
    let aze = this.mode['aze']['qsd'];
    aze = 42;
    $('#select-race').change(this.onSelectRace.bind(this));
    $('[data-toggle="tooltip"]').tooltip();
  }

  onSelectRace(event: any) {
    this.resetOthersBonus();
    const racialId = event.target.value;
    const bonuses = racial[racialId - 1].bonus;

    for (let i = 0; i < 6; i++) {
      this.table[i].racial = 0;
    }

    for (let i = 0; i < bonuses.length; i++) {
      const bonus: any = bonuses[i];
      if (bonus.others) {
        this.raceWithBonus = true;
        this.othersBonus = bonus.others;
        this.exceptBonus = bonus.except;
      } else {
        this.table[bonus.id - 1].racial = bonus.bonus;
      }
    }

    for (let i = 0; i < 6; i++) {
      this.valueChanged(this.table[i]);
    }
  }

  between(value: any, a: any, b: any) {
    return value >= a && value <= b;
  }

  cost(from: any, to: any) {
    // 8 = 0; 9 = 1; 10 = 2; 11 = 3; 12 = 4; 13 = 5; 14 = 7; 15 = 9
    if (this.between(from, 8, 13) && this.between(to, 8, 13)) {
      return 1;
    } else if (this.between(from, 13, 15) && this.between(to, 13, 15)) {
      return 2;
    }
  }

  add(carac: any) {
    if (this.mode === 'free') {
      carac.score += 1;
      return this.valueChanged(carac);
    }

    if (carac.score >= 15 ) {
      return;
    }

    const cost = this.cost(carac.score, carac.score + 1);
    if (this.points < cost) {
      return;
    }

    this.points -= cost;
    carac.score += 1;
    this.valueChanged(carac);
  }

  remove(carac: any) {
    if (this.mode === 'free') {
      carac.score -= 1;
      return this.valueChanged(carac);
    }

    if (carac.score <= 8) {
      return;
    }

    this.points += this.cost(carac.score, carac.score - 1);
    carac.score -= 1;
    this.valueChanged(carac);
  }

  valueChanged(carac: any) {
    const value = carac.score + carac.racial + carac.bonus;
    carac.value = value;
    carac.mod = Math.floor((value / 2) - 5);
    this.calcTotalMod();
  }

  calcTotalMod() {
    this.totalMods = 0;
    for (let i = 0; i < 6; i++) {
      this.totalMods += this.table[i].mod;
    }
  }

  resetOthersBonus() {
    $('.other-bonus').attr('checked', false);
    this.raceWithBonus = false;
    this.othersBonus = 0;
    this.exceptBonus = 0;
    for (let i = 0; i < 6; i++) {
      this.table[i].bonus = 0;
    }
  }

  chooseBonus(carac: any) {
    if ((carac.bonus === 0) && (this.othersBonus <= 0)) {
      return;
    }

    if (carac.bonus) {
      carac.bonus = 0;
      this.othersBonus += 1;
      this.valueChanged(carac);
    } else {
      carac.bonus = 1;
      this.othersBonus -= 1;
      this.valueChanged(carac);
    }
  }

  public reset(): void {
    this.table = JSON.parse(JSON.stringify((table)));
    this.resetOthersBonus();
    $('#select-race').val('');
  }
}
