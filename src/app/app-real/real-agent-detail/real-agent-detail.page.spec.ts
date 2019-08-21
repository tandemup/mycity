import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAgentDetailPage } from './real-agent-detail.page';

describe('RealAgentDetailPage', () => {
  let component: RealAgentDetailPage;
  let fixture: ComponentFixture<RealAgentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealAgentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealAgentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
