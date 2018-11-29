import { TestBed } from '@angular/core/testing';

import { VendorRegService } from './vendor-reg.service';

describe('VendorRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorRegService = TestBed.get(VendorRegService);
    expect(service).toBeTruthy();
  });
});
