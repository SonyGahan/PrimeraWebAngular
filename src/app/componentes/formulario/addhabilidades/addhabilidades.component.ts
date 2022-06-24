import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Habilidad } from 'src/assets/data/interface';

@Component({
  selector: 'app-addhabilidades',
  templateUrl: './addhabilidades.component.html',
  styleUrls: ['./addhabilidades.component.css']
})
export class AddhabilidadesComponent implements OnInit {
  
  nuevahabilidad: Habilidad = {
    programa: '', 
    porcentaje: '', 
  }

  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.nuevahabilidad); 
  }

  Agregar(nuevahabilidad:Habilidad){
    this.service.addHabilidades(nuevahabilidad)
    .subscribe(data =>{
      alert("La formación se agrego con éxito");
      this.router.navigate(['/porfolio']);
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
