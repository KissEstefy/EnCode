import { Component, OnInit } from '@angular/core';
import { ProyectosService } from './../services/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos:any = []

  constructor(private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.proyectosService.obtenerProyectos()
    .subscribe(res=>{
      this.proyectos = res;
      console.log("proyectos:", this.proyectos);
    },
    error=>{
      console.log(error);
    });
  }

}
