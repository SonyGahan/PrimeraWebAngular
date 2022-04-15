import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Informatica } from 'src/assets/data/interface';

@Component({
  selector: 'app-est-informaticos',
  templateUrl: './est-informaticos.component.html',
  styleUrls: ['./est-informaticos.component.css']
})
export class EstInformaticosComponent implements OnInit {
  informaticasList: Informatica[]=[];

  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerInformaticas().subscribe( data2 =>{
    this.informaticasList=data2;
    });
  }
}
