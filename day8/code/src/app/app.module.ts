import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpnoteComponent } from './helpnote/helpnote.component';
import { AppdataComponent } from './appdata/appdata.component';
import { BottonContainerComponent } from './botton-container/botton-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpnoteComponent,
    AppdataComponent,
    BottonContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
