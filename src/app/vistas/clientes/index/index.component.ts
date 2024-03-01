import { Component,OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/api/api.service';
import { Router} from '@angular/router';
import { ClientesI } from '../../../modelos/clientes.interfaces'
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit{
  posts: ClientesI[] = [];

  constructor(private api:ApiService,private router:Router){}


  private getClientes(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.api.getAllClientes().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      userData => {this.posts = userData
        console.log(this.posts);
      } );
    }
  ngOnInit(): void {
    this.getClientes();
  }



  actualizarCliente(data:any){
    this.router.navigate(['/ClienteEditar',data]);
      }

      verCliente(data:any){
        this.router.navigate(['/ClienteListar',data]);
          }

      eliminarCliente(data:any){
            this.router.navigate(['/ClienteEliminar',data]);
              }

}
