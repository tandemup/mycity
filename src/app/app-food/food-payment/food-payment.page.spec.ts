import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPaymentPage } from './food-payment.page';

describe('FoodPaymentPage', () => {
  let component: FoodPaymentPage;
  let fixture: ComponentFixture<FoodPaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodPaymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
