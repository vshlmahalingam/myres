import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'

import {ResdatadetailsService} from '../services/resdatadetails.service'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  allrestaurant :any;
  constructor( private resdata:ResdatadetailsService) {

     this.resdata.getdata().subscribe(data=>{
      this.allrestaurant=data;
      });
   }
  err=true;
  getvalues(val){
    alert(val);

  }


  addtocart(data){
    console.log(data +'welcome');

  }
  getdetails(resname){
   // console.log(resname)
    //this.router.navigate(['restaurant/restaurantdetails'], { state: { example: resname.innerText }});
   // this.router.navigate(['/dashboard']);
  }
  info=[{priority:"5",time:"testme"},
  {priority:"15",time:"testme"},
  {priority:"10",time:"testme"},
  {priority:"21",time:"testme"}
]

getClass(priority){
  
  return {'message': priority < 6,
                'warn': priority > 10 && priority <20, 
                'error fa fa-exclamation-triangle': priority > 20}

}

  ngOnInit(): void {
  }
  popname ='dhoni';



  // data=[{name:'copper kitchen',place:'chennai'},
  // {name:'SS hydrabad',place:'chennai'},
  // {name:'Ambur ',place:'chennai'},
  // {name:'Salem RR',place:'chennai'}];


  getoffer(name :any){
    alert('welcome to!' + name);
  }

}
