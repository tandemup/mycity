import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealSearchPage } from './real-search.page';

describe('RealSearchPage', () => {
  let component: RealSearchPage;
  let fixture: ComponentFixture<RealSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealSearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
