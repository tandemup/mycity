import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodItemPage } from './food-item.page';

describe('FoodItemPage', () => {
  let component: FoodItemPage;
  let fixture: ComponentFixture<FoodItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
