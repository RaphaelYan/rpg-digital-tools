import { Component } from '@angular/core';

@Component({
  selector: 'app-escape',
  templateUrl: './escape.component.html',
  styleUrls: ['./escape.component.scss']
})
export class EscapeComponent {
  public cardsClicked = {};
  public cardsTrashed = {};
  public selectedGame = null;
  public currentZoom = null;
  public games = [
    {
      title: 'La 5ème avenue',
      slug: 'avenue',
      difficulty: 1,
      cards: ['tuto', 'init', '8', '11', '15', '22', '25', '30', '37', '42', '43', '44', '52', '58', '66', '73', '86', '88', '92', 'C', 'F', 'G', 'H', 'R', 'V', 'W']
    // Celui là n'est pas super en ligne :
    // }, {
    //   title: 'Le donjon de Doo-Arann',
    //   slug: 'donjon-doo-arann',
    //   difficulty: 2,
    //   cards: ['intro', 'init', '18', '21', '22', '24', '29', '31', '39', '43', '46', '48', '50', '60', '64', '68', '73', '78', '82', '84', '88', '92', '94']
    }, {
      title: 'L\'élite',
      slug: 'elite',
      difficulty: 2,
      cards: ['init', '4', '15', '21', '22', '32', '35', '42', '47', '50', '60', '63', '67', '73', '79', '80', '85', 'C', 'K', 'M']
    }, {
      title: 'A la poursuite de cabrakan',
      slug: 'cabrakan',
      difficulty: 2,
      cards: ['tuto', 'title', 'init', '6', '10', '12', '15', '18', '20', '24', '26', '30', '35', '38', '43', '46', '54', '59', '60', '75', '85', '95']
    }, {
      title: 'Le temple de RA',
      slug: 'temple-ra',
      difficulty: 3,
      cards: ['init', '6', '8', '9', '15', '20', '22', '23', '24', '28', '30', '37', '39', '42', '55', '60', '66', '85', '88', '91', 'A', 'B', 'H', 'R']
    }
  ];

  constructor() {
    try {
      const selectedGameSlug = localStorage.getItem('escape.selectedGame');
      if (selectedGameSlug) {
        const find = this.games.find((game) => game.slug === selectedGameSlug);
        if (find) {
          this.selectedGame = find;
          this.retriedStoredCard();
        }
      }
    } catch {}
  }

  public selectGame(game: any): void {
    this.selectedGame = game;
    localStorage.setItem('escape.selectedGame', game.slug);

    this.retriedStoredCard();
  }

  public cardClicked(card: any) {
    this.cardsClicked[card] = !this.cardsClicked[card];
    localStorage.setItem('escape.cardsClicked.' + this.selectedGame.slug, JSON.stringify(this.cardsClicked));
  }

  public cardTrashed(card: any) {
    this.cardsTrashed[card] = !this.cardsTrashed[card];
    localStorage.setItem('escape.cardsTrashed.' + this.selectedGame.slug, JSON.stringify(this.cardsTrashed));
  }

  private retriedStoredCard() {
    const cardsClicked = localStorage.getItem('escape.cardsClicked.' + this.selectedGame.slug);
    if (cardsClicked) {
      try { this.cardsClicked = JSON.parse(cardsClicked); } catch {}
    } else {
      this.cardsClicked = {};
    }

    const cardsTrashed = localStorage.getItem('escape.cardsTrashed.' + this.selectedGame.slug);
    if (cardsTrashed) {
      try { this.cardsTrashed = JSON.parse(cardsTrashed); } catch {}
    } else {
      this.cardsClicked = {};
    }
  }
}
