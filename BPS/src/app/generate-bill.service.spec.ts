import { TestBed } from '@angular/core/testing';

import { GenerateBillService } from './generate-bill.service';

describe('GenerateBillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerateBillService = TestBed.get(GenerateBillService);
    expect(service).toBeTruthy();
  });
});
