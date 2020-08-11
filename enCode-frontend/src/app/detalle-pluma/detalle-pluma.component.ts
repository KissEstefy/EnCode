import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from './../cargar-script.service';
import { HttpClient } from '@angular/common/http';

 
@Component({
  selector: 'app-detalle-pluma',
  templateUrl: './detalle-pluma.component.html',
  styleUrls: ['./detalle-pluma.component.css']
})
export class DetallePlumaComponent implements OnInit {

  plumas:any = [];
    pluma:any = {
    tituloPluma: 'Emily',
    descripcion: 'emily@gmail.com',
    documentoHTML: "Documento HTML 1",
    documentoCSS: "Documento CSS 1",
    documentoJS: "Documento JS 1"
  }

  constructor(private _CargarScript:CargarScriptService) { 
    _CargarScript.Carga(["controlador/controlador"]);
  }

  ngOnInit(): void {
  }

  guarda(){
    console.log(this.pluma.tituloPluma);
  }
  

}
