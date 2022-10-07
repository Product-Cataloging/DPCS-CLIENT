import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details-view',
  templateUrl: './product-details-view.component.html',
  styleUrls: ['./product-details-view.component.scss']
})
export class ProductDetailsViewComponent implements OnInit {

  @Input() boardTitle: string = '';
  @Input() boardImage: string = '';
  @Input() boardDescription:string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
