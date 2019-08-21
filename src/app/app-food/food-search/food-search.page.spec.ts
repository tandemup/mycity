import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSearchPage } from './food-search.page';

describe('FoodSearchPage', () => {
  let component: FoodSearchPage;
  let fixture: ComponentFixture<FoodSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
