import { InjectionToken } from '@angular/core'
import { NgPreventCutCopyPasteConfig } from './ng-prevent-cut-copy-paste.interfaces'

export const NG_PREVENT_CUT_COPY_PASTE_CONFIG = new InjectionToken<
  Required<NgPreventCutCopyPasteConfig>
>('NG_PREVENT_CUT_COPY_PASTE_CONFIG')
