import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Instruccion } from 'src/assets/data/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent implements OnInit {
  estudiosList: Instruccion[]=[];
  constructor(private datosPorfolio:PorfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerInstrucciones().subscribe( data =>{
    this.estudiosList=data;
    });
  }

  addestudios(){
    this.router.navigate(['/estudios/addestudios'])
  }

}
