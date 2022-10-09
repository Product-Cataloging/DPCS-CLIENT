import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Cart } from '../../models/cart.model';
import { CartStore } from './cart.store';

@Injectable({ providedIn: 'root' })
export class CartService {

  constructor(private cartStore: CartStore, private http: HttpClient) {
  }
  globalCart:Cart[] = [];
  get() {
    const url =`${environment.apiUrl}/cart`;
    return this.http.get(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.cartStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }
  add(payload: Cart) {
    const url =`${environment.apiUrl}/cart`;
    return this.http.post(url,payload).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.cartStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }


  remove(id:number) {
    const url =`${environment.apiUrl}/cart/${id}`;
    return this.http.delete(url).pipe(
      tap({next: (response: any) => {
        if (response.success) {
          this.cartStore.set(response.data);
        } else {
          console.log(response.error)
       }
      }, error: (err) => console.log(err)
       })
    )
  }

  addItem(payload:any){

    this.globalCart.push(payload);        
    this.cartStore.set(this.globalCart);
  }
  removeItem(id:number){       
    let rData = this.globalCart.findIndex((data)=> data.id === id );
    this.globalCart.splice(rData,1);
    this.cartStore.set(this.globalCart);
  }
}
