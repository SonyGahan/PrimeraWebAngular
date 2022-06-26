import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Habilidad} from 'src/assets/data/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList: Habilidad[]=[];
  constructor(private datosPorfolio:PorfolioService, private router: Router) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerHabilidades().subscribe( data =>{
    this.habilidadesList=data;
    });
  }

  addhabilidad(){
    this.router.navigate(['/habilidades/addhabilidades'])
  }

  editarhabilidad(){
    this.router.navigate(['/habilidades/editar-habilidades']);
  }
}
