import { TestBed } from '@angular/core/testing';

import { RmsShowService } from './rms-show.service';

describe('RmsShowService', () => {
  let service: RmsShowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmsShowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
