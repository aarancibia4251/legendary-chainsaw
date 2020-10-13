import { TestBed } from '@angular/core/testing';

import { ExampleRest.Service.TsService } from './example-rest.service.ts.service';

describe('ExampleRest.Service.TsService', () => {
  let service: ExampleRest.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleRest.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
