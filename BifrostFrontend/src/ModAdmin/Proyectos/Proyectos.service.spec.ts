/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProyectosService } from './Proyectos.service';

describe('Service: Proyectos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProyectosService]
    });
  });

  it('should ...', inject([ProyectosService], (service: ProyectosService) => {
    expect(service).toBeTruthy();
  }));
});
