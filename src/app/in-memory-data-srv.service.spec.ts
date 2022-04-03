import { TestBed } from '@angular/core/testing';

import { InMemoryDataSrvService } from './in-memory-data-srv.service';

describe('InMemoryDataSrvService', () => {
  let service: InMemoryDataSrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemoryDataSrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
