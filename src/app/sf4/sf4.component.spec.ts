import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf4Component } from './sf4.component';

describe('Sf4Component', () => {
  let component: Sf4Component;
  let fixture: ComponentFixture<Sf4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
