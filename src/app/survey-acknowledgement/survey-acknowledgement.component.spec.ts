import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAcknowledgementComponent } from './survey-acknowledgement.component';

describe('SurveyAcknowledgementComponent', () => {
  let component: SurveyAcknowledgementComponent;
  let fixture: ComponentFixture<SurveyAcknowledgementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyAcknowledgementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyAcknowledgementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
