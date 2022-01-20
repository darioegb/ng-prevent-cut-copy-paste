# NgPreventCutCopyPaste

## Features
 - This directive allows  to prevent to cut, copy and paste values from input.

## Dependencies
Latest version available for each version of Angular

| ng-prevent-cut-copy-paste | Angular        |
|---------------------------|----------------|
| 1.1.1                     | 13.x 12.x 11.x |
| 1.1.0                     | 13.x 12.x 11.x |
| 1.0.0                     | 9.x 8.x 7.x    |

## Install

```bash
  npm install ng-prevent-cut-copy-paste --save
```

## Setup

Add NgPreventCutCopyPasteModule to appModule, make sure you have configured ngx-translate as well

```typescript
  import { BrowserModule } from '@angular/platform-browser';
  import { NgPreventCutCopyPasteModule } from 'ngx-error-message';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      NgPreventCutCopyPasteModule //NgPreventCutCopyPasteModule added
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  class MainModule {}
```

## Use

After configuration you can used the directive as follow example
```html
  <input type="password" formControlName="password" placeholder="Password" class="form-control" ngPreventCutCopyPaste>
```

## License

MIT

---

> GitLab [@darioegb](https://gitlab.com/darioegb) &nbsp;&middot;&nbsp;