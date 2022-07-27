import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Informatica } from 'src/assets/data/interface';

@Component({
  selector: 'app-editar-informaticos',
  templateUrl: './editar-informaticos.component.html',
  styleUrls: ['./editar-informaticos.component.css']
})
export class EditarInformaticosComponent implements OnInit {

  informaticos: Informatica = null;

  constructor(private router: Router, private service: PorfolioService, private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.obtenerInformaticasPorId(id).subscribe(
      data =>{this.informaticos = data;
      }, err =>{
        alert("Error al modificar la formación informática del servidor");
        this.router.navigate(['/porfolio']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.editarInformaticas(id, this.informaticos).subscribe(
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
