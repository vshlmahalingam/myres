import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {RouterModule,Router  } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username= new FormControl('');
  showlogout=false;
  test='test123@gmail.com'
  constructor(private router:Router) {}
  fulname='';
  disablelogin=false;
  ngOnInit(): void {

  }

  onSubmit(data){
    console.warn(data);
  }
  onlogin(user:any)
  {
    this.disablelogin=true;
    this.showlogout=false;
    this.fulname=user;
     console.warn(user);

    this.router.navigate(['/dashboard']);

  }
  onlogout(user:any)
  {
    this.disablelogin=false;
    alert('Thanks ' + user);
  }
  onsavetext(name:any){
    this.username=name;
    console.log(name);
  }

  onsaveblur(name:any){
    this.username=name;
    console.log('blur'+name);
  }

}
