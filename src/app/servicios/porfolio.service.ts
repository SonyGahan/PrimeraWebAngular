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

  //metodo agregar una nueva experiencia//
  addExperiencias(nuevaexperiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.urlbase}/experiencia/agregar`, nuevaexperiencia);
  }

  //Seccion Habilidades//

  //listado de Habilidades//
  obtenerHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.urlbase}/habilidad`);
  }

  //metodo agregar una nueva habilidad//
  addHabilidades(nuevahabilidad:Habilidad): Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.urlbase}/habilidad/agregar`, nuevahabilidad);
  }
  
  //Seccion Formación Técnica Informática//

  //listado de Formación Técnica Informática//
  obtenerInformaticas():Observable<Informatica[]>{
    return this.http.get<Informatica[]>(`${this.urlbase}/informatica`);
  }

  //metodo agregar una nueva instruccion informatica//
  addInformaticas(nuevainformatica: Informatica): Observable<Informatica>{
    return this.http.post<Informatica>(`${this.urlbase}/informatica/agregar`, nuevainformatica);
  }



  
  //Seccion Instruccion y Formacion Profesional//

  //listado de Estudios//
  obtenerInstrucciones():Observable<Instruccion[]>{
    return this.http.get<Instruccion[]>(`${this.urlbase}/instruccion`);
  }

  //obtener Estudios por ID//
  obtenerInstruccionesPorId(id: number): Observable<Instruccion>{
    return this.http.get<Instruccion>(`${this.urlbase}/instruccion/${id}`);
   }


  //metodo agregar un nuevo estudio//
  addInstrucciones(nuevoestudio:Instruccion): Observable<Instruccion>{
    return this.http.post<Instruccion>(`${this.urlbase}/instruccion/agregar`, nuevoestudio);
  }

  //metodo para editar un estudio por ID//
  editarInstrucciones(editarestudio:Instruccion): Observable<Instruccion>{
    return this.http.put<Instruccion>(`${this.urlbase}/instruccion/editar/${editarestudio.id}`, editarestudio);
  }

  //metodo para eliminar un estudio por ID//
  borrarInstrucciones(id: number): Observable<Instruccion>{
    return this.http.delete<Instruccion>(`${this.urlbase}/instruccion/eliminar/${id}`);
   }




  // Encabezado metodos para Datos personales//

  //obtener Datos personales//
  obtenerDpersonales():Observable<Dpersonal[]>{
    return this.http.get<Dpersonal[]>(`${this.urlbase}/dpersonal`);
  }  


  

}

