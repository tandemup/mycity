import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddressAddPage } from './food-address-add.page';

describe('FoodAddressAddPage', () => {
  let component: FoodAddressAddPage;
  let fixture: ComponentFixture<FoodAddressAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddressAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddressAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
