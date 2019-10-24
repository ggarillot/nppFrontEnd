import { TestBed } from '@angular/core/testing';

import { PowerBankService } from './power-bank.service';

describe('PowerBankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PowerBankService = TestBed.get(PowerBankService);
    expect(service).toBeTruthy();
  });
});
