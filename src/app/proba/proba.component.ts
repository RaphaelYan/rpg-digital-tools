import { Component } from '@angular/core';

@Component({
  selector: 'app-proba',
  templateUrl: './proba.component.html',
  styleUrls: ['./proba.component.scss']
})
export class ProbaComponent {
  public playerFrom = -1;
  public playerTo = 9;
  public dcFrom = 5;
  public dcTo = 20;
  public tableNormal = [];
  public tableAdvantage = [];
  public tableDisadvantage = [];

  constructor() {
    this.updateTables();
  }

  public updateTables() {
    this.tableNormal = [];
    this.tableAdvantage = [];
    this.tableDisadvantage = [];

    setTimeout(() => {
      this.tableNormal = this.buildTable();
      this.tableAdvantage = this.buildTable('advantage');
      this.tableDisadvantage = this.buildTable('disadvantage');
    });
  }

  private buildTable(advantage = null) {
    const data: any = {
      head: [{
        label: 'you \\ DC'
      }],
      body: []
    };

    for (let x = this.dcFrom; x <= this.dcTo; x++) {
      data.head.push({
        label: x
      });
    }

    for (let y = this.playerFrom; y <= this.playerTo; y++) {
      const line: any = [{
        label: y
      }];
      for (let x = this.dcFrom; x <= this.dcTo; x++) {
        line.push({
          label: this.calcProba(y, x, advantage)
        });
      }
      data.body.push(line);
    }
    return data;
  }

  private calcProba(you, dc, advantage) {
    const mult = 1000;
    const res = this.makeRolls(100 * mult, you, dc, advantage);
    const nb: any = res / mult;
    if (nb === 100 || nb === 0) {
      return '';
    }

    return parseFloat(nb).toFixed(1) + '%';
  }

  private makeRolls(nbRoll, mod, dc, advantage) {
    let total = 0;
    for (let i = 0; i < nbRoll; i++) {
      let res = 0;
      if (advantage === 'advantage') {
        const res1 = this.rand(1, 20);
        const res2 = this.rand(1, 20);
        res = res1 > res2 ? res1 : res2;
      } else if (advantage === 'disadvantage') {
        const res1 = this.rand(1, 20);
        const res2 = this.rand(1, 20);
        res = res1 > res2 ? res2 : res1;
      } else {
        res = this.rand(1, 20);
      }
      res += mod;
      if (res > dc) {
        total++;
      }
    }
    return total;
  }

  private rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
