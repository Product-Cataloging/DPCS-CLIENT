import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.scss']
})
export class ProductListViewComponent implements OnInit {

  @Input() cardTitle: string = '';
  @Input() cardImage: string = '';
  @Input() cardId:any='';
  constructor() { }

  ngOnInit(): void {
  }

}
