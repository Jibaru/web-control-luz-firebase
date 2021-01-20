import { TestBed } from '@angular/core/testing';

import { FocoService } from './foco.service';

describe('FocoService', () => {
  let service: FocoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FocoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
