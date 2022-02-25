import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiesitioComponent } from './piesitio.component';

describe('PiesitioComponent', () => {
  let component: PiesitioComponent;
  let fixture: ComponentFixture<PiesitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiesitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiesitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
