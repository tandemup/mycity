import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCompletePage } from './food-complete.page';

describe('FoodCompletePage', () => {
  let component: FoodCompletePage;
  let fixture: ComponentFixture<FoodCompletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodCompletePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCompletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
