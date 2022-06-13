import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Informatica } from 'src/assets/data/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-est-informaticos',
  templateUrl: './est-informaticos.component.html',
  styleUrls: ['./est-informaticos.component.css']
})
export class EstInformaticosComponent implements OnInit {
  informaticasList: Informatica[]=[];

  constructor(private datosPorfolio:PorfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerInformaticas().subscribe( data2 =>{
    this.informaticasList=data2;
    });
  }

  addinformatica(){
    this.router.navigate(['/est-informaticos/addinformaticos'])
  }
}
