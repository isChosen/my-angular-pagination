import { TestBed, inject } from '@angular/core/testing';

import { PagingServiceService } from './paging-service.service';

describe('PagingServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PagingServiceService]
    });
  });

  it('should be created', inject([PagingServiceService], (service: PagingServiceService) => {
    expect(service).toBeTruthy();
  }));
});
