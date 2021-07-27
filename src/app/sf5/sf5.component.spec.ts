import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf5Component } from './sf5.component';

describe('Sf5Component', () => {
  let component: Sf5Component;
  let fixture: ComponentFixture<Sf5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
