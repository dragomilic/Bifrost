/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TipoClienteService } from './TipoCliente.service';

describe('Service: TipoCliente', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TipoClienteService]
    });
  });

  it('should ...', inject([TipoClienteService], (service: TipoClienteService) => {
    expect(service).toBeTruthy();
  }));
});
