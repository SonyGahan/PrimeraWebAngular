import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-est-informaticos',
  templateUrl: './est-informaticos.component.html',
  styleUrls: ['./est-informaticos.component.css']
})
export class EstInformaticosComponent implements OnInit {
  estudiosinfList: any;
  habilidadesList: any;
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe( data =>{
    this.estudiosinfList=data.FormacionInf;
    });

    this.datosPorfolio.obtenerHabilidades().subscribe( data =>{
    this.habilidadesList=data;
    });
  }
}
