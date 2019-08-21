import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealImageGalleryPage } from './real-image-gallery.page';

describe('RealImageGalleryPage', () => {
  let component: RealImageGalleryPage;
  let fixture: ComponentFixture<RealImageGalleryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealImageGalleryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealImageGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
