import { TestBed } from '@angular/core/testing';

import { SlideserviceService } from './slideservice.service';

describe('SlideserviceService', () => {
  let service: SlideserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlideserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
