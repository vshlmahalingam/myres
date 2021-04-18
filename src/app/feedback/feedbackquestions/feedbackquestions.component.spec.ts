import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackquestionsComponent } from './feedbackquestions.component';

describe('FeedbackquestionsComponent', () => {
  let component: FeedbackquestionsComponent;
  let fixture: ComponentFixture<FeedbackquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
