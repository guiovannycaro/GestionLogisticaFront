import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Clientes } from '../../../modelos/clientes';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  implements OnInit{
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
}
