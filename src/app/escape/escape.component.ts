import { Component } from '@angular/core';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public cardsClicked = {};
  public escapes = [
    {
      title: 'Unlock',
      slug: 'unlock',
      games: [
        {
          title: 'Le temple de RA',
          slug: 'temple-ra',
          cards: ['init', '55', '24', 'A', 'R', '88', '20', '30', '6', '37', '8', '15', '66', '22', '91', '60', '9', '23', '28', '85', 'B', 'H', '39', '42']
        }, {
          title: 'A la poursuite de cabrakan',
          slug: 'cabrakan',
          cards: ['tuto', 'title', 'init', '6', '10', '12', '15', '18', '20', '24', '26', '30', '35', '38', '43', '46', '54', '59', '60', '75', '85', '95']
        }
      ]
    }
  ];
  public selectedEscape;
  public selectedGame;

  public selectEscape(escape): void {
    this.selectedEscape = escape;
  }

  public selectGame(game): void {
    this.selectedGame = game;
  }

  public cardClicked(card) {
    this.cardsClicked[card] = !this.cardsClicked[card];
  }
}
