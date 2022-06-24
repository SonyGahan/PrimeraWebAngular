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

  editarestudio: Instruccion = {
    formacion: '', 
    titulo: '', 
    organizacion: '', 
    fegreso: '', 
  }


  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.editarestudio); 
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

  Editar(editarestudio:Instruccion){

  }

}
