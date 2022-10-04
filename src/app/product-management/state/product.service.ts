import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ProductStore } from './product.store';

@Injectable({ providedIn: 'root' })
export class ProductService {

  constructor(private productStore: ProductStore, private http: HttpClient) {
  }


  
  get() {
    const url =`${environment.apiUrl}/products`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.productStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }

  add(product: Product) {
    this.productStore.add(product);
  }

  update(id:any, product: Partial<Product>) {
    this.productStore.update(id, product);
  }

  remove(id: ID) {
    this.productStore.remove(id);
  }

}
