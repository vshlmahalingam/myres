import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';


const routes: Routes = [
  { path: '', component: RestaurantComponent },
  {path:'restaurantdetails',component:RestaurantdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
