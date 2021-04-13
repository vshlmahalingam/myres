import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItembucketRoutingModule } from './itembucket-routing.module';
import { ItembucketComponent } from './itembucket.component';

import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    ItembucketComponent
  ],
  imports: [
    CommonModule,
    ItembucketRoutingModule,
    ReactiveFormsModule
  ]
})
export class ItembucketModule { 

}
