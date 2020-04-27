import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { TipoCliente, Estado } from "@ModAdmin/ModAdminInterface";
import { TipoClienteService } from "../TipoCliente.service";
import { EstadoService } from "@ModAdmin/Estado/Estado.service";

@Component({
  selector: 'app-CrearTipoCliente',
  templateUrl: './CrearTipoCliente.component.html',
  styleUrls: ['./CrearTipoCliente.component.css']
})
export class CrearTipoClienteComponent implements OnInit {

  Estados: Estado[] = [];
  _Estado: Estado;
  Title : string;
  TipoCliente : TipoCliente = {
    UUI: uuid(),
    Nombre: '',
    Descripcion: '',
    Estado: this._Estado
  };
  TipoClienteForm: FormGroup;
  SaveButtonEst: boolean = true;

  @HostListener('input') oninput() {
    if (this.TipoClienteForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  @HostListener('change', ['$event']) onChange(event) {

    let TipoCliente = this.TipoClienteForm.value;
    TipoCliente.Estado = this.Estados.find(x => x.id == TipoCliente.Estado);

    if (this.TipoClienteForm.valid) { this.SaveButtonEst = false; }
    else { this.SaveButtonEst = true; }
  }
  
  constructor(public CrearTipoCliente: MDBModalRef,
              private fb: FormBuilder, 
              private TipoClienteService: TipoClienteService,
              private EstadoService: EstadoService) 
  {
    this.Title = 'Crear TipoCliente'
    this.TipoClienteForm = this.fb.group({
      'id':[this.TipoCliente.id],
      'UUI':[this.TipoCliente.UUI],
      'Nombre':[this.TipoCliente.Nombre, [Validators.required]],
      'Descripcion':[this.TipoCliente.Descripcion, [Validators.required]],
      'Estado':[this.TipoCliente.Estado, [Validators.required]]
      });
  }

  ngOnInit() {
    this.EstadoService.Mostrar().subscribe(val => this.Estados = val);
  }

  Guardar(){
    this.TipoClienteService.Crear(this.TipoClienteForm.value);
  }
  
}
