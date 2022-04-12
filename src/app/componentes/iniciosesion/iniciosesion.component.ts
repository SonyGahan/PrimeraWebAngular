import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {
  
  form: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = this.formBuilder.group(
      {
        
      }
    )
   }

  ngOnInit(): void {
  }

}
