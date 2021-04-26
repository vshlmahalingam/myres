import { TestBed } from '@angular/core/testing';

import { ResdatadetailsService } from './resdatadetails.service';

describe('ResdatadetailsService', () => {
  let service: ResdatadetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResdatadetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
