import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios:any = [];
  usuario:any = {
    username: 'Emily',
    email: 'emily@gmail.com',
    password: 'emily'
  }

  constructor(private httpClient:HttpClient) {

   } 

  ngOnInit(): void {
  }

  // guardar(){
  //   this.httpClient.post('http://localhost:8888/register', this.usuario, {responseType: 'text'})
  //   .subscribe(res=>{
  //     console.log(res);
  //   });
  // }

  
  guardar(){
    this.httpClient.post('http://localhost:8888/register', this.usuario, {responseType: 'text'})
    .subscribe(
    res => {
        swal(res, "You clicked the button!", "success")
        },
    err =>  {
      swal ( "Ups" ,  err.error ,  "error")
    });
  }

}
