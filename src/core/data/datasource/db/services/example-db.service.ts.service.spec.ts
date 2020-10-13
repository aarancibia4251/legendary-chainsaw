import { TestBed } from '@angular/core/testing';

import { ExampleDb.Service.TsService } from './example-db.service.ts.service';

describe('ExampleDb.Service.TsService', () => {
  let service: ExampleDb.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleDb.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
