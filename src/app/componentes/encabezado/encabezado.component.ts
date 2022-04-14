import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Dpersonal } from 'src/assets/data/interface';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  dpersonalList: Dpersonal[]=[]
  constructor(private datosPorfolio:PorfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDpersonales().subscribe( data =>{
      this.dpersonalList=data;
      console.log(data);
    });
  }

}
