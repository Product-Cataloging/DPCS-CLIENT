import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductQuery } from 'src/app/product-management/state/product/product.query';
import { ProductService } from 'src/app/product-management/state/product/product.service';
import { ProductStore } from 'src/app/product-management/state/product/product.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {

  products$: Observable<Product[]> = this.query.selectAll();
  constructor(
    private service: ProductService,
    private query: ProductQuery,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const product_id = params.get('id');
      if (product_id === null) {
        this.service.get().subscribe();
      } else {
        this.service.getProducts(product_id).subscribe();
      }
    });

    this.service.get().subscribe();
  }


  ngOnInit(): void {}
}
