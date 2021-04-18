import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatCalendarCellClassFunction} from '@angular/material/datepicker';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OffersComponent implements OnInit {
  mydate='';

  dateOfoffer=new FormControl();

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      // console.warn(date);
      // Highlight the 1st and 20th day of each month.
    //  return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
    }
    
    return '';
  }
  OnDate(data){
    console.warn(data);
  }
  
  constructor() { }

  ngOnInit(): void {
  //  console.warn(this.picker);
  }
  

}
