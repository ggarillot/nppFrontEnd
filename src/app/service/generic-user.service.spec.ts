import { TestBed } from '@angular/core/testing';

import { GenericUserService } from './generic-user.service';

describe('GenericUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenericUserService = TestBed.get(GenericUserService);
    expect(service).toBeTruthy();
  });
});
