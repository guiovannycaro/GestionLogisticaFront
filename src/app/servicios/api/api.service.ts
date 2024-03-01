import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../../modelos/login.interface';

import {ClientesI} from '../../modelos/clientes.interfaces';
import {ResponceI} from '../../modelos/response.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

// Http Headers



  constructor(private http: HttpClient) {}


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


url:string = "http://localhost:8080/getion/";

login(datos:any):Observable<any> {
    console.log("Login Service");
   let direccion = this.url + "GestionUsuarios/validarUsuario";

   let response = this.http.post<any>(direccion,datos);

   return response;
}


 getAllClientes():Observable<any>{
     let direccion = this.url + "/CrudClientes/ListarClientes";
     let response = this.http.get<any>(direccion,this.httpOptions);
     console.log(response);
    return response;

 }


 createCliente(datos:any): Observable<any> {
     let direccion = this.url + "clientes/CrudClientes/crearClientes";
     console.log(direccion);
     let response =  this.http.post<any>(direccion,datos, this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
    );
    console.log(response);
    return response;

 }

 editarCliente(id:number,datos:any): Observable<any> {
     let direccion = this.url + "clientes/CrudClientes/editarClientes";
     return this.http.post<any>(direccion + id, JSON.stringify(datos), this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
    );
 }

 eliminarCliente(datos:any): Observable<any> {
     let direccion = this.url + "clientes/CrudClientes/eliminarCliente";
     return this.http.post<any>(direccion,datos, this.httpOptions)
     .pipe(
      catchError(this.errorHandler)
    );
 }


 find(datos:any): Observable<any> {
  let direccion = this.url + "clientes/CrudClientes/buscarClientesById";
  return this.http.get<any>(direccion , datos)
  .pipe(
    catchError(this.errorHandler)
  )
}

 errorHandler(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    errorMessage = error.error.message;
  } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

}
