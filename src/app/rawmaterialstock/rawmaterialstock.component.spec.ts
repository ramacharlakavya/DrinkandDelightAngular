import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawMaterialStockComponent } from './rawmaterialstock.component';

describe('RawMaterialStockComponent', () => {
  let component: RawMaterialStockComponent;
  let fixture: ComponentFixture<RawMaterialStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawMaterialStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawMaterialStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
