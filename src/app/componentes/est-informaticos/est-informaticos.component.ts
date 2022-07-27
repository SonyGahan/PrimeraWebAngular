import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Informatica } from 'src/assets/data/interface';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-est-informaticos',
  templateUrl: './est-informaticos.component.html',
  styleUrls: ['./est-informaticos.component.css']
})
export class EstInformaticosComponent implements OnInit {
  informaticasList: Informatica[] = [];

  constructor(private datosPorfolio: PorfolioService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarInformatica();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarInformatica(): void {
    this.datosPorfolio.obtenerInformaticas().subscribe(data2 => {
      this.informaticasList = data2;
    });
  }


  addinformatica() {
    this.router.navigate(['/est-informaticos/addinformaticos'])
  }


  borrarInformatica(id?: number) {
    this.datosPorfolio.borrarInformaticas(id).subscribe(data => {
      alert("La formación tecnica informática se eliminó con éxito");
      this.datosPorfolio.obtenerInformaticas().subscribe(data => {
        this.informaticasList = data;
      });
    });
  }
}
