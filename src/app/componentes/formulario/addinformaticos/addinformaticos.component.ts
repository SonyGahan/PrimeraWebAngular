import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Informatica } from 'src/assets/data/interface';

@Component({
  selector: 'app-addinformaticos',
  templateUrl: './addinformaticos.component.html',
  styleUrls: ['./addinformaticos.component.css']
})


export class AddinformaticosComponent implements OnInit {

  nuevainformatica: Informatica = {
    nombre: '', 
    descripcion: '', 
  }

  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    console.log(this.nuevainformatica); 
  }

  Agregar(nuevainformatica: Informatica){
    this.service.addInformaticas(nuevainformatica)
    .subscribe(data =>{
      alert("La formación se agrego con éxito");
      this.router.navigate(['/porfolio']);
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
