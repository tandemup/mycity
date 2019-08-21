import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealHomePage } from './real-home.page';

describe('RealHomePage', () => {
  let component: RealHomePage;
  let fixture: ComponentFixture<RealHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
