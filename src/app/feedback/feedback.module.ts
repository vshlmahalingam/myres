import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackRoutingModule } from './feedback-routing.module';
import { FeedbackComponent } from './feedback.component';
import { FeedbackquestionsComponent } from './feedbackquestions/feedbackquestions.component';


@NgModule({
  declarations: [
    FeedbackComponent,
    FeedbackquestionsComponent
  ],
  imports: [
    CommonModule,
    FeedbackRoutingModule
  ]
})
export class FeedbackModule { }
