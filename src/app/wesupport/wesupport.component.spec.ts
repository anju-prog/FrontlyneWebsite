import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WesupportComponent } from './wesupport.component';

describe('WesupportComponent', () => {
  let component: WesupportComponent;
  let fixture: ComponentFixture<WesupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WesupportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WesupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
