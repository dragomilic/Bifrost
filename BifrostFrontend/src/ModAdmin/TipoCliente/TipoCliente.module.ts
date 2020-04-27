import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MDBBootstrapModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';

import { TipoClienteComponent } from './TipoCliente.component';
import { TipoClienteRoutingModule } from './TipoCliente-routing.module'
/**/
import { CrearTipoClienteComponent } from './CrearTipoCliente/CrearTipoCliente.component'
import { EditarTipoClienteComponent } from './EditarTipoCliente/EditarTipoCliente.component'

@NgModule({
  imports: [
    CommonModule,
    TipoClienteRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    TipoClienteComponent,
    CrearTipoClienteComponent,
    EditarTipoClienteComponent
  ]
})
export class TipoClienteModule { }
