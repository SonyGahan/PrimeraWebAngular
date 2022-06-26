import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/data/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})

export class ExpLaboralComponent implements OnInit {
  experienciaList: Experiencia[]=[];
  constructor(private datosPorfolio:PorfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerExperiencias().subscribe( data =>{
    this.experienciaList=data;
    console.log(data)
  });
  }

  addlaboral(){
    this.router.navigate(['/exp-laboral/addexperiencia'])
  }

  editarlaboral(){
    this.router.navigate(['/exp-laboral/editar-experiencia']);
  }
}