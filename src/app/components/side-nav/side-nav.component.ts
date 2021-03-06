import { Component } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  styleUrls: [ './side-nav.component.scss' ],
  templateUrl: './side-nav.component.html'
})
export class SideNavComponent {
  public toggleSideMenu = false;
  public menus = [
    {
      title: 'Accueil',
      url: ''
    }, {
      separator: true
    }, {
      title: 'D&D 5 - Builder',
      url: '/dd-builder'
    }, {
      title: 'D&D 5 - Règles custom',
      url: '/dd-rules'
    }, {
      title: 'D&D 5 - Init',
      url: '/init'
    }, {
      title: 'D&D 5 - Probas',
      url: '/proba'
    }, {
      title: 'D&D 5 - Spells',
      url: '/dd-spells'
    }, {
      separator: true
    }, {
      title: 'Chronicles of Darkness',
      url: '/nwod'
    }, {
      separator: true
    }, {
      title: 'Résumés des parties',
      url: '/resumes'
    }, {
      separator: true
    }, {
      title: 'Escape games',
      url: '/escape'
    }, {
      separator: true
    }, {
      title: 'WOW Auctions',
      url: '/auctions'
    }
  ];

  public hideMenu(): void {
    this.toggleSideMenu = false;
  }
}
