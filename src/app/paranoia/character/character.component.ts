import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paranoia-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss', './effects.scss']
})
export class ParanoiaCharacterComponent implements OnChanges {
  @Input() public config: any;
  public traitorActive: boolean = false;
  public action1Active: boolean = false;
  public action2Active: boolean = false;
  public action3Active: boolean = false;
  public action4Active: boolean = false;

  public backgroundUrl: string = 'url(https://raphaelyan.github.io/rpg-digital-tools/assets/paranoia/male1.png)';

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.config) {
      const current = changes.config.currentValue;
      const previous = changes.config.previousValue;

      if (!previous || previous.traitor !== current.traitor) {
        this.activeTraitor();
      }

      if (this.config.avatar && (!previous || previous.avatar !== current.avatar)) {
        this.backgroundUrl = `url('${this.config.avatar}')`;
      }


      if (!previous || previous.currentAction !== current.currentAction) {
        this.activeAction(this.config.currentAction);
      }
    }
  }

  activeTraitor() {
    // @TODO TMP ca blink donc on enleve l'effet css
    // this.traitorActive = true;
    // setTimeout(() => {
    //   this.traitorActive = false;
    // }, 5000);
  }

  activeAction(currentAction: number): void {
    this.action1Active = false;
    this.action2Active = false;
    this.action3Active = false;
    this.action4Active = false;

    if (currentAction === 1) {
      this.action1Active = true;
    } else if (currentAction === 2) {
      this.action2Active = true;
    } else if (currentAction === 3) {
      this.action3Active = true;
    } else if (currentAction === 4) {
      this.action4Active = true;
    }
  }
}
