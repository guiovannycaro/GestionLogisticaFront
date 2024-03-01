import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';


import {Clientes} from '../../modelos/clientes';
import {ResponceI} from '../../modelos/response.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {


  private baseUrl = "http://localhost:8080/getion";
  id: number;
  constructor(private http: HttpClient) {
    this.id =0;

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getClientesList(): Observable<any>{
    let direccion = this.baseUrl + "/CrudClientes/ListarClientes";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

   createClientes(clientes: Clientes): Observable<any>{
    let direccion = this.baseUrl + "/CrudClientes/crearClientes";
    let response = this.http.post<any>(direccion,clientes);
    console.log(response);
    return response;

   }

   getClientesById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "/CrudClientes/buscarClientesById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   actualizarClientes(clientes: Clientes): Observable<any>{
    let direccion = this.baseUrl + "/CrudClientes/editarClientes";
    let response = this.http.post<any>(direccion,clientes);
    console.log(response);
    return response;
   }

   eliminarClientes(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "/CrudClientes/eliminarClientes?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}

