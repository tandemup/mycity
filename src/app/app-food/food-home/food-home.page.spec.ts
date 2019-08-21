import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodHomePage } from './food-home.page';

describe('FoodHomePage', () => {
  let component: FoodHomePage;
  let fixture: ComponentFixture<FoodHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
