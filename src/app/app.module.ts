import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CascadeModule } from './cascade/cascade.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CascadeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
