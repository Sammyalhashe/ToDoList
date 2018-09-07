import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailValidatorDirective {
  emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  constructor(private elr: ElementRef, private renderer: Renderer2) {}

  @Input()
  set appEmail(emailArr: string[]) {
    const email = emailArr[0];
    const password = emailArr[1];
    if (
      (!this.emailRegex.test(email) &&
        !(email === '') &&
        !(email === undefined)) ||
      password === '' ||
      password === undefined
    ) {
      // this.elr.nativeElement.style.border = 'red solid 2px';
      this.renderer.setStyle(this.elr.nativeElement, 'border-color', '#ff3300');
      this.renderer.addClass(this.elr.nativeElement, 'content-before');
    } else {
      this.renderer.removeStyle(this.elr.nativeElement, 'border-color');
      this.renderer.removeClass(this.elr.nativeElement, 'content-before');
    }
  }
}
