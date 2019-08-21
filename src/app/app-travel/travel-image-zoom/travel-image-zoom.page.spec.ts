import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelImageZoomPage } from './travel-image-zoom.page';

describe('TravelImageZoomPage', () => {
  let component: TravelImageZoomPage;
  let fixture: ComponentFixture<TravelImageZoomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelImageZoomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelImageZoomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
