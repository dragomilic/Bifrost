/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpAPIService } from './HttpAPI.service';

describe('Service: HttpAPI', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpAPIService]
    });
  });

  it('should ...', inject([HttpAPIService], (service: HttpAPIService) => {
    expect(service).toBeTruthy();
  }));
});
