export type PreventEvent = 'cut' | 'copy' | 'paste'

export interface NgPreventCutCopyPasteConfig {
  events?: PreventEvent[]
}
