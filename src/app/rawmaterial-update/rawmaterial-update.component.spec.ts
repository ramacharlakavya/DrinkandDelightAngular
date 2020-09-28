import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawmaterialUpdateComponent } from './rawmaterial-update.component';

describe('RawmaterialUpdateComponent', () => {
  let component: RawmaterialUpdateComponent;
  let fixture: ComponentFixture<RawmaterialUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawmaterialUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawmaterialUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
