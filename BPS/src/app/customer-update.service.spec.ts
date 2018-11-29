import { TestBed } from '@angular/core/testing';

import { CustomerUpdateService } from './customer-update.service';

describe('CustomerUpdateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerUpdateService = TestBed.get(CustomerUpdateService);
    expect(service).toBeTruthy();
  });
});
