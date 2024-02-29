import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Usuarios } from 'src/app/modelos/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
@Component({
  selector: 'app-usuariosnuevo',
  templateUrl: './usuariosnuevo.component.html',
  styleUrls: ['./usuariosnuevo.component.css']
})
export class UsuariosnuevoComponent  implements OnInit{


  form!: FormGroup;
  usuarios: Usuarios = new Usuarios();


  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  constructor (private api:UsuariosService,private router:Router){}


  get f(){
    return this.form.controls;
  }

  saveUsuarios(){
this.api.createUsuarios(this.usuarios).subscribe(data =>{
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
     this.saveUsuarios();
  }
}
