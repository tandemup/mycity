import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMyorderPage } from './food-myorder.page';

describe('FoodMyorderPage', () => {
  let component: FoodMyorderPage;
  let fixture: ComponentFixture<FoodMyorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMyorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMyorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
