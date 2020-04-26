import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { Cliente, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends MainHttpService<Cliente> {
  
  public _Cliente : Cliente;
  
  constructor(_HttpAPIService: HttpAPIService<Cliente>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'cliente'
    }
  }

}