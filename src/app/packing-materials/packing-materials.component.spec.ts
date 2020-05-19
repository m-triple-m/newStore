import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingMaterialsComponent } from './packing-materials.component';

describe('PackingMaterialsComponent', () => {
  let component: PackingMaterialsComponent;
  let fixture: ComponentFixture<PackingMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackingMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
