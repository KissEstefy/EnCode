import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarios:any = [];
  usuario:any = {
    username: 'Emily',
    email: 'emily@gmail.com',
    password: 'emily'
  }

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  
  // logeo(){
  //   this.httpClient.post('http://localhost:8888/authenticate', this.usuario, {responseType: 'text'})
  //   .subscribe(res=>{
  //     console.log('res', res);
  //     swal(res, "You clicked the button!", "success")
  //   });
  // }
  
  
  logeo(){
    this.httpClient.post('http://localhost:8888/authenticate', this.usuario, {responseType: 'text'})
    .subscribe(
    res => {
        swal(res, "You clicked the button!", "success")
        },
    err =>  {
      swal ( "Ups" ,  err.error ,  "error")
    });
  }

}
