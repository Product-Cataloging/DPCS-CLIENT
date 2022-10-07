import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetail } from 'src/app/product-management/models/product-detail.model';
import { ProductDetailQuery } from 'src/app/product-management/state/product-detail/product-detail.query';
import { ProductDetailService } from 'src/app/product-management/state/product-detail/product-detail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  products$: Observable<ProductDetail[]> = this.query.selectAll();
  constructor(private service:ProductDetailService,
              private query:ProductDetailQuery,
              private route:ActivatedRoute) { 
              
              }

  ngOnInit(): void {
   
    const product_id :any = this.route.snapshot.paramMap.get('id');                 
    this.service.get(product_id).subscribe();

  }

}
