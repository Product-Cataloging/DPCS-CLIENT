import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { MenuQuery } from 'src/app/main/state/menu/menu.query';
import { MenuService } from 'src/app/main/state/menu/menu.service';
import { Cart } from 'src/app/product-management/models/cart.model';
import { CartQuery } from 'src/app/product-management/state/cart/cart.query';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  menus$:Observable<MenuItem[]> = this.query.selectMenuItems();
  orderCount: Observable<number> = this.cartQuery.selectCount();

  constructor(private query:MenuQuery,
    private service:MenuService,
    private cartQuery:CartQuery) { 
    this.service.get().subscribe();
  }

  ngOnInit(): void {
  }

 
}
