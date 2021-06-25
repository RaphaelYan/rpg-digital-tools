import { Component, Input } from '@angular/core';

// Usage :
// <app-paranoia-modal [id]="''" [title]="''"">
// </app-paranoia-modal>

@Component({
  selector: 'app-paranoia-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ParanoiaModalComponent {
  @Input() id: string;
  @Input() title: string;
  @Input() addClass: string;
  @Input() showClose: boolean = true;
}
