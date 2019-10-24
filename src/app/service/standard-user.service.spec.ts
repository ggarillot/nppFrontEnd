import { TestBed } from '@angular/core/testing';

import { StandardUserService } from './standard-user.service';

describe('StandardUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandardUserService = TestBed.get(StandardUserService);
    expect(service).toBeTruthy();
  });
});
