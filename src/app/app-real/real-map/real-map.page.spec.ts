import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealMapPage } from './real-map.page';

describe('RealMapPage', () => {
  let component: RealMapPage;
  let fixture: ComponentFixture<RealMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
