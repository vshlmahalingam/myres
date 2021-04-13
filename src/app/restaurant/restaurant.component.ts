import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popname ='dhoni';
  data=[{name:'copper kitchen',place:'chennai'},
  {name:'SS hydrabad',place:'chennai'},
  {name:'Ambur ',place:'chennai'},
  {name:'Salem RR',place:'chennai'}];
  getoffer(name :any){
    alert('welcome to!' + name);
  }

}
