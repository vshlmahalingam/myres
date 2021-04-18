import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-feedbackquestions',
  templateUrl: './feedbackquestions.component.html',
  styleUrls: ['./feedbackquestions.component.css']
})
export class FeedbackquestionsComponent implements OnInit {

  @Input() ques;
  constructor() { }

  ngOnInit(): void {
  }

}
