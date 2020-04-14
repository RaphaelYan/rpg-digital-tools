import { Component } from '@angular/core';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public cardsClicked = {};
  public selectedGame = null;
  public games = [
    {
      title: 'Le temple de RA',
      slug: 'temple-ra',
      difficulty: 3,
      cards: ['init', '55', '24', 'A', 'R', '88', '20', '30', '6', '37', '8', '15', '66', '22', '91', '60', '9', '23', '28', '85', 'B', 'H', '39', '42']
    }, {
      title: 'A la poursuite de cabrakan',
      slug: 'cabrakan',
      difficulty: 2,
      cards: ['tuto', 'title', 'init', '6', '10', '12', '15', '18', '20', '24', '26', '30', '35', '38', '43', '46', '54', '59', '60', '75', '85', '95']
    }
  ];

  constructor() {
    try {
      const selectedGameSlug = localStorage.getItem('escape.selectedGame');
      if (selectedGameSlug) {
        const find = this.games.find((game) => game.slug === selectedGameSlug);
        if (find) {
          this.selectedGame = find;
          const cardsClicked = localStorage.getItem('escape.cardsClicked.' + this.selectedGame.slug);
          if (cardsClicked) {
            this.cardsClicked = JSON.parse(cardsClicked);
          }
        }
      }
    } catch {}
  }

  public selectGame(game: any): void {
    this.selectedGame = game;
    localStorage.setItem('escape.selectedGame', game.slug);

    const cardsClicked = localStorage.getItem('escape.cardsClicked.' + this.selectedGame.slug);
    if (cardsClicked) {
      this.cardsClicked = JSON.parse(cardsClicked);
    } else {
      this.cardsClicked = {};
    }
  }

  public cardClicked(card: any) {
    this.cardsClicked[card] = !this.cardsClicked[card];
    localStorage.setItem('escape.cardsClicked.' + this.selectedGame.slug, JSON.stringify(this.cardsClicked));
  }
}
