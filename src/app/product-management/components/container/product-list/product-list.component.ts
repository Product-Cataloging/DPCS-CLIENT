import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product-management/models/product.model';
import { ProductQuery } from 'src/app/product-management/state/product/product.query';
import { ProductService } from 'src/app/product-management/state/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products$:Observable<Product[]> = this.query.selectAll(); 
  constructor(private service:ProductService,
              private query:ProductQuery) {
        this.service.get().subscribe();
  }

  ngOnInit(): void {
  }

}
