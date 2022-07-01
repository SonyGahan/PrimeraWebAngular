import { Component, OnInit } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';
import { Instruccion } from 'src/assets/data/interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})

export class EstudiosComponent implements OnInit {
  
  estudiosList: Instruccion[]=[];

  addEducationForm: FormGroup = this.fb.group({
    id:[,[]], 
    formacion:[,[]],       
    titulo:[,[]],          
    organizacion:[,[]],             
    fegreso:[,[]]
    })

  estudios: any;


  constructor(private service:PorfolioService, private router: Router, private activatedRoute:ActivatedRoute, private fb: FormBuilder) { }
  

  ngOnInit(): void {
    this.service.obtenerInstrucciones().subscribe( data =>{
    this.estudiosList=data;
    });
  }

  addestudios(){
    this.router.navigate(['/estudios/addestudios']);
  }

  borrar(id?: number){
    this.service.borrarInstrucciones(id).subscribe(data =>{
      alert("La formación se eliminó con éxito");
      this.service.obtenerInstrucciones().subscribe( data =>{
        this.estudiosList=data;
      });
    });
  }

  editar(estudios: Instruccion): void{
    switchMap( ({id}) => this.service.obtenerInstruccionesPorId(+id))
      .subscribe( data => {this.estudios = data,
        
        this.addEducationForm.reset({
          id: this.estudios.id,
          formacion: this.estudios.formacion,   
          titulo: this.estudios.titulo,     
          organizacion: this.estudios.organizacion,     
          fegreso: this.estudios.fegreso
        })   
      });
    
    this.router.navigate(['/estudios/editar-estudios']);
  }

}
