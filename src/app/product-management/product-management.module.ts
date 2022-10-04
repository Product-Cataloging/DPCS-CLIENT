import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { AppCommonModule } from '../app.common.module';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductListViewComponent } from './components/ui/product-list-view/product-list-view.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductListViewComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    AppCommonModule
  ]
})
export class ProductManagementModule { }
