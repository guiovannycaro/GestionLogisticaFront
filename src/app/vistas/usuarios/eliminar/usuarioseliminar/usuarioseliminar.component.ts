import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Usuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarioseliminar',
  templateUrl: './usuarioseliminar.component.html',
  styleUrls: ['./usuarioseliminar.component.css']
})
export class UsuarioseliminarComponent  implements OnInit{
  form!: FormGroup;
  id: number;
  usuarios: Usuarios = new Usuarios();

  ngOnInit(): void {
    this.id = this.parametro.snapshot.params['id'];
    console.log("parametro proveniente del index " + this.id);
  this.api.eliminarusuario(this.id).subscribe(data=>{
    this.usuarios = data;
    console.log(this.usuarios);
  },error => console.log(error));


  }

  constructor (private api:UsuariosService,private router:Router ,private parametro:ActivatedRoute){
    this.id = 0;
  }





}

