import { Component, OnInit } from '@angular/core'; 
import { CrearEstadoComponent } from './CrearEstado/CrearEstado.component';
import { EditarEstadoComponent } from './EditarEstado/EditarEstado.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

import { EstadoService } from "./Estado.service";
import { Estado } from "../ModAdminInterface";

@Component({
  selector: 'app-Estado',
  templateUrl: './Estado.component.html',
  styleUrls: ['./Estado.component.scss']
})
export class EstadoComponent implements OnInit {

  modalRef: MDBModalRef;
  _estadoHead = ['ID', 'Nombre', 'Descripcion'];
  _estadoContent: Estado[] = [];

  constructor(
    private modalService: MDBModalService, 
    private _ES: EstadoService) { }

  ngOnInit() {
    this._ES.Mostrar().subscribe((val: Estado[]) => { this._estadoContent =  val; });
  }

  CrearEstadoModal()
  {
    this.modalRef = this.modalService.show(CrearEstadoComponent);
  }
  EditarEstadoModal(Estado : Estado)
  {
    this._ES._Estado = Estado;
    this.modalRef = this.modalService.show(EditarEstadoComponent);
  }
  EliminarEstado(){
    //this._ES.Eliminar(estado);
  }

  anadirCliente(Estado: Estado) {
    //this.Estado.push(Estado)
  }
}
