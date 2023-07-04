import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';


 const routes:Routes=[
  {
    path: 'add', component: NewProductComponent
  }

 ]
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
