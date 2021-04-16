import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component'
import{MatButtonModule  } from '@angular/material/button'

@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantdetailsComponent
  ],
  imports: [
    CommonModule, FormsModule,
    RestaurantRoutingModule, NgbModule,MatButtonModule
  ],
  exports: [
    RestaurantComponent
  ]
})
export class RestaurantModule { }
