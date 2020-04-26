import { Injectable } from '@angular/core';
import { environment } from "@env/environment";

import { EstadoService } from "@ModAdmin/Estado/Estado.service";

import { Proyecto, Estado } from "@ModAdmin/ModAdminInterface";
import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";
import { HttpAPI, IHttpAPI  } from "@Connect/HttpAPI/HttpAPI";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  public _Proyecto : Proyecto;
  conexion : IHttpAPI<Proyecto> = {
    UrlRoute : environment.Url_API,
    Controller: 'proyecto',
  }
  
  constructor(private _HttpAPIService: HttpAPIService<Proyecto>)
  {
  }
  
  getdata(){
    
    this.conexion.Action = 'mostrar';
    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);
    return this._HttpAPIService.Get(_HttpAPI);
    
  }
  Mostrar(): any {

    this.conexion.Action = 'mostrar';
    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);

    return this._HttpAPIService.Get(_HttpAPI);
  }
  Crear(proyecto : Proyecto): any{

    this.conexion.Action = 'guardar';
    this.conexion.Param = proyecto

    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);
    return this._HttpAPIService.Post(_HttpAPI);
  }
  Editar(proyecto : Proyecto){
    
    this.conexion.Action = 'editar';
    this.conexion.Param = proyecto

    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }
  Eliminar(proyecto : Proyecto){
    
    this.conexion.Action = 'eliminar/'+proyecto.id;
    this.conexion.Param = proyecto

    console.log(this.conexion);
    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }
  Buscar(proyecto : Proyecto){
    
    this.conexion.Action = 'Guardar';
    this.conexion.Param = proyecto

    let _HttpAPI = new HttpAPI<Proyecto>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }

}
