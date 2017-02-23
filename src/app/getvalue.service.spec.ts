/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetvalueService } from './getvalue.service';

describe('GetvalueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetvalueService]
    });
  });

  it('should ...', inject([GetvalueService], (service: GetvalueService) => {
    expect(service).toBeTruthy();
  }));
});
