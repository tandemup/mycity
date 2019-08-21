import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTabsPage } from './food-tabs.page';

describe('FoodTabsPage', () => {
  let component: FoodTabsPage;
  let fixture: ComponentFixture<FoodTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
