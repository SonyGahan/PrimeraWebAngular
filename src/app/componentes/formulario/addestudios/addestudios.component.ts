import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addestudios',
  templateUrl: './addestudios.component.html',
  styleUrls: ['./addestudios.component.css']
})
export class AddestudiosComponent implements OnInit {

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
