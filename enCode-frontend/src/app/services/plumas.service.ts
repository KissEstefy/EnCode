import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlumasService {

  constructor(private httpClient:HttpClient) { }

  obtenerPlumas():Observable<any>{
    return this.httpClient.get('http://localhost:8888/plumas',{});
  }

}
