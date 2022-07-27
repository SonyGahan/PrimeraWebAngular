import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Habilidad } from 'src/assets/data/interface';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidadesList: Habilidad[] = [];


  constructor(private datosPorfolio: PorfolioService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarHabilidad(): void {
    this.datosPorfolio.obtenerHabilidades().subscribe(data => {
      this.habilidadesList = data;
    });
  }

  addhabilidad() {
    this.router.navigate(['/habilidades/addhabilidades'])
  }

  borrarHabilidad(id?: number) {
    this.datosPorfolio.borrarHabilidades(id).subscribe(data => {
      alert("La experiencia se eliminó con éxito");
      this.datosPorfolio.obtenerHabilidades().subscribe(data => {
        this.habilidadesList = data;
      });
    });
  }
}
