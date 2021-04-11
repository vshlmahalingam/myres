import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItembucketRoutingModule } from './itembucket-routing.module';
import { ItembucketComponent } from './itembucket.component';


@NgModule({
  declarations: [
    ItembucketComponent
  ],
  imports: [
    CommonModule,
    ItembucketRoutingModule
  ]
})
export class ItembucketModule { }
