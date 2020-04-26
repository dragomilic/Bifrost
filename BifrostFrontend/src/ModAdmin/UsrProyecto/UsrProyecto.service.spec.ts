/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UsrProyectoService } from './UsrProyecto.service';

describe('Service: UsrProyecto', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsrProyectoService]
    });
  });

  it('should ...', inject([UsrProyectoService], (service: UsrProyectoService) => {
    expect(service).toBeTruthy();
  }));
});
