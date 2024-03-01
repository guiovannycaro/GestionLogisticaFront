import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes } from '../../../modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent   implements OnInit{
  id!: number;
  clientes: Clientes = new Clientes();



  ngOnInit(): void {
    this.id = this.parametro.snapshot.params['id'];
    console.log("parametro proveniente del index " + this.id);
  this.api.getClientesById(this.id).subscribe(data=>{
    this.clientes = data;
    console.log(this.clientes);
  },error => console.log(error));


  }

  constructor (private api:ClientesService,private router:Router ,private parametro:ActivatedRoute){
    this.id = 0;
  }





}
