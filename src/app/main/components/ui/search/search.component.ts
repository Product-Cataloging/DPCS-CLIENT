import { Component, OnInit } from '@angular/core';
import { SearchList } from 'src/app/main/models/search-list.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  value:string ="";
  text: string= '';

  results: any[] = [];

  

  supplierName:string = '';
  categoryName:string = '';
  productName:string=  '';
  constructor() { 
 
  }

  ngOnInit(): void {
  }

  search(event:any) {
    console.log(event.value)
    this.results = ['Hello']
    // this.mylookupservice.getResults(event.query).then(data => {
    //     this.results = data;
    // });
}
}
