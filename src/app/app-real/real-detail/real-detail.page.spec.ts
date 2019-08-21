import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDetailPage } from './real-detail.page';

describe('RealDetailPage', () => {
  let component: RealDetailPage;
  let fixture: ComponentFixture<RealDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
