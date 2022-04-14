import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddexperienciaComponent } from './addexperiencia.component';

describe('AddexperienciaComponent', () => {
  let component: AddexperienciaComponent;
  let fixture: ComponentFixture<AddexperienciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddexperienciaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexperienciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
