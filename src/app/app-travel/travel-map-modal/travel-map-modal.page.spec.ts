import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelMapModalPage } from './travel-map-modal.page';

describe('TravelMapModalPage', () => {
  let component: TravelMapModalPage;
  let fixture: ComponentFixture<TravelMapModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelMapModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelMapModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
