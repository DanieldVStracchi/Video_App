import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Icons } from '../icons/icons';

@Component({
  selector: 'app-custom-buttons',
  imports: [Icons],
  templateUrl: './custom-buttons.html',
  styleUrl: './custom-buttons.css',
})
export class CustomButtons {

  constructor(private sanitizer: DomSanitizer) { }

  @Input() buttonLabel: string = '';
  @Input() color: string = '';
  @Input() icon: string ='';
  @Input() isButton: boolean = false;
  @Input() background: string = '';
  @Input() hasBorders: boolean = false;

  getSvg(buttonLabel: string, color: string, icon: string, isButton: boolean, background: string, hasBorders: boolean): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.defineSvg(buttonLabel, color, icon, isButton, background, hasBorders))
  }

  defineSvg(button: string, color: string, icon: string, isButton: boolean, background: string, hasBorders: boolean): string {
    switch (button) {
      default:
        return `${this.buttonLabel}`
      case 'color':
        return `${this.color}`
      case 'icon':
        return `${Icons}`
      case 'isButton':
        return `${this.isButton}`
      case 'background':
        return `${this.background}`
      case 'hasBorders':
        return `${this.hasBorders}`
    }
  }
}

