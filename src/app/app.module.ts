import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { ResponsiveComponent } from './responsive/responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
