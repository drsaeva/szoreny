import { TestBed, inject } from '@angular/core/testing';

import { SplatService } from './splat.service';

describe('SplatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplatService]
    });
  });

  it('should be created', inject([SplatService], (service: SplatService) => {
    expect(service).toBeTruthy();
  }));
});
