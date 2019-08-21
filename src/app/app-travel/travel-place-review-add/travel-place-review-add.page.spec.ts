import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlaceReviewAddPage } from './travel-place-review-add.page';

describe('TravelPlaceReviewAddPage', () => {
  let component: TravelPlaceReviewAddPage;
  let fixture: ComponentFixture<TravelPlaceReviewAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlaceReviewAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlaceReviewAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
