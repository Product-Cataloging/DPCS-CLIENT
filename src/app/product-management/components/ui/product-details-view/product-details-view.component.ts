import { Component, Input, OnInit } from '@angular/core';
import { ProductDetail } from 'src/app/product-management/models/product-detail.model';
import { Product } from 'src/app/product-management/models/product.model';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {

  @Input() boards:Product[] | null = null; 
  @Input() product_items:ProductDetail[] |null = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
