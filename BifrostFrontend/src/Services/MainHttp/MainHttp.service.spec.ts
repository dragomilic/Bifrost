/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainHttpService } from './MainHttp.service';

describe('Service: MainHttp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainHttpService]
    });
  });

  it('should ...', inject([MainHttpService], (service: MainHttpService) => {
    expect(service).toBeTruthy();
  }));
});
