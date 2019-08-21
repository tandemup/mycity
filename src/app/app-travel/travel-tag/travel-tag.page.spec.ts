import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelTagPage } from './travel-tag.page';

describe('TravelTagPage', () => {
  let component: TravelTagPage;
  let fixture: ComponentFixture<TravelTagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelTagPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelTagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
