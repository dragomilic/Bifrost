import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { UsrProyecto, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class UsrProyectoService extends MainHttpService<UsrProyecto> {
  
  public _UsrProyecto : UsrProyecto;
  
  constructor(_HttpAPIService: HttpAPIService<UsrProyecto>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'UsrProyecto'
    }
  }

}