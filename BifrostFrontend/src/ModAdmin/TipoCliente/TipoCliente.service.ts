import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { TipoCliente, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService extends MainHttpService<TipoCliente> {
  
  public _TipoCliente : TipoCliente;
  
  constructor(_HttpAPIService: HttpAPIService<TipoCliente>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'tipocliente'
    }
  }

}