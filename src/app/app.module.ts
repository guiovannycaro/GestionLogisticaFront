import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { IndexComponent } from './vistas/clientes/index/index.component';
import { UsuariosindexComponent } from './vistas/usuarios/index/usuariosindex/usuariosindex.component';
import { ReactiveFormsModule,FormsModule} from  '@angular/forms';
import {HttpClientModule} from  '@angular/common/http';
import { LoginComponent } from './vistas/login/login.component';
import { RegistrarseComponent } from './vistas/registrarse/registrarse/registrarse.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    IndexComponent,
    UsuariosindexComponent,
    LoginComponent,
    RegistrarseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
