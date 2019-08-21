import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelRecommendedPage } from './travel-recommended.page';

describe('TravelRecommendedPage', () => {
  let component: TravelRecommendedPage;
  let fixture: ComponentFixture<TravelRecommendedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelRecommendedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelRecommendedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
