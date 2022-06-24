import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Instruccion } from 'src/assets/data/interface';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { urlback } from 'src/assets/data/rutabackend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addestudios',
  templateUrl: './addestudios.component.html',
  styleUrls: ['./addestudios.component.css']
})
export class AddestudiosComponent implements OnInit {

  nuevoestudio: Instruccion = {
    formacion: '', 
    titulo: '', 
    organizacion: '', 
    fegreso: '', 
  }


  constructor(private router: Router, private service: PorfolioService) {}
  

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.nuevoestudio); 
  }

  Agregar(nuevoestudio:Instruccion){
    this.service.addInstrucciones(nuevoestudio)
    .subscribe(data =>{
      alert("La formación se agrego con éxito");
      this.router.navigate(['/porfolio']);
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
