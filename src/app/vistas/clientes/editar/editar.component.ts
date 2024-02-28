import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesI } from '../../../modelos/clientes.interfaces'
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit{
  id!: number;
  post!: ClientesI;
  form!: FormGroup;

  constructor(private api:ApiService,private router:Router,   private route: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['postId'];
    this.api.find(this.id).subscribe((data: ClientesI)=>{
      this.post = data;
    });

this.form = new FormGroup({
  title: new FormControl('', [Validators.required]),
  body: new FormControl('', Validators.required)
});

}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.api.editarCliente(this.id, this.form.value).subscribe((res:any) => {
       console.log('Post updated successfully!');
       this.router.navigateByUrl('index');
  })
}

}
