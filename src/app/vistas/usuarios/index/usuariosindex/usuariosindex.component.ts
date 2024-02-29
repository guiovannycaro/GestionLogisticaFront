import { Component,OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios/usuarios.service';
import { Router} from '@angular/router';
import { UsuariosI } from 'src/app/modelos/usuarios.interface';

@Component({
  selector: 'app-usuariosindex',
  templateUrl: './usuariosindex.component.html',
  styleUrls: ['./usuariosindex.component.css']
})
export class UsuariosindexComponent  implements OnInit{

  usuarios: UsuariosI[]=[];
   constructor(private usService:UsuariosService,private ruta:Router) {}

  ngOnInit(): void {
     this.getUsuarios();
  }

private getUsuarios(){
   this.usService.getUsuariosList().subscribe(data => {
   this.usuarios = data;

   console.log(this.usuarios);
});

  }

  actualizarUsuarios(data:any){
this.ruta.navigate(['/UsuarioEditar',data]);
  }

  verUsuarios(data:any){
    this.ruta.navigate(['/UsuarioListar',data]);
      }

  eliminarUsuarios(data:any){
        this.ruta.navigate(['/UsuarioEliminar',data]);
          }
}
