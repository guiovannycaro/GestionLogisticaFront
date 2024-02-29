import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component';

import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { IndexComponent } from './vistas/clientes/index/index.component';
import { NuevoComponent } from './vistas/clientes/nuevo/nuevo.component';
import { EditarComponent } from './vistas/clientes/editar/editar.component';
import { ListarComponent } from './vistas/clientes/listar/listar.component';
import { EliminarComponent } from './vistas/clientes/eliminar/eliminar.component';
import { BuscarComponent } from './vistas/clientes/buscar/buscar.component';

import { UsuariosindexComponent } from './vistas/usuarios/index/usuariosindex/usuariosindex.component';
import { UsuariosbuscarComponent } from './vistas/usuarios/buscar/usuariosbuscar/usuariosbuscar.component';
import { UsuarioseditarComponent } from './vistas/usuarios/editar/usuarioseditar/usuarioseditar.component';
import { UsuarioseliminarComponent } from './vistas/usuarios/eliminar/usuarioseliminar/usuarioseliminar.component';
import { UsuariosnuevoComponent } from './vistas/usuarios/nuevo/usuariosnuevo/usuariosnuevo.component';
import { UsuariosListarComponent } from './vistas/usuarios/lista/usuarios-listar/usuarios-listar.component';
import {RegistrarseComponent } from './vistas/registrarse/registrarse/registrarse.component';
const routes: Routes = [
  {path: '' , redirectTo:'Login' , pathMatch:'full'},
  {path:'Login' , component:LoginComponent},
  {path:'Dashboard' , component:DashboardComponent},
  {path:'ClienteIndex' , component:IndexComponent},
  {path:'ClienteNuevo' , component:NuevoComponent},
  {path:'ClienteEditar/:id' , component:EditarComponent},
  {path:'ClienteListar/:id' , component:ListarComponent},
  {path:'ClienteEliminar/:id' , component:EliminarComponent},
  {path:'ClienteBuscar/:id' , component:BuscarComponent},
  {path:'UsuarioIndex' , component:UsuariosindexComponent},
  {path:'UsuarioNuevo' , component:UsuariosnuevoComponent},
  {path:'UsuarioEditar/:id' , component:UsuarioseditarComponent},
  {path:'UsuarioListar/:id' , component:UsuariosListarComponent},
  {path:'UsuarioEliminar/:id' , component:UsuarioseliminarComponent},
  {path:'UsuarioBuscar/:id' , component:UsuariosbuscarComponent},
  {path:'Registrarse' , component:RegistrarseComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent
  ,NuevoComponent,EditarComponent,ListarComponent,EliminarComponent,BuscarComponent,IndexComponent
,UsuariosindexComponent,UsuariosnuevoComponent,UsuarioseditarComponent,UsuariosListarComponent,UsuarioseliminarComponent
,UsuariosbuscarComponent,RegistrarseComponent
]
