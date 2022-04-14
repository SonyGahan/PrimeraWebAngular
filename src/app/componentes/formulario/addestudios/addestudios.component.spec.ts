import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddestudiosComponent } from './addestudios.component';

describe('AddestudiosComponent', () => {
  let component: AddestudiosComponent;
  let fixture: ComponentFixture<AddestudiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddestudiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddestudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
