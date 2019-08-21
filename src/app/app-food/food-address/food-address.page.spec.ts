import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddressPage } from './food-address.page';

describe('FoodAddressPage', () => {
  let component: FoodAddressPage;
  let fixture: ComponentFixture<FoodAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
