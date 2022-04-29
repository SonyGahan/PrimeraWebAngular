import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dpersonal, Experiencia, Habilidad, Informatica, Instruccion } from 'src/assets/data/interface';
import { urlback } from 'src/assets/data/rutabackend';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  
  private urlbase: string= urlback;
  constructor(private http:HttpClient) {}


  //Seccion Experiencia Laboral//

  //listado de Experiencia Laboral//
  obtenerExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.urlbase}/experiencia`);
  }

  obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }

  //Seccion Habilidades//

  //listado de Habilidades//
  obtenerHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.urlbase}/habilidad`);
  }


  
  //Seccion Formación Técnica Informática//

  //listado de Formación Técnica Informática//
  obtenerInformaticas():Observable<Informatica[]>{
    return this.http.get<Informatica[]>(`${this.urlbase}/informatica`);
  }

  //metodo agregar una nueva instruccion//
  addInformaticas(informatica: Informatica): Observable<Informatica>{
    return this.http.post<Informatica>(`${this.urlbase}/informatica/agregar`, informatica);
  }



  
  //Seccion Instruccion y Formacion Profesional//

  //listado de Instruccion//
  obtenerInstrucciones():Observable<Instruccion[]>{
    return this.http.get<Instruccion[]>(`${this.urlbase}/instruccion`);
  }

  //metodo agregar una nueva instruccion//
  addInstrucciones(instruccion:Instruccion): Observable<Instruccion>{
    return this.http.post<Instruccion>(`${this.urlbase}/instruccion/agregar`, instruccion);
  }



  // Encabezado metodos para Datos personales//

  //obtener Datos personales//
  obtenerDpersonales():Observable<Dpersonal[]>{
    return this.http.get<Dpersonal[]>(`${this.urlbase}/dpersonal`);
  }  


  

}

