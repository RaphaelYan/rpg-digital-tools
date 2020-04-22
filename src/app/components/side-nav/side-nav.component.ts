import { Component } from '@angular/core';

// @TODO
// import { AuthService } from '../../common/services';

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
      title: 'D&D 5 Builder',
      url: '/dd-builder'
    }, {
      title: 'D&D 5 Règles custom',
      url: '/dd-rules'
    }, {
      title: 'Init',
      url: '/init'
    }, {
      title: 'Résumés des partie',
      url: '/resumes'
    }, {
      title: 'D&D 5 Probas',
      url: '/proba'
    }, {
      title: 'Escape games',
      url: '/escape'
    }
  ];

  // constructor(private auth: AuthService) {
  // }

  // @TODO
  // public logout() {
  //   this.auth.signOut();
  // }
}
