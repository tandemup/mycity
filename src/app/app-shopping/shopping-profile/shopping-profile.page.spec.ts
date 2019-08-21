import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingProfilePage } from './shopping-profile.page';

describe('ShoppingProfilePage', () => {
  let component: ShoppingProfilePage;
  let fixture: ComponentFixture<ShoppingProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
