import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { Cascade } from 'src/app/models/cascade.interface'
import { solarWar } from 'src/app/models/tempcascade'


@Injectable({
  providedIn: 'root'
})
export class CascadeService {
  temp: Observable<Cascade>

  constructor() {
    this.temp = of(solarWar)
  }

  getCascade(splat: string, cascade: string): Observable<Cascade> {
    console.log(splat) // filler line until resource call implemented
    console.log(cascade) // filler line

    return this.temp
  }
}
