import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-EditarProyecto',
  templateUrl: './EditarProyecto.component.html',
  styleUrls: ['./EditarProyecto.component.scss']
})
export class EditarProyectoComponent implements OnInit {

  constructor(public EditarProyecto: MDBModalRef) {}

  ngOnInit() {
  }

}
