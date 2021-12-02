import { Directive, ElementRef } from '@angular/core';

// attribute directive 

@Directive({
  selector: '[appServercolor]'
})
export class ServercolorDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'orange';
  }

}