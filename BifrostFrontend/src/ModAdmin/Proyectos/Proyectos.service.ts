import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

import { Proyecto, Estado } from "../ModAdminInterface";
import { HttpAPIService } from "../../Conection/HttpAPI/HttpAPI.service";
import { HttpAPI, IHttpAPI  } from "../../Conection/HttpAPI/HttpAPI";

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  constructor(private _HttpAPIService: HttpAPIService<Proyecto>){}
  
  getdata(){
    
    let conexion : IHttpAPI<Proyecto>;
    conexion = {
      UrlRoute : environment.Url_API,
      Controller: 'proyecto',
      Action: 'mostrar'
    }
    let _HttpAPI = new HttpAPI<Proyecto>(conexion);

    return this._HttpAPIService.Get(_HttpAPI);
    
  }
  
  Nuevo(): Proyecto{

    let _estado: Estado;

    return {
      id: 0,
      UUI: '',
      Nombre: '',
      Descripcion: '',
      Url: '',
      Estado: _estado
    };
  }
  Crear(proyecto: Proyecto){

  }
  Editar(proyecto: Proyecto){
    
  }
  Eliminar(proyecto: Proyecto){
    
  }
  Buscar(proyecto: Proyecto){
    
  }
}
