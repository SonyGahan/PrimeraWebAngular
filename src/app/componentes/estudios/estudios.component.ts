import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Instruccion } from 'src/assets/data/interface';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {

  estudiosList: Instruccion[] = [];


  constructor(private service: PorfolioService, private router: Router, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEstudios();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }


  cargarEstudios(): void {
    this.service.obtenerInstrucciones().subscribe(data => {
      this.estudiosList = data;
    });
  }

  addestudios() {
    this.router.navigate(['/estudios/addestudios']);
  }

  borrarEstudios(id?: number) {
    this.service.borrarInstrucciones(id).subscribe(data => {
      alert("La formación se eliminó con éxito");
      this.service.obtenerInstrucciones().subscribe(data => {
        this.estudiosList = data;
      });
    });
  }


}
