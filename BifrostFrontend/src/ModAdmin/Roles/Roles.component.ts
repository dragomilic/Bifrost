import { Component, OnInit } from '@angular/core';
import { CrearRoleComponent } from './CrearRole/CrearRole.component';
import { EditarRoleComponent } from './EditarRole/EditarRole.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

import { RolesService } from "./Roles.service";
import { Role } from "@ModAdmin/ModAdminInterface";


@Component({
  selector: 'app-Roles',
  templateUrl: './Roles.component.html',
  styleUrls: ['./Roles.component.css']
})
export class RolesComponent implements OnInit {

  modalRef: MDBModalRef;
  _roleHead = ['ID', 'Nombre', 'Descripcion', 'Acciones'];
  _roleContent: Role[] = [];

  constructor(
    private modalService: MDBModalService, 
    private _ES: RolesService) { }

  ngOnInit() {
    this._ES.Mostrar().subscribe((val: Role[]) => { this._roleContent =  val; });
  }

  CrearRoleModal()
  {
    this.modalRef = this.modalService.show(CrearRoleComponent);
  }
  EditarRoleModal(Role : Role)
  {
    this._ES._Role = Role;
    this.modalRef = this.modalService.show(EditarRoleComponent);
  }
  EliminarRole(Role : Role){
    this._ES.Eliminar(Role.id);
  }
}