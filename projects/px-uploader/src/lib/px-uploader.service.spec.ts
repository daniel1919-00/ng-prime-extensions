import { TestBed } from '@angular/core/testing';

import { PxUploaderService } from './px-uploader.service';

describe('PxUploaderService', () => {
  let service: PxUploaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PxUploaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
