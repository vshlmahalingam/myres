import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

const routes: Routes = [{ path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'restaurant', loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule) }, 
 { path: 'offers', loadChildren: () => import('./offers/offers.module').then(m => m.OffersModule) }, 
 { path: 'Itembucket', loadChildren: () => import('./itembucket/itembucket.module').then(m => m.ItembucketModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
