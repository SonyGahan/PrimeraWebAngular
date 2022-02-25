import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstInformaticosComponent } from './est-informaticos.component';

describe('EstInformaticosComponent', () => {
  let component: EstInformaticosComponent;
  let fixture: ComponentFixture<EstInformaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstInformaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstInformaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
