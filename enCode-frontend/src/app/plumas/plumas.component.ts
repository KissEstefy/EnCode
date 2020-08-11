import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from './../cargar-script.service';


@Component({
  selector: 'app-plumas',
  templateUrl: './plumas.component.html',
  styleUrls: ['./plumas.component.css']
})
export class PlumasComponent implements OnInit {

  constructor(private _CargarScript:CargarScriptService) { 
    _CargarScript.Carga(["controlador/controlador"]);
  }

  ngOnInit(): void {

  }

 
}
