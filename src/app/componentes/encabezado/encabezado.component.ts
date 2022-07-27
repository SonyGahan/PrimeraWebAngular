import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { TokenService } from 'src/app/servicios/token.service';
import { Dpersonal } from 'src/assets/data/interface';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {
  dpersonalList: Dpersonal[] = []


  constructor(private datosPorfolio: PorfolioService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarDatosPersonales();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarDatosPersonales(): void {
    this.datosPorfolio.obtenerDpersonales().subscribe(data => { this.dpersonalList = data; });
  }
}
