import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { TipoCliente } from "@ModAdmin/ModAdminInterface";
import { TipoClienteService } from "../TipoCliente.service";

@Component({
  selector: 'app-EditarTipoCliente',
  templateUrl: './EditarTipoCliente.component.html',
  styleUrls: ['./EditarTipoCliente.component.css']
})
export class EditarTipoClienteComponent implements OnInit {

  Title : string;
  TipoCliente : TipoCliente = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: ''
  };
  TipoClienteForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.TipoClienteForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }

  constructor(public EditarTipoCliente: MDBModalRef, 
              private fb: FormBuilder, 
              private TipoClienteService: TipoClienteService) 
  {

    this.TipoCliente = this.TipoClienteService._TipoCliente;
    this.Title = 'Editar TipoCliente'
    this.TipoClienteForm = this.fb.group({
      'id':[this.TipoCliente.id],
      'UUI':[this.TipoCliente.UUI],
      'Nombre':[this.TipoCliente.Nombre, [Validators.required]],
      'Descripcion':[this.TipoCliente.Descripcion, [Validators.required]]
      });
  }

  ngOnInit() {
  }

  Actualizar(){
    this.TipoClienteService.Editar(this.TipoClienteForm.value);
  }

}
