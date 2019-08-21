import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProfilePage } from './food-profile.page';

describe('FoodProfilePage', () => {
  let component: FoodProfilePage;
  let fixture: ComponentFixture<FoodProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
