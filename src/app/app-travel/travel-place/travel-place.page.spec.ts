import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPlacePage } from './travel-place.page';

describe('TravelPlacePage', () => {
  let component: TravelPlacePage;
  let fixture: ComponentFixture<TravelPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelPlacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
