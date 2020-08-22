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
    tituloPluma: '',
    descripcion: '',
    documentoHTML: `<h1>Hola Mundo</h1>
<p>Esto es una Prueba de Plumas</p>
<div id="func"></div>`,
    documentoCSS: `body{
    background: #FFF;
    color: #5e72e4;
  }
  p {
    color:red;
  }
  `,
    documentoJS: `function hola(){
    document.getElementById('func').innerHTML = 
    "<h3>hola</h3>";
}
hola();
`
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
