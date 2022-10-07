import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { ProductDetail } from '../../models/product-detail.model';

export interface ProductDetailState extends EntityState<ProductDetail> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'product-detail' })
export class ProductDetailStore extends EntityStore<ProductDetailState> {

  constructor() {
    super();
  }

}
