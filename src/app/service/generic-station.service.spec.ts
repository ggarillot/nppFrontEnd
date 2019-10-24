import { TestBed } from '@angular/core/testing';

import { GenericStationService } from './generic-station.service';

describe('GenericStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericStationService = TestBed.get(GenericStationService);
    expect(service).toBeTruthy();
  });
});
