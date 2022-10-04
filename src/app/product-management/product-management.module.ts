import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductListViewComponent } from './ui/product-list-view/product-list-view.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductListViewComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
