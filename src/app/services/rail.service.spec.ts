import { TestBed } from '@angular/core/testing';

import { RailService } from './rail.service';

describe('RailService', () => {
  let service: RailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
