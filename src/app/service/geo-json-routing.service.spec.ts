import { TestBed } from '@angular/core/testing';

import { GeoJsonRoutingService } from './geo-json-routing.service';

describe('GeoJsonRoutingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeoJsonRoutingService = TestBed.get(GeoJsonRoutingService);
    expect(service).toBeTruthy();
  });
});
