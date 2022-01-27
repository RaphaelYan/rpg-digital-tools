import { Component } from '@angular/core';

@Component({
  selector: 'app-dd-spells',
  templateUrl: './dd-spells.component.html',
  styleUrls: ['./dd-spells.component.scss']
})
export class DdSpellsComponent {
  public spells = [
    {
      label: 'Absorption des éléments',
      slug: 'absorption-des-elements',
      link: 'https://www.aidedd.org/dnd/sorts.php?vf=absorption-des-elements',
      tags: ['degats'],
    }, {
      label: 'Agrandissement/Rapetissement',
      slug: 'agrandissement-rapetissement',
      link: 'https://www.aidedd.org/dnd/sorts.php?vf=agrandissement-rapetissement',
      tags: ['trucs de ouf'],
    }, {
      label: 'Aide',
      slug: 'aide',
      link: 'https://www.aidedd.org/dnd/sorts.php?vf=aide',
      tags: ['trucs de ouf', 'degats'],
    }
  ];
}
