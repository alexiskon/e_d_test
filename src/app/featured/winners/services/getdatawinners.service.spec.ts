import { TestBed } from '@angular/core/testing';

import { GetdatawinnersService } from './getdatawinners.service';

describe('GetdatawinnersService', () => {
  let service: GetdatawinnersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetdatawinnersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
