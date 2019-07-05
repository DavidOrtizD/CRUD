import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { app_routing } from './app.router';
//import { HeroDataPipe } from './pipes/hero-data.pipe';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    app_routing
    //HeroDataPipe
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
