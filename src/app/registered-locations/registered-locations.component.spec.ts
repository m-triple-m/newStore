import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredLocationsComponent } from './registered-locations.component';

describe('RegisteredLocationsComponent', () => {
  let component: RegisteredLocationsComponent;
  let fixture: ComponentFixture<RegisteredLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
