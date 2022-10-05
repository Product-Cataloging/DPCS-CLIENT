import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ProductDetailStore, ProductDetailState } from './product-detail.store';

@Injectable({ providedIn: 'root' })
export class ProductDetailQuery extends QueryEntity<ProductDetailState> {

  constructor(protected override store: ProductDetailStore) {
    super(store);
  }

}
