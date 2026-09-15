import { ApplicationConfig } from '@angular/core'
import { provideNgPreventCutCopyPaste } from 'ng-prevent-cut-copy-paste'

export const appConfig: ApplicationConfig = {
  providers: [provideNgPreventCutCopyPaste()],
}
