import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxGraphModule } from '@swimlane/ngx-graph';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CascadeComponent } from './cascade.component';

@NgModule({
  declarations: [CascadeComponent, ],
  imports: [BrowserAnimationsModule,
            BrowserModule,
            CommonModule,
            NgxGraphModule,
            NgxChartsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, ],
})
export class CascadeModule { }
