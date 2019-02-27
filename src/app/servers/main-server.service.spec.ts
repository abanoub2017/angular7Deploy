import { TestBed } from '@angular/core/testing';

import { MainServerService } from './main-server.service';

describe('MainServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainServerService = TestBed.get(MainServerService);
    expect(service).toBeTruthy();
  });
});
