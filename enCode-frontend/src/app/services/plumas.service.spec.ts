import { TestBed } from '@angular/core/testing';

import { PlumasService } from './plumas.service';

describe('PlumasService', () => {
  let service: PlumasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlumasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
