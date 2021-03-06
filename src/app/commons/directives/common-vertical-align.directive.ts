import {Directive, HostListener, ElementRef} from '@angular/core';
import {window} from '@angular/platform-browser/src/facade/browser';

@Directive({
  selector: '[appCommonVerticalAlign]'
})
export class CommonVerticalSetWindowHeightDirective {

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const result = event.target.innerHeight;
    this.elementRef.nativeElement.style.height = result + 'px';
  }

  constructor( private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.height = window.innerHeight + 'px';
  }
}
