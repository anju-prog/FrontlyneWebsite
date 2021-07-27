import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf6Component } from './sf6.component';

describe('Sf6Component', () => {
  let component: Sf6Component;
  let fixture: ComponentFixture<Sf6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
