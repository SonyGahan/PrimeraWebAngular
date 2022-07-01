import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Instruccion } from 'src/assets/data/interface';

@Component({
  selector: 'app-editar-estudios',
  templateUrl: './editar-estudios.component.html',
  styleUrls: ['./editar-estudios.component.css']
})
export class EditarEstudiosComponent implements OnInit {

  editarestudios: Instruccion = new Instruccion();


  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.editarestudios); 
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

  actualizar(editarestudios: Instruccion){
    this.service.editarInstrucciones(editarestudios)
      .subscribe ( data => {
        this.editarestudios=data;
        alert("El estudio se actualizó con exito");
        this.router.navigate(['/educacion']);
      })
  }
}
