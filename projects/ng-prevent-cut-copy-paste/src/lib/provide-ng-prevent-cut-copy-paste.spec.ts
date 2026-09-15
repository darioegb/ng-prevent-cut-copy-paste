import { Component } from '@angular/core'
import { TestBed } from '@angular/core/testing'
import {
  NgPreventCutCopyPasteDirective,
  provideNgPreventCutCopyPaste,
} from '../public-api'

@Component({
  template: `<input ngPreventCutCopyPaste />`,
  imports: [NgPreventCutCopyPasteDirective],
})
class HostComponent {}

describe('provideNgPreventCutCopyPaste', () => {
  it('should apply the provided default events when no per-instance override is set', async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent],
      providers: [provideNgPreventCutCopyPaste({ events: ['paste'] })],
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
