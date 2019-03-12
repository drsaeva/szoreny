import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { Cascade } from 'src/app/models/cascade.interface'

@Injectable({
  providedIn: 'root'
})
export class CascadeService {
  temp: Observable<Cascade>

  constructor() {
    this.temp = null
  }

  getCascade(splat: string, cascade: string): Observable<Cascade> {
    console.log(splat) // filler line until resource call implemented
    console.log(cascade) // filler line

    return this.temp
  }
}
