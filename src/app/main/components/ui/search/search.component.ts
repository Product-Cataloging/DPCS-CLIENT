import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product-management/state/product/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value:string ="";
  @Input() searchValue:string = '';

  results: any[] = [];

  

  supplierName:string = '';
  categoryName:string = '';
  productName:string=  '';
  constructor(private productService: ProductService) { 
 
  }

  ngOnInit(): void {
  }

  search(event:any) {
    this.results = ['Hello']
    // this.mylookupservice.getResults(event.query).then(data => {
    //     this.results = data;
    // });
}
searchValueChange(){
  console.log(this.searchValue);
  const keyValue= {
    "payload":{
    'keyword':this.searchValue,
  }
}
  this.productService.search(keyValue).subscribe();

}
}
