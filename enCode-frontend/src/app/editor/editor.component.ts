import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from './../cargar-script.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor(private _CargarScript:CargarScriptService) {
    _CargarScript.Carga(["controlador/controlador"]);
   }

  ngOnInit(): void {
    
  }
 
}
