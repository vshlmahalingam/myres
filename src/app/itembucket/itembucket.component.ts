import { Component, OnInit } from '@angular/core';
import{FormControl} from '@angular/forms'

@Component({
  selector: 'app-itembucket',
  templateUrl: './itembucket.component.html',
  styleUrls: ['./itembucket.component.css']
})
export class ItembucketComponent implements OnInit {
  myreactive= new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
