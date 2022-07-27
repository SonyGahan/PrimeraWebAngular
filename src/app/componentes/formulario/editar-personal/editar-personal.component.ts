import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Dpersonal } from 'src/assets/data/interface';

@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: ['./editar-personal.component.css']
})
export class EditarPersonalComponent implements OnInit {

  datosPersonales: Dpersonal = null;

  constructor(private router: Router, private service: PorfolioService, private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.obtenerDpersonalesPorId(id).subscribe(
      data => {
        this.datosPersonales = data;
      }, err => {
        alert("Error al modificar la experiencia del servidor");
        this.router.navigate(['/porfolio']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.editarDpersonales(id, this.datosPersonales).subscribe(
      data => {
        this.router.navigate(['/porfolio']);
      }, err => {
        alert("Error al modificar los datos personales");
        this.router.navigate(['/porfolio']);
      }
    )
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
