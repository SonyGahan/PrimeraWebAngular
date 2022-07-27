import { Component, OnInit } from '@angular/core';
import { Instruccion } from 'src/assets/data/interface';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
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
      console.log(data);
      this.router.navigate(['/porfolio']);
      alert("La instrucción se agregó con éxito");
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio']);
  }

}
