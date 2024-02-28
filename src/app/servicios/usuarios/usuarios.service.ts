import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosI } from 'src/app/modelos/usuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseUrl = "http://localhost:8080/getion/";

  constructor(private http: HttpClient) { }

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
}
