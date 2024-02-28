import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesI } from '../../../modelos/clientes.interfaces'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent  implements OnInit{
  id!: number;
  post!: ClientesI;
  constructor(private api:ApiService,private router:Router,   private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];

    this.api.find(this.id).subscribe((data: ClientesI)=>{
      this.post = data;
    });
  }

}
