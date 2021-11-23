import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../modelo/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  actividadURL = 'http://localhost:8080/actividad/';
  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Actividad[]>{
    return this.httpClient.get<Actividad[]>(this.actividadURL + 'lista');
  }
  public detail(id_act:number): Observable<Actividad>{
    return this.httpClient.get<Actividad>(this.actividadURL + ´detail/${id_act}´);
  }
  public detailname(nom_act: string): Observable<Actividad>{
    return this.httpClient.get<Actividad>(this.actividadURL + ´detailname/${nom_act}´);
  }

  public save(actividad: Actividad): Observable<any>{
    return this.httpClient.post<any>(this.actividadURL + 'create', actividad);
  }
  public update(id_act: number, nom_act: String): Observable<any>{
    return this.httpClient.put<any>(this.actividadURL + ´update/${id_act}´, actividad);
  }

  public delete(id_act: number):Observable<any>{
    return this.httpClient.delete<any>(this.actividadURL + ´delete/${id_act}´);
  }

}
