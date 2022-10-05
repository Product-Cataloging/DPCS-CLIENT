import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { AppCommonModule } from '../app.common.module';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductListViewComponent } from './components/ui/product-list-view/product-list-view.component';
import { ProductDetailsViewComponent } from './components/ui/product-details-view/product-details-view.component';
import { ProductDetailsComponent } from './components/container/product-details/product-details.component';
import { CartListViewComponent } from './components/ui/cart-list-view/cart-list-view.component';
import { CartListComponent } from './components/container/cart-list/cart-list.component';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductListViewComponent,
    ProductDetailsViewComponent,
    ProductDetailsComponent,
    CartListViewComponent,
    CartListComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule,
    AppCommonModule
  ]
})
export class ProductManagementModule { }
