import { TestBed, inject } from '@angular/core/testing';

import { ShitService } from './shit.service';

describe('ShitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShitService]
    });
  });

  it('should be created', inject([ShitService], (service: ShitService) => {
    expect(service).toBeTruthy();
  }));
});
