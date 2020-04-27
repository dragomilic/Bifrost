import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MDBBootstrapModule, ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';

import { RolesComponent } from './Roles.component';
import { RolesRoutingModule } from './Roles-routing.module'
/**/
import { CrearRoleComponent } from './CrearRole/CrearRole.component'
import { EditarRoleComponent } from './EditarRole/EditarRole.component'


@NgModule({
  imports: [
    CommonModule,
    RolesRoutingModule,
    MDBBootstrapModule.forRoot(),
    FormsModule, 
    ReactiveFormsModule
  ],
  declarations: [
    RolesComponent,
    CrearRoleComponent,
    EditarRoleComponent
  ]
})
export class RolesModule { }
