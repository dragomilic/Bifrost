import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { Usuario, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends MainHttpService<Usuario> {
  
  public _Usuario : Usuario;
  
  constructor(_HttpAPIService: HttpAPIService<Usuario>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'Usuario'
    }
  }

}