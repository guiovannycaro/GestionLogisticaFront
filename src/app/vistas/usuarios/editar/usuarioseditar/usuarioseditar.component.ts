import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Usuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-usuarioseditar',
  templateUrl: './usuarioseditar.component.html',
  styleUrls: ['./usuarioseditar.component.css']
})
export class UsuarioseditarComponent  implements OnInit {
  form!: FormGroup;
  id: number;
  usuarios: Usuarios = new Usuarios();

  ngOnInit(): void {
    this.id = this.parametro.snapshot.params['id'];
    console.log("parametro proveniente del index " + this.id);
  this.api.getusuarioById(this.id).subscribe(data=>{
    this.usuarios = data;
    console.log(this.usuarios);
  },error => console.log(error));


  }

  constructor (private api:UsuariosService,private router:Router ,private parametro:ActivatedRoute){
    this.id = 0;
  }

  actualisaUsuarios(){
    this.api.actualizarUsuarios(this.usuarios).subscribe(data =>{
              console.log(data);
              this.goToUsuariosList();
               },
               error => console.log(error)
          );
     }

     goToUsuariosList(){
       this.router.navigate(['/UsuarioIndex']);
     }

  onSubmit(){

    console.log(this.usuarios);
    this.actualisaUsuarios();
  }

}
