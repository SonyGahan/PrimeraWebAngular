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

  constructor(private router: Router, private service: PorfolioService) { }

  ngOnInit(): void {
  }
  
  Guardar(informatica: Informatica){
    this.service.addInformaticas(informatica)
    .subscribe(data =>{
      alert('Se agrego con exito!');
      this.router.navigate(["porfolio"]);
    })
  }
  

}
