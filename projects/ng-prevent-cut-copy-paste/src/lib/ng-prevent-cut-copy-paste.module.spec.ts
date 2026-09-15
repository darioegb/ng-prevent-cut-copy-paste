import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import {
  NgPreventCutCopyPasteDirective,
  NgPreventCutCopyPasteModule,
} from '../public-api'

@Component({
  template: `<input ngPreventCutCopyPaste />`,
  imports: [NgPreventCutCopyPasteDirective],
})
class HostComponent {}

describe('NgPreventCutCopyPasteModule (deprecated)', () => {
  it('should apply the config passed to forRoot()', async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [
        NgPreventCutCopyPasteModule.forRoot({ events: ['paste'] }).providers!,
      ],
    }).compileComponents()

    const fixture = TestBed.createComponent(HostComponent)
    fixture.detectChanges()
    const input = (fixture.nativeElement as HTMLElement).querySelector(
      'input',
    ) as HTMLInputElement

    const cutEvent = new Event('cut', { cancelable: true })
    input.dispatchEvent(cutEvent)
    const pasteEvent = new Event('paste', { cancelable: true })
    input.dispatchEvent(pasteEvent)

    expect(cutEvent.defaultPrevented).toBe(false)
    expect(pasteEvent.defaultPrevented).toBe(true)
  })
})
