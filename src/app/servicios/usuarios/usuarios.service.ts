import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosI } from 'src/app/modelos/usuarios.interface';
import { Usuarios } from 'src/app/modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = "http://localhost:8080/getion/";
  id: number;
  constructor(private http: HttpClient) {
    this.id =0;

  }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getUsuariosList(): Observable<any>{
    let direccion = this.baseUrl + "/CrudUsuarios/ListarTodosUsuarios";
    let response = this.http.get<any>(direccion,this.httpOptions);
    console.log(response);
    return response;
  }

   createUsuarios(usuarios: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "/CrudUsuarios/crearUsuarios";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;

   }

   getusuarioById(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "CrudUsuarios/ListarUsuariosById?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

   actualizarUsuarios(usuarios: Usuarios): Observable<any>{
    let direccion = this.baseUrl + "/CrudUsuarios/actualizarUsuario";
    let response = this.http.post<any>(direccion,usuarios);
    console.log(response);
    return response;
   }

   eliminarusuario(data:any): Observable<any>{

    console.log("parametro a enviar " + data)
    let direccion = this.baseUrl + "CrudUsuarios/EliminarUsuario?id=" + data;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
   }

}
