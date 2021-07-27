import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sf3Component } from './sf3.component';

describe('Sf3Component', () => {
  let component: Sf3Component;
  let fixture: ComponentFixture<Sf3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sf3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
