import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlaceReviewPage } from './travel-place-review.page';

describe('TravelPlaceReviewPage', () => {
  let component: TravelPlaceReviewPage;
  let fixture: ComponentFixture<TravelPlaceReviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlaceReviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlaceReviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
