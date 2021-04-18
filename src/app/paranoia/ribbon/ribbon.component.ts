import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paranoia-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class ParanoiaRibbonComponent {
  @Input() width: string;
}
