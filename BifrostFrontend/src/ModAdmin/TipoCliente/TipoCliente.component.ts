import { Component, OnInit } from '@angular/core';
import { CrearTipoClienteComponent } from './CrearTipoCliente/CrearTipoCliente.component';
import { EditarTipoClienteComponent } from './EditarTipoCliente/EditarTipoCliente.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

import { TipoClienteService } from "./TipoCliente.service";
import { TipoCliente } from "@ModAdmin/ModAdminInterface";

@Component({
  selector: 'app-TipoCliente',
  templateUrl: './TipoCliente.component.html',
  styleUrls: ['./TipoCliente.component.css']
})
export class TipoClienteComponent implements OnInit {

  modalRef: MDBModalRef;
  _tipoclienteHead = ['ID', 'Nombre', 'Descripcion', 'Acciones'];
  _tipoclienteContent: TipoCliente[] = [];

  constructor(
    private modalService: MDBModalService, 
    private _ES: TipoClienteService) { }

  ngOnInit() {
    this._ES.Mostrar().subscribe((val: TipoCliente[]) => { this._tipoclienteContent =  val; });
  }

  CrearTipoClienteModal()
  {
    this.modalRef = this.modalService.show(CrearTipoClienteComponent);
  }
  EditarTipoClienteModal(TipoCliente : TipoCliente)
  {
    this._ES._TipoCliente = TipoCliente;
    this.modalRef = this.modalService.show(EditarTipoClienteComponent);
  }
  EliminarTipoCliente(TipoCliente : TipoCliente){
    this._ES.Eliminar(TipoCliente.id);
  }
}