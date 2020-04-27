import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { EstadoService } from "@ModAdmin/Estado/Estado.service";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { Proyecto, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService  extends MainHttpService<Proyecto> {
  
  public _Proyecto : Proyecto;
  
  constructor(_HttpAPIService: HttpAPIService<Proyecto>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'proyecto'
    }
  }

}
