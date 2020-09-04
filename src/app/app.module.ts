import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { AngularFireModule } from '@angular/fire';

import { HttpClientModule } from '@angular/common/http';

import { SentryErrorHandler, initSentry } from './sentry';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: SentryErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    initSentry();
  }
}
