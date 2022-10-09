import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-list-view',
  templateUrl: './cart-list-view.component.html',
  styleUrls: ['./cart-list-view.component.scss']
})
export class CartListViewComponent implements OnInit {

  @Input() listTitle:string = "";
  @Input() listPrice:number = 0;
  @Input() listDimensions:string = "";
  @Input() listImage:string = "";
  @Output() cancelClick = new EventEmitter<any>;
  @Output() sendRequestClick = new EventEmitter<any>;

  constructor() { }

  ngOnInit(): void {
  }
  onCancelClick(event:Event){
   this.cancelClick.emit();
  }
  onSendRequestClick(){
    this.sendRequestClick.emit();
   }
}
