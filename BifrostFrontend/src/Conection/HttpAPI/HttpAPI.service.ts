import { Injectable } from '@angular/core';
import { environment } from "@env/environment";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { HttpAPI, IHttpAPI } from "./HttpAPI";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpAPIService<T>{
  
  constructor(private http: HttpClient) {
      //this.CSRF_TOKEN();
  }
  
  Get(HttpAPI: HttpAPI<T>){
    
    let headers = HttpAPI.getHeaders();
    let Url = HttpAPI.UrlAPI();
    
    return this.http.get<[T]>(Url, {headers: headers});
    
  }
  Post(HttpAPI: HttpAPI<T>){
    
    let _headers = HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Body = HttpAPI.getObject() as T;
    let Url = HttpAPI.UrlAPI();
    
    if(Body === undefined){
      return this.http.post<T>(Url, options).subscribe();
    }
    else{
      return this.http.post<T>(Url, JSON.stringify(Body), options).subscribe();
    }
  }
  Put(HttpAPI: HttpAPI<T>): Observable<T>{

    let _headers = HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Url = HttpAPI.UrlAPI();
    let Body = HttpAPI.getObject;

    if(Body === undefined){
      return this.http.put<T>(Url, options);
    }
    else{
      return this.http.put<T>(Url, Body, options);
    }
  }
  Delete(HttpAPI: HttpAPI<T>){
    
    let _headers = HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Url = HttpAPI.UrlAPI();

    return this.http.delete<T>(Url, options);
  }
  Patch(HttpAPI: HttpAPI<T>){
    
    let _headers = HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Url = HttpAPI.UrlAPI();
    let Body = HttpAPI.getObject;

    if(Body === undefined){
      return this.http.patch<T>(Url, options);
    }
    else{
      return this.http.patch<T>(Url, Body, options);
    }
  }

  async CSRF_TOKEN(){
    
    let conexion : IHttpAPI<string>  = {
      UrlRoute : environment.Url_API,
      Controller: 'api',
      Action: 'csrf'
    }
    
    let _HttpAPI = new HttpAPI<string>(conexion);

    let _headers = _HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Url = _HttpAPI.UrlAPI();

    await this.http.get(Url, options).toPromise()
    .then(data => {
      console.log(data.toString());
      //this.csrf = data.toString();
    });

    /**
     .subscribe(
        val => {
            console.log("PUT call successful value returned in body", val);
            return val;
        },
        response => {
            console.log("PUT call in error", response);
            return response;
        }
    );
    */

  }

  /* 
  Request(HttpAPI: HttpAPI<T>){
    
    let _headers = HttpAPI.getHeaders();
    let options = { headers: _headers };
    let Url = HttpAPI.UrlAPI();
    let Body = HttpAPI.getObject;

    return this.http.post<T>(Url, Body, options);
  }
  */

}
