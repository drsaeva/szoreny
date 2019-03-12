import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { NavComponent } from './components/nav/nav.component'
import { DiagramComponent } from './components/diagram/diagram.component'

import { CascadeService } from './services/cascade/cascade.service'
import { SplatService } from './services/splat/splat.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DiagramComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CascadeService,
    SplatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
