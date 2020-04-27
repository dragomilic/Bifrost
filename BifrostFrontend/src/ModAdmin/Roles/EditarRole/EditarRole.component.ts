import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Role } from "@ModAdmin/ModAdminInterface";
import { RolesService } from "../Roles.service";

@Component({
  selector: 'app-EditarRole',
  templateUrl: './EditarRole.component.html',
  styleUrls: ['./EditarRole.component.css']
})
export class EditarRoleComponent implements OnInit {

  Title : string;
  Role : Role = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: ''
  };
  RoleForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.RoleForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }

  constructor(public EditarRole: MDBModalRef, 
              private fb: FormBuilder, 
              private RoleService: RolesService) 
  {

    this.Role = this.RoleService._Role;
    this.Title = 'Editar Role'
    this.RoleForm = this.fb.group({
      'id':[this.Role.id],
      'UUI':[this.Role.UUI],
      'Nombre':[this.Role.Nombre, [Validators.required]],
      'Descripcion':[this.Role.Descripcion, [Validators.required]]
      });
  }

  ngOnInit() {
  }

  Actualizar(){
    this.RoleService.Editar(this.RoleForm.value);
  }

}
