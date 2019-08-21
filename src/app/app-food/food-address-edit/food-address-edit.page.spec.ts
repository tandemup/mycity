import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodAddressEditPage } from './food-address-edit.page';

describe('FoodAddressEditPage', () => {
  let component: FoodAddressEditPage;
  let fixture: ComponentFixture<FoodAddressEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodAddressEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodAddressEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
