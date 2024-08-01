import { TestBed } from '@angular/core/testing';

import { PxSearchableAccordionService } from './px-searchable-accordion.service';

describe('PxSearchableAccordionService', () => {
  let service: PxSearchableAccordionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PxSearchableAccordionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
