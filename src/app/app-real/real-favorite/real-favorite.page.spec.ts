import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealFavoritePage } from './real-favorite.page';

describe('RealFavoritePage', () => {
  let component: RealFavoritePage;
  let fixture: ComponentFixture<RealFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealFavoritePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
