import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './components/container/cart-list/cart-list.component';
import { ProductDetailsComponent } from './components/container/product-details/product-details.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path:'product_items/:id',component:ProductDetailsComponent},
  { path:'cart', component:CartListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
