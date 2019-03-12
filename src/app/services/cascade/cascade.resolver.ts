import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Cascade } from 'src/app/models/cascade.interface'
import { CascadeService } from './cascade.service'

@Injectable()
export class CascadeResolver implements Resolve<Observable<Cascade>> {
  constructor(private cascadeService: CascadeService) {}

  resolve(route: ActivatedRouteSnapshot) {
    return this.cascadeService.getCascade(route.paramMap.get('splat'), route.paramMap.get('cascade'))
      // .catch(() => Observable.of('data unavailable at this time'))
  }
}
