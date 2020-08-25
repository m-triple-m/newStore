import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingTipsComponent } from './packing-tips.component';

describe('PackingTipsComponent', () => {
  let component: PackingTipsComponent;
  let fixture: ComponentFixture<PackingTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
