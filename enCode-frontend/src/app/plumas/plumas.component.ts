import { Component, OnInit } from '@angular/core';
import { CargarScriptService } from './../cargar-script.service';
import { PlumasService } from './../services/plumas.service';

 
@Component({
  selector: 'app-plumas',
  templateUrl: './plumas.component.html',
  styleUrls: ['./plumas.component.css']
})
export class PlumasComponent implements OnInit {
  plumas:any = []
  plumaSeleccionada:any 

  constructor(private plumasService: PlumasService) { 
    //private _CargarScript:CargarScriptService, (esto va en el constructor)
    //_CargarScript.Carga(["controlador/controlador"]);
  }

      
  ngOnInit(): void {
    this.plumasService.obtenerPlumas()
    .subscribe(res=>{
      this.plumas = res;
      console.log("Plumas:", this.plumas);
    },
    error=>{
      console.log(error);
    });
  }
 
 mostrar(){
   console.log(this.plumaSeleccionada);
 }
}
