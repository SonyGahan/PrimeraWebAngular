import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/data/interface';

@Component({
  selector: 'app-addexperiencia',
  templateUrl: './addexperiencia.component.html',
  styleUrls: ['./addexperiencia.component.css']
})
export class AddexperienciaComponent implements OnInit {

  nuevaexperiencia: Experiencia = {
    nombre: '',
    perfil: '',
    finicio: '',
    ffinal: '',
    detalle: '',
    imagen: '',
  }

  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.nuevaexperiencia); 
  }

  Agregar(nuevaexperiencia:Experiencia){
    this.service.addExperiencias(nuevaexperiencia)
    .subscribe(data =>{
      alert("La formación se agrego con éxito");
      this.router.navigate(['/porfolio']);
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
