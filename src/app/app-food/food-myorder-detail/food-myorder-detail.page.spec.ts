import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodMyorderDetailPage } from './food-myorder-detail.page';

describe('FoodMyorderDetailPage', () => {
  let component: FoodMyorderDetailPage;
  let fixture: ComponentFixture<FoodMyorderDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodMyorderDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodMyorderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
