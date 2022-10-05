import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './components/container/product-details/product-details.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path:'product_items/:id',component:ProductDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductManagementRoutingModule { }
