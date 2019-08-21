import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealProfilePage } from './real-profile.page';

describe('RealProfilePage', () => {
  let component: RealProfilePage;
  let fixture: ComponentFixture<RealProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
