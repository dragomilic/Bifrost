/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RoleAccesoService } from './RoleAcceso.service';

describe('Service: RoleAcceso', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleAccesoService]
    });
  });

  it('should ...', inject([RoleAccesoService], (service: RoleAccesoService) => {
    expect(service).toBeTruthy();
  }));
});
