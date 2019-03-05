import { Injectable } from '@angular/core'
import { Splats } from '../../../assets/splat-properties'

@Injectable({
  providedIn: 'root'
})
export class SplatService {

  constructor(private splats: any) {
    this.splats = Splats

  }

}
