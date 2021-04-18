import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { RestaurantdetailsComponent } from './restaurantdetails/restaurantdetails.component';
import { DishesComponent } from './dishes/dishes.component';


const routes: Routes = [
  { path: '', component: RestaurantComponent },
   {path:'dishes',component:DishesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
