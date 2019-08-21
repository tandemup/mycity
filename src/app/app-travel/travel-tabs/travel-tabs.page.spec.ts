import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTabsPage } from './travel-tabs.page';

describe('TravelTabsPage', () => {
  let component: TravelTabsPage;
  let fixture: ComponentFixture<TravelTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
