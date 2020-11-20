import { TestBed } from '@angular/core/testing';

import { BilanCovidService } from './bilan-covid.service';

describe('BilanCovidService', () => {
  let service: BilanCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
