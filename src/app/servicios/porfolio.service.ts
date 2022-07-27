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
  public obtenerExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.urlbase}/experiencia`);
  }

  public obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }

  //obtener Experiencias por ID//
  public obtenerExperienciasPorId(id?: number): Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.urlbase}/experiencia/${id}`);
   }


  //metodo agregar una nueva experiencia//
  public addExperiencias(nuevaexperiencia:Experiencia): Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.urlbase}/experiencia/agregar`, nuevaexperiencia);
  }

  //metodo para editar una experiencia por ID//
  public editarExperiencias(id: number, editarexperiencia: Experiencia): Observable<any>{
    return this.http.put<any>(`${this.urlbase}/experiencia/editar/${id}`, editarexperiencia);
  }

  

  //metodo para eliminar una experiencia por ID//
  public borrarExperiencias(id?: number): Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.urlbase}/experiencia/eliminar/${id}`);
   }




  //Seccion Habilidades//

  //listado de Habilidades//
  public obtenerHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.urlbase}/habilidad`);
  }

  //obtener Habilidades por ID//
  public obtenerHabilidadesPorId(id?: number): Observable<Habilidad>{
    return this.http.get<Habilidad>(`${this.urlbase}/habilidad/${id}`);
   }


  //metodo agregar una nueva habilidad//
  public addHabilidades(nuevahabilidad:Habilidad): Observable<Habilidad>{
    return this.http.post<Habilidad>(`${this.urlbase}/habilidad/agregar`, nuevahabilidad);
  }

  //metodo para editar una habilidad por ID//
  public editarHabilidades(id: number, editarhabilidad:Habilidad): Observable<Habilidad>{
    return this.http.put<Habilidad>(`${this.urlbase}/habilidad/editar/${editarhabilidad.id}`, editarhabilidad);
  }

  //metodo para eliminar una habilidad por ID//
  public borrarHabilidades(id?: number): Observable<Habilidad>{
    return this.http.delete<Habilidad>(`${this.urlbase}/habilidad/eliminar/${id}`);
   }
  
  //Seccion Formación Técnica Informática//

  //listado de Formación Técnica Informática//
  public obtenerInformaticas():Observable<Informatica[]>{
    return this.http.get<Informatica[]>(`${this.urlbase}/informatica`);
  }

  //obtener Formación Técnica Informática por ID//
  public obtenerInformaticasPorId(id?: number): Observable<Informatica>{
    return this.http.get<Informatica>(`${this.urlbase}/informatica/${id}`);
   }

  //metodo agregar una nueva instruccion informatica//
  public addInformaticas(nuevainformatica: Informatica): Observable<Informatica>{
    return this.http.post<Informatica>(`${this.urlbase}/informatica/agregar`, nuevainformatica);
  }

  //metodo para editar una instruccion informatica por ID//
  public editarInformaticas(id: number, editarinformatica:Informatica): Observable<Informatica>{
    return this.http.put<Informatica>(`${this.urlbase}/informatica/editar/${editarinformatica.id}`, editarinformatica);
  }

  //metodo para eliminar una instruccion informatica por ID//
  public borrarInformaticas(id?: number): Observable<Informatica>{
    return this.http.delete<Informatica>(`${this.urlbase}/informatica/eliminar/${id}`);
   }


  
  //Seccion Instruccion y Formacion Profesional//

  //listado de Estudios//
  public obtenerInstrucciones():Observable<Instruccion[]>{
    return this.http.get<Instruccion[]>(`${this.urlbase}/instruccion`);
  }

  //obtener Estudios por ID//
  public obtenerInstruccionesPorId(id?: number): Observable<Instruccion>{
    return this.http.get<Instruccion>(`${this.urlbase}/instruccion/${id}`);
   }


  //metodo agregar un nuevo estudio//
  public addInstrucciones(nuevoestudio:Instruccion): Observable<Instruccion>{
    return this.http.post<Instruccion>(`${this.urlbase}/instruccion/agregar`, nuevoestudio);
  }

  //metodo para editar un estudio por ID//
  public editarInstrucciones(id: number, editarestudio:Instruccion): Observable<Instruccion>{
    return this.http.put<Instruccion>(`${this.urlbase}/instruccion/editar/${editarestudio.id}`, editarestudio);
  }

  //metodo para eliminar un estudio por ID//
  public borrarInstrucciones(id?: number): Observable<Instruccion>{
    return this.http.delete<Instruccion>(`${this.urlbase}/instruccion/eliminar/${id}`);
   }




  // Encabezado metodos para Datos personales//

  //obtener Datos personales//
  public obtenerDpersonales():Observable<Dpersonal[]>{
    return this.http.get<Dpersonal[]>(`${this.urlbase}/dpersonal`);
  } 
  
  //obtener Datos personales por ID//
  public obtenerDpersonalesPorId(id?: number): Observable<Dpersonal>{
    return this.http.get<Dpersonal>(`${this.urlbase}/dpersonal/${id}`);
   }

  //Editar Datos Personales//
  public editarDpersonales(id: number, editardatospersonal:Dpersonal): Observable<Dpersonal>{
    return this.http.put<Dpersonal>(`${this.urlbase}/instruccion/editar/${editardatospersonal.id}`, editardatospersonal);
  }

}

