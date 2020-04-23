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

  elements: any = [];

  //element: Proyecto = [];

  heroes : any;

  headElements = ['ID', 'Nombre', 'Descripcion', 'Url', 'Acciones'];
  
  constructor(private modalService: MDBModalService, private PS: ProyectosService) {}

  ngOnInit() {
   this.PS.getdata().subscribe(
        val => {
            console.log("PUT call successful value returned in body", 
                        val);
            this.elements = val;
            console.log(this.elements);
        },
        response => {
            console.log("PUT call in error", response);
        },
        () => {
            console.log("The PUT observable is now completed.");
        }
    );
  }
  
  openModal() {
    this.modalRef = this.modalService.show(CrearProyectoComponent, {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: '',
        containerClass: '',
        animated: true
    });
  }
  
  openModal1() {
    this.modalRef = this.modalService.show(EditarProyectoComponent)
  }

}
