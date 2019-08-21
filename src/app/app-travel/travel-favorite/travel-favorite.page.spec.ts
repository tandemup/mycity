import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFavoritePage } from './travel-favorite.page';

describe('TravelFavoritePage', () => {
  let component: TravelFavoritePage;
  let fixture: ComponentFixture<TravelFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelFavoritePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
