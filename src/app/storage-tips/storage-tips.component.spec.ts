import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StorageTipsComponent } from './storage-tips.component';

describe('StorageTipsComponent', () => {
  let component: StorageTipsComponent;
  let fixture: ComponentFixture<StorageTipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StorageTipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StorageTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
