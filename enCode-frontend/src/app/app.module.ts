import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CargarScriptService } from './cargar-script.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AceEditorModule } from 'ng2-ace-editor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EditorComponent } from './editor/editor.component';
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlumasComponent } from './plumas/plumas.component';
import { DetallePlumaComponent } from './detalle-pluma/detalle-pluma.component';
import { IndexComponent } from './index/index.component';
import { NavbarLogueoComponent } from './navbar-logueo/navbar-logueo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProyectosComponent,
    LoginComponent,
    RegistroComponent,
    EditorComponent,
    DetalleProyectoComponent,
    PerfilComponent,
    PlumasComponent,
    DetallePlumaComponent,
    IndexComponent,
    NavbarLogueoComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    AceEditorModule
  ],
  providers: [
    CargarScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
