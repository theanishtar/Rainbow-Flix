import { TestBed } from '@angular/core/testing';

import { RainbowService } from './rainbow.service';

describe('RainbowService', () => {
  let service: RainbowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RainbowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
