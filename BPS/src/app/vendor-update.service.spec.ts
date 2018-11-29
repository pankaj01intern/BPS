import { TestBed } from '@angular/core/testing';

import { VendorUpdateService } from './vendor-update.service';

describe('VendorUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendorUpdateService = TestBed.get(VendorUpdateService);
    expect(service).toBeTruthy();
  });
});
