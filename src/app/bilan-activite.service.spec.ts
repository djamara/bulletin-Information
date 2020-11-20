import { TestBed } from '@angular/core/testing';

import { BilanActiviteService } from './bilan-activite.service';

describe('BilanActiviteService', () => {
  let service: BilanActiviteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BilanActiviteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
