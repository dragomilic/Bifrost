import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-CrearProyecto',
  templateUrl: './CrearProyecto.component.html',
  styleUrls: ['./CrearProyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {

  constructor(public CrearProyecto: MDBModalRef) {}

  ngOnInit() {
  }

}
