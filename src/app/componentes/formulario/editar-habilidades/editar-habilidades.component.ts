import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Habilidad } from 'src/assets/data/interface';

@Component({
  selector: 'app-editar-habilidades',
  templateUrl: './editar-habilidades.component.html',
  styleUrls: ['./editar-habilidades.component.css']
})
export class EditarHabilidadesComponent implements OnInit {

  habilidad: Habilidad = null;


  constructor(private router: Router, private service: PorfolioService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.obtenerHabilidadesPorId(id).subscribe(
      data =>{this.habilidad = data;
      }, err =>{
        alert("Error al modificar la experiencia del servidor");
        this.router.navigate(['/porfolio']);
      }
    )
  }


  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.editarHabilidades(id, this.habilidad).subscribe(
      data => {
        this.router.navigate(['/porfolio']);
      }, err =>{
         alert("Error al modificar la habilidad");
         this.router.navigate(['/porfolio']);
      }
    )
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }
}
