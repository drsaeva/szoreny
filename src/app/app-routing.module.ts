import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { DiagramComponent } from './components/diagram/diagram.component'
import { CascadeResolver } from './services/cascade/cascade.resolver'

const routes: Routes = [
  {path: ':splat/:cascade', component: DiagramComponent, resolve: { cascade: CascadeResolver } }
]

@NgModule({
  declarations: [],
  imports: [ CommonModule, RouterModule.forRoot(routes), ],
  exports: [ RouterModule ],
  providers: [ CascadeResolver ]
})
export class AppRoutingModule { }
