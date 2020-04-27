import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Role, Estado } from "@ModAdmin/ModAdminInterface";
import { RolesService } from "../Roles.service";
import { EstadoService } from "@ModAdmin/Estado/Estado.service";

@Component({
  selector: 'app-CrearRole',
  templateUrl: './CrearRole.component.html',
  styleUrls: ['./CrearRole.component.css']
})
export class CrearRoleComponent implements OnInit {

  Estados: Estado[] = [];
  _Estado: Estado;
  Title : string;
  Role : Role = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: '',
    Estado: this._Estado
  };
  RoleForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.RoleForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  @HostListener('change', ['$event']) onChange(event) {

    let Role = this.RoleForm.value;
    Role.Estado = this.Estados.find(x => x.id == Role.Estado);

    if (this.RoleForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  
  constructor(public CrearRole: MDBModalRef,
              private fb: FormBuilder, 
              private RoleService: RolesService,
              private EstadoService: EstadoService) 
  {
    this.Title = 'Crear Role'
    this.RoleForm = this.fb.group({
      'id':[this.Role.id],
      'UUI':[this.Role.UUI],
      'Nombre':[this.Role.Nombre, [Validators.required]],
      'Descripcion':[this.Role.Descripcion, [Validators.required]],
      'Estado':[this.Role.Estado, [Validators.required]]
      });
  }

  ngOnInit() {
    this.EstadoService.Mostrar().subscribe(val => this.Estados = val);
  }

  Guardar(){
    this.RoleService.Crear(this.RoleForm.value);
  }
  
}
