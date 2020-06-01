import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgPreventCutCopyPasteModule } from 'projects/ng-prevent-cut-copy-paste/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgPreventCutCopyPasteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
