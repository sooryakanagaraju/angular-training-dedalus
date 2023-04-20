import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactBoxComponent } from './pages/contact/contact-box/contact-box.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { FeedbackBoxComponent } from './pages/feedback/feedback-box/feedback-box.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ContactComponent,
    ContactBoxComponent,
    FeedbackComponent,
    FeedbackBoxComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
