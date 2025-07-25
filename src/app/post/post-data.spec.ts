import { TestBed } from '@angular/core/testing';

import { PostData } from './post-data';

describe('PostData', () => {
  let service: PostData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
