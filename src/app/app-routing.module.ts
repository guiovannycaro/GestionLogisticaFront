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


const routes: Routes = [
  {path: '' , redirectTo:'Login' , pathMatch:'full'},
  {path:'Login' , component:LoginComponent},
  {path:'Dashboard' , component:DashboardComponent},
  {path:'ClienteIndex' , component:IndexComponent},
  {path:'ClienteNuevo' , component:NuevoComponent},
  {path:'ClienteEditar/:id' , component:EditarComponent},
  {path:'ClienteListar/:id' , component:ListarComponent},
  {path:'ClienteEliminar/:id' , component:EliminarComponent},
  {path:'ClienteBuscar/:id' , component:BuscarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent,DashboardComponent,NuevoComponent,EditarComponent,ListarComponent,EliminarComponent,BuscarComponent,IndexComponent]
