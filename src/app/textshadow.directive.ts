import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextshadow]'
})
export class TextshadowDirective {
constructor(private elem:ElementRef){
  this.elem.nativeElement.style.textShadow='0 0 10px #FFFFFF, -2px 2px 9px rgba(28,110,164,0)';
}
}
