import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelSearchPage } from './travel-search.page';

describe('TravelSearchPage', () => {
  let component: TravelSearchPage;
  let fixture: ComponentFixture<TravelSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
