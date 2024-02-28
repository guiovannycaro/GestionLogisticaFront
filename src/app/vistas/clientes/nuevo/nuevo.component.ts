import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesI } from '../../../modelos/clientes.interfaces'
import { ApiService } from 'src/app/servicios/api/api.service';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  form!: FormGroup;
  posts: ClientesI[] = [];

  constructor(private api:ApiService,private router:Router){}

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit(){

    this.commitCli();
  }

  commitCli(){

    this.api.createCliente(this.posts).subscribe(
      (res:any) => { this.router.navigateByUrl('/ClienteIndex');}
    );


  }



  //Redirección a lista de usuarios
  redirectUserList(){
    this.router.navigate(['/ClienteIndex']);
  }

}
