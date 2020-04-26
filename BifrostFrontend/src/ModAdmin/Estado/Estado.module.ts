import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MDBBootstrapModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';

import { EstadoComponent } from './Estado.component';
import { EstadoRoutingModule } from './Estado-routing.module'
/**/
import { CrearEstadoComponent } from './CrearEstado/CrearEstado.component'
import { EditarEstadoComponent } from './EditarEstado/EditarEstado.component'

@NgModule({
  imports: [
    CommonModule,
    EstadoRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    EstadoComponent,
    CrearEstadoComponent,
    EditarEstadoComponent
  ]
})
export class EstadoModule { }