# NgPreventCutCopyPaste

## Features

- Directive that prevents cut, copy and paste on an input.
- Choose which events to block per element, or set a default for the whole app via a provider.

## Dependencies

Latest version available for each version of Angular

| ng-prevent-cut-copy-paste | Angular        |
| ------------------------- | -------------- |
| 2.0.0                     | >=20.0.0       |
| 1.1.2                     | 16.x to 19.x   |
| 1.1.1                     | 13.x 12.x 11.x |
| 1.1.0                     | 13.x 12.x 11.x |
| 1.0.0                     | 9.x 8.x 7.x    |

## Install

```bash
  npm install ng-prevent-cut-copy-paste --save
```

## Setup

Register the default configuration once, in `app.config.ts` (or `main.ts`):

```typescript
import { ApplicationConfig } from '@angular/core'
import { provideNgPreventCutCopyPaste } from 'ng-prevent-cut-copy-paste'

export const appConfig: ApplicationConfig = {
  providers: [provideNgPreventCutCopyPaste()],
}
```

The directive is standalone, so import it directly wherever you use it:

```typescript
import { NgPreventCutCopyPasteDirective } from 'ng-prevent-cut-copy-paste'

@Component({
  imports: [NgPreventCutCopyPasteDirective],
  // ...
})
export class LoginFormComponent {}
```

> `NgPreventCutCopyPasteModule` (with a `forRoot(config?)` method) is still available but **deprecated**; use `provideNgPreventCutCopyPaste()` instead.

## Use

After configuration you can used the directive as follow example

```html
<input
  type="password"
  formControlName="password"
  placeholder="Password"
  class="form-control"
  ngPreventCutCopyPaste
/>
```

By default all three events (`cut`, `copy`, `paste`) are blocked. Override them per element:

```html
<input ngPreventCutCopyPaste [ngPreventCutCopyPasteEvents]="['paste']" />
```

Or set an app-wide default via the provider:

```typescript
provideNgPreventCutCopyPaste({ events: ['paste'] })
```

## License

MIT

---

> GitHub [@darioegb](https://github.com/darioegb) &nbsp;&middot;&nbsp;
