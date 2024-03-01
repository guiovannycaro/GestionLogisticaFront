import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesService } from 'src/app/servicios/clientes/clientes.service';
import { Clientes } from 'src/app/modelos/clientes';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit{

  form!: FormGroup;
  clientes: Clientes  = new Clientes();

  constructor(private api:ClientesService,private router:Router){}

  ngOnInit(): void {

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }


  saveClientes(){
    this.api.createClientes(this.clientes).subscribe(data =>{
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
      this.saveClientes();
   }



}
