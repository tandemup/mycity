import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealAgentPage } from './real-agent.page';

describe('RealAgentPage', () => {
  let component: RealAgentPage;
  let fixture: ComponentFixture<RealAgentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealAgentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealAgentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
