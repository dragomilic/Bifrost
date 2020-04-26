import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { RoleAcceso, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class RoleAccesoService extends MainHttpService<RoleAcceso> {
  
  public _RoleAcceso : RoleAcceso;
  
  constructor(_HttpAPIService: HttpAPIService<RoleAcceso>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'roleacceso'
    }
  }

}