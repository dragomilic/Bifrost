import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { Role, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";

@Injectable({
  providedIn: 'root'
})
export class RolesService extends MainHttpService<Role> {
  
  public _Role : Role;
  
  constructor(_HttpAPIService: HttpAPIService<Role>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'role'
    }
  }

}