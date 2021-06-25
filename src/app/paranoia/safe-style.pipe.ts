import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeStyle',
})
export class SafeStylePipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  public transform(value: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}
