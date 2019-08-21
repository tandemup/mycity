import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioHomePage } from './radio-home.page';

describe('RadioHomePage', () => {
  let component: RadioHomePage;
  let fixture: ComponentFixture<RadioHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
