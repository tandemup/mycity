import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCategoryPage } from './travel-category.page';

describe('TravelCategoryPage', () => {
  let component: TravelCategoryPage;
  let fixture: ComponentFixture<TravelCategoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelCategoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
