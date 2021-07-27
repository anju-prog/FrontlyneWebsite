import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf2Component } from './sf2.component';

describe('Sf2Component', () => {
  let component: Sf2Component;
  let fixture: ComponentFixture<Sf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
