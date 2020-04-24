import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Estado } from "@ModAdmin/ModAdminInterface";
import { EstadoService } from "../Estado.service";

@Component({
  selector: 'app-CrearEstado',
  templateUrl: './CrearEstado.component.html',
  styleUrls: ['./CrearEstado.component.scss']
})
export class CrearEstadoComponent implements OnInit {

  Title : string;
  Estado : Estado = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: ''
  };
  EstadoForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.EstadoForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  
  constructor(public CrearEstado: MDBModalRef, private fb: FormBuilder, private EstadoService: EstadoService) 
  {
    this.Title = 'Crear estado'
    this.EstadoForm = this.fb.group({
      'id':[this.Estado.id],
      'UUI':[this.Estado.UUI],
      'Nombre':[this.Estado.Nombre, [Validators.required]],
      'Descripcion':[this.Estado.Descripcion, [Validators.required]]
      });
  }

  ngOnInit() {
    
  }

  Guardar(){
    this.EstadoService.Crear(this.EstadoForm.value);
  }
  
}
