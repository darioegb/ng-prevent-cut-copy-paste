import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngPreventCutCopyPaste]'
})
export class NgPreventCutCopyPasteDirective {

  private events = ['cut', 'copy', 'paste']; 

  constructor(
    el: ElementRef,
     renderer: Renderer2) {
    this.events.forEach(e => renderer.listen(el.nativeElement, e, (event) => event.preventDefault()));
  }

}
