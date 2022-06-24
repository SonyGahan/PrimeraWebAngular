import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInformaticosComponent } from './editar-informaticos.component';

describe('EditarInformaticosComponent', () => {
  let component: EditarInformaticosComponent;
  let fixture: ComponentFixture<EditarInformaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarInformaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarInformaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
