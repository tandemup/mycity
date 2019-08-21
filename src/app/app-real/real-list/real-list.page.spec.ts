import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealListPage } from './real-list.page';

describe('RealListPage', () => {
  let component: RealListPage;
  let fixture: ComponentFixture<RealListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
