import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Proyecto } from "@ModAdmin/ModAdminInterface";
import { ProyectosService } from "../Proyectos.service";

@Component({
  selector: 'app-EditarProyecto',
  templateUrl: './EditarProyecto.component.html',
  styleUrls: ['./EditarProyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {

  Title : string;
  Proyecto : Proyecto = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: '',
    Url: ''
  };
  ProyectoForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.ProyectoForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }

  constructor(public EditarProyecto: MDBModalRef, 
    private fb: FormBuilder, 
    private ProyectosService: ProyectosService) 
  {

  this.Proyecto = this.ProyectosService._Proyecto;
  this.Title = 'Editar estado'
    this.ProyectoForm = this.fb.group({
    'id':[this.Proyecto.id],
    'UUI':[this.Proyecto.UUI],
    'Nombre':[this.Proyecto.Nombre, [Validators.required]],
    'Descripcion':[this.Proyecto.Descripcion, [Validators.required]],
    'Url':[this.Proyecto.Url, [Validators.required]]
  });

  }

  ngOnInit() {
  }

  Actualizar(){
    this.ProyectosService.Editar(this.ProyectoForm.value);
  }

}
