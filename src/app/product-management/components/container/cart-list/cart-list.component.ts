import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/product-management/models/cart.model';
import { CartQuery } from 'src/app/product-management/state/cart/cart.query';
import { CartService } from 'src/app/product-management/state/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  listTitle = 'Hello';
  carts:Observable<Cart[]> = this.query.selectAll();
  
  constructor(private query:CartQuery,
              private service:CartService) {}

  ngOnInit(): void {}
  onCancelClick(id:number) {
    this.service.removeItem(id);
  }
  onSendRequestClick() {
  }
}
