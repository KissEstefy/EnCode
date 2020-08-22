import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CargarScriptService } from './../cargar-script.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  descripcion:any
  titulo:any

  plumas:any = []
  pluma:any = {
    tituloPluma: '',
    descripcionPluma: '',
    documentoHTML: '',
    documentoCSS: '',
    documentoJS:''
  }

  constructor(private _CargarScript:CargarScriptService, private httpClient:HttpClient) {
    _CargarScript.Carga(["controlador/controlador"]);
   }

  ngOnInit(): void {
    
  }



//funcion para almacenar una pluma
  guardarPluma(){
    console.log(this.pluma);
   
    // var prueba = {
    //   titulo: this.titulo,
    //   descripcion: this.descripcion,
      this.pluma.documentoHTML = document.getElementById('html-editor').innerText
      this.pluma.documentoCSS = document.getElementById('css-editor').innerText
      this.pluma.documentoJS = document.getElementById('js-editor').innerText
    // }
    //  console.log('prueba',prueba);

     this.httpClient.post('http://localhost:8888/plumas/pluma', this.pluma, {})
    .subscribe(res=>{
      console.log("Se almaceno:", res);
    },
    error=>{
      console.log(error); 
    });



  }
 
}
