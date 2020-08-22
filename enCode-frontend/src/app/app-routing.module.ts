import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProyectosComponent } from './proyectos/proyectos.component'
import { DetalleProyectoComponent } from './detalle-proyecto/detalle-proyecto.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { EditorComponent } from './editor/editor.component';
import { PerfilComponent } from './perfil/perfil.component';
import { PlumasComponent } from './plumas/plumas.component';
import { DetallePlumaComponent } from './detalle-pluma/detalle-pluma.component'





const routes: Routes = [
  {
    path: 'index', 
    component: IndexComponent
  },
  {
    path: '', 
    redirectTo: 'index', 
    pathMatch: 'full'
  },
  {
    path: 'dashboard', 
    component: DashboardComponent
  },
  {
    path: 'proyectos', 
    component: ProyectosComponent
  },
  {
    path: 'login', 
    component: LoginComponent
  },
  {
    path: 'registrarse', 
    component: RegistroComponent
  },
  {
    path: 'editor', 
    component: EditorComponent
  },
  {
    path: 'detalleProyecto', 
    component: DetalleProyectoComponent
  },
  {
    path: 'perfil', 
    component: PerfilComponent
  },
  {
    path: 'plumas', 
    component: PlumasComponent
  },
  {
    path: 'detallePluma', 
    component: DetallePlumaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
