import { NgModule } from '@angular/core';
import { NgPreventCutCopyPasteDirective } from './ng-prevent-cut-copy-paste.directive';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgPreventCutCopyPasteDirective],
  imports: [CommonModule],
  exports: [NgPreventCutCopyPasteDirective]
})
export class NgPreventCutCopyPasteModule { }
