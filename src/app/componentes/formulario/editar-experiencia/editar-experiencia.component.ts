import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Experiencia } from 'src/assets/data/interface';


@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})


export class EditarExperienciaComponent implements OnInit {

  expLab: Experiencia = null;


  constructor(private router: Router, private service: PorfolioService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.obtenerExperienciasPorId(id).subscribe(
      data =>{this.expLab = data;
      }, err =>{
        alert("Error al modificar la experiencia del servidor");
        this.router.navigate(['/porfolio']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.editarExperiencias(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['/porfolio']);
      }, err =>{
         alert("Error al modificar experiencia");
         this.router.navigate(['/porfolio']);
      }
    )
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
