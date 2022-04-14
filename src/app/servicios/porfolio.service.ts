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

  obtenerExperiencias():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.urlbase}/experiencia`);
  }

  obtenerDatos():Observable<any>{
    return this.http.get('/assets/data/data.json');
  }


  obtenerHabilidades():Observable<Habilidad[]>{
    return this.http.get<Habilidad[]>(`${this.urlbase}/habilidad`);
  }


  obtenerInformaticas():Observable<Informatica[]>{
    return this.http.get<Informatica[]>(`${this.urlbase}/informatica`);
  }

  obtenerInstrucciones():Observable<Instruccion[]>{
    return this.http.get<Instruccion[]>(`${this.urlbase}/instruccion`);
  }

  obtenerDpersonales():Observable<Dpersonal[]>{
    return this.http.get<Dpersonal[]>(`${this.urlbase}/dpersonal`);
  }  


}

