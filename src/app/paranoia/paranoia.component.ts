import { Component, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-paranoia',
  templateUrl: './paranoia.component.html',
  styleUrls: ['./paranoia.component.scss']
})
export class ParanoiaComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.initEyes();
  }

  private initEyes(): void {
    $('body').mousemove((event: any) => {
      const eyes = $('.eye');

      if (!eyes || !eyes.length) {
        return;
      }

      eyes.each((_: number, element: any) => {
        const eye = $(element);
        const x = (eye.offset().left) + (eye.width() / 2);
        const y = (eye.offset().top) + (eye.height() / 2);
        const rad = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (rad * (180 / Math.PI) * -1) + 180;
        eye.css({
          '-webkit-transform': 'rotate(' + rot + 'deg)',
          '-moz-transform': 'rotate(' + rot + 'deg)',
          '-ms-transform': 'rotate(' + rot + 'deg)',
          'transform': 'rotate(' + rot + 'deg)'
        });
      });
    });
  }
}
