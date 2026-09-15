import { NgPreventCutCopyPasteConfig } from './ng-prevent-cut-copy-paste.interfaces'

export const DEFAULT_CONFIG: Required<NgPreventCutCopyPasteConfig> = {
  events: ['cut', 'copy', 'paste'],
}
