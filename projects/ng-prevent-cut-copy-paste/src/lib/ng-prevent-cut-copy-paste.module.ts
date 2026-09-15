import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgPreventCutCopyPasteDirective } from './ng-prevent-cut-copy-paste.directive'
import { NgPreventCutCopyPasteConfig } from './ng-prevent-cut-copy-paste.interfaces'
import { provideNgPreventCutCopyPaste } from './provide-ng-prevent-cut-copy-paste'

/** @deprecated Use `provideNgPreventCutCopyPaste()` instead. Will be removed in a future major version. */
@NgModule({
  imports: [CommonModule, NgPreventCutCopyPasteDirective],
  exports: [NgPreventCutCopyPasteDirective],
})
export class NgPreventCutCopyPasteModule {
  static forRoot(
    config?: NgPreventCutCopyPasteConfig,
  ): ModuleWithProviders<NgPreventCutCopyPasteModule> {
    return {
      ngModule: NgPreventCutCopyPasteModule,
      providers: [provideNgPreventCutCopyPaste(config)],
    }
  }
}
