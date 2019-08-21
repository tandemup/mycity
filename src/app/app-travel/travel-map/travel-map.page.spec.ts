import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMapPage } from './travel-map.page';

describe('TravelMapPage', () => {
  let component: TravelMapPage;
  let fixture: ComponentFixture<TravelMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
