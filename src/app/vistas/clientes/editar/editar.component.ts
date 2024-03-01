import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes } from '../../../modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit{
  id: number;
  clientes: Clientes = new Clientes();

  constructor(private api:ClientesService,private router:Router,   private route: ActivatedRoute ,private parametro:ActivatedRoute){
    this.id = 0;
  }

  ngOnInit(): void {
    this.id = this.parametro.snapshot.params['id'];
    console.log("parametro proveniente del index " + this.id);
  this.api.getClientesById(this.id).subscribe(data=>{
    this.clientes = data;
    console.log(this.clientes);
  },error => console.log(error));


  }

  actualisaUsuarios(){
    this.api.actualizarClientes(this.clientes).subscribe(data =>{
              console.log(data);
              this.goToClientesList();
               },
               error => console.log(error)
          );
     }

     goToClientesList(){
       this.router.navigate(['/ClienteIndex']);
     }

  onSubmit(){

    console.log(this.clientes);
    this.actualisaUsuarios();
  }

}
