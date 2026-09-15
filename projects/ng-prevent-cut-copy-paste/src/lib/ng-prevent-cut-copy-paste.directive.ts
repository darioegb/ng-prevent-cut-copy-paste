import { Directive, inject, input } from '@angular/core'
import { DEFAULT_CONFIG } from './ng-prevent-cut-copy-paste.constants'
import { PreventEvent } from './ng-prevent-cut-copy-paste.interfaces'
import { NG_PREVENT_CUT_COPY_PASTE_CONFIG } from './ng-prevent-cut-copy-paste.token'

@Directive({
  selector: '[ngPreventCutCopyPaste]',
  exportAs: 'ngPreventCutCopyPaste',
  host: {
    '(cut)': 'handleEvent($event)',
    '(copy)': 'handleEvent($event)',
    '(paste)': 'handleEvent($event)',
  },
})
export class NgPreventCutCopyPasteDirective {
  private readonly defaultConfig = inject(NG_PREVENT_CUT_COPY_PASTE_CONFIG, {
    optional: true,
  })

  // Alias avoids colliding with the bare `ngPreventCutCopyPaste` attribute selector.
  readonly events = input<PreventEvent[]>(
    this.defaultConfig?.events ?? DEFAULT_CONFIG.events,
    { alias: 'ngPreventCutCopyPasteEvents' },
  )

  protected handleEvent(event: Event): void {
    if (this.events().includes(event.type as PreventEvent)) {
      event.preventDefault()
    }
  }
}
