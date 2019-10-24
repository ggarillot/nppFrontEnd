import { TestBed } from '@angular/core/testing';

import { NormalStationService } from './normal-station.service';

describe('NormalStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NormalStationService = TestBed.get(NormalStationService);
    expect(service).toBeTruthy();
  });
});
