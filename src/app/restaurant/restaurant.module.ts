import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import {FormsModule} from '@angular/forms'
import{NgbModule} from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    RestaurantComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RestaurantRoutingModule,NgbModule
  ],
  exports:[
    RestaurantComponent
  ]
})
export class RestaurantModule { }
