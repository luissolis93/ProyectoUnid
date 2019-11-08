import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styles: []
})
export class DataTableComponent implements OnInit {

  public datosRecibidos;
  constructor(private ConexionService:ConexionService) { }

  ngOnInit() {
    this.ConexionService.obtenerGet().subscribe(data=>{      
      this.datosRecibidos=data
      console.log(this.datosRecibidos);    
    })
  }

}
