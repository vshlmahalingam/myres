import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import{MatButtonModule  } from '@angular/material/button'
import{MatInputModule } from '@angular/material/input';
import{MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,MatButtonModule,MatInputModule,MatIconModule
  ]
})
export class SearchModule { 

}
