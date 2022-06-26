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
      console.log(data);
      this.router.navigate(['/porfolio']);
      alert("La formación se agrego con éxito");
    })
  }

  cancelar(){
    this.router.navigate(['/porfolio'])
  }

}
