import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { DiagramComponent } from './components/diagram/diagram.component'

const routes: Routes = [
  {path: ':splat/:cascade', component: DiagramComponent }
]

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes), ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
