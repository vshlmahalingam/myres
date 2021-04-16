import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

  constructor(private router:Router) { }
  err=true;
  getvalues(val){
    alert(val);

  }
  getdetails(resname){
   // console.log(resname)
    this.router.navigate(['restaurant/restaurantdetails'], { state: { example: resname.innerText }});
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

  allrestaurant=[
{name:"aaa",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"bbb",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"ccc",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"ddd",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"ddd",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"ddd",price:"350 for 2",offer:"20%",time:"30mins"},
{name:"ddd",price:"350 for 2",offer:"20%",time:"30mins"},

{name:"ddd",price:"350 for 2",offer:"20%",time:"30mins"},

{name:"eee",price:"350 for 2",offer:"20%",time:"30mins"}


  ]

  data=[{name:'copper kitchen',place:'chennai'},
  {name:'SS hydrabad',place:'chennai'},
  {name:'Ambur ',place:'chennai'},
  {name:'Salem RR',place:'chennai'}];
  getoffer(name :any){
    alert('welcome to!' + name);
  }

}
