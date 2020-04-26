import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})

export class EstadoService extends MainHttpService<Estado> {
  
  public _Estado : Estado;
  
  constructor(_HttpAPIService: HttpAPIService<Estado>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'estado'
    }
  }

}