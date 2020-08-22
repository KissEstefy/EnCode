import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navegarLogin(){
    this.router.navigate(['/login']);
  }
  navegarProyectos(){
    this.router.navigate(['/proyectos']);
  }
}
