import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityEditComponent } from './quantity-edit.component';

describe('QuantityEditComponent', () => {
  let component: QuantityEditComponent;
  let fixture: ComponentFixture<QuantityEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantityEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantityEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
