import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RestaurantModule} from '../restaurant/restaurant.module'
import { OffersRoutingModule } from './offers-routing.module';
import { OffersComponent } from './offers.component';


@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    CommonModule,
    OffersRoutingModule,
    RestaurantModule
  ]
})
export class OffersModule { }
