import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/data/interface';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-exp-laboral',
  templateUrl: './exp-laboral.component.html',
  styleUrls: ['./exp-laboral.component.css']
})

export class ExpLaboralComponent implements OnInit {
  experienciaList: Experiencia[]=[];


  constructor(private datosPorfolio:PorfolioService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.datosPorfolio.obtenerExperiencias().subscribe( data =>{this.experienciaList=data;});
  }


  addExperiencia(){
    this.router.navigate(['/exp-laboral/addexperiencia'])
  }


  borrarExperiencia(id?: number){
    this.datosPorfolio.borrarExperiencias(id).subscribe(data =>{
      alert("La experiencia se eliminó con éxito");
      this.datosPorfolio.obtenerExperiencias().subscribe( data =>{
        this.experienciaList=data;
      });
    });
  }
  
  editarExperiencia(id?: number){
    this.router.navigate(['/exp-laboral/editar-experiencia/:id'])
  }
}