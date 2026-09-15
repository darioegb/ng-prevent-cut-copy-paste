import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core'
import { DEFAULT_CONFIG } from './ng-prevent-cut-copy-paste.constants'
import { NgPreventCutCopyPasteConfig } from './ng-prevent-cut-copy-paste.interfaces'
import { NG_PREVENT_CUT_COPY_PASTE_CONFIG } from './ng-prevent-cut-copy-paste.token'

export function provideNgPreventCutCopyPaste(
  config?: NgPreventCutCopyPasteConfig,
): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: NG_PREVENT_CUT_COPY_PASTE_CONFIG,
      useValue: { ...DEFAULT_CONFIG, ...config },
    },
  ])
}
