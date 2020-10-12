import { TestBed } from '@angular/core/testing';

import { AerisApiService } from './aeris-api.service';

describe('AerisApiService', () => {
  let service: AerisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AerisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
