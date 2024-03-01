import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes } from 'src/app/modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent {
  form!: FormGroup;
  id: number;
  clientes: Clientes = new Clientes();

  ngOnInit(): void {
    this.id = this.parametro.snapshot.params['id'];
    console.log("parametro proveniente del index " + this.id);
  this.api.eliminarClientes(this.id).subscribe(data=>{
    this.clientes = data;
    console.log(this.clientes);
  },error => console.log(error));


  }

  constructor (private api:ClientesService,private router:Router ,private parametro:ActivatedRoute){
    this.id = 0;
  }





}
