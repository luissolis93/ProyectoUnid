import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  constructor(private http:HttpClient) { }

  obtenerGet (){
    return this.http.get('http://localhost:8080/fruteria_proyecto/v1/usuario');
  }

  obtenerPost (){
    return this.http.post('http://localhost:8080/fruteria_proyecto/v1/usuario',1);
  }
}
