import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hotelname = "OhOh Restaurant";

  getname(){
    return this.hotelname;
  }

  test ={
    Name:'vishal',
    age :'10'
  }
}
