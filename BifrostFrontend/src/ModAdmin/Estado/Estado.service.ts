import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

import { Estado } from "../ModAdminInterface";
import { HttpAPIService } from "../../Conection/HttpAPI/HttpAPI.service";
import { HttpAPI, IHttpAPI  } from "../../Conection/HttpAPI/HttpAPI";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  public _Estado : Estado;
  conexion : IHttpAPI<Estado>  = {
    UrlRoute : environment.Url_API,
    Controller: 'estado'
  }
  
  constructor(private _HttpAPIService: HttpAPIService<Estado>) { }

  Mostrar(): any {

    this.conexion.Action = 'mostrar';
    let _HttpAPI = new HttpAPI<Estado>(this.conexion);

    return this._HttpAPIService.Get(_HttpAPI);
  }
  Crear(estado: Estado){

    this.conexion.Action = 'guardar';
    this.conexion.Param = estado

    let _HttpAPI = new HttpAPI<Estado>(this.conexion);
    return this._HttpAPIService.Post(_HttpAPI);
  }
  Editar(estado: Estado){
    
    this.conexion.Action = 'editar';
    this.conexion.Param = estado

    let _HttpAPI = new HttpAPI<Estado>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }
  Eliminar(estado: Estado){
    
    this.conexion.Action = 'Eliminar';
    this.conexion.Param = estado

    let _HttpAPI = new HttpAPI<Estado>(this.conexion);
    this._HttpAPIService.Get(_HttpAPI);

  }
  Buscar(estado: Estado){
    
    this.conexion.Action = 'Guardar';
    this.conexion.Param = estado

    let _HttpAPI = new HttpAPI<Estado>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }

}
