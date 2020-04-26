import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Proyecto, Estado } from "@ModAdmin/ModAdminInterface";
import { ProyectosService } from "../Proyectos.service";
import { EstadoService } from "@ModAdmin/Estado/Estado.service";

@Component({
  selector: 'app-CrearProyecto',
  templateUrl: './CrearProyecto.component.html',
  styleUrls: ['./CrearProyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {

  Estados: Estado[] = [];
  _Estado: Estado;
  Title : string;
  Proyecto : Proyecto = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: '',
    Url: '',
    Estado: this._Estado
  };
  ProyectoForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.ProyectoForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  @HostListener('change', ['$event']) onChange(event) {
    if (this.ProyectoForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }

  constructor(public CrearProyecto: MDBModalRef, 
              private fb: FormBuilder, 
              private ProyectosService: ProyectosService,
              private EstadoService: EstadoService) 
  {
    this.Title = 'Crear proyecto'
    this.ProyectoForm = this.fb.group({
      'id':[this.Proyecto.id],
      'UUI':[this.Proyecto.UUI],
      'Nombre':[this.Proyecto.Nombre, [Validators.required]],
      'Descripcion':[this.Proyecto.Descripcion, [Validators.required]],
      'Url':[this.Proyecto.Url, [Validators.required]],
      'Estado':[this.Proyecto.Estado, [Validators.required]]
      });
  }

  ngOnInit() {
    this.EstadoService.Mostrar().subscribe(val => this.Estados = val);
  }

  Guardar(){
    //console.log(this.ProyectoForm.value);
    let _proyecto = this.ProyectoForm.value;
    _proyecto.Estado = this.Estados.find(x => x.id == _proyecto.Estado);
    //console.log(_proyecto)
    this.ProyectosService.Crear(_proyecto);
  }

}
