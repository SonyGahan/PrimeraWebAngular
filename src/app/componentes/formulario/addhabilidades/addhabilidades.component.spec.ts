import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhabilidadesComponent } from './addhabilidades.component';

describe('AddhabilidadesComponent', () => {
  let component: AddhabilidadesComponent;
  let fixture: ComponentFixture<AddhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddhabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
