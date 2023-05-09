import { TestBed } from '@angular/core/testing';

import { GeneraPdfService } from './genera-pdf.service';

describe('GeneraPdfService', () => {
  let service: GeneraPdfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneraPdfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
