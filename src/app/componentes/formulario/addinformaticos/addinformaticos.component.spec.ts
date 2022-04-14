import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinformaticosComponent } from './addinformaticos.component';

describe('AddinformaticosComponent', () => {
  let component: AddinformaticosComponent;
  let fixture: ComponentFixture<AddinformaticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddinformaticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinformaticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
