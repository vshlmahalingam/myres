import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent implements OnInit {

  @Input() hotel;
  example:string;
  @Output() add:EventEmitter<any>=new EventEmitter();
  constructor(private router: Router) { 

    //       const navigation = this.router.getCurrentNavigation();
    // const state = navigation.extras.state as {example: string};
    // this.example = state.example;
  }

  onorderclick(data){
    this.add.emit(data.innerText);
  }


  ngOnInit(): void {
    console.warn(this.hotel.name);

  }



}
