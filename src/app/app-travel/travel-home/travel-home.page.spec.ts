import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHomePage } from './travel-home.page';

describe('TravelHomePage', () => {
  let component: TravelHomePage;
  let fixture: ComponentFixture<TravelHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
