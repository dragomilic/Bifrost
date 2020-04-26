import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Estado } from "@ModAdmin/ModAdminInterface";
import { EstadoService } from "../Estado.service";

@Component({
  selector: 'app-EditarEstado',
  templateUrl: './EditarEstado.component.html',
  styleUrls: ['./EditarEstado.component.scss']
})
export class EditarEstadoComponent implements OnInit {

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

  constructor(public EditarEstado: MDBModalRef, 
              private fb: FormBuilder, 
              private EstadoService: EstadoService) 
  {

    this.Estado = this.EstadoService._Estado;
    this.Title = 'Editar estado'
    this.EstadoForm = this.fb.group({
      'id':[this.Estado.id],
      'UUI':[this.Estado.UUI],
      'Nombre':[this.Estado.Nombre, [Validators.required]],
      'Descripcion':[this.Estado.Descripcion, [Validators.required]]
      });
  }

  ngOnInit() {
  }

  Actualizar(){
    this.EstadoService.Editar(this.EstadoForm.value);
  }

}
