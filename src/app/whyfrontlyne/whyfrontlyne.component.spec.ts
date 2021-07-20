import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyfrontlyneComponent } from './whyfrontlyne.component';

describe('WhyfrontlyneComponent', () => {
  let component: WhyfrontlyneComponent;
  let fixture: ComponentFixture<WhyfrontlyneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyfrontlyneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyfrontlyneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
