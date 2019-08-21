import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProfilePage } from './travel-profile.page';

describe('TravelProfilePage', () => {
  let component: TravelProfilePage;
  let fixture: ComponentFixture<TravelProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
