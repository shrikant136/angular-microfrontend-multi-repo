import { TestBed } from '@angular/core/testing';

import { DesLibraryService } from './des-library.service';

describe('DesLibraryService', () => {
  let service: DesLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
