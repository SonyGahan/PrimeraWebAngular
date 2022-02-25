import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyFreelanceComponent } from './proy-freelance.component';

describe('ProyFreelanceComponent', () => {
  let component: ProyFreelanceComponent;
  let fixture: ComponentFixture<ProyFreelanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyFreelanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyFreelanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
