import { Component, OnInit } from '@angular/core';
import { ActividadService } from '../service/actividad.service';

@Component({
  selector: 'app-lista-actividades',
  templateUrl: './lista-actividades.component.html',
  styleUrls: ['./lista-actividades.component.css']
})
export class ListaActividadesComponent implements OnInit {


  actividades: Actividad[] = [];

  constructor(private actividadService: ActividadService) { }

  ngOnInit(): void {
  }

  cargarActividades(): void{
    this.actividadService.lista().subscribe(
      data => {
        this.actividades = data;
      },
      err =>{
        console.log(err);
      }
      );
  }

}
