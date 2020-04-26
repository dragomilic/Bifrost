/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserRoleService } from './UserRole.service';

describe('Service: UserRole', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRoleService]
    });
  });

  it('should ...', inject([UserRoleService], (service: UserRoleService) => {
    expect(service).toBeTruthy();
  }));
});
