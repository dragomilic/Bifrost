import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { v1 as uuid } from "uuid";

import { MDBModalRef } from 'angular-bootstrap-md';
import { Role } from "@ModAdmin/ModAdminInterface";

@Injectable({
  providedIn: 'root'
})
export class FormServiceService<T> {

  Title : string;
  Role : Role;
  _FormGroup: FormGroup;
  SaveButtonEst: boolean = true;

  constructor(public CrearRole: MDBModalRef, private fb: FormBuilder) 
  {
    
  }

}
