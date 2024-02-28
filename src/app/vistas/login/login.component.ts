
import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';


import { Router } from '@angular/router';

import {ApiService } from '../../servicios/api/api.service';
import { ResponceI} from '../../modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{



  userdata:any;

  constructor(private builder: FormBuilder,private api:ApiService,private router:Router){}

  loginform=this.builder.group({
    username:this.builder.control('',[Validators.required,Validators.email]),
    password:this.builder.control('',[Validators.required])
  });


  ngOnInit():void{
     this.checkLocalStorage();
  }

checkLocalStorage(){
  if(localStorage.getItem("token")){
  this.router.navigate(['dashboard']);
  }
}

  onSubmit()
  {

   if(this.loginform.valid){

    console.log(this.loginform.value);

         this.api.login(this.loginform.value).subscribe(
         res=>{
               this.userdata = res;
               console.log(this.userdata);

               if(this.userdata === true){
               // localStorage.setItem("token",this.userdata.result.token);


                            sessionStorage.setItem('username',this.userdata.username);
                            sessionStorage.setItem('userrole',this.userdata.userrole);
                            this.router.navigate(['/Dashboard']);

               }else{
                 alert('Clave Invalidad');
               }
              }

          );
    }else{
      alert('Porfavor ingrese  Informacion  valida.')
    }

  }


}
