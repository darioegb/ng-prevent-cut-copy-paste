import { Component } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NgPreventCutCopyPasteDirective } from '../public-api'

@Component({
  template: `<input ngPreventCutCopyPaste />`,
  imports: [NgPreventCutCopyPasteDirective],
})
class DefaultHostComponent {}

@Component({
  template: `<input
    ngPreventCutCopyPaste
    [ngPreventCutCopyPasteEvents]="['paste']"
  />`,
  imports: [NgPreventCutCopyPasteDirective],
})
class CustomEventsHostComponent {}

function dispatch(input: HTMLInputElement, eventName: string): Event {
  const event = new Event(eventName, { cancelable: true })
  input.dispatchEvent(event)
  return event
}

describe('NgPreventCutCopyPasteDirective', () => {
  it('should create', async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultHostComponent],
    }).compileComponents()

    const fixture: ComponentFixture<DefaultHostComponent> =
      TestBed.createComponent(DefaultHostComponent)
    fixture.detectChanges()

    expect(fixture.componentInstance).toBeTruthy()
  })

  for (const eventName of ['cut', 'copy', 'paste']) {
    it(`should prevent ${eventName} by default`, async () => {
      await TestBed.configureTestingModule({
        imports: [DefaultHostComponent],
      }).compileComponents()

      const fixture = TestBed.createComponent(DefaultHostComponent)
      fixture.detectChanges()
      const input = (fixture.nativeElement as HTMLElement).querySelector(
        'input',
      ) as HTMLInputElement

      const event = dispatch(input, eventName)

      expect(event.defaultPrevented).toBe(true)
    })
  }

  it('should only prevent the events passed to ngPreventCutCopyPasteEvents', async () => {
    await TestBed.configureTestingModule({
      imports: [CustomEventsHostComponent],
    }).compileComponents()

    const fixture = TestBed.createComponent(CustomEventsHostComponent)
    fixture.detectChanges()
    const input = (fixture.nativeElement as HTMLElement).querySelector(
      'input',
    ) as HTMLInputElement

    expect(dispatch(input, 'cut').defaultPrevented).toBe(false)
    expect(dispatch(input, 'copy').defaultPrevented).toBe(false)
    expect(dispatch(input, 'paste').defaultPrevented).toBe(true)
  })
})
