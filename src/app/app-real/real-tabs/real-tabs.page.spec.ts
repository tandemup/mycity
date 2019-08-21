import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTabsPage } from './real-tabs.page';

describe('RealTabsPage', () => {
  let component: RealTabsPage;
  let fixture: ComponentFixture<RealTabsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealTabsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
