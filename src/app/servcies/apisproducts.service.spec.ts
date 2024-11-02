import { TestBed } from '@angular/core/testing';

import { ApisproductsService } from './apisproducts.service';

describe('ApisproductsService', () => {
  let service: ApisproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
