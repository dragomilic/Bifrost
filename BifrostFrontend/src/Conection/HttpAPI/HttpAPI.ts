import { HttpHeaders } from '@angular/common/http';

export interface IHttpAPI<T> {
    UrlRoute: String;
    Controller: String;
    Action?: String;
    Param?: T;
};

export class HttpAPI<T>
{
    private RutaDeAcceso : IHttpAPI<T>;
    
    constructor(httpAPI : IHttpAPI<T>){
        this.RutaDeAcceso = httpAPI;
    }

    getObject():T { 
        return this.RutaDeAcceso.Param; 
    }

    UrlAPI():string { 
        return this.RutaDeAcceso.UrlRoute+'/'+'api/'+this.RutaDeAcceso.Controller+'/'+this.RutaDeAcceso.Action;
    }

    getHeaders(): HttpHeaders {
      let headers = new HttpHeaders();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, X-Token-Auth, Authorization');
        headers.append('content-type', 'application/json; charset=utf-8');
    
        return headers;
    }

}