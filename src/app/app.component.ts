import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public menus = [
    {
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
    }
  ];

  public ngOnInit() {
    $('[data-toggle="tooltip"]').tooltip();
  }
}
