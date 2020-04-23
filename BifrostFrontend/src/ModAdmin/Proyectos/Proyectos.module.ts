import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';

import { ProyectosComponent } from './Proyectos.component';
import { ProyectosService } from "./Proyectos.service";
import { ProyectosRoutingModule } from './Proyectos-routing.module'
/**/
import { CrearProyectoComponent } from './CrearProyecto/CrearProyecto.component'
import { EditarProyectoComponent } from './EditarProyecto/EditarProyecto.component'

@NgModule({
  imports: [
    CommonModule,
    ProyectosRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    ProyectosComponent,
    CrearProyectoComponent,
    EditarProyectoComponent
  ]
})

export class ProyectosModule { }