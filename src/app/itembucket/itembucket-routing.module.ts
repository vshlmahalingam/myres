import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItembucketComponent } from './itembucket.component';

const routes: Routes = [{ path: '', component: ItembucketComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItembucketRoutingModule { }
