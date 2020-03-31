import { Component, OnInit } from '@angular/core';

declare var dragula: any;
declare var $: any;

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent implements OnInit {
  tab = [
    { checked: false, label: '21 - Toto' },
    { checked: false, label: '10 - Tata' },
    { checked: false, label: '2 - Titi' }
  ];
  add = '';

  ngOnInit() {
    // @TODO replace this with ng-dragula
    dragula([document.getElementById('myList')]);
  }

  removeLine(item: any) {
    let index = 0;
    for (const a of this.tab) {
      if (item.label === a.label) {
        return this.tab.splice(index, 1);
      }
      index++;
    }
  }

  addToList() {
    this.tab.push({ checked: false, label: this.add });
    this.add = '';
  }
}
