import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSummaryPage } from './food-summary.page';

describe('FoodSummaryPage', () => {
  let component: FoodSummaryPage;
  let fixture: ComponentFixture<FoodSummaryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSummaryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSummaryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
