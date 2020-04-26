import { Injectable } from '@angular/core';

import { HttpAPIService } from "@Connect/HttpAPI/HttpAPI.service";
import { HttpAPI, IHttpAPI  } from "@Connect/HttpAPI/HttpAPI";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainHttpService<T> {

  public conexion : IHttpAPI<T>;
  
  constructor(public _HttpAPIService: HttpAPIService<T>) { }

  Mostrar(): any {

    this.conexion.Action = 'mostrar';
    let _HttpAPI = new HttpAPI<T>(this.conexion);

    return this._HttpAPIService.Get(_HttpAPI);
  }
  Crear(Obj: T): any{

    this.conexion.Action = 'guardar';
    this.conexion.Param = Obj

    let _HttpAPI = new HttpAPI<T>(this.conexion);
    return this._HttpAPIService.Post(_HttpAPI);
  }
  Editar(Obj: T){
    
    this.conexion.Action = 'editar';
    this.conexion.Param = Obj

    let _HttpAPI = new HttpAPI<T>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }
  Eliminar(id: Number){
    
    this.conexion.Action = 'eliminar/'+id;
    this.conexion.Param = null;

    console.log(this.conexion);
    let _HttpAPI = new HttpAPI<T>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }
  Buscar(Obj: T){
    
    this.conexion.Action = 'Guardar';
    this.conexion.Param = Obj

    let _HttpAPI = new HttpAPI<T>(this.conexion);
    this._HttpAPIService.Post(_HttpAPI);

  }

}