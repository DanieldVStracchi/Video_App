import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icons',
  imports: [],
  templateUrl: './icons.html',
  styleUrl: './icons.css',
})

export class Icons {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() icon: string = '';
  @Input() color: string = 'blue';
  @Input() width: string = '24';

  getSvg(icon: string, color: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.defineSvg(icon, color))
  }

  defineSvg(icon: string, color: string): string {
    switch (icon) {
      case 'delete':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`
    }
  }

}
