import { Component } from '@angular/core';

@Component({
  selector: 'app-resumes',
  templateUrl: './resumes.component.html',
  styleUrls: ['./resumes.component.scss']
})
export class ResumesComponent {
  public resumes = [
    {
      date: '28 Septembre 2019',
      title: ' Les Foudres du Roi-Tonnerre - partie 4',
      pdf: 'assets/resumes/repie/2020-03-28.pdf'
    }, {
      date: '28 Septembre 2019',
      title: ' Les Foudres du Roi-Tonnerre - partie 3',
      pdf: 'assets/resumes/repie/2020-03-25.pdf'
    }, {
      date: '28 Septembre 2019',
      title: ' Les Foudres du Roi-Tonnerre - partie 2',
      pdf: 'assets/resumes/repie/2020-03-21.pdf'
    }, {
      date: '28 Septembre 2019',
      title: ' Les Foudres du Roi-Tonnerre - partie 1',
      pdf: 'assets/resumes/repie/2020-03-19.pdf'
    }, {
      date: '28 Septembre 2019',
      title: 'Le château volant - partie 2',
      pdf: 'assets/resumes/2019-09-28.pdf',
      chars: 'Noelie (8.5), Shinden (8.5), Syccor (8.5), Thibault (8.5), Vador (8.5) : +0.5 niveau'
    }, {
      date: '28 juillet 2019',
      title: 'The game - partie 1',
      chars: 'Jean, Pierre, Thomas, Thomas'
    }, {
      date: '6 Avril 2019',
      title: 'Le château volant - partie 1',
      pdf: 'assets/resumes/2019-04-06.pdf',
      chars: 'Noelie (8), Shinden (8), Syccor (8), Thibault (8), Vador (8), Yann (8) : +0.5 niveau'
    }
  ];
}
