import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-restaurantdetails',
  templateUrl: './restaurantdetails.component.html',
  styleUrls: ['./restaurantdetails.component.css']
})
export class RestaurantdetailsComponent implements OnInit {

  example:string;
  constructor(private router: Router) { 
          const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {example: string};
    this.example = state.example;
  }


  ngOnInit(): void {
    
  }



}
