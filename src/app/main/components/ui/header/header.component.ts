import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from 'src/app/product-management/models/cart.model';
import { ProductService } from 'src/app/product-management/state/product/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() orderCount: any ;
  @Output() menuClick = new EventEmitter<any>;
  searchValue:string = '';  
  constructor() { }

  ngOnInit(): void {
  }
  onMenuClick(){
    this.menuClick.emit();
  }

}
