import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateSpaceComponent } from './calculate-space.component';

describe('CalculateSpaceComponent', () => {
  let component: CalculateSpaceComponent;
  let fixture: ComponentFixture<CalculateSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculateSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
