import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component'
import{MatButtonModule  } from '@angular/material/button'
import{MatIconModule } from '@angular/material/icon';
import { DishesComponent } from './dishes/dishes.component'


@NgModule({
  declarations: [
    RestaurantComponent,
    RestaurantdetailsComponent,
    DishesComponent
  ],
  imports: [
    CommonModule, FormsModule,
    RestaurantRoutingModule, NgbModule,MatButtonModule,MatIconModule
  ],
  exports: [
    RestaurantComponent
  ]
})
export class RestaurantModule { }
