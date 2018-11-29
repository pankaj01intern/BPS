import { TestBed } from '@angular/core/testing';

import { CustomerRegService } from './customer-reg.service';

describe('CustomerRegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerRegService = TestBed.get(CustomerRegService);
    expect(service).toBeTruthy();
  });
});
