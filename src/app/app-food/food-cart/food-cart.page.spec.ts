import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCartPage } from './food-cart.page';

describe('FoodCartPage', () => {
  let component: FoodCartPage;
  let fixture: ComponentFixture<FoodCartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
