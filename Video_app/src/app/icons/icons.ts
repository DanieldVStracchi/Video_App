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
  @Input() background: boolean = false;

  getSvg(icon: string, color: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.defineSvg(icon, color))
  }

  defineSvg(icon: string, color: string): string {
    switch (icon) {
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`
      
      case 'info':
         return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-info-icon lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`

      case 'close':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`

      case 'delete':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="24" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`

      case 'search':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>`
      case 'confirm':
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${this.width}" height="${this.width}" viewBox="0 0 24 24" fill="none" stroke="${this.color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>`
    }
  }

}


//pass parameter of search, focus on it
//slowly add more parameters to make it work on all the rest of the buttons