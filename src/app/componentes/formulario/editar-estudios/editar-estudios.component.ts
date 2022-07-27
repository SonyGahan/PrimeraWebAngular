import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Instruccion } from 'src/assets/data/interface';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {

  estudios: Instruccion = null;


  constructor(private router: Router, private service: PorfolioService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.obtenerInstruccionesPorId(id).subscribe(
      data =>{this.estudios = data;
      }, err =>{
        alert("Error al modificar la experiencia del servidor");
        this.router.navigate(['/porfolio']);
      }
    )

  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.editarInstrucciones(id, this.estudios).subscribe(
      data => {
        this.router.navigate(['/porfolio']);
      }, err => {
        alert("Error al modificar la formación profesional");
        this.router.navigate(['/porfolio']);
      }
    )
  }

  cancelar() {
    this.router.navigate(['/porfolio'])
  }


}
