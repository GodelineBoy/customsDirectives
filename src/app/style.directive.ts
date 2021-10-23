import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  @HostBinding('style.color') myColor:string | undefined;
  @HostBinding('style.fontSize') myFontSize:string | undefined;

  constructor() {}

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event) {
    this.myColor = 'red';
    this.myFontSize = '20px';
  }

  @HostListener('mouseleave') mouseleaveEvent (eventData:Event) {
    this.myColor = 'black';
    this.myFontSize = '10px';
  }
}
