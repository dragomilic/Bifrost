import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { MainHttpService } from "@Services/MainHttp/MainHttp.service";
import { UsrRole, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";
import { HttpAPI, IHttpAPI  } from "@Connect/HttpAPI/HttpAPI";

@Injectable({
  providedIn: 'root'
})
export class UsrRoleService extends MainHttpService<UsrRole> {
  
  public _UsrRole : UsrRole;
  
  constructor(_HttpAPIService: HttpAPIService<UsrRole>) { 
    super(_HttpAPIService);
    this.conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'UsrRole'
    }
  }

}