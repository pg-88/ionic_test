import { TestBed } from '@angular/core/testing';

import { FakeSellsService } from './fake-sells.service';

describe('FakeSellsService', () => {
  let service: FakeSellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeSellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
