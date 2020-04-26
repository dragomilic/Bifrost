import { Component, OnInit } from '@angular/core'; 
import { CrearProyectoComponent } from './CrearProyecto/CrearProyecto.component';
import { EditarProyectoComponent } from './EditarProyecto/EditarProyecto.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

import { Proyecto } from "../ModAdminInterface";
import { ProyectosService } from "./Proyectos.service";

@Component({
  selector: 'app-Proyectos',
  templateUrl: './Proyectos.component.html',
  styleUrls: ['./Proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  modalRef: MDBModalRef;
  _proyectoHead = ['ID', 'Nombre', 'Descripcion', 'Url', 'Acciones'];
  _proyectoContent: Proyecto[] = [];
  
  constructor(
    private modalService: MDBModalService, 
    private PS: ProyectosService) {}

  ngOnInit() {
   this.PS.getdata().subscribe(val => { this._proyectoContent = val; });
  }
  
  CrearProyectoModal() {
    this.modalRef = this.modalService.show(CrearProyectoComponent);
  }
  
  EditarProyectoModal(proyecto: Proyecto) {
    this.PS._Proyecto = proyecto;
    this.modalRef = this.modalService.show(EditarProyectoComponent)
  }

  EliminarProyecto(proyecto: Proyecto) {
    this.PS.Eliminar(proyecto);
  }

}
